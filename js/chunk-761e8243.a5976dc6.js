(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-761e8243","chunk-5e72d618","chunk-7030853e"],{"0502":function(e,t,i){"use strict";i("d0b8")},"0a9d":function(e,t,i){"use strict";i.r(t),i.d(t,"TableForm",(function(){return s}));i("b64b"),i("d3b7"),i("ddb0");var l=i("12a6"),n=i("59d0"),a=i("c4d9"),o=i("677f"),s={components:{ElFieldNumber:l["default"],ElFieldString:n["default"],ElFieldChoice:a["default"],ElFieldDialog:o["default"]},props:{actionName:"adding",focusedElement:Object},computed:{fieldForm:function(){for(var e=this.$store.getters["DataTable/GET_LIST_OPTION"](this.tableName),t=0,i=Object.keys(e);t<i.length;t++){var l=i[t];"nested object"==e[l].type&&this.$set(e[l],"objectValue","head_name")}if(null!=this.focusedElement)for(var n=0,a=Object.keys(e);n<a.length;n++){var o=a[n];this.fieldFormValue[o]=this.focusedElement[o]}return e}},watch:{focusedElement:function(){null==this.focusedElement&&this.fieldFormValueClear()}},created:function(){console.log(this.tableName),this.$store.dispatch("DataTable/GET_LIST_OPTION",{tableName:this.tableName})},methods:{eventClickActionCancel:function(){this.$emit("event-action-cancel"),this.fieldFormValueClear()},eventClickActionAccept:function(){if(this.fieldFormValueValidation()){var e={actionName:null==this.focusedElement?"adding":"editing",values:{}};Object.assign(e.values,this.fieldFormValue),this.$emit("event-action-accept",e),this.fieldFormValueClear()}},fieldFormValueValidation:function(){console.log(this.fieldFormValue);for(var e=0,t=Object.keys(this.fieldFormValue);e<t.length;e++){var i=t[e];if(1==this.fieldForm[i].required&&(""==this.fieldFormValue[i]||null==this.fieldFormValue[i]))return!1}return!0}}}},"12a6":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-text-field",{staticClass:"el-field-number",attrs:{id:e.fieldId,dense:"","single-line":e.singleLine,label:e.fieldLabel,"hide-details":e.fieldShowValidation,rules:e.fieldRequired?[e.fieldRules.required]:[]},on:{keydown:function(t){return t.stopPropagation(),e.eventKeyDown(t)},blur:function(t){return t.stopPropagation(),e.eventBlur(t)},input:e.eventInput},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}})},n=[],a=(i("caad"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("466d"),i("5319"),{name:"ElFieldNumber",model:{prop:"propertiesValue",event:"input"},props:{properties:"",propertiesValue:"",label:{type:Boolean,default:!1},singleLine:{type:Boolean,default:!0},showValidation:{type:Boolean,default:!1},selectedValue:{type:Boolean,defalt:!1}},data:function(){var e,t;return{isInputEmit:!1,fieldId:"El-".concat(null===(e=this.properties)||void 0===e?void 0:e.value),fieldValue:this.propertiesValue,fieldRequired:null===(t=this.properties)||void 0===t?void 0:t.required,fieldRules:{required:function(e){return!!e||"мин. 1 символ"}}}},computed:{fieldLabel:function(){var e;return this.label?null===(e=this.properties)||void 0===e?void 0:e.label:""},fieldMaxLength:function(){var e;return(null===(e=this.properties)||void 0===e?void 0:e.max_length)?this.properties.max_length:1/0},fieldShowValidation:function(){return!this.showValidation}},watch:{propertiesValue:function(){this.fieldValue=this.propertiesValue}},mounted:function(){var e=this;setTimeout((function(){e.selectedValue&&(document.querySelector("#".concat(e.fieldId)).setSelectionRange(0,0),document.querySelector("#".concat(e.fieldId)).select(),document.querySelector("#".concat(e.fieldId)).focus())}),10)},methods:{eventInput:function(){this.$emit("input",this.fieldValue)},eventKeyDown:function(e){if("Escape"==e.key)return this.isInputEmit=!0,void this.$emit("editing-canceled",{key:"Escape"});if("Enter"==e.key||"Tab"==e.key){if(e.preventDefault(),this.fieldRequired&&0==this.fieldValue.length)return;return this.isInputEmit=!0,this.fieldValue=this.fieldValue.toString().replace(/\./g,","),void this.$emit("editing-accepted",{tableName:this.properties.tableName,key:e.key,keyShift:e.shiftKey,value:this.fieldValue,field:this.properties.value,id:this.properties.idRow})}(e.code.includes("Key")||"BracketLeft"==e.code||"BracketRight"==e.code||"Backslash"==e.code||"Space"==e.code||"Semicolon"==e.code||"Quote"==e.code||"Comma"==e.code||"Period"==e.code||"/"==e.key||("NumpadDecimal"==e.code||"Slash"==e.code)&&this.fieldValue.match(/[\.\,]/g)&&this.fieldValue.match(/[\.\,]/g).length>0)&&e.preventDefault()},eventBlur:function(){this.isInputEmit||this.$emit("editing-canceled")}}}),o=a,s=(i("0502"),i("2877")),r=i("6544"),u=i.n(r),d=i("8654"),c=Object(s["a"])(o,l,n,!1,null,"1d0e2eac",null);t["default"]=c.exports;u()(c,{VTextField:d["a"]})},"553c":function(e,t,i){},"59d0":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-text-field",{staticClass:"el-field-string",attrs:{id:e.fieldId,dense:"","single-line":e.singleLine,label:e.fieldLabel,maxlength:e.fieldMaxLength,"hide-details":e.fieldShowValidation,rules:e.fieldRequired?[e.fieldRules.required]:[]},on:{keydown:function(t){return t.stopPropagation(),e.eventKeyDown(t)},blur:function(t){return t.stopPropagation(),e.eventBlur(t)},input:e.eventInput},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}})},n=[],a={name:"ElFieldString",model:{prop:"propertiesValue",event:"input"},props:{properties:"",propertiesValue:"",label:{type:Boolean,default:!1},singleLine:{type:Boolean,default:!0},showValidation:{type:Boolean,default:!1},selectedValue:{type:Boolean,defalt:!1}},data:function(){var e,t;return{isInputEmit:!1,fieldId:"El-".concat(null===(e=this.properties)||void 0===e?void 0:e.value),fieldValue:this.propertiesValue,fieldRequired:null===(t=this.properties)||void 0===t?void 0:t.required,fieldRules:{required:function(e){return!!e||"мин. 1 символ"}}}},computed:{fieldLabel:function(){var e;return this.label?null===(e=this.properties)||void 0===e?void 0:e.label:""},fieldMaxLength:function(){var e;return(null===(e=this.properties)||void 0===e?void 0:e.max_length)?this.properties.max_length:1/0},fieldShowValidation:function(){return!this.showValidation}},watch:{propertiesValue:function(){this.fieldValue=this.propertiesValue}},mounted:function(){var e=this;setTimeout((function(){e.selectedValue&&(document.querySelector("#".concat(e.fieldId)).setSelectionRange(0,0),document.querySelector("#".concat(e.fieldId)).select(),document.querySelector("#".concat(e.fieldId)).focus())}),10)},methods:{eventInput:function(){this.$emit("input",this.fieldValue)},eventKeyDown:function(e){if("Escape"==e.key)return this.isInputEmit=!0,void this.$emit("editing-canceled",{key:"Escape"});if("Enter"==e.key||"Tab"==e.key){if(e.preventDefault(),this.fieldRequired&&0==this.fieldValue.length)return;this.isInputEmit=!0,this.$emit("editing-accepted",{tableName:this.properties.tableName,key:e.key,keyShift:e.shiftKey,value:this.fieldValue,field:this.properties.value,id:this.properties.idRow})}},eventBlur:function(){this.isInputEmit||this.$emit("editing-canceled")}}},o=a,s=(i("7de0"),i("2877")),r=i("6544"),u=i.n(r),d=i("8654"),c=Object(s["a"])(o,l,n,!1,null,"3cf9659e",null);t["default"]=c.exports;u()(c,{VTextField:d["a"]})},"5ccc":function(e,t,i){var l={"./Table":["b1d7","chunk-6e85cd94","chunk-2d20f198"],"./Table.js":["b1d7","chunk-6e85cd94","chunk-2d20f198"],"./TableBudgetClassifications":["d711","chunk-6e85cd94","chunk-13a7b3cb"],"./TableBudgetClassifications.vue":["d711","chunk-6e85cd94","chunk-13a7b3cb"],"./TableOrganisations":["6f74","chunk-6e85cd94","chunk-030c7e17"],"./TableOrganisations.vue":["6f74","chunk-6e85cd94","chunk-030c7e17"]};function n(e){if(!i.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],n=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(n)}))}n.keys=function(){return Object.keys(l)},n.id="5ccc",e.exports=n},"677f":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialog",attrs:{id:"ElBox-"+e.fieldId}},[i("v-autocomplete",{staticClass:"el-field-dialog",attrs:{id:e.fieldId,dense:"","return-object":"","append-icon":"mdi-dots-horizontal","hide-selected":"","no-data-text":"Значение отсутствует","single-line":e.singleLine,label:e.fieldLabel,"hide-details":e.fieldShowValidation,rules:e.fieldRequired?[e.fieldRules.required]:[],items:e.fieldList,"item-text":e.fieldListText,"item-value":"id"},on:{blur:e.eventBlur,change:e.eventChange,keydown:function(t){return t.stopPropagation(),e.eventKeyDown(t)},"click:append":e.eventDialogOpen,click:function(e){e.stopPropagation()},input:e.eventInput},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}}),i("dialog-full-page",{attrs:{"is-dialog-name":e.displayNameTable,"is-dialog-show":e.isShowDialog},on:{"event-close-dialog":e.eventDialogClose}},[i(e.componentForm,{tag:"component",attrs:{editable:!1},on:{"event-row-selected":e.eventDialogSelected}})],1)],1)},n=[],a=(i("4160"),i("fb6a"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("159b"),i("9dee")),o={name:"ElFieldDialog",components:{DialogFullPage:a["a"]},model:{prop:"propertiesValue",event:"input"},props:{properties:"",propertiesValue:"",label:{type:Boolean,default:!1},singleLine:{type:Boolean,default:!0},showValidation:{type:Boolean,default:!1},selectedValue:{type:Boolean,defalt:!1}},data:function(){var e,t,i;return{isShowDialog:!1,isInputEmit:!1,isCloseInDialog:!1,isInputFirstEnter:!1,isElementChange:!1,fieldId:"El-".concat(null===(e=this.properties)||void 0===e?void 0:e.value),fieldValue:null===(t=this.propertiesValue)||void 0===t?void 0:t.id,fieldRequired:null===(i=this.properties)||void 0===i?void 0:i.required,fieldRules:{required:function(e){return!!e||"не выбран"}}}},computed:{fieldLabel:function(){var e;return this.label?null===(e=this.properties)||void 0===e?void 0:e.label:""},fieldListText:function(){var e;return(null===(e=this.properties)||void 0===e?void 0:e.objectValue)?this.properties.objectValue:""},fieldList:function(){var e;if(!(null===(e=this.properties)||void 0===e?void 0:e.tableName))return[];var t=this.$store.getters["DataTable/GET_LIST_DATA"](this.properties.tableName);return 0==t.length?(this.$store.dispatch("DataTable/GET_LIST_OPTION",{tableName:this.properties.tableName}),[]):t},fieldShowValidation:function(){return!this.showValidation},displayNameTable:function(){var e;return this.$store.getters["DataTable/GET_DESCRIPTION_TABLE"](null===(e=this.properties)||void 0===e?void 0:e.tableName)},componentForm:function(){var e,t="";if(null===(e=this.properties)||void 0===e?void 0:e.tableName)return this.properties.tableName.split("-").forEach((function(e){t+=e[0].toUpperCase()+e.slice(1)})),function(){return i("5ccc")("./Table".concat(t))}}},watch:{propertiesValue:function(){var e;this.fieldValue=null===(e=this.propertiesValue)||void 0===e?void 0:e.id}},mounted:function(){var e=this;setTimeout((function(){e.selectedValue&&document.querySelector("#".concat(e.fieldId)).select()}),10)},methods:{eventDialogOpen:function(e){var t=this;this.isShowDialog=!0,setTimeout((function(){document.querySelector("#".concat(t.fieldId)).focus()}),10)},eventDialogClose:function(e){var t=this;setTimeout((function(){t.isShowDialog=!1}),100)},eventDialogSelected:function(e){this.fieldValue=e.id,this.$emit("input",e),this.$emit("editing-accepted",{tableName:this.properties.tableName,key:"Enter",keyShift:!1,value:e,field:this.properties.value,id:this.properties.idRow}),this.isShowDialog=!1},eventKeyDown:function(e){if("Escape"==e.key)return this.isInputEmit=!0,void this.$emit("editing-canceled",{key:"Escape"});if("Enter"!=e.key||this.isInputFirstEnter&&this.isElementChange){if("Enter"==e.key||"Tab"==e.key){if(e.preventDefault(),this.fieldRequired&&0==this.fieldValue.length)return;console.log(this.fieldValue);this.$store.getters["DataTable/GET_LIST_DATA_ROW"](this.properties.tableName,this.fieldValue.toString());this.isInputEmit=!0,this.$emit("editing-accepted",{tableName:this.properties.tableName,key:e.key,keyShift:e.shiftKey,value:this.fieldValue,field:this.properties.value,id:this.properties.idRow})}}else this.isInputFirstEnter=!0},eventBlur:function(e){e.preventDefault(),0==this.isShowDialog&&0==this.isInputEmit&&this.$emit("editing-canceled")},eventChange:function(){this.isElementChange=!0},eventInput:function(){this.$emit("input",this.fieldValue)}}},s=o,r=(i("b20a"),i("2877")),u=i("6544"),d=i.n(u),c=i("c6a6"),f=Object(r["a"])(s,l,n,!1,null,"1f1d15da",null);t["default"]=f.exports;d()(f,{VAutocomplete:c["a"]})},"7de0":function(e,t,i){"use strict";i("553c")},b20a:function(e,t,i){"use strict";i("c48e")},c48e:function(e,t,i){},d0b8:function(e,t,i){}}]);
//# sourceMappingURL=chunk-761e8243.a5976dc6.js.map