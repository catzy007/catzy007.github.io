/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/char-regex@1.0.2/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var u=()=>{const u="\\ud800-\\udfff",d=`[${u}]`,f="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",c="\\ud83c[\\udffb-\\udfff]",D=`[^${u}]`,$="(?:\\uD83C[\\uDDE6-\\uDDFF]){2}",e="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93]",a=`${`(?:${f}|${c})`}?`,n="[\\ufe0e\\ufe0f]?",F=n+a+`(?:\\u200d(?:${[D,$,e].join("|")})${n+a})*`,o=`(?:${[`${D}${f}?`,f,$,e,d,b].join("|")})`;return new RegExp(`(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)|${c}(?=${c})|${o+F}`,"g")};export{u as default};
//# sourceMappingURL=/sm/efec424031dde72a8b029dbb662bf3e26ae4435e55cbb834eb208b9bd01dfd76.map