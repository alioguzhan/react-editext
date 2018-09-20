# react-editext

> Editable Text Component for React Applications

[![NPM](https://img.shields.io/npm/v/react-editext.svg)](https://www.npmjs.com/package/react-editext) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-editext
```

## Usage

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
## Props

Will be updated.

## License

MIT © [alioguzhan](https://github.com/alioguzhan)
