# Cycling Quotes API

![build-test](https://github.com/mskian/cycling-quotes-api/workflows/build-test/badge.svg)  

Cycling Quotes JSON API - Build using Prisma, Express and TypeScript  

> Better self Host this API Service for 100% Uptime  

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Fmskian%2Fcycling-quotes-api.git)  

```sh

### GET - Get Random single Quotes
http://localhost:4003/random

### GET - Get all the Quotes from db
http://localhost:4003/quotes

### GET -Get single Quotes by id
http://localhost:4003/quotes/1

### POST - Post New Quotes
http://localhost:4003/push

Content-Type: application/json

{
  "quotes": "Hello World",
  "author": "Hello"
}

### PATCH - Update a Quotes
http://localhost:4000/push/1

Content-Type: application/json

{
  "author": "Hello World",
  "name": "Hello"
}

### DELETE - Delete a Quotes
http://localhost:4003/push/1

```

## Stack Specs

- Node.js
- Express
- TypeScript
- Prisma
- Sqlite

## Development

- Clone the repository

```sh
git clone https://github.com/mskian/cycling-quotes-api.git
```

- Open project directory

```sh
cd cycling-quotes-api
```

- Install dependencies

```sh
yarn
```

- Start Dev Server

```sh
yarn dev
```

## Prisma Setup

- Migrate and Sync Database

```sh
npx prisma migrate dev
```

- Reset Database

```sh
npx prisma migrate reset
```

- Browser interference for Managing Database

```sh
npx prisma studio
```

## Production

- Run the production build

```sh
yarn build
```

- Start the production server

```sh
yarn start
```

Quotes Credit - [90 Best Cycling Quotes To Motivate You](https://kidadl.com/articles/best-cycling-quotes-to-motivate-you)  

## LISENSE

MIT
