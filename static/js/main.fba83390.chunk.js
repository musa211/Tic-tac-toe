(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,r,t){},14:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var s=t(1),n=t.n(s),i=t(7),a=t.n(i),c=(t(13),t(14),t(8)),u=t(2),h=t(3),o=t(5),d=t(4),l=t(0);function j(e){return Object(l.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(o.a)(t,e);var r=Object(d.a)(t);function t(){return Object(u.a)(this,t),r.apply(this,arguments)}return Object(h.a)(t,[{key:"renderSquare",value:function(e){var r=this;return Object(l.jsx)(j,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4)]}),Object(l.jsxs)("div",{className:"border-row",children:[this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8),this.renderSquare(9)]}),Object(l.jsxs)("div",{className:"border-row",children:[this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14)]}),Object(l.jsxs)("div",{className:"border-row",children:[this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19)]}),Object(l.jsxs)("div",{className:"border-row",children:[this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24)]})]})}}]),t}(s.Component),q=function(e){Object(o.a)(t,e);var r=Object(d.a)(t);function t(e){var s;return Object(u.a)(this,t),(s=r.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},s}return Object(h.a)(t,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1].squares.slice();x(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({history:r.concat({squares:t}),xIsNext:!this.state.xIsNext,stepNumber:r.length}))}},{key:"render",value:function(){var e,r=this,t=this.state.history,s=t[this.state.stepNumber],n=x(s.squares),i=t.map((function(e,t){var s=t?"Go to #"+t:"Start the Game";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){r.jumpTo(t)},children:s})},t)}));return e=n?"Winner is "+n:"Next Player is "+(this.state.xIsNext?"X":"O"),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(b,{onClick:function(e){return r.handleClick(e)},squares:s.squares})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{children:e}),Object(l.jsx)("ul",{children:i})]})]})}}]),t}(s.Component);function x(e){for(var r=[[0,1,2,3],[1,2,3,4],[5,6,7,8],[6,7,8,9],[10,11,12,13],[11,12,13,14],[15,16,17,18],[16,17,18,19],[20,21,22,23],[21,22,23,24],[0,5,10,15],[5,10,15,20],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[0,6,12,18],[6,12,18,24],[5,11,17,23],[1,7,13,19],[3,7,11,15],[4,8,12,16],[8,12,16,20],[9,13,17,21]],t=0;t<r.length;t++){var s=Object(c.a)(r[t],4),n=s[0],i=s[1],a=s[2],u=s[3];if(e[n]&&e[n]===e[i]&&e[i]===e[a]&&e[a]===e[u])return e[n]}return null}var S=function(){return Object(l.jsx)(q,{})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(r){var t=r.getCLS,s=r.getFID,n=r.getFCP,i=r.getLCP,a=r.getTTFB;t(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.fba83390.chunk.js.map