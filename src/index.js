import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classnames from 'classnames'

export default class EdiText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      valid: true,
      value: props.value || '',
      savedValue: ''
    }
    this.editButton = React.createRef()
    this.saveButton = React.createRef()
    this.cancelButton = React.createRef()
    this.input = React.createRef()
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

  _renderInput() {
    if (this.props.type === 'textarea') {
      return (
        <textarea
          ref={this.input}
          className={styles.Editext__input}
          {...this.props.inputProps}
          value={this.state.value}
          onChange={this._onInputChange}
          autoFocus={this.state.editing}
        />
      )
    } else {
      return (
        <input
          ref={this.input}
          className={styles.Editext__input}
          {...this.props.inputProps}
          value={this.state.value}
          type={this.props.type}
          onChange={this._onInputChange}
          autoFocus={this.state.editing}
        />
      )
    }
  }
  _renderEditingMode = () => {
    const {
      saveButtonClassName,
      saveButtonContent,
      cancelButtonClassName,
      cancelButtonContent,
      onValidationFail,
      validationMessage,
      hint
    } = this.props
    const inputElem = this._renderInput()
    // calculate save button classes
    const saveButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__save_button}`
    )
    const saveButtonClass = saveButtonClassName || saveButtonDefaultClasses
    // calculate cancel button classes
    const cancelButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__cancel_button}`
    )
    const cancelButtonClass = cancelButtonClassName || cancelButtonDefaultClasses
    return (
      <div>
        <div className={styles.Editext__editing_container}>
          {inputElem}
          <div className={styles.Editext__buttons_container}>
            <button
              ref={this.saveButton}
              type='button'
              className={saveButtonClass}
              onClick={this._onSave}
            >
              {saveButtonContent}
            </button>
            <button
              ref={this.cancelButton}
              type='button'
              className={cancelButtonClass}
              onClick={this._onCancel}
            >
              {cancelButtonContent}
            </button>
          </div>
        </div>
        {!this.state.valid && !onValidationFail &&
          <div className={styles.Editext__validation_message}>
            {validationMessage}
          </div>
        }
        {hint && <div className={styles.Editext__hint}>{hint}</div>}
      </div>
    )
  }
  _renderViewMode = () => {
    const {
      viewProps,
      editButtonClassName,
      editButtonContent
    } = this.props
    // calculate edit button classes
    const editButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__edit_button}`
    )
    const editButtonClass = editButtonClassName || editButtonDefaultClasses
    return (
      <div className={styles.Editext__view_container}>
        <div {...viewProps}>{this.state.value}</div>
        <div className={styles.Editext__buttons_container}>
          <button
            ref={this.editButton}
            type='button'
            className={editButtonClass}
            onClick={this._activateEditMode}
          >
            {editButtonContent}
          </button>
        </div>
      </div>
    )
  }
  render() {
    const mode = this.state.editing ? this._renderEditingMode() : this._renderViewMode()
    return (
      <div className={styles.Editext__main_container}>
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
  cancelButtonContent: '',
  saveButtonContent: '',
  editButtonContent: ''
}

EdiText.propTypes = {
  inputProps: PropTypes.object,
  viewProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  hint: PropTypes.node,
  validationMessage: PropTypes.string,
  validation: PropTypes.func,
  onValidationFail: PropTypes.func,
  type: PropTypes.oneOf(
    [
      'text', 'textarea', 'email', 'number', 'date', 'datetime-local',
      'time', 'month', 'url', 'week', 'tel'
    ]
  ).isRequired,
  // Events
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  // classNames
  saveButtonClassName: PropTypes.string,
  editButtonClassName: PropTypes.string,
  cancelButtonClassName: PropTypes.string,
  // Custom Button Texts
  cancelButtonContent: PropTypes.any,
  saveButtonContent: PropTypes.any,
  editButtonContent: PropTypes.any
}
