webpackJsonp([11],{116:function(e,t,s){s(628);var n=s(3)(s(629),s(630),null,null);e.exports=n.exports},628:function(e,t){},629:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(6),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"message",data:function(){var e=this,t=function(t,s){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.currentMesList.splice(s.index,1)[0]),a.default.ajax({method:"POST",action:"setmessagestat",json:{msgid:s.row.msgid,msgstat:"1"}}).then(function(e){}).catch(function(t){e.$Message.error(t)})}}},"标为已读")},s=function(t,s){return t("Button",{props:{size:"small",type:"error"},on:{click:function(){e.recyclebinList.unshift(e.hasreadMesList.splice(s.index,1)[0]),a.default.ajax({method:"POST",action:"setmessagestat",json:{msgid:s.row.msgid,msgstat:"-1"}}).then(function(e){}).catch(function(t){e.$Message.error(t)})}}},"删除")},n=function(t,s){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.recyclebinList.splice(s.index,1)[0]),a.default.ajax({method:"POST",action:"setmessagestat",json:{msgid:s.row.msgid,msgstat:"1"}}).then(function(e){}).catch(function(t){e.$Message.error(t)})}}},"还原")};return{currentMesList:[],unreadMesList:[],hasreadMesList:[],recyclebinList:[],currentMessageType:"unread",showMesTitleList:!0,unreadCount:0,hasreadCount:0,recyclebinCount:0,noDataText:"暂无未读消息",newmsg:!1,msgtitle:"",msgcontent:"",systemuser:[],msguser:[],mes:{msgid:"",title:"",content:"",sendid:"",senddate:"",msgstat:""},mesTitleColumns:[{title:" ",key:"title",align:"left",ellipsis:!0,render:function(t,s){return t("a",{on:{click:function(){e.showMesTitleList=!1,e.getmsgcontent(s.row.msgid)}}},"[ "+s.row.sendid+" ]  "+s.row.title)}},{title:" ",key:"time",align:"center",width:180,render:function(e,t){return e("span",[e("Icon",{props:{type:"android-time",size:12},style:{margin:"0 5px"}}),e("span",{props:{type:"android-time",size:12}},a.default.formatDate(t.row.senddate))])}},{title:" ",key:"asread",align:"center",width:100,render:function(a,i){return"unread"===e.currentMessageType?a("div",[t(a,i)]):"hasread"===e.currentMessageType?a("div",[s(a,i)]):"recyclebin"===e.currentMessageType?a("div",[n(a,i)]):void 0}}]}},methods:{backMesTitleList:function(){this.showMesTitleList=!0},setCurrentMesType:function(e){this.currentMessageType!==e&&(this.showMesTitleList=!0),this.currentMessageType=e,"unread"===e?(this.noDataText="暂无未读消息",this.currentMesList=this.unreadMesList):"hasread"===e?(this.noDataText="暂无已读消息",this.currentMesList=this.hasreadMesList):"recyclebin"===e&&(this.noDataText="回收站无消息",this.currentMesList=this.recyclebinList)},sendmessage:function(){var e=this;a.default.ajax({method:"POST",action:"sendmessage",json:{title:this.msgtitle,content:this.msgcontent,rid:this.msguser}}).then(function(t){e.$Message.info("发射成功")}).catch(function(t){e.$Message.error(t)})},getmsgcontent:function(e){var t=this;a.default.ajax({method:"POST",action:"getmsgcontent",json:{msgid:e}}).then(function(e){t.mes=e,t.mes.senddate=a.default.formatdate(t.mes.senddate)}).catch(function(e){t.$Message.error(e)})},usersearch:function(e){var t=this;a.default.ajax({method:"POST",action:"usersearch",json:{keyword:e}}).then(function(e){t.systemuser=e.ret}).catch(function(e){t.$Message.error(e)})}},mounted:function(){var e=this;a.default.ajax({method:"POST",action:"getmessage",json:{}}).then(function(t){e.currentMesList=t.message,e.currentMesList.forEach(function(t){switch(t.msgstat){case"1":e.hasreadMesList.push(t);case"-1":e.recyclebinList.push(t);default:e.unreadMesList.push(t)}}),e.unreadCount=e.unreadMesList.length,e.hasreadCount=e.hasreadMesList.length,e.recyclebinCount=e.recyclebinList.length}).catch(function(t){e.$Message.error(t)})},watch:{unreadMesList:function(e){this.unreadCount=e.length},hasreadMesList:function(e){this.hasreadCount=e.length},recyclebinList:function(e){this.recyclebinCount=e.length}}}},630:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-main-con"},[s("div",{staticClass:"message-mainlist-con"},[s("div",[s("Button",{attrs:{size:"large",long:"",type:"success"},on:{click:function(t){e.newmsg=!0}}},[e._v("新建消息")])],1),e._v(" "),s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("unread")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"unread"===e.currentMessageType,expression:"currentMessageType === 'unread'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("未读消息")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.unreadCount}})],1)],1),e._v(" "),s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("hasread")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"hasread"===e.currentMessageType,expression:"currentMessageType === 'hasread'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("已读消息")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.hasreadCount}})],1)],1),e._v(" "),s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("recyclebin")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"recyclebin"===e.currentMessageType,expression:"currentMessageType === 'recyclebin'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("回收站")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.recyclebinCount}})],1)],1)]),e._v(" "),s("div",{staticClass:"message-content-con"},[s("transition",{attrs:{name:"view-message"}},[e.showMesTitleList?s("div",{staticClass:"message-title-list-con"},[s("Table",{ref:"messageList",attrs:{columns:e.mesTitleColumns,data:e.currentMesList,"no-data-text":e.noDataText}})],1):e._e()]),e._v(" "),s("transition",{attrs:{name:"back-message-list"}},[e.showMesTitleList?e._e():s("div",{staticClass:"message-view-content-con"},[s("div",{staticClass:"message-content-top-bar"},[s("span",{staticClass:"mes-back-btn-con"},[s("Button",{attrs:{type:"text"},on:{click:e.backMesTitleList}},[s("Icon",{attrs:{type:"chevron-left"}}),e._v("  返回")],1)],1),e._v(" "),s("h3",{staticClass:"mes-title"},[e._v(e._s(e.mes.title))])]),e._v(" "),s("p",{staticClass:"mes-time-con"},[e._v("@"+e._s(e.mes.sendid)+"    "),s("Icon",{attrs:{type:"android-time"}}),e._v("  "+e._s(e.mes.senddate))],1),e._v(" "),s("div",{staticClass:"message-content-body"},[s("p",{staticClass:"message-content"},[e._v(e._s(e.mes.content))])])])])],1),e._v(" "),s("Modal",{attrs:{title:"群发消息",okText:"发射"},on:{"on-ok":e.sendmessage},model:{value:e.newmsg,callback:function(t){e.newmsg=t},expression:"newmsg"}},[s("Form",{attrs:{"label-width":80}},[s("FormItem",{attrs:{label:"消息标题"}},[s("Input",{model:{value:e.msgtitle,callback:function(t){e.msgtitle=t},expression:"msgtitle"}})],1),e._v(" "),s("FormItem",{attrs:{label:"消息标题"}},[s("Input",{attrs:{rows:4,type:"textarea"},model:{value:e.msgcontent,callback:function(t){e.msgcontent=t},expression:"msgcontent"}})],1),e._v(" "),s("FormItem",{attrs:{label:"接收人"}},[s("Select",{attrs:{multiple:"",filterable:"",remote:"",placeholder:"请输入关键字搜索","remote-method":e.usersearch},model:{value:e.msguser,callback:function(t){e.msguser=t},expression:"msguser"}},e._l(e.systemuser,function(t){return s("Option",{key:t.uid,attrs:{value:t.uid}},[e._v(e._s(t.username)+"("+e._s(t.realname)+")")])}))],1)],1)],1)],1)},staticRenderFns:[]}}});