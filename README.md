# TodoApp

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using Docker for development and deployment.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To run the development server:

```bash
# Build and start the containers
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stopping the Application

To stop the application:

```bash
# If running in attached mode, use Ctrl+C, then:
docker-compose down

# If running in detached mode:
docker-compose down

# To stop and remove volumes (this will delete the database data):
docker-compose down -v
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   └── ...
├── public/
│   └── ...
├── docker-compose.yml
├── Dockerfile
├── init.sql
├── package.json
└── README.md
```
