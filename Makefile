dev:
	make dev:web & make dev:core
dev\:web:
	cd web && yarn dev
dev\:core:
	cd core && yarn start:dev
