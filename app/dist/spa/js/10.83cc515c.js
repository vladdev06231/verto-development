(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0183":function(t,e,o){},"574c":function(t,e,o){"use strict";var n=o("fa4c"),i=o.n(n);i.a},dcf7:function(t,e,o){"use strict";var n=o("0183"),i=o.n(n);i.a},eeb90:function(t,e,o){"use strict";o.r(e);var render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",[o("q-page-container",[o("router-view"),t._e()],1)],1)},n=[],i={name:"Intro",data:function data(){return{lightMode:!1}},created:function created(){window.localStorage.setItem("skin",null!==window.localStorage.getItem("skin")?window.localStorage.getItem("skin"):this.$store.state.settings.lightMode),this.$store.state.settings.lightMode=window.localStorage.getItem("skin"),this.lightMode="false"!==window.localStorage.getItem("skin")},methods:{toggleLightDarkMode:function toggleLightDarkMode(t){window.localStorage.setItem("skin",t),this.$store.state.settings.lightMode=window.localStorage.getItem("skin")}}},a=i,s=(o("dcf7"),o("574c"),o("2877")),c=Object(s["a"])(a,render,n,!1,null,"258233b1",null);e["default"]=c.exports},fa4c:function(t,e,o){}}]);