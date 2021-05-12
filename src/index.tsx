/* eslint-disable react/prop-types */
import React, {
  useEffect,
  KeyboardEvent,
  FocusEvent,
  useState,
  ChangeEvent,
} from 'react';
import styles from './styles.module.css';
import {
  cancelOnConflictMessage,
  dataAttributes,
  classnames,
  defaultValidationMessage,
} from './utils';

export type EdiTextType =
  | 'text'
  | 'textarea'
  | 'email'
  | 'number'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'month'
  | 'url'
  | 'week'
  | 'tel';

export type ButtonsAlignment = 'after' | 'before';

export type InputProps =
  | React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  | React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >;
export interface EdiTextProps {
  /**
   * Props to be passed to input element.
   * Any kind of valid DOM attributes are welcome
   */
  inputProps?: InputProps;
  /**
   * Props to be passed to div element that shows the text.
   * You can specify your own `styles` or `className`
   */
  viewProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  /**
   * Class name for the root container of the EdiText.
   */
  className?: string;
  /**
   * Props to be passed to div element that is container for all elements.
   * You can use this if you want to style or select the whole container.
   */
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  /**
   * Value of the content [in view mode] and input [in edit mode]
   */
  value: string;
  /**
   * A simple hint message appears at the bottom of input element.
   * Any valid element is allowed.
   */
  hint?: React.ReactNode;
  /**
   * If validation fails this message will appear
   */
  validationMessage?: any;
  /** Pass your own validation function.
   * takes one param -> `value`.
   * It must return `true` or `false`
   */
  validation?: (...args: string[]) => boolean;
  /**
   * will be called when validation fails.
   * takes one param <value> which is the current value of input
   */
  onValidationFail?: (...args: string[]) => any;
  /**
   * Input type. Possible options are:
   * `text`, `number`, `email`, `textarea`, `date`,
   * `datetime-local`, `time`, `month`, `url`, `week`, `tel`
   * @default "text"
   */
  type?: EdiTextType;
  /**
   * will be called when user clicked cancel button
   * @param value the current value of input when cancelled.
   * @param inputProps inputProps that passed to the element.
   */
  onCancel?: (value: any, inputProps?: InputProps) => any;
  /**
   * will be called when user clicked save button.
   * @param value the current value of input
   * @param inputProps inputProps that passed to the element.
   */
  onSave: (value: any, inputProps?: InputProps) => any;
  /**
   * Custom class name for SAVE button.
   * */
  saveButtonClassName?: string;
  /**
   * Custom class name for EDIT button.
   * */
  editButtonClassName?: string;
  /**
   * Custom class name for CANCEL button. */
  cancelButtonClassName?: string;
  /**
   * Content for CANCEL button. Any valid element and node are allowed. */
  cancelButtonContent?: any;
  /**
   * Content for SAVE button. Any valid element and node are allowed. */
  saveButtonContent?: any;
  /**
   * Content for EDIT button. Any valid element and node are allowed. */
  editButtonContent?: any;
  /**
   * Set it to `true` if you don't want to see default icons
   * on action buttons.See Examples page for more details.
   * @default "false"
   */
  hideIcons?: boolean;
  /**
   * Decides whether buttons will be located _BEFORE_ or _AFTER_
   * the input element.
   * @default "after"
   */
  buttonsAlign?: ButtonsAlignment;
  /**
   * Custom class name for the container in view mode.
   */
  viewContainerClassName?: string;
  /**
   * Custom class name for the container in edit mode.
   * Will be set to viewContainerClassName if you set it and omit this.
   */
  editContainerClassName?: string;
  /**
   * Custom class name for the top-level main container.
   * @deprecated please use `containerProps` instead of this
   */
  mainContainerClassName?: string;
  /**
   * Set it to `true` if you want clicking on the view to activate the editor.
   * @default false
   */
  editOnViewClick?: boolean;
  /**
   * Set it to `true` if you want the view state to be edit mode
   * @default false
   */
  editing?: boolean;
  /**
   * Will be called when the editing mode is active.
   *
   * @param value the value of the input at the time when editing started.
   * @param inputProps inputProps that passed to the element.
   */
  onEditingStart?: (value: any, inputProps?: InputProps) => any;
  /**
   * Set it to `true` if you want to display action buttons **only**
   * when the text hovered by the user.
   * @default false
   */
  showButtonsOnHover?: boolean;
  /**
   * Set it to `true` if you want to submit the form when `Enter`
   * is pressed.
   * @default false
   */
  submitOnEnter?: boolean;
  /**
   * Set it to `true` if you want to cancel the form when `Escape`
   * is pressed.
   * @default false
   */
  cancelOnEscape?: boolean;
  /**
   * Set it to `true` if you want to cancel the form when the input
   * is unfocused.
   * @default false
   */
  cancelOnUnfocus?: boolean;
  /**
   * Set it to `true` if you want to save the form when the input
   * is unfocused.
   * @default false
   */
  submitOnUnfocus?: boolean;
  /**
   * An helper shortcut in case you want to pass the same tabIndex to both
   * `viewProps` and `inputProps`.
   *
   * NOTE: This will be overriden if you pass the tabIndex in `viewProps`
   * or `inputProps`.
   */
  tabIndex?: number;
  /**
   * Activates the edit mode when the view container is in focus.
   */
  startEditingOnFocus?: boolean;
  /**
   * Activates the edit mode when the `Enter` key is pressed if the view
   * container is focused.
   *
   * NOTE: This requires the element to be in focus.
   */
  startEditingOnEnter?: boolean;
  /**
   * Custom render method for the content in the view mode.
   * Use this prop to customize the displayed value in view mode.
   * The return value from this function will be rendered in view mode.
   * You can return string or JSX. Both are allowed.
   */
  renderValue?: (value: any) => any;
}

function EdiText(props: EdiTextProps) {
  // state
  const [editingInternal, setEditingInternal] = useState(props.editing);
  const [valid, setValid] = useState<boolean>(true);
  const [valueInternal, setValueInternal] = useState<string>(props.value || '');
  const [savedValue, setSavedValue] = useState<string | undefined>(undefined);
  const [viewFocused, setViewFocused] = useState<boolean>(false);
  // refs
  const saveButton = React.createRef<HTMLButtonElement>();
  const editingContainer = React.createRef<HTMLDivElement>();
  const editingButtons = React.createRef<any>();

  useEffect(() => {
    if (props.cancelOnUnfocus && props.submitOnUnfocus) {
      console.warn(cancelOnConflictMessage);
    }
  }, [props.cancelOnUnfocus, props.submitOnUnfocus]);

  useEffect(() => {
    if (props.value !== undefined) {
      setValueInternal(props.value);
      setSavedValue(props.value);
    }

    if (props.editing !== undefined) {
      setEditingInternal(props.editing);
    }
  }, [props.editing, props.value]);

  function handleKeyDown(e: KeyboardEvent<any>): void {
    const isEnter = [13, 'Enter'].some((c) => e.key === c || e.code === c);
    const isEscape = [27, 'Escape', 'Esc'].some(
      (c) => e.code === c || e.key === c
    );
    if (isEnter) {
      props.submitOnEnter && handleSave();
      e?.preventDefault();
    }
    if (isEscape) {
      props.cancelOnEscape && handleCancel();
      e.preventDefault();
    }
    props.inputProps?.onKeyDown && props.inputProps.onKeyDown(e);
  }

  function handleOnBlur(e: FocusEvent<any>): void {
    const isEditingButton = editingButtons.current?.contains(e?.relatedTarget);
    props.cancelOnUnfocus && !isEditingButton && handleCancel();
    props.submitOnUnfocus &&
      !isEditingButton &&
      !props.cancelOnUnfocus &&
      handleSave();
    props.inputProps?.onBlur && props.inputProps.onBlur(e);
  }

  function handleViewFocus(e: FocusEvent<HTMLInputElement>): void {
    setViewFocused(true);
    props.startEditingOnFocus && setEditingInternal(true);
    props.viewProps?.onFocus && props.viewProps.onFocus(e);
  }

  function handleKeyDownForView(e: KeyboardEvent<any>): void {
    const isEnter = [13, 'Enter'].some((c) => e.key === c || e.code === c);
    const startEditing = isEnter && viewFocused && props.startEditingOnEnter;
    startEditing && e.preventDefault();
    startEditing && setEditingInternal(true);
    props.viewProps?.onKeyDown && props.viewProps.onKeyDown(e);
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setValid(true);
    setValueInternal(e.target.value);
  }

  function handleCancel(): void {
    const val = savedValue ?? props.value;
    setValid(true);
    setEditingInternal(false);
    setValueInternal(val);
    props.onCancel?.(val, props.inputProps);
  }

  function handleActivateEditMode(): void {
    setEditingInternal(true);
    props.onEditingStart?.(valueInternal, props.inputProps);
  }

  function handleSave(): void {
    if (typeof props.validation === 'function') {
      const isValid = props.validation(valueInternal);
      if (!isValid) {
        setValid(false);
        props.onValidationFail && props.onValidationFail(valueInternal);
        return;
      }
    }
    setEditingInternal(false);
    setSavedValue(valueInternal);
    props.onSave(valueInternal, props.inputProps);
  }

  function _renderInput() {
    if (props.type === 'textarea') {
      return (
        <textarea
          className={styles.Editext__input}
          // @ts-ignore
          editext={dataAttributes.input}
          // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          tabIndex={props.tabIndex}
          {...(props.inputProps as React.DetailedHTMLProps<
            React.TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
          >)}
          onBlur={handleOnBlur}
          value={valueInternal}
          onChange={handleInputChange}
          autoFocus={editingInternal}
        />
      );
    } else {
      return (
        <input
          className={styles.Editext__input}
          // @ts-ignore
          editext={dataAttributes.input}
          // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          tabIndex={props.tabIndex}
          {...props.inputProps}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          value={valueInternal}
          type={props.type || 'text'}
          onChange={handleInputChange}
          autoFocus={editingInternal}
        />
      );
    }
  }

  function _renderEditingMode() {
    const inputElem = _renderInput();
    // calculate save button classes
    const saveButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__save_button}`,
      props.hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const saveButtonClass =
      props.saveButtonClassName || saveButtonDefaultClasses;
    // calculate cancel button classes
    const cancelButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__cancel_button}`,
      props.hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const cancelButtonClass =
      props.cancelButtonClassName || cancelButtonDefaultClasses;
    let editContainerClass = styles.Editext__editing_container;
    if (props.editContainerClassName)
      editContainerClass = props.editContainerClassName;
    if (props.viewContainerClassName)
      editContainerClass = props.viewContainerClassName;

    const alignment = props.buttonsAlign || 'after';
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      alignment === 'before' && `${styles.Editext__buttons_before_aligned}`,
      alignment === 'after' && `${styles.Editext__buttons_after_aligned}`
    );
    return (
      <div>
        <div
          ref={editingContainer}
          className={editContainerClass}
          // @ts-ignore
          editext={dataAttributes.editContainer}
        >
          {alignment === 'after' && inputElem}
          <div className={buttonsContainerClass} ref={editingButtons}>
            <button
              ref={saveButton}
              // @ts-ignore
              editext={dataAttributes.saveButton}
              type="button"
              className={saveButtonClass}
              onClick={handleSave}
            >
              {props.saveButtonContent}
            </button>
            <button
              type="button"
              // @ts-ignore
              editext={dataAttributes.cancelButton}
              className={cancelButtonClass}
              onClick={handleCancel}
            >
              {props.cancelButtonContent}
            </button>
          </div>
          {alignment === 'before' && inputElem}
        </div>
        {!valid && !props.onValidationFail && (
          <div className={styles.Editext__validation_message}>
            {props.validationMessage || defaultValidationMessage}
          </div>
        )}
        {props.hint && (
          <div
            className={styles.Editext__hint}
            // @ts-ignore
            editext={dataAttributes.hint}
          >
            {props.hint}
          </div>
        )}
      </div>
    );
  }

  function _renderViewMode() {
    // calculate edit button classes
    const editButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__edit_button}`,
      props.hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const editButtonClass =
      props.editButtonClassName || editButtonDefaultClasses;
    const viewContainerClass = classnames(
      props.viewContainerClassName || styles.Editext__view_container,
      props.showButtonsOnHover &&
        `${styles.Editext__buttons_showButtonsOnHover}`
    );
    const alignment = props.buttonsAlign || 'after';
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      alignment === 'before' && `${styles.Editext__buttons_before_aligned}`,
      alignment === 'after' && `${styles.Editext__buttons_after_aligned}`
    );
    const viewClickHandler = props.editOnViewClick
      ? handleActivateEditMode
      : undefined;
    const _value =
      typeof props.renderValue === 'function'
        ? props.renderValue(valueInternal)
        : valueInternal;
    return (
      <div
        className={viewContainerClass}
        // @ts-ignore
        editext={dataAttributes.viewContainer}
      >
        {alignment === 'after' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={props.tabIndex}
            {...props.viewProps}
            onKeyDown={handleKeyDownForView}
            onFocus={handleViewFocus}
            onClick={viewClickHandler}
            // @ts-ignore
            editext="view"
          >
            {_value}
          </div>
        )}
        <div className={buttonsContainerClass}>
          <button
            type="button"
            // @ts-ignore
            editext={dataAttributes.editButton}
            className={editButtonClass}
            onClick={handleActivateEditMode}
          >
            {props.editButtonContent}
          </button>
        </div>
        {alignment === 'before' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={props.tabIndex}
            {...props.viewProps}
            onKeyDown={handleKeyDownForView}
            onFocus={handleViewFocus}
            onClick={viewClickHandler}
            // @ts-ignore
            editext={dataAttributes.viewContainer}
          >
            {_value}
          </div>
        )}
      </div>
    );
  }

  const mode = editingInternal ? _renderEditingMode() : _renderViewMode();
  const clsName = classnames(
    props.containerProps?.className ||
      props.mainContainerClassName ||
      styles.Editext__main_container,
    props.className
  );
  return (
    <div
      {...props.containerProps}
      className={clsName}
      // @ts-ignore
      editext={dataAttributes.mainContainer}
    >
      {mode}
    </div>
  );
}

export default EdiText;
