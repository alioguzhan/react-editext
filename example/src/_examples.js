export const example1 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        type='text'
        value='What is real? How do you define real?'
        onSave={this.onSave}
      />
    )
  }
}
`
export const example2 = `<EdiText
  type='textarea'
  inputProps={{
    className: 'textarea',
    placeholder: 'Type your content here',
    style: {
      outline: 'none',
      minWidth: 'auto'
    },
    rows: 5
  }}
  value="How do you define real? If you're talking about what you can feel, what you can smell,\\
  what you can taste and see, then real is simply electrical signals interpreted by your brain"
  onSave={this.onSave}
/>`

export const example3 = `<EdiText
  type="textarea"
  saveButtonContent="Apply"
  cancelButtonContent={<strong>Cancel</strong>}
  editButtonContent="Edit"
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
/>`

export const example4 = `<EdiText
  type="text"
  validationMessage="Please type at least 20 characters."
  validation={val => val.length >= 20}
  value="The Matrix has you.."
  onSave={this.onSave}
/>`

export const example5 = `export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  validationFailed = textValue => {
    alert(\`The text <\${textValue}> is not valid.\nYou shall not use the word SMITH here!!!\`)
  }

  render () {
    return (
      <EdiText
        type="text"
        validation={val => val.toLowerCase().indexOf('smith') < 0}
        onValidationFail={this.validationFailed}
        inputProps={{
          placeholder: "Don't use the word 'Smith'..."
        }}
        value="Why Mr. Anderson? Why? Why? Why?"
        onSave={this.onSave}
      />
    )
  }
}`

export const example6 = `<EdiText
  type="text"
  viewProps={{
    className: 'my-react-header',
    style: { borderRadius: 3 }
  }}
  value="Hello React!"
  onSave={this.onSave}
/>`

export const example7 = `<EdiText
  type="text"
  hint="It is from Matrix Revolutions."
  inputProps={{
    placeholder: 'Type your answer here',
    style: {
      backgroundColor: '#233C51',
      color: '#E6ECF1',
      fontWeight: 500,
      width: 250
    },
    name: 'answer1'
  }}
  viewProps={{
    className: 'custom-view-class'
  }}
  value="No. The honor is still mine."
  onSave={this.onSave}
/>`

export const example8 = `<EdiText
  type="text"
  hint="React is not a framework, it is a library."
  viewProps={{
    className: 'react-answer-1',
    style: { borderRadius: 3 }
  }}
  value="I am not sure..."
  onSave={this.onSave}
/>`

export const example9 = `<EdiText
  type="date"
  inputProps={{
    min: "2000-01-01",
    max: "2049-01-01"
  }}
  hint="All dates are allowed between 2000 and 2049"
  value={new Date().toDateString()}
  onSave={this.onSave}
/>`

export const example10 = `<EdiText
  type="text"
  hint={
    <span className="custom-hint">
      <i>PhoneGap is a hybrid technology, not native.</i>
    </span>
  }
  viewProps={{
    className: 'react-answer-1',
  }}
  value="I am not sure..."
  onSave={this.onSave}
/>`

export const example11 = `<EdiText
  type="text"
  saveButtonContent="Apply"
  cancelButtonContent="Cancel"
  saveButtonClassName="custom-save-button"
  editButtonClassName="custom-edit-button"
  cancelButtonClassName="custom-cancel-button"
  editButtonContent="Edit"
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
/>`

export const example12 = `<EdiText
  type="textarea"
  saveButtonContent="Apply"
  cancelButtonContent={<strong>Cancel</strong>}
  editButtonContent="Edit"
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
  hideIcons={true}
/>`

export const example13 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        viewContainerClassName='my-custom-view-wrapper'
        type='textarea'
        inputProps={{
          rows: 5
        }}
        saveButtonContent='Apply'
        cancelButtonContent={<strong>Cancel</strong>}
        editButtonContent='Edit This Quote'
        value="How do you define real? If you're talking about what you can feel, what you can smell,
        what you can taste and see, then real is simply electrical signals interpreted by your brain"
        onSave={this.onSave}
      />
    )
  }
}`

export const example13Style = `
.my-custom-view-wrapper {
  display: flex;
  flex-direction: column;
}

.my-custom-view-wrapper div:last-child {
  /* Here we are styling the button container. */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}`
export const example14 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        type='text'
        buttonsAlign='before'
        value='What is real? How do you define real?'
        onSave={this.onSave}
      />
    )
  }
}
`
export const example15 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        type='text'
        value='What is real? How do you define real?'
        onSave={this.onSave}
        editOnViewClick={true}
      />
    )
  }
}`

export const example16 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <div>
        <button
          className='button is-small is-warning'
          onClick={() => {
            this.setState({ editing: !this.state.editing })
          }}>
            Toggle Editing Mode
        </button>
        <EdiText
          type='text'
          value='What is real? How do you define real?'
          onSave={this.onSave}
          editing={this.state.editing}
        />
      </div>
    )
  }
}`

export const example17 = `import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {

  render () {
    return (
      <EdiText
        type='text'
        onCancel={v => console.log('CANCELLED: ', v}
        onEditingStart={v => console.log('EDITING STARTED: ', v}
        onSave={v => console.log('SAVED: ', v}
        value={"You've been living in a dream world, Neo."}
      />
    )
  }
}`

export const example18 = `<EdiText
  showButtonsOnHover
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
/>`

export const example19 = `<EdiText
  submitOnEnter
  cancelOnEscape
  value="The Keymaker"
  onSave={this.onSave}
/>`

export const example20 = `const StyledEdiText = styled(EdiText)\`
  button {
    border-radius: 5px;
  }
  button[editext="edit-button"] {
    color: #000;
    width: 50px;
  }
  button[editext="save-button"] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext="cancel-button"] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
  input, textarea {
    background: #1D2225;
    color: #F4C361;
    font-weight: bold;
    border-radius: 5px;
  }
  div[editext="view-container"], div[editext="edit-container"] {
    background: #6293C3;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
}
\`
<StyledEdiText
  type='text'
  value='The honor is still mine.'
  onSave={this.handleSave}
/>
`
