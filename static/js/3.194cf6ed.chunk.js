(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{70:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a(8),c=a(10),o=a(9),s=a(0),u=a.n(s),i=a(16),l=a(37);var m=function(t){var e=u.a.useState(t.source),a=Object(l.a)(e,2),n=a[0],r=a[1];return u.a.createElement("img",{src:n,alt:"",className:"img-thumbnail",style:{height:"300px"},onError:function(){return r("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png")}})},p=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"_renderButton",value:function(t,e){return t?u.a.createElement("button",{className:"btn btn-primary btn-sm btn-block"},"Add to ",e?"Wishlist":"Cart"):u.a.createElement("button",{disabled:!0,className:"btn btn-danger btn-sm btn-block"},"Out of Stock")}},{key:"render",value:function(){var t=this.props,e=t.pData,a=t.wishlist,n=t.currencyCode;return u.a.createElement(i.a,{colSize:4},u.a.createElement("div",{className:"shadow-sm p-2 text-center mb-4"},u.a.createElement(m,{source:e.productImage}),u.a.createElement("h2",null,e.productName),u.a.createElement("h3",null,n," ",e.productPrice),this._renderButton(e.productStock,a)))}}]),a}(u.a.Component),d=a(22),b=a.n(d),h=a(13),v=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={pList:[]},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var t=this;b.a.get("https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json").then((function(e){console.log("success",e),t.setState({pList:e.data})})).catch((function(t){console.log("error",t)}))}},{key:"render",value:function(){var t=this,e=this.state.pList;return u.a.createElement("div",{className:"row"},e.map((function(e){return u.a.createElement(p,{pData:e,key:e.productId,currencyCode:t.props.selectedCurrency})})))}}]),a}(u.a.Component);e.default=Object(h.b)((function(t){return{selectedCurrency:t.currency}}))(v)}}]);
//# sourceMappingURL=3.194cf6ed.chunk.js.map