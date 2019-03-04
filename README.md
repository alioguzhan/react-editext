# react-editext

> Editable Text Component for React Applications

[![NPM](https://img.shields.io/npm/v/react-editext.svg)](https://www.npmjs.com/package/react-editext)
![npm](https://img.shields.io/npm/dm/react-editext.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/alioguzhan/react-editext/badge.svg)](https://snyk.io/test/github/alioguzhan/react-editext)
[![Build Status](https://travis-ci.com/alioguzhan/react-editext.svg?branch=master)](https://travis-ci.com/alioguzhan/react-editext)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
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
validationMessage|string|No|Invalid Value| If validation fails this message will appear
onValidationFail|function|No||Pass your own function to track when validation failed. See Examples page for the usage.
onCancel|function|No||Function will be called when editing is cancelled.
saveButtonContent|node|No|`''`|Content for save button. Any valid element is allowed. Default is: &#10003;
cancelButtonContent|node|No|`''`|Content for cancel button. Any valid element is allowed. Default is: &#10005;
editButtonContent|node|No|`''`|Content for edit button. Any valid element is allowed. Default is: &#9998;
saveButtonClassName|string|No||Custom class name for save button.
cancelButtonClassName|string|No||Custom class name for cancel button.
editButtonClassName|string|No||Custom class name for edit button.
hideIcons|bool|No|`false`|Set it to `true` if you don't want to see default icons on action buttons. See Examples page for more details.

## Browser Support

|[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge |
| --------- | --------- | --------- | --------- | --------- | -------- |
| :white_check_mark: | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: :exclamation: |

* `rows` prop for textarea has no effect in IE/Edge. You can set its `height` with some css.

## License

MIT © [alioguzhan](https://github.com/alioguzhan)
