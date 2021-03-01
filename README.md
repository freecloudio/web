# freecloud web

This is the official freecloud web client, written in React + Typescript.

## Contributing

So you want to contribute to freecloud web? That's super awesome!

There are multiple ways to contribute:

- By fixing bugs
- Developing cool new features
- Cleaning up the code
- Writing and improving translations

### Development Setup

To get your machine setup for contributing to freecloud web, install the latest versions of [NodeJS](https://nodejs.org) and [NPM](https://npmjs.com).
Then clone the repository and run `npm install` to install all dependencies.

We provide several scripts which will make development easier.

```sh
npm start
```

This will start the development server, so you can start hacking right away.

```sh
npm test
```

This runs the unit tests by starting `jest`. For more info on how to use jest, see: [jestjs.io](https://jestjs.io/).

```sh
npm run build
```

This does a production build of the client. This build is optimized for performance and therefore should not be used during development.
