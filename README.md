# freecloud web

[![Greenkeeper badge](https://badges.greenkeeper.io/freecloudio/web.svg)](https://greenkeeper.io/)

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
npm run start
```

This will start the development server, so you can start hacking right away.

```sh
npm run test
```

This runs the unit tests by starting `jest`. For more info on how to use jest, see: [jestjs.io](https://jestjs.io/).

```sh
npm run build
```

This does a production build of the client. This build is optimized for performance and therefore should not be used during development.

### Development flow

We generally follow the **GitFlow** principle. This means that the `develop` branch is the primary branch to contribute to. To do so, please create a feature branch containing the most specific set of changes you can create (so don't implement two new features in one branch). Then, open a PR to get your code merged into `develop`. 

At some point, the `develop` branch gets merged into the `release` branch. All features in the `release` branch should be properly tested! The `release` branch marks a stable state which can be released to the public. 

After merging to `release`, our CI will build the frontend and push it to the `master` branch. A pull request will the be opened on the server repo, to indicate that a new version of the client has been released.

*Note that the above is very much WIP!*
