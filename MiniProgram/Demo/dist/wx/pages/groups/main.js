require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{"5fEd":function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r("5nAL"),e=r.n(a),o=r("6p5+");e.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new e.a(o.a).$mount()},"6p5+":function(t,n,r){"use strict";var a=r("PK/g"),e=r("vnFN");var o=function(t){r("xvum")},s=r("ybqe")(a.a,e.a,o,null,null);n.a=s.exports},"PK/g":function(t,n,r){"use strict";var a=r("Dd8w"),e=r.n(a),o=r("NYxO");n.a={data:function(){return{}},computed:e()({},Object(o.c)({groupList:function(t){return t.group.groupList}})),methods:{startConversation:function(t){this.$store.dispatch("checkoutConversation","GROUP"+t.groupID)}}}},vnFN:function(t,n,r){"use strict";var a={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container"},t._l(t.groupList,function(n,a){return r("div",{key:n.groupID,staticClass:"group",attrs:{eventid:"0_"+a},on:{click:function(r){t.startConversation(n)}}},[r("div",{staticClass:"avatar"},[r("i-avatar",{attrs:{"i-class":"img",src:n.avatar,mpcomid:"0_"+a}})],1),t._v(" "),r("div",{staticClass:"name"},[t._v("\n      "+t._s(n.name)+"\n    ")])])}))},staticRenderFns:[]};n.a=a},xvum:function(t,n){}},["5fEd"]);