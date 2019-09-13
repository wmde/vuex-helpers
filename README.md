# vuex-helpers
Helper functions to ease working with Vuex, Centralized State Management for Vue.js.

## Development

The following examples use `docker` and `docker-compose` to ease creating a level playing field for development but are not essential to this project.

### Building Docker image

```sh
# ensure the node user uses your user id, so you own created files
docker-compose build --build-arg UID=$(id -u) --build-arg GID=$(id -g) node
```

### Installation

```sh
docker-compose run --rm node npm install
```
