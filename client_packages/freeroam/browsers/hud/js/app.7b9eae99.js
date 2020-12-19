(function(t){function e(e){for(var a,i,s=e[0],r=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e8e":function(t,e,n){"use strict";n("60d9")},1226:function(t,e,n){"use strict";n("aeae")},"3dfd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("VehicleManager")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"vehicle-manager"===t.activeModal?n("div",[n("section",{staticClass:"main"},[n("h1",{staticClass:"header"},[t._v(" Транспорт ")]),n("div",[t._m(0),n("input",{attrs:{type:"hidden"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirmChanges(e)}}}),n("div",{staticClass:"vehicle-manager-functions"},[n("VehicleFunctions",{attrs:{vehicleFunctionsData:t.modalData,focusFunctionId:t.focusFunctionId}})],1)]),n("p",{attrs:{id:"vehicle-manager-close"},on:{click:t.closeModal}},[t._v(" ЗАКРЫТЬ ")])])]):t._e()},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vehicle-manager-text"},[n("p",{staticClass:"set-audio",staticStyle:{color:"#5e93c0"}},[t._v("Нажмите ENTER чтобы применить 6/6 ")])])}],s=(n("c740"),n("45fc"),n("5530")),r=n("2909"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.vehicleFunctionsData,(function(e){return n("div",{key:e.id,attrs:{id:"vehicle-function"}},[e.status?n("p",{staticClass:"func",class:t.focusFunctionId===e.id?"focus-function":"",attrs:{id:e.htmlID}},[t._v(" "+t._s(e.name)),n("span",{staticClass:"turn-status turned-on"},[t._v("ВКЛ")])]):n("p",{staticClass:"func",class:t.focusFunctionId===e.id?"focus-function":"",attrs:{id:e.htmlID}},[t._v(t._s(e.name)),n("span",{staticClass:"turn-status turned-off"},[t._v("ВЫКЛ")])])])})),0)},l=[],d=(n("a9e3"),{props:{vehicleFunctionsData:{type:Array,required:!0},focusFunctionId:{type:Number,required:!0}}}),f=d,h=(n("0e8e"),n("2877")),p=Object(h["a"])(f,u,l,!1,null,null,null),v=p.exports,g={components:{VehicleFunctions:v},created:function(){var t=this;document.addEventListener("keydown",(function(e){var n=e.key;return t.keyHandler(n)}))},computed:{activeModal:function(){return this.$store.getters.getActiveModal},modalData:function(){return this.$store.getters.getActiveModalData},checkForAChanges:function(){var t=this;return this.sourceModalData.some((function(e,n){return t.modalData[n].status!==e.status}))}},data:function(){return{focusFunctionId:0,sourceModalData:Object(r["a"])(this.$store.getters.getActiveModalData)}},methods:{closeModal:function(){this.$store.commit("disableModals")},keyHandler:function(t){switch(t){case"Enter":this.confirmChanges();break;case"ArrowLeft":case"ArrowRight":this.focusFunctionId&&this.changeTurnStatus();break;case"ArrowDown":if(!this.focusFunctionId)return this.focusFunctionId=1;this.focusFunctionId<this.modalData.length&&this.changeFocusFunctionId(this.focusFunctionId+1);break;case"ArrowUp":this.focusFunctionId>0&&this.changeFocusFunctionId(this.focusFunctionId-1);break}},changeTurnStatus:function(){var t=this,e=Object(r["a"])(this.modalData),n=e.findIndex((function(e){return e.id===t.focusFunctionId})),a=Object(s["a"])({},e[n]);a&&(a.status=!a.status,e[n]=a,this.$store.commit("setActiveModalData",JSON.stringify(e)))},changeFocusFunctionId:function(t){this.focusFunctionId=t},confirmChanges:function(){this.checkForAChanges&&(this.focusFunctionId=0,mp.trigger("vehicleManager_CEFChangesHandler",JSON.stringify(this.modalData)),this.closeModal())}}},m=g,b=(n("1226"),Object(h["a"])(m,c,i,!1,null,"6c6c1eb6",null)),y=b.exports,M={name:"App",components:{VehicleManager:y}},F=M,_=Object(h["a"])(F,a,o,!1,null,null,null);e["a"]=_.exports},4360:function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62"),c={actions:{},state:{activeModal:null,activeModalData:null,hudStatus:2},getters:{getActiveModal:function(t){return t.activeModal},getActiveModalData:function(t){return t.activeModalData}},mutations:{setHudStatus:function(t,e){t.hudStatus=e},setActiveModal:function(t,e){t.activeModalData=e},setActiveModalData:function(t,e){t.activeModalData=JSON.parse(e)},disableModals:function(t){t.modalData=null,t.activeModal=null,mp.trigger("disableModals")}}};a["a"].use(o["a"]);var i=new o["a"].Store({modules:{hud:c}});e["a"]=i},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),a=n("4360"),o=n("3dfd");e["a"].config.productionTip=!1;var c=new e["a"]({render:function(t){return t(o["a"])},store:a["a"]}).$mount("#app");t.gui={modals:[]},t.app=c,t.appData=c.$store,t.router=c.$router}.call(this,n("c8ba"))},"60d9":function(t,e,n){},aeae:function(t,e,n){}});
//# sourceMappingURL=app.7b9eae99.js.map