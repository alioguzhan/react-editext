'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_Editext__button__sxYQX {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles-module_Editext__button__sxYQX:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles-module_Editext__input__2-M50 {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles-module_Editext__main_container__2azCD {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles-module_Editext__editing_container__1C4d6 {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles-module_Editext__view_container__3oSYx {\n  display: flex;\n  align-items: center;\n}\n\n.styles-module_Editext__buttons_container__2za5Q {\n  display: flex;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd .styles-module_Editext__buttons_container__2za5Q {\n  visibility: hidden;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd:hover .styles-module_Editext__buttons_container__2za5Q {\n  visibility: visible;\n}\n\n.styles-module_Editext__buttons_before_aligned__3Eg6w {\n  margin-right: 5px;\n}\n\n.styles-module_Editext__buttons_after_aligned__2ZHQz {\n  margin-left: 5px;\n}\n\n.styles-module_Editext__validation_message__1puii {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles-module_Editext__cancel_button__26sqr {\n  color: crimson;\n}\n\n.styles-module_Editext__cancel_button__26sqr::before {\n  content: \"\\2715\";\n  margin: 3px;\n}\n\n.styles-module_Editext__edit_button__310_J {\n  color: #000;\n}\n\n.styles-module_Editext__edit_button__310_J::before {\n  content: \"\\270E\";\n  margin: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo::before {\n  content: \"\\2713\";\n  margin: 3px;\n}\n\n.styles-module_Editext__hide_default_icons__2k5RX::before {\n  content: none;\n  margin: 0;\n}\n\n.styles-module_Editext__hint__EGeV0 {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n";
var styles = {"Editext__button":"styles-module_Editext__button__sxYQX","Editext__input":"styles-module_Editext__input__2-M50","Editext__main_container":"styles-module_Editext__main_container__2azCD","Editext__editing_container":"styles-module_Editext__editing_container__1C4d6","Editext__view_container":"styles-module_Editext__view_container__3oSYx","Editext__buttons_container":"styles-module_Editext__buttons_container__2za5Q","Editext__buttons_showButtonsOnHover":"styles-module_Editext__buttons_showButtonsOnHover__2Bfsd","Editext__buttons_before_aligned":"styles-module_Editext__buttons_before_aligned__3Eg6w","Editext__buttons_after_aligned":"styles-module_Editext__buttons_after_aligned__2ZHQz","Editext__validation_message":"styles-module_Editext__validation_message__1puii","Editext__cancel_button":"styles-module_Editext__cancel_button__26sqr","Editext__edit_button":"styles-module_Editext__edit_button__310_J","Editext__save_button":"styles-module_Editext__save_button__1Dlwo","Editext__hide_default_icons":"styles-module_Editext__hide_default_icons__2k5RX","Editext__hint":"styles-module_Editext__hint__EGeV0"};
styleInject(css_248z);

function classnames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /**
     * Our simple classnames replica.
     * This is enough for me.
     */
    return Array.apply(void 0, args).filter(function (a) { return a; })
        .join(' ');
}
var dataAttributes = {
    /**
     * This is for the end user. You can use below attributes if you want to
     * style this component with `styled-components` or something like that.
     * Example notation:
     * <div class="EdiText_Buttons__container_34fgAsdf" editext="button-container">
     * Example usage with styled-components:
  
      const StyledEdiText = styled(EdiText)`
        button[editext="edit-button"] {
          color: #000;
        }
        button[editext="save-button"] {
          background:#587C0C;
          color: #fff;
        }
        input, textarea {
          background: #1D2225;
          color: #F4C361;
          font-weight: bold;
        }
      `
     */
    mainContainer: 'main-container',
    viewContainer: 'view-container',
    buttonContainer: 'button-container',
    editContainer: 'edit-container',
    editButton: 'edit-button',
    saveButton: 'save-button',
    cancelButton: 'cancel-button',
    input: 'input',
    hint: 'hint',
};
var cancelOnConflictMessage = 'EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. ' +
    '`submitOnUnfocus` is ignored in this case. Please remove one of these.';
var defaultValidationMessage = 'Invalid Value';
function getCanEdit(canEdit) {
    if (canEdit === undefined) {
        return true;
    }
    return typeof canEdit === 'function' ? canEdit() : canEdit;
}

function EdiText(props) {
    var _a;
    // state
    var _b = React.useState(props.editing), editingInternal = _b[0], setEditingInternal = _b[1];
    var _c = React.useState(true), valid = _c[0], setValid = _c[1];
    var _d = React.useState(props.value || ''), valueInternal = _d[0], setValueInternal = _d[1];
    var _e = React.useState(undefined), savedValue = _e[0], setSavedValue = _e[1];
    var _f = React.useState(false), viewFocused = _f[0], setViewFocused = _f[1];
    // refs
    var saveButton = React__default['default'].createRef();
    var editingContainer = React__default['default'].createRef();
    var editingButtons = React__default['default'].createRef();
    React.useEffect(function () {
        if (props.cancelOnUnfocus && props.submitOnUnfocus) {
            console.warn(cancelOnConflictMessage);
        }
    }, [props.cancelOnUnfocus, props.submitOnUnfocus]);
    React.useEffect(function () {
        if (props.value !== undefined) {
            setValueInternal(props.value);
            setSavedValue(props.value);
        }
        if (props.editing !== undefined) {
            setEditingInternal(props.editing);
        }
    }, [props.editing, props.value]);
    function handleKeyDown(e) {
        var _a;
        var isEnter = [13, 'Enter'].some(function (c) { return e.key === c || e.code === c; });
        var isEscape = [27, 'Escape', 'Esc'].some(function (c) { return e.code === c || e.key === c; });
        if (isEnter) {
            props.submitOnEnter && handleSave();
            e === null || e === void 0 ? void 0 : e.preventDefault();
        }
        if (isEscape) {
            props.cancelOnEscape && handleCancel();
            e.preventDefault();
        }
        ((_a = props.inputProps) === null || _a === void 0 ? void 0 : _a.onKeyDown) && props.inputProps.onKeyDown(e);
    }
    function handleOnBlur(e) {
        var _a, _b;
        var isEditingButton = (_a = editingButtons.current) === null || _a === void 0 ? void 0 : _a.contains(e === null || e === void 0 ? void 0 : e.relatedTarget);
        props.cancelOnUnfocus && !isEditingButton && handleCancel();
        props.submitOnUnfocus &&
            !isEditingButton &&
            !props.cancelOnUnfocus &&
            handleSave();
        ((_b = props.inputProps) === null || _b === void 0 ? void 0 : _b.onBlur) && props.inputProps.onBlur(e);
    }
    function handleViewFocus(e) {
        var _a;
        setViewFocused(true);
        props.startEditingOnFocus && setEditingInternal(true);
        ((_a = props.viewProps) === null || _a === void 0 ? void 0 : _a.onFocus) && props.viewProps.onFocus(e);
    }
    function handleKeyDownForView(e) {
        var _a;
        var isEnter = [13, 'Enter'].some(function (c) { return e.key === c || e.code === c; });
        var startEditing = isEnter && viewFocused && props.startEditingOnEnter;
        startEditing && e.preventDefault();
        startEditing && setEditingInternal(true);
        ((_a = props.viewProps) === null || _a === void 0 ? void 0 : _a.onKeyDown) && props.viewProps.onKeyDown(e);
    }
    function handleInputChange(e) {
        var _a, _b;
        setValid(true);
        setValueInternal(e.target.value);
        (_b = (_a = props.inputProps) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    function handleCancel() {
        var _a;
        var val = savedValue !== null && savedValue !== void 0 ? savedValue : props.value;
        setValid(true);
        setEditingInternal(false);
        setValueInternal(val);
        (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props, val, props.inputProps);
    }
    function handleActivateEditMode() {
        var _a;
        if (getCanEdit(props.canEdit)) {
            setEditingInternal(true);
            (_a = props.onEditingStart) === null || _a === void 0 ? void 0 : _a.call(props, valueInternal, props.inputProps);
        }
    }
    function handleSave() {
        if (typeof props.validation === 'function') {
            var isValid = props.validation(valueInternal);
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
            return (React__default['default'].createElement("textarea", __assign({ className: styles.Editext__input, 
                // @ts-ignore
                editext: dataAttributes.input, 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: props.tabIndex }, props.inputProps, { onBlur: handleOnBlur, value: valueInternal, onChange: handleInputChange, autoFocus: editingInternal })));
        }
        else {
            return (React__default['default'].createElement("input", __assign({ className: styles.Editext__input, 
                // @ts-ignore
                editext: dataAttributes.input, 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: props.tabIndex }, props.inputProps, { onKeyDown: handleKeyDown, onBlur: handleOnBlur, value: valueInternal, type: props.type || 'text', onChange: handleInputChange, autoFocus: editingInternal })));
        }
    }
    function _renderEditingMode() {
        var inputElem = _renderInput();
        // calculate save button classes
        var saveButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__save_button, props.hideIcons && "" + styles.Editext__hide_default_icons);
        var saveButtonClass = props.saveButtonClassName || saveButtonDefaultClasses;
        // calculate cancel button classes
        var cancelButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__cancel_button, props.hideIcons && "" + styles.Editext__hide_default_icons);
        var cancelButtonClass = props.cancelButtonClassName || cancelButtonDefaultClasses;
        var editContainerClass = styles.Editext__editing_container;
        if (props.editContainerClassName)
            editContainerClass = props.editContainerClassName;
        if (props.viewContainerClassName)
            editContainerClass = props.viewContainerClassName;
        var alignment = props.buttonsAlign || 'after';
        var buttonsContainerClass = classnames(styles.Editext__buttons_container, alignment === 'before' && "" + styles.Editext__buttons_before_aligned, alignment === 'after' && "" + styles.Editext__buttons_after_aligned);
        return (React__default['default'].createElement("div", null,
            React__default['default'].createElement("div", { ref: editingContainer, className: editContainerClass, 
                // @ts-ignore
                editext: dataAttributes.editContainer },
                alignment === 'after' && inputElem,
                React__default['default'].createElement("div", { className: buttonsContainerClass, ref: editingButtons },
                    React__default['default'].createElement("button", { ref: saveButton, 
                        // @ts-ignore
                        editext: dataAttributes.saveButton, type: "button", className: saveButtonClass, onClick: handleSave }, props.saveButtonContent),
                    React__default['default'].createElement("button", { type: "button", 
                        // @ts-ignore
                        editext: dataAttributes.cancelButton, className: cancelButtonClass, onClick: handleCancel }, props.cancelButtonContent)),
                alignment === 'before' && inputElem),
            !valid && !props.onValidationFail && (React__default['default'].createElement("div", { className: styles.Editext__validation_message }, props.validationMessage || defaultValidationMessage)),
            props.hint && (React__default['default'].createElement("div", { className: styles.Editext__hint, 
                // @ts-ignore
                editext: dataAttributes.hint }, props.hint))));
    }
    function _renderViewMode() {
        // calculate edit button classes
        var editButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__edit_button, props.hideIcons && "" + styles.Editext__hide_default_icons);
        var editButtonClass = props.editButtonClassName || editButtonDefaultClasses;
        var viewContainerClass = classnames(props.viewContainerClassName || styles.Editext__view_container, props.showButtonsOnHover &&
            "" + styles.Editext__buttons_showButtonsOnHover);
        var alignment = props.buttonsAlign || 'after';
        var buttonsContainerClass = classnames(styles.Editext__buttons_container, alignment === 'before' && "" + styles.Editext__buttons_before_aligned, alignment === 'after' && "" + styles.Editext__buttons_after_aligned);
        var viewClickHandler = props.editOnViewClick
            ? handleActivateEditMode
            : undefined;
        var _value = typeof props.renderValue === 'function'
            ? props.renderValue(valueInternal)
            : valueInternal;
        return (React__default['default'].createElement("div", { className: viewContainerClass, 
            // @ts-ignore
            editext: dataAttributes.viewContainer },
            alignment === 'after' && (React__default['default'].createElement("div", __assign({ 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: props.tabIndex }, props.viewProps, { onKeyDown: handleKeyDownForView, onFocus: handleViewFocus, onClick: viewClickHandler, 
                // @ts-ignore
                editext: "view" }), _value)),
            React__default['default'].createElement("div", { className: buttonsContainerClass },
                React__default['default'].createElement("button", __assign({ type: "button", className: editButtonClass }, props.editButtonProps, { 
                    // @ts-ignore
                    editext: dataAttributes.editButton, onClick: handleActivateEditMode }), props.editButtonContent)),
            alignment === 'before' && (React__default['default'].createElement("div", __assign({ 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: props.tabIndex }, props.viewProps, { onKeyDown: handleKeyDownForView, onFocus: handleViewFocus, onClick: viewClickHandler, 
                // @ts-ignore
                editext: dataAttributes.viewContainer }), _value))));
    }
    var mode = editingInternal ? _renderEditingMode() : _renderViewMode();
    var clsName = classnames(((_a = props.containerProps) === null || _a === void 0 ? void 0 : _a.className) ||
        props.mainContainerClassName ||
        styles.Editext__main_container, props.className);
    return (React__default['default'].createElement("div", __assign({}, props.containerProps, { className: clsName, 
        // @ts-ignore
        editext: dataAttributes.mainContainer }), mode));
}

module.exports = EdiText;
//# sourceMappingURL=index.js.map
