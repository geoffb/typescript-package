# Template: TypeScript ES6/CommonJS Package

This repository is a template for [JavaScript](https://en.wikipedia.org/wiki/JavaScript) packages written in [TypeScript](https://www.typescriptlang.org) and distributed via services like [npm](https://www.npmjs.com).

In order to be compatible with as many consumers as possible, the package's TypeScript code is complied to both [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and ["ES6" module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) formats. This allows the package to be consumed by runtimes like [Node.js](https://nodejs.org) or parsed by bundlers like [rollup.js](https://rollupjs.org/guide/en/).

## Features

* :memo: TypeScript [transpilation](https://en.wikipedia.org/wiki/Source-to-source_compiler)
* :shirt: TypeScript linting via [eslint](https://eslint.org)
* :white_check_mark: TypeScript unit test runner via [tape](https://github.com/substack/tape), which produces [Test Anything Protocol](https://en.wikipedia.org/wiki/Test_Anything_Protocol)
* :page_facing_up: [ISC license](https://en.wikipedia.org/wiki/ISC_license)

## Metadata

There's always some metadata to update when using boilerplate code, so make sure to do the following:

* Update the package's `name`, `version`, `description`, `author`, etc in `package.json`
* Update the `LICENSE.md` with the appropriate year and owner
* Update the `CHANGELOG.md` with your package's changes
* Remove the `private: true` flag from `package.json` (if you intend to publish to npm)
* Replace this `README.md` with your own :smile:
