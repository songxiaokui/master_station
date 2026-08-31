GIT_COMMIT=$(shell git log -n 1 --pretty=format:"%H" | cut -c 1-8)
GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
DATE=$(shell date +"%Y%m%d%H")
VERSION?=${GIT_BRANCH}.${GIT_COMMIT}.${DATE}
IMAGE?=austsxk/mater_station
PLATFORMS?=linux/amd64,linux/arm64
# docker-container driver builder (required for multi-platform builds;
# the default "docker" driver only builds a single platform)
BUILDER?=multiarch-builder

.PHONY: install
install:  ## install dependence
	@npm install

.PHONY: run
run:  ## run dev
	@npm run dev

.PHONY: build
build:  ## build & push multi-arch images (${PLATFORMS})
	@docker buildx inspect ${BUILDER} >/dev/null 2>&1 || \
		docker buildx create --name ${BUILDER} --driver docker-container --bootstrap
	@docker buildx build \
		--builder ${BUILDER} \
		--platform ${PLATFORMS} \
		--provenance=false \
		-t ${IMAGE}:${VERSION} \
		-t ${IMAGE}:latest \
		-f Dockerfile \
		--push .

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)
.DEFAULT_GOAL=help
.PHONY=help