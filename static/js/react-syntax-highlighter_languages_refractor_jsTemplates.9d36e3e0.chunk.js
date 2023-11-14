"use strict";(self.webpackChunkso_docs=self.webpackChunkso_docs||[]).push([[7661],{750:e=>{function t(e){!function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,a=r.inside["interpolation-punctuation"],s=r.pattern.source;function o(t,r){if(e.languages[t])return{pattern:RegExp("((?:"+r+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function i(e,t){return"___"+t.toUpperCase()+"_"+e+"___"}function p(t,n,r){var a={code:t,grammar:n,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function l(t){var n={};n["interpolation-punctuation"]=a;var s=e.tokenize(t,n);if(3===s.length){var o=[1,1];o.push.apply(o,p(s[1],e.languages.javascript,"javascript")),s.splice.apply(s,o)}return new e.Token("interpolation",s,r.alias,t)}function u(t,n,r){var a=e.tokenize(t,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),o=0,u={},c=p(a.map((function(e){if("string"===typeof e)return e;for(var n,a=e.content;-1!==t.indexOf(n=i(o++,r)););return u[n]=a,n})).join(""),n,r),g=Object.keys(u);return o=0,function e(t){for(var n=0;n<t.length;n++){if(o>=g.length)return;var r=t[n];if("string"===typeof r||"string"===typeof r.content){var a=g[o],s="string"===typeof r?r:r.content,i=s.indexOf(a);if(-1!==i){++o;var p=s.substring(0,i),c=l(u[a]),f=s.substring(i+a.length),y=[];if(p&&y.push(p),y.push(c),f){var d=[f];e(d),y.push.apply(y,d)}"string"===typeof r?(t.splice.apply(t,[n,1].concat(y)),n+=y.length-1):r.content=y}}else{var v=r.content;Array.isArray(v)?e(v):e([v])}}}(c),new e.Token(r,c,"language-"+r,t)}e.languages.javascript["template-string"]=[o("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),o("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),o("svg",/\bsvg/.source),o("markdown",/\b(?:markdown|md)/.source),o("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),o("sql",/\bsql/.source),t].filter(Boolean);var c={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function g(e){return"string"===typeof e?e:Array.isArray(e)?e.map(g).join(""):g(e.content)}e.hooks.add("after-tokenize",(function(t){t.language in c&&function t(n){for(var r=0,a=n.length;r<a;r++){var s=n[r];if("string"!==typeof s){var o=s.content;if(Array.isArray(o))if("template-string"===s.type){var i=o[1];if(3===o.length&&"string"!==typeof i&&"embedded-code"===i.type){var p=g(i),l=i.alias,c=Array.isArray(l)?l[0]:l,f=e.languages[c];if(!f)continue;o[1]=u(p,f,c)}}else t(o);else"string"!==typeof o&&t([o])}}}(t.tokens)}))}(e)}e.exports=t,t.displayName="jsTemplates",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsTemplates.9d36e3e0.chunk.js.map