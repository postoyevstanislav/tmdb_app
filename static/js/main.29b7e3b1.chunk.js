(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{13:function(e,t,n){e.exports={container:"MovieInfo_container__1pI0L",imgContainer:"MovieInfo_imgContainer__C9Te8",rating:"MovieInfo_rating__3Yrzx"}},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(10),r=n.n(c),o=(n(31),n(20)),s=n(15),l=n(38),j=n(39),d=n(43),u=n(13),h=n.n(u),b=n(4),v=function(e){var t=e.currentMovie,n=e.closeMovieInfo;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{style:{margin:10},variant:"outline-info",onClick:n,children:"BACK"}),Object(b.jsxs)("div",{className:h.a.container,children:[Object(b.jsx)("div",{className:h.a.imgContainer,children:Object(b.jsx)("img",{src:"http://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:""})}),Object(b.jsxs)("div",{className:h.a.infoContainer,children:[Object(b.jsx)("h1",{children:t.title}),Object(b.jsxs)("h5",{children:["Release date: ",t.release_date.replaceAll("-",".")]}),Object(b.jsx)("p",{children:t.overview}),Object(b.jsxs)("p",{className:h.a.rating,children:[t.vote_average,"/10"]})]})]})]})},f=n(22),m=n(42),O=function(e){var t=e.key,n=e.image,i=e.title,a=e.overview,c=e.id,r=e.handleMovieInfo;return Object(b.jsx)(f.a,{xs:12,sm:6,md:4,children:Object(b.jsxs)(m.a,{style:{marginTop:30},children:[Object(b.jsx)(m.a.Img,{variant:"top",src:n,onClick:function(){return r(c)}}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:"".concat(i)}),Object(b.jsx)(m.a.Text,{children:a?a.slice(0,100)+"...":null}),Object(b.jsx)(d.a,{variant:"dark",onClick:function(){return r(c)},children:"More info"})]})]},t)})},p=function(e){var t=e.movies,n=e.handleMovieInfo;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(O,{id:e.id,image:null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg":"http://image.tmdb.org/t/p/w185/".concat(e.poster_path),title:e.title,overview:e.overview,handleMovieInfo:n},e.id)}))})},x=n(40),g=n(41),M=n(25),_=function(e){var t=e.handleSearchValue,n=e.searchMovie,i=e.getMovies,a=e.value;return Object(b.jsxs)(x.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(b.jsx)(x.a.Brand,{onClick:i,className:"mr-auto",children:"TMDB DiamSol"}),Object(b.jsxs)(g.a,{inline:!0,onSubmit:n,children:[Object(b.jsx)(M.a,{onInput:t,type:"text",value:a,placeholder:"Search",className:"mr-sm-2"}),Object(b.jsx)(d.a,{onClick:n,variant:"outline-info",children:"Search"})]})]})};var k=function(){var e="b4e7239ec05624f521d3bafb199d0a05",t=Object(i.useState)([]),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(null),d=Object(s.a)(r,2),u=d[0],h=d[1],f=Object(i.useState)(""),m=Object(s.a)(f,2),O=m[0],x=m[1],g=function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(e,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){c(Object(o.a)(e.results))}))};return Object(i.useEffect)((function(){g()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{value:O,getMovies:g,handleSearchValue:function(e){x(e.target.value)},searchMovie:function(t){t.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(O)).then((function(e){return e.json()})).then((function(e){c(Object(o.a)(e.results))})),x("")}}),null===u?Object(b.jsx)(l.a,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(p,{movies:a,handleMovieInfo:function(e){var t=a.filter((function(t){return t.id===e}));h(t)}})})}):Object(b.jsx)(v,{currentMovie:u[0],closeMovieInfo:function(){h(null)}})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.29b7e3b1.chunk.js.map