webpackJsonp([1],{LDX2:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},r,!1,function(t){s("gsu9")},null,null).exports,n=s("/ocq"),o=this,l={name:"home",data:function(){return{msg:"漫画样稿上色系统",url:s("s2wT"),srcList:[s("s2wT")]}},methods:{beforeImageUpload:function(t){var e="image/jpeg"===t.type,s=t.size/1024/1024<20;return e||o.$message.error("只能上传 JPG 格式的图片!"),s||o.$message.error("上传图片大小不能超过 20MB!"),e&&s},afterImageUpload:function(t,e,s){document.getElementById("img").src=t.url,o.srcList[0]=t.url}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"})]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"},[s("el-upload",{attrs:{drag:"",action:"http://localhost:8080/CSCS/upload","before-upload":t.beforeImageUpload,"on-success":t.afterImageUpload}},[s("i",{staticClass:"el-icon-upload"}),t._v(" "),s("div",{staticClass:"el-upload__text"},[t._v("\n            将文件拖到此处，或"),s("em",[t._v("点击上传")])]),t._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n            只能上传jpg文件，且不超过20MB\n          ")])])],1)]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"},[s("el-image",{staticStyle:{width:"358px",height:"178px",border:"1px dashed lightgray","border-radius":"5px"},attrs:{id:"img",src:t.url,fit:"corver","preview-src-list":t.srcList}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])])],1)]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"})])],1)],1)},staticRenderFns:[]};var p=s("VU/8")(l,c,!1,function(t){s("LDX2")},"data-v-4f5d0fd5",null).exports;a.default.use(n.a);var d=new n.a({routes:[{path:"/home",component:p},{path:"*",redirect:"/home"}]}),u=s("zL8q"),v=s.n(u);s("tvR6");a.default.config.productionTip=!1,a.default.use(v.a),new a.default({el:"#app",router:d,components:{App:i},template:"<App/>"})},gsu9:function(t,e){},s2wT:function(t,e,s){t.exports=s.p+"static/img/initial.2e88e65.jpeg"},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1270e8436435e186cf55.js.map