import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { cancelOnConflictMessage, dataAttributes, classnames } from './utils'

export default class EdiText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: props.editing,
      valid: true,
      value: props.value || '',
      savedValue: '',
      viewFocused: false
    }
    this.saveButton = React.createRef()
    this.input = React.createRef()
    this.editingContainer = React.createRef()
    this.editingButtons = React.createRef()
  }

  componentDidMount() {
    this.checkPropsConsistency()
  }

  checkPropsConsistency() {
    if (this.props.cancelOnUnfocus && this.props.submitOnUnfocus) {
      console.warn(cancelOnConflictMessage)
    }
  }

  componentDidUpdate(prevProps, _prevState) {
    const nextState = {}
    if (
      this.props.value !== undefined &&
      prevProps.value !== this.props.value
    ) {
      nextState.value = this.props.value
    }

    if (
      prevProps.editing !== undefined &&
      prevProps.editing !== this.props.editing
    ) {
      nextState.editing = this.props.editing
    }

    if (Object.keys(nextState).length > 0) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(nextState)
    }
  }

  handleKeyDown = e => {
    const { submitOnEnter, inputProps, cancelOnEscape } = this.props
    const isEnter = [13, 'Enter'].some(c => e.keyCode === c || e.code === c)
    const isEscape = [27, 'Escape', 'Esc'].some(
      c => e.keyCode === c || e.code === c
    )
    if (isEnter) {
      submitOnEnter && this.handleSave()
      e.preventDefault()
    }
    if (isEscape) {
      cancelOnEscape && this.handleCancel()
      e.preventDefault()
    }
    inputProps.onKeyDown && inputProps.onKeyDown(e) // TODO: this sucks.
  }

  handleOnBlur = e => {
    const { cancelOnUnfocus, submitOnUnfocus, inputProps } = this.props
    const isEditingButton = this.editingButtons.current.contains(
      e.relatedTarget
    )
    cancelOnUnfocus && !isEditingButton && this.handleCancel()
    submitOnUnfocus && !isEditingButton && !cancelOnUnfocus && this.handleSave()
    inputProps.onBlur && inputProps.onBlur(e) // TODO: this sucks.
  }

  handleViewFocus = e => {
    this.setState({ viewFocused: true })
    const { startEditingOnFocus, viewProps } = this.props
    startEditingOnFocus && this.setState({ editing: true })
    viewProps.onFocus && viewProps.onFocus(e)
  }

  handleKeyDownForView = e => {
    const isEnter = [13, 'Enter'].some(c => e.keyCode === c || e.code === c)
    const { startEditingOnEnter, viewProps } = this.props
    if (isEnter && this.state.viewFocused) {
      startEditingOnEnter && this.setState({ editing: true })
      e.preventDefault()
    }
    viewProps.onKeyDown && viewProps.onKeyDown(e)
  }

  handleInputChange = e => {
    this.setState({
      valid: true,
      value: e.target.value
    })
  }

  handleCancel = () => {
    this.setState(
      {
        valid: true,
        editing: false,
        value: this.state.savedValue || this.props.value
      },
      () => this.props.onCancel(this.state.value, this.props.inputProps)
    )
  }

  handleActivateEditMode = () => {
    this.setState(
      {
        editing: true
      },
      () => {
        this.props.onEditingStart(this.state.value)
      }
    )
  }

  handleSave = () => {
    const { onSave, validation, onValidationFail, inputProps } = this.props
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
      () => onSave(this.state.savedValue, inputProps)
    )
  }

  _renderInput() {
    if (this.props.type === 'textarea') {
      return (
        <textarea
          ref={this.input}
          className={styles.Editext__input}
          editext={dataAttributes.input}
          // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          tabIndex={this.props.tabIndex}
          {...this.props.inputProps}
          onBlur={this.handleOnBlur}
          value={this.state.value}
          onChange={this.handleInputChange}
          autoFocus={this.state.editing}
        />
      )
    } else {
      return (
        <input
          ref={this.input}
          className={styles.Editext__input}
          editext={dataAttributes.input}
          // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          tabIndex={this.props.tabIndex}
          {...this.props.inputProps}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleOnBlur}
          value={this.state.value}
          type={this.props.type}
          onChange={this.handleInputChange}
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
        <div
          ref={this.editingContainer}
          className={editContainerClass}
          editext={dataAttributes.editContainer}
        >
          {buttonsAlign === 'after' && inputElem}
          <div className={buttonsContainerClass} ref={this.editingButtons}>
            <button
              ref={this.saveButton}
              editext={dataAttributes.saveButton}
              type='button'
              className={saveButtonClass}
              onClick={this.handleSave}
            >
              {saveButtonContent}
            </button>
            <button
              type='button'
              editext={dataAttributes.cancelButton}
              className={cancelButtonClass}
              onClick={this.handleCancel}
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
        {hint && (
          <div className={styles.Editext__hint} editext={dataAttributes.hint}>
            {hint}
          </div>
        )}
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
      editOnViewClick,
      showButtonsOnHover
    } = this.props
    // calculate edit button classes
    const editButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__edit_button}`,
      hideIcons && `${styles.Editext__hide_default_icons}`
    )
    const editButtonClass = editButtonClassName || editButtonDefaultClasses
    const viewContainerClass = classnames(
      viewContainerClassName || styles.Editext__view_container,
      showButtonsOnHover && `${styles.Editext__buttons_showButtonsOnHover}`
    )
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      buttonsAlign === 'before' && `${styles.Editext__buttons_before_aligned}`,
      buttonsAlign === 'after' && `${styles.Editext__buttons_after_aligned}`
    )
    const viewClickHandler = editOnViewClick
      ? this.handleActivateEditMode
      : undefined
    return (
      <div
        className={viewContainerClass}
        editext={dataAttributes.viewContainer}
      >
        {buttonsAlign === 'after' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={this.props.tabIndex}
            {...viewProps}
            onKeyDown={this.handleKeyDownForView}
            onFocus={this.handleViewFocus}
            onClick={viewClickHandler}
            editext='view'
          >
            {this.state.value}
          </div>
        )}
        <div className={buttonsContainerClass}>
          <button
            type='button'
            editext={dataAttributes.editButton}
            className={editButtonClass}
            onClick={this.handleActivateEditMode}
          >
            {editButtonContent}
          </button>
        </div>
        {buttonsAlign === 'before' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={this.props.tabIndex}
            {...viewProps}
            onKeyDown={this.handleKeyDownForView}
            onFocus={this.handleViewFocus}
            onClick={viewClickHandler}
            editext={dataAttributes.viewContainer}
          >
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
    const { mainContainerClassName, className } = this.props
    const clsName = classnames(
      mainContainerClassName || styles.Editext__main_container,
      className
    )
    return <div className={clsName}>{mode}</div>
  }
}

EdiText.defaultProps = {
  value: '',
  type: 'text',
  validationMessage: 'Invalid Value',
  validation: _v => true,
  onEditingStart: _v => null,
  onCancel: _v => null,
  inputProps: { onKeyDown: _e => {}, onBlur: _e => {} },
  viewProps: {},
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
    'password',
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
  onEditingStart: PropTypes.func,
  // classNames
  className: PropTypes.string,
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
  editing: PropTypes.bool,
  showButtonsOnHover: PropTypes.bool,
  submitOnEnter: PropTypes.bool,
  cancelOnEscape: PropTypes.bool,
  cancelOnUnfocus: PropTypes.bool,
  submitOnUnfocus: PropTypes.bool,
  // navigating between inputs via tabbing is common.
  // And tabIndex will probably be same for both view and input props
  // here we are adding a new prop just for this special case to save people
  // from creating duplicate code for both `inputProps` and `viewProps`
  tabIndex: PropTypes.any,
  startEditingOnFocus: PropTypes.bool,
  startEditingOnEnter: PropTypes.bool
}
