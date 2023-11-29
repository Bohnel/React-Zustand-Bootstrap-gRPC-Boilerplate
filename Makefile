BUILD_FOLDER=.
DOCKER_FOLDER=$(BUILD_FOLDER)/

REGISTRY=

DOCKERFILE=$(DOCKER_FOLDER)Dockerfile
DOCKERFILE_NODE=$(DOCKER_FOLDER)Dockerfile_Node
DOCKER_ARGS=""

CWD=$(shell pwd)

.DEFAULT: help
.PHONY: help build

image:
	@read -p "private ssh key: " PRIV_KEY; \
	read -p "Image tag (Version): " IMAGE_VERSION_TAG;\
	DOCKER_BUILDKIT=1 docker build --ssh gitlab=${HOME}/.ssh/$$PRIV_KEY --force-rm -t $(REGISTRY):$$IMAGE_VERSION_TAG $(DOCKER_ARG) -f $(DOCKERFILE) .

image_push:
	@read -p "Image tag (Version): " IMAGE_VERSION_TAG;\
		docker push $(REGISTRY):$$IMAGE_VERSION_TAG
