import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classnames from 'classnames'

export default class EdiText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: props.editing,
      valid: true,
      value: props.value || '',
      savedValue: ''
    }
    this.editButton = React.createRef()
    this.saveButton = React.createRef()
    this.cancelButton = React.createRef()
    this.input = React.createRef()
  }

  componentWillReceiveProps(nextProps) {
    const nextState = {}
    if (nextProps.value !== undefined && nextProps.value !== this.state.value) {
      nextState.value = nextProps.value
    }

    if (
      nextProps.editing !== undefined &&
      nextProps.editing !== this.props.editing
    ) {
      nextState.editing = nextProps.editing
    }

    if (Object.keys(nextState).length > 0) {
      this.setState(nextState)
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
      },
      () => this.props.onCancel(this.state.value)
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
      },
      () => onSave(this.state.savedValue)
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
      editContainerClassName,
      viewContainerClassName,
      cancelButtonContent,
      onValidationFail,
      validationMessage,
      hint,
      hideIcons,
      buttonsAlign
    } = this.props
    const inputElem = this._renderInput()
    // calculate save button classes
    const saveButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__save_button}`,
      hideIcons && `${styles.Editext__hide_default_icons}`
    )
    const saveButtonClass = saveButtonClassName || saveButtonDefaultClasses
    // calculate cancel button classes
    const cancelButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__cancel_button}`,
      hideIcons && `${styles.Editext__hide_default_icons}`
    )
    const cancelButtonClass =
      cancelButtonClassName || cancelButtonDefaultClasses
    let editContainerClass = styles.Editext__editing_container
    if (editContainerClassName) editContainerClass = editContainerClassName
    if (viewContainerClassName) editContainerClass = viewContainerClassName
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      buttonsAlign === 'before' && `${styles.Editext__buttons_before_aligned}`,
      buttonsAlign === 'after' && `${styles.Editext__buttons_after_aligned}`
    )
    return (
      <div>
        <div className={editContainerClass}>
          {buttonsAlign === 'after' && inputElem}
          <div className={buttonsContainerClass}>
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
          {buttonsAlign === 'before' && inputElem}
        </div>
        {!this.state.valid && !onValidationFail && (
          <div className={styles.Editext__validation_message}>
            {validationMessage}
          </div>
        )}
        {hint && <div className={styles.Editext__hint}>{hint}</div>}
      </div>
    )
  }
  _renderViewMode = () => {
    const {
      viewProps,
      editButtonClassName,
      editButtonContent,
      viewContainerClassName,
      hideIcons,
      buttonsAlign,
      editOnViewClick
    } = this.props
    // calculate edit button classes
    const editButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__edit_button}`,
      hideIcons && `${styles.Editext__hide_default_icons}`
    )
    const editButtonClass = editButtonClassName || editButtonDefaultClasses
    const viewContainerClass =
      viewContainerClassName || styles.Editext__view_container
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      buttonsAlign === 'before' && `${styles.Editext__buttons_before_aligned}`,
      buttonsAlign === 'after' && `${styles.Editext__buttons_after_aligned}`
    )
    const viewClickHandler = editOnViewClick
      ? this._activateEditMode
      : undefined
    return (
      <div className={viewContainerClass}>
        {buttonsAlign === 'after' && (
          <div {...viewProps} onClick={viewClickHandler}>
            {this.state.value}
          </div>
        )}
        <div className={buttonsContainerClass}>
          <button
            ref={this.editButton}
            type='button'
            className={editButtonClass}
            onClick={this._activateEditMode}
          >
            {editButtonContent}
          </button>
        </div>
        {buttonsAlign === 'before' && (
          <div {...viewProps} onClick={viewClickHandler}>
            {this.state.value}
          </div>
        )}
      </div>
    )
  }
  render() {
    const mode = this.state.editing
      ? this._renderEditingMode()
      : this._renderViewMode()
    const mainContainerClass =
      this.props.mainContainerClassName || styles.Editext__main_container
    return <div className={mainContainerClass}>{mode}</div>
  }
}

EdiText.defaultProps = {
  value: '',
  type: 'text',
  validationMessage: 'Invalid Value',
  validation: value => true,
  onCancel: () => {},
  cancelButtonContent: '',
  saveButtonContent: '',
  editButtonContent: '',
  hideIcons: false,
  buttonsAlign: 'after',
  editing: false
}

EdiText.propTypes = {
  inputProps: PropTypes.object,
  viewProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  hint: PropTypes.node,
  validationMessage: PropTypes.node,
  validation: PropTypes.func,
  onValidationFail: PropTypes.func,
  type: PropTypes.oneOf([
    'text',
    'textarea',
    'email',
    'number',
    'date',
    'datetime-local',
    'time',
    'month',
    'url',
    'week',
    'tel'
  ]).isRequired,
  // Events
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  // classNames
  saveButtonClassName: PropTypes.string,
  editButtonClassName: PropTypes.string,
  cancelButtonClassName: PropTypes.string,
  mainContainerClassName: PropTypes.string,
  editContainerClassName: PropTypes.string,
  viewContainerClassName: PropTypes.string,
  // Custom Button Texts
  cancelButtonContent: PropTypes.any,
  saveButtonContent: PropTypes.any,
  editButtonContent: PropTypes.any,
  hideIcons: PropTypes.bool,
  buttonsAlign: PropTypes.oneOf(['after', 'before']),
  editOnViewClick: PropTypes.bool,
  editing: PropTypes.bool
}
