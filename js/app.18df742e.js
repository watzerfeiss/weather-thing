(function(t){function e(e){for(var n,i,r=e[0],s=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==c[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0789":function(t,e,a){"use strict";a("77bd")},"0ba1":function(t,e,a){},1029:function(t,e,a){},"1c9d":function(t,e,a){},"2d9d":function(t,e,a){"use strict";a("7ace")},"2dd1":function(t,e,a){},3255:function(t,e,a){"use strict";a("3602")},3602:function(t,e,a){},"3dde":function(t,e,a){"use strict";a("e209")},"4aea":function(t,e,a){},"4eff":function(t,e,a){"use strict";a("1029")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{staticClass:"app__panel app__main-panel"},[a("Toolbar",{staticClass:"app__toolbar"}),!t.$mq.collapseLists||t.isDisplayingSearch?a("LocationSearch",{staticClass:"app__location-search"}):t._e(),t.$mq.collapseLists&&t.isDisplayingSearch?t._e():a("TrackedLocationsList",{staticClass:"app__tracked-list"}),t.$mq.dropMap?t._e():a("WorldMap",{staticClass:"app__map"})],1),a("transition",[t.viewedLocation?a("LocationDetails",{key:t.viewedLocation.woeid,staticClass:"app__panel app__location-details",attrs:{location:t.viewedLocation}}):t._e()],1),a("AppFooter",{staticClass:"app__panel app__footer"})],1)},o=[],i=a("5530"),r=a("2f62"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[t.$mq.collapseLists?a("ListSwitch"):a("SearchBar",{staticClass:"toolbar__search"}),a("BaseToggle",{attrs:{options:t.tempScaleOptions,selectedOption:t.tempScale},on:{change:function(e){return t.setTempScale({tempScale:e})}}})],1)},l=[],u={SEARCH:"search",TRACKED:"tracked"},d={C:"c",F:"f"},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toggle"},t._l(t.options,(function(e){return a("span",{key:e.value,staticClass:"toggle__option"},[a("input",{attrs:{type:"radio",id:t.inputName+"-"+e.value,name:t.inputName},domProps:{value:e.value,checked:e.value===t.selectedOption},on:{change:function(a){return t.handleChange(a.target.checked,e.value)}}}),a("label",{attrs:{for:t.inputName+"-"+e.value}},[t._v(" "+t._s(e.label)+" ")])])})),0)},f=[],h=a("e1bd"),m={model:{prop:"selectedOption",event:"change"},props:{selectedOption:{type:String},options:{type:Array,validator:function(t){return t.every((function(t){return t.value&&t.label}))}}},data:function(){return{inputName:Object(h["a"])(5)}},methods:{handleChange:function(t,e){t&&this.$emit("change",e)}}},_=m,b=(a("3255"),a("2877")),v=Object(b["a"])(_,p,f,!1,null,"c27fb57a",null),g=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseToggle",{attrs:{options:t.listOptions,selectedOption:t.displayedList},on:{change:function(e){return t.switchDisplayedList({displayedList:e})}}})},O=[],L={components:{BaseToggle:g},computed:Object(i["a"])(Object(i["a"])({},Object(r["e"])({displayedList:function(t){return t.displayedList}})),{},{listOptions:function(){return[{value:u.SEARCH,label:"Search"},{value:u.TRACKED,label:"Tracked locations"}]}}),methods:Object(i["a"])({},Object(r["d"])(["switchDisplayedList"]))},T=L,w=Object(b["a"])(T,y,O,!1,null,"524d4822",null),k=w.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("input",{staticClass:"search__field",attrs:{type:"search"},domProps:{value:t.searchFieldText},on:{input:function(e){return t.onSearchTermChanged(e.target.value)}}}),a("SearchIcon",{staticClass:"search__icon",attrs:{size:"1x"}}),a("SearchStatusIndicator",{staticClass:"search__spinner",attrs:{isLoading:t.isFetching,isTyping:t.isTyping}})],1)},j=[],C=(a("ac1f"),a("841c"),a("99af"),a("b680"),function(t,e){var a=null;return function(){for(var n=this,c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];a&&clearTimeout(a),a=setTimeout((function(){return t.call.apply(t,[n].concat(o))}),e)}}),x=function(t){var e=t.latt,a=t.long,n=e>0?"N":"S",c=a>0?"E":"W",o=Math.abs(e).toFixed(2),i=Math.abs(a).toFixed(2);return"".concat(o," ").concat(n,", ").concat(i," ").concat(c)},D=function(t){return t/5*9+32},E=a("0a35"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"status"},[t.isTyping?a("Edit2Icon",{staticClass:"status__icon--typing"}):t.isLoading?a("RefreshCwIcon",{staticClass:"status__icon--loading"}):t._e()],1)},M=[],R={components:{Edit2Icon:E["c"],RefreshCwIcon:E["e"]},props:{isTyping:Boolean,isLoading:Boolean}},P=R,$=(a("2d9d"),Object(b["a"])(P,I,M,!1,null,"687a4a0c",null)),A=$.exports,B=600,F={components:{SearchIcon:E["f"],SearchStatusIndicator:A},data:function(){return{searchFieldText:"",isTyping:!1}},computed:Object(i["a"])({},Object(r["e"])({isFetching:function(t){return t.search.isLoading},distanceSearchOrigin:function(t){return t.search.distanceSearchOrigin}})),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["d"])(["cancelSearch"])),Object(r["b"])(["search","distanceSearch"])),{},{requestSearch:C((function(t){this.isTyping=!1,this.search({term:t})}),B),onSearchTermChanged:function(t){this.searchFieldText=t,t?(this.isTyping=!0,this.cancelSearch(),this.requestSearch(t)):this.isTyping=!1}}),watch:{distanceSearchOrigin:function(t){this.searchFieldText=x(t)}}},q=F,N=(a("3dde"),Object(b["a"])(q,S,j,!1,null,"1667d9fe",null)),W=N.exports,z={components:{SearchBar:W,ListSwitch:k,BaseToggle:g},computed:Object(i["a"])(Object(i["a"])({},Object(r["e"])({tempScale:function(t){return t.tempScale}})),{},{tempScaleOptions:function(){return[{value:d.C,label:"°C"},{value:d.F,label:"°F"}]}}),methods:Object(i["a"])({},Object(r["d"])(["setTempScale"]))},J=z,U=(a("5cbb"),Object(b["a"])(J,s,l,!1,null,"6ffa8893",null)),H=U.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-search"},[t.$mq.collapseLists?a("SearchBar",{staticClass:"location-search__bar"}):t._e(),a("ul",{staticClass:"location-search__list"},t._l(this.results,(function(t){return a("li",{key:t.woeid,staticClass:"location-search__item"},[a("LocationSearchItem",{attrs:{searchResult:t}})],1)})),0)],1)},Z=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-result",attrs:{draggable:""},on:{dragstart:t.onDragged}},[a("h3",{staticClass:"search-result__title"},[t._v(t._s(t.searchResult.title))]),a("span",{staticClass:"search-result__position"},[t._v(t._s(t.searchResult.distance?Math.floor(t.searchResult.distance/1e3)+" km":this.coordinateString))]),a("BaseButton",{staticClass:"search-result__btn-add",attrs:{value:"Add to tracked locations"},on:{click:function(e){return t.trackLocation({location:t.searchResult})}}},[a("PlusIcon")],1)],1)},X=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",t._g({staticClass:"btn",attrs:{type:t.type,value:t.value}},t.$listeners),[t._t("default")],2)},Q=[],Y=(a("caad"),{props:{value:String,type:{type:String,default:"button",validator:function(t){return["button","submit","reset"].includes(t)}}}}),tt=Y,et=(a("a13a"),Object(b["a"])(tt,G,Q,!1,null,null,null)),at=et.exports,nt={components:{BaseButton:at,PlusIcon:E["d"]},props:{searchResult:Object},computed:{coordinateString:function(){return x(this.searchResult.coords)}},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["trackLocation"])),{},{onDragged:function(t){t.dataTransfer.setData("application/json",JSON.stringify(this.searchResult))}})},ct=nt,ot=(a("4eff"),Object(b["a"])(ct,V,X,!1,null,"21899128",null)),it=ot.exports,rt={components:{LocationSearchItem:it,SearchBar:W},computed:Object(i["a"])({},Object(r["c"])({results:"getUntrackedSearchResults"}))},st=rt,lt=(a("5d40"),Object(b["a"])(st,K,Z,!1,null,"d971d2e4",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tracked-locations",on:{dragend:function(e){t.dropPosition=null}}},[a("ul",{class:"tracked-locations__list "+(t.dropPosition===t.trackedLocations.length?"tracked-locations__list--drop-target":""),attrs:{dropzone:""},on:{dragenter:function(e){if(e.target!==e.currentTarget)return null;t.dropPosition=t.trackedLocations.length},dragleave:function(e){t.dropPosition=null},dragover:function(t){t.preventDefault()},drop:t.onDrop}},t._l(t.trackedLocations,(function(e,n){return a("li",{key:e.woeid,class:"tracked-locations__item "+(t.dropPosition===n?"tracked-locations__item--drop-target":""),attrs:{dropzone:""},on:{dragleave:function(t){t.target!==t.currentTarget&&t.stopPropagation()},dragenter:function(e){e.stopPropagation(),t.dropPosition=n},drop:function(e){return e.stopPropagation(),t.onDrop(e)}}},[a("TrackedLocation",{attrs:{location:e}})],1)})),0)])},pt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"tracked-location"},[a("h3",{staticClass:"tracked-location__title"},[t._v(t._s(t.location.title))]),t.weather?a("div",{staticClass:"tracked-location__weather"},[a("img",{staticClass:"tracked-location__icon",attrs:{src:t.weather.icon,alt:t.weather.weatherType,width:"100",height:"100"}}),a("strong",{staticClass:"tracked-location__temp"},[a("TemperatureReadout",{attrs:{precision:0,celciusTemp:t.weather.temp}})],1)]):t._e(),t.location.isLoading?a("div",{staticClass:"tracked-location__loading"},[t._v(" Loading... ")]):t._e(),t.location.isLoading?t._e():a("div",{staticClass:"tracked-location__controls"},[a("BaseButton",{attrs:{value:"Untrack"},on:{click:function(e){return t.removeTrackedLocation({woeid:t.location.woeid})}}},[a("XIcon")],1),a("BaseButton",{attrs:{value:"View forecast"},on:{click:function(e){return t.viewLocation({woeid:t.location.woeid})}}},[a("CalendarIcon")],1)],1)])},ht=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" "+t._s(t.formattedTemp)+" "+t._s(t.symbol)+" ")])},_t=[],bt=(a("a9e3"),{props:{celciusTemp:Number,precision:Number},computed:Object(i["a"])(Object(i["a"])({},Object(r["e"])({scale:function(t){return t.tempScale||d.C}})),{},{formattedTemp:function(){var t=this.scale===d.C?this.celciusTemp:D(this.celciusTemp);return t.toFixed(this.precision)},symbol:function(){return this.scale===d.C?"°C":"°F"}})}),vt=bt,gt=Object(b["a"])(vt,mt,_t,!1,null,"6ca56d7f",null),yt=gt.exports,Ot={components:{BaseButton:at,XIcon:E["h"],CalendarIcon:E["a"],TemperatureReadout:yt},props:{location:Object},computed:{weather:function(){var t,e=null===(t=this.location)||void 0===t?void 0:t.forecast;return e?e[0]:null}},methods:Object(i["a"])({},Object(r["d"])(["removeTrackedLocation","viewLocation"]))},Lt=Ot,Tt=(a("820e"),Object(b["a"])(Lt,ft,ht,!1,null,"71e14852",null)),wt=Tt.exports,kt={components:{TrackedLocation:wt},data:function(){return{dropPosition:null}},computed:Object(i["a"])({},Object(r["e"])({trackedLocations:function(t){return t.trackedLocations}})),methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["trackLocation"])),{},{onDrop:function(t){this.trackLocation({location:JSON.parse(t.dataTransfer.getData("application/json")),index:this.dropPosition}),this.dropPosition=null}})},St=kt,jt=(a("8c92"),Object(b["a"])(St,dt,pt,!1,null,"c3bce55a",null)),Ct=jt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-container"},[a("div",{attrs:{id:"leaflet-map"}})])}],Et=(a("d81d"),a("159b"),a("e11e")),It=a.n(Et),Mt=(a("6cc5"),a("6397")),Rt=a.n(Mt),Pt=a("e2b9"),$t=a.n(Pt);delete It.a.Icon.Default.prototype._getIconUrl,It.a.Icon.Default.mergeOptions({iconUrl:Rt.a,shadowUrl:$t.a});var At={data:function(){return{leafletMap:null}},computed:Object(i["a"])(Object(i["a"])({},Object(r["e"])({trackedLocations:function(t){return t.trackedLocations}})),{},{markers:function(){var t=this;return this.trackedLocations.map((function(e){var a=e.coords,n=a.latt,c=a.long,o=It.a.marker([n,c],{title:e.title});return o.on("click",(function(){t.viewLocation({woeid:e.woeid})})),o}))}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["b"])(["search"])),Object(r["d"])(["viewLocation"])),{},{fitMapToMarkers:function(){if(this.trackedLocations&&0!==this.trackedLocations.length){var t=this.trackedLocations.map((function(t){return t.coords.latt})).sort((function(t,e){return t-e})),e=this.trackedLocations.map((function(t){return t.coords.long})).sort((function(t,e){return t-e})),a=[t[0],t[t.length-1]],n=a[0],c=a[1],o=[e[0],e[e.length-1]],i=o[0],r=o[1];this.leafletMap.fitBounds([[n,i],[c,r]],{maxZoom:10})}else this.leafletMap.setView([10,10],2)}}),watch:{markers:{handler:function(t,e){var a=this;e.forEach((function(t){return t.remove()})),t.forEach((function(t){return t.addTo(a.leafletMap)})),this.fitMapToMarkers()}}},mounted:function(){var t=this;this.leafletMap=It.a.map("leaflet-map",{center:[10,10],zoom:2,doubleClickZoom:!1}),It.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(this.leafletMap),this.markers.forEach((function(e){return e.addTo(t.leafletMap)})),this.fitMapToMarkers(),this.leafletMap.on("dblclick",function(t){var e=t.latlng,a=e.lat,n=e.lng;this.search({coords:{latt:a,long:n}})}.bind(this))}},Bt=At,Ft=(a("0789"),Object(b["a"])(Bt,xt,Dt,!1,null,"1a48b5d4",null)),qt=Ft.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-details"},[a("h2",{staticClass:"location-details__title"},[t._v(" "+t._s(t.location.title)+", "+t._s(t.location.parent.title)+" ")]),a("ForecastDay",{staticClass:"location-details__current-weather",attrs:{forecastDay:t.currentWeather,isToday:""}}),a("ul",{staticClass:"location-details__forecast"},t._l(t.forecast,(function(t){return a("li",{key:t.id,staticClass:"location-details__forecast-day"},[a("ForecastDay",{attrs:{forecastDay:t}})],1)})),0)],1)},Wt=[],zt=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"forecast-day"+(t.isToday?" forecast-day--today":"")},[a("h3",{staticClass:"forecast-day__date"},[a("time",{attrs:{datetime:t.forecastDay.date.toISOString()}},[t._v(" "+t._s(t.title)+" ")])]),a("div",{staticClass:"forecast-day__basic-info"},[t.isToday?a("strong",{staticClass:"forecast-day__weather-type"},[t._v(" "+t._s(t.forecastDay.weatherType)+" ")]):t._e(),a("strong",{staticClass:"forecast-day__temp"},[a("TemperatureReadout",{attrs:{precision:1,celciusTemp:t.forecastDay.temp}})],1),a("span",{staticClass:"forecast-day__temp-range"},[a("TemperatureReadout",{attrs:{precision:1,celciusTemp:t.forecastDay.minTemp}}),t._v(" … "),a("TemperatureReadout",{attrs:{precision:1,celciusTemp:t.forecastDay.maxTemp}})],1),a("img",{staticClass:"forecast-day__icon",attrs:{src:t.forecastDay.icon,alt:t.forecastDay.weatherType,width:"100",height:"100"}})]),a("div",{staticClass:"forecast-day__info"},[a("WindIcon",{staticClass:"forecast-day__info-icon",attrs:{size:"1x","aria-label":"Wind"}}),t._v(" "+t._s(t.forecastDay.wind.speed.toFixed(1))+" m/s "+t._s(t.forecastDay.wind.direction)+" ")],1),a("div",{staticClass:"forecast-day__info"},[a("DropletIcon",{staticClass:"forecast-day__info-icon",attrs:{size:"1x","aria-label":"Humidity"}}),t._v(" "+t._s(t.forecastDay.humidity)+"% ")],1),a("div",{staticClass:"forecast-day__confidence"},[t._v(" Confidence: "+t._s(t.forecastDay.predictability)+"% ")])])}),Jt=[],Ut=a("5a0c"),Ht=a.n(Ut),Kt={components:{WindIcon:E["g"],DropletIcon:E["b"],TemperatureReadout:yt},props:{forecastDay:Object,isToday:Boolean},computed:{title:function(){var t=Ht()(this.forecastDay.date),e=t.format("D MMMM");return this.isToday?"Today, ".concat(e):e}}},Zt=Kt,Vt=(a("b36c"),Object(b["a"])(Zt,zt,Jt,!1,null,"8e6f4bf4",null)),Xt=Vt.exports,Gt={components:{ForecastDay:Xt},props:{location:Object},computed:{currentWeather:function(){var t;return(null===(t=this.location)||void 0===t?void 0:t.forecast[0])||null},forecast:function(){var t;return(null===(t=this.location)||void 0===t?void 0:t.forecast.slice(1))||null}}},Qt=Gt,Yt=(a("8979"),Object(b["a"])(Qt,Nt,Wt,!1,null,"a060cb38",null)),te=Yt.exports,ee=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ae=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"site-footer"},[a("div",[t._v("© 2021 ppesterev")]),a("div",[t._v(" Weather data kindly provided by "),a("a",{attrs:{href:"https://www.metaweather.com/"}},[t._v("MetaWeather")])])])}],ne={},ce=ne,oe=(a("7a7b"),Object(b["a"])(ce,ee,ae,!1,null,"6c90b7f4",null)),ie=oe.exports,re={name:"App",components:{Toolbar:H,LocationSearch:ut,WorldMap:qt,TrackedLocationsList:Ct,LocationDetails:te,AppFooter:ie},computed:Object(i["a"])({},Object(r["e"])({viewedLocation:function(t){return t.viewedLocation},isDisplayingSearch:function(t){return t.displayedList===u.SEARCH}})),methods:Object(i["a"])({},Object(r["b"])(["loadTrackedLocations","loadTempScale"])),mounted:function(){this.loadTrackedLocations(),this.loadTempScale()}},se=re,le=(a("9993"),Object(b["a"])(se,c,o,!1,null,null,null)),ue=le.exports,de=(a("4de4"),a("7db0"),{displayedList:u.SEARCH,search:{isLoading:!1,lastRequestId:null,results:[],distanceSearchOrigin:null},trackedLocations:[],viewedLocation:null,tempScale:d.C}),pe=de,fe=(a("a434"),a("c740"),{setTempScale:function(t,e){var a=e.tempScale;t.tempScale=a},switchDisplayedList:function(t,e){var a=e.displayedList;t.displayedList=a},startSearch:function(t,e){var a=e.coords,n=e.requestId;t.search.isLoading=!0,t.search.lastRequestId=n,a&&(t.search.distanceSearchOrigin=a)},cancelSearch:function(t){t.search.lastRequestId=null,t.search.isLoading=!1},finishSearch:function(t,e){var a=e.results,n=e.requestId;n===t.search.lastRequestId&&(t.search.results=a,t.search.isLoading=!1)},addTrackedLocation:function(t,e){var a=e.location,n=e.index,c=void 0===n?0:n,o=t.trackedLocations.find((function(t){return t.woeid===a.woeid}));o||t.trackedLocations.splice(c,0,a)},updateTrackedLocation:function(t,e){var a=e.location,n=t.trackedLocations.findIndex((function(t){return t.woeid===a.woeid}));-1!==n&&t.trackedLocations.splice(n,1,a)},removeTrackedLocation:function(t,e){var a=e.woeid;t.trackedLocations=t.trackedLocations.filter((function(t){return t.woeid!==a}))},setTrackedLocations:function(t,e){var a=e.locations;t.trackedLocations=a},viewLocation:function(t,e){var a=e.woeid;t.viewedLocation=a&&t.trackedLocations.find((function(t){return t.woeid===a}))||null}}),he=fe,me=(a("d3b7"),a("3ca3"),a("ddb0"),a("3835")),_e=(a("1276"),a("bc3a")),be=a.n(_e),ve="https://eigencors.herokuapp.com/",ge="https://www.metaweather.com/api/",ye=function(t){return"".concat(ve).concat(ge).concat(t)},Oe=function t(e){var a=e.title,n=e.woeid,c=e.latt_long,o=c.split(","),i=Object(me["a"])(o,2),r=i[0],s=i[1];return{title:a,woeid:n,coords:{latt:parseFloat(r),long:parseFloat(s)},parent:e.parent?t(e.parent):null}},Le=function(t){return{id:t.id,date:new Date(t.applicable_date),temp:t.the_temp,minTemp:t.min_temp,maxTemp:t.max_temp,weatherType:t.weather_state_name,wind:{speed:t.wind_speed,direction:t.wind_direction_compass},humidity:t.humidity,predictability:t.predictability,icon:"https://www.metaweather.com/static/img/weather/".concat(t.weather_state_abbr,".svg")}},Te=function(t){return be.a.get(ye("location/search"),{params:{query:t}}).then((function(t){return t.data.map(Oe)}))},we=function(t){return be.a.get(ye("location/search"),{params:{lattlong:"".concat(t.latt,",").concat(t.long)}}).then((function(t){return t.data.map((function(t){return Object(i["a"])(Object(i["a"])({},Oe(t)),{},{distance:t.distance})}))}))},ke=function(t){return be.a.get(ye("location/".concat(t))).then((function(t){return Object(i["a"])(Object(i["a"])({},Oe(t.data)),{},{forecast:t.data.consolidated_weather.map(Le).sort((function(t,e){return t.date.getTime()-e.date.getTime()}))})}))},Se=(a("2ca0"),"weather_thing_"),je={TRACKED_LOCATIONS:"tracked_locations",TEMP_SCALE:"temp_scale"};function Ce(t,e){return localStorage.setItem("".concat(Se).concat(t),JSON.stringify(e))}function xe(t){return JSON.parse(localStorage.getItem("".concat(Se).concat(t)))}var De={search:function(t,e){var a=t.commit,n=e.term,c=e.coords,o=Object(h["a"])(6);a("startSearch",{coords:c,requestId:o});var i=c?we(c):Te(n);i.then((function(t){return a("finishSearch",{results:t,requestId:o})})).catch((function(){return a("finishSearch",{results:[],requestId:o})}))},trackLocation:function(t,e){var a=t.commit,n=e.location,c=e.index,o=Object(i["a"])(Object(i["a"])({},n),{},{isLoading:!0});a("addTrackedLocation",{location:o,index:c}),ke(n.woeid).then((function(t){var e=Object(i["a"])(Object(i["a"])({},t),{},{isLoading:!1});a("updateTrackedLocation",{location:e})})).catch((function(){a("updateTrackedLocation",{location:Object(i["a"])(Object(i["a"])({},o),{},{isLoading:!1})})}))},loadTrackedLocations:function(t){var e=t.commit,a=function(t){return function(e){return Object(i["a"])(Object(i["a"])({},e),{},{isLoading:t})}},n=xe(je.TRACKED_LOCATIONS)||[];e("setTrackedLocations",{locations:n.map(a(!0))}),Promise.all(n.map((function(t){return ke(t.woeid)}))).then((function(t){return e("setTrackedLocations",{locations:t.map(a(!1))})})).catch((function(){return e("setTrackedLocations",{locations:n.map(a(!1))})}))},loadTempScale:function(t){var e=t.commit,a=xe(je.TEMP_SCALE);a&&e("setTempScale",{tempScale:a})}},Ee=De,Ie=function(t){t.subscribe((function(t,e){switch(t.type){case"addTrackedLocation":case"updateTrackedLocation":case"removeTrackedLocation":case"setTrackedLocations":Ce(je.TRACKED_LOCATIONS,e.trackedLocations);break;case"setTempScale":Ce(je.TEMP_SCALE,e.tempScale)}}))};n["a"].use(r["a"]);var Me=new r["a"].Store({state:pe,getters:{getUntrackedSearchResults:function(t){return t.search.results.filter((function(e){return!t.trackedLocations.find((function(t){return t.woeid===e.woeid}))}))}},mutations:he,actions:Ee,plugins:[Ie]}),Re=a("772b");n["a"].use(Re["a"]),n["a"].config.productionTip=!1,new n["a"]({store:Me,mq:{dropMap:"(max-width: 560px)",collapseLists:"(max-width: 900px)"},render:function(t){return t(ue)}}).$mount("#app")},"5cbb":function(t,e,a){"use strict";a("0ba1")},"5d40":function(t,e,a){"use strict";a("6b89")},"6b89":function(t,e,a){},"77bd":function(t,e,a){},"7a7b":function(t,e,a){"use strict";a("b425")},"7ace":function(t,e,a){},"7dad":function(t,e,a){},"820e":function(t,e,a){"use strict";a("2dd1")},8979:function(t,e,a){"use strict";a("1c9d")},"8c92":function(t,e,a){"use strict";a("a7ea")},9993:function(t,e,a){"use strict";a("7dad")},a13a:function(t,e,a){"use strict";a("4aea")},a7ea:function(t,e,a){},b36c:function(t,e,a){"use strict";a("de16")},b425:function(t,e,a){},de16:function(t,e,a){},e209:function(t,e,a){}});
//# sourceMappingURL=app.18df742e.js.map