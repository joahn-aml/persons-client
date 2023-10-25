# Persons Client

A Single Page App client to view, create and delete dummy persons from a GraphQL API server.

## Requirements

- [Nodejs](https://nodejs.org/en)

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [URQL](https://formidable.com/open-source/urql/)
- [MUI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Development

- `npm install`
- `npm run dev`
- Open `http://localhost:5173/` in a browser.

## Production

- `npm install`
- `npm run build`
- `npm run preview`
- Open `http://localhost:4173/` in a browser.

## Server

The server codebase:
[https://github.com/joahn-aml/persons-server](https://github.com/joahn-aml/persons-server)

Demo server:
[https://persons-server.vercel.app/api/graphql](https://persons-server.vercel.app/api/graphql)

The demo server is used by default in `development` and `production` mode.

- To change the server API endpoint in `development` and `production` modes change the `VITE_GRAPHQL_API` env variable in the `.env` file.
- To change the server API endpoint in `development` mode set the `VITE_GRAPHQL_API` env variable in the `.env.development` file.
- To change the server API endpoint in `production` mode set the `VITE_GRAPHQL_API` env variable in the `.env.production` file.

_The more specific `.env.[mode]`-files have priority over the `.env`-file_

## Demo

[https://persons-client.vercel.app/](https://persons-client.vercel.app/)
