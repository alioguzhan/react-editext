# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.0](https://github.com/alioguzhan/react-editext/compare/v4.2.1...v5.0.0) (2022-07-14)


### ⚠ BREAKING CHANGES

* **deps:** minimum supported node version is now 12

### chore

* **deps:** drop support for NodeJS 10 ([6303a2b](https://github.com/alioguzhan/react-editext/commit/6303a2bcfefdf322e8e7f000afaefedcd62056b1))

### [4.2.1](https://github.com/alioguzhan/react-editext/compare/v4.2.0...v4.2.1) (2021-09-30)


### Bug Fixes

* **security:** upgrade deps ([6b1b40f](https://github.com/alioguzhan/react-editext/commit/6b1b40f5c873f4287fe31321b9923a704961e053))

## [4.2.0](https://github.com/alioguzhan/react-editext/compare/v4.1.5...v4.2.0) (2021-08-23)


### Features

* add `canEdit` and `editButtonProps` ([1c0b224](https://github.com/alioguzhan/react-editext/commit/1c0b2241075812146fc235b3558253c7cba8be93)), closes [#127](https://github.com/alioguzhan/react-editext/issues/127)

### [4.1.5](https://github.com/alioguzhan/react-editext/compare/v4.1.4...v4.1.5) (2021-05-17)


### Bug Fixes

* onChange handler is being ignored when passed with inputProps [#119](https://github.com/alioguzhan/react-editext/issues/119) ([6443a1f](https://github.com/alioguzhan/react-editext/commit/6443a1f9090d4c7e0607b0720e802827dd45de44))

### [4.1.4](https://github.com/alioguzhan/react-editext/compare/v4.1.3...v4.1.4) (2021-05-13)


### Bug Fixes

* cannot import 'react/jsx-runtime' ([e9e90fb](https://github.com/alioguzhan/react-editext/commit/e9e90fb5c6a3395ebd8418b3fc08c6283ba3cae7))

### [4.1.3](https://github.com/alioguzhan/react-editext/compare/v4.1.2...v4.1.3) (2021-05-12)

### [4.1.2](https://github.com/alioguzhan/react-editext/compare/v4.1.1...v4.1.2) (2021-05-12)


### Bug Fixes

* Export EdiTextProps interface ([#114](https://github.com/alioguzhan/react-editext/issues/114)) ([6f843db](https://github.com/alioguzhan/react-editext/commit/6f843db09de2ec970c6b41eace73071c3419bf3a))

### [4.1.1](https://github.com/alioguzhan/react-editext/compare/v4.1.0...v4.1.1) (2021-05-04)


### Bug Fixes

* add `className` prop again to make styled-components work ([4e1f5fb](https://github.com/alioguzhan/react-editext/commit/4e1f5fbeeca01956572bf7054f73e15e87b6ecbb))

## [4.1.0](https://github.com/alioguzhan/react-editext/compare/v4.0.1...v4.1.0) (2021-05-04)


### Features

* add `containerProps` to pass props to the root level container ([fd4b0a3](https://github.com/alioguzhan/react-editext/commit/fd4b0a3d8543061453a4bb9fdd0014a29cece457))

### [4.0.1](https://github.com/alioguzhan/react-editext/compare/v4.0.0...v4.0.1) (2021-05-04)

## [4.0.0](https://github.com/alioguzhan/react-editext/compare/v3.18.0...v4.0.0) (2021-05-04)

No new features.

- Source code is now `Typescript`.
- Migrate to `Function Components`. No more Class Components.
- Tests have rewritten with `@testing-library`.

### ⚠ BREAKING CHANGES

- Drop Node 8 support
- Drop React 15 support

## [3.18.0](https://github.com/alioguzhan/react-editext/compare/v3.17.2...v3.18.0) (2021-04-02)


### Features

* add renderValue prop ([9c75c5a](https://github.com/alioguzhan/react-editext/commit/9c75c5a6aa1016dca52227aaf7f28ee31fc1acfb))

### [3.17.2](https://github.com/alioguzhan/react-editext/compare/v3.17.1...v3.17.2) (2021-02-04)


### Bug Fixes

* cancelling ignores existing value and resets to previous state [half fix] ([e3c84a4](https://github.com/alioguzhan/react-editext/commit/e3c84a48d9cd2e0f04b237c8346d2f15bd562ff0))
* empty strings as input values are being ignored ([5d2992d](https://github.com/alioguzhan/react-editext/commit/5d2992d1b9ef427503c83bec5951b41410b2c5a4))
* **security:** upgrade deps to fix a security vulnerability ([63c6356](https://github.com/alioguzhan/react-editext/commit/63c6356be08603cb585ade6350e45848403bfaec))

### [3.17.1](https://github.com/alioguzhan/react-editext/compare/v3.17.0...v3.17.1) (2020-09-14)


### Bug Fixes

* **security:** upgrade deps to fix a vulnerability ([0a6d904](https://github.com/alioguzhan/react-editext/commit/0a6d90489984f12febbfd14a74a411be3572c616))

## [3.17.0](https://github.com/alioguzhan/react-editext/compare/v3.16.1...v3.17.0) (2020-08-19)


### Bug Fixes

* **security:** upgrade dev. deps to fix some vulnerabilities ([4483f46](https://github.com/alioguzhan/react-editext/commit/4483f469ed072ccefd2b1d6da0467b98c3645082))

### [3.16.1](https://github.com/alioguzhan/react-editext/compare/v3.16.0...v3.16.1) (2020-07-15)


### Bug Fixes

* **security:** upgrade development deps to fix a vulnerability ([41345ca](https://github.com/alioguzhan/react-editext/commit/41345ca4b4ac9915ae982b6cfff9a769ca00cead))

## [3.16.0](https://github.com/alioguzhan/react-editext/compare/v3.15.1...v3.16.0) (2020-06-01)


### Features

* allow passing `tabIndex` to both `view` and `input` elements ([c2d7eb2](https://github.com/alioguzhan/react-editext/commit/c2d7eb27dee25d9b6bfc06d9254107db14ddfe7b)), closes [#86](https://github.com/alioguzhan/react-editext/issues/86)
* implement `startEditingOnFocus` and `startEditingOnEnter` props ([3297224](https://github.com/alioguzhan/react-editext/commit/3297224ba4db8bc2d43b3e25b6c78a9cb727f1cb)), closes [#86](https://github.com/alioguzhan/react-editext/issues/86)

### [3.15.1](https://github.com/alioguzhan/react-editext/compare/v3.15.0...v3.15.1) (2020-04-10)


### Bug Fixes

* **security:** upgrade deps to fix a vulnerabilities ([565b1d6](https://github.com/alioguzhan/react-editext/commit/565b1d65cbfba4b394c4ca63629868d0ba79bb51))

## [3.15.0](https://github.com/alioguzhan/react-editext/compare/v3.14.0...v3.15.0) (2020-02-22)


### Features

* implement `submitOnUnfocus` feature ([dbb31b4](https://github.com/alioguzhan/react-editext/commit/dbb31b4b1952bef5d15fa70bb0ee39c7037afcb1))

## [3.14.0](https://github.com/alioguzhan/react-editext/compare/v3.13.0...v3.14.0) (2020-02-19)


### Features

* implement `cancelOnUnfocus` feature ([269bd80](https://github.com/alioguzhan/react-editext/commit/269bd802705a083c17f573a0e39adf509a6195a1))

## [3.13.0](https://github.com/alioguzhan/react-editext/compare/v3.12.4...v3.13.0) (2020-02-05)


### Features

* add cancelOnEscape prop ([88fbb8d](https://github.com/alioguzhan/react-editext/commit/88fbb8dc6c5931e986635cc99bba5c3177d07090))

### [3.12.4](https://github.com/alioguzhan/react-editext/compare/v3.12.3...v3.12.4) (2020-01-23)


### Bug Fixes

* rollup builds the wrong file ([5bb4204](https://github.com/alioguzhan/react-editext/commit/5bb420493faab8ed9728b8d899518e0952e37041))

### [3.12.3](https://github.com/alioguzhan/react-editext/compare/v3.12.2...v3.12.3) (2020-01-23)

### [3.12.2](https://github.com/alioguzhan/react-editext/compare/v3.12.1...v3.12.2) (2020-01-23)


### Bug Fixes

* pressing ESC on `submitOnEnter` saves the form ([a28fd1b](https://github.com/alioguzhan/react-editext/commit/a28fd1bf871872847aa1678e31587c697a2bda13)), closes [#60](https://github.com/alioguzhan/react-editext/issues/60)

### [3.12.1](https://github.com/alioguzhan/react-editext/compare/v3.12.0...v3.12.1) (2020-01-19)


### Performance

* minify build files ( 19 kb -> 9 kb ) ([704fbe4](https://github.com/alioguzhan/react-editext/commit/704fbe4e2096a31a8882631859b65857433bad08))

## [3.12.0](https://github.com/alioguzhan/react-editext/compare/v3.11.1...v3.12.0) (2019-12-25)


### Features

* pass `inputProps` to event listener props ([cefa4b8](https://github.com/alioguzhan/react-editext/commit/cefa4b83989fd4b488e6f896c773bd976bec86c1))

### [3.11.1](https://github.com/alioguzhan/react-editext/compare/v3.11.0...v3.11.1) (2019-12-13)


### Bug Fixes

* example/package.json & example/yarn.lock to reduce vulnerabilities ([0c0d7ef](https://github.com/alioguzhan/react-editext/commit/0c0d7efc0ecc215f8ead2014d7aa039ce2e00d2d))
* upgrade serialize-javascript to fix a vulnerability. ([6921947](https://github.com/alioguzhan/react-editext/commit/6921947a614d0dc1093019177d1a3997c58ec91f))

## [3.11.0](https://github.com/alioguzhan/react-editext/compare/v3.9.1...v3.11.0) (2019-11-23)


### Features

* add `styled-components` support ([5ec01b5](https://github.com/alioguzhan/react-editext/commit/5ec01b50ebe15127ec39d93b81da8d2065b7a009))
* submitOnEnter for numeric keypad Enter key ([d4967da](https://github.com/alioguzhan/react-editext/commit/d4967da0ea814ec93d8c02ad12824065207fce0e))
* submitOnEnter for numeric keypad Enter key (keyCode = 13) ([56cd082](https://github.com/alioguzhan/react-editext/commit/56cd08278c1199a2bc51a060ccc128171fbfaf82))
* submitOnEnter for numeric keypad Enter key (keyCode = 13) ([afc5c5d](https://github.com/alioguzhan/react-editext/commit/afc5c5db47196a0f2412b328d2df7b22663a2d15))


### Bug Fixes

* `submitOnEnter` submits the whole form instead of submitting the text input. ([ac3dc45](https://github.com/alioguzhan/react-editext/commit/ac3dc453f75ac4ef1cdd76c1002df9f7bf8c041d)), closes [#54](https://github.com/alioguzhan/react-editext/issues/54)

### [3.9.1](https://github.com/alioguzhan/react-editext/compare/v3.9.0...v3.9.1) (2019-11-02)


### Bug Fixes

* **security:** update deps due to a security vuln in `set-value` ([14f4a0d](https://github.com/alioguzhan/react-editext/commit/14f4a0db7336e2ed88d73b99f3cee89292109730))

## [3.9.0](https://github.com/alioguzhan/react-editext/compare/v3.8.1...v3.9.0) (2019-11-01)


### Features

* implement `submitOnEnter` propFixes [#46](https://github.com/alioguzhan/react-editext/issues/46) ([5f684b4](https://github.com/alioguzhan/react-editext/commit/5f684b41ce80f66f9f169e6b85bfe54aff3d8b30))


### Bug Fixes

* example/.snyk & example/package.json to reduce vulnerabilities ([d9c8fc0](https://github.com/alioguzhan/react-editext/commit/d9c8fc0d3e764314317a0ef8dca72177687aa533))

### [3.8.1](https://github.com/alioguzhan/react-editext/compare/v3.8.0...v3.8.1) (2019-10-05)


### Bug Fixes

* add `password` to the prop list ([deeceb3](https://github.com/alioguzhan/react-editext/commit/deeceb3fcb889cbf8d4e156c9df491eb2ea2e198))

## [3.8.0](https://github.com/alioguzhan/react-editext/compare/v3.7.0...v3.8.0) (2019-10-02)


### Features

* add new prop `showButtonsOnHover` ([0d17c53](https://github.com/alioguzhan/react-editext/commit/0d17c53aaf83f7c55d12c527773e9bf19edcdf56))
* new prop `onEditingStart` to check if editing started ([886df21](https://github.com/alioguzhan/react-editext/commit/886df21bd23e3f136f0f0d841195ec327bafa604))

## [3.7.0](https://github.com/alioguzhan/react-editext/compare/v3.6.1...v3.7.0) (2019-09-14)


### Features

* get rid of our only dep: `classnames`. No more deps! ([d042ddc](https://github.com/alioguzhan/react-editext/commit/d042ddcb62ef04862f120868ab355cb293ee283d))


### Bug Fixes

* example/.snyk & example/package.json to reduce vulnerabilities ([72ac01c](https://github.com/alioguzhan/react-editext/commit/72ac01cbaf2b3adc56cdf84d0c6dc809a9ae1d47))
* migrate from `componentWillReceiveProps` to `componentDidUpdate` ([c355915](https://github.com/alioguzhan/react-editext/commit/c35591573e99cfece8a7601d85104171fe247527))

### [3.6.1](https://github.com/alioguzhan/react-editext/compare/v3.6.0...v3.6.1) (2019-08-13)


### Bug Fixes

* bug when updating value prop to blank ([200f6ff](https://github.com/alioguzhan/react-editext/commit/200f6ff97d13e684fc7827211c7e986d3f3e559a))

## [3.6.0](https://github.com/alioguzhan/react-editext/compare/v3.4.1...v3.6.0) (2019-08-10)


### Features

* Make editing state externally controllable ([481c469](https://github.com/alioguzhan/react-editext/commit/481c469b7e3387216a0d25d20bff84c69e4f5e81))
* text input now gets saved when enter is used, and gets canceled when escape is used ([8f9fb2b](https://github.com/alioguzhan/react-editext/commit/8f9fb2b46dc14ce5056f6c683b6bd34733162e1e))

### [3.4.1](https://github.com/alioguzhan/react-editext/compare/v3.3.1...v3.4.1) (2019-08-07)

### [3.3.1](https://github.com/alioguzhan/react-editext/compare/v3.3.0...v3.3.1) (2019-08-05)

## [3.3.0](https://github.com/alioguzhan/react-editext/compare/v3.2.1...v3.3.0) (2019-07-05)


### Features

* add `buttonsAlign` prop to let users change the buttons location ([d24360e](https://github.com/alioguzhan/react-editext/commit/d24360edcc9eea81412327dcd01d48c9ff907bf3))

### [3.2.1](https://github.com/alioguzhan/react-editext/compare/v3.2.0...v3.2.1) (2019-06-05)


### Bug Fixes

* upgrade dev deps due to a vulnerability in `handlebars` ([9fbbd30](https://github.com/alioguzhan/react-editext/commit/9fbbd302428099267c6a1abdc77d0ddf1d591d8e))

## [3.2.0](https://github.com/alioguzhan/react-editext/compare/v3.1.1...v3.2.0) (2019-06-05)


### Features

* add new props to allow to override container styles. see [#11](https://github.com/alioguzhan/react-editext/issues/11) ([18b914d](https://github.com/alioguzhan/react-editext/commit/18b914db5aae9cbff649b57de4126f181ac7c18d))


### Bug Fixes

* example/package.json to reduce vulnerabilities ([fe71d62](https://github.com/alioguzhan/react-editext/commit/fe71d627192244786d25dc4bd280696c937d44f1))

### [3.1.1](https://github.com/alioguzhan/react-editext/compare/v3.1.0...v3.1.1) (2019-03-24)


### Bug Fixes

* **package:** add `index.d.ts` file to npm package ([b40af98](https://github.com/alioguzhan/react-editext/commit/b40af982ea7cc84b9a0c8dea71d6c6b6f5abd6b8))

## [3.1.0](https://github.com/alioguzhan/react-editext/compare/v3.0.1...v3.1.0) (2019-03-05)


### Features

* add typescript definition file [`d.ts`] ([245a406](https://github.com/alioguzhan/react-editext/commit/245a406be1aafc803b68e0b73f9e970a66fab63b))

### [3.0.1](https://github.com/alioguzhan/react-editext/compare/v3.0.0...v3.0.1) (2019-03-04)


### Bug Fixes

* example app fails after react-scripts upgrade ([3cd5f2f](https://github.com/alioguzhan/react-editext/commit/3cd5f2fe23a0f2bdf239bf248ce645617f98f5d2))
* example/package.json to reduce vulnerabilities ([9e18a51](https://github.com/alioguzhan/react-editext/commit/9e18a51c5dba3dfc6138113aa09f042e790672bc))

## [3.0.0](https://github.com/alioguzhan/react-editext/compare/v2.1.1...v3.0.0) (2019-02-27)


### ⚠ BREAKING CHANGES

* prop names for buttons are now changed. see `README.md`

### Features

* allow any valid element for action buttons ([c1bea76](https://github.com/alioguzhan/react-editext/commit/c1bea76393d12ab34b2fdc9c824cb628e1577f6e))
* allow users to disable default icons ([784dd48](https://github.com/alioguzhan/react-editext/commit/784dd4874612d7f34800ee58e7af28b6dba4594b))


### Bug Fixes

* **styling:** minor fixes in default styles ([d76d8c2](https://github.com/alioguzhan/react-editext/commit/d76d8c2b0284ae61a50ec7bf9d599036c56323b2))

### [2.1.1](https://github.com/alioguzhan/react-editext/compare/v2.1.0...v2.1.1) (2018-10-07)


### Bug Fixes

* **styling:** some styles override global css rules ([14656d5](https://github.com/alioguzhan/react-editext/commit/14656d580e82a287be88004cbd0ce43cf7e1ab2d))

## [2.1.0](https://github.com/alioguzhan/react-editext/compare/v2.0.1...v2.1.0) (2018-10-05)


### Features

* allow any valid element for hint prop ([1d802b6](https://github.com/alioguzhan/react-editext/commit/1d802b63f4d009b229487362a62e0c18175f1f2d))


### Bug Fixes

* revert React.Fragment usage ([3eaf836](https://github.com/alioguzhan/react-editext/commit/3eaf836e4d046f263534aa6786bf6bf4e838acea))

### [2.0.1](https://github.com/alioguzhan/react-editext/compare/v2.0.0...v2.0.1) (2018-10-02)


### Bug Fixes

* fix - move inputProps top to prevent overrides to component logic ([e54ae8c3](https://github.com/alioguzhan/react-editext/commit/e54ae8c3eb996e12cc83f79c15df3f319d16f7dc))
