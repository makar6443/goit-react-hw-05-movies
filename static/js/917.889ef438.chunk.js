"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{917:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var i,r,a,c=t(439),s=t(791),o=t(689),p=t(596),l=(t(462),t(786)),u=t(168),h=t(444),d=h.ZP.div(i||(i=(0,u.Z)(["\n  padding-top: 25px;\n  padding-bottom: 25px;\n"]))),f=h.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex; \n  justify-content :center;\n  flex-wrap: wrap;\n  gap: 20px;\n  @media screen and (min-width: 1200px) {\n    justify-content :flex-start;\n  } \n"]))),m=h.ZP.li(a||(a=(0,u.Z)(["\n  width: 150px;\n  list-style: none;\n"]))),x=t(184),g=function(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],r=(0,s.useState)(!1),a=(0,c.Z)(r,2),u=a[0],h=a[1],g=(0,o.UO)().movieId;if((0,s.useEffect)((function(){h(!0),fetch("https://api.themoviedb.org/3/movie/".concat(g,"/credits?api_key=0bcfcb05021399706be632b43954eb5a&language=en-US")).then((function(e){return e.json()})).then((function(e){var n=e.cast;i(n)})).catch((function(){p.Am.error("Something went wrong")})).finally((function(){return h(!1)}))}),[g]),u)return(0,x.jsx)(l.Z,{});return t.length?(0,x.jsx)(d,{children:(0,x.jsx)(f,{children:t.map((function(e){var n=e.name,t=e.character,i=e.profile_path;return(0,x.jsxs)(m,{children:[(0,x.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500/"+i:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:n}),(0,x.jsxs)("p",{children:["Actor: ",n]}),(0,x.jsxs)("p",{children:["Character: ",t]})]},n)}))})}):(0,x.jsx)(d,{children:(0,x.jsx)("p",{children:"Cast list is empty"})})}}}]);
//# sourceMappingURL=917.889ef438.chunk.js.map