# Deploy Starter

A simple Vite application packaged for Docker and configured to redeploy from GitHub Actions when changes are pushed to `main`.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Docker

Build and run the production container with Docker Compose:

```sh
docker compose up -d --build
```

The app is served at http://localhost:8080.

## GitHub deployment workflow

The workflow at `.github/workflows/deploy-on-merge.yml` runs on every push to `main`. It connects to your server with SSH, pulls the latest `main`, and rebuilds the Compose stack.

Set these repository variables in GitHub:

- `SSH_HOST`: server host or IP address
- `SSH_PORT`: SSH port, usually `22`
- `SSH_USER`: SSH username
- `DEPLOY_PATH`: absolute path to this project on the server

Set this repository secret in GitHub:

- `SSH_PRIVATE_KEY`: private key for the deploy user

On the server, clone the repo into `DEPLOY_PATH` once and make sure Docker Compose works for that user.