'use strict';

var jsxRuntime = require('react/jsx-runtime');
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

function EdiText(_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, _d = _a.validationMessage, validationMessage = _d === void 0 ? 'Invalid Value' : _d, _f = _a.cancelButtonContent, cancelButtonContent = _f === void 0 ? '' : _f, _g = _a.saveButtonContent, saveButtonContent = _g === void 0 ? '' : _g, _h = _a.editButtonContent, editButtonContent = _h === void 0 ? '' : _h, _j = _a.hideIcons, hideIcons = _j === void 0 ? false : _j, _k = _a.buttonsAlign, buttonsAlign = _k === void 0 ? 'after' : _k, _l = _a.editing, editing = _l === void 0 ? false : _l, _m = _a.saveButtonClassName, saveButtonClassName = _m === void 0 ? '' : _m, _o = _a.cancelButtonClassName, cancelButtonClassName = _o === void 0 ? '' : _o, _p = _a.editButtonClassName, editButtonClassName = _p === void 0 ? '' : _p, _q = _a.viewContainerClassName, viewContainerClassName = _q === void 0 ? '' : _q, _r = _a.editContainerClassName, editContainerClassName = _r === void 0 ? '' : _r, _s = _a.mainContainerClassName, mainContainerClassName = _s === void 0 ? '' : _s, _t = _a.showButtonsOnHover, showButtonsOnHover = _t === void 0 ? false : _t, cancelOnEscape = _a.cancelOnEscape, cancelOnUnfocus = _a.cancelOnUnfocus, submitOnUnfocus = _a.submitOnUnfocus, submitOnEnter = _a.submitOnEnter, startEditingOnEnter = _a.startEditingOnEnter, startEditingOnFocus = _a.startEditingOnFocus, tabIndex = _a.tabIndex, className = _a.className, hint = _a.hint, editOnViewClick = _a.editOnViewClick, onSave = _a.onSave, renderValue = _a.renderValue, _u = _a.validation, validation = _u === void 0 ? function (_v) { return true; } : _u, onValidationFail = _a.onValidationFail, _w = _a.onEditingStart, onEditingStart = _w === void 0 ? function (_v) { return null; } : _w, _x = _a.onCancel, onCancel = _x === void 0 ? function (_v) { return null; } : _x, _y = _a.inputProps, inputProps = _y === void 0 ? {
        onKeyDown: function (_e) { },
        onBlur: function (_e) { },
    } : _y, _z = _a.viewProps, viewProps = _z === void 0 ? {
        onKeyDown: function (_e) { },
        onFocus: function (_e) { },
    } : _z;
    // state
    var _0 = React.useState(editing), editingInternal = _0[0], setEditingInternal = _0[1];
    var _1 = React.useState(true), valid = _1[0], setValid = _1[1];
    var _2 = React.useState(value || ''), valueInternal = _2[0], setValueInternal = _2[1];
    var _3 = React.useState(undefined), savedValue = _3[0], setSavedValue = _3[1];
    var _4 = React.useState(false), viewFocused = _4[0], setViewFocused = _4[1];
    // refs
    var saveButton = React__default['default'].createRef();
    var editingContainer = React__default['default'].createRef();
    var editingButtons = React__default['default'].createRef();
    React.useEffect(function () {
        if (cancelOnUnfocus && submitOnUnfocus) {
            console.warn(cancelOnConflictMessage);
        }
    }, [cancelOnUnfocus, submitOnUnfocus]);
    React.useEffect(function () {
        if (value !== undefined) {
            setValueInternal(value);
            setSavedValue(value);
        }
        if (editing !== undefined) {
            setEditingInternal(editing);
        }
    }, [editing, value]);
    function handleKeyDown(e) {
        var isEnter = [13, 'Enter'].some(function (c) { return (e === null || e === void 0 ? void 0 : e.keyCode) === c || (e === null || e === void 0 ? void 0 : e.code) === c; });
        var isEscape = [27, 'Escape', 'Esc'].some(function (c) { return (e === null || e === void 0 ? void 0 : e.keyCode) === c || e.code === c; });
        if (isEnter) {
            submitOnEnter && handleSave();
            e === null || e === void 0 ? void 0 : e.preventDefault();
        }
        if (isEscape) {
            cancelOnEscape && handleCancel();
            e.preventDefault();
        }
        (inputProps === null || inputProps === void 0 ? void 0 : inputProps.onKeyDown) && inputProps.onKeyDown(e); // TODO: this sucks.
    }
    function handleOnBlur(e) {
        var _a;
        var isEditingButton = (_a = editingButtons.current) === null || _a === void 0 ? void 0 : _a.contains(e === null || e === void 0 ? void 0 : e.relatedTarget);
        cancelOnUnfocus && !isEditingButton && handleCancel();
        submitOnUnfocus && !isEditingButton && !cancelOnUnfocus && handleSave();
        (inputProps === null || inputProps === void 0 ? void 0 : inputProps.onBlur) && inputProps.onBlur(e); // TODO: this sucks.
    }
    function handleViewFocus(e) {
        setViewFocused(true);
        startEditingOnFocus && setEditingInternal(true);
        (viewProps === null || viewProps === void 0 ? void 0 : viewProps.onFocus) && viewProps.onFocus(e);
    }
    function handleKeyDownForView(e) {
        var isEnter = [13, 'Enter'].some(function (c) { return e.keyCode === c || e.code === c; });
        var startEditing = isEnter && viewFocused && startEditingOnEnter;
        startEditing && e.preventDefault();
        startEditing && setEditingInternal(true);
        (viewProps === null || viewProps === void 0 ? void 0 : viewProps.onKeyDown) && viewProps.onKeyDown(e);
    }
    function handleInputChange(e) {
        setValid(true);
        setValueInternal(e.target.value);
    }
    function handleCancel() {
        var val = savedValue !== null && savedValue !== void 0 ? savedValue : value;
        setValid(true);
        setEditingInternal(false);
        setValueInternal(val);
        onCancel === null || onCancel === void 0 ? void 0 : onCancel(val, inputProps);
    }
    function handleActivateEditMode() {
        setEditingInternal(true);
        onEditingStart === null || onEditingStart === void 0 ? void 0 : onEditingStart(valueInternal, inputProps);
    }
    function handleSave() {
        var isValid = validation(valueInternal);
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
            return (jsxRuntime.jsx("textarea", __assign({ className: styles.Editext__input, 
                // @ts-ignore
                editext: dataAttributes.input, 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: tabIndex }, inputProps, { onBlur: handleOnBlur, value: valueInternal, onChange: handleInputChange, autoFocus: editingInternal }), void 0));
        }
        else {
            return (jsxRuntime.jsx("input", __assign({ className: styles.Editext__input, 
                // @ts-ignore
                editext: dataAttributes.input, 
                // this is here because,
                // we still allow people to pass the tabIndex via inputProps
                // also backward compatibility.
                tabIndex: tabIndex }, inputProps, { onKeyDown: handleKeyDown, onBlur: handleOnBlur, value: valueInternal, type: type, onChange: handleInputChange, autoFocus: editingInternal }), void 0));
        }
    }
    function _renderEditingMode() {
        var inputElem = _renderInput();
        // calculate save button classes
        var saveButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__save_button, hideIcons && "" + styles.Editext__hide_default_icons);
        var saveButtonClass = saveButtonClassName || saveButtonDefaultClasses;
        // calculate cancel button classes
        var cancelButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__cancel_button, hideIcons && "" + styles.Editext__hide_default_icons);
        var cancelButtonClass = cancelButtonClassName || cancelButtonDefaultClasses;
        var editContainerClass = styles.Editext__editing_container;
        if (editContainerClassName)
            editContainerClass = editContainerClassName;
        if (viewContainerClassName)
            editContainerClass = viewContainerClassName;
        var buttonsContainerClass = classnames(styles.Editext__buttons_container, buttonsAlign === 'before' && "" + styles.Editext__buttons_before_aligned, buttonsAlign === 'after' && "" + styles.Editext__buttons_after_aligned);
        return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", __assign({ ref: editingContainer, className: editContainerClass, 
                    // @ts-ignore
                    editext: dataAttributes.editContainer }, { children: [buttonsAlign === 'after' && inputElem, jsxRuntime.jsxs("div", __assign({ className: buttonsContainerClass, ref: editingButtons }, { children: [jsxRuntime.jsx("button", __assign({ ref: saveButton, 
                                    // @ts-ignore
                                    editext: dataAttributes.saveButton, type: "button", className: saveButtonClass, onClick: handleSave }, { children: saveButtonContent }), void 0),
                                jsxRuntime.jsx("button", __assign({ type: "button", 
                                    // @ts-ignore
                                    editext: dataAttributes.cancelButton, className: cancelButtonClass, onClick: handleCancel }, { children: cancelButtonContent }), void 0)] }), void 0), buttonsAlign === 'before' && inputElem] }), void 0),
                !valid && !onValidationFail && (jsxRuntime.jsx("div", __assign({ className: styles.Editext__validation_message }, { children: validationMessage }), void 0)),
                hint && (jsxRuntime.jsx("div", __assign({ className: styles.Editext__hint, 
                    // @ts-ignore
                    editext: dataAttributes.hint }, { children: hint }), void 0))] }, void 0));
    }
    function _renderViewMode() {
        // calculate edit button classes
        var editButtonDefaultClasses = classnames("" + styles.Editext__button, "" + styles.Editext__edit_button, hideIcons && "" + styles.Editext__hide_default_icons);
        var editButtonClass = editButtonClassName || editButtonDefaultClasses;
        var viewContainerClass = classnames(viewContainerClassName || styles.Editext__view_container, showButtonsOnHover && "" + styles.Editext__buttons_showButtonsOnHover);
        var buttonsContainerClass = classnames(styles.Editext__buttons_container, buttonsAlign === 'before' && "" + styles.Editext__buttons_before_aligned, buttonsAlign === 'after' && "" + styles.Editext__buttons_after_aligned);
        var viewClickHandler = editOnViewClick
            ? handleActivateEditMode
            : undefined;
        var _value = typeof renderValue === 'function'
            ? renderValue(valueInternal)
            : valueInternal;
        return (jsxRuntime.jsxs("div", __assign({ className: viewContainerClass, 
            // @ts-ignore
            editext: dataAttributes.viewContainer }, { children: [buttonsAlign === 'after' && (jsxRuntime.jsx("div", __assign({ 
                    // this is here because,
                    // we still allow people to pass the tabIndex via inputProps
                    // also backward compatibility.
                    tabIndex: tabIndex }, viewProps, { onKeyDown: handleKeyDownForView, onFocus: handleViewFocus, onClick: viewClickHandler, 
                    // @ts-ignore
                    editext: "view" }, { children: _value }), void 0)),
                jsxRuntime.jsx("div", __assign({ className: buttonsContainerClass }, { children: jsxRuntime.jsx("button", __assign({ type: "button", 
                        // @ts-ignore
                        editext: dataAttributes.editButton, className: editButtonClass, onClick: handleActivateEditMode }, { children: editButtonContent }), void 0) }), void 0),
                buttonsAlign === 'before' && (jsxRuntime.jsx("div", __assign({ 
                    // this is here because,
                    // we still allow people to pass the tabIndex via inputProps
                    // also backward compatibility.
                    tabIndex: tabIndex }, viewProps, { onKeyDown: handleKeyDownForView, onFocus: handleViewFocus, onClick: viewClickHandler, 
                    // @ts-ignore
                    editext: dataAttributes.viewContainer }, { children: _value }), void 0))] }), void 0));
    }
    var mode = editingInternal ? _renderEditingMode() : _renderViewMode();
    var clsName = classnames(mainContainerClassName || styles.Editext__main_container, className);
    return jsxRuntime.jsx("div", __assign({ className: clsName }, { children: mode }), void 0);
}

module.exports = EdiText;
//# sourceMappingURL=index.js.map
