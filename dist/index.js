'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

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

var css_248z = ".styles_Editext__button__6H8n_ {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles_Editext__button__6H8n_:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles_Editext__input__1534X {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles_Editext__main_container__2Y-IL {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles_Editext__editing_container__3yvUv {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles_Editext__view_container__2l2kB {\n  display: flex;\n  align-items: center;\n}\n\n.styles_Editext__buttons_container__1kphL {\n  display: flex;\n}\n\n.styles_Editext__buttons_showButtonsOnHover__EUUD5 .styles_Editext__buttons_container__1kphL {\n  visibility: hidden;\n}\n\n.styles_Editext__buttons_showButtonsOnHover__EUUD5:hover .styles_Editext__buttons_container__1kphL {\n  visibility: visible;\n}\n\n.styles_Editext__buttons_before_aligned__NnoWq {\n  margin-right: 5px;\n}\n\n.styles_Editext__buttons_after_aligned__1nlcG {\n  margin-left: 5px;\n}\n\n.styles_Editext__validation_message__3B-OU {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles_Editext__cancel_button__259hb {\n  color: crimson;\n}\n\n.styles_Editext__cancel_button__259hb::before {\n  content: \"\\2715\";\n  margin: 3px;\n}\n\n.styles_Editext__edit_button__hthOZ {\n  color: #000;\n}\n\n.styles_Editext__edit_button__hthOZ::before {\n  content: \"\\270E\";\n  margin: 3px;\n}\n\n.styles_Editext__save_button__3WN6q {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles_Editext__save_button__3WN6q::before {\n  content: \"\\2713\";\n  margin: 3px;\n}\n\n.styles_Editext__hide_default_icons__AV_7m::before {\n  content: none;\n  margin: 0;\n}\n\n.styles_Editext__hint__2QU2S {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n";
var styles = {"Editext__button":"styles_Editext__button__6H8n_","Editext__input":"styles_Editext__input__1534X","Editext__main_container":"styles_Editext__main_container__2Y-IL","Editext__editing_container":"styles_Editext__editing_container__3yvUv","Editext__view_container":"styles_Editext__view_container__2l2kB","Editext__buttons_container":"styles_Editext__buttons_container__1kphL","Editext__buttons_showButtonsOnHover":"styles_Editext__buttons_showButtonsOnHover__EUUD5","Editext__buttons_before_aligned":"styles_Editext__buttons_before_aligned__NnoWq","Editext__buttons_after_aligned":"styles_Editext__buttons_after_aligned__1nlcG","Editext__validation_message":"styles_Editext__validation_message__3B-OU","Editext__cancel_button":"styles_Editext__cancel_button__259hb","Editext__edit_button":"styles_Editext__edit_button__hthOZ","Editext__save_button":"styles_Editext__save_button__3WN6q","Editext__hide_default_icons":"styles_Editext__hide_default_icons__AV_7m","Editext__hint":"styles_Editext__hint__2QU2S"};
styleInject(css_248z);

function classnames() {
  /**
   * Our simple classnames replica.
   * This is enough for me.
   */
  return Array.apply(void 0, arguments).filter(function (a) {
    return a;
  }).join(' ');
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
  hint: 'hint'
};
var cancelOnConflictMessage = 'EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. ' + '`submitOnUnfocus` is ignored in this case. Please remove one of these.';

var EdiText = /*#__PURE__*/function (_Component) {
  _inherits(EdiText, _Component);

  var _super = _createSuper(EdiText);

  function EdiText(props) {
    var _this;

    _classCallCheck(this, EdiText);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var _this$props = _this.props,
          submitOnEnter = _this$props.submitOnEnter,
          inputProps = _this$props.inputProps,
          cancelOnEscape = _this$props.cancelOnEscape;
      var isEnter = [13, 'Enter'].some(function (c) {
        return e.keyCode === c || e.code === c;
      });
      var isEscape = [27, 'Escape', 'Esc'].some(function (c) {
        return e.keyCode === c || e.code === c;
      });

      if (isEnter) {
        submitOnEnter && _this.handleSave();
        e.preventDefault();
      }

      if (isEscape) {
        cancelOnEscape && _this.handleCancel();
        e.preventDefault();
      }

      inputProps.onKeyDown && inputProps.onKeyDown(e); // TODO: this sucks.
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function (e) {
      var _this$props2 = _this.props,
          cancelOnUnfocus = _this$props2.cancelOnUnfocus,
          submitOnUnfocus = _this$props2.submitOnUnfocus,
          inputProps = _this$props2.inputProps;

      var isEditingButton = _this.editingButtons.current.contains(e.relatedTarget);

      cancelOnUnfocus && !isEditingButton && _this.handleCancel();
      submitOnUnfocus && !isEditingButton && !cancelOnUnfocus && _this.handleSave();
      inputProps.onBlur && inputProps.onBlur(e); // TODO: this sucks.
    });

    _defineProperty(_assertThisInitialized(_this), "handleViewFocus", function (e) {
      _this.setState({
        viewFocused: true
      });

      var _this$props3 = _this.props,
          startEditingOnFocus = _this$props3.startEditingOnFocus,
          viewProps = _this$props3.viewProps;
      startEditingOnFocus && _this.setState({
        editing: true
      });
      viewProps.onFocus && viewProps.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDownForView", function (e) {
      var isEnter = [13, 'Enter'].some(function (c) {
        return e.keyCode === c || e.code === c;
      });
      var _this$props4 = _this.props,
          startEditingOnEnter = _this$props4.startEditingOnEnter,
          viewProps = _this$props4.viewProps;
      var startEditing = isEnter && _this.state.viewFocused && startEditingOnEnter;
      startEditing && e.preventDefault();
      startEditing && _this.setState({
        editing: true
      });
      viewProps.onKeyDown && viewProps.onKeyDown(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      _this.setState({
        valid: true,
        value: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      var _this$state$savedValu;

      _this.setState({
        valid: true,
        editing: false,
        value: (_this$state$savedValu = _this.state.savedValue) !== null && _this$state$savedValu !== void 0 ? _this$state$savedValu : _this.props.value
      }, function () {
        return _this.props.onCancel(_this.state.value, _this.props.inputProps);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActivateEditMode", function () {
      _this.setState({
        editing: true
      }, function () {
        _this.props.onEditingStart(_this.state.value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function () {
      var _this$props5 = _this.props,
          onSave = _this$props5.onSave,
          validation = _this$props5.validation,
          onValidationFail = _this$props5.onValidationFail,
          inputProps = _this$props5.inputProps;
      var isValid = validation(_this.state.value);

      if (!isValid) {
        return _this.setState({
          valid: false
        }, function () {
          onValidationFail && onValidationFail(_this.state.value);
        });
      }

      _this.setState({
        editing: false,
        savedValue: _this.state.value
      }, function () {
        return onSave(_this.state.savedValue, inputProps);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_renderEditingMode", function () {
      var _this$props6 = _this.props,
          saveButtonClassName = _this$props6.saveButtonClassName,
          saveButtonContent = _this$props6.saveButtonContent,
          cancelButtonClassName = _this$props6.cancelButtonClassName,
          editContainerClassName = _this$props6.editContainerClassName,
          viewContainerClassName = _this$props6.viewContainerClassName,
          cancelButtonContent = _this$props6.cancelButtonContent,
          onValidationFail = _this$props6.onValidationFail,
          validationMessage = _this$props6.validationMessage,
          hint = _this$props6.hint,
          hideIcons = _this$props6.hideIcons,
          buttonsAlign = _this$props6.buttonsAlign;

      var inputElem = _this._renderInput(); // calculate save button classes


      var saveButtonDefaultClasses = classnames("".concat(styles.Editext__button), "".concat(styles.Editext__save_button), hideIcons && "".concat(styles.Editext__hide_default_icons));
      var saveButtonClass = saveButtonClassName || saveButtonDefaultClasses; // calculate cancel button classes

      var cancelButtonDefaultClasses = classnames("".concat(styles.Editext__button), "".concat(styles.Editext__cancel_button), hideIcons && "".concat(styles.Editext__hide_default_icons));
      var cancelButtonClass = cancelButtonClassName || cancelButtonDefaultClasses;
      var editContainerClass = styles.Editext__editing_container;
      if (editContainerClassName) editContainerClass = editContainerClassName;
      if (viewContainerClassName) editContainerClass = viewContainerClassName;
      var buttonsContainerClass = classnames(styles.Editext__buttons_container, buttonsAlign === 'before' && "".concat(styles.Editext__buttons_before_aligned), buttonsAlign === 'after' && "".concat(styles.Editext__buttons_after_aligned));
      return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
        ref: _this.editingContainer,
        className: editContainerClass,
        editext: dataAttributes.editContainer
      }, buttonsAlign === 'after' && inputElem, /*#__PURE__*/React__default['default'].createElement("div", {
        className: buttonsContainerClass,
        ref: _this.editingButtons
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        ref: _this.saveButton,
        editext: dataAttributes.saveButton,
        type: "button",
        className: saveButtonClass,
        onClick: _this.handleSave
      }, saveButtonContent), /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        editext: dataAttributes.cancelButton,
        className: cancelButtonClass,
        onClick: _this.handleCancel
      }, cancelButtonContent)), buttonsAlign === 'before' && inputElem), !_this.state.valid && !onValidationFail && /*#__PURE__*/React__default['default'].createElement("div", {
        className: styles.Editext__validation_message
      }, validationMessage), hint && /*#__PURE__*/React__default['default'].createElement("div", {
        className: styles.Editext__hint,
        editext: dataAttributes.hint
      }, hint));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderViewMode", function () {
      var _this$props7 = _this.props,
          viewProps = _this$props7.viewProps,
          editButtonClassName = _this$props7.editButtonClassName,
          editButtonContent = _this$props7.editButtonContent,
          viewContainerClassName = _this$props7.viewContainerClassName,
          hideIcons = _this$props7.hideIcons,
          buttonsAlign = _this$props7.buttonsAlign,
          editOnViewClick = _this$props7.editOnViewClick,
          showButtonsOnHover = _this$props7.showButtonsOnHover,
          renderValue = _this$props7.renderValue; // calculate edit button classes

      var editButtonDefaultClasses = classnames("".concat(styles.Editext__button), "".concat(styles.Editext__edit_button), hideIcons && "".concat(styles.Editext__hide_default_icons));
      var editButtonClass = editButtonClassName || editButtonDefaultClasses;
      var viewContainerClass = classnames(viewContainerClassName || styles.Editext__view_container, showButtonsOnHover && "".concat(styles.Editext__buttons_showButtonsOnHover));
      var buttonsContainerClass = classnames(styles.Editext__buttons_container, buttonsAlign === 'before' && "".concat(styles.Editext__buttons_before_aligned), buttonsAlign === 'after' && "".concat(styles.Editext__buttons_after_aligned));
      var viewClickHandler = editOnViewClick ? _this.handleActivateEditMode : undefined;
      var value = typeof renderValue === 'function' ? renderValue(_this.state.value) : _this.state.value;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: viewContainerClass,
        editext: dataAttributes.viewContainer
      }, buttonsAlign === 'after' && /*#__PURE__*/React__default['default'].createElement("div", _extends({
        // this is here because,
        // we still allow people to pass the tabIndex via inputProps
        // also backward compatibility.
        tabIndex: _this.props.tabIndex
      }, viewProps, {
        onKeyDown: _this.handleKeyDownForView,
        onFocus: _this.handleViewFocus,
        onClick: viewClickHandler,
        editext: "view"
      }), value), /*#__PURE__*/React__default['default'].createElement("div", {
        className: buttonsContainerClass
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        editext: dataAttributes.editButton,
        className: editButtonClass,
        onClick: _this.handleActivateEditMode
      }, editButtonContent)), buttonsAlign === 'before' && /*#__PURE__*/React__default['default'].createElement("div", _extends({
        // this is here because,
        // we still allow people to pass the tabIndex via inputProps
        // also backward compatibility.
        tabIndex: _this.props.tabIndex
      }, viewProps, {
        onKeyDown: _this.handleKeyDownForView,
        onFocus: _this.handleViewFocus,
        onClick: viewClickHandler,
        editext: dataAttributes.viewContainer
      }), value));
    });

    _this.state = {
      editing: props.editing,
      valid: true,
      value: props.value || '',
      savedValue: undefined,
      viewFocused: false
    };
    _this.saveButton = /*#__PURE__*/React__default['default'].createRef();
    _this.input = /*#__PURE__*/React__default['default'].createRef();
    _this.editingContainer = /*#__PURE__*/React__default['default'].createRef();
    _this.editingButtons = /*#__PURE__*/React__default['default'].createRef();
    return _this;
  }

  _createClass(EdiText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkPropsConsistency();
    }
  }, {
    key: "checkPropsConsistency",
    value: function checkPropsConsistency() {
      if (this.props.cancelOnUnfocus && this.props.submitOnUnfocus) {
        console.warn(cancelOnConflictMessage);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _prevState) {
      var nextState = {};

      if (this.props.value !== undefined && prevProps.value !== this.props.value) {
        nextState.value = this.props.value;
        nextState.savedValue = this.props.value;
      }

      if (prevProps.editing !== undefined && prevProps.editing !== this.props.editing) {
        nextState.editing = this.props.editing;
      }

      if (Object.keys(nextState).length > 0) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(nextState);
      }
    }
  }, {
    key: "_renderInput",
    value: function _renderInput() {
      if (this.props.type === 'textarea') {
        return /*#__PURE__*/React__default['default'].createElement("textarea", _extends({
          ref: this.input,
          className: styles.Editext__input,
          editext: dataAttributes.input // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          ,
          tabIndex: this.props.tabIndex
        }, this.props.inputProps, {
          onBlur: this.handleOnBlur,
          value: this.state.value,
          onChange: this.handleInputChange,
          autoFocus: this.state.editing
        }));
      } else {
        return /*#__PURE__*/React__default['default'].createElement("input", _extends({
          ref: this.input,
          className: styles.Editext__input,
          editext: dataAttributes.input // this is here because,
          // we still allow people to pass the tabIndex via inputProps
          // also backward compatibility.
          ,
          tabIndex: this.props.tabIndex
        }, this.props.inputProps, {
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleOnBlur,
          value: this.state.value,
          type: this.props.type,
          onChange: this.handleInputChange,
          autoFocus: this.state.editing
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.state.editing ? this._renderEditingMode() : this._renderViewMode();
      var _this$props8 = this.props,
          mainContainerClassName = _this$props8.mainContainerClassName,
          className = _this$props8.className;
      var clsName = classnames(mainContainerClassName || styles.Editext__main_container, className);
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsName
      }, mode);
    }
  }]);

  return EdiText;
}(React.Component);
EdiText.defaultProps = {
  value: '',
  type: 'text',
  validationMessage: 'Invalid Value',
  validation: function validation(_v) {
    return true;
  },
  onEditingStart: function onEditingStart(_v) {
    return null;
  },
  onCancel: function onCancel(_v) {
    return null;
  },
  inputProps: {
    onKeyDown: function onKeyDown(_e) {},
    onBlur: function onBlur(_e) {}
  },
  viewProps: {
    onKeyDown: function onKeyDown(_e) {},
    onFocus: function onFocus(_e) {}
  },
  cancelButtonContent: '',
  saveButtonContent: '',
  editButtonContent: '',
  hideIcons: false,
  buttonsAlign: 'after',
  editing: false
};
EdiText.propTypes = {
  inputProps: PropTypes__default['default'].object,
  viewProps: PropTypes__default['default'].object,
  value: PropTypes__default['default'].string.isRequired,
  hint: PropTypes__default['default'].node,
  validationMessage: PropTypes__default['default'].node,
  validation: PropTypes__default['default'].func,
  onValidationFail: PropTypes__default['default'].func,
  type: PropTypes__default['default'].oneOf(['text', 'textarea', 'password', 'email', 'number', 'date', 'datetime-local', 'time', 'month', 'url', 'week', 'tel']).isRequired,
  // Events
  onCancel: PropTypes__default['default'].func,
  onSave: PropTypes__default['default'].func.isRequired,
  onEditingStart: PropTypes__default['default'].func,
  // classNames
  className: PropTypes__default['default'].string,
  saveButtonClassName: PropTypes__default['default'].string,
  editButtonClassName: PropTypes__default['default'].string,
  cancelButtonClassName: PropTypes__default['default'].string,
  mainContainerClassName: PropTypes__default['default'].string,
  editContainerClassName: PropTypes__default['default'].string,
  viewContainerClassName: PropTypes__default['default'].string,
  // Custom Button Texts
  cancelButtonContent: PropTypes__default['default'].any,
  saveButtonContent: PropTypes__default['default'].any,
  editButtonContent: PropTypes__default['default'].any,
  hideIcons: PropTypes__default['default'].bool,
  buttonsAlign: PropTypes__default['default'].oneOf(['after', 'before']),
  editOnViewClick: PropTypes__default['default'].bool,
  editing: PropTypes__default['default'].bool,
  showButtonsOnHover: PropTypes__default['default'].bool,
  submitOnEnter: PropTypes__default['default'].bool,
  cancelOnEscape: PropTypes__default['default'].bool,
  cancelOnUnfocus: PropTypes__default['default'].bool,
  submitOnUnfocus: PropTypes__default['default'].bool,
  // navigating between inputs via tabbing is common.
  // And tabIndex will probably be same for both view and input props
  // here we are adding a new prop just for this special case to save people
  // from creating duplicate code for both `inputProps` and `viewProps`
  tabIndex: PropTypes__default['default'].any,
  startEditingOnFocus: PropTypes__default['default'].bool,
  startEditingOnEnter: PropTypes__default['default'].bool,
  renderValue: PropTypes__default['default'].func
};

module.exports = EdiText;
//# sourceMappingURL=index.js.map
