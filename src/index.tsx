import React, {
  useEffect,
  KeyboardEvent,
  FocusEvent,
  useState,
  ChangeEvent,
} from 'react';
import styles from './styles.module.css';
import { cancelOnConflictMessage, dataAttributes, classnames } from './utils';

type EdiTextType =
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
type ButtonsAlignment = 'after' | 'before';

type InputProps =
  | React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  | React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >;
interface EdiTextProps {
  /**
   * Props to be passed to input element.
   * Any kind of valid DOM attributes are welcome
   */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
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
   * Value of the content [in view mode] and input [in edit mode]
   */
  value: string;
  /**
   * A simple hint message appears at the bottom of input element.
   * Any valid element is allowed.
   */
  hint?: React.ReactNode;
  /**
        If validation fails this message will appear
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
   */
  hideIcons?: boolean;
  /**
   * Decides whether buttons will be located _BEFORE_ or _AFTER_
   * the input element. Default is `after`.
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
   */
  mainContainerClassName?: string;
  /**
   * Set it to `true` if you want clicking on the view to activate the editor.
   */
  editOnViewClick?: boolean;
  /**
   * Set it to `true` if you want the view state to be edit mode
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
   */
  showButtonsOnHover?: boolean;
  /**
   * Set it to `true` if you want to submit the form when `Enter`
   * is pressed.
   */
  submitOnEnter?: boolean;
  /**
   * Set it to `true` if you want to cancel the form when `Escape`
   * is pressed.
   */
  cancelOnEscape?: boolean;
  /**
   * Set it to `true` if you want to cancel the form when the input
   * is unfocused.
   */
  cancelOnUnfocus?: boolean;
  /**
   * Set it to `true` if you want to save the form when the input
   * is unfocused.
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

export default function EdiText({
  value = '',
  type = 'text',
  validationMessage = 'Invalid Value',
  cancelButtonContent = '',
  saveButtonContent = '',
  editButtonContent = '',
  hideIcons = false,
  buttonsAlign = 'after',
  editing = false,
  saveButtonClassName = '',
  cancelButtonClassName = '',
  editButtonClassName = '',
  viewContainerClassName = '',
  editContainerClassName = '',
  mainContainerClassName = '',
  showButtonsOnHover = false,
  cancelOnEscape,
  cancelOnUnfocus,
  submitOnUnfocus,
  submitOnEnter,
  startEditingOnEnter,
  startEditingOnFocus,
  tabIndex,
  className,
  hint,
  editOnViewClick,
  onSave,
  renderValue,
  validation = (_v: string) => true,
  onValidationFail,
  onEditingStart = (_v: unknown) => null,
  onCancel = (_v: unknown) => null,
  inputProps = {
    onKeyDown: (_e: KeyboardEvent<HTMLInputElement>) => {},
    onBlur: (_e: FocusEvent<HTMLInputElement>) => {},
  },
  viewProps = {
    onKeyDown: (_e: KeyboardEvent<HTMLInputElement>) => {},
    onFocus: (_e: FocusEvent<HTMLInputElement>) => {},
  },
}: EdiTextProps) {
  // state
  const [editingInternal, setEditingInternal] = useState(editing);
  const [valid, setValid] = useState<Boolean>(true);
  const [valueInternal, setValueInternal] = useState<string>(value || '');
  const [savedValue, setSavedValue] = useState<string | undefined>(undefined);
  const [viewFocused, setViewFocused] = useState<boolean>(false);
  // refs
  const saveButton = React.createRef<HTMLButtonElement>();
  const editingContainer = React.createRef<HTMLDivElement>();
  const editingButtons = React.createRef<any>();

  useEffect(() => {
    if (cancelOnUnfocus && submitOnUnfocus) {
      console.warn(cancelOnConflictMessage);
    }
  }, [cancelOnUnfocus, submitOnUnfocus]);

  useEffect(() => {
    if (value !== undefined) {
      setValueInternal(value);
      setSavedValue(value);
    }

    if (editing !== undefined) {
      setEditingInternal(editing);
    }
  }, [editing, value]);

  function handleKeyDown(e: KeyboardEvent<any>): void {
    const isEnter = [13, 'Enter'].some(
      (c) => e?.keyCode === c || e?.code === c
    );
    const isEscape = [27, 'Escape', 'Esc'].some(
      (c) => e?.keyCode === c || e.code === c
    );
    if (isEnter) {
      submitOnEnter && handleSave();
      e?.preventDefault();
    }
    if (isEscape) {
      cancelOnEscape && handleCancel();
      e.preventDefault();
    }
    inputProps?.onKeyDown && inputProps.onKeyDown(e); // TODO: this sucks.
  }

  function handleOnBlur(e: FocusEvent<any>): void {
    const isEditingButton = editingButtons.current?.contains(e?.relatedTarget);
    cancelOnUnfocus && !isEditingButton && handleCancel();
    submitOnUnfocus && !isEditingButton && !cancelOnUnfocus && handleSave();
    inputProps?.onBlur && inputProps.onBlur(e); // TODO: this sucks.
  }

  function handleViewFocus(e: FocusEvent<HTMLInputElement>): void {
    setViewFocused(true);
    startEditingOnFocus && setEditingInternal(true);
    viewProps?.onFocus && viewProps.onFocus(e);
  }

  function handleKeyDownForView(e: KeyboardEvent<any>): void {
    const isEnter = [13, 'Enter'].some((c) => e.keyCode === c || e.code === c);
    const startEditing = isEnter && viewFocused && startEditingOnEnter;
    startEditing && e.preventDefault();
    startEditing && setEditingInternal(true);
    viewProps?.onKeyDown && viewProps.onKeyDown(e);
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setValid(true);
    setValueInternal(e.target.value);
  }

  function handleCancel(): void {
    const val = savedValue ?? value;
    setValid(true);
    setEditingInternal(false);
    setValueInternal(val);
    onCancel?.(val, inputProps);
  }

  function handleActivateEditMode(): void {
    setEditingInternal(true);
    onEditingStart?.(valueInternal, inputProps);
  }

  function handleSave(): void {
    const isValid = validation(valueInternal);
    if (!isValid) {
      setValid(false);
      onValidationFail && onValidationFail(valueInternal);
      return;
    }
    setEditingInternal(false);
    setSavedValue(valueInternal);
    onSave(valueInternal, inputProps);
  }

  function _renderInput() {
    if (type === 'textarea') {
      return (
        <textarea
          className={styles.Editext__input}
          // @ts-ignore
          editext={dataAttributes.input}
          // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          tabIndex={tabIndex}
          {...(inputProps as React.DetailedHTMLProps<
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
          tabIndex={tabIndex}
          {...inputProps}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          value={valueInternal}
          type={type}
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
      hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const saveButtonClass = saveButtonClassName || saveButtonDefaultClasses;
    // calculate cancel button classes
    const cancelButtonDefaultClasses = classnames(
      `${styles.Editext__button}`,
      `${styles.Editext__cancel_button}`,
      hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const cancelButtonClass =
      cancelButtonClassName || cancelButtonDefaultClasses;
    let editContainerClass = styles.Editext__editing_container;
    if (editContainerClassName) editContainerClass = editContainerClassName;
    if (viewContainerClassName) editContainerClass = viewContainerClassName;
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      buttonsAlign === 'before' && `${styles.Editext__buttons_before_aligned}`,
      buttonsAlign === 'after' && `${styles.Editext__buttons_after_aligned}`
    );
    return (
      <div>
        <div
          ref={editingContainer}
          className={editContainerClass}
          // @ts-ignore
          editext={dataAttributes.editContainer}
        >
          {buttonsAlign === 'after' && inputElem}
          <div className={buttonsContainerClass} ref={editingButtons}>
            <button
              ref={saveButton}
              // @ts-ignore
              editext={dataAttributes.saveButton}
              type="button"
              className={saveButtonClass}
              onClick={handleSave}
            >
              {saveButtonContent}
            </button>
            <button
              type="button"
              // @ts-ignore
              editext={dataAttributes.cancelButton}
              className={cancelButtonClass}
              onClick={handleCancel}
            >
              {cancelButtonContent}
            </button>
          </div>
          {buttonsAlign === 'before' && inputElem}
        </div>
        {!valid && !onValidationFail && (
          <div className={styles.Editext__validation_message}>
            {validationMessage}
          </div>
        )}
        {hint && (
          <div
            className={styles.Editext__hint}
            // @ts-ignore
            editext={dataAttributes.hint}
          >
            {hint}
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
      hideIcons && `${styles.Editext__hide_default_icons}`
    );
    const editButtonClass = editButtonClassName || editButtonDefaultClasses;
    const viewContainerClass = classnames(
      viewContainerClassName || styles.Editext__view_container,
      showButtonsOnHover && `${styles.Editext__buttons_showButtonsOnHover}`
    );
    const buttonsContainerClass = classnames(
      styles.Editext__buttons_container,
      buttonsAlign === 'before' && `${styles.Editext__buttons_before_aligned}`,
      buttonsAlign === 'after' && `${styles.Editext__buttons_after_aligned}`
    );
    const viewClickHandler = editOnViewClick
      ? handleActivateEditMode
      : undefined;
    const _value =
      typeof renderValue === 'function'
        ? renderValue(valueInternal)
        : valueInternal;
    return (
      <div
        className={viewContainerClass}
        // @ts-ignore
        editext={dataAttributes.viewContainer}
      >
        {buttonsAlign === 'after' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={tabIndex}
            {...viewProps}
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
            {editButtonContent}
          </button>
        </div>
        {buttonsAlign === 'before' && (
          <div
            // this is here because,
            // we still allow people to pass the tabIndex via inputProps
            // also backward compatibility.
            tabIndex={tabIndex}
            {...viewProps}
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
    mainContainerClassName || styles.Editext__main_container,
    className
  );
  return <div className={clsName}>{mode}</div>;
}
