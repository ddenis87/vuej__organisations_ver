(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-030c7e17","chunk-2d20f198"],{"115b":function(e,t,i){},"6f74":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-table"},[i("div",{staticClass:"page-table__control"},[i("data-table-control",{attrs:{"form-properties":e.propertiesDataTable,"table-name":"organisations","focused-element":e.focusedElement,"height-type":e.heightType[e.heightTypeCount],paddingType:e.paddingType},on:{"toggle-type-row":e.eventChangeRow,"toggle-type-column":e.eventChangeColumn,"toggle-footer":e.toggleFooter}})],1),i("v-divider"),i("div",{staticClass:"page-table__body"},[i("data-table",e._b({attrs:{"d-id":"Organisations","table-properties":e.propertiesDataTable,editable:"",footer:e.isFooter},on:{"event-row-focused":e.eventRowFocused,"event-row-selected":e.eventRowSelected}},"data-table",e._d({},[e.heightType[e.heightTypeCount],!0,e.paddingType,!0])))],1)],1)},a=[],o=i("b1d7"),d={name:"TableOrganisation",mixins:[o["Table"]],data:function(){return{heightTypeCount:0,heightType:["fixed","dense","auto"],paddingType:"padding-fixed",isFooter:!1,focusedElement:{},propertiesDataTable:{tableName:"organisations",header:[{value:"id",width:[50,50]},{value:"institution_code",align:"end",width:[90,90]},{value:"title",width:[400]},{value:"inn",width:[115,115]},{value:"kpp",width:[115,115]},{value:"rubpnubp_status",width:[140,140]},{value:"egrul_status",width:[140,140]},{value:"industry_typing",width:[120,120]},{value:"institution_type",width:[130,130]},{value:"budget_level",width:[180,180]},{value:"bk",width:[180,180],objectValue:"head_name"}]}}}},s=d,l=(i("9b4d"),i("2877")),u=i("6544"),p=i.n(u),h=i("ce7e"),r=Object(l["a"])(s,n,a,!1,null,"3f8a6cfe",null);t["default"]=r.exports;p()(r,{VDivider:h["a"]})},"9b4d":function(e,t,i){"use strict";i("115b")},b1d7:function(e,t,i){"use strict";i.r(t),i.d(t,"Table",(function(){return o}));var n=i("6b18"),a=i("d10e"),o={components:{DataTableControl:n["a"],DataTable:a["a"]},props:{editable:{type:Boolean,default:!0}},computed:{isEditable:function(){return this.editable}},methods:{eventRowFocused:function(e,t,i){this.focusedElement=Object.assign({},t)},eventRowSelected:function(e,t,i){this.$emit("event-row-selected",t)},eventTableBlur:function(){console.log("blur table")},eventChangeRow:function(){this.heightTypeCount!=this.heightType.length-1?this.heightTypeCount=this.heightTypeCount+1:this.heightTypeCount=0},eventChangeColumn:function(){"padding-fixed"==this.paddingType?this.paddingType="padding-dense":this.paddingType="padding-fixed"},toggleFooter:function(){this.isFooter=!this.isFooter}}}}}]);
//# sourceMappingURL=chunk-030c7e17.dbd0782c.js.map