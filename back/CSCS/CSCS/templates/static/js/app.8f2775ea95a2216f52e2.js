webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},r,!1,function(t){a("gsu9")},null,null).exports,l=a("/ocq"),n=this,o={name:"home",data:function(){return{msg:"漫画样稿上色系统",url:"",flag:!0,srcList:[]}},methods:{beforeImageUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<20;return e||n.$message.error("只能上传 JPG 格式的图片!"),a||n.$message.error("上传图片大小不能超过 20MB!"),e&&a},afterImageUpload:function(t,e,a){n.flag=!1,document.getElementById("img").src=t.url,n.srcList=[t.url]}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[a("el-upload",{attrs:{drag:"",action:"http://localhost:8080/CSCS/upload","before-upload":t.beforeImageUpload,"on-success":t.afterImageUpload}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("\n            将文件拖到此处，或"),a("em",[t._v("点击上传")])]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n            只能上传jpg文件，且不超过20MB\n          ")])])],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[t.flag?a("el-image",{staticStyle:{width:"360px",height:"180px"},attrs:{id:"img"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]):t._e(),t._v(" "),t.flag?t._e():a("el-image",{staticStyle:{width:"360px",height:"180px"},attrs:{id:"img",src:t.url,fit:"fill","preview-src-list":t.srcList}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"})])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(o,c,!1,function(t){a("NbPP")},"data-v-95e7a056",null).exports;s.default.use(l.a);var u=new l.a({routes:[{path:"/home",component:p},{path:"*",redirect:"/home"}]}),d=a("zL8q"),g=a.n(d);a("tvR6");s.default.config.productionTip=!1,s.default.use(g.a),new s.default({el:"#app",router:u,components:{App:i},template:"<App/>"})},NbPP:function(t,e){},gsu9:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8f2775ea95a2216f52e2.js.map