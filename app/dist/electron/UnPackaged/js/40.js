(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{4598:function(t,e,a){"use strict";a.r(e);var render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"text-black bg-white",class:t.$q.screen.width>1024?"desktop-marg":"mobile-pad"},[a("div",{class:"true"===t.$store.state.settings.lightMode?"text-white mobile-card":"bg-white text-black",staticStyle:{height:"99vh"}},[t.$q.platform.is.mobile||t.$isbex?a("q-header",[a("q-toolbar",{class:"true"===t.$store.state.settings.lightMode?"text-white mobile-card":"bg-white text-black"},[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"arrow_back_ios"},on:{click:function(e){return t.goBackPage()}}}),a("q-item",{class:"true"===t.$store.state.settings.lightMode?"text-white mobile-card":"bg-white text-black",attrs:{dense:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+t.currentToken.image}})],1),a("q-item-section",{attrs:{dark:""}},[a("q-item-label",{domProps:{innerHTML:t._s(t.currentToken.label)}}),a("q-item-label",{staticClass:"ellipsis mw200",class:"true"===t.$store.state.settings.lightMode?"text-white mobile-card":"bg-white text-black",attrs:{caption:""}},[t._v(t._s(t.getKeyFormat(t.currentToken.value)))])],1)],1)],1)],1):t._e(),t.$q.screen.width>1024?a("div",{staticClass:"desktop-version full-height",staticStyle:{height:"100vh"}},[a("div",{staticClass:"row full-height"},[a("div",{staticClass:"col col-md-3"},[a("div",{staticClass:"wallets-container",staticStyle:{height:"100%"}},[a("profile-header",{staticClass:"marg",attrs:{isMobile:!1,version:"type2222"}}),a("wallets",{staticClass:"full-height max-height",attrs:{isMobile:!1,showWallets:!1,isWalletsPage:!1,isWalletDetail:!1}})],1)]),a("div",{staticClass:"col col-md-9"},[a("div",{staticClass:"desktop-card-style apps-section q-mb-sm",class:{"dark-theme":"true"===t.$store.state.settings.lightMode}},[a("div",{staticClass:"standard-content"},[a("h2",{staticClass:"standard-content--title flex"},[t._v("Receive")]),a("div",{staticClass:"standard-content--body"},[a("div",{staticClass:"standard-content--body__form"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-6 q-pr-md"},[a("span",{staticClass:"lab-input"},[t._v("To "),a("b",{staticClass:"verto-id"},[t._v(t._s(t.existingCruxID))])]),a("q-select",{staticClass:"select-input",attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode,separator:"",rounded:"",outlined:"",options:t.options},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",t._g(t._b({staticClass:"custom-menu"},"q-item",e.itemProps,!1),e.itemEvents),[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+e.opt.image}})],1),a("q-item-section",{attrs:{dark:""}},[a("q-item-label",{domProps:{innerHTML:t._s(e.opt.label)}}),a("q-item-label",{staticClass:"ellipsis mw200",attrs:{caption:""}},[t._v(t._s(e.opt.value))])],1)],1)]}},{key:"selected",fn:function(){return[t.currentToken?a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+t.currentToken.image}})],1),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.currentToken.label)}}),a("q-item-label",{staticClass:"ellipsis mw200",attrs:{caption:""}},[t._v(t._s(t.currentToken.value))])],1)],1):a("q-item")]},proxy:!0}],null,!1,1309334785),model:{value:t.currentToken,callback:function(e){t.currentToken=e},expression:"currentToken"}})],1),a("div",{staticClass:"col col-6 flex justify-end"},[a("div",{staticClass:"standard-content--footer "},[a("q-btn",{staticClass:"action-link next",attrs:{flat:"",color:"black","text-color":"white",label:"Share"},on:{click:function(e){return t.toggleShare()}}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-6 q-pr-md q-pt-md"},[a("div",{staticClass:"qrcode-wrapper"},[a("div",{staticClass:"q-mb-md wallet-address flex justify-between"},[a("span",{staticClass:"title"},[t._v("Wallet address")]),a("q-btn",{staticClass:"btn-copy",attrs:{round:"",flat:"",unelevated:"","text-color":"true"===t.$store.state.settings.lightMode?"white":"grey",icon:"o_file_copy"},on:{click:function(e){return t.copyToClipboard(t.exchangeAddress,"Address")}}})],1),a("span",{staticClass:"qrcode-widget q-pt-md"},[t.currentToken&&t.currentToken.type?a("qrcode",{staticClass:"q-mb-md",attrs:{dark:"",value:"eos"===t.currentToken.type?t.currentToken.label:t.currentToken.value,options:{size:200}}}):t._e(),(t.configData,t._e()),a("span",{staticClass:"exchange-address full-width text-center"},[t._v(t._s("eos"===t.currentToken.type?t.currentToken.label:t.currentToken.value))])],1)])])])])])])])])])]):a("div",{staticClass:"standard-content_ mobile-version q-pa-lg"},[a("div",{staticClass:"standard-content--body"},[a("div",{staticClass:"standard-content--body__form"},[t.$q.platform.is.mobile?t._e():a("span",{staticClass:"lab-input"},[t._v("To")]),t.$q.platform.is.mobile?t._e():a("q-select",{staticClass:"select-input",attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode,separator:"",rounded:"",outlined:"",options:t.options},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",t._g(t._b({staticClass:"custom-menu"},"q-item",e.itemProps,!1),e.itemEvents),[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+e.opt.image}})],1),a("q-item-section",{attrs:{dark:""}},[a("q-item-label",{domProps:{innerHTML:t._s(e.opt.label)}}),a("q-item-label",{staticClass:"ellipsis mw200",attrs:{caption:""}},[t._v(t._s(e.opt.value))])],1)],1)]}},{key:"selected",fn:function(){return[t.currentToken?a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+t.currentToken.image}})],1),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.currentToken.label)}}),a("q-item-label",{staticClass:"ellipsis mw200",attrs:{caption:""}},[t._v(t._s(t.currentToken.value))])],1)],1):a("q-item")]},proxy:!0}],null,!1,1309334785),model:{value:t.currentToken,callback:function(e){t.currentToken=e},expression:"currentToken"}}),a("div"),a("br"),a("div",{staticClass:"qrcode-wrapper"},[a("div",{staticClass:"wallet-address flex justify-between"},[a("span",{staticClass:"title"},[t._v("Wallet address")]),a("q-btn",{staticClass:"btn-copy",attrs:{round:"",flat:"",unelevated:"","text-color":"true"===t.$store.state.settings.lightMode?"white":"grey",icon:"o_file_copy"},on:{click:function(e){return t.copyToClipboard(t.exchangeAddress,"Address")}}})],1),a("span",{staticClass:"qrcode-widget q-pt-md"},[t.currentToken.value?a("qrcode",{staticClass:"q-mb-md",attrs:{value:"eos"===t.currentToken.type?t.currentToken.label:t.currentToken.value,options:{size:200}}}):t._e(),a("span",{staticClass:"exchange-address full-width text-center"},[t._v(t._s("eos"===t.currentToken.type?t.currentToken.label:t.currentToken.value))])],1)])],1)]),t._e()])],1),a("q-dialog",{model:{value:t.showShareWrapper,callback:function(e){t.showShareWrapper=e},expression:"showShareWrapper"}},[a("q-card",{staticClass:"q-pa-lg",class:{"dark-theme":"true"===t.$store.state.settings.lightMode},attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode}},[a("q-toolbar",[a("q-avatar",[a("img",{attrs:{src:"statics/icon.png"}})]),a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v("Share")]),t._v(" Public Key")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),a("q-card-section",{staticClass:" text-h6"},[a("div",{staticClass:"social-media-wrapper"},[a("span",{staticClass:"submenu-wrapper"},[a("social-sharing",{staticClass:"share_wrapper text-black flex column justify-even content-start item-start",attrs:{url:t.currentToken.type+" address: "+t.exchangeAddress,title:"Verto | Multi-currency wallet",description:"Receive "+t.currentToken.type+" token from my address ",quote:"",media:"http://localhost:8080/statics/screens/screen_iphone.png",hashtags:"","twitter-user":""},inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social_share"},[a("network",{staticClass:"span-wrapper",attrs:{network:"email"}},[[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/mail.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"skype"}},[[a("button",{staticClass:"border q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/skype.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"sms"}},[[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/sms.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"telegram"}},[[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/telegram.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"reddit"}},[[a("button",{staticClass:"border q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/reddit.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"twitter"}},[[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/twitter.svg",alt:""}})])])])]],2),a("network",{attrs:{network:"whatsapp"}},[[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-accent text-white q-btn--actionable q-focusable q-hoverable q-btn--wrap",attrs:{"data-v-b854f566":"",tabindex:"0",type:"button"}},[a("div",{staticClass:"q-focus-helper",attrs:{tabindex:"-1"}}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("img",{attrs:{src:"/statics/social/whatsapp.svg",alt:""}})])])])]],2)],1)},staticRenderFns:[]}})],1),a("div",{attrs:{id:"copy-btn flex"}},[a("q-btn",{staticClass:"copy-link-button",attrs:{color:"true"===t.$store.state.settings.lightMode?"black":"white","text-color":"true"===t.$store.state.settings.lightMode?"white":"black",flat:"",label:"Copy address"},on:{click:function(e){return t.copyToClipboard(t.exchangeAddress,"Link")}}},[a("img",{attrs:{src:"/statics/social/copy.svg",alt:""}})]),t._e()],1)])])],1)],1)],1)},s=[],n=a("967e"),r=a.n(n),i=(a("96cf"),a("fa84")),o=a.n(i),c=(a("7f7f"),a("e298")),l=a("23bd"),d=a("b2e5"),u=a.n(d),p=a("2b0e"),b=a("c7d9");p["default"].component(u.a.name,u.a);var m=a("5299");p["default"].use(m);var q={mixins:[b["a"]],components:{ProfileHeader:l["a"],Wallets:c["a"]},data:function data(){return{osName:"",configData:!1,existingCruxID:null,currentToken:{label:"",value:"",image:"",type:""},currentAccount:null,to:"",params:null,tableData:[],vertoID:this.$store.state.currentwallet.config.cruxID,goBack:"/verto/dashboard",fetchCurrentWalletFromState:!0,exchangeAddress:"",memo:"",options:[],minimizedModal:!1,showShareWrapper:!1,message:""}},watch:{},computed:{wallet:function wallet(){return this.$store.state.currentwallet.wallet||void 0}},beforeDestroy:function beforeDestroy(){window.removeEventListener("resize",this.getWindowWidth)},created:function created(){return o()(r.a.mark((function _callee(){return r.a.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),_callee)})))()},mounted:function mounted(){var t=this;return o()(r.a.mark((function _callee2(){return r.a.wrap((function _callee2$(e){while(1)switch(e.prev=e.next){case 0:t.$set(t,"currentToken",{label:t.$route.params.name,value:t.$route.params.value,image:t.$route.params.icon,type:t.$route.params.tokenID,chainID:t.$route.params.chainID}),t.currentAccount=t.currentToken,t.exchangeAddress="eos"!==t.currentAccount.chainID?t.currentAccount.value:t.currentAccount.label;case 3:case"end":return e.stop()}}),_callee2)})))()},updated:function updated(){},methods:{getWindowWidth:function getWindowWidth(){this.screenSize=document.querySelector("#q-app").offsetWidth},toggleShare:function toggleShare(){this.showShareWrapper=!this.showShareWrapper},copyToClipboard:function copyToClipboard(t,e){this.$clipboardWrite(t),this.$q.notify({message:e?e+" Copied":"Key Copied",timeout:2e3,icon:"check",textColor:"white",type:"warning",position:"top"})},goBackPage:function goBackPage(){this.$router.push(this.$route.params.return?this.$route.params.return.path:{name:"wallets",params:{openDialog:!0}})}}},h=q,g=(a("4e85"),a("2877")),v=Object(g["a"])(h,render,s,!1,null,"642dbe96",null);e["default"]=v.exports},"4e85":function(t,e,a){"use strict";var s=a("a59b"),n=a.n(s);n.a},a59b:function(t,e,a){}}]);