import e,{useState as t,useEffect as n}from"react";var o=function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function i(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}s((o=o.apply(e,t||[])).next())}))}function a(e,t){var n,o,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},r=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return r.next=l(0),r.throw=l(1),r.return=l(2),"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&l[0]?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,o=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],o=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}"function"==typeof SuppressedError&&SuppressedError;var r="styles-module_Editext__button__sxYQX",l="styles-module_Editext__input__2-M50",s="styles-module_Editext__main_container__2azCD",u="styles-module_Editext__editing_container__1C4d6",c="styles-module_Editext__view_container__3oSYx",d="styles-module_Editext__buttons_container__2za5Q",_="styles-module_Editext__buttons_showButtonsOnHover__2Bfsd",f="styles-module_Editext__buttons_before_aligned__3Eg6w",m="styles-module_Editext__buttons_after_aligned__2ZHQz",v="styles-module_Editext__validation_message__1puii",p="styles-module_Editext__cancel_button__26sqr",x="styles-module_Editext__edit_button__310_J",y="styles-module_Editext__save_button__1Dlwo",b="styles-module_Editext__hide_default_icons__2k5RX",E="styles-module_Editext__hint__EGeV0";function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Array.apply(void 0,e).filter((function(e){return e})).join(" ")}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.styles-module_Editext__button__sxYQX {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles-module_Editext__button__sxYQX:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles-module_Editext__input__2-M50 {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles-module_Editext__main_container__2azCD {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles-module_Editext__editing_container__1C4d6 {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles-module_Editext__view_container__3oSYx {\n  display: flex;\n  align-items: center;\n}\n\n.styles-module_Editext__buttons_container__2za5Q {\n  display: flex;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd .styles-module_Editext__buttons_container__2za5Q {\n  visibility: hidden;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd:hover .styles-module_Editext__buttons_container__2za5Q {\n  visibility: visible;\n}\n\n.styles-module_Editext__buttons_before_aligned__3Eg6w {\n  margin-right: 5px;\n}\n\n.styles-module_Editext__buttons_after_aligned__2ZHQz {\n  margin-left: 5px;\n}\n\n.styles-module_Editext__validation_message__1puii {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles-module_Editext__cancel_button__26sqr {\n  color: crimson;\n}\n\n.styles-module_Editext__cancel_button__26sqr::before {\n  content: "\\2715";\n  margin: 3px;\n}\n\n.styles-module_Editext__edit_button__310_J {\n  color: #000;\n}\n\n.styles-module_Editext__edit_button__310_J::before {\n  content: "\\270E";\n  margin: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo::before {\n  content: "\\2713";\n  margin: 3px;\n}\n\n.styles-module_Editext__hide_default_icons__2k5RX::before {\n  content: none;\n  margin: 0;\n}\n\n.styles-module_Editext__hint__EGeV0 {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n');var g="main-container",w="view-container",C="edit-container",N="validation-container",O="edit-button",P="save-button",B="cancel-button",k="input",D="hint";function I(I){var z,S=t(I.editing),U=S[0],F=S[1],Q=t(!0),V=Q[0],K=Q[1],H=t(I.value||""),T=H[0],j=H[1],R=t(void 0),X=R[0],Y=R[1],A=t(!1),q=A[0],G=A[1],J=e.createRef(),M=e.createRef(),Z=e.createRef();function L(e){var t,n=[13,"Enter"].some((function(t){return e.key===t||e.code===t})),o=[27,"Escape","Esc"].some((function(t){return e.code===t||e.key===t}));n&&(I.submitOnEnter&&ie(),null==e||e.preventDefault()),o&&(I.cancelOnEscape&&ne(),e.preventDefault()),(null===(t=I.inputProps)||void 0===t?void 0:t.onKeyDown)&&I.inputProps.onKeyDown(e)}function W(e){var t,n,o=null===(t=Z.current)||void 0===t?void 0:t.contains(null==e?void 0:e.relatedTarget);I.cancelOnUnfocus&&!o&&ne(),I.submitOnUnfocus&&!o&&!I.cancelOnUnfocus&&ie(),(null===(n=I.inputProps)||void 0===n?void 0:n.onBlur)&&I.inputProps.onBlur(e)}function $(e){var t;G(!0),I.startEditingOnFocus&&F(!0),(null===(t=I.viewProps)||void 0===t?void 0:t.onFocus)&&I.viewProps.onFocus(e)}function ee(e){var t,n=[13,"Enter"].some((function(t){return e.key===t||e.code===t}))&&q&&I.startEditingOnEnter;n&&e.preventDefault(),n&&F(!0),(null===(t=I.viewProps)||void 0===t?void 0:t.onKeyDown)&&I.viewProps.onKeyDown(e)}function te(e){var t,n;K(!0),j(e.target.value),null===(n=null===(t=I.inputProps)||void 0===t?void 0:t.onChange)||void 0===n||n.call(t,e)}function ne(){var e,t=null!=X?X:I.value;K(!0),F(!1),j(t),null===(e=I.onCancel)||void 0===e||e.call(I,t,I.inputProps)}function oe(){var e,t;(void 0===(t=I.canEdit)||("function"==typeof t?t():t))&&(F(!0),null===(e=I.onEditingStart)||void 0===e||e.call(I,T,I.inputProps))}function ie(){return i(this,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return"function"!=typeof I.validation?[3,3]:[4,I.validation(T)];case 1:return t.sent()?[3,3]:(K(!1),[4,null===(e=I.onValidationFail)||void 0===e?void 0:e.call(I,T)]);case 2:return t.sent(),[2];case 3:return F(!1),Y(T),I.onSave(T,I.inputProps),[2]}}))}))}n((function(){I.cancelOnUnfocus&&I.submitOnUnfocus&&console.warn("EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. `submitOnUnfocus` is ignored in this case. Please remove one of these.")}),[I.cancelOnUnfocus,I.submitOnUnfocus]),n((function(){void 0!==I.value&&(j(I.value),Y(I.value)),void 0!==I.editing&&F(I.editing)}),[I.editing,I.value]);var ae,re,le,se,ue,ce,de,_e=U?function(){var t="textarea"===I.type?e.createElement("textarea",o({className:l,editext:k,tabIndex:I.tabIndex},I.inputProps,{onBlur:W,value:T,onChange:te,autoFocus:U})):e.createElement("input",o({className:l,editext:k,tabIndex:I.tabIndex},I.inputProps,{onKeyDown:L,onBlur:W,value:T,type:I.type||"text",onChange:te,autoFocus:U})),n=h("".concat(r),"".concat(y),I.hideIcons&&"".concat(b)),i=I.saveButtonClassName||n,a=h("".concat(r),"".concat(p),I.hideIcons&&"".concat(b)),s=I.cancelButtonClassName||a,c=u;I.editContainerClassName&&(c=I.editContainerClassName),I.viewContainerClassName&&(c=I.viewContainerClassName);var _=I.buttonsAlign||"after",x=h(d,"before"===_&&"".concat(f),"after"===_&&"".concat(m));return e.createElement("div",null,e.createElement("div",{ref:M,className:c,editext:C},"after"===_&&t,e.createElement("div",{className:x,ref:Z},e.createElement("button",{ref:J,editext:P,type:"button",className:i,onClick:ie},I.saveButtonContent),e.createElement("button",{type:"button",editext:B,className:s,onClick:ne},I.cancelButtonContent)),"before"===_&&t),!V&&!I.onValidationFail&&e.createElement("div",{className:v,editext:N},I.validationMessage||"Invalid Value"),I.hint&&e.createElement("div",{className:E,editext:D},I.hint))}():(ae=h("".concat(r),"".concat(x),I.hideIcons&&"".concat(b)),re=I.editButtonClassName||ae,le=h(I.viewContainerClassName||c,I.showButtonsOnHover&&"".concat(_)),se=I.buttonsAlign||"after",ue=h(d,"before"===se&&"".concat(f),"after"===se&&"".concat(m)),ce=I.editOnViewClick?oe:void 0,de="function"==typeof I.renderValue?I.renderValue(T):T,e.createElement("div",{className:le,editext:w},"after"===se&&e.createElement("div",o({tabIndex:I.tabIndex},I.viewProps,{onKeyDown:ee,onFocus:$,onClick:ce,editext:"view"}),de),e.createElement("div",{className:ue},e.createElement("button",o({type:"button",className:re},I.editButtonProps,{editext:O,onClick:oe}),I.editButtonContent)),"before"===se&&e.createElement("div",o({tabIndex:I.tabIndex},I.viewProps,{onKeyDown:ee,onFocus:$,onClick:ce,editext:w}),de))),fe=h((null===(z=I.containerProps)||void 0===z?void 0:z.className)||I.mainContainerClassName||s,I.className);return e.createElement("div",o({},I.containerProps,{className:fe,editext:g}),_e)}export{I as default};
//# sourceMappingURL=index.es.js.map
