.PHONY: all setup dev build test start clean

all: setup build test

setup:
	npm run setup

dev:
	npm run dev

build:
	npm run build

test:
	npm run test

start:
	npm run start

clean:
	rm -rf dist server/dist client/dist node_modules server/node_modules client/node_modules
