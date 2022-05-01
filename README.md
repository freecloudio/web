# freecloud web

This is the official freecloud web client, written in React + Typescript.

## Contributing

So you want to contribute to freecloud web? That's super awesome!

There are multiple ways to contribute:

- By fixing bugs
- Developing cool new features
- Cleaning up the code
- Writing and improving translations

## Development Setup

### Requirements

To get your machine setup for contributing to freecloud web, install the latest versions of [NodeJS](https://nodejs.org) and [NPM](https://npmjs.com). Since this repository uses NPM workspaces, you'll need _at least_ NPM v7.

Next, clone the repository and run `npm install` in it.
This will install all NPM packages and link our packages together.

### Running the app

To run a development server in all packages, use `npm run dev`. This will watch for changes & recompile library packages and will also start a dev server for the main web app.

For our component library, we also provide a storybook, so running `npm run -w packages/components storybook` will open it.

### Building a production bundle

To build an optimized production build, use `npm run build`. This will build all dependencies and packages.
