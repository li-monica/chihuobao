webpackJsonp([32],{iaB4:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.user {\n  background: #fff;\n  height: 100%;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.user .content {\n    margin: 30px auto;\n}\n.user .content .el-table._el-table {\n      width: 100%;\n}\n.user .content .el-table._el-table .el-table__body-wrapper {\n        overflow: hidden;\n}\n",""])},qZsU:function(e,t,n){var l=n("iaB4");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);n("rjj0")("5c9090aa",l,!0)},z6tf:function(e,t,n){"use strict";function l(e){n("qZsU")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("wEuf"),a={data:function(){return{AUTH:["无权限","有权限"],adminList:[],detailVisible:!1,current:{},newVisible:!1,newAdmin:{}}},created:function(){this.getAdminList()},methods:{addNew:function(){this.newVisible=!0},handledel:function(e){var t=this;this.$confirm("是否删除该管理员?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.f)(e.adminName).then(function(e){1===e.code?t.$message({type:"success",message:"删除成功"}):t.$message({type:"error",message:"删除失败"}),t.getAdminList()})}).catch(function(){console.log("取消删除管理员")})},addAdmin:function(){var e=this,t=this.newAdmin,n=t.adminName,l=t.adminPwd;Object(i.a)(n,l).then(function(t){1===t.code?(e.$message({type:"success",message:"新增成功"}),e.newVisible=!1):e.$message({type:"error",message:"新增失败"}),e.getAdminList()})},getAdminList:function(){var e=this;Object(i.j)().then(function(t){e.adminList=t.data.list})},change:function(){var e=this,t=this.current,n=t.adminName,l=t.foodTypeMp,a=t.shopMp,s=t.shopTypeMp;Object(i.d)(n,l,a,s).then(function(t){1===t.code?e.$message({type:"success",message:"配置成功"}):e.$message({type:"error",message:"配置失败"}),e.getAdminList()}),this.detailVisible=!1},handleShow:function(e){this.current=e,this.detailVisible=!0}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[n("div",{staticClass:"header"},[n("el-button",{attrs:{icon:"el-icon-plus",size:"small",round:""},on:{click:e.addNew}},[e._v("新增管理员")])],1),e._v(" "),n("div",{staticClass:"content"},[n("el-table",{staticClass:"_el-table",attrs:{data:e.adminList}},[n("el-table-column",{attrs:{align:"center",prop:"adminName",label:"用户名",width:"280"}}),e._v(" "),n("el-table-column",{attrs:{label:"模块权限"}},[n("el-table-column",{attrs:{align:"center",prop:"shopMp",label:"商铺管理",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"shopTypeMp",label:"商铺分类管理",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"foodTypeMp",label:"食物分类管理",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleShow(t.row)}}},[e._v("修改权限")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handledel(t.row)}}},[e._v("删除管理员")])]}}])})],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"修改权限",visible:e.detailVisible},on:{"update:visible":function(t){e.detailVisible=t}}},[n("el-form",{attrs:{model:e.current,"label-position":"left"}},[n("el-form-item",{attrs:{label:"商铺分类管理"}},[n("el-select",{model:{value:e.current.shopTypeMp,callback:function(t){e.$set(e.current,"shopTypeMp",t)},expression:"current.shopTypeMp"}},[n("el-option",{attrs:{value:"0"}}),e._v(" "),n("el-option",{attrs:{value:"1"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"食物分类管理"}},[n("el-select",{model:{value:e.current.foodTypeMp,callback:function(t){e.$set(e.current,"foodTypeMp",t)},expression:"current.foodTypeMp"}},[n("el-option",{attrs:{value:"0"}}),e._v(" "),n("el-option",{attrs:{value:"1"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"商铺管理"}},[n("el-select",{model:{value:e.current.shopMp,callback:function(t){e.$set(e.current,"shopMp",t)},expression:"current.shopMp"}},[n("el-option",{attrs:{value:"0"}}),e._v(" "),n("el-option",{attrs:{value:"1"}})],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.detailVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.change}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增管理员",visible:e.newVisible},on:{"update:visible":function(t){e.newVisible=t}}},[n("el-form",{attrs:{model:e.newAdmin}},[n("el-form-item",{attrs:{label:"用户名","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.newAdmin.adminName,callback:function(t){e.$set(e.newAdmin,"adminName",t)},expression:"newAdmin.adminName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.newAdmin.adminPwd,callback:function(t){e.$set(e.newAdmin,"adminPwd",t)},expression:"newAdmin.adminPwd"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.newVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.addAdmin}},[e._v("确 定")])],1)],1)],1)},o=[],r={render:s,staticRenderFns:o},c=r,d=n("VU/8"),u=l,p=d(a,c,!1,u,null,null);t.default=p.exports}});