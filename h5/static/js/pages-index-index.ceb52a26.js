(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"03be":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imageURL:"static/backgung.png",phonedimension:"../../static/phonedimension.png",Airond:"../../static/Airond.png"}},onLoad:function(){},methods:{}};function a(t){var n=navigator.userAgent,i=!!/MicroMessenger/i.test(n);i&&(t.onclick=function(t){window.event?window.event.returnValue=!1:t.preventDefault(),document.getElementById("JweixinTip").style.display="block"},document.getElementById("JweixinTip").onclick=function(){this.style.display="none"})}n.default=e;var o=document.getElementById("JdownApp");a(o);var s=document.getElementById("JdownApp2");a(s)},"096b":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"content",style:{backgroundImage:"url("+t.imageURL+")"}},[i("v-uni-image",{staticClass:"ipone_img",attrs:{id:"JdownApp",src:t.phonedimension}}),i("v-uni-image",{staticClass:"Android_img btn-warn",attrs:{id:"JdownApp2",src:t.Airond}}),i("v-uni-view",{staticClass:"wxtip",attrs:{id:"JweixinTip"}},[i("v-uni-view",{staticClass:"wxtip-icon"}),i("v-uni-view",{staticClass:"wxtip-txt"},[t._v("点击右上角"),i("br"),t._v("选择在浏览器中打开")])],1)],1)},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},"1b2b":function(t,n,i){"use strict";var e=i("57e5"),a=i.n(e);a.a},"4fed":function(t,n,i){"use strict";i.r(n);var e=i("03be"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},5769:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".content[data-v-2697a848]{width:100%;height:94.5vh;background-size:100% 100%;position:absolute}.ipone_img[data-v-2697a848]{width:31.5%;height:17vh;position:relative;top:31vh;left:30.3%}.Android_img[data-v-2697a848]{width:31.5%;height:17.5vh;top:64vh;left:-1%}.wxtip[data-v-2697a848]{background:rgba(0,0,0,.8);text-align:center;position:fixed;left:0;top:0;width:100%;height:100%;z-index:998;display:none}.wxtip-icon[data-v-2697a848]{width:52px;height:67px;display:block;position:absolute;right:20px;top:20px}.wxtip-txt[data-v-2697a848]{margin-top:107px;color:#fff;font-size:16px;line-height:1.5}",""])},"57e5":function(t,n,i){var e=i("5769");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("753b1cda",e,!0,{sourceMap:!1,shadowMode:!1})},c5b4:function(t,n,i){"use strict";i.r(n);var e=i("096b"),a=i("4fed");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("1b2b");var s=i("2877"),d=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"2697a848",null);n["default"]=d.exports}}]);