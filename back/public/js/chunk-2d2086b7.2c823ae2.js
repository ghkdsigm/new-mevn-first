(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(s,e,t){"use strict";t.r(e);var r=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"input_row"},[e("label",{attrs:{for:"id"}},[s._v("아이디")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:s.user.userid},on:{input:function(e){e.target.composing||s.$set(s.user,"userid",e.target.value)}}})]),e("div",{staticClass:"input_row"},[e("label",{attrs:{for:"password"}},[s._v("비밀번호")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}})]),e("button",{on:{click:s.login}},[s._v("로그인")]),e("a",{attrs:{href:"/signUp"}},[s._v("가입하기")])])},a=[],o={data:function(){return{user:{userid:"",password:""}}},methods:{login:function(){this.$http.post("/api/users/login",{user:this.user}).then(s=>{alert(s.data.message)},()=>{alert("Login failed! please check your id or password")}).catch(s=>{alert(s)})}}},i=o,u=t("2877"),n=Object(u["a"])(i,r,a,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.2c823ae2.js.map