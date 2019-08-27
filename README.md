# react-editext

> Editable Text Component for React Applications

[![NPM](https://img.shields.io/npm/v/react-editext.svg)](https://www.npmjs.com/package/react-editext)
![npm](https://img.shields.io/npm/dm/react-editext.svg)
[![Github](https://github.com/alioguzhan/react-editext/workflows/build/badge.svg)](https://github.com/alioguzhan/react-editext/actions)
[![codecov](https://codecov.io/gh/alioguzhan/react-editext/branch/master/graph/badge.svg)](https://codecov.io/gh/alioguzhan/react-editext)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![Known Vulnerabilities](https://snyk.io/test/github/alioguzhan/react-editext/badge.svg)](https://snyk.io/test/github/alioguzhan/react-editext)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Install

```bash
npm install --save react-editext
```

Or with yarn:

```bash
yarn add react-editext
```

## Usage
EdiText is highly customizable. You can see more examples [here](https://alioguzhan.github.io/react-editext/). Here is a basic usage:
```jsx
import React, { Component } from 'react'

import EdiText from 'react-editext'

class Example extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }
  render () {
    return (
      <div className="container">
        <EdiText
          type="text"
          value='What is real? How do you define real?'
          onSave={this.onSave}
        />
      </div>
    )
  }
}
```
You can customize almost everything based on your needs. Please navigate to [Props](#Props) section. I mean, just scroll down.
## Props
| Prop | Type | Required |Default | Note
|---|---|---|---|---|
value|string|Yes|`''`|Value of the content and input [in edit mode]
type|string|Yes|text|Input type. Possible options are: `text`, `number`, `email`, `textarea`, `date`, `datetime-local`, `time`, `month`, `url`, `week`, `tel`
hint|node|No|`''`|A simple hint message appears at the bottom of input element. Any valid element is allowed.
onSave|function|Yes||Function will be called when save button clicked. `value` is passed to cb.
inputProps|object|No||Props to be passed to input element. Any kind of valid DOM attributes are welcome.
viewProps|object|No||Props to be passed to div element that shows the text. You can specify your own `styles` or `className`
validation|function|No||Pass your own validation function. takes one param -> `value`. It must return `true` or `false`
validationMessage|node|No|Invalid Value| If validation fails this message will appear
onValidationFail|function|No||Pass your own function to track when validation failed. See Examples page for the usage.
onCancel|function|No||Function will be called when editing is cancelled.
saveButtonContent|node|No|`''`|Content for save button. Any valid element is allowed. Default is: &#10003;
cancelButtonContent|node|No|`''`|Content for cancel button. Any valid element is allowed. Default is: &#10005;
editButtonContent|node|No|`''`|Content for edit button. Any valid element is allowed. Default is: &#9998;
saveButtonClassName|string|No||Custom class name for save button.
cancelButtonClassName|string|No||Custom class name for cancel button.
editButtonClassName|string|No||Custom class name for edit button.
viewContainerClassName|string|No||Custom class name for the container in `view` mode.[See here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers)
editContainerClassName|string|No||Custom class name for the container in edit mode. Will be set to `viewContainerClassName` if you set it and omit this. See [here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers)
mainContainerClassName|string|No||Custom class name for the top-level main container. See [here](https://alioguzhan.github.io/react-editext/#custom-classes-for-containers)
hideIcons|bool|No|`false`|Set it to `true` if you don't want to see default icons on action buttons. See Examples page for more details.
buttonsAlign|string|No|`after`|Set this to `before` if you want to locate action buttons before the input instead of after it. See [here](https://alioguzhan.github.io/react-editext/#change-buttons-location).
editOnViewClick|bool|No|`false`|Set it to `true` if you want clicking on the view to activate the editor.
editing|bool|No|`false`|Set it to `true` if you want the view state to be edit mode.

## Browser Support

|[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge |
| --------- | --------- | --------- | --------- | --------- | -------- |
| :white_check_mark: | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: :exclamation: |

* `rows` prop for textarea has no effect in IE/Edge. You can set its `height` with some css.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/alioguzhan"><img src="https://avatars2.githubusercontent.com/u/1928541?v=4" width="100px;" alt="jdoklovic"/><br /><sub><b>alioguzhan</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=alioguzhan" title="Code">💻</a><a href="https://github.com/alioguzhan/react-editext/commits?author=alioguzhan" title="Documentation">📖</a><td>
    <td align="center"><a href="https://github.com/jdoklovic"><img src="https://avatars2.githubusercontent.com/u/620106?v=4" width="100px;" alt="jdoklovic"/><br /><sub><b>jdoklovic</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=jdoklovic" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wesoft-systems"><img src="https://avatars3.githubusercontent.com/u/8137662?v=4" width="100px;" alt="Obed Castillo"/><br /><sub><b>Obed Castillo</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=wesoft-systems" title="Code">💻</a></td>
    <td align="center"><a href="https://brunoaderaldo.netlify.com/"><img src="https://avatars3.githubusercontent.com/u/14007590?v=4" width="100px;" alt="Bruno Aderaldo"/><br /><sub><b>Bruno Aderaldo</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/issues?q=author%3ABrunoAderaldo" title="Bug reports">🐛</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=BrunoAderaldo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/esskar"><img src="https://avatars1.githubusercontent.com/u/65206?v=4" width="100px;" alt="Sascha Kiefer"/><br /><sub><b>Sascha Kiefer</b></sub></a><br /><a href="#question-esskar" title="Answering Questions">💬</a> <a href="#ideas-esskar" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/sanehab"><img src="https://avatars0.githubusercontent.com/u/36003641?v=4" width="100px;" alt="Ehab Alsharif"/><br /><sub><b>Ehab Alsharif</b></sub></a><br /><a href="https://github.com/alioguzhan/react-editext/commits?author=sanehab" title="Code">💻</a> <a href="https://github.com/alioguzhan/react-editext/commits?author=sanehab" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [alioguzhan](https://github.com/alioguzhan)
