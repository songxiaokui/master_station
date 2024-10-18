GIT_COMMIT=$(shell git log -n 1 --pretty=format:"%H" | cut -c 1-8)
GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
DATE=$(shell date +"%Y%m%d%H")
VERSION?=${GIT_BRANCH}.${GIT_COMMIT}.${DATE}

.PHONY: install
install:  ## install dependence
	@npm install

.PHONY: run
run:  ## run dev
	@npm run dev

.PHONY: build
build:  # build images
	@docker build -t austsxk/mater_station:${VERSION} -f Dockerfile .
	@docker push  austsxk/mater_station:${VERSION}

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)
.DEFAULT_GOAL=help
.PHONY=help