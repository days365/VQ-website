build:
	gulp build

run:
	gulp

docker/build:
	docker build --rm -f Dockerfile --platform=linux/amd64 -t stage-wonderplanet-vq-game-notice:latest .

docker/push:
	docker tag stage-wonderplanet-vq-game-notice:latest asia.gcr.io/pj-wonderplanet-vq-game-notice/stage-wonderplanet-vq-game-notice:latest
	docker push asia.gcr.io/pj-wonderplanet-vq-game-notice/stage-wonderplanet-vq-game-notice:latest
