# react-editext

> Editable Text Component for React Applications

[![NPM](https://img.shields.io/npm/v/react-editext.svg)](https://www.npmjs.com/package/react-editext)
[![Build Status](https://travis-ci.com/alioguzhan/react-editext.svg?branch=master)](https://travis-ci.com/alioguzhan/react-editext)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)


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
type|string|Yes|text|Input type. Possible options are: `text`, `number`, `email`, `textarea`
inputProps|object|No||Props to be passed to input element. Any kind of valid DOM attributes are welcome.
viewProps|object|No||Props to be passed to div element that shows the text. You can specify your own `styles` or `className`
validation|function|No||Pass your own validation function. takes one param -> `value`. It must return `true` or `false`
validationMessage|string|No|Invalid Content| If validation fails this message will appear
onSave|function|Yes||Function will be called when save button clicked. `value` is passed to cb.
onCancel|function|No||Function will be called when editing is cancelled.
saveButtonText|string|No|`''`|Title for save button. Default is: &#10003;
cancelButtonText|string|No|`''`|Title for cancel button. Default is: &#10005;
editButtonText|string|No|`''`|Title for edit button. Default is: &#9998;
saveButtonClassName|string|No|editext-save-button|Custom class name for save button.
cancelButtonClassName|string|No|editext-cancel-button|Custom class name for cancel button.
editButtonClassName|string|No|editext-edit-button|Custom class name for edit button.
containerClassName|string|No|editext-editing-container|Custom class name for container div.

## To Do

- [x] Write Tests

## License

MIT © [alioguzhan](https://github.com/alioguzhan)
