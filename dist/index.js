"use strict";var P=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var b=P(function(G,y){
function R(a,r,i,v,t,e,u,c){var s,f,g,q,o,n,l,d,x;for(s=i.data,f=e.data,g=i.accessors[0],q=e.accessors[1],l=a+r,x=0,o=t,n=c,d=0;d<l;d++)q(f,n,g(s,o)),n+=u,x+=1,x===a?(x=0,o=t):o+=v;return e}y.exports=R
});var p=P(function(H,j){
var h=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(a,r,i,v,t,e,u,c){var s,f,g,q,o,n,l;if(a<=0)return e;if(r<0&&(r=0),g=h(i),q=h(e),g.accessorProtocol||q.accessorProtocol)return w(a,r,g,v,t,q,u,c),e;for(o=a+r,l=0,s=t,f=c,n=0;n<o;n++)e[f]=i[s],f+=u,l+=1,l===a?(l=0,s=t):s+=v;return e}j.exports=z
});var m=P(function(I,M){
var C=require('@stdlib/strided-base-stride2offset/dist'),A=p();function B(a,r,i,v,t,e){var u,c;return r<0&&(r=0),u=C(a,v),c=C(a+r,e),A(a,r,i,v,u,t,e,c)}M.exports=B
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=m(),E=p();D(O,"ndarray",E);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
