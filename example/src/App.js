import React, { Component } from 'react'

import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }
  render () {
    return (
      <div className="container">
        <EdiText
          type='text'
          value='What is real? How do you define real?'
          onSave={this.onSave}
        />
      </div>
    )
  }
}
