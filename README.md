# Research Website

React + Vite website for the Dynamic Route Optimization research paper.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment

The project includes `vercel.json` with the required static deployment settings:

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

Vercel will deploy the generated static files from `dist`.

## Docker Deployment

Build and run the production container:

```bash
docker build -t research-website .
docker run --rm -p 8080:80 research-website
```

Or use Docker Compose:

```bash
docker compose up --build
```

The Docker image builds the Vite app and serves the static output through Nginx.
