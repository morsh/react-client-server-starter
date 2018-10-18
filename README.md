# React Client Server Starter
A starter kit for developing projects using:

- React (16.3.2)
- create-react-app
- TypeScript (2.8.3)
- react-scripts-ts (2.16.0)
- [mobx (5.0.2)](https://mobx.js.org)
- sass compilation (node-sass)
- [react-md (1.4.0) - Integrated Material Design](https://react-md.mlaursen.com/)
- Client SPA with navigation
- Node.JS
- AAD Authentication
- Clinet-Server API
- Production ready build

This starter kit was tested on Windows Ubuntu Bash.

# Install

Dev:
```sh
npm run install:dev
```

Production:
```sh
npm install
```

# Run

Dev:
```sh
npm run start:dev
```

Production:
```sh
npm start
```

# Build

```sh
npm run build
```

# Production

For this sample to run in production you'll need:

1. To build the solution using `npm run build`
2. To run `npm start` to start the server (The client is only used during development and testing)

To do that you'll have to take one of the following appoaches:

1. Build in dev (or other pre-prod) environment, check-in the `./build` folder
2. Build in production - this will require running `npm run install:dev` and is not advisable