import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { light } from 'react-syntax-highlighter/styles/prism';
import EdiText from "react-editext";

const example1 = `import React, { Component } from 'react'
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
`;
const example2 = `<EdiText
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
/>

`;
const example3 = `<EdiText
  type="textarea"
  saveButtonText="Apply"
  cancelButtonText="Cancel"
  editButtonText="Edit"
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
/>
`;
const example4 = `<EdiText
  type="text"
  validationMessage="Please type at least 20 characters."
  validation={val => val.length >= 20}
  value="The Matrix has you.."
  onSave={this.onSave}
/>`

const example5 = `export default class App extends Component {
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
}
`

const example6 = `<EdiText
  type="text"
  viewProps={{
    className: 'my-react-header',
    style: { borderRadius: 3 }
  }}
  value="Hello React!"
  onSave={this.onSave}
/>`

const example7 = `<EdiText
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

const example8 = `<EdiText
  type="text"
  hint="React is not a framework, it is a library."
  viewProps={{
    className: 'react-answer-1',
    style: { borderRadius: 3 }
  }}
  value="I am not sure..."
  onSave={this.onSave}
/>`

const example9 = `<EdiText
  type="date"
  inputProps={{
    min: "2000-01-01",
    max: "2049-01-01"
  }}
  hint="All dates are allowed between 2000 and 2049"
  value={new Date().toDateString()}
  onSave={this.onSave}
/>`

export default class App extends Component {
  onSave = val => {
    console.log("Edited Value -> ", val);
  }

  validationFailed = textValue => {
    alert(`The text <${textValue}> is not valid.\nYou shall not use the word SMITH here!!!`)
  }

  render() {
    return (
      <div>
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">React EdiText</h1>
              <h2 className="subtitle">
                Editable Text Component for React Applications
              </h2>
                <span style={{marginRight: 5}}><a className="github-button" href="https://github.com/alioguzhan/react-editext" data-size="large"
                data-show-count="true" aria-label="Star alioguzhan/react-editext on GitHub">Star</a></span>
                <span>
                <a className="github-button" href="https://github.com/alioguzhan/react-editext/fork" data-size="large"
                data-show-count="true" aria-label="Fork alioguzhan/react-editext on GitHub">Fork</a></span>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="tile is-parent is-vertical is-12">
            <p><strong>EdiText</strong> is a React component that converts your text into editable content. Below you can see some examples.</p>
            <p>For installation and available props please see the
              <a href="https://github.com/alioguzhan/react-editext"> repository page</a>.
            </p>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Default Props</div>
            <p className="content">
              This is the default usage without custom props.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example1}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="text"
                  value="What is real? How do you define real?"
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Show a Hint Message</div>
            <p className="content">
            If you don't want to use another library and just want to show a simple message as hint, use the <code>hint</code> prop.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example8}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <p>What is the main difference between React and Angular?</p>
                <div className="custom-wrapper">
                  <EdiText
                    type="text"
                    hint="React is not a framework, it is a library."
                    viewProps={{
                      className: 'react-answer-1',
                    }}
                    value="I am not sure..."
                    onSave={this.onSave}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Textarea for Editing Input</div>
            <p className="content">
              You can use <code>{"<textarea>"}</code> for editing if your content is too
              long. Also you can specify custom class name and other props for the input element.
              Since this page has built with Bulma.io, we passed <code>textarea</code>
              as class name.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example2}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="textarea"
                  inputProps={{
                    className: 'textarea',
                    placeholder: 'Type your content here',
                    style: {
                      outline: 'none',
                      minWidth: 'auto'
                    },
                    rows: 5
                  }}
                  value="How do you define real? If you're talking about what you can feel, what you can smell,
                  what you can taste and see, then real is simply electrical signals interpreted by your brain"
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Custom Button Titles</div>
            <p className="content">
              By default, Action buttons have no titles. They are just icons. But
              you can append any text next to those icons. See the example below.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example3}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="text"
                  saveButtonText="Apply"
                  cancelButtonText="Cancel"
                  editButtonText="Edit"
                  value="Why, Mr. Anderson? Why? Why do you persist?"
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Custom Props for Input Element</div>
            <p className="content">
            It is likely that you will want to add some props to input element.
            You can pass any valid HTML attribute to the input element via <code>inputProps</code>.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example7}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <p>What was the Morpheus' answer when Neo say 'It was an honor, sir' ?</p>
                <div className="custom-wrapper">
                  <EdiText
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Custom Props for Text Element</div>
            <p className="content">
            You may want to add some styling to your text content instead of render it as a plain text. To do that you can use
            <code>viewProps</code> prop. You can pass any valid HTML attribute.
            These props will be passed to content <code>div</code>.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example6}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="text"
                  viewProps={{
                    className: 'my-react-header',
                    style: { borderRadius: 3 }
                  }}
                  value="Hello React!"
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Validate the Content</div>
            <p className="content">
              You can validate the value of input before save. Just pass a function to <code>validation</code> prop.
              And you also can set a validation message which will appear when validation fails. See the example.
              Delete some characters from content and try to save it.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example4}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="text"
                  validationMessage="Please type at least 20 characters."
                  validation={val => val.length >= 20}
                  value="The Matrix has you.."
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Custom Validation</div>
            <p className="content">
              EdiText has a very basic validation handling. You will probably want to use an external library to
              show custom and fancy validation warnings or messages. You can track the validity of input value with
              <code>onValidationFail</code> prop. Just pass your method to listen and react against validation updates.
              <strong>Type the word 'Smith' into below input and try to save it.</strong>
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example5}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
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
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-10">
            <div className="subtitle">Usage for Date Values</div>
            <p className="content">
              You can use EdiText for date inputs as well. Just type <code>date</code> to type prop.
              Other related and types are <code>datetime-local</code>, <code>time</code>, <code>week</code>, <code>month</code>
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript" style={light}>
                  {example9}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="date"
                  inputProps={{
                    min: "2000-01-01",
                    max: "2049-01-01"
                  }}
                  hint="All dates are allowed between 2000 and 2049"
                  value={new Date().toLocaleString()}
                  onSave={this.onSave}
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" style={{padding: 20}}>
          <div className="content has-text-centered">
            <p>
              <strong>React EdiText</strong> by <a href="https://github.com/alioguzhan">Ali Oguzhan Yildiz</a>. The source code is licensed
              <a href="https://opensource.org/licenses/MIT"> MIT</a>.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
