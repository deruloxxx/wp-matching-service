dev:
	make dev:web & make dev:core
dev\:web:
	cd web && yarn dev
dev\:core:
	cd core && yarn start:dev

setup:
	make setup:web & make setup:core
setup\:web:
	cd web && yarn install
setup\:core:
	cd core && yarn install
