(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"1f490":function(t,a,r){"use strict";var o=r("be88"),i=r.n(o);i.a},7935:function(t,a,r){},9403:function(t,a,r){"use strict";r.r(a);var render=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("q-page",{staticClass:"column wallet-detail-page",class:{"text-black bg-grey-12":"false"===t.$store.state.settings.lightMode,"":"true"===t.$store.state.settings.lightMode,"dark-theme":"true"===t.$store.state.settings.lightMode},staticStyle:{"padding-bottom":"50px"}},[r("profile-header",{staticClass:"marg",attrs:{version:"type3"}}),r("wallet-detail")],1)},o=[],i=r("967e"),c=r.n(i),l=(r("96cf"),r("fa84")),u=r.n(l),WalletDetailvue_type_template_id_90a8159e_scoped_true_render=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{class:{"dark-theme":"true"===t.$store.state.settings.lightMode}},[r("div",{staticClass:"wallets-wrapper padtop",staticStyle:{"padding-bottom":"50px"}},[r("div",{staticClass:"wallets-wrapper--list open",class:{opacity:t.currentAccount.hidden}},[r("q-list",{staticClass:"list-wrapper",attrs:{bordered:"",separator:""}},[r("q-item",{staticClass:"selected",attrs:{clickable:""}},[r("div",{staticClass:"header-wallet-wrapper culumn full-width"},[r("div",{staticClass:"header-wallet full-width flex justify-between"},[r("q-item-section",{attrs:{avatar:""}},[r("img",{staticClass:"coin-icon",attrs:{width:"35px",src:t.currentAccount.icon,alt:""}})]),r("q-item-section",{staticClass:"item-name"},[r("span",{staticClass:"item-name--name"},[t._v(t._s(t.currentAccount.name))])]),r("q-item-section",{staticClass:"item-info"},[r("span",{staticClass:"item-info--amount"},[t._v(t._s(new Number(t.currentAccount.amount).toFixed(8))+" "+t._s(t.currentAccount.type.toUpperCase()))])])],1),r("div",{staticClass:"menu-wallet"},[r("q-list",{staticClass:"sub-list-menu",attrs:{bordered:"",separator:""}},[r("q-separator",{staticStyle:{"margin-top":"10px"}}),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"Trade",clickable:"",to:"/verto/exchange"}},[t._v("Trade "),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1),"verto"===t.currentAccount.type?r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"Create EOS account",to:"/verto/eos-account/create",clickable:""}},[t._v("Create EOS account "),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1):t._e(),"verto"===t.currentAccount.type?r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"Import EOS account",to:"/verto/eos-account/import",clickable:""}},[t._v("Import EOS account "),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1):t._e(),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"Staking",clickable:"",to:"/verto/stake"}},[t._v("Staking"),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1),"eos"===t.currentAccount.type?r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"EOS to VTX Converter",clickable:"",to:"/verto/converter"}},[t._v("EOS to VTX Converter"),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1):t._e(),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{"data-name":"Security",clickable:""},on:{click:function(a){t.alertSecurity=!0}}},[t._v("Security "),r("q-icon",{staticClass:"p-abs",staticStyle:{"font-size":"1.5em"},attrs:{name:"keyboard_arrow_right"}})],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-relative",attrs:{tag:"label","data-name":"Hide Currency Chain"}},[r("q-item-section",[r("q-item-label",[t._v(t._s(t.currentAccount.hidden?"Reveal":"Hide")+" Currency Chain")])],1),r("q-item-section",{attrs:{avatar:""}},[r("q-toggle",{staticClass:"p-abs",attrs:{color:"blue"},on:{input:function(a){return t.hideCurrency()}},model:{value:t.currentAccount.hidden,callback:function(a){t.$set(t.currentAccount,"hidden",a)},expression:"currentAccount.hidden"}})],1)],1)],1)],1)])])],1)],1),r("q-dialog",{model:{value:t.alertSecurity,callback:function(a){t.alertSecurity=a},expression:"alertSecurity"}},[r("q-card",{class:{"dark-theme":"true"===t.$store.state.settings.lightMode},staticStyle:{width:"100%","max-width":"400px"},attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode}},[r("q-card-actions",{staticClass:"q-pb-lg q-pr-lg",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"go-to-security",attrs:{flat:"",label:"Got it",color:"primary"},on:{click:function(a){return t.goToSecurity()}}})],1)],1)],1),r("div",{staticClass:"modal-wrapper text-black bg-white",class:{open:t.openModal}},[r("div",{staticClass:"modal-wrapper--content"},[r("div",{staticClass:"standard-content"},[r("div",{staticClass:"standard-content--body"},[r("h2",{staticClass:"standard-content--title flex justify-center"},[r("q-btn",{staticClass:"btn-align-left",attrs:{flat:"",unelevated:"","text-color":"black",icon:"keyboard_backspace"},on:{click:function(a){return t.hideModalFun()}}}),t._v("\n                Are you sure you want to remove BTC?\n              ")],1),r("p",{staticClass:"standard-content--desc"},[t._v("You can restore BTC **** at any time using your seed phrase.")]),r("div",{staticClass:"text-h6 wallet-name"},[t._v("BTC wallet")]),r("div",{staticClass:"text-h6 wallet-amount"},[t._v("136.23 BTC")])]),t.confirmed?r("div",{staticClass:"standard-content--footer confirmed"},[r("span",{staticClass:"confirmed-title"},[t._v("BTC has been removed.")]),r("q-btn",{staticClass:"action-link next",attrs:{flat:"",color:"black","text-color":"white",label:"Back to wallet"},on:{click:function(a){return t.hideModalFun()}}})],1):r("div",{staticClass:"standard-content--footer"},[r("q-btn",{staticClass:"action-link next",attrs:{flat:"",color:"black","text-color":"white",label:"Cancel"},on:{click:function(a){return t.hideModalFun()}}}),r("q-btn",{staticClass:"action-link next",attrs:{flat:"",color:"black","text-color":"white",label:"Confirm"},on:{click:function(a){t.confirmed=!0}}})],1)])])])],1)])},d=[];r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("06db"),r("7f7f"),r("7514");function _createForOfIteratorHelper(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var a=0,r=function F(){};return{s:r,n:function n(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function e(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,c=!0,l=!1;return{s:function s(){o=t[Symbol.iterator]()},n:function n(){var t=o.next();return c=t.done,t},e:function e(t){l=!0,i=t},f:function f(){try{c||null==o.return||o.return()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(t,a){if(t){if("string"===typeof t)return _arrayLikeToArray(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,a):void 0}}function _arrayLikeToArray(t,a){(null==a||a>t.length)&&(a=t.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=t[r];return o}var p={name:"Wallets",props:{showWallets:{type:Boolean,required:!1,default:!0},isWalletsPage:{type:Boolean,required:!1,default:!0},isWalletDetail:{type:Boolean,required:!1,default:!0}},data:function data(){return{alertSecurity:!1,toggled:!1,showPrivate:!1,showVespucciScore:!1,active:!0,openModal:!1,accountName:"",tokenID:"",currentAsset:{buySupport:"",currentPrice:"",marketCap:"",c24hChange:"",c24hChange2:"",vespucciScore:""},confirmed:!1,tableData:[],currentAccount:{selected:!1,type:"",key:"",name:"",amount:"",contract:"",chain:"",to:"",icon:""}}},mounted:function mounted(){return u()(c.a.mark((function _callee(){return c.a.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),_callee)})))()},updated:function updated(){},created:function created(){var t=this;return u()(c.a.mark((function _callee2(){return c.a.wrap((function _callee2$(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.state.wallets.tokens;case 2:t.tableData=a.sent,t.currentAccount=t.tableData.find((function(a){return a.chain===t.$route.params.chainID&&a.type===t.$route.params.tokenID&&("eos"===a.chain?a.name.toLowerCase()===t.$route.params.accountName:a.key===t.$route.params.accountName)})),t.$store.commit("currentwallet/updateParams",{chainID:t.$route.params.chainID,tokenID:t.$route.params.tokenID,accountName:t.$route.params.accountName}),t.$store.state.currentwallet.wallet=t.currentAccount;case 6:case"end":return a.stop()}}),_callee2)})))()},methods:{hideCurrency:function hideCurrency(){var t=this;return u()(c.a.mark((function _callee3(){return c.a.wrap((function _callee3$(a){while(1)switch(a.prev=a.next){case 0:return t.$store.state.wallets.tokens.filter((function(a){return a.chain===t.$route.params.chainID&&a.type===t.$route.params.tokenID&&("eos"===a.chain?a.name.toLowerCase()===t.$route.params.accountName:a.key===t.$route.params.accountName)})).map((function(a){a.hidden=t.currentAccount.hidden})),a.next=3,t.$configManager.updateConfig(t.$store.state.settings.temporary,t.$store.state.currentwallet.config);case 3:case"end":return a.stop()}}),_callee3)})))()},goToSecurity:function goToSecurity(){this.$router.push({path:"/verto/wallet/privateKey"})},togglePrivateKey:function togglePrivateKey(){this.showPrivate=!this.showPrivate},hideModalFun:function hideModalFun(){this.openModal=!1,this.confirmed=!1},openModalFun:function openModalFun(t){this.openModal=!0},showMenu:function showMenu(t){t.selected?t.selected=!1:(this.removeClassSelected(),t.selected=!0)},removeClassSelected:function removeClassSelected(){var t,a=_createForOfIteratorHelper(this.menu);try{for(a.s();!(t=a.n()).done;){var r=t.value;r.selected=!1}}catch(o){a.e(o)}finally{a.f()}},toggleWallets:function toggleWallets(){this.toggled=!this.toggled,this.showText=!this.showText}}},m=p,h=(r("9cde"),r("2877")),v=Object(h["a"])(m,WalletDetailvue_type_template_id_90a8159e_scoped_true_render,d,!1,null,"90a8159e",null),w=v.exports,g=r("23bd"),y=r("04c6"),b=r("9224"),C=r("9bf1");C.default&&(C=C.default);var k={components:{ProfileHeader:g["a"],WalletDetail:w},data:function data(){return{pword:"",minimizedModal:!1,chainID:this.$route.params.chainID,tokenID:this.$route.params.tokenID,message:"",version:{},network:this.$store.state.settings.network,configPath:""}},mounted:function mounted(){this.version=b["a"],this.setupPlatformPath()},methods:{setupPlatformPath:function setupPlatformPath(){var t=this;return u()(c.a.mark((function _callee(){return c.a.wrap((function _callee$(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,C.filePath();case 2:t.configPath=a.sent;case 3:case"end":return a.stop()}}),_callee)})))()},goChangePassword:function goChangePassword(){this.$router.push({path:"/change-password"})},setNetwork:function setNetwork(){this.$store.dispatch("settings/toggleNetwork",this.network),this.$q.notify({message:"Network changed to ".concat(this.network),color:"positive"})},backupConfig:function backupConfig(){var t=this;return u()(c.a.mark((function _callee2(){return c.a.wrap((function _callee2$(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y["a"].backupConfig();case 3:t.$q.platform.is.android&&t.$q.notify({color:"positive",message:"Config Saved"}),a.next=8;break;case 6:a.prev=6,a.t0=a["catch"](0);case 8:case"end":return a.stop()}}),_callee2,null,[[0,6]])})))()}}},_=k,$=(r("1f490"),Object(h["a"])(_,render,o,!1,null,"dff58fe4",null));a["default"]=$.exports},"9cde":function(t,a,r){"use strict";var o=r("7935"),i=r.n(o);i.a},be88:function(t,a,r){}}]);