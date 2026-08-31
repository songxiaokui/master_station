# Multi-arch: each target platform is built natively per-stage (base images are
# multi-arch manifests). Build both amd64 + arm64 with:
#   make build   (docker buildx build --platform linux/amd64,linux/arm64 --push ...)
FROM node:lts-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN apk add --no-cache gcompat && corepack enable pnpm && pnpm i --prod --frozen-lockfile

FROM deps AS builder
WORKDIR /app
RUN pnpm i
COPY . .
RUN pnpm run build

FROM alpine AS runner
WORKDIR /app
RUN apk add --no-cache libstdc++ dumb-init \
  && addgroup -g 1000 node && adduser -u 1000 -G node -s /bin/sh -D node \
  && chown node:node ./
COPY --from=builder /usr/local/bin/node /usr/local/bin/
COPY --from=builder /usr/local/bin/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
USER node

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD ["dumb-init", "node", "./dist/server/entry.mjs"]
