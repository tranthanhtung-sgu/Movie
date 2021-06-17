(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{43:function(e,t,i){},44:function(e,t,i){},67:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t),i.d(t,"history",(function(){return D}));var n=i(0),a=i(19),c=i.n(a),r=(i(43),i(44),i(3)),s=i(38),o=i(10),l=i(76),j=i(77),h=i(35),d=i.n(h),u=i(16),m=function e(t,i){Object(u.a)(this,e),this.data=void 0,this.pagination=void 0,this.data=t,this.pagination=i},b=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;Object(u.a)(this,e),this.pageNumber=void 0,this.pageSize=void 0,this.pageNumber=t,this.pageSize=i},v=i(13),p=i.n(v),f=i(17),g=i(36),O=i(4),x=i(14),w=i.n(x),N=function(e){return new Promise((function(t){setTimeout(t,e)}))};w.a.defaults.baseURL="/api",w.a.interceptors.response.use(function(){var e=Object(f.a)(p.a.mark((function e(t){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(500);case 2:if(!(i=t.headers.pagination)){e.next=6;break}return t.data=new m(t.data,JSON.parse(i)),e.abrupt("return",t);case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var y=function(e){return e.data},P=function(e){return w.a.get(e).then(y)},k={Movies:{list:function(e){return w.a.get("/movie",{params:e}).then(y)},detail:function(e){return P("/movie/".concat(e))}}},M={movieStore:new(function(){function e(){var t=this;Object(u.a)(this,e),this.movieRegistry=new Map,this.selectedMovie=void 0,this.loading=!1,this.loadingInitial=!0,this.pagination=null,this.pagingParams=new b,this.predicate=(new Map).set("category","all"),this.setPagingParams=function(e){t.pagingParams=e},this.setPredicate=function(e,i){switch(e){case"category":t.predicate.delete("category"),t.predicate.set("category",i)}},this.setPagination=function(e){t.pagination=e},this.loadMovies=Object(f.a)(p.a.mark((function e(){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingInitial=!0,e.prev=1,e.next=4,k.Movies.list(t.axiosParams);case 4:i=e.sent,Object(O.h)((function(){i.data.forEach((function(e){t.setMovie(e)})),t.setPagination(i.pagination),t.loadingInitial=!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),Object(O.h)((function(){t.loadingInitial=!1}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),this.loadMovie=function(){var e=Object(f.a)(p.a.mark((function e(i){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.getMovie(i))){e.next=6;break}return t.selectedMovie=n,e.abrupt("return",n);case 6:return t.loadingInitial=!0,e.prev=7,e.next=10,k.Movies.detail(i);case 10:return n=e.sent,t.setMovie(n),Object(O.h)((function(){t.selectedMovie=n,t.loadingInitial=!1})),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0),Object(O.h)((function(){t.loadingInitial=!1}));case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}(),this.clearSelectedMovie=function(){t.selectedMovie=void 0},Object(O.d)(this),Object(O.g)((function(){return t.predicate.keys()}),(function(){t.pagingParams=new b,t.movieRegistry.clear(),t.loadMovies()}))}return Object(g.a)(e,[{key:"moviesArray",get:function(){return Array.from(this.movieRegistry.values())}},{key:"axiosParams",get:function(){var e=new URLSearchParams;return e.append("pageNumber",this.pagingParams.pageNumber.toString()),e.append("pageSize",this.pagingParams.pageSize.toString()),this.predicate.forEach((function(t,i){e.append(i,t)})),e}},{key:"getMovie",value:function(e){return this.movieRegistry.get(e)}},{key:"setMovie",value:function(e){this.movieRegistry.set(e.id,e)}}]),e}())},S=Object(n.createContext)(M);function _(){return Object(n.useContext)(S)}i(67);var I=i(75),R=i(78),z=i(18),C=i(1),T=Object(o.a)((function(e){var t=e.movie;return Object(C.jsxs)("div",{className:"movie-item",children:[Object(C.jsx)(z.a,{style:{textDecoration:"none"},to:"/phim/".concat(t.id),children:Object(C.jsx)("img",{className:"movie-item__img",alt:"img",src:"https://www.fullphim.net/"+t.image})}),Object(C.jsx)(z.a,{style:{textDecoration:"none"},to:"/phim/".concat(t.id),children:Object(C.jsx)("div",{className:"movie-item__title",children:t.title})})]})})),E=Object(o.a)((function(){var e=_().movieStore,t=e.moviesArray,i=e.pagination;return Object(C.jsxs)(I.a,{children:[Object(C.jsxs)(l.a,{className:"row-filter",children:[Object(C.jsx)(j.a,{xl:6,children:Object(C.jsx)("h1",{className:"title",children:"Phim m\u1edbi"})}),Object(C.jsxs)(j.a,{xl:6,className:"m-auto",children:[Object(C.jsxs)(R.a,{variant:"light ml-2 btn-filter-film active",children:["T\u1ea5t c\u1ea3 phim (",i.totalItems,")"]}),Object(C.jsx)(R.a,{variant:"dark ml-2 btn-filter-film",children:"S\u1eafp chi\u1ebfu"}),Object(C.jsx)(R.a,{variant:"dark ml-2 btn-filter-film",children:"Phim m\u1edbi"})]})]}),Object(C.jsx)(l.a,{className:"cards-film mt-3",children:t.map((function(e){return Object(C.jsx)(j.a,{md:3,children:Object(C.jsx)(T,{movie:e})},e.id)}))})]})})),A=Object(o.a)((function(){var e=_().movieStore,t=e.movieRegistry,i=e.loadMovies,a=e.loadingInitial,c=e.setPagingParams,r=e.pagination,o=Object(n.useState)(!1),h=Object(s.a)(o,2),u=h[0],m=h[1];return Object(n.useEffect)((function(){t.size<=1&&i()}),[t.size,i]),a&&!u?null:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)(l.a,{className:"",children:[Object(C.jsxs)(j.a,{xs:9,className:"left-side",children:[Object(C.jsx)(d.a,{pageStart:0,loadMore:function(){m(!0),c(new b(r.currentPage+1)),i().then((function(){return m(!1)}))},hasMore:!u&&!!r&&r.currentPage<r.totalPages,initialLoad:!1,children:Object(C.jsx)(E,{})}),Object(C.jsx)("div",{style:{textAlign:"center",color:"#fff",fontSize:50,marginTop:-10,display:r.currentPage===r.totalPages?"none":"block"},children:"Continue..."})]}),Object(C.jsx)(j.a,{xs:3,className:"hint-1",children:"3 of 3"})]})})})),F=(i(71),Object(o.a)((function(){var e=_().movieStore,t=e.setPredicate,i=e.loadMovies;function n(e){t("category",e),i().then((function(){})),console.log(e)}return Object(C.jsxs)("nav",{children:[Object(C.jsx)("input",{id:"nav-toggle",type:"checkbox"}),Object(C.jsx)(z.a,{to:"/",children:Object(C.jsxs)("div",{onClick:function(){return n("all")},className:"logo",children:["Phim c\u1ee7a ",Object(C.jsx)("strong",{children:"\u205fNh\u1ecf"})]})}),Object(C.jsxs)("ul",{className:"links",children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){return n("all")},children:"T\u1ea5t c\u1ea3"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){return n("phim rap")},children:"Phim chi\u1ebfu r\u1ea1p"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){return n("phim le")},children:"Phim l\u1ebb"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"#phimviet",children:"Phim Vi\u1ec7t Nam"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"#phimhoathinh",children:"Phim ho\u1ea1t h\xecnh"})})]}),Object(C.jsxs)("label",{htmlFor:"nav-toggle",className:"icon-burger",children:[Object(C.jsx)("div",{className:"line"}),Object(C.jsx)("div",{className:"line"}),Object(C.jsx)("div",{className:"line"})]})]})}))),B=(i(72),Object(o.a)((function(){var e=_().movieStore,t=e.loadMovie,i=e.clearSelectedMovie,a=e.selectedMovie,c=Object(r.e)().id;return Object(n.useEffect)((function(){return c&&t(c),window.scrollTo(0,0),function(){return i()}}),[c,t,i]),console.log(a),a?Object(C.jsxs)(I.a,{className:"",children:[Object(C.jsxs)(l.a,{className:"header-content-block",children:[Object(C.jsx)(j.a,{lg:5,children:Object(C.jsx)("div",{className:"movie__image",style:{backgroundImage:"url(https://www.fullphim.net".concat(a.image,")")}})}),Object(C.jsxs)(j.a,{lg:7,children:[Object(C.jsx)("h1",{className:"title__movie",children:a.title}),Object(C.jsxs)("div",{className:"info-wrapper",children:[Object(C.jsxs)("div",{className:"preview__film",children:[Object(C.jsxs)("div",{className:"time",children:[Object(C.jsx)("h6",{className:"preview__label",children:"Th\u1eddi l\u01b0\u1ee3ng:"}),Object(C.jsx)("h6",{className:"preview__content",children:a.time})]}),Object(C.jsxs)("div",{className:"director",children:[Object(C.jsx)("h6",{className:"preview__label",children:"\u0110\u1ea1o di\u1ec5n:"}),Object(C.jsx)("h6",{className:"preview__content",children:a.director})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{style:{color:"yellow"},className:"far fa-clock"})," ",a.publishYear]})]}),Object(C.jsx)("div",{className:"review__film",children:Object(C.jsx)("p",{children:a.description})})]})]})]}),Object(C.jsx)(l.a,{children:Object(C.jsx)("div",{style:{width:"100%",height:0,position:"relative",paddingBottom:"56.250%",margin:50},children:Object(C.jsx)("iframe",{allow:"autoplay",src:"".concat(a.url),style:{width:"100%",height:"100%",position:"absolute",left:0,top:0,overflow:"hidden"},frameBorder:0,allowFullScreen:!0})})})]}):null})));var J=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F,{}),Object(C.jsx)(r.a,{exact:!0,path:"/",component:A}),Object(C.jsx)(r.a,{path:"/(.+)",render:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(r.a,{path:"/phim/:id",component:B})})}})]})},L=i(6),D=(i(73),Object(L.a)());c.a.render(Object(C.jsx)(S.Provider,{value:M,children:Object(C.jsx)(r.b,{history:D,children:Object(C.jsx)(J,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2d1a7076.chunk.js.map