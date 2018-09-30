import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class EdiText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      valid: true,
      value: props.value || '',
      savedValue: ''
    }
  }

  _onInputChange = e => {
    this.setState({
      valid: true,
      value: e.target.value
    })
  }

  _onCancel = () => {
    this.setState(
      {
        valid: true,
        editing: false,
        value: this.state.savedValue || this.props.value
      }, () => this.props.onCancel(this.state.value)
    )
  }

  _activateEditMode = () => {
    this.setState({
      editing: true
    })
  }

  _onSave = () => {
    const { onSave, validation, onValidationFail } = this.props
    const isValid = validation(this.state.value)
    if (!isValid) {
      return this.setState({ valid: false }, () => {
        onValidationFail && onValidationFail(this.state.value)
      })
    }
    this.setState(
      {
        editing: false,
        savedValue: this.state.value
      }, () => onSave(this.state.savedValue)
    )
  }

  _onKeyPress = event => {
    if (event.key === 'Enter' ||
      event.charCode === 13 ||
      event.key === 'Enter') {
      this._onSave()
    }
  }
  _renderInput() {
    if (this.props.type === 'textarea') {
      return (
        <textarea
          className={styles.editext_input}
          value={this.state.value}
          onChange={this._onInputChange}
          autoFocus={this.state.editing}
          onKeyDown={this._onKeyPress}
          {...this.props.inputProps}
        />
      )
    } else {
      return (
        <input
          type={this.props.type}
          className={styles.editext_input}
          value={this.state.value}
          onChange={this._onInputChange}
          autoFocus={this.state.editing}
          onKeyDown={this._onKeyPress}
          {...this.props.inputProps}
        />
      )
    }
  }
  _renderEditingMode = () => {
    const {
      saveButtonClassName,
      saveButtonText,
      cancelButtonClassName,
      cancelButtonText,
      onValidationFail,
      validationMessage,
      hint
    } = this.props
    const inputElem = this._renderInput()
    return (
      <React.Fragment>
        <div>
          {inputElem}
          <div className={styles.editext_action_buttons}>
            <button
              type='button'
              className={saveButtonClassName}
              onClick={this._onSave}
            >
              {saveButtonText}
            </button>
            <button
              type='button'
              className={cancelButtonClassName}
              onClick={this._onCancel}
            >
              {cancelButtonText}
            </button>
          </div>
        </div>
        {!this.state.valid && !onValidationFail &&
          <div className={styles.editext_validation_message}>
            {validationMessage}
          </div>
        }
        {hint && <div className={styles.hint}>{hint}</div>}
      </React.Fragment>
    )
  }
  _renderViewMode = () => {
    const {
      viewProps,
      editButtonClassName,
      editButtonText
    } = this.props
    return (
      <div>
        <div {...viewProps}>{this.state.value}</div>
        <div className={styles.editext_action_buttons}>
          <button
            type='button'
            className={editButtonClassName}
            onClick={this._activateEditMode}
          >
            {editButtonText}
          </button>
        </div>
      </div>
    )
  }
  render() {
    const mode = this.state.editing ? this._renderEditingMode() : this._renderViewMode()
    return (
      <div className={styles.editext_main_container}>
        { mode }
      </div>
    )
  }
}

EdiText.defaultProps = {
  value: '',
  type: 'text',
  validationMessage: 'Invalid Value',
  validation: value => true,
  onCancel: () => { },
  cancelButtonText: '',
  saveButtonText: '',
  editButtonText: '',
  // Enzyme does not work propery with dynamic styles. This is temp. workaround.
  saveButtonClassName: styles.editext_save_button || 'editext_save_button',
  cancelButtonClassName: styles.editext_cancel_button || 'editext_cancel_button',
  editButtonClassName: styles.editext_edit_button || 'editext_edit_button'
}

EdiText.propTypes = {
  inputProps: PropTypes.object,
  viewProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  hint: PropTypes.string,
  validationMessage: PropTypes.string,
  validation: PropTypes.func,
  onValidationFail: PropTypes.func,
  type: PropTypes.oneOf(
    ['text', 'textarea', 'email', 'number']
  ).isRequired,
  // Events
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  // classNames
  saveButtonClassName: PropTypes.string,
  editButtonClassName: PropTypes.string,
  cancelButtonClassName: PropTypes.string,
  // Custom Button Texts
  cancelButtonText: PropTypes.string,
  saveButtonText: PropTypes.string,
  editButtonText: PropTypes.string
}
