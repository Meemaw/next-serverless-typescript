<!-- Name -->

<h1 align="center">
  <a href="https://github.com/Meemaw/next-serverless-typescript">next-serverless-typescript</a>
</h1>

<!-- Badges -->

<p align="center">

  <a href="http://makeapullrequest.com">
    <img alt="Make a pull request" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>

  <a href="https://opensource.org/">
    <img alt="Open Source" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"/>
  </a>

</p>

> Your best friend for bulding SSR application with [next.js](https://nextjs.org/)

### Features

- Minimal setup to get your application up and running AWS lambda
- [Next.js](https://nextjs.org/) 8.0
- Static type-checking with [Typescript](https://www.typescriptlang.org/)
- Linting with [prettier](https://github.com/prettier/prettier)
- Unit testing with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- E2E testing with [Testcafe](https://github.com/DevExpress/testcafe)

### Getting started

###### Locally

```sh
yarn install                              // install dependencies
yarn dev                                  // run application locally
yarn build                                // build the app
yarn test                                 // run unit tests
```

###### Serverless

```sh
serverless invoke local -f app            // test AWS lambda function locally
serverless offline | yarn offline         // emulate AWS lambda with API Gateway locally
```

###### AWS

```deploy
yarn deploy                               // deploy to AWS
```
