(window["webpackJsonpreact-tetris"]=window["webpackJsonpreact-tetris"]||[]).push([[0],{10:function(t,n,e){t.exports=e.p+"static/media/bg.2810fe6b.png"},15:function(t,n,e){t.exports=e(26)},20:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(9),c=e.n(a),i=(e(20),e(1)),u=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(t,n,e){for(var r=e.x,o=e.y,a=0;a<t.tetromino.length;a+=1)for(var c=0;c<t.tetromino[a].length;c+=1)if(0!==t.tetromino[a][c]&&(!n[a+t.pos.y+o]||!n[a+t.pos.y+o][c+t.pos.x+r]||"clear"!==n[a+t.pos.y+o][c+t.pos.x+r][1]))return!0},f=e(2),d=e(3),s=e(10),p=e.n(s);function b(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tpadding: 40px;\n\tmargin: 0 auto;\n\tmax-width: 900px;\n\n\taside {\n\t\twidth: 100%;\n\t\tmax-width: 200px;\n\t\tdisplay: block;\n\t\tpadding: 0 20px;\n\t}\n"]);return b=function(){return t},t}function m(){var t=Object(f.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: url(",") #000;\n\tbackground-size: cover;\n\toverflow: hidden;\n"]);return m=function(){return t},t}var v=d.a.div(m(),p.a),x=d.a.div(b()),g=e(7),h={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"223, 173, 36"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"36, 95, 223"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"132, 61, 198"},T:{shape:[["T","T","T"],[0,"T",0],[0,0,0]],color:"227, 78, 78"}},O=function(){var t="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return h[t]},y=function(t,n){var e=Object(r.useState)(u()),o=Object(i.a)(e,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),d=f[0],s=f[1];return Object(r.useEffect)((function(){s(0);var e=function(e){var r=e.map((function(t){return t.map((function(t){return"clear"===t[1]?[0,"clear"]:t}))}));return t.tetromino.forEach((function(n,e){n.forEach((function(n,o){0!==n&&(r[e+t.pos.y][o+t.pos.x]=[n,"".concat(t.collided?"merged":"clear")])}))})),t.collided?(n(),function(t){return t.reduce((function(n,e){return-1===e.findIndex((function(t){return 0===t[0]}))?(s((function(t){return t+1})),n.unshift(new Array(t[0].length).fill([0,"clear"])),n):(n.push(e),n)}),[])}(r)):r};c((function(t){return e(t)}))}),[t,n]),[a,c,d]};function j(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(\n\t\t",",\n\t\tcalc(25vw / ",")\n\t);\n\tgrid-template-columns: repeat(",", 1fr);\n\tgrid-gap: 1px;\n\tborder: 2px solid #333;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground: #111;\n"]);return j=function(){return t},t}var w=d.a.div(j(),(function(t){return t.height}),(function(t){return t.width}),(function(t){return t.width}));function E(){var t=Object(f.a)(["\n\twidth: auto;\n\tbackground: rgba(",", 0.8);\n\tborder: ",";\n\tborder-bottom-color: rgba(",", 0.1);\n\tborder-right-color: rgba(",", 1);\n\tborder-top-color: rgba(",", 1);\n\tborder-left-color: rgba(",", 0.3);\n"]);return E=function(){return t},t}var S=d.a.div(E(),(function(t){return t.color}),(function(t){return 0===t.type?"0px solid":"4px solid"}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color}),(function(t){return t.color})),k=o.a.memo((function(t){var n=t.type;return o.a.createElement(S,{type:n,color:h[n].color})})),I=function(t){var n=t.stage;return o.a.createElement(w,{width:n[0].length,height:n.length},n.map((function(t){return t.map((function(t,n){return o.a.createElement(k,{key:n,type:t[0]})}))})))};function J(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tborder: 4px solid #333;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 15px;\n\tcolor: ",";\n\tbackground: #000;\n\tfont-family: Pixel, Helvetica, Arial, sans-serif;\n\tfont-size: 0.8rem;\n"]);return J=function(){return t},t}var A=d.a.div(J(),(function(t){return t.gameOver?"red":"#999"})),L=function(t){var n=t.gameOver,e=t.text;return o.a.createElement(A,{gameOver:n},e)};function T(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 10px;\n\tborder: none;\n\tcolor: white;\n\tbackground: #333;\n\tfont-family: Pixel, Helvetica, Arial, sans-serif;\n\tfont-size: 1rem;\n\toutline: none;\n\tcursor: pointer;\n"]);return T=function(){return t},t}var Z=d.a.button(T()),z=function(t){var n=t.callback;return o.a.createElement(Z,{onClick:n},"Start Game")},C=function(){var t=Object(r.useState)(null),n=Object(i.a)(t,2),e=n[0],a=n[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),d=f[0],s=f[1],p=function(){var t=Object(r.useState)({pos:{x:0,y:0},tetromino:h[0].shape,collided:!1}),n=Object(i.a)(t,2),e=n[0],o=n[1],a=function(t,n){var e=t.map((function(n,e){return t.map((function(t){return t[e]}))}));return n>0?e.map((function(t){return t.reverse()})):e.reverse()},c=Object(r.useCallback)((function(){o({pos:{x:4,y:0},tetromino:O().shape,collided:!1})}),[]);return[e,function(t){var n=t.x,e=t.y,r=t.collided;o((function(t){return Object(g.a)(Object(g.a)({},t),{},{pos:{x:t.pos.x+=n,y:t.pos.y+=e},collided:r})}))},c,function(t,n){var r=JSON.parse(JSON.stringify(e));r.tetromino=a(r.tetromino,n);for(var c=r.pos.x,i=1;l(r,t,{x:0,y:0});)r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length&&(a(r.tetromino,-n),r.pos.x=c);o(r)}]}(),b=Object(i.a)(p,4),m=b[0],j=b[1],w=b[2],E=b[3],S=y(m,w),k=Object(i.a)(S,3),J=k[0],A=k[1],T=function(t){var n=Object(r.useState)(0),e=Object(i.a)(n,2),o=e[0],a=e[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],d=Object(r.useState)(0),s=Object(i.a)(d,2),p=s[0],b=s[1],m=[40,100,300,1200],v=Object(r.useCallback)((function(){t>0&&(a((function(n){return n+m[t-1]*(p+1)})),f((function(n){return n+t})))}),[p,m,t]);return Object(r.useEffect)((function(){v()}),[v,t,o]),[o,a,l,f,p,b]}(k[2]),Z=Object(i.a)(T,6),C=Z[0],G=Z[1],M=Z[2],N=Z[3],R=Z[4],H=Z[5];console.log("re-render");var K=function(t){l(m,J,{x:t,y:0})||j({x:t,y:0})},P=function(){M>10*(R+1)&&(H((function(t){return t+1})),a(1e3/(R+1)+200)),l(m,J,{x:0,y:1})?(m.pos.y<1&&(console.log("GAME OVER"),s(!0),a(null)),j({x:0,y:0,collided:!0})):j({x:0,y:1,collided:!1})},B=function(t){var n=t.keyCode;d||(37===n?K(-1):39===n?K(1):40===n?(a(null),P()):38===n?E(J,1):90===n&&E(J,-1))};return function(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){e.current=t}),[t]),Object(r.useEffect)((function(){if(null!==n){var t=setInterval((function(){e.current()}),n);return function(){clearInterval(t)}}}),[n])}((function(){P()}),e),o.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(t){return B(t)},onKeyUp:function(t){var n=t.keyCode;d||40===n&&a(1e3/(R+1)+200)}},o.a.createElement(x,null,o.a.createElement(I,{stage:J}),o.a.createElement("aside",null,d?o.a.createElement(L,{gameOver:d,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(L,{text:"Score; ".concat(C)}),o.a.createElement(L,{text:"Rows; ".concat(M)}),o.a.createElement(L,{text:"Level; ".concat(R)})),o.a.createElement(z,{callback:function(){A(u()),a(1e3),w(),s(!1),G(0),N(0),H(0)}}))))},G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null))};c.a.render(o.a.createElement(G,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6063d9ea.chunk.js.map