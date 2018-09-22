import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class EdiText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      valid: true,
      value: this.props.value || '',
      savedValue: ''
    }
  }

  onInputChange = e => {
    this.setState({
      valid: true,
      value: e.target.value
    })
  }

  onCancel = () => {
    this.setState(
      {
        valid: true,
        editing: false,
        value: this.state.savedValue || this.props.value
      }, () => this.props.onCancel(this.state.value)
    )
  }

  onSave = () => {
    if (!this.props.validation(this.state.value)) {
      return this.setState({ valid: false })
    }
    this.setState(
      {
        editing: false,
        savedValue: this.state.value
      }, () => this.props.onSave(this.state.savedValue)
    )
  }

  onKeyPress = event => {
    if (event.key === 'Enter' ||
        event.charCode === 13 ||
        event.key === 'Enter') {
      this.onSave()
    }
  }

  render() {
    if (this.state.editing) {
      let inputElem
      if (this.props.type === 'textarea') {
        inputElem = (
          <textarea
            className={this.props.inputClassName}
            value={this.state.value}
            onChange={this.onInputChange}
            autoFocus={this.state.editing}
            onKeyDown={this.onKeyPress}
            rows={5}
          />
        )
      } else {
        inputElem = (
          <input
            type={this.props.type}
            className={this.props.inputClassName}
            value={this.state.value}
            onChange={this.onInputChange}
            autoFocus={this.state.editing}
            onKeyDown={this.onKeyPress}
          />
        )
      }
      return (
        <div className={styles['editext-main-container']}>
          <div className={this.props.containerClassName}>
            {/* <div className={styles['input-container']}> */}
            {inputElem}
            {/* </div> */}
            <div className={styles['action-buttons-container']}>
              <button
                className={this.props.saveButtonClassName}
                onClick={this.onSave}
              >
                {this.props.saveButtonText}
              </button>
              <button
                className={this.props.cancelButtonClassName}
                onClick={this.onCancel}
              >
                {this.props.cancelButtonText}
              </button>
            </div>
          </div>
          {!this.state.valid &&
            <div className={styles['editext-validation-message']}>
              {this.props.validationMessage}
            </div>
          }
        </div>
      )
    }
    const elm = this.props.children
      ? { ...this.props.children, props: { children: this.state.value } }
      : this.state.value
    return (
      <div className={this.props.containerClassName}>
        {elm}
        <div className={styles['action-buttons-container']}>
          <button
            className={this.props.editButtonClassName}
            onClick={() => this.setState({ editing: true })}
          >
            {this.props.editButtonText}
          </button>
        </div>
      </div>
    )
  }
}

EdiText.defaultProps = {
  value: '',
  type: 'text',
  validationMessage: 'Invalid Content',
  validation: value => true,
  onCancel: () => {},
  cancelButtonText: '',
  saveButtonText: '',
  editButtonText: '',
  // Enzyme does not work propery with dynamic styles. This is temp. workaround.
  saveButtonClassName: styles['editext-save-button'] || 'editext-save-button',
  cancelButtonClassName: styles['editext-cancel-button'] || 'editext-cancel-button',
  editButtonClassName: styles['editext-edit-button'] || 'editext-edit-button',
  inputClassName: styles['editext-input'] || 'editext-input',
  containerClassName: styles['editext-editing-container'] || 'editext-editing-container'
}

EdiText.propTypes = {
  // Default children prop for component
  children: PropTypes.node,
  // Required props
  value: PropTypes.string.isRequired,
  validationMessage: PropTypes.string,
  validation: PropTypes.func,
  type: PropTypes.oneOf(
    ['text', 'textarea', 'email', 'number']
  ).isRequired,
  // Events
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  // classNames
  inputClassName: PropTypes.string,
  saveButtonClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  editButtonClassName: PropTypes.string,
  cancelButtonClassName: PropTypes.string,
  // Custom Button Texts
  cancelButtonText: PropTypes.string,
  saveButtonText: PropTypes.string,
  editButtonText: PropTypes.string
}
