(this["webpackJsonpcrypto-junkies-alpha"]=this["webpackJsonpcrypto-junkies-alpha"]||[]).push([[0],{34:function(e,c,s){},62:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),n=s(26),i=s.n(n),r=s(11),l=s(4),j=(s(34),s(27)),d=s.n(j),o=s(5),b=s(2),h=["https://crypto-news-apiii.herokuapp.com/news/cointelegraph","https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false","https://api.coingecko.com/api/v3/search/trending","https://api.alternative.me/fng/?limit=14","https://api.coingecko.com/api/v3/global"],O=s(0),m=function(){return Object(O.jsx)("div",{id:"bitcoin",children:Object(O.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100px",height:"100px",viewBox:"100 100 400 400",xmlSpace:"preserve",children:[Object(O.jsxs)("filter",{id:"dropshadow",height:"130%",children:[Object(O.jsx)("feGaussianBlur",{in:"SourceAlpha",stdDeviation:5}),Object(O.jsx)("feOffset",{dx:0,dy:0,result:"offsetblur"}),Object(O.jsx)("feFlood",{floodColor:"red"}),Object(O.jsx)("feComposite",{in2:"offsetblur",operator:"in"}),Object(O.jsxs)("feMerge",{children:[Object(O.jsx)("feMergeNode",{}),Object(O.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),Object(O.jsx)("path",{className:"path",style:{filter:"url(#dropshadow)"},fill:"#000000",d:"M446.089,261.45c6.135-41.001-25.084-63.033-67.769-77.735l13.844-55.532l-33.801-8.424l-13.48,54.068 c-8.896-2.217-18.015-4.304-27.091-6.371l13.568-54.429l-33.776-8.424l-13.861,55.521c-7.354-1.676-14.575-3.328-21.587-5.073 l0.034-0.171l-46.617-11.64l-8.993,36.102c0,0,25.08,5.746,24.549,6.105c13.689,3.42,16.159,12.478,15.75,19.658L208.93,357.23 c-1.675,4.158-5.925,10.401-15.494,8.031c0.338,0.485-24.579-6.134-24.579-6.134l-9.631,40.468l36.843,9.188 c8.178,2.051,16.209,4.19,24.098,6.217l-13.978,56.17l33.764,8.424l13.852-55.571c9.235,2.499,18.186,4.813,26.948,6.995 l-13.802,55.309l33.801,8.424l13.994-56.061c57.648,10.902,100.998,6.502,119.237-45.627c14.705-41.979-0.731-66.193-31.06-81.984 C425.008,305.984,441.655,291.455,446.089,261.45z M368.859,369.754c-10.455,41.983-81.128,19.285-104.052,13.589l18.562-74.404 C306.28,314.65,379.774,325.975,368.859,369.754z M379.302,260.846c-9.527,38.187-68.358,18.781-87.442,14.023l16.828-67.489 C327.767,212.14,389.234,221.02,379.302,260.846z"})]})})},x=function(){var e=Object(t.useState)("false"),c=Object(l.a)(e,2),s=c[0],a=c[1],n=function(){a(!s)};return Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsxs)("figure",{children:[Object(O.jsx)(m,{}),Object(O.jsx)("figcaption",{children:"Cypto Junkies"})]})}),Object(O.jsxs)("nav",{className:"header-nav ".concat(s?"":"open"),onClick:n,children:[Object(O.jsx)(o.b,{to:"/",children:"Main"}),Object(O.jsx)(o.b,{to:"/index",children:"Index"}),Object(O.jsx)(o.b,{to:"/news",children:"News"}),Object(O.jsx)(o.b,{to:"/explore",children:"Explore"}),Object(O.jsx)(o.b,{to:"/developers",children:"Developers"})]}),Object(O.jsx)("span",{className:"toggle-nav ".concat(s?"":"open"),onClick:n,children:Object(O.jsx)("span",{children:"Toggle navigation"})})]})},A=function(e){var c=e.globalData,s=e.btcData.current_price,t=c.active_cryptocurrencies,a=c.total_market_cap.btc,n=c.total_volume.btc,i=c.market_cap_percentage.btc,r=c.market_cap_percentage.eth,l=function(e){return Math.floor(e*s).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(O.jsx)("div",{className:"global-wrapper",children:Object(O.jsxs)("div",{className:"global-data",children:[Object(O.jsxs)("div",{className:"metric",children:[Object(O.jsx)("span",{className:"label",children:"Coins: "}),Object(O.jsx)("span",{className:"result",children:t})]}),Object(O.jsxs)("div",{className:"metric",children:[Object(O.jsx)("span",{className:"label",children:"Market Cap: "}),Object(O.jsxs)("span",{className:"result",children:["$",l(a)]})]}),Object(O.jsxs)("div",{className:"metric",children:[Object(O.jsx)("span",{className:"label",children:"24h Vol: "}),Object(O.jsxs)("span",{className:"result",children:["$",l(n)]})]}),Object(O.jsxs)("div",{className:"metric",children:[Object(O.jsx)("span",{className:"label",children:"Dominance: "}),Object(O.jsxs)("span",{className:"result",children:["BTC: ",i.toFixed(1),"%   ETH: ",r.toFixed(1),"% "]})]}),Object(O.jsxs)("div",{className:"metric",children:[Object(O.jsx)("span",{className:"label",children:"Gas: "}),Object(O.jsx)("span",{className:"result",children:"45 Gwei"})]})]})})},u=function(e){var c=e.news,s=e.length;return Object(O.jsx)("section",{children:Object(O.jsx)("div",{className:"crypto-news",children:Object.values(c.slice(0,s)).map((function(e){return Object(O.jsx)("a",{href:e.url,children:Object(O.jsxs)("div",{className:"news-item",children:[Object(O.jsx)("div",{className:"img",children:Object(O.jsx)("img",{src:e.image})}),Object(O.jsxs)("div",{className:"news-content",children:[Object(O.jsx)("span",{className:"date",children:e.date}),Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("p",{children:e.desc})]})]})})}))})})},p=function(e){var c=e.coin,s=(e.rowNum,c.name),t=c.image,a=c.symbol,n=c.current_price,i=c.total_volume,r=c.price_change_percentage_24h,l=c.market_cap,j=c.circulating_supply,d=c.market_cap_rank;return Object(O.jsx)("div",{className:"currency-container",children:Object(O.jsxs)("div",{className:"chart-row",children:[Object(O.jsx)("h2",{children:d}),Object(O.jsxs)("div",{className:"coin",children:[Object(O.jsx)("img",{src:t,alt:"crypto"}),Object(O.jsx)("h2",{children:s}),Object(O.jsx)("span",{className:"coin-symbol",children:a})]}),Object(O.jsxs)("div",{className:"coin-data",children:[Object(O.jsxs)("p",{className:"coin-price",children:["$",n]}),r<0?Object(O.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"% ",Object(O.jsx)("span",{children:"(24h)"})]}):Object(O.jsxs)("p",{className:"coin-percent green",children:["+",r.toFixed(2),"%",Object(O.jsx)("span",{children:"(24h)"})]}),Object(O.jsxs)("p",{className:"coin-marketcap",children:["$ ",l.toLocaleString()]}),Object(O.jsxs)("p",{className:"coin-volume",children:["$ ",i.toLocaleString()]}),Object(O.jsxs)("p",{className:"circ-supply",children:[Object(O.jsx)("span",{className:"coin-symbol",children:a}),j.toLocaleString()]})]})]})})},g=function(e){var c=e.chart,s=e.lenght,a=void 0===s?50:s,n=Object(t.useState)(""),i=Object(l.a)(n,2),r=i[0],j=i[1],d=Object(t.useState)(c),o=Object(l.a)(d,2),b=o[0],h=o[1],m=Object(t.useState)(!0),x=Object(l.a)(m,2),A=x[0],u=x[1],g=function(e){j(e.target.value)},v=b.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.symbol.toLowerCase().includes(r.toLowerCase())}));Array.prototype.sortBy=function(e){return A?this.slice(0).sort((function(c,s){return c[e]>s[e]?1:c[e]<s[e]?-1:0})):this.slice(0).sort((function(c,s){return c[e]<s[e]?1:c[e]>s[e]?-1:0}))};var k=function(e){var c=b;u(!A),h(c.sortBy(e))};return Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"crypto-chart",children:[Object(O.jsx)("div",{className:"currency-container",children:Object(O.jsxs)("div",{className:"chart-row chart-header",children:[Object(O.jsx)("h2",{onClick:function(){return k("market_cap_rank")},children:"#"}),Object(O.jsx)("div",{className:"coin",children:Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",placeholder:"Search",className:"search-input",onChange:g})})}),Object(O.jsxs)("div",{className:"coin-data",children:[Object(O.jsx)("p",{className:"coin-price",onClick:function(){return k("current_price")},children:"Price"}),Object(O.jsx)("p",{className:"coin-percent",onClick:function(){return k("price_change_percentage_24h")},children:"24h %"}),Object(O.jsx)("p",{className:"coin-marketcap",onClick:function(){return k("market_cap")},children:"Market Cap"}),Object(O.jsx)("p",{className:"coin-volume",onClick:function(){return k("total_volume")},children:" Volume(24h)"}),Object(O.jsx)("p",{className:"circ-supply",onClick:function(){return k("circulating_supply")},children:"  Circulating Supply  "})]})]})}),v.slice(0,a).map((function(e,c){return Object(O.jsx)(p,{coin:e,rowNum:c},e.id)}))]})})},v=function(e){e.isLoaded;var c=e.news,s=(e.btcFaG,e.trending,e.chart);return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(u,{news:c,length:4}),Object(O.jsx)(g,{chart:s,length:10})]})};Array.prototype.sortBy=function(e){return this.slice(0).sort((function(c,s){return c[e]<s[e]?1:c[e]>s[e]?-1:0}))};var k=function(e){var c=e.chart,s=e.lenght,a=void 0===s?7:s,n=Object(t.useState)(c.sortBy("price_change_percentage_24h")),i=Object(l.a)(n,2),r=i[0];i[1];return Object(O.jsxs)("div",{className:"biggest-gainers",children:[Object(O.jsxs)("div",{className:"gainer-title",children:[Object(O.jsx)("img",{src:"https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=5e90013"}),Object(O.jsx)("h2",{children:"Biggest Gainers"})]}),Object(O.jsx)("div",{className:"gainers-coins",children:r.slice(0,a).map((function(e,c){return Object(O.jsxs)("div",{className:"gainer-coin",children:[Object(O.jsx)("h2",{children:c+1}),Object(O.jsx)("img",{src:e.image,alt:"crypto"}),Object(O.jsx)("div",{className:"gainer-label",children:e.name}),Object(O.jsx)("span",{className:"gainer-ticker",children:e.symbol}),Object(O.jsxs)("div",{className:"coin-data",children:[Object(O.jsxs)("p",{className:"coin-price",children:["$",e.current_price]}),Object(O.jsxs)("p",{className:"coin-percent red",children:[e.price_change_percentage_24h.toFixed(2),"% ",Object(O.jsx)("span",{children:"(24h)"})]})]})]})}))})]})},f=function(e){var c=e.trending;return Object(O.jsxs)("div",{className:"trending",children:[Object(O.jsxs)("div",{className:"trending-title",children:[Object(O.jsx)("img",{src:"https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=5e90013"}),Object(O.jsx)("h2",{children:"Trending"})]}),Object(O.jsx)("div",{className:"trending-coins",children:c.coins.map((function(e){return function(e){return Object(O.jsxs)("div",{className:"trending-coin",children:[Object(O.jsx)("img",{src:e.item.thumb}),Object(O.jsx)("div",{className:"coin-label",children:e.item.name}),Object(O.jsx)("div",{className:"coin-ticker",children:e.item.symbol})]})}(e)}))})]})},N=function(e){e.isLoaded,e.news,e.btcFaG;var c=e.trending,s=e.chart;return Object(O.jsxs)("div",{className:"index",children:[Object(O.jsxs)("div",{className:"index-header",children:[Object(O.jsx)(k,{chart:s}),Object(O.jsx)(f,{trending:c})]}),Object(O.jsx)(g,{chart:s,length:50})]})},y=function(e){var c=e.news;return Object(O.jsx)("div",{className:"news",children:Object(O.jsx)(u,{news:c,length:50})})},w=function(e){var c=e.title;return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsx)("div",{className:"site-info",children:Object(O.jsxs)("aside",{children:[Object(O.jsx)("h4",{children:"Site Information"}),Object(O.jsxs)("div",{className:"site-info-links",children:[Object(O.jsx)("a",{href:"",children:"About / Contact Us"}),Object(O.jsx)("a",{href:"",children:"Contributors"})]}),Object(O.jsxs)("div",{className:"site-info-links",children:[Object(O.jsx)("a",{href:"",children:"Get our free newsletter"}),Object(O.jsx)("a",{href:"",children:"Privacy Policy"})]}),Object(O.jsxs)("div",{className:"site-info-links",children:[Object(O.jsx)("a",{href:"",children:"Site Map"}),Object(O.jsx)("a",{href:"",children:"Want to Become a Guest Blogger?"})]})]})}),Object(O.jsxs)("div",{className:"about-us",children:[Object(O.jsx)("div",{className:"footer-logo",children:Object(O.jsxs)("figure",{children:[Object(O.jsx)(m,{}),Object(O.jsx)("figcaption",{children:c})]})}),Object(O.jsxs)("div",{className:"about-content",children:[Object(O.jsx)("h4",{children:"About US"}),Object(O.jsx)("p",{children:"CryptoJunkies is powered by  people with a passion for blockchain and cryptocurencies. Contact us if you interested to contribue."})]}),Object(O.jsxs)("div",{className:"follow-us",children:[Object(O.jsx)("h4",{children:"Follow Us"}),Object(O.jsxs)("div",{className:"follow-us links",children:[Object(O.jsx)("a",{href:"https://twitter.com/CryptoJ58590975",children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAflAAAH5QFPDbM3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAadQTFRF////Var/TbPmVarqVarsUq3vVaruVKvuVa3vVqztVKvtVqzuVK3vVqvtVazuVKzvVq3uVazuVazuVazuVa3uVaztVazuVazuVavuVazuVazuVazuVazuVazuVazuVqzuVq3uV63uWK3uWa7uWq7uW67uW6/uXK/uXrDuX7HuYLHuYbHuYrLuY7LuZLPuZbPuZrPuZrTuarXvbbfvbrfvcLjvcrnvc7nvdLrvdbvverzver3ve73vfL3vfL7vfr7vf7/vgL/vgcDvgsDvhMHvhcLvhsLvh8Pvi8TvjMXvj8bvkMbwkMfwkcfwk8jwlcnwl8rwmMrwmsvwnMzwnczwns3wn83woM3woc7wos/wpdDwptHwqdLwq9PwrNPwrdTwsdXwt9jxuNjxudnxutnxu9rxvNrxvtvxwNzxwdzxw93xxd7xxt/xx9/xyeDxy+HxzeLxzuLxz+Px0eTx0uTx1eXx2efx2+jx3Ojx3Onx4evy4uvy4+zy5Ozy5u3y5+3y5+7y6O7y6e7y6u/y6+/y6/Dy7PDy7fDy7vHy7/Hy8PHy8PLy8fLyJ+tyzgAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAArZJREFUWMOtV/lDEkEUXuQQYTnkBvGRVEaHZNlBaYeddtmhZpkdRpYdYCcd2kF4lO0fHSsiO+/tDrss328z+30fzJuZN+8JggasTtHrD0YTiWjQ7xWdVsEQbO5ADzDoCbhtetUdnnAvqKA37OnQIbe4YqCJmMvSTN8ZAS4inVy5PQRNEbJr6x1x0IG4Q0vflQRdSHapR88HuuFTiaWlGwygmzr4wBB8ZP1gECgOjqRRgySzF/Y4GEZceR5C0AJCivMLLWH7VFsirRlE6nvpghbh2rr/sVYNYrX84GnO3Hd2aubCAJ33bBqEmbl0itB2PdyQZBQGAVKn5oYbX8Kb+Y/NX9eeYIcjJWkLP2/c+yItKrOcnCfdLP2dhBx2fpKU+HFc+dFdNQgw9NSKhBxmGP3XS7efHm58DFTzP5u/98usooKSXmMMKlL5hDLbWwUnWvGSTFu5s6M+zkksKicZulMQkcF8jff+Yl9tfJPVr51h6aLgRQbjdery7JA8vssafER0r+BHMwPfFBF7NXv9AWuwiOh+IYiPzdFfEgfPETsoRNmJweLUrXWOwSNkEBUS7ETqt8TFJDJIYAN4yzcYJgZoCXCZqy/3kSWQIBZ5BgtAgoi3EbIfOAbjQLbRS65/f/6vlv57P5CDJBKDA4dOa0VympBFcpkAhjT/QDlDyE58nWXktQwmCLV6nVFCkZHRCGOBpssATWky9r5RjWCWMt00qdYw+noJ6/+MqpSONprWty1KrH71vAoprPmwHCvgDRhR+xWP6tO2O3f12T+kL+U4T5vycc1OL3zeIOGrTKZ5jyv7vJ8jl2l17mCT5x0VGLn55YZ6/eWVPU0LDFriZHJj9/MvHk+MjWR0lTjmiyzTZZ75QtN8qWu+2DZd7ptvONrQ8phvusy3fW1oPM23vm1ovo21//8Bmj6Wc/HxNSgAAAAASUVORK5CYII="})}),Object(O.jsx)("a",{href:"https://t.me/CryptoJunkie5",children:Object(O.jsx)("img",{src:"data:image/png;base64,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"})}),Object(O.jsx)("a",{href:!0,children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAflAAAH5QFPDbM3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPZQTFRF////VVWqM02ZQFWVOVWXOlqUPFmZPFuXO1iWPFiXO1mZO1iYO1mZO1iYO1mYO1qZO1mYO1iYO1qXO1mYOlmXO1mYO1mYO1mYO1mZO1mXO1mYO1mYO1mYO1mYO1mYPVqZQ2CcRGGdRWGdSmWgTWihTWmiUGujUWujWnOoXXaqZX2uZ36va4KxbIOyeIy4eI24eo65f5K8hZe/iZvBipzCjJ3CjJ7DkKHEkaLFlKXHlaXHmqrKnazLn67No7HPpLLPp7TRqbbSqrfTq7jTrbnUrrrUrrvVucTaztXl0djn1dzp2uDs2+Ds3+Tu8/X5+/z9/Pz9////575kmQAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAflJREFUWMOtl9d2wjAMhk1ZIWRBEkYAd1K66N4bWjrpyPu/TIESDhApVo75L2P0HSxrMoYoqWiGZZc9r2xbhqYkWSyl8sUan1GtmE9RrZd0t8EBNVx9iWCeUCscVUVNiOyzJR6pUjbSPO1woZw0bp+pcoKqGcw+V+ck1XOw90xOlgn4MlHgMVQIE0weS2bo/jym5vyQwfy3fXLbe+k9P3Wv5z058xZp5P32vvxA/dBrTscDEj/nvz4O4M5U/ML29/6UPsPnk6hOwPG/+TMN6AN5EbylCv+BR18A4Oo4/5H8/RYCKv/1QYftNya2H91Op3MF/UYfAVwYsBvYv+PR5I7qXwM+3A8AZzigMayTeeTwIAAcRQR0fgAoygCKg/pfkwHUkkyBvq80m83jAHDaHGodJihMgz5f+iG9wQCNGUTAKwwwmEUEPMAAi9lEwAUMsFmZCDiEAWXmEQE7MMAjA1oYALxCq91u3wSmd+2hlrEr2FwmEgdOtOQAFhxIdIABhzIdoMHJRAco8uksXVDkSxpWVCmAUVHFyjoF4EY1FgpAj2ptBMC4tSHNlQBQI9u7GDBp7/CAIQZko0ccIcARDFkiwMyQBY15AkA9Ixo0BYCccNSNBpjiYXt1a6w12rAtPe7LLxwLWHnkly75tW8Bi6f86ruA5Tve+v8H8zzT+VH/LzgAAAAASUVORK5CYII="})})]})]})]}),Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("div",{className:"copy",children:[Object(O.jsx)("span",{children:"\xa9 2021 CryptoJunkies "}),Object(O.jsx)("span",{children:"| Developed by nickglu86"})]}),Object(O.jsx)("div",{className:"footer-links",children:Object(O.jsxs)("nav",{className:"footer-nav",children:[Object(O.jsx)(o.b,{to:"/",children:"Crypto Index"}),Object(O.jsx)(o.b,{to:"/news",children:"News"}),Object(O.jsx)(o.b,{to:"/nft",children:"NFT"}),Object(O.jsx)(o.b,{to:"/metrics","data-dev":"indev",children:"Metrics"}),Object(O.jsx)(o.b,{to:"/invest","data-dev":"indev",children:"Invest"})]})})]})]})})},C=s.p+"static/media/coindesk.9bae8ee5.svg",J=s.p+"static/media/cointelegraph.79ed764e.svg",S=s.p+"static/media/theblock.0e4ecbcf.svg",E=s.p+"static/media/coingecko.a3b178db.png",I=s.p+"static/media/coinmarketcap.3fb3b87a.svg",z=s.p+"static/media/defipulse.f8b058af.png",V=function(){return Object(O.jsxs)("section",{className:"crypto-learn",children:[Object(O.jsxs)("div",{className:"contrainer",children:[Object(O.jsx)("h3",{children:"Indexes"}),Object(O.jsxs)("div",{className:"resources",children:[Object(O.jsx)("a",{href:"coingecko.com",children:Object(O.jsx)("img",{className:"svg-logo coingecko",src:E})}),Object(O.jsx)("a",{href:"coinmarketcap.com",children:Object(O.jsx)("img",{className:"svg-logo",src:I})}),Object(O.jsx)("a",{href:""})]})]}),Object(O.jsxs)("div",{className:"contrainer",children:[Object(O.jsx)("h3",{children:"News"}),Object(O.jsxs)("div",{className:"resources",children:[Object(O.jsx)("a",{href:"cointelegraph.com",children:Object(O.jsx)("img",{className:"svg-logo",src:J})}),Object(O.jsx)("a",{href:"coindesk.com",children:Object(O.jsx)("img",{className:"svg-logo",src:C})}),Object(O.jsx)("a",{href:"theblockcrypto.com",children:Object(O.jsx)("img",{className:"svg-logo block",src:S})})]})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h3",{children:"Defi"}),Object(O.jsxs)("div",{className:"resources",children:[Object(O.jsx)("a",{href:"defipulse.com",children:Object(O.jsx)("img",{className:"svg-logo defi-pulse",src:z})}),Object(O.jsx)("a",{href:"stakingrewards.com",children:Object(O.jsx)("img",{className:"svg-logo staking-rewards",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAACQCAMAAAAV4x13AAABnWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40MDI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTQ0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpFLGY4AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAKjUExURRsbG9TU1OLi4lJSUvHx8WJiYsTExP///6mpqXBwcCgoKKSkpCkpKSQkJDExMUZGRo2NjUVFRZubm1RUVDc3N2RkZMbGxjg4OH9/f2NjYx8fH1NTU7e3t9/f3/n5+X5+fru7u/7+/pGRkTo6OhwcHPz8/P39/W9vb6+vr2xsbGtra5ycnNnZ2fDw8Pv7+1BQUKqqqq2trTAwMB4eHvPz80FBQR0dHS4uLt3d3SIiIrKysnFxcfLy8uTk5ElJSSAgILa2tvf39zk5OZ6enpWVlaGhoaampnx8fHR0dO7u7sfHx8nJycDAwPX19b+/v/T09CcnJ729vbi4uOrq6piYmGdnZ3d3d+np6S0tLa6ursvLy+Hh4Z+fnz8/PyYmJsrKyjIyMj09PZSUlHp6emVlZXJyciEhIezs7F1dXVtbW4KCgtjY2HZ2dlpaWqWlpaOjo/r6+sjIyKenp9XV1Z2dnYSEhLCwsImJiVhYWDU1NdLS0iwsLOPj4+vr6yMjI/b29uXl5T4+PkRERNPT03Nzc4yMjM/PzyoqKoiIiJaWlkhISLOzs+/v76ioqIGBgTMzM9ra2tvb28zMzM7OzisrK9HR0cXFxUdHR2lpaYWFhcPDw4CAgMHBweDg4LGxsbW1tYuLi1lZWUtLS15eXrm5uXl5eY+Pj6ysrLq6uubm5jQ0NFxcXNzc3IqKioODg8LCwpOTk6Kiovj4+NbW1t7e3rS0tG1tbaCgoFVVVaurq09PT5eXl1dXV0pKSry8vOfn53h4eGZmZtDQ0JCQkDY2Nr6+voeHhzs7O5qamk1NTXt7e1ZWVu3t7ejo6C8vL25ubpKSkiUlJZmZmX19fWhoaM3NzWpqak5OTtfX119fX3V1dUNDQ2BgYGFhYY6OjoaGhjw8PAtsX7kAAAziSURBVHja7Jz3Q1NJHsAf2cAkSAQiQiAYRAFRyiIIYkEEFxCl6q4F7K5lz3723nvvbVfdta9le2+35fa2l+v97k+5+U55Je8loBsS9L7fXzKZN3llPvOt80AhKN1MFJwCRIKCSBAJCiJBJCiIBJGgIBIURIJIUBAJIkFBJIgEBZEgEhREgoJIEAkKIkEkKIgEkaAgEhREgkhQEAkiQUEkiAQFkSASFESCgkj+r5HY7Dip3QnJBE+KoiTgrHYTJLa8VIXLCJzWboCEqYcqyCTCSDT1QCbdAck4T7xiIcgkMkhsRalxSgBx4NSGHUkA9UAmkUESTD2QSQSQRPXyn/0kZ7rw8IluZBIBJClGHl53FCEJgojdhnoSfiRRRvVg9ROHJEJIEjIJOxK3QT2IHxHihFZcLDIJIxKvIBKv1hf1RMSXdN4VF4UzHAYkqlmSTAxECHcm6Q5kEjYkyYofEzH5sTYxgDmTDIJMwoYkQzEykUTUqWfOJIUgk7AhYTl7tFMyMRERKGzIJFxI7CKSEkxSTESEM3EQZBImJOlSB5w6AxZrmHTmTJwEmYQJCSORBOqSGICI6kw0JvGh24+fOHjw4NHGrgba1afbTvAiencruhRJiqoCOiYpI4psxOxMiFpoCcqk6rW567a/u2vVyM5cP4aeraex6wna1ePB56qhh5CitvouRNKP3l3vrkQisg7/cBhm3TPB5EyIat+CMHlLlmBiV1cJf1VRUdHY5UiidTdfPfzRRcI1gM1vlLk+3yshyuhMCJkgRkUHOuMY3e+X+FjXr2jz12FFQm+94FFFwp4jMQAR5spT82zSmeg35eMCnHDnfP2vn3kYJO66urq2X4pEOfeoIonjqXlAIjoxvLOixAY44TP0WOW+tkWrPiyDYX0eAslDCiBJTKDiWVgCl859NJHwwnwyNfe6XV6nw5nU4R5jdJBwYb+qG8paM5Kc/L7Lrh1b3mkkVcm14w1WqL6p6I1sayQDePMNKFxfFf2Z5bkH2zM7NR31M286Zm429uVsqJBHPx5cnmlAsi1maW5bQWiR8ABKI8JQeIGVOzo2KBK39Qlfh2PjWXNrdVn8xWQS43Klgea4XK5BMEG509nvp+Qt90PS1EKH7DhEyIv0EwiOo58LG3+EX5cdqZJX+FMp/HzGpT306HMBkLDnWs9aPk8Ls7MJOezrUfqrbdAYstflajkErQW0qxoaFYvT2K1dXcRPAveR3++UoqyEb389C8fWX9CQ5C9hw4dN2hRKJF6+4CURh1sg4hFYQqIVjCRdTGyWYlAz/vib2Pp5Xvvls/TrXPXbjq0GJBtm0NbQPjr3Doeml8oAsJAv+TlpUk3BhwdCMhpGQBBeflb199/DgedkfJkLfTehdU3cWf4UObTsPTXMADeaBTda5OLHsl6SSGLknSjF5SFEwhe8JJKgGTJZbknPSPLblLdnyOQysJPd/o4WIxuRPKU72W/0SDYBS9ce4odEkw9M8VwQJD1oO41CbJ6lDU7MFupzBUakyjVCztNGHiEFuqEz+sj7kFnyGcN1AcnmYu37+qqQIeHVlGRBBMLcWI7GPAgw8F3HFF1IbJZjlWzs/N7pfFmTco9nO+14wuPxOEjzXpiImZuajsCgfA1JAZizkr7EjOTs7v0QMigbmZGBICRtbO3SgVnBkGSC9venjf/A8Putrfd+po1lkE/Sz4Vgt4axqfeJy+3kbnto7bH8Zf+gjT9qSFzVdHzODjjR4sM1qSqSw0C51b7hxg+0URMyJLwwryPCF7nXEAGooZjTnDhayHtbxPBZNyaKrkH029Pc/B6gz8HM2lURE3EkPvb4S4kZySBY20y3wO2OhVhvpmqaTEj+bKdS8codOHiekHa6PrJeIWKVD6WWzE5RFnO7lUabrYQUUjix9CL3qOFklZ3TdOhsFQn1QfTgUiASo6ppb2GBWU9fRWlZHTIk+pfp+IQbnAkjoAXHKf7JpbXkj5I/qPw8xw8JISd/PMO87mwRjjEkmUwPdhMLJJ9ATzPoBBSWhtLPfhqBXkHykpbvCJmm5SfgU5roJ/im75ndiqZeYTEhe2gHCxNGjhmhPmCJVJ8D/NepmmEYJZCACbxzF3qmNSwPmS+xm4iYnYmems2YXAaUk/OEL1TerfJHwuxK1BwWdr0tkTAzNo9YINmrBQ3Uqh2SXltoThAkLUCwDk47nMkA2lxFu3bRz1vMbq2ZA4uBLcJX1ZMUjB7ETNoL4j6+5N0A8gJvegSSkyzvGvXvDR3G1w+CxGEi4u9MVMevWSs1uQwmzVP/VqmoZzIg8fWdN1RcdKCY9yzjLeiRiJSlP0dygn78IEbVBEWyhAWuS4yKM5d21bKbonbL1XiXNk+y3JZH7eSF/V+XiaEy8hvDc5P5MuvVpYoyUklZWx46JE4zEaMzkUTcWpkrSlentBTfCe6kJ96H59jiMyLJrBWh5mwdEiG/7RDJJZ2CWiL5IjU1FWLTSbxruhEJ2KdF9POfYIjOsbX/JTlKMwtWimsXTDee0iHhtbaJOu3U8pLx0kKX7M4OFZIUMxGDM7Frjl/dMzE5G79yw0eVajI+VUZVOiST2M9fvr5iqgHJSx9C78iOkIxXuHMOiGSAuMTPPLJ4kTb/+6QqoNs51AwcBbtFV9VaRSmtgGgQxvaBvEhJ+3aV/XcmJNlpwpb5FVRWru7PZ2hfiJCorzkm2i1KLAYi2p6J1xSSGQRCIkUocjZ4lFaBhBdZZkIiNve04KUi6b9gGxjMsR0h2QyDhwTxJYBksktVE/AlP/nd4Tra9xUNsnw8tvpcVn2gf/ZNmAkzEnb9GN68KJEUpEMsd/cp8DPD7KFB4rYgonMmeiJa6BusmkJluJoD0ti/ROD5hn5eZF1zIKxVkzmJZMub3MYrz3eAhN3cHN7VO2Becg9W+3EZsd7hR4/XiTzpCu07JZ7qCxoG0K8NoD0UZBZfSz3NSJZo4cdHHIntQJmyjttiGNcWGiTCdsbZzL2gBr0MRk04E77NFXjvvR78YxorwtrfhiQiUyzo4hM+EcyzGD77Wx2SnrLUkTSkAyTPwv2yFL81KyCSIRA+pELrzTTpom6vV9Zxu9jKH6tJy8tK4KoLYK3Xqzt5fkjgCSpZELBM5CXZ9CIlJ9SC2pnQIInTNhDHmZ3JCKObEc4kI1hhHuQ++9WoXWNLWRzFbNFb4jqT2bKNnbZz0Wiv4o/kNmjA9Q6QtEPIkFaXO/XvZUGyd5bOsYRyNQw/cuuycyNYA5Y+HOJVT6Yz4/jNsh/BiNRbfdp2x1og2QpReGXGJccgNXu/Dsnn0oqCmBvUMZU0hwaJsVyUF2VwJn5EpDOJD7qjSKXwff1ZS9n+7vL1EsmxNP1RAxJWochKDo6E7OtMjauwmjb/whSmp260yDEh1hO+JpuFfx7WHmg4sx8SlnQaa1wF1bqOsSFy7/513jj+EgRbJXH+oRh3Ju6O35+//bV2xunHed9ll0BCfpKHjhb7IyELYdO8MTgS3zcy8PQGqXGtgRGsOpK/Q14wa59e30UyvEuL6OtVegcskGSfl0dl9k52blSfc9TrIUJit6i9p3gmeHXFU93oJO3NO1vw8x4UkeGUaYWya9vi92dlAZLMIl5w7WXbbkLyCayDPwRHQsg1NnWn+tYEKzvCvM0u5PslvOb25AU57jU4La/0kI/h0ALerjjHF2beGgskhIxmCe7eV8erQXBBHdf5uA98oSuoJAbfOTSEYlpemdThiSevqJ3W0G6dP1V9tub3ucd/yVbrptE1K3PIKnVrvwPJzp+ad7lT74XZGmreaQpcZ28/uGxljqFn5Oncrw5uaAzlrqI9qdNEdNUXJ4mkHC7XqtiPxn93ecC9d7Gb682wUJhU/ft1RPujxfQIPt7mfymlLLppBO86/DFEojJxELvVSxDxngl2gzPpoDDf1eJ7GdbPmu8KP4OsKXbi44hExwQ0weolCPF+nepMEiP5eFd49MTeClJqyWOJxMgEvjut369TnUlEDbjvU+2uPiWPKRITE7e1s0+R/7AgOaLPlzlH7LbMyiWPLRJ/JrzIZQv4fl2kn9A3PGHeYndTM3mMkahVeodW+mLWyfL9umiC0vVIVDfhkIVQzTolJ3g79ZojSmiRqEzSxTup+lqvLc/wBjf+UVx4kOj+CtFrsE6m/9KViFMcJiQqk2TNOln9ly6vDac4XEj0bxCBdbL4J3ax0Q4EEk4kBiZm9UjMSMbJDTeSQDkiqkfkkBCnZYke1SOCSExMUD0ijsTAJCkjHacz8khUJtFuVI9uggSSd1SP7oUEBZEgEhREgoJIEAkKIkEkKIgEkaD8rz06EAAAAAAQ5G89yKWQEiUoQYkSlChBiRKUKEEJSpSgRAlKlKAEJUpQogQlSlCiBCUoUYISJShZCe4VO8j+wILkAAAAAElFTkSuQmCC"})}),Object(O.jsx)("a",{href:""})]})]})]})},B=function(){var e=Object(t.useState)(!1),c=Object(l.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)([]),i=Object(l.a)(n,2),j=i[0],m=i[1],u=Object(t.useState)([]),p=Object(l.a)(u,2),g=p[0],k=p[1],f=Object(t.useState)([]),C=Object(l.a)(f,2),J=C[0],S=C[1],E=Object(t.useState)([]),I=Object(l.a)(E,2),z=I[0],B=I[1],M=Object(t.useState)([]),R=Object(l.a)(M,2),L=R[0],P=R[1];Object(t.useEffect)((function(){Promise.all(h.map((function(e){return d.a.get(e)}))).then((function(e){var c=Object(l.a)(e,5),s=c[0].data,t=c[1].data,a=c[2].data,n=c[3].data,i=c[4].data;m(t),k(s),S(a),B(n),P(i.data)})).finally((function(){a(!0)}))}),[]);return s?Object(O.jsx)(o.a,{basename:"/crypto-junkies-alpha",children:Object(O.jsxs)("main",{children:[Object(O.jsx)(A,{globalData:L,btcData:j.filter((function(e){return"btc"===e.symbol}))[0]}),Object(O.jsx)(x,{}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",render:function(e){return Object(O.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{isLoaded:s,news:g,chart:j,btcFaG:z,trending:J}))},exact:!0}),Object(O.jsx)(b.a,{path:"/index",render:function(e){return Object(O.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{chart:j,trending:J}))}}),Object(O.jsx)(b.a,{path:"/news",render:function(e){return Object(O.jsx)(y,Object(r.a)(Object(r.a)({},e),{},{news:g}))}}),Object(O.jsx)(b.a,{path:"/explore",render:function(e){return Object(O.jsx)(V,{})}})]}),Object(O.jsx)(w,{})]})}):Object(O.jsx)("div",{className:"loader"})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.1bb356b5.chunk.js.map