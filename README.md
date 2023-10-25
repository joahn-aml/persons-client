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

[The server codebase](https://github.com)

The demo server is used by default in both `development` and `production` mode.

- To change the server API endpoint for both `development` and `production` change the `VITE_GRAPHQL_API` env variable in the `.env` file.
- To change the server API endpoint for `development` set the `VITE_GRAPHQL_API` env variable in the `.env.development` file.
- To change the server API endpoint for `production` set the `VITE_GRAPHQL_API` env variable in the `.env.production` file.

_The more specific `.env.[mode]`-files will have priority over the `.env`-file_

## Demo

TODO: Link here
