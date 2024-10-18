
.PHONY: install
install:  ## install dependence
	@npm install

.PHONY: run
run:  ## run dev
	@npm run dev

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)
.DEFAULT_GOAL=help
.PHONY=help