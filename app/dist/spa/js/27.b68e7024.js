(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{3600:function(e,t,a){},"433a":function(e,t,a){"use strict";var s=a("3600"),r=a.n(s);r.a},"73e1":function(e,t,a){"use strict";a.r(t);var render=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"column import-private-key",class:{"dark-theme":"true"===e.$store.state.settings.lightMode,"text-black bg-grey-12":"false"===e.$store.state.settings.lightMode,"desktop-marg":e.screenSize>1024,"mobile-pad":e.screenSize<1024}},[e.$q.platform.is.mobile?a("q-header",[a("q-toolbar",{class:"true"===e.$store.state.settings.lightMode?"text-white mobile-card":"bg-white text-black"},[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"arrow_back_ios"},on:{click:function(t){return e.$router.push({name:"accounts",params:{accounts:"receive",tab:"import"}})}}}),a("q-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}]},[e._v("\n         "+e._s((e.watch?"Watch ":"Import ")+e.getChainLabel(e.currentChain))+" wallet\n      ")]),a("q-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}]},[e._v("\n        Save Private Key\n      ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(t){return e.$router.push({name:"accounts",params:{accounts:"receive",tab:"import"}})}}})],1)],1):e._e(),a("div",{class:{"dark-theme":"true"===e.$store.state.settings.lightMode,"space-top":e.$q.platform.is.mobile},staticStyle:{height:"100vh"}},[a("div",{staticClass:"desktop-version full-height"},[a("div",{staticClass:"row full-height"},[e._e(),a("div",{staticClass:"col col-md-12"},[a("div",{staticClass:"desktop-card-style apps-section q-mb-sm",class:{"dark-theme":"true"===e.$store.state.settings.lightMode}},[a("div",{staticClass:"chain-tools-wrapper"},[e.$q.platform.is.mobile?e._e():a("div",{staticClass:"standard-content"},[a("h2",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}],staticClass:"standard-content--title flex"},[e._v("\n                  "+e._s((e.watch?"Watch ":"Import ")+e.getChainLabel(e.currentChain))+" wallet\n                ")]),a("h2",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}],staticClass:"standard-content--title flex"},[e._v("\n                  Save Private Key\n                ")])]),a("div",{staticClass:"q-ml-lg"},[a("div",{staticClass:"text-body1 q-pb-md"},[e._v("\n                  Click on a button to switch mode"),a("br"),e._v("\n                  - Watch mode requires only your "+e._s("EOS"==e.currentChain?"account name":"public key")),a("br"),e._v("\n                  - You can send and sign transactions only with an imported\n                  account"),a("br")]),a("q-btn",{staticClass:"q-ml-md q-mr-md",attrs:{rounded:"",color:e.watch?"white":"black","text-color":e.watch?"black":"white",label:"Import"},on:{click:function(t){"ETH"==e.currentChain?e.$router.push("/verto/import-private-key/eth"):e.watch=!1}}}),a("q-btn",{attrs:{color:e.watch?"black":"white","text-color":e.watch?"white":"black",rounded:"",label:"Watch"},on:{click:function(t){e.watch=!0}}})],1),a("div",{staticClass:"chain-tools-wrapper--list open q-mt-sm"},[a("div",{staticClass:"list-wrapper"},[a("div",{staticClass:"list-wrapper--chain__eos-to-vtx-convertor"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}]},[a("q-stepper",{ref:"stepper",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("q-step",{attrs:{title:e.watch?"EOS"==e.currentChain?"Account name":"Public key":"Private Key",name:1,prefix:"1",order:"10",done:e.step>1}},[a("div",{staticClass:"text-black"},[a("div",{staticClass:"text-h4 --subtitle"},[a("ul",[a("li",[a("span",[!e.chainKeyNext||e.chainKeyInvalid?a("span",[a("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1):a("span",[a("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                    A valid "+e._s(e.getChainLabel(e.currentChain))+"\n                                    "+e._s(e.watch?"EOS"==e.currentChain?"Account name":"Public key":"private Key")+"\n                                  ")])])])]),a("span",[e.watch?a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:"Enter "+("EOS"==e.currentChain?"Account name":"Public key")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFromPriv(t)},input:function(t){e.watchStatus=null,e.addWallet.walletName="EOS"==e.currentChain?e.addWallet.address:e.getChainLabel(e.currentChain)+"..."+e.addWallet.address.slice(-5)}},model:{value:e.addWallet.address,callback:function(t){e.$set(e.addWallet,"address",t)},expression:"addWallet.address"}}):a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:e.$t("EosAccount.enter_private_key")},on:{input:function(t){return e.getPubKeyFromPrivate()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFromPriv(t)}},model:{value:e.addWallet.addressPriv,callback:function(t){e.$set(e.addWallet,"addressPriv",t)},expression:"addWallet.addressPriv"}}),e.terraStationPKDetected?a("q-input",{staticClass:"q-mt-md",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,type:"password",debounce:"500",rounded:"",outlined:"",color:"purple",label:"Enter terra station password"},on:{input:function(t){return e.decryptTerraStationConfig()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.decryptTerraStationConfig(t)}},model:{value:e.terraStationPassword,callback:function(t){e.terraStationPassword=t},expression:"terraStationPassword"}}):e._e(),e.watch&&e.addWallet.address&&e.addWallet.address.length&&"EOS"!==e.currentChain?a("q-input",{staticClass:"q-mt-md",staticStyle:{"max-width":"300px"},attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:"Wallet name"},model:{value:e.addWallet.walletName,callback:function(t){e.$set(e.addWallet,"walletName",t)},expression:"addWallet.walletName"}}):e._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.chainKeyInvalid&&!e.watch&&!e.terraStationPKDetected,expression:"chainKeyInvalid && !watch && !terraStationPKDetected"}],staticClass:"text-h6 text-red"},[e._v("\n                              Key invalid\n                            ")]),"added"==e.watchStatus?a("div",{staticClass:"text-green"},[e._v("\n                              Account succesfully added\n                            ")]):a("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.chainKeyNext&&!e.chainKeyInvalid||e.watch&&e.addWallet.address&&e.addWallet.address.length,expression:"\n                                (chainKeyNext && !chainKeyInvalid) ||\n                                (watch &&\n                                  addWallet.address &&\n                                  addWallet.address.length)\n                              "}],staticClass:"flex"},[a("q-btn",{attrs:{disable:!e.addWallet.walletName.trim().length&&e.watch,color:"deep-purple-14",rounded:"",label:e.watch?"Add account":e.$t("next")},on:{click:function(t){return e.nextFromPriv()}}})],1)],1)]),e.watch?e._e():a("q-step",{attrs:{title:"Current Wallet Name",name:2,prefix:"2",order:"30",done:e.step>2}},[a("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),a("div",{staticClass:"text-black"},[a("div",{staticClass:"text-h4 --subtitle"},[a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:"Enter wallet name"},model:{value:e.addWallet.walletName,callback:function(t){e.$set(e.addWallet,"walletName",t)},expression:"addWallet.walletName"}}),a("span",{staticClass:"text-body2"},[e._v("At least 4 characters")])],1),a("q-stepper-navigation",{staticClass:"flex justify-end"},[a("q-btn",{staticClass:"--next-btn",attrs:{disable:e.addWallet.walletName.length<4,color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.$refs.stepper.next()}}})],1)],1)],1),e.watch?e._e():a("q-step",{attrs:{title:"Verto Password",name:3,prefix:"3",order:"40",done:e.step>3}},[a("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),a("div",{staticClass:"text-black"},[a("div",[a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:e.$t("CreateVertoPassword.vertopassword"),type:e.isPwd?"password":"text"},on:{input:e.showSubmitKey,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addEosAddress(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.addWallet.vertoPassword,callback:function(t){e.$set(e.addWallet,"vertoPassword",t)},expression:"addWallet.vertoPassword"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.incorrectPassword,expression:"incorrectPassword"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                              "+e._s(e.$t("Welcome.incorrect"))+"\n                            ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.walletAddressUsed,expression:"walletAddressUsed"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                              "+e._s(e.$t("DisplayKey.address_is_used"))+"\n                            ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.unknownError,expression:"unknownError"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                              Unknown Error\n                            ")]),a("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.submitKey,expression:"submitKey"}],staticClass:"flex justify-end"},[a("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.addChainAddress()}}})],1)],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}]},[a("q-stepper",{ref:"stepperFilePassword",attrs:{"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step2,callback:function(t){e.step2=t},expression:"step2"}},[a("q-step",{attrs:{title:"File Password",name:1,prefix:"1",done:e.step2>1}},[a("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){e.showMainSteps=!0}}}),a("div",{staticClass:"text-black"},[a("div",{staticClass:"text-h4 --subtitle"},[a("ul",[a("li",[a("span",[e._v("Recommended to be different than your\n                                    wallet password")])]),a("li",[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.filePasswordApproved,expression:"!filePasswordApproved"}]},[a("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1),a("span",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}]},[a("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                  Minimum 8 Digits\n                                ")])])]),a("span",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotoFileConfirmPassword()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.addWallet.filePassword,callback:function(t){e.$set(e.addWallet,"filePassword",t)},expression:"addWallet.filePassword"}})],1),a("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}],staticClass:"flex justify-end"},[a("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotoFileConfirmPassword()}}})],1)],1)],1),a("q-step",{attrs:{title:"Confirm Password",name:2,prefix:"2",done:e.step2>2}},[a("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),a("div",{staticClass:"text-black"},[a("span",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Confirm Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordConfirmCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotToSaveFileInWallet()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.addWallet.filePasswordConfirm,callback:function(t){e.$set(e.addWallet,"filePasswordConfirm",t)},expression:"addWallet.filePasswordConfirm"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"q-pa-sm",on:{click:function(t){return e.gotToSaveFileInWallet()}}},[a("q-icon",{attrs:{name:"navigate_next",size:"3.2rem",color:"green"}},[a("q-tooltip",[e._v(e._s(e.$t("SaveYourKeys.create")))])],1)],1),a("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"flex justify-end"},[a("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotToSaveFileInWallet()}}})],1)],1)],1),a("q-step",{attrs:{title:"Save In Wallet",name:3,prefix:"3",done:e.step2>3}},[a("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),a("div",{staticClass:"text-black"},[a("div",{staticClass:"text-h4 --subtitle"},[a("ul",[a("li",[a("span",[e._v("Encrypt the private key in the\n                                    wallet?")])])])]),a("q-stepper-navigation",{staticClass:"flex justify-end"},[a("q-btn",{staticClass:"--next-btn",attrs:{outline:"",color:"deep-purple-14 q-mr-md",rounded:"",label:"Yes"},on:{click:function(t){return e.gotToVertoPassword(!0)}}}),a("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:"No"},on:{click:function(t){return e.gotToVertoPassword(!1)}}})],1)],1)],1)],1)],1)]),a("br"),a("br"),a("br")])])])])])])]),e._e()],1)],1)},s=[],r=a("77a4"),n=r["a"],i=(a("433a"),a("2877")),o=Object(i["a"])(n,render,s,!1,null,"4efe5aff",null);t["default"]=o.exports},"77a4":function(e,t,a){"use strict";(function(e){var s=a("967e"),r=a.n(s),n=(a("96cf"),a("fa84")),i=a.n(n),o=(a("7514"),a("7f7f"),a("6b54"),a("06db"),a("e298")),l=a("23bd"),d=a("c7d9"),c=a("0a51"),u=a("233a"),p=a("8fee"),h=a("b8b0"),w=a("99e5"),v=new w("https://mainnet.infura.io/v3/0dd5e7c7cbd14603a5c20124a76afe63");t["a"]={mixins:[d["a"]],components:{ProfileHeader:l["a"],Wallets:o["a"]},data:function data(){return{screenSize:0,terraStationPKDetected:!1,terraStationPassword:null,step:1,watchStatus:null,watch:!1,step2:1,currentChain:null,isPwd:!0,contractable:!0,showMainSteps:!0,filePasswordApproved:!1,filePasswordConfirmApproved:!1,chainKeyNext:!1,submitKey:!1,chainKeyInvalid:!1,incorrectPassword:!1,unknownError:!1,walletAddressUsed:!1,enableImport:!0,confirmPassword:!1,accountNames:[],wrongPrivateKey:!1,accountIsNotValid:!0,enteredPrivateKey:"",showSaveKey:!1,addWallet:{walletName:"",address:"",addressPriv:"",privateKey:null,vertoPassword:"",vertoPasswordError:"",filePassword:"",filePasswordConfirm:"",storeInWallet:!1},accDialog:this.$q.platform.is.mobile||this.$isbex}},created:function created(){this.getWindowWidth(),this.watch=this.$route.params.watch,window.addEventListener("resize",this.getWindowWidth),this.currentChain=this.$route.params.chain.toUpperCase(),this.currentChain=this.$route.params.chain.toUpperCase(),"ETH"===this.currentChain&&(this.watch=!0)},methods:{decryptTerraStationConfig:function decryptTerraStationConfig(){var t=p["a"].getTerraWrapper(),a=null;try{var s=JSON.parse(e.from(this.addWallet.addressPriv.trim(),"base64").toString("utf8"));s.encrypted_key&&(a=t.decrypt(s.encrypted_key,this.terraStationPassword),a.toString().length&&(this.addWallet.privateKey=a,this.chainKeyNext=!0,this.chainKeyInvalid=!1,this.addWallet.walletName=s.name))}catch(r){}return a},getWindowWidth:function getWindowWidth(){this.screenSize=document.querySelector("#q-app").offsetWidth},createKeys:function createKeys(){this.$router.push("create-keys")},filePasswordCheck:function filePasswordCheck(){this.filePasswordApproved=!1,this.addWallet.filePassword.length>7&&(this.filePasswordApproved=!0)},filePasswordConfirmCheck:function filePasswordConfirmCheck(){this.filePasswordConfirmApproved=!1,this.addWallet.filePassword===this.addWallet.filePasswordConfirm&&(this.filePasswordConfirmApproved=!0)},gotoFileConfirmPassword:function gotoFileConfirmPassword(){this.filePasswordApproved&&this.$refs.stepperFilePassword.next()},gotToSaveFileInWallet:function gotToSaveFileInWallet(){this.filePasswordConfirmApproved&&this.$refs.stepperFilePassword.next()},gotToVertoPassword:function gotToVertoPassword(e){this.addWallet.storeInWallet=e,this.showMainSteps=!0,this.$refs.stepperFilePassword.goTo(1),this.$refs.stepper.next()},createAccount:function createAccount(){this.$router.push("create-eos-account")},nextFromName:function nextFromName(){this.addWallet.walletNameEmpty=!1,this.confirmPassword=!0},addWatchAccount:function addWatchAccount(){var e=this,t=localStorage.getItem("watchAccounts"),a={type:this.currentChain.toLowerCase(),key:this.addWallet.address,name:this.addWallet.walletName,watch:!0};if(this.watchStatus=null,t){t=JSON.parse(t);var s=t.find((function(t){return t.key.toLowerCase()===e.addWallet.address.toLowerCase()}));s?this.$q.notify({message:"Key already exist",timeout:2e3,icon:"check",textColor:"white",type:"negtive",position:"center"}):(t.push(a),this.watchStatus="added",setTimeout((function(){Object(c["a"])("init")}),100))}else t=[a],this.watchStatus="added",setTimeout((function(){Object(c["a"])("init")}),100);localStorage.setItem("watchAccounts",JSON.stringify(t))},nextFromPriv:function nextFromPriv(){var e=this;return i()(r.a.mark((function _callee(){return r.a.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:if(!e.watch){t.next=2;break}return t.abrupt("return",e.addWatchAccount());case 2:if(e.chainKeyNext){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.getPubKeyFromPrivate();case 6:e.addWallet.address=t.sent,e.addWallet.address&&e.$refs.stepper.next();case 8:case"end":return t.stop()}}),_callee)})))()},getPubKeyFromPrivate:function getPubKeyFromPrivate(){var t=this;return i()(r.a.mark((function _callee5(){var s,n,o,l;return r.a.wrap((function _callee5$(d){while(1)switch(d.prev=d.next){case 0:if(t.chainKeyNext=!1,t.chainKeyInvalid=!1,s=!1,n=t,o={btc:function btc(){return i()(r.a.mark((function _callee2(){var e,t,i,o;return r.a.wrap((function _callee2$(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e=a("59da"),t=e.ECPair.fromWIF(n.addWallet.addressPriv.trim()),s=t.publicKey.toString("hex"),i=a("41d0").default,o=new i(t.privateKey),r.next=8,o.address("BTC");case 8:if(s=r.sent,!s||!s.toString().length){r.next=11;break}return r.abrupt("return",s);case 11:r.next=16;break;case 13:return r.prev=13,r.t0=r["catch"](0),r.abrupt("return",s);case 16:case"end":return r.stop()}}),_callee2,null,[[0,13]])})))()},eth:function eth(){return i()(r.a.mark((function _callee3(){var e;return r.a.wrap((function _callee3$(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.eth.accounts.privateKeyToAccount(n.addWallet.addressPriv.trim());case 3:return e=t.sent,e&&e.address&&(s=e.address),t.abrupt("return",s);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",s);case 11:case"end":return t.stop()}}),_callee3,null,[[0,8]])})))()},terra:function terra(){return i()(r.a.mark((function _callee4(){var t,a,i;return r.a.wrap((function _callee4$(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=n.addWallet.addressPriv.trim(),n.terraStationPassword&&n.terraStationPassword.length&&(t=n.decryptTerraStationConfig()),a=new h["RawKey"](e.from(t,"hex")),a&&a.accAddress&&(s=a.accAddress),r.abrupt("return",s);case 8:r.prev=8,r.t0=r["catch"](0);try{i=JSON.parse(e.from(n.addWallet.addressPriv.trim(),"base64").toString("utf8")),i.encrypted_key&&(n.terraStationPKDetected=!0)}catch(o){}return r.abrupt("return",s);case 13:case"end":return r.stop()}}),_callee4,null,[[0,8]])})))()}},l=null,!u["a"].isEvm(t.currentChain.toLowerCase())){d.next=12;break}return d.next=9,o["eth"]();case 9:l=d.sent,d.next=16;break;case 12:if(!o[t.currentChain.toLowerCase()]){d.next=16;break}return d.next=15,o[t.currentChain.toLowerCase()]();case 15:l=d.sent;case 16:return l?t.chainKeyNext=!0:t.chainKeyInvalid=!0,d.abrupt("return",l);case 18:case"end":return d.stop()}}),_callee5)})))()},showSubmitKey:function showSubmitKey(){this.resetErrors(),this.addWallet.vertoPassword.length>2?this.submitKey=!0:this.submitKey=!1},resetErrors:function resetErrors(){this.incorrectPassword=!1,this.walletAddressUsed=!1,this.unknownError=!1},addChainAddress:function(){var e=i()(r.a.mark((function _callee6(){var e,t,a,s=this;return r.a.wrap((function _callee6$(r){while(1)switch(r.prev=r.next){case 0:if(!this.submitKey){r.next=9;break}return this.resetErrors(),e=this.currentChain.toLowerCase(),u["a"].evms.find((function(e){return e.chain===s.currentChain.toLowerCase()}))&&(e="eth"),t=this.addWallet.privateKey,r.next=7,this.$configManager.saveWalletAndKey(this.addWallet.walletName,this.addWallet.vertoPassword,null,this.addWallet.address,t||this.addWallet.addressPriv,e,"import");case 7:a=r.sent,a&&a.success?this.$router.push("/verto/dashboard/"+this.addWallet.walletName):(this.submitKey=!1,"bad_password"===a.message?this.incorrectPassword=!0:"address_already_used"===a.message?this.walletAddressUsed=!0:this.unknownError=!0);case 9:case"end":return r.stop()}}),_callee6,this)})));function addChainAddress(){return e.apply(this,arguments)}return addChainAddress}(),cancelAddVertoAddress:function cancelAddVertoAddress(){this.addWallet.walletNameEmpty=!1,this.addWallet.addressEmpty=!1,this.addWallet.vertoPasswordEmpty=!1,this.addWallet.walletName="",this.addWallet.address="",this.addWallet.addressPriv="",this.addWallet.vertoPassword="",this.addingWallet=!1},cancel:function cancel(){this.$router.push("/verto/dashboard")}}}}).call(this,a("1c35").Buffer)}}]);