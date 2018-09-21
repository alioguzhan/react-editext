import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

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
const example2 = `
<EdiText
  type='textarea'
  inputClassName="textarea"
  value="How do you define real? If you're talking about what you can feel, what you can smell,
  what you can taste and see, then real is simply electrical signals interpreted by your brain"
  onSave={this.onSave}
/>

`;
const example3 = `
<EdiText
  type="textarea"
  inputClassName="text"
  saveButtonText="Apply"
  cancelButtonText="Cancel"
  editButtonText="Edit"
  value="Why, Mr. Anderson? Why? Why do you persist?"
  onSave={this.onSave}
/>
`;
export default class App extends Component {
  onSave = val => {
    console.log("Edited Value -> ", val);
  };
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
                <SyntaxHighlighter language="javascript">
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
            <div className="subtitle">Textarea for Editing Input</div>
            <p className="content">
              You can use {"<textarea>"} for editing if your content is too
              long. Also you can specify custom class name for the input element.
              Since this page has built with Bulma.io, we passed <code>textarea</code>
              as class name.
            </p>
            <div className="columns">
              <div className="column is-half">
                <SyntaxHighlighter language="javascript">
                  {example2}
                </SyntaxHighlighter>
              </div>
              <div className="column">
                <div className="subtitle">Output</div>
                <EdiText
                  type="textarea"
                  inputClassName="textarea"
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
                <SyntaxHighlighter language="javascript">
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
        </div>
      </div>
    );
  }
}
