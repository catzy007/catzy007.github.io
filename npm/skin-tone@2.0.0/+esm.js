/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/skin-tone@2.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"/npm/unicode-emoji-modifier-base@1.0.0/+esm.js";const n=e,o=new Map([["none",""],["white","🏻"],["creamWhite","🏼"],["lightBrown","🏽"],["brown","🏾"],["darkBrown","🏿"]]);var r=(e,r)=>{if(!o.has(r))throw new TypeError(`Unexpected \`skinTone\` name: ${r}`);return e=e.replace(/[\u{1f3fb}-\u{1f3ff}]/u,""),n.has(e.codePointAt(0))&&"none"!==r&&(e+=o.get(r)),e};export{r as default};
//# sourceMappingURL=/sm/313dfc58716c61a589be729679b0014877204443919a69d96c6a0572d6e631ff.map