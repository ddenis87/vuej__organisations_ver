(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c185b62"],{"0689":function(t,e,i){},"0b9c":function(t,e,i){"use strict";i.r(e),i.d(e,"TheTable",(function(){return Tt}));i("a9e3");var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-table",attrs:{id:t.id}},[i("div",{staticClass:"data-table__header"},[i("data-table-header",{attrs:{id:"data-table-"+t.id,"table-name":t.properties.tableName,template:t.computedTemplateTable,"type-height":t.typeHeight,"type-column":t.typeColumn,items:t.gettingDataHeader,"is-expansion":t.isExpansion,"is-multiline":t.isMultiline}}),i("data-table-progress-line",{attrs:{"is-show":t.isLoadingData}})],1),i("div",{staticClass:"data-table__body"},[i("data-table-body",{attrs:{id:"data-table-"+t.id,"table-name":t.properties.tableName,template:t.computedTemplateTable,"type-height":t.typeHeight,"type-column":t.typeColumn,items:t.gettingDataBody,"items-header":t.gettingDataHeader,"is-editable":t.isEditable,"is-expansion":t.isExpansion,"is-multiline":t.isMultiline},on:{"event-row-focused":t.eventRowFocused,"event-row-selected":t.eventRowSelected,"event-row-keydown":t.eventRowKeydown,"event-body-blur":t.eventBodyBlur}})],1),i("div",{staticClass:"data-table__boot-anchor",attrs:{id:t.id+"-boot-anchor"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFooter,expression:"isFooter"}],staticClass:"data-table__footer"},[t._t("component-footer",[i("data-table-footer",{attrs:{tableName:t.properties.tableName,"type-column":t.typeColumn}})])],2)])},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"data-progress-line",attrs:{color:"blue",indeterminate:"",absolute:"",bottom:""}})},s=[],r={name:"DataTableProgressLine",props:{isShow:{type:Boolean,default:!1}}},l=r,c=i("2877"),u=i("6544"),d=i.n(u),p=i("8e36"),h=Object(c["a"])(l,a,s,!1,null,null,null),m=h.exports;d()(h,{VProgressLinear:p["a"]});var f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header",on:{mouseover:t.eventMouseOver,mouseout:t.eventMouseOut}},[i("data-table-tooltip",{attrs:{"is-show":t.isTooltipShow,"data-properties":t.isTooltipProperties},on:{click:function(e){t.isTooltipShow=!1},mousemove:function(e){t.isTooltipShow=!1}}},[t._v(" "+t._s(t.isTooltipProperties.text)+" ")]),i("data-table-overflow",{attrs:{"d-id":t.id+"-header","data-properties":t.isTooltipProperties},on:{"is-show":function(e){t.isTooltipShow=!0},"is-hide":function(e){t.isTooltipShow=!1}}}),i("div",{staticClass:"header-row",class:"header-row_"+t.typeHeight,style:t.template,on:{click:function(e){return t.eventClickColumn(e)}}},[t.computedActionMax&&!t.isMultiline?i("div",{staticClass:"header-column header-column__action-max",class:"header-column_"+t.typeColumn},[i("span",{staticStyle:{visibility:"hidden"}},[t._v("1")])]):t._e(),t._l(t.items,(function(e,o){return i("div",{key:"header-"+o,staticClass:"header-column",class:"header-column_"+t.typeColumn,style:e.position_in_template,attrs:{"data-overflow-text":e.label,"data-key":e.value}},[i("data-table-content-display",{attrs:{value:e.label,properties:{type:"string"},"type-height":t.typeHeight}}),i("div",{staticClass:"header-column__sort"},[i("v-icon",[t._v("mdi-menu-down")])],1)],1)}))],2)],1)},g=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"data-overflow "+t.dId+"-data-overflow",style:t.styleParent},[i("div",{class:"data-overflow-block "+t.dId+"-data-overflow-block"},[t._v(t._s(t.content))]),i("div",{class:"data-overflow-line "+t.dId+"-data-overflow-line"},[t._v(t._s(t.content))])])},v=[],y={name:"DataTableOverflow",props:{dId:"",dataProperties:Object},data:function(){return{isTimer:null}},computed:{styleParent:function(){var t=this;return this.$emit("is-hide"),setTimeout((function(){return t.computedOverflow()}),50),{width:this.dataProperties.width-24+"px",height:this.dataProperties.height+"px"}},content:function(){return this.$emit("is-hide"),this.dataProperties.text}},methods:{computedOverflow:function(){var t=document.querySelector(".".concat(this.dId,"-data-overflow")),e=document.querySelector(".".concat(this.dId,"-data-overflow-block"));if(t.getBoundingClientRect().height+10<e.getBoundingClientRect().height)this.$emit("is-show");else{var i=document.querySelector(".".concat(this.dId,"-data-overflow-line"));t.getBoundingClientRect().width+4<i.getBoundingClientRect().width?this.$emit("is-show"):this.$emit("is-hide")}}}},w=y,_=(i("e06f"),Object(c["a"])(w,b,v,!1,null,"50b4dc5b",null)),T=_.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tooltip",class:{tooltip_show:t.isShow},style:t.position,attrs:{id:"tooltip"},on:{click:function(e){return t.$emit("click")},mousemove:function(e){return t.$emit("mousemove")}}},[t._t("default")],2)},E=[],S={name:"DataTableTooltip",props:{isShow:{type:Boolean,default:!1},dataProperties:{type:Object,default:function(){return{left:{type:Number,default:-300},top:{type:Number,default:-300},width:Number}}}},computed:{position:function(){return{left:0==this.dataProperties.left?"-20px":this.dataProperties.left+"px",top:this.dataProperties.top+"px","min-width":this.dataProperties.width+"px","max-width":1.3*this.dataProperties.width+"px"}}}},x=S,D=(i("e99d"),Object(c["a"])(x,C,E,!1,null,"f9991008",null)),A=D.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-display",class:"content-display_"+t.typeHeight,style:"text-align: "+t.properties["align"]},[t._v(" "+t._s(t.displayValue)+" ")])},R=[],L=(i("99af"),i("4160"),i("a15b"),i("fb6a"),i("ac1f"),i("466d"),i("5319"),i("1276"),i("159b"),{computed:{computedActionMax:function(){return"auto"!=this.typeHeight&&1==this.isExpansion}},methods:{gettingValueForType:function(t,e){if(null==e)return"";switch(t.type){case"string":case"integer":return e;case"date":return e.split("-").reverse().join(".");case"datetime":var i="",o="";return i=e.split("T")[0].split("-").reverse().join("."),o=e.split("T")[1].slice(0,5),"".concat(i," ").concat(o);case"choice":return e["display_name"];case"field":var n=this.$store.getters["DataTable/GET_RELATED_MODEL_VIEW"](t["related_model_name"]),a=n.match(/[{\w}]/gi).join(",").replace(/,/g,"").slice(1,-1).split("}{");return a.forEach((function(t){n=n.replace("{".concat(t,"}"),e[t])})),n}}}}),N={name:"DataTableContentDisplay",mixins:[L],props:{value:null,properties:{type:Object,default:function(){}},typeHeight:{type:String,default:"fixed"}},computed:{displayValue:function(){return this.gettingValueForType(this.properties,this.value)}}},O=N,P=(i("4d8c"),Object(c["a"])(O,k,R,!1,null,"1031338d",null)),$=P.exports,B={data:function(){return{isSortingOrderAsc:!1,isSortingCurrentField:"",isTooltipShow:!1,isTooltipTimer:null,isTooltipProperties:{top:0,left:0,width:0,height:0,text:""}}},computed:{computedTooltipShift:function(){var t={left:3,top:-3};return"fixed"==this.typeHeight&&"dense"==this.typeColumn?(t.left=-1,t.top=-3,t):"auto"==this.typeHeight&&"fixed"==this.typeColumn?(t.left=3,t.top=-3,t):"dense"==this.typeHeight&&"dense"==this.typeColumn||"auto"==this.typeHeight&&"dense"==this.typeColumn?(t.left=-1,t.top=-3,t):t}},methods:{eventMouseOver:function(t){var e=this;if(t.target.classList.contains("content-display")){var i=t.target.closest(".header-column");this.isTooltipTimer=setTimeout((function(){e.isTooltipProperties={top:i.getBoundingClientRect().top+e.computedTooltipShift.top,left:i.getBoundingClientRect().left+e.computedTooltipShift.left,width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height,text:i.getAttribute("data-overflow-text")}}),1100)}},eventMouseOut:function(t){var e,i;(null===(e=t.relatedTarget)||void 0===e||null===(i=e.classList)||void 0===i?void 0:i.contains("tooltip"))||(this.isTooltipShow=!1,clearTimeout(this.isTooltipTimer))},eventClickColumn:function(t){document.querySelector(".header-row").querySelector(".header-column__sort_active")&&(document.querySelector(".header-row").querySelector(".header-column__sort_active").classList.remove("header-column__sort_active_asc"),document.querySelector(".header-row").querySelector(".header-column__sort_active").classList.remove("header-column__sort_active"));var e=t.target.closest(".header-column");e.querySelector(".header-column__sort").classList.add("header-column__sort_active"),0==this.isSortingOrderAsc?(this.isSortingOrderAsc=!0,e.querySelector(".header-column__sort").classList.add("header-column__sort_active_asc")):(this.isSortingOrderAsc=!1,e.querySelector(".header-column__sort").classList.remove("header-column__sort_active_asc")),this.isSortingCurrentField!=e.getAttribute("data-key")&&(this.isSortingCurrentField=e.getAttribute("data-key"),this.isSortingOrderAsc=!0,e.querySelector(".header-column__sort").classList.add("header-column__sort_active_asc")),this.$store.commit("DataTable/SET_DATA_CLEAR",{tableName:this.tableName}),this.$store.commit("DataTable/SET_FILTER_SORTING",{tableName:this.tableName,ordering:this.isSortingOrderAsc,key:e.getAttribute("data-key")}),this.$store.dispatch("DataTable/REQUEST_DATA",{tableName:this.tableName})}}},H={name:"DataTableHeader",components:{DataTableOverflow:T,DataTableTooltip:A,DataTableContentDisplay:$},mixins:[L,B],props:{id:{type:String,default:"dataTable"},tableName:{type:String,default:""},template:Object,typeHeight:{type:String,default:"fixed"},typeColumn:{type:String,default:"fixed"},items:{type:Array,default:function(){return[]}},isExpansion:{type:Boolean,default:!1},isMultiline:{type:Boolean,default:!1}}},F=H,M=(i("5517"),i("132d")),q=Object(c["a"])(F,f,g,!1,null,"47629254",null),j=q.exports;d()(q,{VIcon:M["a"]});var I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body",on:{mouseover:t.eventMouseOver,mouseout:t.eventMouseOut}},[i("data-table-tooltip",{attrs:{"is-show":t.isTooltipShow,"data-properties":t.isTooltipProperties},on:{click:function(e){t.isTooltipShow=!1},mousemove:function(e){t.isTooltipShow=!1}}},[t._v(" "+t._s(t.isTooltipProperties.text)+" ")]),i("data-table-overflow",{attrs:{"d-id":t.id+"-body","data-properties":t.isTooltipProperties},on:{"is-show":function(e){t.isTooltipShow=!0},"is-hide":function(e){t.isTooltipShow=!1}}}),0!=t.items.length||t.isLoadingData?t._e():i("div",{staticClass:"body-empty",class:"body-empty_"+t.typeColumn},[t._v("Отсутствуют элементы для отображения по заданным условиям")]),t._l(t.items,(function(e,o){return i("div",{key:"body-row-"+o,staticClass:"body-row",class:"body-row_"+t.typeHeight,style:t.template,attrs:{tabindex:o},on:{focus:function(i){return t.eventRowFocus(i,e)},blur:t.eventRowBlur,click:function(i){return t.eventRowClick(i,e)},dblclick:function(i){return t.eventRowDblclick(i,e)},keydown:function(i){return t.eventRowKeydown(i,e)}}},[t.computedActionMax&&!t.isMultiline?i("div",{staticClass:"body-column__action-max",class:"body-column_"+t.typeColumn},[i("v-btn",{staticClass:"action-btn",attrs:{"x-small":"",icon:""},on:{click:t.eventExpansionRow}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-down")])],1)],1):t._e(),t._l(t.itemsHeader,(function(o,n){return i("div",{key:"body-column-"+n,staticClass:"body-column",class:"body-column_"+t.typeColumn,style:o.position_in_template,attrs:{tabindex:t.isEditable?n:"","data-overflow-text":t.gettingValueForType(o,e[o.value])},on:{focus:t.eventColumnFocus,blur:t.eventColumnBlur,dblclick:function(i){return t.eventColumnDblclick(i,e,o,e[o.value])},keydown:function(i){return t.eventColumnKeydown(i,e,o,e[o.value])},"editing-canceled":t.editingCanceled,"editing-accepted":t.editingAccepted}},[t._m(0,!0),i("div",{staticClass:"box-display"},[i("data-table-content-display",{attrs:{value:e[o.value],properties:o,"type-height":t.typeHeight}})],1)])}))],2)}))],2)},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-editing display-none"},[i("div",{staticClass:"box-editing-default"})])}],V=(i("caad"),i("2532"),{data:function(){return{isRowFocus:!1,isColumnEditing:!1,isColumnFocus:!1,isTooltipShow:!1,isTooltipTimer:null,isTooltipProperties:{top:0,left:0,width:0,height:0,text:""}}},computed:{computedTooltipShift:function(){var t={left:10,top:4};return"fixed"==this.typeHeight&&"fixed"==this.typeColumn?(t.left=4,t.top=-2,t):"fixed"==this.typeHeight&&"dense"==this.typeColumn?(t.left=0,t.top=-2,t):"dense"==this.typeHeight&&"fixed"==this.typeColumn?(t.left=4,t.top=-2,t):"dense"==this.typeHeight&&"dense"==this.typeColumn?(t.left=0,t.top=-2,t):t}},methods:{eventExpansionRow:function(t){t.target.closest(".action-btn").classList.toggle("action-btn_action"),t.target.closest(".body-row").classList.toggle("body-row_auto");var e=t.target.closest(".body-row").querySelectorAll(".content-display");e.forEach((function(t){t.classList.toggle("content-display_auto")}))},eventMouseOver:function(t){var e;this.isColumnFocus||this.isColumnEditing||this.isRowFocus||null===(e=t.target.closest(".body-row"))||void 0===e||e.classList.add("body-row_hover"),this.tooltipShow(t)},eventMouseOut:function(t){var e,i,o;(null===(e=t.relatedTarget)||void 0===e||null===(i=e.classList)||void 0===i?void 0:i.contains("tooltip"))||(this.isColumnFocus||this.isColumnEditing||this.isRowFocus||null===(o=t.target.closest(".body-row"))||void 0===o||o.classList.remove("body-row_hover"),this.tooltipHide(t))},eventRowFocus:function(t,e){this.isRowFocus=!0,t.target.classList.remove("body-row_hover"),t.target.classList.add("body-row_focus"),this.$emit("event-row-focused",t,e)},eventRowBlur:function(t){this.isRowFocus=!1,t.target.classList.remove("body-row_focus"),null==t.relatedTarget&&this.$emit("event-body-blur")},eventRowClick:function(t,e){this.$emit("event-row-focused",t,e)},eventRowDblclick:function(t,e){var i=Object.assign({},e);"text"in i&&delete i.text,this.$emit("event-row-selected",t,i)},eventColumnFocus:function(t){this.isTooltipShow=!1,this.isColumnFocus=!0,t.target.parentElement.classList.remove("body-row_hover"),t.target.parentElement.classList.add("body-row_focus"),t.target.classList.add("body-column_focus")},eventColumnBlur:function(t){this.isColumnEditing||(this.isColumnFocus=!1,t.target.parentElement.classList.remove("body-row_focus"),t.target.classList.remove("body-column_focus")),null==t.relatedTarget&&this.$emit("event-body-blur")},eventColumnDblclick:function(t,e,i,o){if(this.checkForEditable(t,i)&&(this.switchDecorationToEdit(t),t.target.closest(".body-column").querySelector(".box-editing-default"))){var n=t.target.closest(".body-column").querySelector(".box-editing-default");this.mountEditingComponent(n,e.id,i,o)}},eventRowKeydown:function(t,e){var i={tableName:this.tableName,itemRow:e};this.$emit("event-row-keydown",t,i),(t.code.includes("Arrow")||"Tab"==t.code)&&(t.preventDefault(),("ArrowDown"==t.code&&t.target.nextElementSibling||"Tab"==t.code&&0==t.shiftKey)&&t.target.nextElementSibling.focus(),("ArrowUp"==t.code&&t.target.previousElementSibling||"Tab"==t.code&&1==t.shiftKey)&&t.target.previousElementSibling.focus()),console.log("emit body")},eventColumnKeydown:function(t,e,i,o){var n={tableName:this.tableName,itemRow:e};if(t.code.includes("Arrow")||"Tab"==t.code){if(t.stopPropagation(),t.preventDefault(),"ArrowRight"==t.code&&t.target.nextElementSibling||"Tab"==t.code&&0==t.shiftKey)return void t.target.nextElementSibling.focus();if("ArrowLeft"==t.code&&t.target.previousElementSibling||"Tab"==t.code&&1==t.shiftKey)return void t.target.previousElementSibling.focus();if("ArrowDown"==t.code||"ArrowUp"==t.code)return this.$emit("event-row-keydown",t,n),"ArrowDown"==t.code&&t.target.parentElement.nextElementSibling&&t.target.parentElement.nextElementSibling.children[t.target.getAttribute("tabindex")].focus(),void("ArrowUp"==t.code&&t.target.parentElement.previousElementSibling&&t.target.parentElement.previousElementSibling.children[t.target.getAttribute("tabindex")].focus())}(t.code.includes("Key")||t.code.includes("Digit")||"Enter"==t.code)&&(t.stopPropagation(),this.eventColumnDblclick(t,e,i,o))},tooltipShow:function(t){var e=this;if(t.target.classList.contains("content-display")){var i=t.target.closest(".body-column");this.isTooltipTimer=setTimeout((function(){e.isTooltipProperties={top:i.getBoundingClientRect().top+e.computedTooltipShift.top,left:i.getBoundingClientRect().left+e.computedTooltipShift.left,width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height,text:i.getAttribute("data-overflow-text")}}),1100)}},tooltipHide:function(t){var e,i;(null===(e=t.relatedTarget)||void 0===e||null===(i=e.classList)||void 0===i?void 0:i.contains("tooltip"))||(this.isTooltipShow=!1,clearTimeout(this.isTooltipTimer))}}}),G=i("2b0e"),K=i("402c"),W=i("4360"),Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-editing"},[i(t.editingComponent,{tag:"component",attrs:{"input-properties":t.propertiesComponent,"input-value":t.propertiesComponent.text,"is-value-selected":!0,"is-value-focus":!0,properties:t.propertiesComponent,propertiesValue:t.propertiesComponent.text,selectedValue:!0,"is-single-line":!0,"is-hide-message":!0,"is-hide-label":!0,"is-selected":!0,"is-btn-clear":!1},on:{"editing-canceled":t.editingCanceled,"editing-accepted":t.editingAccepted,"editing-blur-focus":t.editingCanceled,"keydown-enter":t.editingAccepted,"keydown-tab":t.editingAccepted,"keydown-esc":t.editingCanceled,"blur-field":t.editingCanceled}})],1)},J=[],X=(i("d3b7"),{name:"ContentEditing",props:{properties:Object},data:function(){return{isComponentNull:!1}},computed:{editingComponent:function(){if(console.log(this.isComponentNull),!this.properties.columnProperties||this.isComponentNull)return null;switch(this.properties.columnProperties.type){case"string":return function(){return i.e("chunk-e3d396c6").then(i.bind(null,"6da2"))};case"integer":return function(){return i.e("chunk-28a17095").then(i.bind(null,"58a0"))};case"date":return function(){return Promise.all([i.e("chunk-f0d0a45e"),i.e("chunk-041eb01b")]).then(i.bind(null,"e8b7"))};case"datetime":return function(){return Promise.all([i.e("chunk-f0d0a45e"),i.e("chunk-4de4daaa")]).then(i.bind(null,"064d"))};case"choice":return function(){return Promise.all([i.e("chunk-65d667c1"),i.e("chunk-5883197f")]).then(i.bind(null,"08a7"))};case"field":return function(){return Promise.all([i.e("chunk-65d667c1"),i.e("chunk-031c35c1")]).then(i.bind(null,"7364"))}}},propertiesComponent:function(){var t={};return Object.assign(t,this.properties.columnProperties),t.text=this.properties.columnValue,t}},methods:{editingCanceled:function(){var t=document.querySelector(".body-column_editing"),e=new CustomEvent("editing-canceled");t.dispatchEvent(e),this.isComponentNull=!0,document.querySelector(".content-editing")&&document.querySelector(".content-editing").remove()},editingAccepted:function(t){var e={tableName:this.properties.tableName,recordId:this.properties.rowId,fieldName:this.properties.columnProperties.value,fieldValue:t.value};this.$store.commit("DataTable/ACTION_EDITING_ELEMENT",e);var i=document.querySelector(".body-column_editing"),o=new CustomEvent("editing-accepted",{detail:{key:t.key,keyShift:t.shift}});i.dispatchEvent(o),this.isComponentNull=!0,document.querySelector(".content-editing")&&document.querySelector(".content-editing").remove()}}}),z=X,Y=(i("3f03"),Object(c["a"])(z,Q,J,!1,null,"54f8a118",null)),Z=Y.exports,tt={methods:{mountEditingComponent:function(t,e,i,o){var n={tableName:this.tableName,rowId:e,columnProperties:i,columnValue:o};console.log(n);var a=G["a"].extend(Z),s=new a({vuetify:K["a"],store:W["a"],propsData:{properties:n}}).$mount();t.prepend(s.$el)},checkForEditable:function(t,e){return!!this.isEditable&&(!e["read_only"]&&(1!=e["disabled"]&&!t.target.closest(".body-column").querySelector(".box-display.display-none")))},switchDecorationToDisplay:function(){this.isColumnEditing=!1,this.isColumnFocus=!1;var t=document.querySelector(".body-column_editing");t.classList.remove("body-column_editing"),t.querySelector(".box-display").classList.remove("display-none"),t.querySelector(".box-editing").classList.add("display-none")},switchDecorationToEdit:function(t){this.isColumnEditing=!0;var e=t.target.closest(".body-column");e.classList.add("body-column_editing"),e.querySelector(".box-display").classList.add("display-none"),e.querySelector(".box-editing").classList.remove("display-none")},editingCanceled:function(){var t=document.querySelector(".body-column_editing");t.classList.remove("body-column_focus"),t.parentElement.classList.remove("body-row_focus"),this.switchDecorationToDisplay()},editingAccepted:function(t){switch(t.detail.key){case"Enter":this.switchDecorationToDisplay(),t.target.focus();break;case"Tab":var e=null;e=t.detail.keyShift?t.target.previousElementSibling:t.target.nextElementSibling,this.switchDecorationToDisplay(),t.target.classList.remove("body-column_focus"),setTimeout((function(){var t=new Event("dblclick",{bubbles:!1});e.focus(),e.dispatchEvent(t)}),10);break}}}},et={name:"DataTableBody",components:{DataTableOverflow:T,DataTableTooltip:A,DataTableContentDisplay:$},mixins:[L,V,tt],props:{id:{type:String,default:"dataTable"},tableName:{type:String,default:""},template:Object,typeHeight:{type:String,default:"fixed"},typeColumn:{type:String,default:"fixed"},items:{type:Array,default:function(){return[]}},itemsHeader:{type:Array,default:function(){return[]}},isEditable:{type:Boolean,default:!1},isExpansion:{type:Boolean,default:!1},isMultiline:{type:Boolean,default:!1}},computed:{isLoadingData:function(){return this.$store.getters["DataTable/GET_STATUS_PROCESSING"]}}},it=et,ot=(i("b6ef"),i("8336")),nt=Object(c["a"])(it,I,U,!1,null,"44d51f4c",null),at=nt.exports;d()(nt,{VBtn:ot["a"],VIcon:M["a"]});var st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer",class:"footer_"+t.typeColumn},[t._v(" Всего записей в базе по таблице: "+t._s(t.gettingCountRowInBase)+", загружено и показано: "+t._s(t.gettingCountRowLoad)+" ")])},rt=[],lt={name:"DataTableFooter",props:{tableName:{type:String,default:""},typeColumn:{type:String,default:"fixed"}},computed:{gettingCountRowInBase:function(){return this.$store.getters["DataTable/GET_DATA_COUNT_TOTAL"](this.tableName)},gettingCountRowLoad:function(){return this.$store.getters["DataTable/GET_DATA_COUNT_LOAD"](this.tableName)}}},ct=lt,ut=(i("55c5"),Object(c["a"])(ct,st,rt,!1,null,"2701bb93",null)),dt=ut.exports,pt=(i("96cf"),i("1da1")),ht={computed:{isLoadingData:function(){var t=this,e=this.$store.getters["DataTable/GET_STATUS_PROCESSING"];return!e&&this.parentElement&&(this.parentElement.addEventListener("scroll",this.eventScrollPagination),0!=this.$store.getters["DataTable/GET_DATA_COUNT_TOTAL"](this.properties.tableName)&&setTimeout((function(){return t.eventScrollPagination()}),300)),e}},data:function(){return{parentElement:null,parentElementEdge:0}},watch:{typeHeight:function(){var t=this;"dense"==this.typeHeight&&setTimeout((function(){return t.eventScrollPagination()}),300)}},created:function(){var t=this;return Object(pt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("DataTable/REQUEST_OPTIONS",{tableName:t.properties.tableName}).then((function(e){t.$store.dispatch("DataTable/REQUEST_DATA",{tableName:t.properties.tableName})}));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.parentElement=document.getElementById(this.id),this.parentElementEdge=this.parentElement.getBoundingClientRect().bottom},updated:function(){this.parentElementEdge=this.parentElement.getBoundingClientRect().bottom},methods:{eventScrollPagination:function(){var t=document.querySelector("#".concat(this.id,"-boot-anchor")).getBoundingClientRect().bottom-500;t<this.parentElementEdge&&(this.parentElement.removeEventListener("scroll",this.eventScrollPagination),null!=this.$store.getters["DataTable/GET_ADDRESS_API_PAGE_NEXT"](this.properties.tableName)&&this.$store.dispatch("DataTable/REQUEST_DATA_NEXT",{tableName:this.properties.tableName}))}}},mt=i("2909"),ft={computed:{gettingDataHeader:function(){var t=[],e=[],i=this.$store.getters["DataTable/GET_OPTIONS"](this.properties.tableName);if(Array.isArray(this.properties.headers[0]))for(var o=0;o<this.properties.headers.length;o++){var n;(n=t).push.apply(n,Object(mt["a"])(this.properties.headers[o]))}else t=this.properties.headers;return t.forEach((function(t){t.value in i&&e.push(Object.assign(t,i[t.value],{position_in_template:"grid-area: ".concat(t.value)}))})),e},gettingDataBody:function(){if("tableName"in this.properties)return this.$store.getters["DataTable/GET_DATA"](this.properties.tableName)}}},gt=(i("498a"),{computed:{computedTemplateTable:function(){var t={"grid-template-areas":"","grid-template-columns":""},e=this.properties.headers;return e[0].length?(t["grid-template-areas"]=this.computedAreaMultiLine(e),t["grid-template-columns"]=this.computedWidthMultiLine(e),t["grid-template-rows"]="repeat(".concat(e.length,", ").concat("fixed"==this.typeHeight?"43px":"dense"==this.typeHeight?"22px":"auto",")")):(t["grid-template-areas"]=this.computedAreaUnoLine(e),t["grid-template-columns"]=this.computedWidthUnoLine(e)),t},computedActionMax:function(){return"auto"!=this.typeHeight&&1==this.isExpansion}},methods:{computedAreaUnoLine:function(t){var e='"';return this.computedActionMax&&(e+="action_max "),t.forEach((function(t){return e+="".concat(t.value," ")})),e=e.trim(),e+='"',e},computedAreaMultiLine:function(t){for(var e=t.length,i='"',o=[],n=0;n<e;n++)o.push([]);for(var a=function(e){t[e].forEach((function(t){if(t.column)for(var i=0;i<t.column;i++)o[e].push(t.value);else o[e].push(t.value?t.value:".")}))},s=0;s<e;s++)a(s);for(var r=o[0].length,l=0;l<r;l++)for(var c=1;c<e;c++)"."==o[c][l]&&(o[c][l]=o[c-1][l]);for(var u=0;u<e;u++)i+=o[u].join(" "),i+=u!=e-1?'" "':'"';return i},computedWidthUnoLine:function(t){var e="";return this.computedActionMax&&(e+="minmax(22px, 22px) "),t.forEach((function(t){t.width?Array.isArray(t.width)?e+="minmax(".concat(void 0!=t.width[0]?t.width[0]:"100","px, ").concat(void 0!=t.width[1]?t.width[1]+"px":"100vw",") "):e+="".concat(t.width,"px "):e+="minmax(100px, 100vw) "})),e},computedWidthMultiLine:function(t){for(var e=t.length,i="",o=[],n=0;n<e;n++)o.push([]);for(var a=function(e){t[e].forEach((function(t){if(t.value)if(t.column){o[e].push("auto");for(var i=0;i<t.column-1;i++)o[e].push("auto")}else t.width?Array.isArray(t.width)?o[e].push("minmax(".concat(void 0!=t.width[0]?t.width[0]:"100","px, ").concat(void 0!=t.width[1]?t.width[1]+"px":"100vw",")")):o[e].push("".concat(t.width,"px ")):o[e].push("minmax(100px, 100vw)");else o[e].push(".")}))},s=0;s<e;s++)a(s);for(var r=[],l=o[0].length,c=0;c<l;c++)if("auto"==o[0][c])for(var u=1;u<e;u++){if("auto"!=o[u][c]){r.push(o[u][c]);break}u==e-1&&r.push(o[u][c])}else r.push(o[0][c]);return i=r.join(" "),i}}}),bt={methods:{eventRowFocused:function(t,e){this.$emit("event-row-focused",e)},eventRowSelected:function(t,e){this.$emit("event-row-selected",e,this.properties.tableName)},eventRowKeydown:function(t,e){this.$emit("event-row-keydown",t,e)},eventBodyBlur:function(){this.$emit("event-component-blur")}}},vt={name:"DataTable",components:{DataTableProgressLine:m,DataTableHeader:j,DataTableBody:at,DataTableFooter:dt},mixins:[ht,ft,gt,bt],props:{id:{type:String,default:"dataTable"},properties:Object,typeHeight:{type:String,default:"fixed"},typeColumn:{type:String,default:"fixed"},isEditable:{type:Boolean,default:!1},isFooter:{type:Boolean,default:!1},isExpansion:{type:Boolean,default:!1},isMultiline:{type:Boolean,default:!1}}},yt=vt,wt=(i("43ec"),Object(c["a"])(yt,o,n,!1,null,"a7bc9c58",null)),_t=wt.exports,Tt={components:{DataTable:_t},props:{typeRowNumber:{type:Number,default:0},typeColumn:{type:String,default:"fixed"},isFooter:{type:Boolean,default:!1},isExpansion:{type:Boolean,default:!1},isMultiline:{type:Boolean,default:!1},isEditable:{type:Boolean,default:!0}},data:function(){return{typeRow:["fixed","dense","auto"],focusedElement:{}}},computed:{tableProperties:function(){return this.isMultiline&&this.tablePropertiesMultiline?this.tablePropertiesMultiline:this.tablePropertiesUno}},mounted:function(){this.$emit("table-mount",this.$data,this.tableProperties)},methods:{eventRowFocused:function(t){this.$emit("row-focused",t)},eventRowSelected:function(t){this.$emit("row-selected",t)},eventRowKeydown:function(t,e){this.$emit("row-keydown",t,e)},eventComponentBlur:function(){this.$emit("component-blur")}}}},"2fad":function(t,e,i){},"3f03":function(t,e,i){"use strict";i("2fad")},"43ec":function(t,e,i){"use strict";i("731b")},"4d8c":function(t,e,i){"use strict";i("0689")},5517:function(t,e,i){"use strict";i("beb7")},"55c5":function(t,e,i){"use strict";i("e996")},6966:function(t,e,i){},"731b":function(t,e,i){},7928:function(t,e,i){},b6ef:function(t,e,i){"use strict";i("6966")},beb7:function(t,e,i){},e06f:function(t,e,i){"use strict";i("7928")},e996:function(t,e,i){},e99d:function(t,e,i){"use strict";i("f414")},f414:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4c185b62.f46179fb.js.map