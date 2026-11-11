var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},u={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d=1e3,f=1001,p=1002,m=1003,h=1004,g=1005,_=1006,v=1007,y=1008,b=1009,x=1010,S=1011,C=1012,w=1013,T=1014,E=1015,D=1016,O=1017,k=1018,A=1020,j=35902,M=35899,N=1021,P=1022,F=1023,I=1026,L=1027,ee=1028,te=1029,ne=1030,R=1031,re=1033,z=33776,B=33777,V=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,H=37820,Oe=37821,ke=36492,Ae=36494,U=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,Ie=2301,Le=2302,Re=2303,ze=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,W(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function ft(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*lt}function Et(e){return e*ut}function Dt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:W(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mt(e,t){if(t.constructor===Float32Array)return e;let n=jt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Nt(e,t){if(t.constructor===Float32Array)return e;let n=jt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Pt={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:ft,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Nt,denormalize:Mt},K=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return It.copy(this).projectOnVector(e),this.sub(It)}reflect(e){return this.sub(It.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},It=new q,Lt=new Ft,Rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(zt.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(zt.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(zt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zt=new Rt,Bt=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vt=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ht(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var Ut=Ht();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=Qe(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new q,$t=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=f,i=f,a=_,o=y,s=F,c=b,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=dt(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case d:e.x-=Math.floor(e.x);break;case f:e.x=e.x<0?0:1;break;case p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case d:e.y-=Math.floor(e.y);break;case f:e.y=e.y<0?0:1;break;case p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new $t({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},on=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new q,cn=new on,ln=new q(0,0,0),un=new q(1,1,1),dn=new q,fn=new q,pn=new q,mn=new on,hn=new Ft,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ft(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},vn=0,yn=new q,bn=new Ft,xn=new on,Sn=new q,Cn=new q,wn=new q,Tn=new Ft,En=new q(1,0,0),Dn=new q(0,1,0),On=new q(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new gn,r=new Ft,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new Rt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new q(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Vn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ut.workingColorSpace){if(e=pt(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=Ln[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ut.workingToColorSpace(Hn.copy(this),e),Math.round(ft(Hn.r*255,0,255))*65536+Math.round(ft(Hn.g*255,0,255))*256+Math.round(ft(Hn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ue){Ut.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=gt(Rn.h,zn.h,t),r=gt(Rn.s,zn.s,t),i=gt(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Vn;Vn.NAMES=Ln;var Un=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new q,Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new q,Xn=new q,Zn=new q,Qn=new q,$n=new q,er=new en,tr=new en,nr=new en,rr=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,or):or.fromBufferAttribute(r,t),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),hr.subVectors(this.max,mr),cr.subVectors(e.a,mr),lr.subVectors(e.b,mr),ur.subVectors(e.c,mr),dr.subVectors(lr,cr),fr.subVectors(ur,lr),pr.subVectors(cr,ur);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-pr.z,pr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,pr.z,0,-pr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-pr.y,pr.x,0];return!vr(t,cr,lr,ur,hr)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,cr,lr,ur,hr))?!1:(gr.crossVectors(dr,fr),t=[gr.x,gr.y,gr.z],vr(t,cr,lr,ur,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new q,new q,new q,new q,new q,new q,new q,new q],or=new q,sr=new ir,cr=new q,lr=new q,ur=new q,dr=new q,fr=new q,pr=new q,mr=new q,hr=new q,gr=new q,_r=new q;function vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_r.fromArray(e,a);let o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),s=t.dot(_r),c=n.dot(_r),l=r.dot(_r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var yr=new q,br=new K,xr=0,Sr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=E,this.version=0,this._normalizationScale=e===void 0?void 0:jt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Mt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Nt(e,this.array):Math.round(e*t)}},Cr=class extends Sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wr=class extends Sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tr=class extends Sr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Er=new ir,Dr=new q,Or=new q,kr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Dr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Or)),this.expandByPoint(Dr.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ar=0,jr=new on,Mr=new Nn,Nr=new q,Pr=new ir,Fr=new ir,Ir=new q,Lr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ar++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?wr:Cr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Rt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jr.makeRotationFromQuaternion(e),this.applyMatrix4(jr),this}rotateX(e){return jr.makeRotationX(e),this.applyMatrix4(jr),this}rotateY(e){return jr.makeRotationY(e),this.applyMatrix4(jr),this}rotateZ(e){return jr.makeRotationZ(e),this.applyMatrix4(jr),this}translate(e,t,n){return jr.makeTranslation(e,t,n),this.applyMatrix4(jr),this}scale(e,t,n){return jr.makeScale(e,t,n),this.applyMatrix4(jr),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(this.boundingBox.min,Pr.min),this.boundingBox.expandByPoint(Ir),Ir.addVectors(this.boundingBox.max,Pr.max),this.boundingBox.expandByPoint(Ir)):(this.boundingBox.expandByPoint(Pr.min),this.boundingBox.expandByPoint(Pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(Pr.min,Fr.min),Pr.expandByPoint(Ir),Ir.addVectors(Pr.max,Fr.max),Pr.expandByPoint(Ir)):(Pr.expandByPoint(Fr.min),Pr.expandByPoint(Fr.max))}Pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ir.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ir));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ir.fromBufferAttribute(a,t),o&&(Nr.fromBufferAttribute(e,t),Ir.add(Nr)),r=Math.max(r,n.distanceToSquared(Ir))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Sr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let l=new q,u=new q,d=new q,f=new K,p=new K,m=new K,h=new q,g=new q;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new q,b=new q,x=new q,S=new q;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Sr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ir.fromBufferAttribute(e,t),Ir.normalize(),e.setXYZ(t,Ir.x,Ir.y,Ir.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Sr(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Je,this.updateRanges=[],this.version=0,this.uuid=dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function zr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=dt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Br=new q,Vr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:jt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix4(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyNormalMatrix(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.transformDirection(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Sr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Mt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Nt(e,this.data.array):Math.round(e*t)}},Hr=new q,Ur=new q,Wr=new Rt,Gr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Hr.subVectors(n,t).cross(Ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wr.getNormalMatrix(e),r=this.coplanarPoint(Hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kr=0,qr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kr++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Vn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Gr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Jr=class extends qr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Vn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yr,Xr=new q,Zr=new q,Qr=new q,$r=new K,ei=new K,ti=new on,ni=new q,ri=new q,ii=new q,ai=new K,oi=new K,si=new K,ci=class extends Nn{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type=`Sprite`,Yr===void 0){Yr=new Lr;let e=new Rr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute(`position`,new Vr(e,3,0,!1)),Yr.setAttribute(`uv`,new Vr(e,2,3,!1))}this.geometry=Yr,this.material=e,this.center=new K(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&G(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Zr.setFromMatrixScale(this.matrixWorld),ti.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Qr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;li(ni.set(-.5,-.5,0),Qr,a,Zr,r,i),li(ri.set(.5,-.5,0),Qr,a,Zr,r,i),li(ii.set(.5,.5,0),Qr,a,Zr,r,i),ai.set(0,0),oi.set(1,0),si.set(1,1);let o=e.ray.intersectTriangle(ni,ri,ii,!1,Xr);if(o===null&&(li(ri.set(-.5,.5,0),Qr,a,Zr,r,i),oi.set(0,1),o=e.ray.intersectTriangle(ni,ii,ri,!1,Xr),o===null))return;let s=e.ray.origin.distanceTo(Xr);s<e.near||s>e.far||t.push({distance:s,point:Xr.clone(),uv:rr.getInterpolation(Xr,ni,ri,ii,ai,oi,si,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function li(e,t,n,r,i,a){$r.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ei.copy($r):(ei.x=a*$r.x-i*$r.y,ei.y=i*$r.x+a*$r.y),e.copy(t),e.x+=ei.x,e.y+=ei.y,e.applyMatrix4(ti)}var ui=new q,di=new q,fi=new q,pi=new q,mi=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){di.copy(e).add(t).multiplyScalar(.5),fi.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(di);let i=e.distanceTo(t)*.5,a=-this.direction.dot(fi),o=pi.dot(this.direction),s=-pi.dot(fi),c=pi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(di).addScaledVector(fi,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,ee=E-F*D,te=O-P*A,ne=k-F*A,R=j-P*N,re=M-F*N,z=R*ne-re*te,B=L*re-ee*R,V=te*ee-ne*L;if(r){if(z<0||B<0||V<0)return null}else if((z<0||B<0||V<0)&&(z>0||B>0||V>0))return null;let ie=z+B+V;if(ie===0)return null;let ae=I*(z*D+B*A+V*N);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hi=class extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Vn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gi=new on,_i=new mi,vi=new kr,yi=new q,bi=new q,xi=new q,Si=new q,Ci=new q,wi=new q,Ti=new q,Ei=new q,Di=class extends Nn{constructor(e=new Lr,t=new hi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){wi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ci.fromBufferAttribute(s,e),a?wi.addScaledVector(Ci,r):wi.addScaledVector(Ci.sub(t),r))}t.add(wi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vi.copy(n.boundingSphere),vi.applyMatrix4(i),_i.copy(e.ray).recast(e.near),vi.containsPoint(_i.origin)===!1&&(_i.intersectSphere(vi,yi)===null||_i.origin.distanceToSquared(yi)>(e.far-e.near)**2)||(gi.copy(i).invert(),_i.copy(e.ray).applyMatrix4(gi),(n.boundingBox===null||_i.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ei.copy(s),Ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ei);return l<n.near||l>n.far?null:{distance:l,point:Ei.clone(),object:e}}function ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,bi),e.getVertexPosition(c,xi),e.getVertexPosition(l,Si);let u=Oi(e,t,n,r,bi,xi,Si,Ti);if(u){let e=new q;rr.getBarycoord(Ti,bi,xi,Si,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};rr.getNormal(bi,xi,Si,t.normal),u.face=t,u.barycoord=e}return u}var Ai=class extends $t{constructor(e=null,t=1,n=1,r,i,a,o,s,c=m,l=m,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ji=new kr,Mi=new K(.5,.5),Ni=new q,Pi=class{constructor(e=new Gr,t=new Gr,n=new Gr,r=new Gr,i=new Gr,a=new Gr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=new on,Ii=class e{constructor(){this.coordinateSystem=Ye,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Pi),n[e].setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Pi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Li=class extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Vn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ri=new q,zi=new q,Bi=new on,Vi=new mi,Hi=new kr,Ui=new q,Wi=new q,Gi=class extends Nn{constructor(e=new Lr,t=new Li){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ri.fromBufferAttribute(t,e-1),zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new Tr(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(r),Hi.radius+=i,e.ray.intersectsSphere(Hi)===!1)return;Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ki(this,e,Vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ki(this,e,Vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ki(this,e,Vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ki(this,e,Vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ri.fromBufferAttribute(s,i),zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ri,zi,Ui,Wi)>r)return;Ui.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ui);if(!(c<t.near||c>t.far))return{distance:c,point:Wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var qi=new q,Ji=new q,Yi=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)qi.fromBufferAttribute(t,e),Ji.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+qi.distanceTo(Ji);e.setAttribute(`lineDistance`,new Tr(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Xi=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zi=class extends $t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qi=class extends $t{constructor(e,t,n=T,r,i,a,o=m,s=m,c,l=I,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$i=class extends Qi{constructor(e,t=T,n=301,r,i,a=m,o=m,s,c=I){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ta=class e extends Lr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Tr(c,3)),this.setAttribute(`normal`,new Tr(l,3)),this.setAttribute(`uv`,new Tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},na=class e extends Lr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Tr(u,3)),this.setAttribute(`normal`,new Tr(d,3)),this.setAttribute(`uv`,new Tr(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=new q,ia=new q,aa=new q,oa=new rr,sa=class extends Lr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(lt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=oa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),oa.getNormal(aa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=oa[c[e]],o=oa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(aa.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:aa.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;ra.fromBufferAttribute(a,t),ia.fromBufferAttribute(a,n),d.push(ra.x,ra.y,ra.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute(`position`,new Tr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ca=class e extends Lr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},la=class e extends Lr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Tr(s,3)),this.setAttribute(`normal`,new Tr(c,3)),this.setAttribute(`uv`,new Tr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ua=class e extends Lr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function da(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(pa(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fa(e){let t={};for(let n=0;n<e.length;n++){let r=da(e[n]);for(let e in r)t[e]=r[e]}return t}function pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}var ga={clone:da,merge:fa},_a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,va=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ya=class extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_a,this.fragmentShader=va,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Vn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Rt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ya{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xa=class extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Vn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ta(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Da=class extends Ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends Ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Na(n,t,g,y,r);i[p]=ja(x,o,_,b,m)}return i}};function ja(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Na(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ja(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Pa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ta(e.settings)&&(n.settings={inTangents:wa(e.settings.inTangents,Array),outTangents:wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ta(this.settings)&&(Fa(this.settings.inTangents,e),Fa(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ta(this.settings)&&(Ia(this.settings.inTangents,e),Ia(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ta(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ia(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Pa.prototype.ValueTypeName=``,Pa.prototype.TimeBufferType=Float32Array,Pa.prototype.ValueBufferType=Float32Array,Pa.prototype.DefaultInterpolation=Ie;var La=class extends Pa{constructor(e,t,n){super(e,t,n)}};La.prototype.ValueTypeName=`bool`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=Fe,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`color`;var za=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName=`number`;var Ba=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},Va=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName=`quaternion`,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Pa{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName=`string`,Ha.prototype.ValueBufferType=Array,Ha.prototype.DefaultInterpolation=Fe,Ha.prototype.InterpolantFactoryMethodLinear=void 0,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`vector`;var Wa=class extends Nn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Vn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ga=class extends Wa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ka=new on,qa=new q,Ja=new q,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=b,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(qa),Ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ja),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ka,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new q,Za=new Ft,Qa=new q,$a=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,Za,Qa),Qa.x===1&&Qa.y===1&&Qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,Qa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,Za,Qa),Qa.x===1&&Qa.y===1&&Qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,Qa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},eo=new q,to=new K,no=new K,ro=class extends $a{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(eo.x,eo.y).multiplyScalar(-e/eo.z),eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(eo.x,eo.y).multiplyScalar(-e/eo.z)}getViewSize(e,t){return this.getViewBounds(e,to,no),t.subVectors(no,to)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},io=class extends $a{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ao=class extends Ya{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new ao}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},so=-90,co=1,lo=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ro(so,co,e,t);r.layers=this.layers,this.add(r);let i=new ro(so,co,e,t);i.layers=this.layers,this.add(i);let a=new ro(so,co,e,t);a.layers=this.layers,this.add(a);let o=new ro(so,co,e,t);o.layers=this.layers,this.add(o);let s=new ro(so,co,e,t);s.layers=this.layers,this.add(s);let c=new ro(so,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},uo=class extends ro{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},fo=`\\[\\]\\.:\\/`,po=RegExp(`[\\[\\]\\.:\\/]`,`g`),mo=`[^\\[\\]\\.:\\/]`,ho=`[^`+fo.replace(`\\.`,``)+`]`,go=`((?:WC+[\\/:])*)`.replace(`WC`,mo),_o=`(WCOD+)?`.replace(`WCOD`,ho),vo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mo),yo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mo),bo=RegExp(`^`+go+_o+vo+yo+`$`),xo=[`material`,`materials`,`bones`,`map`],So=class{constructor(e,t,n){let r=n||Co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(po,``)}static parseTrackName(e){let t=bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Co.Composite=So,Co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Co.prototype.GetterByBindingType=[Co.prototype._getValue_direct,Co.prototype._getValue_array,Co.prototype._getValue_arrayElement,Co.prototype._getValue_toArray],Co.prototype.SetterByBindingTypeAndVersioning=[[Co.prototype._setValue_direct,Co.prototype._setValue_direct_setNeedsUpdate,Co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_array,Co.prototype._setValue_array_setNeedsUpdate,Co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_arrayElement,Co.prototype._setValue_arrayElement_setNeedsUpdate,Co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_fromArray,Co.prototype._setValue_fromArray_setNeedsUpdate,Co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wo=new on,To=class{constructor(e,t,n=0,r=1/0){this.ray=new mi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new _n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):G(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wo),this}intersectObject(e,t=!0,n=[]){return Do(e,this,n,t),n.sort(Eo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Do(e[r],this,n,t);return n.sort(Eo),n}};function Eo(e,t){return e.distance-t.distance}function Do(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Do(r[e],t,n,!0)}}var Oo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=ft(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ko=new q,Ao=new q,jo=new q,Mo=new q,No=new q,Po=new q,Fo=new q,Io=class{constructor(e=new q,t=new q){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ko.subVectors(e,this.start),Ao.subVectors(this.end,this.start);let n=Ao.dot(Ao);if(n===0)return 0;let r=Ao.dot(ko)/n;return t&&(r=ft(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Po,n=Fo){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;jo.subVectors(c,o),Mo.subVectors(l,s),No.subVectors(o,s);let u=jo.dot(jo),d=Mo.dot(Mo),f=Mo.dot(No);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.distanceToSquared(n);if(u<=r)i=0,a=f/d,a=ft(a,0,1);else{let e=jo.dot(No);if(d<=r)a=0,i=ft(-e/u,0,1);else{let t=jo.dot(Mo),n=u*d-t*t;i=n===0?0:ft((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=ft(-e/u,0,1)):a>1&&(a=1,i=ft((t-e)/u,0,1))}}return t.copy(o).addScaledVector(jo,i),n.copy(s).addScaledVector(Mo,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Lo=class extends Yi{constructor(e=10,t=10,n=4473924,r=8947848){n=new Vn(n),r=new Vn(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Lr;l.setAttribute(`position`,new Tr(s,3)),l.setAttribute(`color`,new Tr(c,3));let u=new Li({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ro=class extends ot{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zo(e,t,n,r){let i=Bo(r);switch(n){case N:return e*t;case ee:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case R:return e*t*2/i.components*i.byteLength;case P:return e*t*3/i.components*i.byteLength;case F:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case z:case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case V:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case H:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case U:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bo(e){switch(e){case b:case x:return{byteLength:1,components:1};case C:case S:case D:return{byteLength:2,components:1};case O:case k:return{byteLength:2,components:4};case T:case w:case E:return{byteLength:4,components:1};case j:case M:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Vo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ho(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Uo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new Vn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Vn(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Wo={basic:{uniforms:fa([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Uo.meshbasic_vert,fragmentShader:Uo.meshbasic_frag},lambert:{uniforms:fa([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Vn(0)},envMapIntensity:{value:1}}]),vertexShader:Uo.meshlambert_vert,fragmentShader:Uo.meshlambert_frag},phong:{uniforms:fa([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Vn(0)},specular:{value:new Vn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Uo.meshphong_vert,fragmentShader:Uo.meshphong_frag},standard:{uniforms:fa([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Vn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Uo.meshphysical_vert,fragmentShader:Uo.meshphysical_frag},toon:{uniforms:fa([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Vn(0)}}]),vertexShader:Uo.meshtoon_vert,fragmentShader:Uo.meshtoon_frag},matcap:{uniforms:fa([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Uo.meshmatcap_vert,fragmentShader:Uo.meshmatcap_frag},points:{uniforms:fa([J.points,J.fog]),vertexShader:Uo.points_vert,fragmentShader:Uo.points_frag},dashed:{uniforms:fa([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Uo.linedashed_vert,fragmentShader:Uo.linedashed_frag},depth:{uniforms:fa([J.common,J.displacementmap]),vertexShader:Uo.depth_vert,fragmentShader:Uo.depth_frag},normal:{uniforms:fa([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Uo.meshnormal_vert,fragmentShader:Uo.meshnormal_frag},sprite:{uniforms:fa([J.sprite,J.fog]),vertexShader:Uo.sprite_vert,fragmentShader:Uo.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Uo.background_vert,fragmentShader:Uo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Uo.backgroundCube_vert,fragmentShader:Uo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Uo.cube_vert,fragmentShader:Uo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Uo.equirect_vert,fragmentShader:Uo.equirect_frag},distance:{uniforms:fa([J.common,J.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Uo.distance_vert,fragmentShader:Uo.distance_frag},shadow:{uniforms:fa([J.lights,J.fog,{color:{value:new Vn(0)},opacity:{value:1}}]),vertexShader:Uo.shadow_vert,fragmentShader:Uo.shadow_frag}};Wo.physical={uniforms:fa([Wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Vn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Vn(0)},specularColor:{value:new Vn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Uo.meshphysical_vert,fragmentShader:Uo.meshphysical_frag};var Go={r:0,b:0,g:0},Ko=new on,qo=new Rt;qo.set(-1,0,0,0,1,0,0,0,1);function Jo(e,t,n,r,i,a){let o=new Vn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Di(new ta(1,1,1),new ya({name:`BackgroundCubeMaterial`,uniforms:da(Wo.backgroundCube.uniforms),vertexShader:Wo.backgroundCube.vertexShader,fragmentShader:Wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ko.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qo),l.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Di(new ca(2,2),new ya({name:`BackgroundMaterial`,uniforms:da(Wo.background.uniforms),vertexShader:Wo.background.vertexShader,fragmentShader:Wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Go,ha(e)),n.buffers.color.setClear(Go.r,Go.g,Go.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Yo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Zo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&W(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Gr,s=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $o=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ta(5,5,5),i=new ya({name:`CubemapFromEquirect`,uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Di(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},es=256,ts=3,ns=20,rs=256,is=16,as=3,os=new q,ss=new Vn,cs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lo(1,10,null),this._boxMesh=new Di(new ta(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=os}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(ss));let h=new lo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ms(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(es,kt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?es:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ls(e,!1,!1),n=Math.log2(e)-ts;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ls(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=hs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ms()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ds(),this._integrationMaterial=fs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/is);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-as)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(rs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ps());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function ls(e,t,n){return new $o(e,{minFilter:y,generateMipmaps:t,type:D,colorSpace:We,depthBuffer:n})}function us(e,t,n){return new ya({name:e,uniforms:t,vertexShader:Uo.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ds(){return us(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fs(){return us(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:is}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ps(){return us(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ns}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ms(){return us(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hs(){return us(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new cs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new cs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _s(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?wr:Cr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ys(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xs(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=E,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ss(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ws(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Lr;u.setAttribute(`position`,new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Tr([0,2,0,0,2,0],2));let d=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Di(u,d),p=new io(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new nn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}),c=new nn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Qi(t,n),a===!0&&(l.format=L,l.type=A)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ut.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Cs[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Ts=new $t,Es=new Qi(1,1),Ds=new $i(1),Os=new rn,ks=new an,As=new Xi,js=[],Ms=[],Ns=new Float32Array(16),Ps=new Float32Array(9),Fs=new Float32Array(4);function Is(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=js[i];if(a===void 0&&(a=new Float32Array(i),js[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ls(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Rs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zs(e,t){let n=Ms[t];n===void 0&&(n=new Int32Array(t),Ms[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2fv(this.addr,t),Rs(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ls(n,t))return;e.uniform3fv(this.addr,t),Rs(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4fv(this.addr,t),Rs(n,t)}}function Ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Fs.set(r),e.uniformMatrix2fv(this.addr,!1,Fs),Rs(n,r)}}function Gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ps.set(r),e.uniformMatrix3fv(this.addr,!1,Ps),Rs(n,r)}}function Ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ns.set(r),e.uniformMatrix4fv(this.addr,!1,Ns),Rs(n,r)}}function qs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2iv(this.addr,t),Rs(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3iv(this.addr,t),Rs(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4iv(this.addr,t),Rs(n,t)}}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2uiv(this.addr,t),Rs(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3uiv(this.addr,t),Rs(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4uiv(this.addr,t),Rs(n,t)}}function tc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?tc(Es):Ts,n.setTexture2D(t||a,i)}function rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ks,i)}function ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?tc(Ds):As,n.setTextureCube(t||a,i)}function ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Os,i)}function oc(e){switch(e){case 5126:return Bs;case 35664:return Vs;case 35665:return Hs;case 35666:return Us;case 35674:return Ws;case 35675:return Gs;case 35676:return Ks;case 5124:case 35670:return qs;case 35667:case 35671:return Js;case 35668:case 35672:return Ys;case 35669:case 35673:return Xs;case 5125:return Zs;case 36294:return Qs;case 36295:return $s;case 36296:return ec;case 35678:case 36198:case 36298:case 36306:case 35682:return nc;case 35679:case 36299:case 36307:return rc;case 35680:case 36300:case 36308:case 36293:return ic;case 36289:case 36303:case 36311:case 36292:return ac}}function sc(e,t){e.uniform1fv(this.addr,t)}function cc(e,t){let n=Is(t,this.size,2);e.uniform2fv(this.addr,n)}function lc(e,t){let n=Is(t,this.size,3);e.uniform3fv(this.addr,n)}function uc(e,t){let n=Is(t,this.size,4);e.uniform4fv(this.addr,n)}function dc(e,t){let n=Is(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fc(e,t){let n=Is(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function pc(e,t){let n=Is(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function mc(e,t){e.uniform1iv(this.addr,t)}function hc(e,t){e.uniform2iv(this.addr,t)}function gc(e,t){e.uniform3iv(this.addr,t)}function _c(e,t){e.uniform4iv(this.addr,t)}function vc(e,t){e.uniform1uiv(this.addr,t)}function yc(e,t){e.uniform2uiv(this.addr,t)}function bc(e,t){e.uniform3uiv(this.addr,t)}function xc(e,t){e.uniform4uiv(this.addr,t)}function Sc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?tc(Es):Ts;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Cc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ks,a[e])}function wc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?tc(Ds):As;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Tc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Os,a[e])}function Ec(e){switch(e){case 5126:return sc;case 35664:return cc;case 35665:return lc;case 35666:return uc;case 35674:return dc;case 35675:return fc;case 35676:return pc;case 5124:case 35670:return mc;case 35667:case 35671:return hc;case 35668:case 35672:return gc;case 35669:case 35673:return _c;case 5125:return vc;case 36294:return yc;case 36295:return bc;case 36296:return xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Sc;case 35679:case 36299:case 36307:return Cc;case 35680:case 36300:case 36308:case 36293:return wc;case 36289:case 36303:case 36311:case 36292:return Tc}}var Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oc(t.type)}},Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ec(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function jc(e,t){e.seq.push(t),e.map[t.id]=t}function Mc(e,t,n){let r=e.name,i=r.length;for(Ac.lastIndex=0;;){let a=Ac.exec(r),o=Ac.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){jc(n,l===void 0?new Dc(s,e,t):new Oc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new kc(s),jc(n,e)),n=e}}}var Nc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Mc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Pc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Fc=37297,Ic=0;function Lc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Rc=new Rt;function zc(e){Ut._getMatrix(Rc,Ut.workingColorSpace,e);let t=`mat3( ${Rc.elements.map(e=>e.toFixed(4))} )`;switch(Ut.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Bc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Lc(e.getShaderSource(t),r)}return i}function Vc(e,t){let n=zc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Hc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Uc(e,t){let n=Hc[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Wc=new q;function Gc(){return Ut.getLuminanceCoefficients(Wc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Wc.x.toFixed(4)}, ${Wc.y.toFixed(4)}, ${Wc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Kc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Yc).join(`
`)}function qc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Jc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Yc(e){return e!==``}function Xc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Zc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qc=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(e){return e.replace(Qc,el)}function el(e,t){let n=Uo[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return $c(n)}var tl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(e){return e.replace(tl,rl)}function rl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function il(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var al={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ol(e){return al[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var sl={302:`ENVMAP_MODE_REFRACTION`};function cl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:sl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ll={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ul(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ll[e.combine]||`ENVMAP_BLENDING_NONE`}function dl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ol(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=cl(n),d=ul(n),f=Kc(n),p=qc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Yc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Yc).join(`
`),g.length>0&&(g+=`
`)):(h=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Yc).join(`
`),g=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Uo.tonemapping_pars_fragment,n.toneMapping===0?``:Uc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Uo.colorspace_pars_fragment,Vc(`linearToOutputTexel`,n.outputColorSpace),Gc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Yc).join(`
`)),o=$c(o),o=Xc(o,n),o=Zc(o,n),s=$c(s),s=Xc(s,n),s=Zc(s,n),o=nl(o),s=nl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Pc(i,i.VERTEX_SHADER,v),x=Pc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Bc(i,b,`vertex`),n=Bc(i,x,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Nc(i,m),w=Jc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Fc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ic++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var fl=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ml(e),t.set(e,n)),n}},ml=class{constructor(e){this.id=fl++,this.code=e,this.usedTimes=0}};function hl(e){return e===1030||e===37490||e===36285}function gl(e,t,n,r,i,a){let o=new _n,s=new pl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Wo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,ee=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,R=!!i.normalMap,re=!!i.displacementMap,z=!!i.emissiveMap,B=!!i.metalnessMap,V=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.diffuseRoughness>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ie&&!!i.anisotropyMap,pe=ae&&!!i.clearcoatMap,me=ae&&!!i.clearcoatNormalMap,he=ae&&!!i.clearcoatRoughnessMap,ge=oe&&!!i.diffuseRoughnessMap,_e=le&&!!i.iridescenceMap,ve=le&&!!i.iridescenceThicknessMap,ye=ue&&!!i.sheenColorMap,be=ue&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=de&&!!i.transmissionMap,Te=de&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,H=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let U=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,je={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?U.length-1:null,envMapSize:L?U[0].width:null,aoMap:ee,lightMap:te,bumpMap:ne,normalMap:R,displacementMap:re,emissiveMap:z,normalMapObjectSpace:R&&i.normalMapType===1,normalMapTangentSpace:R&&i.normalMapType===0,packedNormalMap:R&&i.normalMapType===0&&hl(i.normalMap.format),metalnessMap:B,roughnessMap:V,anisotropy:ie,anisotropyMap:fe,clearcoat:ae,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,diffuseRoughness:oe,diffuseRoughnessMap:ge,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:ue,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:de,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:H,alphaHash:Oe,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:ee&&p(i.aoMap.channel),lightMapUv:te&&p(i.lightMap.channel),bumpMapUv:ne&&p(i.bumpMap.channel),normalMapUv:R&&p(i.normalMap.channel),displacementMapUv:re&&p(i.displacementMap.channel),emissiveMapUv:z&&p(i.emissiveMap.channel),metalnessMapUv:B&&p(i.metalnessMap.channel),roughnessMapUv:V&&p(i.roughnessMap.channel),anisotropyMapUv:fe&&p(i.anisotropyMap.channel),clearcoatMapUv:pe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(i.sheenRoughnessMap.channel),specularMapUv:xe&&p(i.specularMap.channel),specularColorMapUv:Se&&p(i.specularColorMap.channel),specularIntensityMapUv:Ce&&p(i.specularIntensityMap.channel),transmissionMapUv:we&&p(i.transmissionMap.channel),thicknessMapUv:Te&&p(i.thicknessMap.channel),alphaMapUv:De&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(R||ie),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||De),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&R===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Ut.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:z&&i.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Wo[t];n=ga.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new dl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function _l(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function vl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function bl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||vl),r.length>1&&r.sort(t||yl),i.length>1&&i.sort(t||yl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function xl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new bl,e.set(t,[i])):n>=r.length?(i=new bl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Sl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Vn};break;case`SpotLight`:n={position:new q,direction:new q,color:new Vn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Vn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Vn,groundColor:new Vn};break;case`RectAreaLight`:n={color:new Vn,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Cl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var wl=0;function Tl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function El(e){let t=new Sl,n=Cl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Tl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=wl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Dl(e){let t=new El(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ol(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Dl(e),t.set(n,[a])):r>=i.length?(a=new Dl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var kl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Al=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jl=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Ml=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Nl=new on,Pl=new q,Fl=new q;function Il(e,t,n){let r=new Pi,i=new K,a=new K,o=new en,s=new Sa,c=new Ca,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:kl,fragmentShader:Al}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Lr;h.setAttribute(`position`,new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Di(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new nn(i.x,i.y,{format:ne,type:D,minFilter:_,magFilter:_,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Qi(i.x,i.y,E),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=I,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m}else l.isPointLight?(d.map=new $o(i.x),d.map.depthTexture=new $i(i.x,T)):(d.map=new nn(i.x,i.y),d.map.depthTexture=new Qi(i.x,i.y,T)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=I,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Pl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Pl),Fl.copy(e.position),Fl.add(jl[t]),e.up.copy(Ml[t]),e.lookAt(Fl),e.updateMatrixWorld(),n.makeTranslation(-Pl.x,-Pl.y,-Pl.z),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Nl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new nn(i.x,i.y,{format:ne,type:D}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ll(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Vn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new en().fromArray(ee),R=new en().fromArray(te);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let z={};z[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),B(e.CULL_FACE),le(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(B(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?V(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?V(e.CULL_FACE):(B(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function me(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function he(t){t?B(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function _e(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||z[t]),i.type=t,i.texture=n)}function ve(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function H(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function U(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Me(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Vn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:V,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:De,texImage3D:H,pixelStorei:ke,getParameter:Oe,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:Ae,viewport:U,reset:Ne}}function Rl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Qe(`canvas`)}function D(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:Ut.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function P(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function I(e){te(e.target)}function ee(e){ne(e.target)}function te(e){e.removeEventListener(`dispose`,I),F(e),re(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&b.delete(e)}function ne(e){e.removeEventListener(`dispose`,ee),F(e),B(e)}function R(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ne(t):te(t))}C.clear(),b.clear()}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&z(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function z(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function B(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&te(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let V=0;function ie(){V=0}function ae(){return V}function oe(e){V=e}function se(){let e=V;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),V+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,i){let a=r.get(t);if(t.isVideoTexture&&je(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[d]:e.REPEAT,[f]:e.CLAMP_TO_EDGE,[p]:e.MIRRORED_REPEAT},me={[m]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[g]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[v]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,I),P(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ce(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&z(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ut.getPrimaries(Ut.workingColorSpace),r=o.colorSpace===``?null:Ut.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=Me(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=N(o,t);if(o.isDepthTexture)p=M(o.format===L,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ye(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=zo(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=zo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ut.getPrimaries(Ut.workingColorSpace),r=o.colorSpace===``?null:Ut.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Me(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=N(o,h);ge(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=M(o.format===L,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ae(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?fe(i.depthTexture,0):le(i.depthTexture,0);let u=c.__webglTexture,d=Ae(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ee),P(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&U(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Te(t)}function H(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Oe=[];function ke(t){if(t.samples>0){if(U(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Oe.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Oe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(i.maxSamples,e.samples)}function U(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function je(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ut.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=U,this.dispose=R}function zl(e,t){function n(n,r=``){let i,a=Ut.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Bl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ya({vertexShader:Bl,fragmentShader:Vl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Di(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Hl,g={},_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new K,w=null,E=null,D=new ro;D.viewport=new en;let O=new ro;O.viewport=new en;let k=[D,O],j=new uo,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getHandSpace()};function P(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?L:I,a=_.stencil?A:T);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new nn(d.textureWidth,d.textureHeight,{format:F,type:b,depthTexture:new Qi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new nn(f.framebufferWidth,f.framebufferHeight,{format:F,type:b,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ne(j,i);for(let e=0;e<a.length;e++)ne(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),R(e,j,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let re=null;function z(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new ro,o.layers.enable(n),o.viewport=new en,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ea,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let B=new Vo;B.setAnimationLoop(z),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},Wl=new on,Gl=new Rt;Gl.set(-1,0,0,0,1,0,0,0,1);function Kl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Wl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Gl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ql(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Jl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yl=null;function Xl(){return Yl===null&&(Yl=new Ai(Jl,16,16,ne,D),Yl.name=`DFG_LUT`,Yl.minFilter=_,Yl.magFilter=_,Yl.wrapS=f,Yl.wrapT=f,Yl.generateMipmaps=!1,Yl.needsUpdate=!0),Yl}var Zl=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=b}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([re,R,te]),g=new Set([b,T,C,A,O,k]),_=new Uint32Array(4),v=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},S=null,w=null,E=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,P=!1,F=null,I=null,L=null,ee=null;this._outputColorSpace=Ue;let ne=0,z=0,B=null,V=-1,ie=null,ae=new en,oe=new en,se=null,ce=new Vn(0),le=0,ue=t.width,de=t.height,fe=1,pe=null,me=null,he=new en(0,0,ue,de),ge=new en(0,0,ue,de),_e=!1,ve=new Pi,ye=new Ii,be=!1,xe=!1,Se=new on,Ce=new q,we=new en,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return B===null?fe:1}let H=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,U,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),H===null){let t=`webgl2`;if(H=Oe(t,e),H===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}et()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),G(`WebGLRenderer: `+e.message),e}function et(){ke=new _s(H),ke.init(),Xe=new zl(H,ke),Ae=new Zo(H,ke,e,Xe),U=new Ll(H,ke),Ae.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),I=H.createFramebuffer(),L=H.createFramebuffer(),ee=H.createFramebuffer(),je=new bs(H),Me=new _l,Ne=new Rl(H,ke,U,Me,Ae,Xe,je),Pe=new gs(N),Fe=new Ho(H),Ze=new Yo(H,Fe),Ie=new vs(H,Fe,je,Ze),Le=new Ss(H,Ie,Fe,Ze,je),Ke=new xs(H,Ae,Ne),He=new Qo(Me),Re=new gl(N,Pe,ke,Ae,Ze,He),ze=new Kl(N,Me),Be=new xl,Ve=new Ol(ke),Ge=new Jo(N,Pe,U,Le,p,s),We=new Il(N,Le,Ae),Qe=new ql(H,je,Ae,U),qe=new Xo(H,ke,je),Je=new ys(H,ke,je),je.programs=Re.programs,N.capabilities=Ae,N.extensions=ke,N.properties=Me,N.renderLists=Be,N.shadowMap=We,N.state=U,N.info=je}m!==1009&&(M=new ws(m,t.width,t.height,o,r,i));let nt=new Ul(N,H);this.xr=nt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ue,de,!1))},this.getSize=function(e){return e.set(ue,de)},this.setSize=function(e,n,r=!0){nt.isPresenting?W(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,de=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,de=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),U.viewport(ae.copy(he).multiplyScalar(De()).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),U.scissor(oe.copy(ge).multiplyScalar(De()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){U.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(B!==null){let t=B.texture.format;e=h.has(t)}if(e){let e=B.texture.type,t=g.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,H.clearBufferiv(H.COLOR,0,v))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ge.dispose(),Be.dispose(),Ve.dispose(),Ne.dispose(),Me.dispose(),Pe.dispose(),Le.dispose(),Ie.dispose(),Ze.dispose(),Qe.dispose(),Re.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,pt),nt.removeEventListener(`sessionend`,mt),ht.stop()};function rt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),P=!0}function at(){tt(`WebGLRenderer: Context Restored.`),P=!1;let e=je.autoReset,t=We.enabled,n=We.autoUpdate,r=We.needsUpdate,i=We.type;et(),je.autoReset=e,We.enabled=t,We.autoUpdate=n,We.needsUpdate=r,We.type=i}function ot(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),Me.remove(e)}function lt(e){let t=Me.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ze.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Fe.get(c),g=Je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*De()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*De()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=Me.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),be===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),w=Ve.get(n),w.init(t),j.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),xe=this.localClippingEnabled,be=He.init(this.clippingPlanes,xe),be===!0&&He.setGlobalState(this.clippingPlanes,t),F!==null&&We.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),w=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Me.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Vo;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,nt.setAnimationLoop(e),e===null?ht.stop():ht.start()},nt.addEventListener(`sessionstart`,pt),nt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=M!==null&&(B===null||n)&&M.begin(N,B);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,B),w=Ve.get(e,j.length),w.init(t),w.state.textureUnits=Ne.getTextureUnits(),j.push(w),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ye.setFromArrayCamera(t):ve.setFromProjectionMatrix(Se,Ye,t.reversedDepth),xe=this.localClippingEnabled,be=He.init(this.clippingPlanes,xe),S=Be.get(e,E.length),S.init(),E.push(S),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,N.sortObjects)}gt(e,t,0,N.sortObjects),S.finish(),F!==null&&F.updateLights(w.state.lightsArray),N.sortObjects===!0&&S.sort(pe,me),Ee=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ee&&Ge.addToRenderList(S,e),this.info.autoReset===!0&&this.info.reset(),be===!0&&He.beginShadows();let i=w.state.shadowsArray;if(We.render(i,e,t),be===!0&&He.endShadows(),(r&&M.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Ee&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(S,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Ee&&Ge.render(e),_t(S,e,t)}B!==null&&z===0&&(Ne.updateMultisampleRenderTarget(B),Ne.updateRenderTargetMipmap(B)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),Ze.resetDefaultState(),V=-1,ie=null,j.pop(),j.length>0?(w=j[j.length-1],Ne.setTextureUnits(w.state.textureUnits),be===!0&&He.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,E.pop(),S=E.length>0?E[E.length-1]:null,F!==null&&F.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ye:ve;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Le.update(e),a=e.material;a.visible&&S.push(e,i,a,n,we.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ye:ve;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,we.z,s,t)}}else a.visible&&S.push(e,i,a,n,we.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),be===!0&&He.setGlobalState(N.clippingPlanes,n),r&&U.viewport(ae.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?D:b,minFilter:y,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(ce),le=N.getClearAlpha(),le<1&&N.setClearColor(16777215,.5),N.clear(),Ee&&Ge.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),be===!0&&He.setGlobalState(N.clippingPlanes,r),yt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(ce,le),d!==void 0&&(r.viewport=d),N.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function xt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function St(e,t,n){t.isScene!==!0&&(t=Te);let r=Me.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Re.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,N),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),Tt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=xt(w.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ct(e,t,n,r,i){let a=Me.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=St(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Nc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=Me.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Te),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ut.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Me.get(r),y=w.state.lights;if(be===!0&&(xe===!0||e!==ie)){let t=e===ie&&r.id===V;He.setState(r,e,t)}let b=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===xt(w.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||S===!0)&&(C=S===!0?Ct(r,t,i,s,h):St(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,C,v));let T=!1,E=!1,D=!1,O=C.getUniforms(),k=v.uniforms;if(U.useProgram(C.program)&&(T=!0,E=!0,D=!0),r.id!==V&&(V=r.id,E=!0),T||ie!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(H,`projectionMatrix`,e.projectionMatrix),O.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(H,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&O.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,E=!0,D=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(H,`sunShadowMap`,y.state.sunShadowMap,Ne),y.state.directionalShadowMap.length>0&&O.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&O.setValue(H,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&O.setValue(H,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){O.setOptional(H,i,`bindMatrix`),O.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(H,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(O.setOptional(H,i,`batchingTexture`),O.setValue(H,`batchingTexture`,i._matricesTexture,Ne),O.setOptional(H,i,`batchingIdTexture`),O.setValue(H,`batchingIdTexture`,i._indirectTexture,Ne),O.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(H,`batchingColorTexture`,i._colorsTexture,Ne));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ke.update(i,n,C),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Xl()),E){if(O.setValue(H,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Dt(k,D),a&&r.fog===!0&&ze.refreshFogUniforms(k,a),ze.refreshMaterialUniforms(k,r,fe,de,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=x,t=0;for(let n of w.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;k.probesSH.value=e.textures,k.probesMin.value=e.min,k.probesMax.value=e.max,k.probesResolution.value=e.resolution}Nc.upload(H,wt(v),k,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Nc.upload(H,wt(v),k,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(H,`center`,i.center),O.setValue(H,`modelViewMatrix`,i.modelViewMatrix),O.setValue(H,`normalMatrix`,i.normalMatrix),O.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,C),Qe.bind(n,C)}}return C}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(e,t,n){let r=Me.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Me.get(e.texture).__webglTexture=t,Me.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Me.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){B=e,ne=t,z=n;let r=null,i=!1,a=!1;if(e){let o=Me.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,U.viewport(ae),U.scissor(oe),U.setScissorTest(se),V=-1;return}if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,Me.get(e.texture).__webglTexture,Me.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Me.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Me.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?Me.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(he).multiplyScalar(fe).floor(),oe.copy(ge).multiplyScalar(fe).floor(),se=_e;if(n!==0&&(r=I),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(ae),U.scissor(oe),U.setScissorTest(se),i){let r=Me.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Me.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Me.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}V=-1};function kt(e){let t=Me.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,Xe.convert(c),Xe.convert(l),a)}finally{let e=B===null?null:Me.get(B).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,Xe.convert(l),Xe.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=B===null?null:Me.get(B).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await it(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Xe.convert(t.format),_=Xe.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Me.get(e),r=Me.get(t),h=Me.get(n.__renderTarget),g=Me.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Me.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Me.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Me.has(e)){let n=Me.get(e),r=Me.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,L),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ee);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){Me.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){ne=0,z=0,B=null,U.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}},Ql=class e{positions;index;faceCount;vertexCount;faceColor;faceObject;_normals=null;_areas=null;_neighbours=null;_vertexFaces=null;constructor(e,t,n,r){this.positions=e,this.index=t,this.faceCount=t.length/3,this.vertexCount=e.length/3,this.faceColor=n??new Uint8Array(this.faceCount),this.faceObject=r??new Uint16Array(this.faceCount)}withColours(t){let n=new e(this.positions,this.index,t,this.faceObject);return n._normals=this._normals,n._areas=this._areas,n._neighbours=this._neighbours,n._vertexFaces=this._vertexFaces,n}withPositions(t){let n=new e(t,this.index,this.faceColor,this.faceObject);return n._neighbours=this._neighbours,n._vertexFaces=this._vertexFaces,n}static fromSoup(t){let{positions:n,index:r}=$l(t.positions),i=r.length/3,a=new Uint32Array(r.length),o=new Uint8Array(i),s=new Uint16Array(i),c=0;for(let e=0;e<i;e++){let n=r[3*e],i=r[3*e+1],l=r[3*e+2];n!==i&&i!==l&&n!==l&&(a[3*c]=n,a[3*c+1]=i,a[3*c+2]=l,o[c]=t.colors?t.colors[e]:0,s[c]=t.objects?t.objects[e]:0,c++)}return new e(n,a.slice(0,3*c),o.slice(0,c),s.slice(0,c))}normals(){return this._normals||this.computeNormalsAndAreas(),this._normals}areas(){return this._areas||this.computeNormalsAndAreas(),this._areas}computeNormalsAndAreas(){let{positions:e,index:t,faceCount:n}=this,r=new Float32Array(n*3),i=new Float32Array(n);for(let a=0;a<n;a++){let n=t[3*a]*3,o=t[3*a+1]*3,s=t[3*a+2]*3,c=e[o]-e[n],l=e[o+1]-e[n+1],u=e[o+2]-e[n+2],d=e[s]-e[n],f=e[s+1]-e[n+1],p=e[s+2]-e[n+2],m=l*p-u*f,h=u*d-c*p,g=c*f-l*d,_=Math.hypot(m,h,g);i[a]=_/2;let v=_>0?1/_:0;r[3*a]=m*v,r[3*a+1]=h*v,r[3*a+2]=g*v}this._normals=r,this._areas=i}neighbours(){if(this._neighbours)return this._neighbours;let{index:e,faceCount:t}=this,n=t*3,r=new Int32Array(n).fill(-1),i=1;for(;i<n*2;)i<<=1;let a=i-1,o=new Int32Array(i),s=new Int32Array(i),c=new Int32Array(i).fill(-1);for(let t=0;t<n;t++){let n=t/3|0,i=t-3*n,l=e[t],u=e[3*n+(i+1)%3],d=l<u?l:u,f=l<u?u:l,p=(Math.imul(d,2654435761)^Math.imul(f,2246822507))&a;for(;;){let e=c[p];if(e===-1){o[p]=d,s[p]=f,c[p]=t;break}if(o[p]===d&&s[p]===f){if(e>=0){let i=e/3|0;i!==n&&(r[t]=i,r[e]=n),c[p]=-2}break}p=p+1&a}}return this._neighbours=r,r}vertexFaces(){if(this._vertexFaces)return this._vertexFaces;let{index:e,vertexCount:t}=this,n=new Uint32Array(t+1);for(let t=0;t<e.length;t++)n[e[t]+1]++;for(let e=0;e<t;e++)n[e+1]+=n[e];let r=n.slice(0,t),i=new Uint32Array(e.length);for(let t=0;t<e.length;t++)i[r[e[t]]++]=t/3|0;return this._vertexFaces={start:n,faces:i},this._vertexFaces}bounds(){let e=this.positions,t=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++){let i=e[n+r];i<t[r]&&(t[r]=i),i>t[r+3]&&(t[r+3]=i)}return t}cornerNormals(e=50){let t=this.normals(),n=this.areas(),{start:r,faces:i}=this.vertexFaces(),{index:a,faceCount:o}=this,s=new Float32Array(o*9),c=Math.cos(e*Math.PI/180);for(let e=0;e<o;e++){let o=t[3*e],l=t[3*e+1],u=t[3*e+2];for(let d=0;d<3;d++){let f=a[3*e+d],p=0,m=0,h=0;for(let a=r[f];a<r[f+1];a++){let r=i[a],s=t[3*r],d=t[3*r+1],f=t[3*r+2];if(r===e||o*s+l*d+u*f>=c){let e=n[r];p+=s*e,m+=d*e,h+=f*e}}let g=Math.hypot(p,m,h)||1,_=9*e+3*d;s[_]=p/g,s[_+1]=m/g,s[_+2]=h/g}}return s}};function $l(e){let t=e.length/3,n=1;for(;n<t*2;)n<<=1;let r=n-1,i=new Int32Array(n).fill(-1),a=new Int32Array(t),o=new Int32Array(t),s=new Int32Array(t),c=new Float32Array(e.length),l=new Uint32Array(t),u=1e4,d=0;for(let n=0;n<t;n++){let t=e[3*n],f=e[3*n+1],p=e[3*n+2],m=Math.round(t*u)|0,h=Math.round(f*u)|0,g=Math.round(p*u)|0,_=(Math.imul(m,73856093)^Math.imul(h,19349663)^Math.imul(g,83492791))&r;for(;;){let e=i[_];if(e<0){i[_]=d,a[d]=m,o[d]=h,s[d]=g,c[3*d]=t,c[3*d+1]=f,c[3*d+2]=p,l[n]=d++;break}if(a[e]===m&&o[e]===h&&s[e]===g){l[n]=e;break}_=_+1&r}}return{positions:c.slice(0,d*3),index:l}}function eu(e,t,n,r){let i=new Float32Array(e.positions.length+t.positions.length);i.set(e.positions),i.set(t.positions,e.positions.length);let a=new Uint32Array(e.index.length+t.index.length);a.set(e.index);let o=e.vertexCount;for(let n=0;n<t.index.length;n++)a[e.index.length+n]=t.index[n]+o;let s=new Uint8Array(e.faceCount+t.faceCount);s.set(e.faceColor);for(let r=0;r<t.faceCount;r++)s[e.faceCount+r]=n(t.faceColor[r]);let c=new Uint16Array(e.faceCount+t.faceCount);c.set(e.faceObject);let l=r??(e.faceCount?tu(e).reduce((e,t)=>Math.max(e,t),0)+1:0);for(let n=0;n<t.faceCount;n++)c[e.faceCount+n]=t.faceObject[n]+l;return new Ql(i,a,s,c)}function tu(e){return Array.from(new Set(e.faceObject))}function nu(e,t){let n=new Int32Array(e.vertexCount).fill(-1),r=new Uint32Array(e.index.length),i=new Uint8Array(e.faceCount),a=new Uint16Array(e.faceCount),o=0,s=0;for(let c=0;c<e.faceCount;c++)if(t(c)){for(let t=0;t<3;t++){let i=e.index[3*c+t];n[i]<0&&(n[i]=s++),r[3*o+t]=n[i]}i[o]=e.faceColor[c],a[o]=e.faceObject[c],o++}let c=new Float32Array(s*3);for(let t=0;t<e.vertexCount;t++){let r=n[t];r<0||(c[3*r]=e.positions[3*t],c[3*r+1]=e.positions[3*t+1],c[3*r+2]=e.positions[3*t+2])}return new Ql(c,r.slice(0,3*o),i.slice(0,o),a.slice(0,o))}function ru(e,t){return new Ql(e.positions.map(e=>e*t),e.index,e.faceColor,e.faceObject)}var iu=class{faces;before;size=0;constructor(e=256){this.faces=new Uint32Array(e),this.before=new Uint8Array(e)}add(e,t){if(this.size===this.faces.length){let e=new Uint32Array(this.size*2);e.set(this.faces),this.faces=e;let t=new Uint8Array(this.size*2);t.set(this.before),this.before=t}this.faces[this.size]=e,this.before[this.size++]=t}trim(){this.faces=this.faces.slice(0,this.size),this.before=this.before.slice(0,this.size)}},au=class{mesh;undoStack=[];redoStack=[];stroke=null;inStroke;onChange=()=>{};constructor(e){this.mesh=e,this.inStroke=new Uint8Array(e.faceCount)}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}begin(){this.stroke&&this.end(),this.stroke=new iu}end(){let e=this.stroke;if(e&&e.size){let t=this.inStroke;for(let n=0;n<e.size;n++)t[e.faces[n]]=0;e.trim(),this.undoStack.push(e),this.undoStack.length>200&&this.undoStack.shift(),this.redoStack=[]}this.stroke=null}apply(e,t){let n=!this.stroke;n&&this.begin();let r=this.mesh.faceColor,i=this.stroke,a=this.inStroke,o=[];for(let n of e){let e=r[n];e!==t&&(a[n]||(a[n]=1,i.add(n,e)),r[n]=t,o.push(n))}return o.length&&this.onChange(o),n&&this.end(),o.length}undo(){return this.swap(this.undoStack,this.redoStack)}redo(){return this.swap(this.redoStack,this.undoStack)}swap(e,t){let n=e.pop();if(!n)return!1;let r=this.mesh.faceColor,i=new iu(n.size);for(let e=0;e<n.size;e++){let t=n.faces[e];i.add(t,r[t]),r[t]=n.before[e]}return t.push(i),this.onChange(n.faces),!0}removeColour(e){let t=t=>t===e?0:t>e?t-1:t,n=this.mesh.faceColor;for(let e=0;e<n.length;e++)n[e]=t(n[e]);for(let e of[this.undoStack,this.redoStack])for(let n of e)for(let e=0;e<n.size;e++)n.before[e]=t(n.before[e]);this.onChange(ou(n.length))}replaceColour(e,t){let n=[],r=this.mesh.faceColor;for(let t=0;t<r.length;t++)r[t]===e&&n.push(t);return this.apply(n,t)}region(e,t){let n=this.mesh.neighbours(),r=this.mesh.faceColor,i=r[e],a=t.maxAngle===null?null:Math.cos(t.maxAngle*Math.PI/180),o=a===null?null:this.mesh.normals(),s=new Uint8Array(this.mesh.faceCount),c=[e];s[e]=1;for(let e=0;e<c.length;e++){let l=c[e];for(let e=0;e<3;e++){let u=n[3*l+e];u<0||s[u]||t.sameColour&&r[u]!==i||o&&a!==null&&o[3*l]*o[3*u]+o[3*l+1]*o[3*u+1]+o[3*l+2]*o[3*u+2]<a||(s[u]=1,c.push(u))}}return Uint32Array.from(c)}smooth(e,t=3){let n=Array.from(e),{start:r,faces:i}=this.mesh.vertexFaces(),a=this.mesh.index,o=this.mesh.areas(),s=this.mesh.faceColor,c=n.map(e=>{let t=new Set;for(let n=0;n<3;n++){let o=a[3*e+n];for(let e=r[o];e<r[o+1];e++)t.add(i[e])}return t.delete(e),Uint32Array.from(t)}),l=new Map;for(let e=0;e<t;e++){let e=new Map;if(n.forEach((t,n)=>{let r=s[t];l.clear(),l.set(r,o[t]);for(let e of c[n])l.set(s[e],(l.get(s[e])??0)+o[e]);let i=r,a=l.get(r);for(let[e,t]of l)t>a&&(i=e,a=t);i!==r&&(e.has(i)||e.set(i,[]),e.get(i).push(t))}),!e.size)break;for(let[t,n]of e)this.apply(n,t)}}findGaps(e,t,n=!1){let{faceCount:r,faceColor:i,index:a,positions:o}=this.mesh;if(e===0&&!n)return[];let s=this.mesh.neighbours(),c=this.mesh.areas(),l=t=>n?i[t]!==e:i[t]===0,u=(e,t)=>{let n=a[3*e+t]*3,r=a[3*e+(t+1)%3]*3;return Math.hypot(o[n]-o[r],o[n+1]-o[r+1],o[n+2]-o[r+2])},d=new Uint8Array(r),f=[];for(let n=0;n<r;n++){if(d[n]||!l(n))continue;d[n]=1;let r=[n],a=[],o=0,p=!1,m=0,h=0;for(;r.length;){let n=r.pop();o+=c[n],o>t?p=!0:a.push(n);for(let t=0;t<3;t++){let a=s[3*n+t];a<0||(l(a)?d[a]||(d[a]=1,r.push(a)):i[a]===e?m+=u(n,t):h+=u(n,t))}}!p&&m>0&&m>=.6*(m+h)&&f.push(a)}return f}fillGaps(e,t,n=!1){let r=this.findGaps(e,t,n);return r.length?(this.apply(r.flat(),e),r.length):0}};function*ou(e){for(let t=0;t<e;t++)yield t}function su(e){let t=new Uint8Array(e);if(cu(e)){let t=new DataView(e),n=t.getUint32(80,!0),r=new Float32Array(n*9);for(let e=0;e<n;e++){let n=84+e*50+12;for(let i=0;i<9;i++)r[e*9+i]=t.getFloat32(n+i*4,!0)}return{positions:r}}let n=new TextDecoder().decode(t),r=/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g,i=[],a;for(;a=r.exec(n);)i.push(+a[1],+a[2],+a[3]);let o=i.length-i.length%9;return{positions:Float32Array.from(i.slice(0,o))}}function cu(e){if(e.byteLength<84)return!1;if(84+new DataView(e).getUint32(80,!0)*50===e.byteLength)return!0;let t=new TextDecoder().decode(new Uint8Array(e,0,Math.min(512,e.byteLength)));return!(t.trimStart().startsWith(`solid`)&&t.includes(`facet`))}function lu(e,t,n,r=`STLware`){let i=(n??{length:t.length/3}).length,a=new Uint8Array(84+i*50),o=new DataView(a.buffer),s=new TextEncoder().encode(r.slice(0,80));a.set(s,0),o.setUint32(80,i,!0);for(let r=0;r<i;r++){let i=n?n[r]:r,a=t[3*i]*3,s=t[3*i+1]*3,c=t[3*i+2]*3,l=e[s]-e[a],u=e[s+1]-e[a+1],d=e[s+2]-e[a+2],f=e[c]-e[a],p=e[c+1]-e[a+1],m=e[c+2]-e[a+2],h=u*m-d*p,g=d*f-l*m,_=l*p-u*f,v=Math.hypot(h,g,_)||1;h/=v,g/=v,_/=v;let y=84+r*50;o.setFloat32(y,h,!0),o.setFloat32(y+4,g,!0),o.setFloat32(y+8,_,!0);let b=y+12;for(let t of[a,s,c])o.setFloat32(b,e[t],!0),o.setFloat32(b+4,e[t+1],!0),o.setFloat32(b+8,e[t+2],!0),b+=12}return a}function uu(e){let t=new Map,n=``;for(let r of e.split(/\r?\n/)){let e=r.trim();if(e.startsWith(`newmtl `))n=e.slice(7).trim();else if(e.startsWith(`Kd `)&&n){let[r,i,a]=e.slice(3).trim().split(/\s+/).map(Number);t.set(n,du(r,i,a))}}return t}function du(e,t,n){let r=e=>Math.round(Math.max(0,Math.min(1,e||0))*255).toString(16).padStart(2,`0`);return(`#`+r(e)+r(t)+r(n)).toUpperCase()}function fu(e,t){let n=[],r=[],i=[],a=[],o=[],s=[],c=new Map,l=``,u=[],d=[],f=-1,p=(e,t,n)=>{let r=c.get(e);return r===void 0&&(r=o.length,c.set(e,r),o.push(t),s.push(n)),r},m=[`#D9D9D9`,`#E72727`,`#2761E7`,`#2BA84A`,`#F2C200`,`#8E44AD`,`#F28C28`,`#000000`];for(let o of e.split(/\r?\n/)){let e=o.trim();if(e.startsWith(`v `)){let t=e.slice(2).trim().split(/\s+/).map(Number);n.push(t[0],t[1],t[2]),r.push(t.length>=6?du(t[3],t[4],t[5]):null)}else if(e.startsWith(`o `)||e.startsWith(`g `)&&f<0)d.push(e.slice(2).trim()||`Object ${d.length+1}`),f=d.length-1;else if(e.startsWith(`usemtl `))l=e.slice(7).trim();else if(e.startsWith(`f `)){let o=e.slice(2).trim().split(/\s+/).map(e=>{let t=parseInt(e.split(`/`)[0],10);return t<0?n.length/3+t:t-1}),s,d=r[o[0]];s=d?p(`vc`+d,d,d):l?p(`m`+l,t?.get(l)??m[c.size%m.length],l):p(``,`#D9D9D9`,`Base`);for(let e=1;e+1<o.length;e++){for(let t of[o[0],o[e],o[e+1]])i.push(n[3*t],n[3*t+1],n[3*t+2]);a.push(s),u.push(Math.max(0,f))}}}return{positions:Float32Array.from(i),colors:Uint8Array.from(a),palette:o,names:s,objects:Uint16Array.from(u),objectNames:d.length?d:void 0}}var pu=Uint8Array,mu=Uint16Array,hu=Int32Array,gu=new pu([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_u=new pu([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vu=new pu([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yu=function(e,t){for(var n=new mu(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new hu(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},bu=yu(gu,2),xu=bu.b,Su=bu.r;xu[28]=258,Su[258]=28;for(var Cu=yu(_u,0),wu=Cu.b,Tu=Cu.r,Eu=new mu(32768),Du=0;Du<32768;++Du){var Ou=(Du&43690)>>1|(Du&21845)<<1;Ou=(Ou&52428)>>2|(Ou&13107)<<2,Ou=(Ou&61680)>>4|(Ou&3855)<<4,Eu[Du]=((Ou&65280)>>8|(Ou&255)<<8)>>1}for(var ku=(function(e,t,n){for(var r=e.length,i=0,a=new mu(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new mu(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new mu(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Eu[d]>>c]=l}else for(s=new mu(r),i=0;i<r;++i)e[i]&&(s[i]=Eu[o[e[i]-1]++]>>15-e[i]);return s}),Au=new pu(288),Du=0;Du<144;++Du)Au[Du]=8;for(var Du=144;Du<256;++Du)Au[Du]=9;for(var Du=256;Du<280;++Du)Au[Du]=7;for(var Du=280;Du<288;++Du)Au[Du]=8;for(var ju=new pu(32),Du=0;Du<32;++Du)ju[Du]=5;var Mu=ku(Au,9,0),Nu=ku(Au,9,1),Pu=ku(ju,5,0),Fu=ku(ju,5,1),Iu=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Lu=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Ru=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},zu=function(e){return(e+7)/8|0},Bu=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new pu(e.subarray(t,n))},Vu=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Hu=function(e,t,n){var r=Error(t||Vu[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Hu),!n)throw r;return r},Uu=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new pu(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new pu(i*3));var l=function(e){var t=n.length;if(e>t){var r=new pu(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Lu(e,d,1);var v=Lu(e,d+1,3);if(d+=3,!v){var y=zu(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Hu(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=Nu,m=Fu,h=9,g=5;else if(v==2){var S=Lu(e,d,31)+257,C=Lu(e,d+10,15)+4,w=S+Lu(e,d+5,31)+1;d+=14;for(var T=new pu(w),E=new pu(19),D=0;D<C;++D)E[vu[D]]=Lu(e,d+D*3,7);d+=C*3;for(var O=Iu(E),k=(1<<O)-1,A=ku(E,O,1),D=0;D<w;){var j=A[Lu(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+Lu(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+Lu(e,d,7),d+=3):y==18&&(N=11+Lu(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=Iu(P),g=Iu(F),p=ku(P,h,1),m=ku(F,g,1)}else Hu(1);if(d>_){c&&Hu(0);break}}s&&l(f+131072);for(var I=(1<<h)-1,L=(1<<g)-1,ee=d;;ee=d){var M=p[Ru(e,d)&I],te=M>>4;if(d+=M&15,d>_){c&&Hu(0);break}if(M||Hu(2),te<256)n[f++]=te;else if(te==256){ee=d,p=null;break}else{var ne=te-254;if(te>264){var D=te-257,R=gu[D];ne=Lu(e,d,(1<<R)-1)+xu[D],d+=R}var re=m[Ru(e,d)&L],z=re>>4;re||Hu(3),d+=re&15;var F=wu[z];if(z>3){var R=_u[z];F+=Ru(e,d)&(1<<R)-1,d+=R}if(d>_){c&&Hu(0);break}s&&l(f+131072);var B=f+ne;if(f<F){var V=a-F,ie=Math.min(F,B);for(V+f<0&&Hu(3);f<ie;++f)n[f]=r[V+f]}for(;f<B;++f)n[f]=n[f-F]}}t.l=p,t.p=ee,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Bu(n,0,f):n.subarray(0,f)},Wu=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},Gu=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Ku=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:$u,l:0};if(i==1){var o=new pu(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new mu(f+1),m=qu(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new pu(p),l:m}},qu=function(e,t,n){return e.s==-1?Math.max(qu(e.l,t,n+1),qu(e.r,t,n+1)):t[e.s]=n},Ju=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new mu(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},Yu=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Xu=function(e,t,n){var r=n.length,i=zu(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},Zu=function(e,t,n,r,i,a,o,s,c,l,u){Wu(t,u++,n),++i[256];for(var d=Ku(i,15),f=d.t,p=d.l,m=Ku(a,15),h=m.t,g=m.l,_=Ju(f),v=_.c,y=_.n,b=Ju(h),x=b.c,S=b.n,C=new mu(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Ku(C,7),E=T.t,D=T.l,O=19;O>4&&!E[vu[O-1]];--O);var k=l+5<<3,A=Yu(i,Au)+Yu(a,ju)+o,j=Yu(i,f)+Yu(a,h)+o+14+3*O+Yu(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return Xu(t,u,e.subarray(c,c+l));var M,N,P,F;if(Wu(t,u,1+(j<A)),u+=2,j<A){M=ku(f,p,0),N=f,P=ku(h,g,0),F=h;var I=ku(E,D,0);Wu(t,u,y-257),Wu(t,u+5,S-1),Wu(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Wu(t,u+3*w,E[vu[w]]);u+=3*O;for(var L=[v,x],ee=0;ee<2;++ee)for(var te=L[ee],w=0;w<te.length;++w){var ne=te[w]&31;Wu(t,u,I[ne]),u+=E[ne],ne>15&&(Wu(t,u,te[w]>>5&127),u+=te[w]>>12)}}else M=Mu,N=Au,P=Pu,F=ju;for(var w=0;w<s;++w){var R=r[w];if(R>255){var ne=R>>18&31;Gu(t,u,M[ne+257]),u+=N[ne+257],ne>7&&(Wu(t,u,R>>23&31),u+=gu[ne]);var re=R&31;Gu(t,u,P[re]),u+=F[re],re>3&&(Gu(t,u,R>>5&8191),u+=_u[re])}else Gu(t,u,M[R]),u+=N[R]}return Gu(t,u,M[256]),u+N[256]},Qu=new hu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$u=new pu(0),ed=function(e,t,n,r,i,a){var o=a.z||e.length,s=new pu(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Qu[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new mu(32768),g=a.h||new mu(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new hu(25e3),x=new mu(288),S=new mu(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=Zu(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var N=0;N<286;++N)x[N]=0;for(var N=0;N<30;++N)S[N]=0}var P=2,F=0,I=p,L=A-j&32767;if(M>2&&k==y(T-L))for(var ee=Math.min(f,M)-1,te=Math.min(32767,T),ne=Math.min(258,M);L<=te&&--I&&A!=j;){if(e[T+P]==e[T+P-L]){for(var R=0;R<ne&&e[T+R]==e[T+R-L];++R);if(R>P){if(P=R,F=L,R>ee)break;for(var re=Math.min(L,R-2),z=0,N=0;N<re;++N){var B=T-L+N&32767,V=B-h[B]&32767;V>z&&(z=V,j=B)}}}A=j,j=h[A],L+=A-j&32767}if(F){b[E++]=268435456|Su[P]<<18|Tu[F];var ie=Su[P]&31,ae=Tu[F]&31;w+=gu[ie]+_u[ae],++x[257+ie],++S[ae],D=T+P,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=Zu(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var oe=T+65535;oe>=o&&(c[u/8|0]=l,oe=o),u=Xu(c,u+1,e.subarray(T,oe))}a.i=o}return Bu(s,0,r+zu(u)+i)},td=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),nd=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=td[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},rd=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new pu(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return ed(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},id=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},ad=function(e,t){return e[t]|e[t+1]<<8},od=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},sd=function(e,t){return od(e,t)+od(e,t+4)*4294967296},cd=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},ld=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&Hu(6,`invalid gzip data`);var t=e[3],n=10;t&4&&(n+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},ud=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0};function dd(e,t){return rd(e,t||{},0,0)}function fd(e,t){return Uu(e,{i:2},t&&t.out,t&&t.dictionary)}function pd(e,t){var n=ld(e);return n+8>e.length&&Hu(6,`invalid gzip data`),Uu(e.subarray(n,-8),{i:2},t&&t.out||new pu(ud(e)),t&&t.dictionary)}var md=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=id(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new pu(0),s],md(a,o,n,r))}},hd=typeof TextEncoder<`u`&&new TextEncoder,gd=typeof TextDecoder<`u`&&new TextDecoder;try{gd.decode($u,{stream:!0})}catch{}var _d=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Bu(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function vd(e,t){if(t){for(var n=new pu(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(hd)return hd.encode(e);for(var i=e.length,a=new pu(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new pu(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Bu(a,0,o)}function yd(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(gd)return gd.decode(e);var i=_d(e),a=i.s,n=i.r;return n.length&&Hu(8),a}var bd=function(e,t){return t+30+ad(e,t+26)+ad(e,t+28)},xd=function(e,t,n){var r=ad(e,t+28),i=ad(e,t+30),a=yd(e.subarray(t+46,t+46+r),!(ad(e,t+8)&2048)),o=t+46+r,s=Sd(e,o,i,n,od(e,t+20),od(e,t+24),od(e,t+42)),c=s[0],l=s[1],u=s[2];return[ad(e,t+10),c,l,a,o+i+ad(e,t+32),u]},Sd=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+ad(e,t+2))if(ad(e,t)==1)return[s?sd(e,t+4+8*c):i,c?sd(e,t+4):a,l?sd(e,t+4+8*(c+s)):o,1];r<2&&Hu(13)}return[i,a,o,0]},Cd=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&Hu(9),t+=r+4}return t},wd=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=Cd(l);cd(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&Hu(10),cd(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(cd(e,t,n.crc),cd(e,t+4,a<0?-a-2:a),cd(e,t+8,n.size)),cd(e,t+12,c),cd(e,t+14,d),t+=16,o!=null&&(cd(e,t,u),cd(e,t+6,n.attrs),cd(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;cd(e,t,+m),cd(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},Td=function(e,t,n,r,i){cd(e,t,101010256),cd(e,t+8,n),cd(e,t+10,n),cd(e,t+12,r),cd(e,t+16,i)};function Ed(e,t){t||={};var n={},r=[];md(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=vd(o),f=d.length,p=l.comment,m=p&&vd(p),h=m&&m.length,g=Cd(l.extra);f>65535&&Hu(11);var _=u?dd(c,l):c,v=_.length,y=nd();y.p(c),r.push(id(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new pu(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];wd(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+Cd(d.extra);b.set(d.c,d.o+w),wd(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return Td(b,i,r.length,S,x),b}function Dd(e,t){for(var n={},r=e.length-22;od(e,r)!=101010256;--r)(!r||e.length-r>65558)&&Hu(13);var i=ad(e,r+8);if(!i)return{};var a=od(e,r+16),o=od(e,r-20)==117853008;if(o){var s=od(e,r-12);o=od(e,s)==101075792,o&&(i=od(e,s+32),a=od(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=xd(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=bd(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=fd(e.subarray(_,_+f),{out:new pu(p)}):Hu(14,`unknown compression type `+d):n[m]=Bu(e,_,_+f))}return n}function Od(e){if(e<=0)return``;if(e<3)return(e<<2).toString(16).toUpperCase();if(e-3>15)throw Error(`filament slot ${e} is out of range`);return(e-3).toString(16).toUpperCase()+`C`}function kd(e){let t=Array.from(e.trim()).reverse().map(e=>parseInt(e,16)),n=0,r=()=>{if(n>=t.length||Number.isNaN(t[n]))throw Error(`paint string ended early`);return t[n++]},i=()=>{let e=r(),t=e&3;if(t===0){if((e&12)==12){let e=r(),t=0;for(;e===15;)t++,e=r();return e+15*t+3}return e>>2}let n=e>>2,a=Array(t+1);for(let e=t;e>=0;e--)a[e]=i();return[t,n,a]};return i()}function Ad(e,t,n){if(typeof t==`number`)return[[e[0],e[1],e[2],t]];let[r,i,a]=t,o=[0,1,2].map(t=>e[(i+t)%3]),s;if(r===1){let e=n(o[2],o[1]);s=[[o[0],o[1],e],[e,o[2],o[0]]]}else if(r===2){let e=n(o[1],o[0]),t=n(o[0],o[2]);s=[[o[0],e,t],[e,o[1],t],[o[1],o[2],t]]}else{let e=n(o[1],o[0]),t=n(o[2],o[1]),r=n(o[0],o[2]);s=[[o[0],e,r],[e,o[1],t],[t,o[2],r],[e,t,r]]}let c=[];return s.forEach((e,t)=>c.push(...Ad(e,a[t],n))),c}var jd=`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
 <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
 <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>
`,Md=`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>
`;function Nd(e){let t=e.toFixed(6).replace(/0+$/,``).replace(/\.$/,``);return(t===`-0`||t===``)&&(t=`0`),t}function Pd(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Fd(e,t,n,r,i=`Model`){let a=[`<?xml version="1.0" encoding="UTF-8"?>
`,`<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
`,` <metadata name="Application">STLware</metadata>
`,` <resources>
`,`  <m:colorgroup id="1">
`];for(let e of r)a.push(`   <m:color color="${e.hex.toUpperCase()}"/>\n`);a.push(`  </m:colorgroup>
`),a.push(`  <object id="2" type="model" name="${Pd(i)}" pid="1" pindex="0">\n`),a.push(`   <mesh>
    <vertices>
`);for(let t=0;t<e.length;t+=3)a.push(`     <vertex x="${Nd(e[t])}" y="${Nd(e[t+1])}" z="${Nd(e[t+2])}"/>\n`);a.push(`    </vertices>
    <triangles>
`);let o=r.map(e=>Od(e.filament));for(let e=0;e<t.length/3;e++){let r=n[e],i=o[r]?` paint_color="${o[r]}"`:``;a.push(`     <triangle v1="${t[3*e]}" v2="${t[3*e+1]}" v3="${t[3*e+2]}" pid="1" p1="${r}"${i}/>\n`)}return a.push(`    </triangles>
   </mesh>
  </object>
`),a.push(` </resources>
 <build>
  <item objectid="2"/>
 </build>
</model>
`),a.join(``)}function Id(e,t,n,r,i=`Model`){let a=Fd(e,t,n,r,i);return Ed({"[Content_Types].xml":vd(jd),"_rels/.rels":vd(Md),"3D/3dmodel.model":vd(a)},{level:6})}var Ld=[1,0,0,0,1,0,0,0,1,0,0,0],Rd={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3},zd=[`#FFFFFF`,`#000000`,`#E72727`,`#2761E7`,`#2BA84A`,`#F2C200`,`#8E44AD`,`#F28C28`,`#7A4A2B`,`#808080`,`#FF8FB1`,`#00B3B3`,`#C0C0C0`,`#4B0082`,`#9ACD32`,`#800000`];function Bd(e){if(!e)return Ld;let t=e.trim().split(/\s+/).map(Number);return t.length===12&&t.every(e=>Number.isFinite(e))?t:Ld}function Vd(e,t){let n=[];for(let r=0;r<4;r++)for(let i=0;i<3;i++){let a=0;for(let n=0;n<3;n++)a+=e[r*3+n]*t[n*3+i];r===3&&(a+=t[9+i]),n.push(a)}return n}function Hd(e){let t=e.trim().toUpperCase();return t.startsWith(`#`)||(t=`#`+t),t.length>=7?t.slice(0,7):`#808080`}var Ud=/<(\/?)([A-Za-z_][\w.-]*:)?([A-Za-z_][\w.-]*)((?:\s+[^\s=>/]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/g,Wd=/([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;function Gd(e){let t={};if(!e)return t;Wd.lastIndex=0;let n;for(;n=Wd.exec(e);){let e=n[1],r=Kd(n[2]??n[3]??``);t[e]=r;let i=e.indexOf(`:`);if(i>=0){let n=e.slice(i+1);n in t||(t[n]=r)}}return t}function Kd(e){return e.indexOf(`&`)<0?e:e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`)}function qd(e){let t={unitMm:1,meshes:new Map,components:new Map,names:new Map,build:[],application:``},n=new Map,r=new Map,i=null,a=null,o=null,s=``,c=!1;Ud.lastIndex=0;let l;for(;l=Ud.exec(e);){let u=l[1]===`/`,d=l[3],f=l[5]===`/`;if(u)d===`object`?(i=null,a=null):(d===`colorgroup`||d===`basematerials`)&&o&&(n.set(s,o),o=null);else switch(d){case`vertex`:{let e=Gd(l[4]);a?.vertices.push(+e.x,+e.y,+e.z);break}case`triangle`:{if(!a)break;let e=Gd(l[4]);a.triangles.push(+e.v1,+e.v2,+e.v3),a.paint.push(e.paint_color||e[`slic3rpe:mmu_segmentation`]||e.mmu_segmentation||``);let t=e.pid,n=e.p1;if(t===void 0&&i&&r.has(i)){let e=r.get(i);t=e[0],n===void 0&&(n=String(e[1]))}a.rawColour.push(t!==void 0&&n!==void 0?[t,+n]:null);break}case`model`:t.unitMm=Rd[Gd(l[4]).unit??`millimeter`]??1;break;case`object`:{let e=Gd(l[4]);i=e.id,e.name&&t.names.set(i,e.name),e.pid!==void 0&&r.set(i,[e.pid,+(e.pindex??0)]);break}case`mesh`:i&&(a={vertices:[],triangles:[],paint:[],colour:[],rawColour:[]},t.meshes.set(i,a));break;case`colorgroup`:case`basematerials`:s=Gd(l[4]).id,o=[],f&&(n.set(s,o),o=null);break;case`color`:o?.push(Hd(Gd(l[4]).color??`#808080`));break;case`base`:o?.push(Hd(Gd(l[4]).displaycolor??`#808080`));break;case`components`:i&&t.components.set(i,[]);break;case`component`:{let e=Gd(l[4]);i&&t.components.get(i)?.push([e.path??null,e.objectid,Bd(e.transform)]);break}case`item`:{let e=Gd(l[4]);t.build.push([e.path??null,e.objectid,Bd(e.transform)]);break}case`metadata`:if(c=Gd(l[4]).name===`Application`&&!f,c){let n=e.indexOf(`<`,Ud.lastIndex);t.application=Kd(e.slice(Ud.lastIndex,n).trim())}}}for(let e of t.meshes.values())e.colour=e.rawColour.map(e=>{let t=e?n.get(e[0]):void 0;return t&&e&&e[1]>=0&&e[1]<t.length?t[e[1]]:null});return t}function Jd(e,t=`:scope > metadata`){let n={};return e.querySelectorAll(t).forEach(e=>{let t=e.getAttribute(`key`);t&&(n[t]=e.getAttribute(`value`)??``)}),n}function Yd(e){if(typeof DOMParser>`u`)return null;let t=new DOMParser().parseFromString(e,`application/xml`);return t.getElementsByTagName(`parsererror`).length?null:t}function Xd(e){let t=new Map,n=e[`Metadata/model_settings.config`],r=n&&Yd(yd(n));return r&&r.querySelectorAll(`object`).forEach(e=>{let n=Jd(e),r=new Map;e.querySelectorAll(`:scope > part`).forEach(e=>{let t=Jd(e);r.set(e.getAttribute(`id`)??``,{subtype:e.getAttribute(`subtype`)??`normal_part`,extruder:parseInt(t.extruder??`0`,10)||0,name:t.name??``})}),t.set(e.getAttribute(`id`)??``,{name:n.name??``,extruder:parseInt(n.extruder??`1`,10)||1,parts:r})}),t}function Zd(e){let t=e[`Metadata/project_settings.config`];if(t)try{let e=JSON.parse(yd(t)).filament_colour??[];if(e.length)return e.map(Hd)}catch{}let n=e[`Metadata/Slic3r_PE.config`];if(n){let e=yd(n);for(let t of[`extruder_colour`,`filament_colour`]){let n=RegExp(`^; ${t} = (.*)$`,`m`).exec(e);if(n){let e=n[1].split(`;`).filter(e=>e.trim());if(e.length)return e.map(Hd)}}}return[]}function Qd(e){let t=new Map,n=e[`Metadata/Slic3r_PE_model.config`],r=n&&Yd(yd(n));return r&&r.querySelectorAll(`object`).forEach(e=>{let n={};e.querySelectorAll(`:scope > metadata[type="object"]`).forEach(e=>{n[e.getAttribute(`key`)??``]=e.getAttribute(`value`)??``});let r=parseInt(n.extruder??`1`,10)||1,i=[];e.querySelectorAll(`:scope > volume`).forEach(e=>{let t=Jd(e),n=parseInt(e.getAttribute(`firstid`)??`0`,10),a=parseInt(e.getAttribute(`lastid`)??`0`,10);t.modifier===`1`||(t.volume_type??`ModelPart`)!==`ModelPart`?i.push([n,a,null]):i.push([n,a,parseInt(t.extruder??`0`,10)||r])}),t.set(e.getAttribute(`id`)??``,{def:r,ranges:i,name:n.name??``})}),t}var $d=class{vertices=[];mid=new Map;leaves=[];object=0;splitTriangles=0;midpoint=(e,t)=>{let n=e<t?`${e},${t}`:`${t},${e}`,r=this.mid.get(n);if(r===void 0){let i=this.vertices;i.push((i[3*e]+i[3*t])/2,(i[3*e+1]+i[3*t+1])/2,(i[3*e+2]+i[3*t+2])/2),r=i.length/3-1,this.mid.set(n,r)}return r};addMesh(e,t,n,r,i){let a=this.vertices.length/3,o=e.vertices;for(let e=0;e<o.length;e+=3){let r=o[e],i=o[e+1],a=o[e+2];this.vertices.push((r*t[0]+i*t[3]+a*t[6]+t[9])*n,(r*t[1]+i*t[4]+a*t[7]+t[10])*n,(r*t[2]+i*t[5]+a*t[8]+t[11])*n)}let s=e.triangles.length/3;for(let t=0;t<s;t++){if(i?.(t))continue;let n=[e.triangles[3*t]+a,e.triangles[3*t+1]+a,e.triangles[3*t+2]+a],o=e.colour[t],s=o??r(t),c=e.paint[t];if(!c){this.leaves.push([n[0],n[1],n[2],s,this.object]);continue}let l;try{l=kd(c)}catch{l=0}if(typeof l==`number`&&o)this.leaves.push([n[0],n[1],n[2],o,this.object]);else{typeof l!=`number`&&this.splitTriangles++;for(let[e,t,r,i]of Ad(n,l,this.midpoint))this.leaves.push([e,t,r,i?`f`+i:s,this.object])}}}chain(e,t){let n=this.mid.get(e<t?`${e},${t}`:`${t},${e}`);return n===void 0?[]:[...this.chain(e,n),n,...this.chain(n,t)]}finish(){let e=[],t=[],n=[],r=this.vertices,i=t=>e.push(r[3*t],r[3*t+1],r[3*t+2]);for(let[a,o,s,c,l]of this.leaves){let u=[a,...this.chain(a,o),o,...this.chain(o,s),s,...this.chain(s,a)];if(u.length===3){i(a),i(o),i(s),t.push(c),n.push(l);continue}let d=(r[3*a]+r[3*o]+r[3*s])/3,f=(r[3*a+1]+r[3*o+1]+r[3*s+1])/3,p=(r[3*a+2]+r[3*o+2]+r[3*s+2])/3;for(let r=0;r<u.length;r++)e.push(d,f,p),i(u[r]),i(u[(r+1)%u.length]),t.push(c),n.push(l)}return{positions:e,keys:t,objects:n}}};function ef(e){let t=Dd(e),n=`3D/3dmodel.model`,r=t[`_rels/.rels`];if(r){let e=/Target="([^"]+)"[^>]*Type="[^"]*\/3dmodel"|Type="[^"]*\/3dmodel"[^>]*Target="([^"]+)"/.exec(yd(r));e&&(n=(e[1]??e[2]).replace(/^\//,``))}let i=new Map,a=e=>{let r=(e??n).replace(/^\//,``),a=i.get(r);if(!a){let e=t[r];if(!e)throw Error(`3MF is missing ${r}`);a=qd(yd(e)),i.set(r,a)}return[r,a]},[o,s]=a(n),c=Xd(t),l=Qd(t),u=Zd(t),d=s.application.startsWith(`BambuStudio`)||c.size?`bambu`:l.size||s.application.includes(`PrusaSlicer`)?`prusa`:`3mf`,f=new $d,p=0,m=[];for(let[e,t,n]of s.build){let[r]=a(e),i=r===o?c.get(t):void 0;f.object=p,m.push(i?.name||l.get(t)?.name||s.names.get(t)||`Object ${p+1}`),p++;let u=(e,t,n,r,s)=>{if(s>16)return;let[c,d]=a(e),p=d.components.get(t);if(p){for(let[e,t,a]of p){let l=c===o?i?.parts.get(t):void 0;l&&l.subtype!==`normal_part`||u(e??c,t,Vd(a,n),l?.extruder||r,s+1)}return}let m=d.meshes.get(t);if(!m)return;let h,g=e=>`f`+r,_=c===o?l.get(t):void 0;if(_){let e=e=>{for(let[t,n,r]of _.ranges)if(t<=e&&e<=n)return r;return _.def};h=t=>e(t)===null,g=t=>`f`+(e(t)??_.def)}f.addMesh(m,n,d.unitMm,g,h)};u(r,t,n,i?.extruder||1,0)}let{positions:h,keys:g,objects:_}=f.finish(),v=Array.from(new Set(g));v.sort((e,t)=>(e.startsWith(`f`)?+e.slice(1):1/0)-(t.startsWith(`f`)?+t.slice(1):1/0));let y=[],b=[],x=new Map;for(let e of v)if(x.set(e,y.length),e.startsWith(`f`)){let t=+e.slice(1);y.push(t>0&&t<=u.length?u[t-1]:zd[(t-1+16)%16]),b.push(`Filament ${t}`)}else y.push(e),b.push(e);let S=Uint8Array.from(g,e=>x.get(e));return{positions:Float32Array.from(h),colors:S,palette:y,names:b,source:d,objectCount:p,splitTriangles:f.splitTriangles,objects:Uint16Array.from(_),objectNames:m}}function tf(e){let t=parseInt(e.replace(`#`,``),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function nf(e,t,n){let r=tf(e),i=tf(t);return r.every((e,t)=>Math.abs(e-i[t])<=n+1e-9)}function rf(e,t,n,r){let i=[],a=Array(e.length).fill(-1),o=[];e.forEach((e,n)=>{if(t.has(n)){if(e.slot>0){let t=i.findIndex(t=>t.filament===e.slot);t>=0?(i[t].members.push(n),a[n]=t):(a[n]=i.length,i.push({hex:e.hex.toUpperCase(),name:e.name,filament:e.slot,members:[n]}))}else o.push(n)}});let s=new Set(i.map(e=>e.filament)),c=1;for(let t of o){let o=e[t],l=n?i.findIndex(e=>nf(e.hex,o.hex,r)):-1;if(l>=0)i[l].members.push(t),a[t]=l;else{for(;s.has(c);)c++;s.add(c),a[t]=i.length,i.push({hex:o.hex.toUpperCase(),name:o.name,filament:c,members:[t]})}}return{filaments:i,map:a}}var af=e=>{let t=e.toFixed(6).replace(/0+$/,``).replace(/\.$/,``);return t===`-0`||t===``?`0`:t};function of(e){return`F${e.filament}_${(e.name||e.hex).replace(/[^A-Za-z0-9_-]+/g,`_`)}`}function sf(e,t,n,r,i,a){let o=r.map(of),s=[`# STLware
`];r.forEach((e,t)=>{let[n,r,i]=tf(e.hex);s.push(`\nnewmtl ${o[t]}\nKa 0 0 0\nKd ${af(n)} ${af(r)} ${af(i)}\nKs 0 0 0\nd 1\nillum 1\n`)});let c=[`# STLware
`,`mtllib ${a}\n`,`o ${i.replace(/\s+/g,`_`)||`Model`}\n`];for(let t=0;t<e.length;t+=3)c.push(`v ${af(e[t])} ${af(e[t+1])} ${af(e[t+2])}\n`);let l=t.length/3,u=Array.from({length:l},(e,t)=>t).sort((e,t)=>n[e]-n[t]),d=-1;for(let e of u){let r=n[e];r!==d&&(c.push(`usemtl ${o[r]}\n`),d=r),c.push(`f ${t[3*e]+1} ${t[3*e+1]+1} ${t[3*e+2]+1}\n`)}return{obj:c.join(``),mtl:s.join(``)}}var cf=o(((e,t)=>{function n(e,t,n,r,i){for(var a=i+1;r<=i;){var o=r+i>>>1,s=e[o];(n===void 0?s-t:n(s,t))>=0?(a=o,i=o-1):r=o+1}return a}function r(e,t,n,r,i){for(var a=i+1;r<=i;){var o=r+i>>>1,s=e[o];(n===void 0?s-t:n(s,t))>0?(a=o,i=o-1):r=o+1}return a}function i(e,t,n,r,i){for(var a=r-1;r<=i;){var o=r+i>>>1,s=e[o];(n===void 0?s-t:n(s,t))<0?(a=o,r=o+1):i=o-1}return a}function a(e,t,n,r,i){for(var a=r-1;r<=i;){var o=r+i>>>1,s=e[o];(n===void 0?s-t:n(s,t))<=0?(a=o,r=o+1):i=o-1}return a}function o(e,t,n,r,i){for(;r<=i;){var a=r+i>>>1,o=e[a],s=n===void 0?o-t:n(o,t);if(s===0)return a;s<=0?r=a+1:i=a-1}return-1}function s(e,t,n,r,i,a){return typeof n==`function`?a(e,t,n,r===void 0?0:r|0,i===void 0?e.length-1:i|0):a(e,t,void 0,n===void 0?0:n|0,r===void 0?e.length-1:r|0)}t.exports={ge:function(e,t,r,i,a){return s(e,t,r,i,a,n)},gt:function(e,t,n,i,a){return s(e,t,n,i,a,r)},lt:function(e,t,n,r,a){return s(e,t,n,r,a,i)},le:function(e,t,n,r,i){return s(e,t,n,r,i,a)},eq:function(e,t,n,r,i){return s(e,t,n,r,i,o)}}})),lf=o(((e,t)=>{t.exports=r;var n=+(2**27+1);function r(e,t,r){var i=e*t,a=n*e,o=a-(a-e),s=e-o,c=n*t,l=c-(c-t),u=t-l,d=i-o*l-s*l-o*u,f=s*u-d;return r?(r[0]=f,r[1]=i,r):[f,i]}})),uf=o(((e,t)=>{t.exports=r;function n(e,t){var n=e+t,r=n-e,i=n-r,a=t-r,o=e-i+a;return o?[o,n]:[n]}function r(e,t){var r=e.length|0,i=t.length|0;if(r===1&&i===1)return n(e[0],t[0]);var a=r+i,o=Array(a),s=0,c=0,l=0,u=Math.abs,d=e[c],f=u(d),p=t[l],m=u(p),h,g;f<m?(g=d,c+=1,c<r&&(d=e[c],f=u(d))):(g=p,l+=1,l<i&&(p=t[l],m=u(p))),c<r&&f<m||l>=i?(h=d,c+=1,c<r&&(d=e[c],f=u(d))):(h=p,l+=1,l<i&&(p=t[l],m=u(p)));for(var _=h+g,v=_-h,y=g-v,b=y,x=_,S,C,w,T,E;c<r&&l<i;)f<m?(h=d,c+=1,c<r&&(d=e[c],f=u(d))):(h=p,l+=1,l<i&&(p=t[l],m=u(p))),g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S;for(;c<r;)h=d,g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S,c+=1,c<r&&(d=e[c]);for(;l<i;)h=p,g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S,l+=1,l<i&&(p=t[l]);return b&&(o[s++]=b),x&&(o[s++]=x),s||(o[s++]=0),o.length=s,o}})),df=o(((e,t)=>{t.exports=n;function n(e,t,n){var r=e+t,i=r-e,a=r-i,o=t-i,s=e-a;return n?(n[0]=s+o,n[1]=r,n):[s+o,r]}})),ff=o(((e,t)=>{var n=lf(),r=df();t.exports=i;function i(e,t){var i=e.length;if(i===1){var a=n(e[0],t);return a[0]?a:[a[1]]}var o=Array(2*i),s=[.1,.1],c=[.1,.1],l=0;n(e[0],t,s),s[0]&&(o[l++]=s[0]);for(var u=1;u<i;++u){n(e[u],t,c);var d=s[1];r(d,c[0],s),s[0]&&(o[l++]=s[0]);var f=c[1],p=s[1],m=f+p,h=p-(m-f);s[1]=m,h&&(o[l++]=h)}return s[1]&&(o[l++]=s[1]),l===0&&(o[l++]=0),o.length=l,o}})),pf=o(((e,t)=>{t.exports=r;function n(e,t){var n=e+t,r=n-e,i=n-r,a=t-r,o=e-i+a;return o?[o,n]:[n]}function r(e,t){var r=e.length|0,i=t.length|0;if(r===1&&i===1)return n(e[0],-t[0]);var a=r+i,o=Array(a),s=0,c=0,l=0,u=Math.abs,d=e[c],f=u(d),p=-t[l],m=u(p),h,g;f<m?(g=d,c+=1,c<r&&(d=e[c],f=u(d))):(g=p,l+=1,l<i&&(p=-t[l],m=u(p))),c<r&&f<m||l>=i?(h=d,c+=1,c<r&&(d=e[c],f=u(d))):(h=p,l+=1,l<i&&(p=-t[l],m=u(p)));for(var _=h+g,v=_-h,y=g-v,b=y,x=_,S,C,w,T,E;c<r&&l<i;)f<m?(h=d,c+=1,c<r&&(d=e[c],f=u(d))):(h=p,l+=1,l<i&&(p=-t[l],m=u(p))),g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S;for(;c<r;)h=d,g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S,c+=1,c<r&&(d=e[c]);for(;l<i;)h=p,g=b,_=h+g,v=_-h,y=g-v,y&&(o[s++]=y),S=x+_,C=S-x,w=S-C,T=_-C,E=x-w,b=E+T,x=S,l+=1,l<i&&(p=-t[l]);return b&&(o[s++]=b),x&&(o[s++]=x),s||(o[s++]=0),o.length=s,o}})),mf=o(((e,t)=>{var n=lf(),r=uf(),i=ff(),a=pf(),o=5,s=11102230246251565e-32,c=(3+16*s)*s,l=(7+56*s)*s;function u(e,t,n,r){return function(n,i,a){var o=r(e(e(t(i[1],a[0]),t(-a[1],i[0])),e(t(n[1],i[0]),t(-i[1],n[0]))),e(t(n[1],a[0]),t(-a[1],n[0])));return o[o.length-1]}}function d(e,t,n,r){return function(i,a,o,s){var c=r(e(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),a[2]),e(n(e(t(a[1],s[0]),t(-s[1],a[0])),-o[2]),n(e(t(a[1],o[0]),t(-o[1],a[0])),s[2]))),e(n(e(t(a[1],s[0]),t(-s[1],a[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),s[2])))),e(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-o[2]),n(e(t(i[1],o[0]),t(-o[1],i[0])),s[2]))),e(n(e(t(a[1],o[0]),t(-o[1],a[0])),i[2]),e(n(e(t(i[1],o[0]),t(-o[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),o[2])))));return c[c.length-1]}}function f(e,t,n,r){return function(i,a,o,s,c){var l=r(e(e(e(n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),o[2]),e(n(e(t(o[1],c[0]),t(-c[1],o[0])),-s[2]),n(e(t(o[1],s[0]),t(-s[1],o[0])),c[2]))),a[3]),e(n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),a[2]),e(n(e(t(a[1],c[0]),t(-c[1],a[0])),-s[2]),n(e(t(a[1],s[0]),t(-s[1],a[0])),c[2]))),-o[3]),n(e(n(e(t(o[1],c[0]),t(-c[1],o[0])),a[2]),e(n(e(t(a[1],c[0]),t(-c[1],a[0])),-o[2]),n(e(t(a[1],o[0]),t(-o[1],a[0])),c[2]))),s[3]))),e(n(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),a[2]),e(n(e(t(a[1],s[0]),t(-s[1],a[0])),-o[2]),n(e(t(a[1],o[0]),t(-o[1],a[0])),s[2]))),-c[3]),e(n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),a[2]),e(n(e(t(a[1],c[0]),t(-c[1],a[0])),-s[2]),n(e(t(a[1],s[0]),t(-s[1],a[0])),c[2]))),i[3]),n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-s[2]),n(e(t(i[1],s[0]),t(-s[1],i[0])),c[2]))),-a[3])))),e(e(n(e(n(e(t(a[1],c[0]),t(-c[1],a[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),c[2]))),s[3]),e(n(e(n(e(t(a[1],s[0]),t(-s[1],a[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),s[2]))),-c[3]),n(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),a[2]),e(n(e(t(a[1],s[0]),t(-s[1],a[0])),-o[2]),n(e(t(a[1],o[0]),t(-o[1],a[0])),s[2]))),i[3]))),e(n(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-o[2]),n(e(t(i[1],o[0]),t(-o[1],i[0])),s[2]))),-a[3]),e(n(e(n(e(t(a[1],s[0]),t(-s[1],a[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),s[2]))),o[3]),n(e(n(e(t(a[1],o[0]),t(-o[1],a[0])),i[2]),e(n(e(t(i[1],o[0]),t(-o[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),o[2]))),-s[3]))))),e(e(e(n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),o[2]),e(n(e(t(o[1],c[0]),t(-c[1],o[0])),-s[2]),n(e(t(o[1],s[0]),t(-s[1],o[0])),c[2]))),i[3]),n(e(n(e(t(s[1],c[0]),t(-c[1],s[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-s[2]),n(e(t(i[1],s[0]),t(-s[1],i[0])),c[2]))),-o[3])),e(n(e(n(e(t(o[1],c[0]),t(-c[1],o[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-o[2]),n(e(t(i[1],o[0]),t(-o[1],i[0])),c[2]))),s[3]),n(e(n(e(t(o[1],s[0]),t(-s[1],o[0])),i[2]),e(n(e(t(i[1],s[0]),t(-s[1],i[0])),-o[2]),n(e(t(i[1],o[0]),t(-o[1],i[0])),s[2]))),-c[3]))),e(e(n(e(n(e(t(o[1],c[0]),t(-c[1],o[0])),a[2]),e(n(e(t(a[1],c[0]),t(-c[1],a[0])),-o[2]),n(e(t(a[1],o[0]),t(-o[1],a[0])),c[2]))),i[3]),n(e(n(e(t(o[1],c[0]),t(-c[1],o[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-o[2]),n(e(t(i[1],o[0]),t(-o[1],i[0])),c[2]))),-a[3])),e(n(e(n(e(t(a[1],c[0]),t(-c[1],a[0])),i[2]),e(n(e(t(i[1],c[0]),t(-c[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),c[2]))),o[3]),n(e(n(e(t(a[1],o[0]),t(-o[1],a[0])),i[2]),e(n(e(t(i[1],o[0]),t(-o[1],i[0])),-a[2]),n(e(t(i[1],a[0]),t(-a[1],i[0])),o[2]))),-c[3])))));return l[l.length-1]}}function p(e){return(e===3?u:e===4?d:f)(r,n,i,a)}var m=p(3),h=p(4),g=[function(){return 0},function(){return 0},function(e,t){return t[0]-e[0]},function(e,t,n){var r=(e[1]-n[1])*(t[0]-n[0]),i=(e[0]-n[0])*(t[1]-n[1]),a=r-i,o;if(r>0){if(i<=0)return a;o=r+i}else if(r<0){if(i>=0)return a;o=-(r+i)}else return a;var s=c*o;return a>=s||a<=-s?a:m(e,t,n)},function(e,t,n,r){var i=e[0]-r[0],a=t[0]-r[0],o=n[0]-r[0],s=e[1]-r[1],c=t[1]-r[1],u=n[1]-r[1],d=e[2]-r[2],f=t[2]-r[2],p=n[2]-r[2],m=a*u,g=o*c,_=o*s,v=i*u,y=i*c,b=a*s,x=d*(m-g)+f*(_-v)+p*(y-b),S=l*((Math.abs(m)+Math.abs(g))*Math.abs(d)+(Math.abs(_)+Math.abs(v))*Math.abs(f)+(Math.abs(y)+Math.abs(b))*Math.abs(p));return x>S||-x>S?x:h(e,t,n,r)}];function _(e){var t=g[e.length];return t||=g[e.length]=p(e.length),t.apply(void 0,e)}function v(e,t,n,r,i,a,o){return function(t,n,s,c,l){switch(arguments.length){case 0:case 1:return 0;case 2:return r(t,n);case 3:return i(t,n,s);case 4:return a(t,n,s,c);case 5:return o(t,n,s,c,l)}for(var u=Array(arguments.length),d=0;d<arguments.length;++d)u[d]=arguments[d];return e(u)}}function y(){for(;g.length<=o;)g.push(p(g.length));t.exports=v.apply(void 0,[_].concat(g));for(var e=0;e<=o;++e)t.exports[e]=g[e]}y()})),hf=o(((e,t)=>{var n=cf(),r=mf()[3],i=0,a=1,o=2;t.exports=h;function s(e,t,n,r,i){this.a=e,this.b=t,this.idx=n,this.lowerIds=r,this.upperIds=i}function c(e,t,n,r){this.a=e,this.b=t,this.type=n,this.idx=r}function l(e,t){var n=e.a[0]-t.a[0]||e.a[1]-t.a[1]||e.type-t.type;return n||e.type!==i&&(n=r(e.a,e.b,t.b),n)?n:e.idx-t.idx}function u(e,t){return r(e.a,e.b,t)}function d(e,t,i,a,o){for(var s=n.lt(t,a,u),c=n.gt(t,a,u),l=s;l<c;++l){for(var d=t[l],f=d.lowerIds,p=f.length;p>1&&r(i[f[p-2]],i[f[p-1]],a)>0;)e.push([f[p-1],f[p-2],o]),--p;f.length=p,f.push(o);for(var m=d.upperIds,p=m.length;p>1&&r(i[m[p-2]],i[m[p-1]],a)<0;)e.push([m[p-2],m[p-1],o]),--p;m.length=p,m.push(o)}}function f(e,t){var n=e.a[0]<t.a[0]?r(e.a,e.b,t.a):r(t.b,t.a,e.a);return n||(n=t.b[0]<e.b[0]?r(e.a,e.b,t.b):r(t.b,t.a,e.b),n||e.idx-t.idx)}function p(e,t,r){var i=n.le(e,r,f),a=e[i],o=a.upperIds,c=o[o.length-1];a.upperIds=[c],e.splice(i+1,0,new s(r.a,r.b,r.idx,[c],o))}function m(e,t,r){var i=r.a;r.a=r.b,r.b=i;var a=n.eq(e,r,f),o=e[a],s=e[a-1];s.upperIds=o.upperIds,e.splice(a,1)}function h(e,t){for(var n=e.length,r=t.length,u=[],f=0;f<n;++f)u.push(new c(e[f],null,i,f));for(var f=0;f<r;++f){var h=t[f],g=e[h[0]],_=e[h[1]];g[0]<_[0]?u.push(new c(g,_,o,f),new c(_,g,a,f)):g[0]>_[0]&&u.push(new c(_,g,o,f),new c(g,_,a,f))}u.sort(l);for(var v=u[0].a[0]-(1+Math.abs(u[0].a[0]))*2**-52,y=[new s([v,1],[v,0],-1,[],[],[],[])],b=[],f=0,x=u.length;f<x;++f){var S=u[f],C=S.type;C===i?d(b,y,e,S.a,S.idx):C===o?p(y,e,S):m(y,e,S)}return b}})),gf=o(((e,t)=>{var n=cf();t.exports=o;function r(e,t){this.stars=e,this.edges=t}var i=r.prototype;function a(e,t,n){for(var r=1,i=e.length;r<i;r+=2)if(e[r-1]===t&&e[r]===n){e[r-1]=e[i-2],e[r]=e[i-1],e.length=i-2;return}}i.isConstraint=(function(){var e=[0,0];function t(e,t){return e[0]-t[0]||e[1]-t[1]}return function(r,i){return e[0]=Math.min(r,i),e[1]=Math.max(r,i),n.eq(this.edges,e,t)>=0}})(),i.removeTriangle=function(e,t,n){var r=this.stars;a(r[e],t,n),a(r[t],n,e),a(r[n],e,t)},i.addTriangle=function(e,t,n){var r=this.stars;r[e].push(t,n),r[t].push(n,e),r[n].push(e,t)},i.opposite=function(e,t){for(var n=this.stars[t],r=1,i=n.length;r<i;r+=2)if(n[r]===e)return n[r-1];return-1},i.flip=function(e,t){var n=this.opposite(e,t),r=this.opposite(t,e);this.removeTriangle(e,t,n),this.removeTriangle(t,e,r),this.addTriangle(e,r,n),this.addTriangle(t,n,r)},i.edges=function(){for(var e=this.stars,t=[],n=0,r=e.length;n<r;++n)for(var i=e[n],a=0,o=i.length;a<o;a+=2)t.push([i[a],i[a+1]]);return t},i.cells=function(){for(var e=this.stars,t=[],n=0,r=e.length;n<r;++n)for(var i=e[n],a=0,o=i.length;a<o;a+=2){var s=i[a],c=i[a+1];n<Math.min(s,c)&&t.push([n,s,c])}return t};function o(e,t){for(var n=Array(e),i=0;i<e;++i)n[i]=[];return new r(n,t)}})),_f=o(((e,t)=>{var n=lf(),r=uf(),i=pf(),a=ff(),o=6;function s(e){return(e===3?d:e===4?f:e===5?p:m)(r,i,n,a)}function c(){return 0}function l(){return 0}function u(){return 0}function d(e,t,n,r){function i(i,a,o){var s=n(i[0],i[0]),c=r(s,a[0]),l=r(s,o[0]),u=n(a[0],a[0]),d=r(u,i[0]),f=r(u,o[0]),p=n(o[0],o[0]),m=r(p,i[0]),h=t(e(t(r(p,a[0]),f),t(d,c)),t(m,l));return h[h.length-1]}return i}function f(e,t,n,r){function i(i,a,o,s){var c=e(n(i[0],i[0]),n(i[1],i[1])),l=r(c,a[0]),u=r(c,o[0]),d=r(c,s[0]),f=e(n(a[0],a[0]),n(a[1],a[1])),p=r(f,i[0]),m=r(f,o[0]),h=r(f,s[0]),g=e(n(o[0],o[0]),n(o[1],o[1])),_=r(g,i[0]),v=r(g,a[0]),y=r(g,s[0]),b=e(n(s[0],s[0]),n(s[1],s[1])),x=r(b,i[0]),S=r(b,a[0]),C=r(b,o[0]),w=t(e(e(r(t(C,y),a[1]),e(r(t(S,h),-o[1]),r(t(v,m),s[1]))),e(r(t(S,h),i[1]),e(r(t(x,d),-a[1]),r(t(p,l),s[1])))),e(e(r(t(C,y),i[1]),e(r(t(x,d),-o[1]),r(t(_,u),s[1]))),e(r(t(v,m),i[1]),e(r(t(_,u),-a[1]),r(t(p,l),o[1])))));return w[w.length-1]}return i}function p(e,t,n,r){function i(i,a,o,s,c){var l=e(n(i[0],i[0]),e(n(i[1],i[1]),n(i[2],i[2]))),u=r(l,a[0]),d=r(l,o[0]),f=r(l,s[0]),p=r(l,c[0]),m=e(n(a[0],a[0]),e(n(a[1],a[1]),n(a[2],a[2]))),h=r(m,i[0]),g=r(m,o[0]),_=r(m,s[0]),v=r(m,c[0]),y=e(n(o[0],o[0]),e(n(o[1],o[1]),n(o[2],o[2]))),b=r(y,i[0]),x=r(y,a[0]),S=r(y,s[0]),C=r(y,c[0]),w=e(n(s[0],s[0]),e(n(s[1],s[1]),n(s[2],s[2]))),T=r(w,i[0]),E=r(w,a[0]),D=r(w,o[0]),O=r(w,c[0]),k=e(n(c[0],c[0]),e(n(c[1],c[1]),n(c[2],c[2]))),A=r(k,i[0]),j=r(k,a[0]),M=r(k,o[0]),N=r(k,s[0]),P=t(e(e(e(r(e(r(t(N,O),o[1]),e(r(t(M,C),-s[1]),r(t(D,S),c[1]))),a[2]),e(r(e(r(t(N,O),a[1]),e(r(t(j,v),-s[1]),r(t(E,_),c[1]))),-o[2]),r(e(r(t(M,C),a[1]),e(r(t(j,v),-o[1]),r(t(x,g),c[1]))),s[2]))),e(r(e(r(t(D,S),a[1]),e(r(t(E,_),-o[1]),r(t(x,g),s[1]))),-c[2]),e(r(e(r(t(N,O),a[1]),e(r(t(j,v),-s[1]),r(t(E,_),c[1]))),i[2]),r(e(r(t(N,O),i[1]),e(r(t(A,p),-s[1]),r(t(T,f),c[1]))),-a[2])))),e(e(r(e(r(t(j,v),i[1]),e(r(t(A,p),-a[1]),r(t(h,u),c[1]))),s[2]),e(r(e(r(t(E,_),i[1]),e(r(t(T,f),-a[1]),r(t(h,u),s[1]))),-c[2]),r(e(r(t(D,S),a[1]),e(r(t(E,_),-o[1]),r(t(x,g),s[1]))),i[2]))),e(r(e(r(t(D,S),i[1]),e(r(t(T,f),-o[1]),r(t(b,d),s[1]))),-a[2]),e(r(e(r(t(E,_),i[1]),e(r(t(T,f),-a[1]),r(t(h,u),s[1]))),o[2]),r(e(r(t(x,g),i[1]),e(r(t(b,d),-a[1]),r(t(h,u),o[1]))),-s[2]))))),e(e(e(r(e(r(t(N,O),o[1]),e(r(t(M,C),-s[1]),r(t(D,S),c[1]))),i[2]),r(e(r(t(N,O),i[1]),e(r(t(A,p),-s[1]),r(t(T,f),c[1]))),-o[2])),e(r(e(r(t(M,C),i[1]),e(r(t(A,p),-o[1]),r(t(b,d),c[1]))),s[2]),r(e(r(t(D,S),i[1]),e(r(t(T,f),-o[1]),r(t(b,d),s[1]))),-c[2]))),e(e(r(e(r(t(M,C),a[1]),e(r(t(j,v),-o[1]),r(t(x,g),c[1]))),i[2]),r(e(r(t(M,C),i[1]),e(r(t(A,p),-o[1]),r(t(b,d),c[1]))),-a[2])),e(r(e(r(t(j,v),i[1]),e(r(t(A,p),-a[1]),r(t(h,u),c[1]))),o[2]),r(e(r(t(x,g),i[1]),e(r(t(b,d),-a[1]),r(t(h,u),o[1]))),-c[2])))));return P[P.length-1]}return i}function m(e,t,n,r){function i(i,a,o,s,c,l){var u=e(e(n(i[0],i[0]),n(i[1],i[1])),e(n(i[2],i[2]),n(i[3],i[3]))),d=r(u,a[0]),f=r(u,o[0]),p=r(u,s[0]),m=r(u,c[0]),h=r(u,l[0]),g=e(e(n(a[0],a[0]),n(a[1],a[1])),e(n(a[2],a[2]),n(a[3],a[3]))),_=r(g,i[0]),v=r(g,o[0]),y=r(g,s[0]),b=r(g,c[0]),x=r(g,l[0]),S=e(e(n(o[0],o[0]),n(o[1],o[1])),e(n(o[2],o[2]),n(o[3],o[3]))),C=r(S,i[0]),w=r(S,a[0]),T=r(S,s[0]),E=r(S,c[0]),D=r(S,l[0]),O=e(e(n(s[0],s[0]),n(s[1],s[1])),e(n(s[2],s[2]),n(s[3],s[3]))),k=r(O,i[0]),A=r(O,a[0]),j=r(O,o[0]),M=r(O,c[0]),N=r(O,l[0]),P=e(e(n(c[0],c[0]),n(c[1],c[1])),e(n(c[2],c[2]),n(c[3],c[3]))),F=r(P,i[0]),I=r(P,a[0]),L=r(P,o[0]),ee=r(P,s[0]),te=r(P,l[0]),ne=e(e(n(l[0],l[0]),n(l[1],l[1])),e(n(l[2],l[2]),n(l[3],l[3]))),R=r(ne,i[0]),re=r(ne,a[0]),z=r(ne,o[0]),B=r(ne,s[0]),V=r(ne,c[0]),ie=t(e(e(e(r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),o[2]),r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),-s[2])),e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),c[2]),r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),-l[2]))),a[3]),e(r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),a[2]),r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),-s[2])),e(r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),c[2]),r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),-l[2]))),-o[3]),r(e(e(r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),a[2]),r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),-o[2])),e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),c[2]),r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),-l[2]))),s[3]))),e(e(r(e(e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),a[2]),r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),-o[2])),e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),s[2]),r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),-l[2]))),-c[3]),r(e(e(r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),a[2]),r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),-o[2])),e(r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),s[2]),r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),-c[2]))),l[3])),e(r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),a[2]),r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),-s[2])),e(r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),c[2]),r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),-l[2]))),i[3]),r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-s[2])),e(r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),c[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-l[2]))),-a[3])))),e(e(e(r(e(e(r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),c[2]),r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),-l[2]))),s[3]),r(e(e(r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),i[2]),r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),s[2]),r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),-l[2]))),-c[3])),e(r(e(e(r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),i[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-a[2])),e(r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),s[2]),r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),-c[2]))),l[3]),r(e(e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),a[2]),r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),-o[2])),e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),s[2]),r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),-l[2]))),i[3]))),e(e(r(e(e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),i[2]),r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),-o[2])),e(r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),s[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-l[2]))),-a[3]),r(e(e(r(e(r(t(B,N),a[1]),e(r(t(re,x),-s[1]),r(t(A,y),l[1]))),i[2]),r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),s[2]),r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),-l[2]))),o[3])),e(r(e(e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),i[2]),r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-l[2]))),-s[3]),r(e(e(r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),i[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-a[2])),e(r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-s[2]))),l[3]))))),e(e(e(r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),o[2]),r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),-s[2])),e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),c[2]),r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),-l[2]))),i[3]),e(r(e(e(r(e(r(t(V,te),s[1]),e(r(t(B,N),-c[1]),r(t(ee,M),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-s[2])),e(r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),c[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-l[2]))),-o[3]),r(e(e(r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-o[2])),e(r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),c[2]),r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),-l[2]))),s[3]))),e(e(r(e(e(r(e(r(t(B,N),o[1]),e(r(t(z,D),-s[1]),r(t(j,T),l[1]))),i[2]),r(e(r(t(B,N),i[1]),e(r(t(R,h),-s[1]),r(t(k,p),l[1]))),-o[2])),e(r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),s[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-l[2]))),-c[3]),r(e(e(r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),i[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-o[2])),e(r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),s[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-c[2]))),l[3])),e(r(e(e(r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),a[2]),r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),-o[2])),e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),c[2]),r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),-l[2]))),i[3]),r(e(e(r(e(r(t(V,te),o[1]),e(r(t(z,D),-c[1]),r(t(L,E),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-o[2])),e(r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),c[2]),r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),-l[2]))),-a[3])))),e(e(e(r(e(e(r(e(r(t(V,te),a[1]),e(r(t(re,x),-c[1]),r(t(I,b),l[1]))),i[2]),r(e(r(t(V,te),i[1]),e(r(t(R,h),-c[1]),r(t(F,m),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),c[2]),r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),-l[2]))),o[3]),r(e(e(r(e(r(t(z,D),a[1]),e(r(t(re,x),-o[1]),r(t(w,v),l[1]))),i[2]),r(e(r(t(z,D),i[1]),e(r(t(R,h),-o[1]),r(t(C,f),l[1]))),-a[2])),e(r(e(r(t(re,x),i[1]),e(r(t(R,h),-a[1]),r(t(_,d),l[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-l[2]))),-c[3])),e(r(e(e(r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),i[2]),r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),-a[2])),e(r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-c[2]))),l[3]),r(e(e(r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),a[2]),r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),-o[2])),e(r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),s[2]),r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),-c[2]))),i[3]))),e(e(r(e(e(r(e(r(t(ee,M),o[1]),e(r(t(L,E),-s[1]),r(t(j,T),c[1]))),i[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-o[2])),e(r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),s[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-c[2]))),-a[3]),r(e(e(r(e(r(t(ee,M),a[1]),e(r(t(I,b),-s[1]),r(t(A,y),c[1]))),i[2]),r(e(r(t(ee,M),i[1]),e(r(t(F,m),-s[1]),r(t(k,p),c[1]))),-a[2])),e(r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),s[2]),r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),-c[2]))),o[3])),e(r(e(e(r(e(r(t(L,E),a[1]),e(r(t(I,b),-o[1]),r(t(w,v),c[1]))),i[2]),r(e(r(t(L,E),i[1]),e(r(t(F,m),-o[1]),r(t(C,f),c[1]))),-a[2])),e(r(e(r(t(I,b),i[1]),e(r(t(F,m),-a[1]),r(t(_,d),c[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-c[2]))),-s[3]),r(e(e(r(e(r(t(j,T),a[1]),e(r(t(A,y),-o[1]),r(t(w,v),s[1]))),i[2]),r(e(r(t(j,T),i[1]),e(r(t(k,p),-o[1]),r(t(C,f),s[1]))),-a[2])),e(r(e(r(t(A,y),i[1]),e(r(t(k,p),-a[1]),r(t(_,d),s[1]))),o[2]),r(e(r(t(w,v),i[1]),e(r(t(C,f),-a[1]),r(t(_,d),o[1]))),-s[2]))),c[3]))))));return ie[ie.length-1]}return i}var h=[c,l,u];function g(e){var t=h[e.length];return t||=h[e.length]=s(e.length),t.apply(void 0,e)}function _(e,t,n,r,i,a,o,s){function c(t,n,c,l,u,d){switch(arguments.length){case 0:case 1:return 0;case 2:return r(t,n);case 3:return i(t,n,c);case 4:return a(t,n,c,l);case 5:return o(t,n,c,l,u);case 6:return s(t,n,c,l,u,d)}for(var f=Array(arguments.length),p=0;p<arguments.length;++p)f[p]=arguments[p];return e(f)}return c}function v(){for(;h.length<=o;)h.push(s(h.length));t.exports=_.apply(void 0,[g].concat(h));for(var e=0;e<=o;++e)t.exports[e]=h[e]}v()})),vf=o(((e,t)=>{var n=_f()[4];cf(),t.exports=i;function r(e,t,r,i,a,o){var s=t.opposite(i,a);if(!(s<0)){if(a<i){var c=i;i=a,a=c,c=o,o=s,s=c}t.isConstraint(i,a)||n(e[i],e[a],e[o],e[s])<0&&r.push(i,a)}}function i(e,t){for(var i=[],a=e.length,o=t.stars,s=0;s<a;++s)for(var c=o[s],l=1;l<c.length;l+=2){var u=c[l];if(!(u<s)&&!t.isConstraint(s,u)){for(var d=c[l-1],f=-1,p=1;p<c.length;p+=2)if(c[p-1]===u){f=c[p];break}f<0||n(e[s],e[u],e[d],e[f])<0&&i.push(s,u)}}for(;i.length>0;){for(var u=i.pop(),s=i.pop(),d=-1,f=-1,c=o[s],m=1;m<c.length;m+=2){var h=c[m-1],g=c[m];h===u?f=g:g===u&&(d=h)}d<0||f<0||n(e[s],e[u],e[d],e[f])>=0||(t.flip(s,u),r(e,t,i,d,s,f),r(e,t,i,s,f,d),r(e,t,i,f,u,d),r(e,t,i,u,d,f))}}})),yf=o(((e,t)=>{var n=cf();t.exports=c;function r(e,t,n,r,i,a,o){this.cells=e,this.neighbor=t,this.flags=r,this.constraint=n,this.active=i,this.next=a,this.boundary=o}var i=r.prototype;function a(e,t){return e[0]-t[0]||e[1]-t[1]||e[2]-t[2]}i.locate=(function(){var e=[0,0,0];return function(t,r,i){var o=t,s=r,c=i;return r<i?r<t&&(o=r,s=i,c=t):i<t&&(o=i,s=t,c=r),o<0?-1:(e[0]=o,e[1]=s,e[2]=c,n.eq(this.cells,e,a))}})();function o(e,t){for(var n=e.cells(),i=n.length,o=0;o<i;++o){var s=n[o],c=s[0],l=s[1],u=s[2];l<u?l<c&&(s[0]=l,s[1]=u,s[2]=c):u<c&&(s[0]=u,s[1]=c,s[2]=l)}n.sort(a);for(var d=Array(i),o=0;o<d.length;++o)d[o]=0;var f=[],p=[],m=Array(3*i),h=Array(3*i),g=null;t&&(g=[]);for(var _=new r(n,m,h,d,f,p,g),o=0;o<i;++o)for(var s=n[o],v=0;v<3;++v){var c=s[v],l=s[(v+1)%3],y=m[3*o+v]=_.locate(l,c,e.opposite(l,c)),b=h[3*o+v]=e.isConstraint(c,l);y<0&&(b?p.push(o):(f.push(o),d[o]=1),t&&g.push([l,c,-1]))}return _}function s(e,t,n){for(var r=0,i=0;i<e.length;++i)t[i]===n&&(e[r++]=e[i]);return e.length=r,e}function c(e,t,n){var r=o(e,n);if(t===0)return n?r.cells.concat(r.boundary):r.cells;for(var i=1,a=r.active,c=r.next,l=r.flags,u=r.cells,d=r.constraint,f=r.neighbor;a.length>0||c.length>0;){for(;a.length>0;){var p=a.pop();if(l[p]!==-i){l[p]=i,u[p];for(var m=0;m<3;++m){var h=f[3*p+m];h>=0&&l[h]===0&&(d[3*p+m]?c.push(h):(a.push(h),l[h]=i))}}}var g=c;c=a,a=g,c.length=0,i=-i}var _=s(u,l,t);return n?_.concat(r.boundary):_}})),bf=c(o(((e,t)=>{var n=hf(),r=gf(),i=vf(),a=yf();t.exports=u;function o(e){return[Math.min(e[0],e[1]),Math.max(e[0],e[1])]}function s(e,t){return e[0]-t[0]||e[1]-t[1]}function c(e){return e.map(o).sort(s)}function l(e,t,n){return t in e?e[t]:n}function u(e,t,o){Array.isArray(t)?(o||={},t||=[]):(o=t||{},t=[]);var s=!!l(o,`delaunay`,!0),u=!!l(o,`interior`,!0),d=!!l(o,`exterior`,!0),f=!!l(o,`infinity`,!1);if(!u&&!d||e.length===0)return[];var p=n(e,t);if(s||u!==d||f){for(var m=r(e.length,c(t)),h=0;h<p.length;++h){var g=p[h];m.addTriangle(g[0],g[1],g[2])}return s&&i(e,m),d?u?f?a(m,0,f):m.cells():a(m,1,f):a(m,-1)}return p}}))(),1),xf=new Set,Sf=!1;function Cf(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length;xf.size&&xf.clear();let a=wf(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s=0,c=0,l=0;if(r&&(a=Mf(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ef(a,o,s,c,l),o}function wf(e,t,n,r,i){let a=null;if(i===gp(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=pp(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=pp(i/r|0,e[i],e[i+1],a);return a&&op(a,a.next)&&(mp(a),a=a.next),a}function Tf(e,t=e){let n=t===e,r=e,i;do i=!1,r!==r.next&&(xf.size===0||!xf.has(r))&&(op(r,r.next)||ap(r.prev,r,r.next)===0)?((n||r===t)&&(t=r.prev),Sf=!0,mp(r),r=r.prev,i=!0):(n||r!==t)&&(r=r.next,i=!n);while(i||r!==t);return t}function Ef(e,t,n,r,i){i&&Qf(e,n,r,i);let a=e,o=!1;for(;e.prev!==e.next;){let s=e.prev,c=e.next;if(ap(s,e,c)<0&&(i?Of(e,n,r,i):Df(e)))t.push(s.i,e.i,c.i),mp(e),e=c,a=c;else if(e=c,e===a){if(Sf=!1,e=Tf(e),Sf){a=e;continue}if(!o){e=kf(e,t),a=e,o=!0;continue}Af(e,t,n,r,i);break}}}function Df(e){let t=e.prev,n=e,r=e.next,i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&(i!==m.x||s!==m.y)&&rp(i,s,a,c,o,l,m.x,m.y)&&ap(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Of(e,t,n,r){let i=e.prev,a=e,o=e.next,s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=tp(p,m,t,n,r),v=tp(h,g,t,n,r),y=e.prevZ;for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==o&&(s!==y.x||u!==y.y)&&rp(s,u,c,d,l,f,y.x,y.y)&&ap(y.prev,y,y.next)>=0)return!1;y=y.prevZ}let b=e.nextZ;for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==o&&(s!==b.x||u!==b.y)&&rp(s,u,c,d,l,f,b.x,b.y)&&ap(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kf(e,t){let n=e,r=!1;do{let i=n.prev,a=n.next.next;sp(i,n,n.next,a,!1)&&up(i,a)&&up(a,i)&&(t.push(i.i,n.i,a.i),mp(n),mp(n.next),n=e=a,r=!0),n=n.next}while(n!==e);return r?Tf(n):n}function Af(e,t,n,r,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&ip(a,e)){let o=fp(a,e);a=Tf(a,a.next),o=Tf(o,o.next),Ef(a,t,n,r,i),Ef(o,t,n,r,i);return}e=e.next}a=a.next}while(a!==e)}var jf=!1;function Mf(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=wf(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&xf.add(o),i.push(np(o))}i.sort(Nf),Bf(e.length/r,t.length),Vf(n,n),jf=!0;for(let e=0;e<i.length;e++)n=Pf(i[e],n);return jf=!1,Tf(n)}function Nf(e,t){return e.x-t.x||e.y-t.y||(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x)}function Pf(e,t){let n=Gf(e,t);if(!n)return t;let r=fp(n,e),i=r.next;return Vf(n,i.next),Tf(r,r.next),Tf(n,n.next)}var Ff=16,If=new Float64Array,Lf=0,Rf=[],zf=[];function Bf(e,t){let n=Math.ceil((e+2*t)/Ff)+t+2;If.length<n*4&&(If=new Float64Array(n*4)),Lf=0}function Vf(e,t){let n=e;do{let e=Lf++;Rf[e]=n;let r=n.x,i=n.y,a=n.x,o=n.y,s=0;do{let t=n.next;n.z=e,t.x<r&&(r=t.x),t.x>a&&(a=t.x),t.y<i&&(i=t.y),t.y>o&&(o=t.y),n=t}while(++s<Ff&&n!==t);zf[e]=n;let c=e*4;If[c]=r,If[c+1]=i,If[c+2]=a,If[c+3]=o}while(n!==t)}function Hf(e,t){let n=e.z*4;t.x<If[n]&&(If[n]=t.x),t.y<If[n+1]&&(If[n+1]=t.y),t.x>If[n+2]&&(If[n+2]=t.x),t.y>If[n+3]&&(If[n+3]=t.y)}function Uf(e){let t=zf[e];for(;t.prev.next!==t;)t=t.next;return zf[e]=t,t}function Wf(e){let t=Rf[e];for(;t.prev.next!==t;)t=t.next;return Rf[e]=t,t}function Gf(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(op(e,n))return n;for(let t=0,s=0;t<Lf;t++,s+=4){if(i<If[s+1]||i>If[s+3]||If[s]>r||If[s+2]<=a)continue;let c=Uf(t);n=Wf(t);do{if(n.prev.next===n){if(op(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}}n=n.next}while(n!==c)}if(!o)return null;let s=o.x,c=o.y,l=Math.min(i,c),u=Math.max(i,c),d=1/0;for(let t=0,f=0;t<Lf;t++,f+=4){if(If[f+2]<s||If[f]>r||If[f+3]<l||If[f+1]>u)continue;let p=Uf(t);n=Wf(t);do{if(n.prev.next===n&&r>=n.x&&n.x>=s&&r!==n.x&&rp(i<c?r:a,i,s,c,i<c?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);(up(n,e)||n.y===i&&n.next.y===i&&n.next.x>r)&&(t<d||t===d&&(n.x>o.x||n.x===o.x&&Kf(o,n)))&&(o=n,d=t)}n=n.next}while(n!==p)}return o}function Kf(e,t){return ap(e.prev,e,t.prev)<0&&ap(t.next,e,e.next)<0}var qf=[],Jf=[],Yf=new Uint32Array,Xf=new Uint32Array,Zf=new Uint32Array(256);function Qf(e,t,n,r){let i=e,a=0;do i.z=tp(i.x,i.y,t,n,r),qf[a++]=i,i=i.next;while(i!==e);$f(a);let o=null;for(let e=0;e<a;e++){let t=qf[e];t.prevZ=o,o&&(o.nextZ=t),o=t}o.nextZ=null,qf.fill(null,0,a),Jf.fill(null,0,a)}function $f(e){if(e<=32)for(let t=1;t<e;t++){let e=qf[t],n=e.z,r=t-1;for(;r>=0&&qf[r].z>n;)qf[r+1]=qf[r],r--;qf[r+1]=e}else{Yf.length<e&&(Yf=new Uint32Array(e),Xf=new Uint32Array(e),Jf=Array(e));for(let t=0;t<e;t++)Yf[t]=qf[t].z;ep(e,qf,Yf,Jf,Xf,0),ep(e,Jf,Xf,qf,Yf,8),ep(e,qf,Yf,Jf,Xf,16),ep(e,Jf,Xf,qf,Yf,24)}}function ep(e,t,n,r,i,a){Zf.fill(0);for(let t=0;t<e;t++)Zf[n[t]>>>a&255]++;let o=0;for(let e=0;e<256;e++){let t=Zf[e];Zf[e]=o,o+=t}for(let o=0;o<e;o++){let e=n[o],s=Zf[e>>>a&255]++;r[s]=t[o],i[s]=e}}function tp(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function np(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function rp(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ip(e,t){let n=op(e,t)&&ap(e.prev,e,e.next)>0&&ap(t.prev,t,t.next)>0;return e.next.i!==t.i&&(n||up(e,t)&&up(t,e)&&(ap(e.prev,e,t.prev)!==0||ap(e,t.prev,t)!==0))&&!lp(e,t)&&(n||dp(e,t))}function ap(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function op(e,t){return e.x===t.x&&e.y===t.y}function sp(e,t,n,r,i=!0){let a=ap(e,t,n),o=ap(e,t,r),s=ap(n,r,e),c=ap(n,r,t);return(a>0&&o<0||a<0&&o>0)&&(s>0&&c<0||s<0&&c>0)?!0:i?!!(a===0&&cp(e,n,t)||o===0&&cp(e,r,t)||s===0&&cp(n,e,r)||c===0&&cp(n,t,r)):!1}function cp(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function lp(e,t){let n=Math.min(e.x,t.x),r=Math.max(e.x,t.x),i=Math.min(e.y,t.y),a=Math.max(e.y,t.y),o=e;do{let s=o.next;if(o.x>r&&s.x>r||o.x<n&&s.x<n||o.y>a&&s.y>a||o.y<i&&s.y<i)o=s;else{if(o.i!==e.i&&s.i!==e.i&&o.i!==t.i&&s.i!==t.i&&sp(o,s,e,t))return!0;o=s}}while(o!==e);return!1}function up(e,t){return ap(e.prev,e,e.next)<0?ap(e,t,e.next)>=0&&ap(e,e.prev,t)>=0:ap(e,t,e.prev)<0||ap(e,e.next,t)<0}function dp(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{let e=n.next;n.y>a!=e.y>a&&i<(e.x-n.x)*(a-n.y)/(e.y-n.y)+n.x&&(r=!r),n=e}while(n!==e);return r}function fp(e,t){let n=hp(e.i,e.x,e.y),r=hp(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function pp(e,t,n,r){let i=hp(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function mp(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ),jf&&Hf(e.prev,e.next)}function hp(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function gp(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var _p=4e4,vp=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],yp=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],bp=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],xp=e=>Math.hypot(e[0],e[1],e[2]),Sp=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];function Cp(e){let t=e.length,n=[0,0,0];for(let r of e)n[0]+=r[0]/t,n[1]+=r[1]/t,n[2]+=r[2]/t;let r=[0,0,0];for(let i=0;i<t;i++){let a=bp(vp(e[i],n),vp(e[(i+1)%t],n));r=[r[0]+a[0],r[1]+a[1],r[2]+a[2]]}return{centre:n,normal:r}}function wp(e){let t=bp(e,Math.abs(e[0])<.9?[1,0,0]:[0,1,0]);t=Sp(t,1/xp(t));let n=bp(e,t);return[t,n]}function Tp(e,t){let n=null;outer:for(let r of e)for(let e=0;e<3;e++){let i=r[e],a=r[(e+1)%3];if(i<t&&a<t&&(a===(i+1)%t?n=!0:i===(a+1)%t&&(n=!1),n!==null))break outer}return n===!1?e.map(e=>[e[0],e[2],e[1]]):e}var Ep=class{pts;size;cells=new Map;constructor(e,t){this.pts=e,this.size=t,e.forEach((e,t)=>{let n=this.key(e[0],e[1]),r=this.cells.get(n);r?r.push(t):this.cells.set(n,[t])})}key(e,t){return`${Math.floor(e/this.size)},${Math.floor(t/this.size)}`}nearest(e,t,n){let r=Math.floor(e/this.size),i=Math.floor(t/this.size),a=[];for(let o=0;o<4096;o++){for(let n=r-o;n<=r+o;n++)for(let s=i-o;s<=i+o;s++)if(Math.max(Math.abs(n-r),Math.abs(s-i))===o)for(let r of this.cells.get(`${n},${s}`)??[]){let n=this.pts[r];a.push([r,Math.hypot(n[0]-e,n[1]-t)])}if(a.length>=n&&(a.sort((e,t)=>e[1]-t[1]),a[n-1][1]<=o*this.size))return a.slice(0,n);if(a.length>=this.pts.length)break}return a.sort((e,t)=>e[1]-t[1]),a.slice(0,n)}};function Dp(e,t){let n=e.length;if(n<3)return null;let{centre:r,normal:i}=Cp(e),a=xp(i);if(a<1e-12)return null;let o=Sp(i,1/a),[s,c]=wp(o),l=e.map(e=>{let t=vp(e,r);return[yp(t,s),yp(t,c)]}),u=e.map(e=>yp(vp(e,r),o)),d=e.map((t,r)=>xp(vp(t,e[(r+1)%n]))).sort((e,t)=>e-t)[n>>1]||1e-6,f=[1/0,1/0],p=[-1/0,-1/0];for(let[e,t]of l)f=[Math.min(f[0],e),Math.min(f[1],t)],p=[Math.max(p[0],e),Math.max(p[1],t)];for(;(p[0]-f[0])/d*((p[1]-f[1])/d)>_p;)d*=1.5;let m=new Ep(l,d),h=[];for(let e=f[0]+d/2;e<p[0];e+=d)for(let t=f[1]+d/2;t<p[1];t+=d){let r=!1;for(let i=0;i<n;i++){let[a,o]=l[i],[s,c]=l[(i+1)%n];if(o>t!=c>t){let n=a+(t-o)*(s-a)/(c-o||1e-30);e<n&&(r=!r)}}r&&m.nearest(e,t,1)[0][1]>d*.5&&h.push([e,t])}let g=l.map((e,t)=>[t,(t+1)%n]),_=[];for(let e=0;e<4;e++){let r=[...l,...h];try{_=(0,bf.default)(r,g,{exterior:!1})}catch{return null}if(_.length!==n-2+2*h.length)return null;let i=t?Op(_,n,t):[];if(!i.length)break;if(e===3)return null;for(let[e,t]of i)h.push([(l[e][0]+l[t][0])/2,(l[e][1]+l[t][1])/2])}let v=Math.min(8,n);return{inner:h.map(([e,t])=>{let n=0,i=0;for(let[r,a]of m.nearest(e,t,v)){let e=1/Math.max(a,1e-9)**2;n+=u[r]*e,i+=e}let a=n/i;return[r[0]+s[0]*e+c[0]*t+o[0]*a,r[1]+s[1]*e+c[1]*t+o[1]*a,r[2]+s[2]*e+c[2]*t+o[2]*a]}),tris:Tp(_,n)}}function Op(e,t,n){let r=new Map;for(let i of e)for(let e=0;e<3;e++){let a=i[e],o=i[(e+1)%3];a>=t||o>=t||(a+1)%t===o||(o+1)%t===a||n(a,o)&&r.set(a<o?`${a},${o}`:`${o},${a}`,[a,o])}return Array.from(r.values())}function kp(e,t){let n=e.length,{centre:r,normal:i}=Cp(e),a=xp(i);if(a<1e-12)return null;let[o,s]=wp(Sp(i,1/a)),c=[];for(let t of e){let e=vp(t,r);c.push(yp(e,o),yp(e,s))}let l=Cf(c);if(l.length!==(n-2)*3)return null;let u=[];for(let e=0;e<l.length;e+=3)u.push([l[e],l[e+1],l[e+2]]);return t&&Op(u,n,t).length?null:{inner:[],tris:Tp(u,n)}}function Ap(e,t){let n=e.length;if(n<3)return null;let r=e.map(e=>[e[0],e[1],e[2]]),i,a=kp(e);if(a)i=a.tris.map(e=>e.slice());else{let{centre:t}=Cp(e);r.push(t),i=e.map((e,t)=>[t,(t+1)%n,n])}let o=e.map((t,r)=>xp(vp(t,e[(r+1)%n]))).sort((e,t)=>e-t)[n>>1]||.001,s=0;for(let e of i)s+=xp(bp(vp(r[e[1]],r[e[0]]),vp(r[e[2]],r[e[0]])))/2;let c=s/(.433*o*o);c>4e4&&(o*=Math.sqrt(c/_p));let l=1048576,u=(e,t)=>e<t?e*l+t:t*l+e,d=(e,t)=>e<n&&t<n&&((e+1)%n===t||(t+1)%n===e),f=(e,r)=>e<n&&r<n&&!d(e,r)&&!!t?.(e,r),p=new Map,m=()=>{p=new Map,i.forEach((e,t)=>{for(let n=0;n<3;n++){let r=u(e[n],e[(n+1)%3]),i=p.get(r);i?i.push(t):p.set(r,[t])}})},h=(e,t)=>xp(vp(r[e],r[t])),g=(e,t,n,i)=>{let a=r[n],o=r[i],s=r[e],c=r[t],l=a[0]-s[0],u=a[1]-s[1],d=a[2]-s[2],f=o[0]-s[0],p=o[1]-s[1],m=o[2]-s[2],h=a[0]-c[0],g=a[1]-c[1],_=a[2]-c[2],v=o[0]-c[0],y=o[1]-c[1],b=o[2]-c[2],x=l*f+u*p+d*m,S=Math.hypot(u*m-d*p,d*f-l*m,l*p-u*f),C=h*v+g*y+_*b,w=Math.hypot(g*b-_*y,_*v-h*b,h*y-g*v);return S*C+x*w<-1e-12*(S+w+1e-30)},_=e=>bp(vp(r[e[1]],r[e[0]]),vp(r[e[2]],r[e[0]])),v=(e,t,n)=>{for(let r=0;r<3;r++){let i=e[r],a=e[(r+1)%3];if(i===t&&a===n||i===n&&a===t)return[i,a,e[(r+2)%3]]}return e},y=()=>{m();let e=[];for(let[t,n]of p){if(n.length!==2)continue;let r=Math.floor(t/l),i=t%l,a=h(r,i);(a>o*1.33||f(r,i))&&e.push([a,r,i])}e.sort((e,t)=>t[0]-e[0]);let t=new Set,n=0;for(let[,a,o]of e){let e=p.get(u(a,o));if(e.some(e=>t.has(e)))continue;let s=r.length;r.push([(r[a][0]+r[o][0])/2,(r[a][1]+r[o][1])/2,(r[a][2]+r[o][2])/2]);for(let n of e){let[e,r,c]=v(i[n],a,o);i[n]=[e,s,c],t.add(n),t.add(i.length),i.push([s,r,c])}n++}return n},b=e=>{e&&m();let t=0;for(let e of Array.from(p.keys())){let n=p.get(e);if(!n||n.length!==2)continue;let r=Math.floor(e/l),a=e%l,[o,s]=n,c=v(i[o],r,a),d=v(i[s],r,a);if(c[0]===d[0])continue;let[m,h,y]=c,b=d[2];if(y===b||p.has(u(y,b))||f(y,b)||!g(y,b,m,h))continue;let x=[y,m,b],S=[b,h,y],C=_(c);if(!(yp(_(x),C)<=0||yp(_(S),C)<=0)){i[o]=x,i[s]=S,p.delete(e);for(let[e,t,n]of[[y,m,o],[m,b,o],[b,h,s],[h,y,s]]){let r=p.get(u(e,t));r&&p.set(u(e,t),r.map(e=>e===o||e===s?n:e))}p.set(u(y,b),[o,s]),t++}}return t},x=e=>{let t=r.length,a=new Float64Array(t*3),o=new Uint32Array(t);for(let s=0;s<e;s++){a.fill(0),o.fill(0);for(let e of i)for(let t=0;t<3;t++){let n=e[t],i=e[(t+1)%3];for(let e=0;e<3;e++)a[3*n+e]+=r[i][e],a[3*i+e]+=r[n][e];o[n]++,o[i]++}for(let e=n;e<t;e++)o[e]&&(r[e]=[a[3*e]/o[e],a[3*e+1]/o[e],a[3*e+2]/o[e]])}};for(let e=0;e<60;e++){let e=y();for(let e=0;e<2&&b(e===0);e++);if(x(2),!e||r.length-n>4e4)break}for(let e=0;e<8&&b(e===0);e++)x(2);x(8),m();for(let[e,t]of p)if(t.length===2&&f(Math.floor(e/l),e%l))return null;return i.length===n-2+2*(r.length-n)?{inner:r.slice(n),tris:Tp(i,n)}:null}function jp(e,t){let n=Dp(e,t);if(n)return n;let r=Ap(e,t);if(r)return r;let i=kp(e,t);if(i)return i;let a=e.length,{centre:o}=Cp(e);return{inner:[o],tris:e.map((e,t)=>[t,(t+1)%a,a])}}function Mp(e){let t=e.flat(),n=t.length;if(e.some(e=>e.length<3))return null;let{centre:r,normal:i}=Cp(e[0]),a=xp(i);if(a<1e-12)return null;let[o,s]=wp(Sp(i,1/a)),c=t.map(e=>{let t=vp(e,r);return[yp(t,o),yp(t,s)]}),l=[],u=[],d=0;for(let t of e){for(let e=0;e<t.length;e++)l.push([d+e,d+(e+1)%t.length]),u.push([d+e,d+(e+1)%t.length]);d+=t.length}let f=u.map(([e,n])=>xp(vp(t[e],t[n]))).sort((e,t)=>e-t),p=f[f.length>>1]||1e-6,m=[1/0,1/0],h=[-1/0,-1/0];for(let[e,t]of c)m=[Math.min(m[0],e),Math.min(m[1],t)],h=[Math.max(h[0],e),Math.max(h[1],t)];for(;(h[0]-m[0])/p*((h[1]-m[1])/p)>2500;)p*=1.25;let g=new Ep(c,p),_=[];for(let e=m[0]+p/2;e<h[0];e+=p)for(let t=m[1]+p/2;t<h[1];t+=p){let n=!1;for(let[r,i]of u){let[a,o]=c[r],[s,l]=c[i];if(o>t!=l>t){let r=a+(t-o)*(s-a)/(l-o||1e-30);e<r&&(n=!n)}}n&&g.nearest(e,t,1)[0][1]>p*.5&&_.push([e,t])}let v;try{v=(0,bf.default)([...c,..._],l,{exterior:!1})}catch{return null}if(v.length!==n-2+2*(e.length-1)+2*_.length)return null;let y=0;for(let t=0;t<e[0].length;t++){let[n,r]=c[t],[i,a]=c[(t+1)%e[0].length];y+=n*a-i*r}let b=[...c,..._];return v=v.map(e=>{let[t,n,r]=e.map(e=>b[e]);return((n[0]-t[0])*(r[1]-t[1])-(n[1]-t[1])*(r[0]-t[0]))*y>=0?e:[e[0],e[2],e[1]]}),{inner:_.map(([e,t])=>[r[0]+o[0]*e+s[0]*t,r[1]+o[1]*e+s[1]*t,r[2]+o[2]*e+s[2]*t]),tris:v}}var Np=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Pp=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function Fp(e,t,n){let[r,i]=wp(t),a=e.map(e=>{let t=Np(e,n);return[Pp(t,r),Pp(t,i)]}),o=!1,s=1/0;for(let e=0;e<a.length;e++){let[t,n]=a[e],[r,i]=a[(e+1)%a.length];n>0!=i>0&&0<t+(0-n)*(r-t)/(i-n||1e-30)&&(o=!o);let c=r-t,l=i-n,u=Math.max(0,Math.min(1,-(t*c+n*l)/(c*c+l*l||1e-30)));s=Math.min(s,Math.hypot(t+u*c,n+u*l))}return{inside:o,room:s}}function Ip(e){let{centre:t,normal:n}=Cp(e),r=Math.hypot(...n);if(r<1e-12)return null;let i=[n[0]/r,n[1]/r,n[2]/r],{inside:a,room:o}=Fp(e,i,t);return a?{centre:t,normal:i,room:o,loop:e}:null}function Lp(e,t){let n=Pp(Np(t,e.centre),e.normal),r=[t[0]-e.normal[0]*n,t[1]-e.normal[1]*n,t[2]-e.normal[2]*n],{inside:i,room:a}=Fp(e.loop,e.normal,r);return i?{...e,centre:r,room:a}:null}function Rp(e,t,n){let r=Pp(n,e.normal);if(Math.abs(r)<1e-9)return null;let i=Pp(Np(e.centre,t),e.normal)/r;if(i<=0)return null;let a=[t[0]+n[0]*i,t[1]+n[1]*i,t[2]+n[2]*i];return Fp(e.loop,e.normal,a).inside?i:null}function zp(e,t){if(!t.points)return[e];let n=Math.max(2,t.size),r=[];for(let i of t.points){if(Math.abs(Pp(Np(i,e.centre),e.normal))>n)continue;let t=Lp(e,i);t&&r.push(t)}return r}function Bp(e){return(e.size/2+e.tolerance)*Math.SQRT2}function Vp(e,t,n){let[r,i]=wp(t),a=[],o=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[s,c]of n)for(let[n,l]of o)for(let o=0;o<3;o++)a.push(e[o]+t[o]*s+r[o]*(n*c)/2+i[o]*(l*c)/2);let s=[];for(let e=0;e<n.length-1;e++)for(let t=0;t<4;t++){let n=4*e+t,r=4*e+(t+1)%4,i=n+4,a=r+4;s.push(n,r,a,n,a,i)}let c=4*(n.length-1);return s.push(0,2,1,0,3,2),s.push(c,c+1,c+2,c,c+2,c+3),{positions:Float32Array.from(a),index:Uint32Array.from(s)}}function Hp(e){let t=Math.min(75,Math.max(0,e.angle))*Math.PI/180,n=Math.min(Math.max(0,e.chamfer),e.length/2),r=n*Math.tan(t),i=e.size*.4;return r>i&&(n*=i/r,r=i),r>1e-4&&n>1e-4?{height:n,inset:r}:{height:0,inset:0}}function Up(e,t,n){let r=t.pegOn===`body`,i=r?e.normal:[-e.normal[0],-e.normal[1],-e.normal[2]];return{base:r?e.centre:[e.centre[0]+e.normal[0]*n,e.centre[1]+e.normal[1]*n,e.centre[2]+e.normal[2]*n],axis:i}}function Wp(e,t,n,r=Math.max(t.size,1)){let{base:i,axis:a}=Up(e,t,n),o=t.length+n,s=t.size,c=t.tolerance,{height:l,inset:u}=Hp(t);if(!l)return{peg:Vp(i,a,[[-r,s],[0,s],[o,s]]),socket:Vp(i,a,[[-r,s+2*c],[0,s+2*c],[o+c,s+2*c]])};let d=Vp(i,a,[[-r,s],[0,s],[o-l,s],[o,s-2*u]]),f=Math.hypot(l,u),p=o-l+c*(f-l)/u,m=s/2+(c*f-(l+c)*u)/l;return{peg:d,socket:Vp(i,a,[[-r,s+2*c],[0,s+2*c],[p,s+2*c],[o+c,2*m]])}}var Gp=1.25,Kp=65535,qp=2**-24,Jp=Symbol(`SKIP_GENERATION`),Yp={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Jp]:!1};function Xp(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function Zp(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function Qp(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function $p(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function em(e,t){return t[e+15]===Kp}function tm(e,t){return t[e+6]}function nm(e,t){return t[e+14]}function rm(e){return e+8}function im(e,t){return e+t[e+6]*8}function am(e,t){return t[e+7]}function om(e){return e}function sm(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,T=S+C;w<s&&(s=w),T>u&&(u=T),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var cm=8,lm=8,um=new Int32Array(cm),dm=new Float32Array(48),fm=new Float32Array(48),pm=new Float32Array(6),mm=new Float32Array(6),hm=new Int32Array(lm),gm=new Float32Array(48);function _m(e,t,n,r){for(let i=0;i<3;i++){let a=t[e+2*i],o=t[e+2*i+1],s=a-o,c=a+o;s<n[r+i]&&(n[r+i]=s),c>n[r+i+3]&&(n[r+i+3]=c)}}function vm(e,t){let n=e[t+3]-e[t],r=e[t+4]-e[t+1],i=e[t+5]-e[t+2];return 2*(n*r+r*i+i*n)}function ym(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=Zp(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=Zp(e),o!==-1&&(s=bm(n,r,i,o));else if(a===2){let a=$p(e),c=Gp*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/cm;if(i<lm){for(let t=0;t<i;t++){let r=u+t*6,i=n[r+2*e],a=t;for(;a>0&&n[hm[a-1]+2*e]>i;)hm[a]=hm[a-1],a--;hm[a]=r}for(let e=0;e<3;e++)pm[e]=1/0,pm[e+3]=-1/0,mm[e]=1/0,mm[e+3]=-1/0;for(let e=i-1;e>=0;e--)Qp(hm[e],n,mm),gm.set(mm,e*6);for(let t=0;t<i-1;t++){Qp(hm[t],n,pm);let r=n[hm[t+1]+2*e];if(n[hm[t]+2*e]===r)continue;let l=t+1,u=i-l,d=$p(pm)/a,f=vm(gm,l*6)/a,p=1+Gp*(d*l+f*u);p<c&&(o=e,c=p,s=r)}}else{for(let e=0;e<cm;e++){um[e]=0;for(let t=0;t<3;t++)dm[e*6+t]=1/0,dm[e*6+t+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=cm&&(i=7),um[i]++,_m(t,n,dm,i*6)}for(let e=0;e<6;e++)fm[42+e]=dm[42+e];for(let e=6;e>=0;e--){let t=e*6,n=t+6;for(let e=0;e<3;e++)fm[t+e]=Math.min(dm[t+e],fm[n+e]),fm[t+e+3]=Math.max(dm[t+e+3],fm[n+e+3])}let t=0;for(let n=0;n<7;n++){let u=n*6,d=um[n];if(d!==0)for(let e=0;e<3;e++)t===0?(pm[e]=dm[u+e],pm[e+3]=dm[u+e+3]):(pm[e]=Math.min(pm[e],dm[u+e]),pm[e+3]=Math.max(pm[e+3],dm[u+e+3]));t+=d;let f=0,p=0;t!==0&&(f=$p(pm)/a);let m=i-t;m!==0&&(p=vm(fm,u+6)/a);let h=1+Gp*(f*t+p*m);h<c&&(o=e,c=h,s=r+l+n*l)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function bm(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}function xm(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Sm=2**32,Cm=new Float32Array(6),wm=new Float32Array(6);function Tm(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:f=!1}=i,p=e.primitiveBuffer,m=e.primitiveBufferStride,h=new(f?SharedArrayBuffer:ArrayBuffer)(32*Math.max(1,2*Math.ceil(r)-1)),g=new Float32Array(h),_=new Uint32Array(h),v=new Uint16Array(h),y=0,b=!1;return sm(t,n,r,Cm,wm),C(n,r,0),h.slice(0,y*32);function x(e){d&&d((e-a.offset)/a.count)}function S(e,t,n){let r=e*2;_[e+6]=t,v[r+14]=n,v[r+15]=Kp,x(t+n)}function C(e,n,r){let i=y++,a=i*8;g.set(Cm,a),!b&&r>=o&&(b=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=n>l;if(n<=c&&!d||r>=o){S(a,e,n);return}let f=ym(Cm,wm,t,e,n,u),h=f.axis===-1?-1:xm(p,m,t,e,n,f);if(f.axis===-1||h===e||h===e+n){if(!d){S(a,e,n);return}f.axis=Math.max(0,Zp(Cm)),h=e+Math.max(1,Math.floor(n/2))}_[a+7]=f.axis;let v=h-e;sm(t,e,v,Cm,wm),C(e,v,r+1);let x=y-i;if(x>Sm)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);_[a+6]=x;let w=n-v;sm(t,h,w,Cm,wm),C(h,w,r+1)}}function Em(e,t){let n=e.getRootRanges(t.range),r=n[0],i=n[n.length-1],a={offset:r.offset,count:i.offset+i.count-r.offset},o=new Float32Array(6*a.count);o.offset=a.offset,e.computePrimitiveBounds(a.offset,a.count,o),e._roots=n.map(n=>Tm(e,o,n.offset,n.count,t,a))}var Dm=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},Om=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},km,Am,jm=[],Mm=new Dm(()=>new ir);function Nm(e,t,n,r,i,a){km=Mm.getPrimitive(),Am=Mm.getPrimitive(),jm.push(km,Am),Om.setBuffer(e._roots[t]);let o=Pm(0,e.geometry,n,r,i,a);Om.clearBuffer(),Mm.releasePrimitive(km),Mm.releasePrimitive(Am),jm.pop(),jm.pop();let s=jm.length;return s>0&&(Am=jm[s-1],km=jm[s-2]),o}function Pm(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=Om,u=e*2;if(em(u,c)){let t=tm(e,l),n=nm(u,c);return Xp(om(e),s,km),r(t,n,!1,o,a+e/8,km)}{let u=rm(e),d=im(e,l),f=u,p=d,m,h,g,_;if(i&&(g=km,_=Am,Xp(om(f),s,g),Xp(om(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=km,Xp(om(f),s,g));let v=em(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,T(f)-e,!0,o+1,a+f/8,g)}else b=y&&Pm(f,t,n,r,i,a,o+1);if(b)return!0;_=Am,Xp(om(p),s,_);let x=em(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,T(p)-e,!0,o+1,a+p/8,_)}else C=S&&Pm(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=Om,r=e*2;for(;!em(r,t);)e=rm(e),r=e*2;return tm(e,n)}function T(e){let{uint16Array:t,uint32Array:n}=Om,r=e*2;for(;!em(r,t);)e=im(e,n),r=e*2;return tm(e,n)+nm(r,t)}}}var Fm=new Om.constructor,Im=new Om.constructor,Lm=new Dm(()=>new ir),Rm=new ir,zm=new ir,Bm=new ir,Vm=new ir,Hm=!1;function Um(e,t,n,r){if(Hm)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);Hm=!0;let i=e._roots,a=t._roots,o,s=0,c=0,l=new on().copy(n).invert();for(let e=0,t=i.length;e<t;e++){Fm.setBuffer(i[e]),c=0;let t=Lm.getPrimitive();Xp(om(0),Fm.float32Array,t),t.applyMatrix4(l);for(let e=0,i=a.length;e<i&&(Im.setBuffer(a[e]),o=Wm(0,0,n,l,r,s,c,0,0,t),Im.clearBuffer(),c+=a[e].byteLength/32,!o);e++);if(Lm.releasePrimitive(t),Fm.clearBuffer(),s+=i[e].byteLength/32,o)break}return Hm=!1,o}function Wm(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=Im,f=Fm):(d=Fm,f=Im);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=em(y,h),S=em(b,v),C=!1;if(S&&x)C=u?i(tm(t,_),nm(t*2,v),tm(e,m),nm(e*2,h),c,o+t/8,s,a+e/8):i(tm(e,m),nm(e*2,h),tm(t,_),nm(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=Lm.getPrimitive();Xp(om(t),g,l),l.applyMatrix4(n);let d=rm(e),f=im(e,m);Xp(om(d),p,Rm),Xp(om(f),p,zm);let h=l.intersectsBox(Rm),_=l.intersectsBox(zm);C=h&&Wm(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&Wm(t,f,r,n,i,o,a,c,s+1,l,!u),Lm.releasePrimitive(l)}else{let d=rm(t),f=im(t,_);Xp(om(d),g,Bm),Xp(om(f),g,Vm);let h=l.intersectsBox(Bm),v=l.intersectsBox(Vm);if(h&&v)C=Wm(e,d,n,r,i,a,o,s,c+1,l,u)||Wm(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=Wm(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=Lm.getPrimitive();t.copy(Bm).applyMatrix4(n);let l=rm(e),f=im(e,m);Xp(om(l),p,Rm),Xp(om(f),p,zm);let h=t.intersectsBox(Rm),g=t.intersectsBox(zm);C=h&&Wm(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&Wm(d,f,r,n,i,o,a,c,s+1,t,!u),Lm.releasePrimitive(t)}}else if(v){if(x)C=Wm(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=Lm.getPrimitive();t.copy(Vm).applyMatrix4(n);let l=rm(e),d=im(e,m);Xp(om(l),p,Rm),Xp(om(d),p,zm);let h=t.intersectsBox(Rm),g=t.intersectsBox(zm);C=h&&Wm(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&Wm(f,d,r,n,i,o,a,c,s+1,t,!u),Lm.releasePrimitive(t)}}}return C}var Gm=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!em(r,n);)e=rm(e),r=e*2;return tm(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!em(r,n);)e=im(e,t),r=e*2;return tm(e,t)+nm(r,n)};let i=(e,r,a)=>{let o=em(r*2,n);if(!e(a,o,r)&&!o){let n=rm(r),o=im(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=am(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},Km=new ir,qm=new Float32Array(6),Jm=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Yp,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Em(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,qm,0);let[e,t,r,u,d,f]=qm;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,qm,0);let[e,t,a,o,s,c]=qm,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*qp,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*qp,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*qp}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;em(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){Gm.setBVH(this,t),Gm.traverse(e),Gm.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(em(n,i)){let e=tm(t,r),o=nm(n,i);this.writePrimitiveRangeBounds(e,o,qm,0),a.set(qm,t)}else{let e=rm(t),n=im(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{Xp(0,new Float32Array(t),Km),e.union(Km)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=Nm(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return Um(this,e,t,r)}};function Ym(){return typeof SharedArrayBuffer<`u`}function Xm(e){return e.index?e.index.count:e.attributes.position.count}function Zm(e){return Xm(e)/3}function Qm(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function $m(e,t){if(!e.index){let n=e.attributes.position.count,r=Qm(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new Sr(r,1));for(let e=0;e<n;e++)r[e]=e}}function eh(e,t,n){let r=Xm(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function th(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function nh(e,t,n){let r=eh(e,t,n),i=th(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=Xm(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function rh(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var ih=class extends Jm{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!Ym())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Yp,...t},t[Jp]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=rh(nh(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else $m(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ir))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:nh(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},ah=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};ah.prototype.setFromBox=(function(){let e=new q;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var oh=(function(){let e=new q,t=new q,n=new q;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),sh=(function(){let e=new K,t=new q,n=new q;return function(r,i,a,o){oh(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1)r.at(s,a),i.at(c,o);else if(s>=0&&s<=1)c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);else if(c>=0&&c<=1)s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);else{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),ch=(function(){let e=new q,t=new q,n=new Gr,r=new Io;return function(i,a){let{radius:o,center:s}=i,{a:c,b:l,c:u}=a;if(r.start=c,r.end=l,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(r.start=c,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(r.start=l,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(n);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,t);if(a.containsPoint(e))return!0}return!1}})(),lh=[`x`,`y`,`z`],uh=1e-15,dh=uh*uh;function fh(e){return Math.abs(e)<uh}var ph=class extends rr{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new q),this.satBounds=[,,,,].fill().map(()=>new ah),this.points=[this.a,this.b,this.c],this.plane=new Gr,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Io,this.needsUpdate=!0}intersectsSphere(e){return ch(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<uh?h<uh||g<uh?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<uh?g<uh?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<uh&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};ph.prototype.closestPointToSegment=(function(){let e=new q,t=new q,n=new Io;return function(r,i=null,a=null){this.needsUpdate&&this.update();let{start:o,end:s}=r,c=this.points,l,u=1/0;if(this.plane.distanceToPoint(o)*this.plane.distanceToPoint(s)<0&&this.plane.intersectLine(r,e)!==null&&this.containsPoint(e))return i&&i.copy(e),a&&a.copy(e),0;for(let o=0;o<3;o++){let s=(o+1)%3;n.start.copy(c[o]),n.end.copy(c[s]),sh(n,r,e,t),l=e.distanceToSquared(t),l<u&&(u=l,i&&i.copy(e),a&&a.copy(t))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),ph.prototype.intersectsTriangle=(function(){let e=new ph,t=new ah,n=new ah,r=new q,i=new q,a=new q,o=new q,s=new Io,c=new Io,l=new q,u=new K,d=new K;function f(e,i,a,s){let c=r;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?c.copy(e.plane.normal):c.copy(i.plane.normal);let l=e.satBounds,u=e.satAxes;for(let r=1;r<4;r++){let a=l[r],s=u[r];if(t.setFromPoints(s,i.points),a.isSeparated(t)||(o.copy(c).cross(s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}let d=i.satBounds,f=i.satAxes;for(let r=1;r<4;r++){let a=d[r],s=f[r];if(t.setFromPoints(s,e.points),a.isSeparated(t)||(o.crossVectors(c,s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}return a&&(s||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),a.start.set(0,0,0),a.end.set(0,0,0)),!0}function p(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function m(e,t,n,r,i,a,o,s,c,l,u){if(i>0)p(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)p(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)p(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)p(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)p(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function h(e,t,n,i){let a=t.degenerateSegment,o=e.plane.distanceToPoint(a.start),s=e.plane.distanceToPoint(a.end);return fh(o)?fh(s)?f(e,t,n,i):(n&&(n.start.copy(a.start),n.end.copy(a.start)),e.containsPoint(a.start)):fh(s)?(n&&(n.start.copy(a.end),n.end.copy(a.end)),e.containsPoint(a.end)):e.plane.intersectLine(a,r)!=null&&(n&&(n.start.copy(r),n.end.copy(r)),e.containsPoint(r))}function g(e,t,n){let r=t.a;return fh(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function _(e,t,n){let i=e.degenerateSegment,a=t.a;return i.closestPointToPoint(a,!0,r),a.distanceToSquared(r)<dh&&(n&&(n.start.copy(a),n.end.copy(a)),!0)}function v(e,t,n,o){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let o=e.degenerateSegment,s=t.degenerateSegment,c=i,l=a;o.delta(c),s.delta(l);let u=r.subVectors(s.start,o.start),d=c.x*l.y-c.y*l.x;if(fh(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:fh(o.start.z+c.z*f-(s.start.z+l.z*p))?(n&&(n.start.copy(o.start).addScaledVector(c,f),n.end.copy(o.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?_(e,t,n):h(t,e,n,o)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<dh&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?_(t,e,n):g(t,e,n);if(t.isDegenerateIntoPoint)return g(e,t,n);if(t.isDegenerateIntoSegment)return h(e,t,n,o)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let o=v(this,t,n,r);if(o!==void 0)return o;let p=this.plane,h=t.plane,g=h.distanceToPoint(this.a),_=h.distanceToPoint(this.b),y=h.distanceToPoint(this.c);fh(g)&&(g=0),fh(_)&&(_=0),fh(y)&&(y=0);let b=g*_,x=g*y;if(b>0&&x>0)return!1;let S=p.distanceToPoint(t.a),C=p.distanceToPoint(t.b),w=p.distanceToPoint(t.c);fh(S)&&(S=0),fh(C)&&(C=0),fh(w)&&(w=0);let T=S*C,E=S*w;if(T>0&&E>0)return!1;i.copy(p.normal),a.copy(h.normal);let D=i.cross(a),O=0,k=Math.abs(D.x),A=Math.abs(D.y);A>k&&(k=A,O=1),Math.abs(D.z)>k&&(O=2);let j=lh[O],M=this.a[j],N=this.b[j],P=this.c[j],F=t.a[j],I=t.b[j],L=t.c[j];if(m(this,M,N,P,b,x,g,_,y,u,s)||m(t,F,I,L,T,E,S,C,w,d,c))return f(this,t,n,r);if(u.y<u.x){let e=u.y;u.y=u.x,u.x=e,l.copy(s.start),s.start.copy(s.end),s.end.copy(l)}if(d.y<d.x){let e=d.y;d.y=d.x,d.x=e,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<d.x||d.y<u.x?!1:(n&&(d.x>u.x?n.start.copy(c.start):n.start.copy(s.start),d.y<u.y?n.end.copy(c.end):n.end.copy(s.end)),!0)}})(),ph.prototype.distanceToPoint=(function(){let e=new q;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),ph.prototype.distanceToTriangle=(function(){let e=new q,t=new q,n=[`a`,`b`,`c`],r=new Io,i=new Io;return function(a,o=null,s=null){let c=o||s?r:null;if(this.intersectsTriangle(a,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let t=0;t<3;t++){let r,i=n[t],c=a[i];this.closestPointToPoint(c,e),r=c.distanceToSquared(e),r<l&&(l=r,o&&o.copy(e),s&&s.copy(c));let u=this[i];a.closestPointToPoint(u,e),r=u.distanceToSquared(e),r<l&&(l=r,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];r.set(this[u],this[d]);for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];i.set(a[u],a[d]),sh(r,i,e,t);let f=e.distanceToSquared(t);f<l&&(l=f,o&&o.copy(e),s&&s.copy(t))}}return Math.sqrt(l)}})();var mh=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new q,this.max=new q,this.matrix=new on,this.invMatrix=new on,this.points=Array(8).fill().map(()=>new q),this.satAxes=[,,,].fill().map(()=>new q),this.satBounds=[,,,].fill().map(()=>new ah),this.alignedSatBounds=[,,,].fill().map(()=>new ah),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};mh.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),mh.prototype.intersectsBox=(function(){let e=new ah;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),mh.prototype.intersectsTriangle=(function(){let e=new ph,t=[,,,],n=new ah,r=new ah,i=new q;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),mh.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),mh.prototype.distanceToPoint=(function(){let e=new q;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),mh.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],t=Array(12).fill().map(()=>new Io),n=Array(12).fill().map(()=>new Io),r=new q,i=new q;return function(a,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(s||c)&&(a.getCenter(i),this.closestPointToPoint(i,r),a.closestPointToPoint(r,i),s&&s.copy(r),c&&c.copy(i)),0;let l=o*o,u=a.min,d=a.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];i.copy(t).clamp(u,d);let n=t.distanceToSquared(i);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(i),n<l))return Math.sqrt(n)}let m=0;for(let r=0;r<3;r++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(r+1)%3,s=(r+2)%3,c=i<<o|a<<s,l=1<<r|i<<o|a<<s,p=f[c],h=f[l];t[m].set(p,h);let g=e[r],_=e[o],v=e[s],y=n[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[v],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[v],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){i.x=e?d.x:u.x,i.y=t?d.y:u.y,i.z=n?d.z:u.z,this.closestPointToPoint(i,r);let a=i.distanceToSquared(r);if(a<p&&(p=a,s&&s.copy(r),c&&c.copy(i),a<l))return Math.sqrt(a)}for(let e=0;e<12;e++){let a=t[e];for(let e=0;e<12;e++){let t=n[e];sh(a,t,r,i);let o=r.distanceToSquared(i);if(o<p&&(p=o,s&&s.copy(r),c&&c.copy(i),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var hh=new class extends Dm{constructor(){super(()=>new ph)}},gh=new q,_h=new q;function vh(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(gh.copy(t).clamp(e.min,e.max),gh.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,gh);let r=t.distanceToSquared(gh);return r<s&&(_h.copy(gh),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(_h):n.point=_h.clone(),n.distance=l,n.faceIndex=c,n}var yh=!0,bh=new q,xh=new q,Sh=new q,Ch=new K,wh=new K,Th=new K,Eh=new q,Dh=new q,Oh=new q,kh=new q;function Ah(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function jh(e,t,n,r,i,a,o,s,c,l,u){bh.fromBufferAttribute(t,a),xh.fromBufferAttribute(t,o),Sh.fromBufferAttribute(t,s);let d=Ah(e,bh,xh,Sh,kh,c,l,u);if(d){if(r){Ch.fromBufferAttribute(r,a),wh.fromBufferAttribute(r,o),Th.fromBufferAttribute(r,s),d.uv=new K;let e=rr.getInterpolation(kh,bh,xh,Sh,Ch,wh,Th,d.uv);yh||(d.uv=e)}if(i){Ch.fromBufferAttribute(i,a),wh.fromBufferAttribute(i,o),Th.fromBufferAttribute(i,s),d.uv1=new K;let e=rr.getInterpolation(kh,bh,xh,Sh,Ch,wh,Th,d.uv1);yh||(d.uv1=e)}if(n){Eh.fromBufferAttribute(n,a),Dh.fromBufferAttribute(n,o),Oh.fromBufferAttribute(n,s),d.normal=new q;let t=rr.getInterpolation(kh,bh,xh,Sh,Eh,Dh,Oh,d.normal);d.normal.dot(e.direction)>0&&d.normal.multiplyScalar(-1),yh||(d.normal=t)}let t={a,b:o,c:s,normal:new q,materialIndex:0};if(rr.getNormal(bh,xh,Sh,t.normal),d.face=t,d.faceIndex=a,yh){let e=new q;rr.getBarycoord(kh,bh,xh,Sh,e),d.barycoord=e}}return d}function Mh(e){return e&&e.isMaterial?e.side:e}function Nh(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Mh(t[v]),s=jh(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Mh(t),s=jh(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function Ph(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}function Fh(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)Nh(c,t,n,e,a,o,s)}function Ih(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=Nh(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function Lh(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,Ph(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function Rh(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(em(l,s)){let t=tm(e,o),n=nm(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=rm(e),i=im(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function zh(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function Bh(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)Nh(c,t,n,l?l[e]:e,a,o,s)}function Vh(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=Nh(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function Hh(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),Ph(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function Uh(e,t,n,r,i,a,o){Om.setBuffer(e._roots[t]),zh(0,Om.float32Array,r,a,o)&&Wh(0,e,n,r,i,a,o),Om.clearBuffer()}function Wh(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=Om,u=e*2;if(em(u,c))Fh(t,n,r,tm(e,l),nm(u,c),i,a,o);else{let c=rm(e);zh(c,s,r,a,o)&&Wh(c,t,n,r,i,a,o);let u=im(e,l);zh(u,s,r,a,o)&&Wh(u,t,n,r,i,a,o)}}var Gh=[`x`,`y`,`z`];function Kh(e,t,n,r,i,a){Om.setBuffer(e._roots[t]);let o=null;return zh(0,Om.float32Array,r,i,a)&&(o=qh(0,e,n,r,i,a)),Om.clearBuffer(),o}function qh(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=Om,l=e*2;if(em(l,s))return Ih(t,n,r,tm(e,c),nm(l,s),i,a);{let s=am(e,c),l=Gh[s],u=r.direction[l]>=0,d,f;u?(d=rm(e),f=im(e,c)):(d=im(e,c),f=rm(e));let p=zh(d,o,r,i,a)?qh(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=zh(f,o,r,i,a)?qh(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Jh=new ir,Yh=new ph,Xh=new ph,Zh=new on,Qh=new mh,$h=new mh;function eg(e,t,n,r){Om.setBuffer(e._roots[t]);let i=tg(0,e,n,r);return Om.clearBuffer(),i}function tg(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=Om,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),Qh.set(n.boundingBox.min,n.boundingBox.max,r),i=Qh),em(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=tm(e,s),m=nm(c,o);if(Zh.copy(r).invert(),n.boundsTree)return Xp(om(e),a,$h),$h.matrix.copy(Zh),$h.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>$h.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(Ph(Xh,t,l,u),Xh.needsUpdate=!0,e.intersectsTriangle(Xh))return!0;return!1}});{let e=Zm(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){Ph(Yh,t,l,u),Yh.a.applyMatrix4(Zh),Yh.b.applyMatrix4(Zh),Yh.c.applyMatrix4(Zh),Yh.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(Ph(Xh,t,d,f),Xh.needsUpdate=!0,Yh.intersectsTriangle(Xh))return!0}}}else{let o=rm(e),c=im(e,s);return Xp(om(o),a,Jh),!!(i.intersectsBox(Jh)&&tg(o,t,n,r,i)||(Xp(om(c),a,Jh),i.intersectsBox(Jh)&&tg(c,t,n,r,i)))}}var ng=new on,rg=new mh,ig=new mh,ag=new q,og=new q,sg=new q,cg=new q;function lg(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),rg.set(t.boundingBox.min,t.boundingBox.max,n),rg.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=hh.getPrimitive(),p=hh.getPrimitive(),m=ag,h=og,g=null,_=null;i&&(g=sg,_=cg);let v=1/0,y=null,b=null;return ng.copy(n).invert(),ig.matrix.copy(ng),e.shapecast({boundsTraverseOrder:e=>rg.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(ig.min.copy(e.min),ig.max.copy(e.max),ig.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>ig.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){Ph(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){Ph(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=Zm(t);for(let t=0,o=i;t<o;t++){Ph(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){Ph(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),hh.releasePrimitive(f),hh.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(ng),h.applyMatrix4(ng),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function ug(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(em(u,s)){let t=tm(n,o),a=nm(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=rm(n),r=im(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function dg(e,t,n,r,i,a,o){Om.setBuffer(e._roots[t]),zh(0,Om.float32Array,r,a,o)&&fg(0,e,n,r,i,a,o),Om.clearBuffer()}function fg(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=Om,u=e*2;if(em(u,c))Bh(t,n,r,tm(e,l),nm(u,c),i,a,o);else{let c=rm(e);zh(c,s,r,a,o)&&fg(c,t,n,r,i,a,o);let u=im(e,l);zh(u,s,r,a,o)&&fg(u,t,n,r,i,a,o)}}var pg=[`x`,`y`,`z`];function mg(e,t,n,r,i,a){Om.setBuffer(e._roots[t]);let o=null;return zh(0,Om.float32Array,r,i,a)&&(o=hg(0,e,n,r,i,a)),Om.clearBuffer(),o}function hg(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=Om,l=e*2;if(em(l,s))return Vh(t,n,r,tm(e,c),nm(l,s),i,a);{let s=am(e,c),l=pg[s],u=r.direction[l]>=0,d,f;u?(d=rm(e),f=im(e,c)):(d=im(e,c),f=rm(e));let p=zh(d,o,r,i,a)?hg(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=zh(f,o,r,i,a)?hg(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var gg=new ir,_g=new ph,vg=new ph,yg=new on,bg=new mh,xg=new mh;function Sg(e,t,n,r){Om.setBuffer(e._roots[t]);let i=Cg(0,e,n,r);return Om.clearBuffer(),i}function Cg(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=Om,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),bg.set(n.boundingBox.min,n.boundingBox.max,r),i=bg),em(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=tm(e,s),m=nm(c,o);if(yg.copy(r).invert(),n.boundsTree)return Xp(om(e),a,xg),xg.matrix.copy(yg),xg.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>xg.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(Ph(vg,3*t.resolveTriangleIndex(n),l,u),vg.needsUpdate=!0,e.intersectsTriangle(vg))return!0;return!1}});{let e=Zm(n);for(let n=p,r=m+p;n<r;n++){Ph(_g,3*t.resolveTriangleIndex(n),l,u),_g.a.applyMatrix4(yg),_g.b.applyMatrix4(yg),_g.c.applyMatrix4(yg),_g.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(Ph(vg,t,d,f),vg.needsUpdate=!0,_g.intersectsTriangle(vg))return!0}}}else{let o=rm(e),c=im(e,s);return Xp(om(o),a,gg),!!(i.intersectsBox(gg)&&Cg(o,t,n,r,i)||(Xp(om(c),a,gg),i.intersectsBox(gg)&&Cg(c,t,n,r,i)))}}var wg=new on,Tg=new mh,Eg=new mh,Dg=new q,Og=new q,kg=new q,Ag=new q;function jg(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Tg.set(t.boundingBox.min,t.boundingBox.max,n),Tg.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=hh.getPrimitive(),p=hh.getPrimitive(),m=Dg,h=Og,g=null,_=null;i&&(g=kg,_=Ag);let v=1/0,y=null,b=null;return wg.copy(n).invert(),Eg.matrix.copy(wg),e.shapecast({boundsTraverseOrder:e=>Tg.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Eg.min.copy(e.min),Eg.max.copy(e.max),Eg.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Eg.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);Ph(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);Ph(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=Zm(t);for(let t=0,s=o;t<s;t++){Ph(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);Ph(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),hh.releasePrimitive(f),hh.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(wg),h.applyMatrix4(wg),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Mg(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Ng=new mh,Pg=new mi,Fg=new q,Ig=new on,Lg=new q,Rg=[`getX`,`getY`,`getZ`],zg=class e extends ih{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[Jp]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new Sr(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;em(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[Rg[e]](c),i=a[Rg[e]](l),o=a[Rg[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*qp}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;Ig.copy(e.matrixWorld).invert(),Pg.copy(t.ray).applyMatrix4(Ig),Lg.setFromMatrixScale(e.matrixWorld),Fg.copy(Pg.direction).multiply(Lg);let i=Fg.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst(Pg,r,a,o);i=Mg(i,e,t),i&&n.push(i)}else{let i=this.raycast(Pg,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Mg(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?ug:Rh)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?dg:Uh;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?mg:Kh;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Sg:eg;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=hh.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?Hh:Lh});return hh.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=hh.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);Ph(o,t*3,s,c)}:e=>{Ph(o,e*3,s,c)},u=hh.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);Ph(u,n*3,d,f)}:e=>{Ph(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Ng.set(e.min,e.max,t),Ng.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Ng.intersectsBox(e),intersectsTriangle:e=>Ng.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?jg:lg)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return vh(this,e,t,n,r)}},Bg=`modulepreload`,Vg=function(e,t){return new URL(e,t).href},Hg={},Ug=function(e){return e.pathname.endsWith(`.css`)},Wg=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Gg=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Vg(t,n);let r=s(t),i=Ug(r);return Wg(Hg,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Bg,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Kg={resin:{tolerance:.05,depth:1},fdm:{tolerance:.2,depth:1.5}},qg=0,Jg=1,Yg=2,Xg=()=>({tooCurved:!1,worst:null,bad:new Set,deepest:0,margin:null,dropped:0});function Zg(e,t){let n=Array(t).fill(0),r=e.areas();return e.faceColor.forEach((e,i)=>{e<t&&(n[e]+=r[i])}),n}function Qg(e,t){if(!e.some(e=>e>0))return null;if(t>0&&t<=e.length&&e[t-1]>0)return t-1;let n=0;return e.forEach((t,r)=>{t>e[n]&&(n=r)}),n}function $g(e,t){let n=new Lr;return n.setAttribute(`position`,new Sr(e,3)),n.setIndex(new Sr(t,1)),new zg(n,{indirect:!0})}var e_=class{pos=[];idx=[];kind=[];vert(e,t=-1){return this.pos.push(e[0],e[1],e[2]),this.kind.push(t),this.pos.length/3-1}tri(e,t,n){e!==t&&t!==n&&e!==n&&this.idx.push(e,t,n)}quad(e,t,n,r){this.tri(e,t,n),this.tri(e,n,r)}mesh(){return{positions:Float32Array.from(this.pos),index:Uint32Array.from(this.idx)}}},t_=(e,t)=>[e[3*t],e[3*t+1],e[3*t+2]];function n_(e,t,n=12){let r=e.positions,i=e.normals(),a=e.areas(),{start:o,faces:s}=e.vertexFaces(),c=new Map;for(let l of t){let t=l.length;if(t<8)continue;let u=l.map(e=>t_(r,e)),d=u.map(e=>[e[0],e[1],e[2]]);for(let e=0;e<n;e++){let n=e%2?-.53:.5;d=d.map((e,r)=>{let i=d[(r+t-1)%t],a=d[(r+1)%t];return[0,1,2].map(t=>e[t]+n*((i[t]+a[t])/2-e[t]))})}for(let n=0;n<t;n++){let t=l[n];if(c.has(t))continue;let f=[0,0,0],p=1/0;for(let n=o[t];n<o[t+1];n++){let o=s[n],c=a[o];f=[f[0]+i[3*o]*c,f[1]+i[3*o+1]*c,f[2]+i[3*o+2]*c];for(let n=0;n<3;n++){let i=e.index[3*o+n],a=e.index[3*o+(n+1)%3];if(i!==t&&a!==t)continue;let s=t_(r,i),c=t_(r,a);p=Math.min(p,Math.hypot(s[0]-c[0],s[1]-c[1],s[2]-c[2]))}}let m=Math.hypot(f[0],f[1],f[2]);if(!(m>1e-12)||!Number.isFinite(p))continue;f=[f[0]/m,f[1]/m,f[2]/m];let h=[d[n][0]-u[n][0],d[n][1]-u[n][1],d[n][2]-u[n][2]],g=c_(h,f);h=[h[0]-f[0]*g,h[1]-f[1]*g,h[2]-f[2]*g];let _=Math.hypot(h[0],h[1],h[2]);if(_<1e-9)continue;let v=.45*p,y=_>v?v/_:1;c.set(t,[u[n][0]+h[0]*y,u[n][1]+h[1]*y,u[n][2]+h[2]*y])}}return c}function r_(e,t,n){let r=e.neighbours(),i=e.index,a=[];for(let e=0;e<t.length;e++){let o=t[e];for(let e=0;e<3;e++){let t=r[3*o+e];(t<0||!n(t))&&a.push([i[3*o+e],i[3*o+(e+1)%3]])}}return a}function i_(e){let t=new Map;for(let[n,r]of e){let e=t.get(n);e?e.push(r):t.set(n,[r])}let n=[];for(;t.size;){let e=t.keys().next().value,r=[e],i=e;for(;;){let n=t.get(i);if(!n||!n.length){t.delete(i);break}let a=n.pop();if(n.length||t.delete(i),a===e)break;r.push(a),i=a}r.length>=3&&n.push(r)}return n}function a_(e,t,n){let r=e.neighbours(),i=new Set,a=[];for(let e=0;e<t.length;e++){let o=t[e];if(i.has(o))continue;i.add(o);let s=[o];for(let e=0;e<s.length;e++){let t=s[e];for(let e=0;e<3;e++){let a=r[3*t+e];a>=0&&!i.has(a)&&n(a)&&(i.add(a),s.push(a))}}a.push(s)}return a}function o_(e,t){let n=e.length/3,r=new Float32Array(n*3),i=new Float32Array(t.length),a=new Float32Array(t.length);for(let n=0;n<t.length/3;n++){let o=[t[3*n],t[3*n+1],t[3*n+2]],s=o.map(t=>t_(e,t)),c=l_(s_(s[1],s[0]),s_(s[2],s[0])),l=Math.hypot(c[0],c[1],c[2]);if(!(l<1e-20)){c=[c[0]/l,c[1]/l,c[2]/l];for(let e=0;e<3;e++){let t=s_(s[(e+1)%3],s[e]),i=s_(s[(e+2)%3],s[e]),l=Math.hypot(...t),u=Math.hypot(...i),d=l&&u?Math.acos(Math.max(-1,Math.min(1,c_(t,i)/(l*u)))):0;a[3*n+e]=d;for(let t=0;t<3;t++)r[3*o[e]+t]+=c[t]*d}i[3*n]=c[0],i[3*n+1]=c[1],i[3*n+2]=c[2]}}for(let e=0;e<n;e++){let t=Math.hypot(r[3*e],r[3*e+1],r[3*e+2])||1;r[3*e]/=t,r[3*e+1]/=t,r[3*e+2]/=t}let o=new Float32Array(n),s=new Float32Array(n);for(let e=0;e<t.length/3;e++)for(let n=0;n<3;n++){let c=t[3*e+n],l=Math.abs(r[3*c]*i[3*e]+r[3*c+1]*i[3*e+1]+r[3*c+2]*i[3*e+2]),u=a[3*e+n];o[c]+=(l>1e-6?1/l:3)*u,s[c]+=u}let c=new Float32Array(n);for(let e=0;e<n;e++)c[e]=Math.min(s[e]?o[e]/s[e]:1,3);return{normals:r,shells:c}}var s_=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],c_=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],l_=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function u_(e,t,n){let r=[];for(let t of e)r.some(e=>c_(e,t)>.9995)||r.push(t);let i=e=>r.every(n=>c_(e,n)>=t*.9999),a=null,o=1/0,s=e=>{if(!e)return;let t=Math.hypot(...e);t<o&&i(e)&&(a=e,o=t)},c=r.length;if(c<=12)for(let e=0;e<c;e++){s(d_(r[e],t));for(let n=e+1;n<c;n++){s(f_([r[e],r[n]],t));for(let i=n+1;i<c;i++)s(f_([r[e],r[n],r[i]],t))}}let l=a??n;if(!a)for(let e=0;e<200&&r.length;e++){let e=r[0],n=1/0;for(let t of r){let r=c_(l,t);r<n&&(n=r,e=t)}let i=t-n;if(i<=t*1e-4)break;l=[l[0]+e[0]*i,l[1]+e[1]*i,l[2]+e[2]*i]}let u=Math.hypot(...l);return u>t*3&&(l=d_(l,t*3/u)),l}var d_=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];function f_(e,t){let n=e.length,r=p_(e.map(t=>e.map(e=>c_(t,e))),Array(n).fill(t));if(!r)return null;let i=[0,0,0];return e.forEach((e,t)=>{i[0]+=e[0]*r[t],i[1]+=e[1]*r[t],i[2]+=e[2]*r[t]}),i}function p_(e,t){let n=t.length,r=e.map((e,n)=>[...e,t[n]]);for(let e=0;e<n;e++){let t=e;for(let i=e+1;i<n;i++)Math.abs(r[i][e])>Math.abs(r[t][e])&&(t=i);if(Math.abs(r[t][e])<1e-9)return null;[r[e],r[t]]=[r[t],r[e]];for(let t=0;t<n;t++){if(t===e)continue;let i=r[t][e]/r[e][e];for(let a=e;a<=n;a++)r[t][a]-=i*r[e][a]}}return r.map((e,t)=>e[n]/e[t])}function m_(e){let t=e.positions.length/3,n=e.index.length/3,r=new Float32Array(n*3);for(let t=0;t<n;t++){let n=t_(e.positions,e.index[3*t]),i=t_(e.positions,e.index[3*t+1]),a=t_(e.positions,e.index[3*t+2]),o=l_(s_(i,n),s_(a,n)),s=Math.hypot(...o)||1;r.set([o[0]/s,o[1]/s,o[2]/s],3*t)}let i=Array.from({length:t},()=>[]);for(let t=0;t<e.index.length;t++)i[e.index[t]].push(t/3|0);return{fn:r,vf:i}}function h_(e,t,n,r=0){let i=new mi(new q(...t),new q(...n)),a=e.raycast(i,2);a.sort((e,t)=>e.distance-t.distance);let o=0,s=new mi(new q(...t),new q(-n[0],-n[1],-n[2]));for(let t of e.raycast(s,2)){let e=t.face?.normal;e&&(o+=e.x*n[0]+e.y*n[1]+e.z*n[2]<0?1:-1)}o=Math.max(o,1);for(let e=0;e<a.length;e++){let t=a[e].face?.normal;if(t&&(o+=t.x*n[0]+t.y*n[1]+t.z*n[2]>0?-1:1,o<=0)){let t=a[e+1];if(t&&t.distance<r)continue;return a[e].distance}}return null}function g_(e,t,n,r,i=!1){if(e.deepest=Math.max(e.deepest,n),r===null)return;let a=r-n;!i&&(e.margin===null||a<e.margin)&&(e.margin=a),a<0&&(e.bad.add(t),(!e.worst||n-r>e.worst[1]-e.worst[0])&&(e.worst=[r,n]))}function __(e,t,n,r,i,a){let o=Xg(),s=new e_,c=new Uint8Array(e.faceCount);for(let e of t)c[e]=1;let l=e.normals(),u=e.areas(),d=e.positions,f=[];for(let i of a_(e,t,e=>c[e]===1)){let t=[0,0,0];for(let e of i)for(let n=0;n<3;n++)t[n]+=l[3*e+n]*u[e];let a=Math.hypot(...t);if(a<1e-12)continue;t=[t[0]/a,t[1]/a,t[2]/a],i.some(e=>l[3*e]*t[0]+l[3*e+1]*t[1]+l[3*e+2]*t[2]<0)&&(o.tooCurved=!0);let p=new Set;for(let t of i)for(let n=0;n<3;n++)p.add(e.index[3*t+n]);let m=r_(e,i,e=>c[e]===1),h=i_(m),g=e=>t_(d,e),_=new Map,v=1/0;for(let e of p){let n=c_(g(e),t);_.set(e,n),v=Math.min(v,n)}v-=n;let y=new Map;for(let e of p)y.set(e,s.vert(g(e),Jg));for(let t of i)s.tri(y.get(e.index[3*t]),y.get(e.index[3*t+1]),y.get(e.index[3*t+2]));let b=new Map,x=e=>{let n=b.get(e);if(n===void 0){let r=g(e),i=_.get(e)-v;n=s.vert([r[0]-t[0]*i,r[1]-t[1]*i,r[2]-t[2]*i],qg),b.set(e,n)}return n};for(let[e,t]of m)s.quad(y.get(t),y.get(e),x(e),x(t));if(v_(s,h.map(e=>e.map(x)),t),r)for(let e of p)f.push({top:y.get(e),p:g(e),n:t,need:_.get(e)-v})}let p=s.mesh();if(r&&f.length){let e=$g(p.positions,p.index);for(let{top:t,p:n,n:s,need:c}of f){let l=[n[0]-s[0]*a,n[1]-s[1]*a,n[2]-s[2]*a],u=[-s[0],-s[1],-s[2]],d=e.raycastFirst(new mi(new q(...l),new q(...u)),2),f=d?d.distance+a:1/0,p=f<c-a,m=p?f:c+i,h=h_(r,l,u,m);g_(o,t,m,h===null?null:h+a,p)}}return{shape:p,report:o}}function v_(e,t,n){let[r,i]=x_(n),a=t.map(t=>t.map(t=>{let n=[e.pos[3*t],e.pos[3*t+1],e.pos[3*t+2]];return[c_(n,r),c_(n,i)]})),o=a.map(e=>{let t=0;for(let n=0;n<e.length;n++){let[r,i]=e[n],[a,o]=e[(n+1)%e.length];t+=r*o-a*i}return t/2}),s=t.map((e,t)=>t).filter(e=>o[e]>0),c=t.map((e,t)=>t).filter(e=>o[e]<=0),l=new Map(s.map(e=>[e,[]]));for(let e of c){let[t,n]=a[e][0],r=s.filter(e=>b_(t,n,a[e])).sort((e,t)=>Math.abs(o[e])-Math.abs(o[t]))[0];r!==void 0&&l.get(r).push(e)}for(let n of s){let r=[n,...l.get(n)],i=[],o=[],s=[];for(let e of r)e!==n&&s.push(o.length),a[e].forEach((n,r)=>{i.push(n[0],n[1]),o.push(t[e][r])});let c=y_(i,s);for(let t=0;t<c.length;t+=3)e.tri(o[c[t]],o[c[t+2]],o[c[t+1]])}}function y_(e,t){return Cf(e,t.length?t:void 0)}function b_(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function x_(e){let t=l_(e,Math.abs(e[0])<.9?[1,0,0]:[0,1,0]),n=Math.hypot(...t);return t=[t[0]/n,t[1]/n,t[2]/n],[t,l_(e,t)]}function S_(e,t){let{start:n,faces:r}=e.vertexFaces(),i=e.index,a=new Map,o=-1,s=new Set,c=e=>{if(s.has(e))return;s.add(e);let c=[];for(let i=n[e];i<n[e+1];i++)t(r[i])&&c.push(r[i]);if(c.length<2)return;let l=new Map(c.map(e=>[e,e])),u=e=>l.get(e)===e?e:u(l.get(e)),d=new Map;for(let t of c)for(let n=0;n<3;n++){let r=i[3*t+n];if(r===e)continue;let a=d.get(r);a===void 0?d.set(r,t):l.set(u(t),u(a))}let f=new Map;for(let t of c){let n=u(t);f.has(n)||f.set(n,f.size===0?e:o--);let r=f.get(n);r!==e&&a.set(`${t},${e}`,r)}};return(e,t)=>(c(t),a.get(`${e},${t}`)??t)}function C_(e,t,n){let r=e.neighbours(),i=e.index,a=[];for(let e=0;e<t.length;e++){let o=t[e];for(let e=0;e<3;e++){let t=r[3*o+e];(t<0||!n(t))&&a.push([i[3*o+e],i[3*o+(e+1)%3],o])}}return a}function w_(e,t,n,r){let i=new e_,a=new Uint8Array(e.faceCount);for(let e of t)a[e]=1;let o=e=>a[e]===1,s=S_(e,o),c=C_(e,t,o),l=new Set;for(let[e,t]of c)l.add(e),l.add(t);let u=new Map,d=new Map,f=e.positions,p=(e,t)=>{let a=s(e,t);if(!u.has(a)){let e=t_(f,t);u.set(a,i.vert(e,l.has(t)?Yg:Jg));let o=n*r.shells[t];d.set(a,i.vert([e[0]-r.normals[3*t]*o,e[1]-r.normals[3*t+1]*o,e[2]-r.normals[3*t+2]*o],qg))}return a},m=new Map;for(let n of t){let t=[0,1,2].map(t=>p(n,e.index[3*n+t]));for(let r=0;r<3;r++)m.has(e.index[3*n+r])||m.set(e.index[3*n+r],u.get(t[r]));i.tri(u.get(t[0]),u.get(t[1]),u.get(t[2])),i.tri(d.get(t[2]),d.get(t[1]),d.get(t[0]))}for(let[e,t,n]of c){let r=s(n,e),a=s(n,t);i.quad(u.get(a),u.get(r),d.get(r),d.get(a))}return{mesh:i.mesh(),kind:i.kind,topOf:m}}function T_(e,t,n){if(n<=0)return;let{fn:r,vf:i}=m_(e),a=n=>[0,1,2].every(r=>t[e.index[3*n+r]]!==qg),o=[];for(let e=0;e<t.length;e++){if(t[e]===Jg)continue;let s=i[e].map(e=>[r[3*e],r[3*e+1],r[3*e+2]]);if(!s.length)continue;let c=[0,0,0];for(let e of s)c=[c[0]+e[0],c[1]+e[1],c[2]+e[2]];let l=Math.hypot(...c)||1,u=u_(s,n,[c[0]/l*n,c[1]/l*n,c[2]/l*n]),d=[-u[0],-u[1],-u[2]];if(t[e]===Yg){let t=[0,0,0];for(let n of i[e])a(n)&&(t=[t[0]+r[3*n],t[1]+r[3*n+1],t[2]+r[3*n+2]]);let n=Math.hypot(...t);if(n>1e-12){t=[t[0]/n,t[1]/n,t[2]/n];let e=c_(d,t);d=[d[0]-t[0]*e,d[1]-t[1]*e,d[2]-t[2]*e]}}o.push([e,d])}for(let[t,n]of o)for(let r=0;r<3;r++)e.positions[3*t+r]+=n[r]}function E_(e,t){let n={positions:e.positions.slice(),index:e.index},{fn:r,vf:i}=m_(n),{normals:a}=o_(n.positions,n.index),o=[];for(let e=0;e<n.positions.length/3;e++){let n=i[e].map(e=>[r[3*e],r[3*e+1],r[3*e+2]]),s=n.length?u_(n,t,[a[3*e]*t,a[3*e+1]*t,a[3*e+2]*t]):[0,0,0];o.push(s)}return o.forEach((e,t)=>{for(let r=0;r<3;r++)n.positions[3*t+r]+=e[r]}),n}function D_(e,t,n,r,i,a,o,s){let c=Xg(),l=new Set;for(let n of t)for(let t=0;t<3;t++)l.add(e.index[3*n+t]);for(let t of l){let l=t_(e.positions,t),u=[o.normals[3*t],o.normals[3*t+1],o.normals[3*t+2]],d=h_(n,[l[0]-u[0]*a,l[1]-u[1]*a,l[2]-u[2]*a],[-u[0],-u[1],-u[2]],r+i);g_(c,s(t),r+i,d===null?null:d+a)}return c}function O_(e,t,n,r,i){let a=Array.from(e.positions),o=[],s=[],c=n=>t(e.faceColor[n]),l=S_(e,c),u=new Map,d=(t,i)=>{let o=l(t,i),s=u.get(o);if(s===void 0){let t=n*r.shells[i];a.push(e.positions[3*i]-r.normals[3*i]*t,e.positions[3*i+1]-r.normals[3*i+1]*t,e.positions[3*i+2]-r.normals[3*i+2]*t),s=a.length/3-1,u.set(o,s)}return s},f=[];for(let t=0;t<e.faceCount;t++)c(t)?f.push(t):(o.push(e.index[3*t],e.index[3*t+1],e.index[3*t+2]),s.push(e.faceColor[t]));for(let t of f)o.push(d(t,e.index[3*t]),d(t,e.index[3*t+1]),d(t,e.index[3*t+2])),s.push(i);for(let[t,n,r]of C_(e,f,c))o.push(t,n,d(r,n),t,d(r,n),d(r,t)),s.push(i,i);return{positions:Float32Array.from(a),index:Uint32Array.from(o),faceColor:Uint8Array.from(s)}}function k_(e,t,n,r){let i=t.normals(),a=t.index,o=t.positions,s=r*.5,c=[0,0,0];for(let e=0;e<3;e++)for(let t=0;t<3;t++)c[t]+=o[3*a[3*n+e]+t]/3;let l=new q(c[0]-i[3*n]*s,c[1]-i[3*n+1]*s,c[2]-i[3*n+2]*s),u=new kr(l,s*1.02),d=u.radius*u.radius,f=new q,p=[],m=!1;return e.shapecast({intersectsBounds:e=>e.intersectsSphere(u),intersectsTriangle:(e,t)=>{if(e.closestPointToPoint(l,f),f.distanceToSquared(l)>d)return!1;let n=[i[3*t],i[3*t+1],i[3*t+2]];return p.some(e=>c_(n,e)<-.5)?(m=!0,!0):(p.every(e=>c_(n,e)<.95)&&p.push(n),!1)}}),m}function A_(e,t,n,r){let i=new Set(t.filter(t=>!k_(n,e,t,r))),a=[];for(let t of a_(e,Array.from(i),e=>i.has(e)))t.length>=4&&a.push(...t);return a}function j_(e,t,n){let{start:r,faces:i}=e.vertexFaces();for(let a=r[t];a<r[t+1];a++){let t=i[a];if(e.index[3*t]===n||e.index[3*t+1]===n||e.index[3*t+2]===n)return!0}return!1}var M_=(e,t)=>`${e[3*t].toFixed(5)},${e[3*t+1].toFixed(5)},${e[3*t+2].toFixed(5)}`;function N_(e){let{centre:t,normal:n}=Cp(e),r=Math.hypot(...n);if(r<1e-12)return null;let i=[n[0]/r,n[1]/r,n[2]/r],a=0;for(let n of e)a=Math.max(a,Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]));let o=Math.max(.02,a*.005),s=e=>(e[0]-t[0])*i[0]+(e[1]-t[1])*i[1]+(e[2]-t[2])*i[2];if(e.some(e=>Math.abs(s(e))>o))return null;let[c,l]=wp(i);return{centre:t,normal:i,u:c,w:l,flat:e.map(e=>{let n=[e[0]-t[0],e[1]-t[1],e[2]-t[2]];return[c_(n,c),c_(n,l)]}),eps:o}}var P_=(e,t,n=0)=>(t[n]-e.centre[0])*e.normal[0]+(t[n+1]-e.centre[1])*e.normal[1]+(t[n+2]-e.centre[2])*e.normal[2];function F_(e,t,n=0){let r=[t[n]-e.centre[0],t[n+1]-e.centre[1],t[n+2]-e.centre[2]],i=c_(r,e.u),a=c_(r,e.w),o=!1,s=e.flat.length;for(let t=0;t<s;t++){let[n,r]=e.flat[t],[c,l]=e.flat[(t+1)%s];r>a!=l>a&&i<n+(a-r)*(c-n)/(l-r||1e-30)&&(o=!o)}return o}function I_(e,t){let n=e.neighbours(),r=e.index,i=new Map;for(let a=0;a<e.faceCount;a++)if(e.faceColor[a]===t)for(let o=0;o<3;o++){let s=n[3*a+o];s>=0&&e.faceColor[s]!==t&&i.set(`${r[3*a+o]},${r[3*a+(o+1)%3]}`,e.faceColor[s])}return(e,t)=>{let n=new Map;e.forEach((t,r)=>{let a=i.get(`${t},${e[(r+1)%e.length]}`);a!==void 0&&n.set(a,(n.get(a)??0)+1)});let r=t,a=0;for(let[e,t]of n)t>a&&([r,a]=[e,t]);return r}}function L_(e,t){let n=Int32Array.from({length:e.faceCount},(e,t)=>t),r=[];for(let n=0;n<e.faceCount;n++)e.faceColor[n]===t&&r.push(n);let i=I_(e,t),a=[];for(let n of i_(r_(e,r,n=>e.faceColor[n]===t))){let t=N_(n.map(t=>t_(e.positions,t)));t&&a.push({fl:t,paint:i(n,e.faceColor[r[0]])})}for(let{fl:i,paint:o}of a){let a=e.positions,s=e.index,c=new Float64Array(e.vertexCount);for(let t=0;t<e.vertexCount;t++){let e=P_(i,a,3*t);c[t]=Math.abs(e)<=i.eps*.5?0:e}let l=(e,t,n)=>[0,1,2].map(r=>(a[3*e+r]+a[3*t+r]+a[3*n+r])/3),u=Array.from(a),d=new Map,f=(e,t)=>e<t?`${e},${t}`:`${t},${e}`,p=!1;for(let e of r){let t=[s[3*e],s[3*e+1],s[3*e+2]];if(t.map(e=>c[e]).some(e=>e<0)&&F_(i,l(t[0],t[1],t[2]))){p=!0;for(let e=0;e<3;e++){let n=t[e],r=t[(e+1)%3];if(c[n]*c[r]>=0||d.has(f(n,r)))continue;let i=c[n]/(c[n]-c[r]);u.push(...[0,1,2].map(e=>a[3*n+e]+(a[3*r+e]-a[3*n+e])*i)),d.set(f(n,r),u.length/3-1)}}}if(!p)continue;let m=[],h=[],g=[],_=[],v=(e,t,n)=>{let r=[e,t,n].map(e=>e<c.length?c[e]:0);return r.every(e=>e<=0)&&r.some(e=>e<0)},y=(r,a,s,c)=>{m.push(r,a,s);let l=e.faceColor[c],d=[0,1,2].map(e=>(u[3*r+e]+u[3*a+e]+u[3*s+e])/3);h.push(l===t&&v(r,a,s)&&F_(i,d)?o:l),g.push(e.faceObject[c]),_.push(n[c])};for(let t=0;t<e.faceCount;t++){let e=[s[3*t],s[3*t+1],s[3*t+2]],n=[0,1,2].map(t=>d.get(f(e[t],e[(t+1)%3]))),r=n.filter(e=>e!==void 0).length;if(r===0)y(e[0],e[1],e[2],t);else if(r===1){let r=n.findIndex(e=>e!==void 0),i=e[r],a=e[(r+1)%3],o=e[(r+2)%3],s=n[r];y(i,s,o,t),y(s,a,o,t)}else{let r=[0,1,2].find(e=>n[e]!==void 0&&n[(e+2)%3]!==void 0),i=e[r],a=e[(r+1)%3],o=e[(r+2)%3],s=n[r],c=n[(r+2)%3];y(i,s,c,t),y(s,a,o,t),y(s,o,c,t)}}e=new Ql(Float32Array.from(u),Uint32Array.from(m),Uint8Array.from(h),Uint16Array.from(g)),n=Int32Array.from(_),r.length=0;for(let n=0;n<e.faceCount;n++)e.faceColor[n]===t&&r.push(n)}return{pm:e,origin:n}}function R_(e,t,n){let r=t.map(t=>t.map(t=>t_(e.positions,t))),i=r.map(N_),a=new Set,o=[],s=e=>{let{normal:t}=Cp(e),n=Math.hypot(...t)||1;return[t[0]/n,t[1]/n,t[2]/n]};for(let e=0;e<t.length;e++){let s=i[e];if(!s||a.has(e))continue;let c=[];for(let n=0;n<t.length;n++){let t=i[n];n!==e&&t&&!a.has(n)&&(c_(s.normal,t.normal)>-.999||Math.abs(P_(s,r[n][0]))>s.eps||F_(s,r[n][0])&&c.push(n))}if(!c.length)continue;let l=[t[e],...c.map(e=>t[e])],u=n?.(l);if(u){let t=new Map;l.flat().forEach((e,n)=>t.set(e,n));let n=u.cycles.flat(),r=n.length;if(n.every(e=>t.has(e))&&r===t.size){let i=u.shape.tris.map(e=>e.map(e=>e<r?t.get(n[e]):e));a.add(e),c.forEach(e=>a.add(e)),o.push({cycles:l,shape:{inner:u.shape.inner,tris:i},normal:u.normal,fromBody:!0});continue}}let d=Mp([r[e],...c.map(e=>r[e])]);d&&(a.add(e),c.forEach(e=>a.add(e)),o.push({cycles:[t[e],...c.map(e=>t[e])],shape:d,normal:s.normal}))}for(let n=0;n<t.length;n++){if(a.has(n))continue;let i=t[n];o.push({cycles:[i],shape:jp(r[n],(t,n)=>j_(e,i[t],i[n])),normal:s(r[n])})}return o}function z_(e,t){let n=e.faceColor,r=[],i=0,a=e.areas();for(let o=0;o<e.faceCount;o++)n[o]===t?i+=a[o]:r.push(o);let o=e.neighbours(),s=[];for(let c of a_(e,r,e=>n[e]!==t)){let e=0;for(let t of c)e+=a[t];if(e>=i)continue;let r=!0,l=!1;for(let e of c)for(let i=0;i<3;i++){let a=o[3*e+i];a<0?r=!1:n[a]===t&&(l=!0)}r&&l&&s.push(...c)}if(!s.length)return{pm:e,added:s};let c=Uint8Array.from(n);for(let e of s)c[e]=t;return{pm:e.withColours(c),added:s}}function B_(e,t,n,r,i,a){let o=[];for(let n=0;n<e.faceCount;n++)e.faceColor[n]===t&&o.push(n);let s=new Set(r&&i>0?A_(e,o,r,i):o),c=o.length-s.size,{pm:l,added:u}=z_(e,t);for(let e of u)s.add(e);let{pm:d,origin:f}=L_(l,t),p=e=>d.faceColor[e]===t,m=[];for(let e=0;e<d.faceCount;e++)p(e)&&m.push(e);let h=m.filter(e=>s.has(f[e])),g=I_(d,t),_=Array.from(d.positions),v=[],y=[];for(let e=0;e<d.faceCount;e++)p(e)||(v.push(d.index[3*e],d.index[3*e+1],d.index[3*e+2]),y.push(d.faceColor[e]));let b=e=>e.map(e=>M_(d.positions,e)).sort().join(`|`),x=new Map,S=new Map;for(let e of R_(d,i_(r_(d,m,p)))){let t=g(e.cycles[0],n),r=e.cycles.flat(),i=_.length/3;e.shape.inner.forEach((e,t)=>{_.push(...e),r.push(i+t)});for(let n of e.shape.tris)v.push(r[n[0]],r[n[1]],r[n[2]]),y.push(t);if(e.cycles.length===1){let t=e.cycles[0].map(e=>M_(d.positions,e));x.set(b(e.cycles[0]),{keys:t,shape:e.shape,normal:e.normal})}else S.set(e.cycles.map(b).sort().join(`/`),e)}let C=new Ql(Float32Array.from(_),Uint32Array.from(v),Uint8Array.from(y));if(!h.length)return{body:C,part:null,dropped:c};let w=new e_,T=new Map,E=e=>{let t=T.get(e);return t===void 0&&(t=w.vert(t_(d.positions,e)),T.set(e,t)),t},D=new Set(h);for(let e of h)w.tri(E(d.index[3*e]),E(d.index[3*e+1]),E(d.index[3*e+2]));let O=new Map,k=[];for(let e of R_(d,i_(r_(d,h,e=>D.has(e))),e=>S.get(e.map(b).sort().join(`/`)))){let t=e.shape,n=null,r=e.cycles[0];if(e.cycles.length===1){let e=r.map(e=>M_(d.positions,e)),i=x.get(b(r)),a=r.length;if(i&&i.keys.length===a&&i.keys[(i.keys.indexOf(e[0])+1)%a]===e[1%a]){let r=i.keys.indexOf(e[0]);t={inner:i.shape.inner,tris:i.shape.tris.map(e=>e.map(e=>e<a?(e-r+a)%a:e))},n=i.normal}}else e.fromBody&&(n=e.normal);let i=e.cycles.flat().map(E);for(let e of t.inner)i.push(w.vert(e));for(let e of t.tris)w.tri(i[e[0]],i[e[2]],i[e[1]]);if(n){let e=Ip(r.map(e=>t_(d.positions,e)));if(e&&k.push({...e,normal:n}),a>0)for(let e of i)O.set(e,[n[0]*a,n[1]*a,n[2]*a])}}for(let[e,t]of O)for(let n=0;n<3;n++)w.pos[3*e+n]+=t[n];return{body:C,part:w.mesh(),dropped:c,joints:k}}function V_(e,t){let n=e.length,r=[0,0,0],i=0,a=e.map((t,r)=>{let i=e[(r+1)%n],a=e[(r+n-1)%n];return(Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])+Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2]))/2});if(e.forEach((e,t)=>{for(let n=0;n<3;n++)r[n]+=e[n]*a[t];i+=a[t]}),i<1e-12)return t;for(let e=0;e<3;e++)r[e]/=i;let o=[0,0,0,0,0,0,0,0,0];e.forEach((e,t)=>{let n=[e[0]-r[0],e[1]-r[1],e[2]-r[2]];for(let e=0;e<3;e++)for(let r=0;r<3;r++)o[3*e+r]+=a[t]*n[e]*n[r]});let s=o[0]+o[4]+o[8],c=[t[0],t[1],t[2]];for(let e=0;e<100;e++){let e=[0,1,2].map(e=>s*c[e]-(o[3*e]*c[0]+o[3*e+1]*c[1]+o[3*e+2]*c[2])),n=Math.hypot(...e);if(n<1e-20)return t;c=[e[0]/n,e[1]/n,e[2]/n]}return c_(c,t)<0&&(c=[-c[0],-c[1],-c[2]]),c_(c,t)<.5&&(c=t),c}function H_(e,t,n,r,i,a,o){let s=e.positions,c=e.index,l=0;for(let e of n)l=Math.max(l,Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2]));let u=Math.max(2,.25*l),d=new Map,f=u,p=(e,t,n)=>`${Math.floor(e/f)},${Math.floor(t/f)},${Math.floor(n/f)}`;n.forEach((e,t)=>{let n=p(e[0],e[1],e[2]),r=d.get(n);r?r.push(t):d.set(n,[t])});let m=(e,t,r)=>{let i=Math.floor(e/f),a=Math.floor(t/f),o=Math.floor(r/f);for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)for(let f of d.get(`${i+s},${a+c},${o+l}`)??[]){let i=n[f];if((i[0]-e)**2+(i[1]-t)**2+(i[2]-r)**2<u*u)return!0}return!1},{start:h,faces:g}=e.vertexFaces(),_=e.neighbours(),v=[],y=new Set;for(let e of t)for(let t=h[e];t<h[e+1];t++)y.has(g[t])||(y.add(g[t]),v.push(g[t]));let b=e.areas(),x=e=>[0,1,2].map(t=>(s[3*c[3*e]+t]+s[3*c[3*e+1]+t]+s[3*c[3*e+2]+t])/3);for(let e=0;e<v.length&&v.length<2e4;e++)for(let t=0;t<3;t++){let n=_[3*v[e]+t];if(n<0||y.has(n))continue;y.add(n);let r=x(n);m(r[0],r[1],r[2])&&v.push(n)}let S=[r,V_(n,r)];for(let e=0;e<3;e++){let t=[0,0,0];t[e]=Math.sign(r[e])||1,c_(t,r)>Math.cos(30*Math.PI/180)&&S.push(t)}let C=[0,0,0];for(let t of v){if(a(t))continue;let n=e.normals();for(let e=0;e<3;e++)C[e]+=n[3*t+e]*b[t]}let w=Math.hypot(...C);w>1e-12&&c_(C,r)/w>Math.cos(30*Math.PI/180)&&S.push([C[0]/w,C[1]/w,C[2]/w]);let T=null;for(let e of S){let t=v.map(t=>({h:c_(e,x(t)),a:b[t],paint:a(t),f:t}));t.sort((e,t)=>e.h-t.h);let n=0;for(let e of t)e.paint||(n+=e.a);let r=-1,i=n;for(let e=0;e<t.length;e++)n+=t[e].paint?t[e].a:-t[e].a,n<i-1e-9&&([i,r]=[n,e]);let l=t[r]?.h??(t[0]?.h??0)-o,u=t[r+1]?.h??l+o,d=-1/0;for(let n=0;n<=r;n++){if(t[n].paint)continue;let r=t[n].f;for(let t=0;t<3;t++)d=Math.max(d,c_(e,t_(s,c[3*r+t])))}let f=d>-1/0&&d<u?d+o:(l+u)/2,p=Math.max(Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2]))===1,m=i*(p?.9:1);(!T||m<T.score)&&(T={n:e,d:f,score:m})}return T??{n:r,d:c_(r,i)}}function U_(e,t,n,r){let i=[];for(let n=0;n<e.faceCount;n++)t(n)&&i.push(n);let a=I_(e,n),o=0;{let t=e.positions,n=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];for(let e=0;e<t.length;e++)n[e%3]=Math.min(n[e%3],t[e]),r[e%3]=Math.max(r[e%3],t[e]);o=Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2])}let s=Math.max(.02,o*.001),c=[];for(let n of i_(r_(e,i,t))){let i=n.map(t=>t_(e.positions,t)),{centre:o,normal:l}=Cp(i),u=Math.hypot(...l);if(u<1e-9)continue;let{n:d,d:f}=H_(e,n,i,[l[0]/u,l[1]/u,l[2]/u],o,t,s);c.push({n:d,d:f,loops:[i],area:u/2,paint:a(n,r)})}c.sort((e,t)=>t.area-e.area);let l=[];for(let e of c){let t=l.find(t=>Math.abs(c_(t.n,e.n))>.999&&Math.abs(t.d-Math.sign(c_(t.n,e.n))*e.d)<s);t?t.loops.push(...e.loops):l.length<16&&l.push(e)}return l}async function W_(e,t,n,r,i,a){let{Manifold:o,Mesh:s,CrossSection:c}=await Q_(),l=new Set,u=e=>(l.add(e),e),d=e=>(l.forEach(e=>e.delete()),e);try{let f=[];for(let n=0;n<e.faceCount;n++)e.faceColor[n]===t&&f.push(n);let p=new Set(r&&i>0?A_(e,f,r,i):f),m=f.length-p.size,{pm:h,added:g}=z_(e,t);for(let e of g)p.add(e);let _=e=>p.has(e),v=U_(h,_,t,n);if(!v.length)return d(null);let y=o.reserveIDs(1),b=new s({numProp:3,vertProperties:h.positions,triVerts:h.index,faceID:Uint32Array.from({length:h.faceCount},(e,t)=>t),runIndex:Uint32Array.of(0,h.index.length),runOriginalID:Uint32Array.of(y)});b.merge();let x=u(new o(b));if(x.status()!==`NoError`||x.isEmpty())return d(null);let S=J_(o,x,l),C=h.areas(),w=0;for(let e of p)w+=C[e];let T=.002,E=v.map(e=>{let[t,n]=wp(e.n),r=[e.n[0]*e.d,e.n[1]*e.d,e.n[2]*e.d],i=0,a=e.loops.map(a=>{let o=a.map(a=>{let o=[a[0]-r[0],a[1]-r[1],a[2]-r[2]];return i=Math.max(i,Math.abs(c_(o,e.n))),[c_(o,t),c_(o,n)]}),s=0;for(let e=0;e<o.length;e++)s+=o[e][0]*o[(e+1)%o.length][1]-o[(e+1)%o.length][0]*o[e][1];return s<0?o.reverse():o}),s=u(u(new c(a,`Positive`)).offset(Math.min(Math.max(.5,i*2),3),`Round`,2,16));return{pl:e,slab:(i,a)=>{let c=u(o.extrude(s,a-i));return u(c.transform([t[0],t[1],t[2],0,n[0],n[1],n[2],0,e.n[0],e.n[1],e.n[2],0,r[0]+e.n[0]*i,r[1]+e.n[1]*i,r[2]+e.n[2]*i,1]))}}}),D=u(o.union(E.map(e=>e.slab(-.002/2,T/2)))),O=u(S.subtract(D)),k=u(S.intersect(D)),A=[],j=[k],M=0;for(let e of O.decompose()){u(e);let t=e.getMesh(),n=0,r=0;for(let e=0;e<t.runOriginalID.length;e++)if(t.runOriginalID[e]===y)for(let i=t.runIndex[e]/3;i<t.runIndex[e+1]/3;i++){let e=t.faceID[i];_(e)?n+=C[e]:r+=C[e]}n>r?(A.push(e),M+=n):j.push(e)}if(M<.5*w)return d({body:e,part:null,dropped:m,joints:[],thin:!1,notFreed:!0});let N=e=>{let t=n,r=1/0;for(let n of v){let i=Math.abs(c_(n.n,e)-n.d);i<r&&([r,t]=[i,n.paint])}return t},P=(e=>{let n=e.getMesh(),r=av(n),i=new Uint8Array(r.index.length/3),a=new Uint8Array(i.length);for(let e=0;e<n.runOriginalID.length;e++)if(n.runOriginalID[e]===y)for(let r=n.runIndex[e]/3;r<n.runIndex[e+1]/3;r++){let e=n.faceID[r];i[r]=h.faceColor[e],a[r]=h.faceColor[e]===t?0:1}for(let e=0;e<i.length;e++){if(a[e])continue;let t=[0,1,2].map(t=>(r.positions[3*r.index[3*e]+t]+r.positions[3*r.index[3*e+1]+t]+r.positions[3*r.index[3*e+2]+t])/3);i[e]=N(t)}return new Ql(r.positions,r.index,i)})(u(o.union(j))),F=u(o.union(A)),I=[],L=0;for(let{pl:e,slab:t}of E){let n=u(F.intersect(t(T/2,.051000000000000004))).volume(),r=u(F.intersect(t(-.002/2-.05,-.002/2))).volume();if(n<1e-9&&r<1e-9)continue;let i=n>=r?1:-1;L+=e.area;let o=i>0?e.n:[-e.n[0],-e.n[1],-e.n[2]],s=Ip(e.loops[0].map(t=>{let n=c_(e.n,t)-e.d;return[t[0]-e.n[0]*n,t[1]-e.n[1]*n,t[2]-e.n[2]*n]}));s&&I.push({...s,normal:o}),a>0&&(F=u(F.subtract(i>0?t(0,T/2+a):t(-.002/2-a,0))))}return d({body:P,part:F.isEmpty()?null:av(F.getMesh()),dropped:m,joints:I,thin:L>.75*M,notFreed:!1})}catch(e){return console.warn(`straight cut failed`,e),d(null)}}function G_(e,t){let n=new Set,r=a_(e,Array.from({length:e.faceCount},(e,t)=>t),()=>!0);if(r.length<2)return n;let i=new Int32Array(e.faceCount);r.forEach((e,t)=>e.forEach(e=>i[e]=t));let a=$g(e.positions,e.index),o=e.positions,s=e.index,c=e.normals();for(let e of t){let t=[0,1,2].map(t=>(o[3*s[3*e]+t]+o[3*s[3*e+1]+t]+o[3*s[3*e+2]+t])/3),r=[c[3*e],c[3*e+1],c[3*e+2]],l=new mi(new q(t[0]+r[0]*1e-4,t[1]+r[1]*1e-4,t[2]+r[2]*1e-4),new q(r[0],r[1],r[2])),u=0;for(let t of a.raycast(l,2))t.faceIndex!=null&&i[t.faceIndex]!==i[e]&&u++;u%2==1&&n.add(e)}return n}function K_(e,t){let n=new Map;if(!t.size)return{rest:e,shells:n};let r=e.neighbours(),i=e.areas(),a=Array.from({length:e.faceCount},(e,t)=>t),o=new Uint8Array(e.faceCount),s=new Map,c=a_(e,a,()=>!0);if(c.length<2)return{rest:e,shells:n};let l=Math.max(...c.map(e=>e.length)),u=c.filter(n=>n.length!==l&&n.some(n=>t.has(e.faceColor[n]))),d=G_(e,u.flat());for(let n of u){if(!n.every(e=>r[3*e]>=0&&r[3*e+1]>=0&&r[3*e+2]>=0))continue;let a=new Map,c=0;for(let t of n)d.has(t)||(a.set(e.faceColor[t],(a.get(e.faceColor[t])??0)+i[t]),c+=i[t]);let l=-1,u=0;for(let[e,t]of a)t>u&&([l,u]=[e,t]);if(!t.has(l)||u<.5*c)continue;for(let e of n)o[e]=1;let f=s.get(l);f?f.push(...n):s.set(l,n)}if(!s.size)return{rest:e,shells:n};let f=t=>{let n=new Map,r=[],i=[];for(let a of t)for(let t=0;t<3;t++){let o=e.index[3*a+t],s=n.get(o);s===void 0&&(s=n.size,n.set(o,s),r.push(e.positions[3*o],e.positions[3*o+1],e.positions[3*o+2])),i.push(s)}return{positions:Float32Array.from(r),index:Uint32Array.from(i)}};for(let[e,t]of s)n.set(e,f(t));let p=a.filter(e=>!o[e]),m=f(p);return{rest:new Ql(m.positions,m.index,Uint8Array.from(p,t=>e.faceColor[t]),Uint16Array.from(p,t=>e.faceObject[t])),shells:n}}async function q_(e,t,n){let r=Zg(e,t),i=Qg(r,n.bodyChoice);if(i===null||r.filter(e=>e>0).length<2)return{bodyIndex:i,parts:[],work:e};let a=r.map((e,t)=>t).filter(e=>e!==i&&r[e]>0&&n.cut[e]!==!1),o=a.filter(e=>n.mode[e]===`cutoff`),s=[],c=[],l=e;{let{rest:e,shells:t}=K_(l,new Set(o));l=e;for(let[e,n]of t)s.push({colour:e,shape:n,report:Xg(),area:r[e],cutOff:!0,shell:!0})}if(o.length){let t=n.minThickness>0?$g(e.positions,e.index):null;for(let e of o){let a=await W_(l,e,i,t,n.minThickness,n.cutOffGap),{body:o,part:u,dropped:d,joints:f}=a??B_(l,e,i,t,n.minThickness,n.cutOffGap);l=o;let p=Xg();p.dropped=d,a?.thin&&(p.flat=!0),a?.notFreed&&c.push(e),u&&s.push({colour:e,shape:u,report:p,area:r[e],cutOff:!0,joints:f})}}let u=a.filter(e=>!o.includes(e));if(!u.length)return{bodyIndex:i,parts:s,work:l,notFreed:c};{let e=[];for(let t=0;t<l.faceCount;t++)u.includes(l.faceColor[t])&&e.push(t);let t=G_(l,e);if(t.size){let e=Uint8Array.from(l.faceColor);for(let n of t)e[n]=i;l=l.withColours(e)}}{let e=[];for(let t of u){let n=[];for(let e=0;e<l.faceCount;e++)l.faceColor[e]===t&&n.push(e);n.length&&e.push(...i_(r_(l,n,e=>l.faceColor[e]===t)))}let t=n_(l,e);if(t.size){let e=Float32Array.from(l.positions);for(let[n,r]of t)e[3*n]=r[0],e[3*n+1]=r[1],e[3*n+2]=r[2];l=l.withPositions(e)}}let d=$g(l.positions,l.index),f=Math.max(n.depth,n.tolerance)*.001,p=n.flatBottom?null:o_(l.positions,l.index);for(let e of u){let t=[];for(let n=0;n<l.faceCount;n++)l.faceColor[n]===e&&t.push(n);if(t.length){if(n.flatBottom){let{shape:i,report:a}=__(l,t,n.depth,d,n.tolerance,f);s.push({colour:e,shape:i,report:a,area:r[e],cutOff:!1})}else{let{mesh:i,kind:a,topOf:o}=w_(l,t,n.depth+n.tolerance,p);T_(i,a,n.tolerance);let c=D_(l,t,d,n.depth,n.tolerance,f,p,e=>o.get(e));s.push({colour:e,shape:i,report:c,area:r[e],cutOff:!1})}}}return{bodyIndex:i,parts:s,work:l,notFreed:c}}function J_(e,t,n){let r=t.decompose();if(r.forEach(e=>n.add(e)),r.length<2)return t;let i=e.union(r);return n.add(i),i}var Y_=null,X_;function Z_(e){X_=e}function Q_(){return Y_||=Gg(()=>import(`./manifold-BKACTnWi.js`).then(async e=>{let t=await e.default(X_?{locateFile:()=>X_}:void 0);return t.setup(),t}),[],import.meta.url),Y_}async function $_(e,t,n){let{bodyIndex:r,parts:i,work:a,notFreed:o}=await q_(e,t,n);if(r===null)return null;if(!i.length)return o?.length?{bodyIndex:r,body:{positions:a.positions,index:a.index,faceColor:a.faceColor},parts:[],warnings:o.map(e=>({kind:`notFreed`,colour:e}))}:null;let s=(o??[]).map(e=>({kind:`notFreed`,colour:e})),c=[];for(let e of i)e.cutOff&&!e.shell&&(e.report.dropped&&s.push({kind:`dropped`,colour:e.colour,faces:e.report.dropped}),e.report.flat&&s.push({kind:`flatPatch`,colour:e.colour}),c.push({colour:e.colour,mesh:e.shape,cutOff:!0,joints:e.joints}));let l=i.filter(e=>!e.cutOff||e.shell);for(let e of l)e.shell||(e.report.tooCurved&&s.push({kind:`curved`,colour:e.colour}),e.report.worst&&s.push({kind:`thin`,colour:e.colour,have:e.report.worst[0],need:e.report.worst[1]}));let u=new Set(i.map(e=>e.colour)),d;if(!l.length)d={positions:a.positions,index:a.index,faceColor:a.faceColor.slice()};else if(n.flatBottom){let{Manifold:e,Mesh:t}=await Q_(),i=new Set,o=(n,r)=>{let a=new t({numProp:3,vertProperties:n.positions,triVerts:n.index,faceID:r});a.merge();let o=new e(a);return i.add(o),o},u,f=e.reserveIDs(1);try{let n=new t({numProp:3,vertProperties:a.positions,triVerts:a.index,faceID:Uint32Array.from({length:a.faceCount},(e,t)=>t),runIndex:Uint32Array.of(0,a.index.length),runOriginalID:Uint32Array.of(f)});if(n.merge(),u=new e(n),i.add(u),u.status()!==`NoError`)throw Error(u.status());u=J_(e,u,i)}catch{return i.forEach(e=>e.delete()),{bodyIndex:r,body:{positions:a.positions,index:a.index,faceColor:a.faceColor},parts:[],warnings:[{kind:`notClosed`}]}}let p=Math.max(n.depth,n.tolerance)*.001,m=null;for(let t of[...l].sort((e,t)=>t.area-e.area)){let r;try{if(r=o(t.shape),r.status()!==`NoError`||r.isEmpty())throw Error(`bad part`)}catch{s.push({kind:`failed`,colour:t.colour});continue}m&&(r=r.subtract(m),i.add(r));let a=r.getMesh();a.triVerts.length?c.push({colour:t.colour,mesh:av(a),cutOff:t.cutOff}):s.push({kind:`covered`,colour:t.colour});try{let r=o(E_(t.shape,Math.max(t.cutOff?n.cutOffGap:n.tolerance,p)));m=m?e.union(m,r):r,i.add(m)}catch{s.push({kind:`failed`,colour:t.colour})}}let h=m?u.subtract(m):u;i.add(h);let g=h.getMesh(),_=g.triVerts.length/3,v=new Uint8Array(_).fill(r);for(let e=0;e<g.runOriginalID.length;e++)if(g.runOriginalID[e]===f)for(let t=g.runIndex[e]/3;t<g.runIndex[e+1]/3;t++)v[t]=a.faceColor[g.faceID[t]];d={...av(g),faceColor:v},i.forEach(e=>e.delete())}else{for(let e of l)c.push({colour:e.colour,mesh:e.shape,cutOff:e.cutOff});let e=new Set(l.map(e=>e.colour));d=O_(a,t=>e.has(t),n.depth+n.tolerance,o_(a.positions,a.index),r)}return n.connector?.enabled&&c.some(e=>e.joints?.length)&&(d=await ev(d,c,n.connector,n.cutOffGap,r,s)),d.faceColor=d.faceColor.map(e=>!n.keepUncut||u.has(e)?r:e),{bodyIndex:r,body:d,parts:c,warnings:s}}async function ev(e,t,n,r,i,a){let{Manifold:o,Mesh:s}=await Q_(),c=new Set,l=e=>(c.add(e),e),u=e=>{let t=new s({numProp:3,vertProperties:e.positions,triVerts:e.index});return t.merge(),l(new o(t))},d=o.reserveIDs(1),f;try{let t=new s({numProp:3,vertProperties:e.positions,triVerts:e.index,faceID:Uint32Array.from({length:e.index.length/3},(e,t)=>t),runIndex:Uint32Array.of(0,e.index.length),runOriginalID:Uint32Array.of(d)});if(t.merge(),f=l(new o(t)),f.status()!==`NoError`)throw Error(f.status());f=J_(o,f,c)}catch{return c.forEach(e=>e.delete()),a.push({kind:`notClosed`}),e}let p=Bp(n);for(let i of t)if(i.cutOff&&i.joints?.length)try{let t=u(i.mesh);if(t.status()!==`NoError`)throw Error(`part`);let o=!1;for(let s of i.joints.flatMap(e=>zp(e,n))){if(s.room<p){a.push({kind:`connectorTooBig`,colour:i.colour,room:s.room});continue}rv(n.pegOn===`body`?i.mesh:e,s,n,r)&&a.push({kind:`connectorThrough`,colour:i.colour,onBody:n.pegOn!==`body`});let{peg:c,socket:d}=Wp(s,n,r,iv(n.pegOn===`body`?e:i.mesh,s,n,r)),m=u(c),h=u(d);n.pegOn===`body`?(f=l(f.add(m)),t=l(t.subtract(h))):(t=l(t.add(m)),f=l(f.subtract(h))),o=!0}o&&(i.mesh=av(t.getMesh()))}catch{a.push({kind:`connectorFailed`,colour:i.colour})}let m=f.getMesh(),h=m.triVerts.length/3,g=new Uint8Array(h).fill(i);for(let t=0;t<m.runOriginalID.length;t++)if(m.runOriginalID[t]===d)for(let n=m.runIndex[t]/3;n<m.runIndex[t+1]/3;n++)g[n]=e.faceColor[m.faceID[n]];return c.forEach(e=>e.delete()),{...av(m),faceColor:g}}var tv=new WeakMap;function nv(e,t,n){let r=new mi(new q(...t),new q(...n)),i=tv.get(e.index);i&&i.geometry.getAttribute(`position`).array===e.positions||(i=$g(e.positions,e.index),tv.set(e.index,i));let a=i.raycast(r,2).sort((e,t)=>e.distance-t.distance),o=null;for(let e of a){let t=e.face?.normal;if(t){if(!(t.x*n[0]+t.y*n[1]+t.z*n[2]>0))o??=e.distance;else return{entry:o??0,exit:e.distance}}}return null}function rv(e,t,n,r){let{base:i,axis:a}=Up(t,n,r),o=n.size+r,s=nv(e,[i[0]-a[0]*o,i[1]-a[1]*o,i[2]-a[2]*o],a);return s?o+r+n.length+n.tolerance>s.exit-.4:!1}function iv(e,t,n,r){let{base:i,axis:a}=Up(t,n,r),o=Math.max(n.size,2),s=nv(e,[i[0]+a[0]*o,i[1]+a[1]*o,i[2]+a[2]*o],[-a[0],-a[1],-a[2]]);if(!s)return Math.max(n.size,1);let c=s.entry-o,l=s.exit-o;return Math.max(c+.2,.05,Math.min(n.size,l-.4))}function av(e){if(e.numProp===3)return{positions:e.vertProperties.slice(),index:e.triVerts.slice()};let t=e.vertProperties.length/e.numProp,n=new Float32Array(t*3);for(let r=0;r<t;r++)for(let t=0;t<3;t++)n[3*r+t]=e.vertProperties[r*e.numProp+t];return{positions:n,index:e.triVerts.slice()}}var ov=new URL(`manifold-BE4c7gO-.wasm`,import.meta.url).href,sv=[{line:`Bambu PLA Basic`,colours:[{name:`Jade White`,hex:`#FFFFFF`},{name:`Beige`,hex:`#F7E6DE`},{name:`Light Gray`,hex:`#D1D3D5`},{name:`Silver`,hex:`#A6A9AA`},{name:`Gray`,hex:`#8E9089`},{name:`Dark Gray`,hex:`#545454`},{name:`Black`,hex:`#000000`},{name:`Red`,hex:`#C12E1F`},{name:`Maroon Red`,hex:`#9D2235`},{name:`Magenta`,hex:`#EC008C`},{name:`Pink`,hex:`#F55A74`},{name:`Hot Pink`,hex:`#F5547C`},{name:`Orange`,hex:`#FF6A13`},{name:`Pumpkin Orange`,hex:`#FF9016`},{name:`Yellow`,hex:`#F4EE2A`},{name:`Sunflower Yellow`,hex:`#FEC600`},{name:`Gold`,hex:`#E4BD68`},{name:`Bright Green`,hex:`#BECF00`},{name:`Bambu Green`,hex:`#00AE42`},{name:`Mistletoe Green`,hex:`#3F8E43`},{name:`Turquoise`,hex:`#00B1B7`},{name:`Cyan`,hex:`#0086D6`},{name:`Cobalt Blue`,hex:`#0056B8`},{name:`Blue`,hex:`#0A2989`},{name:`Blue Grey`,hex:`#5B6579`},{name:`Purple`,hex:`#5E43B7`},{name:`Indigo Purple`,hex:`#482960`},{name:`Brown`,hex:`#9D432C`},{name:`Cocoa Brown`,hex:`#6F5034`}]},{line:`Bambu PLA Matte`,colours:[{name:`Ivory White`,hex:`#FFFFFF`},{name:`Bone White`,hex:`#CBC6B8`},{name:`Desert Tan`,hex:`#E8DBB7`},{name:`Latte Brown`,hex:`#D3B7A7`},{name:`Caramel`,hex:`#AE835B`},{name:`Terracotta`,hex:`#B15533`},{name:`Dark Brown`,hex:`#7D6556`},{name:`Dark Chocolate`,hex:`#4D3324`},{name:`Ash Gray`,hex:`#9B9EA0`},{name:`Charcoal`,hex:`#000000`},{name:`Scarlet Red`,hex:`#DE4343`},{name:`Dark Red`,hex:`#BB3D43`},{name:`Mandarin Orange`,hex:`#F99963`},{name:`Lemon Yellow`,hex:`#F7D959`},{name:`Sakura Pink`,hex:`#E8AFCF`},{name:`Lilac Purple`,hex:`#AE96D4`},{name:`Ice Blue`,hex:`#A3D8E1`},{name:`Sky Blue`,hex:`#56B7E6`},{name:`Marine Blue`,hex:`#0078BF`},{name:`Dark Blue`,hex:`#042F56`},{name:`Grass Green`,hex:`#61C680`},{name:`Apple Green`,hex:`#C2E189`},{name:`Dark Green`,hex:`#68724D`}]}],cv={type:`change`},lv={type:`start`},uv={type:`end`},dv=new mi,fv=new Gr,pv=Math.cos(70*Pt.DEG2RAD),mv=new q,hv=2*Math.PI,gv={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_v=1e-6,vv=class extends Ro{constructor(e,t=null){super(e,t),this.state=gv.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.DOLLY,RIGHT:l.PAN},this.touches={ONE:u.ROTATE,TWO:u.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ft,this._lastTargetPosition=new q,this._quat=new Ft().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oo,this._sphericalDelta=new Oo,this._scale=1,this._panOffset=new q,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new q,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bv.bind(this),this._onPointerDown=yv.bind(this),this._onPointerUp=xv.bind(this),this._onContextMenu=Ov.bind(this),this._onMouseWheel=wv.bind(this),this._onKeyDown=Tv.bind(this),this._onTouchStart=Ev.bind(this),this._onTouchMove=Dv.bind(this),this._onMouseDown=Sv.bind(this),this._onMouseMove=Cv.bind(this),this._interceptControlDown=kv.bind(this),this._interceptControlUp=Av.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=gv.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cv),this.update(),this.state=gv.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;mv.copy(t).sub(this.target),mv.applyQuaternion(this._quat),this._spherical.setFromVector3(mv),this.autoRotate&&this.state===gv.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=hv:n>Math.PI&&(n-=hv),r<-Math.PI?r+=hv:r>Math.PI&&(r-=hv),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(mv.setFromSpherical(this._spherical),mv.applyQuaternion(this._quatInverse),t.copy(this.target).add(mv),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=mv.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=mv.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(dv.origin.copy(this.object.position),dv.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dv.direction))<pv?this.object.lookAt(this.target):(fv.setFromNormalAndCoplanarPoint(this.object.up,this.target),dv.intersectPlane(fv,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>_v||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_v||this._lastTargetPosition.distanceToSquared(this.target)>_v?(this.dispatchEvent(cv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?hv/60/60*this.autoRotateSpeed:hv/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mv.setFromMatrixColumn(t,0),mv.multiplyScalar(-e),this._panOffset.add(mv)}_panUp(e,t){this.screenSpacePanning===!0?mv.setFromMatrixColumn(t,1):(mv.setFromMatrixColumn(t,0),mv.crossVectors(this.object.up,mv)),mv.multiplyScalar(e),this._panOffset.add(mv)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;mv.copy(r).sub(this.target);let i=mv.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hv*this._rotateDelta.x/t.clientHeight),this._rotateUp(hv*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hv*this._rotateDelta.x/t.clientHeight),this._rotateUp(hv*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function bv(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function xv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(uv),this.state=gv.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Sv(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case l.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=gv.DOLLY;break;case l.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=gv.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=gv.ROTATE}break;case l.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=gv.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=gv.PAN}break;default:this.state=gv.NONE}this.state!==gv.NONE&&this.dispatchEvent(lv)}function Cv(e){switch(this.state){case gv.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case gv.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case gv.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function wv(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===gv.NONE&&(e.preventDefault(),this.dispatchEvent(lv),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(uv))}function Tv(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ev(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case u.ROTATE:if(this.enableRotate===!1){this.state=gv.NONE;break}this._handleTouchStartRotate(e),this.state=gv.TOUCH_ROTATE;break;case u.PAN:if(this.enablePan===!1){this.state=gv.NONE;break}this._handleTouchStartPan(e),this.state=gv.TOUCH_PAN;break;default:this.state=gv.NONE}break;case 2:switch(this.touches.TWO){case u.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=gv.TOUCH_DOLLY_PAN;break;case u.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=gv.TOUCH_DOLLY_ROTATE;break;default:this.state=gv.NONE}break;default:this.state=gv.NONE}this.state!==gv.NONE&&this.dispatchEvent(lv)}function Dv(e){switch(this._trackPointer(e),this.state){case gv.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case gv.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case gv.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case gv.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=gv.NONE}}function Ov(e){this.enabled!==!1&&e.preventDefault()}function kv(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Av(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var jv=class{container;renderer;scene=new Un;camera=new ro(35,1,.1,1e5);controls;root=new Pn;mesh=null;colourAttr=null;hiAttr=null;ownerOf=null;fullIndex=null;ownerFirst=!1;moving=!1;gizmoScene=new Un;gizmoCam=new io(-1.55,1.55,1.55,-1.55,.1,10);gizmo=new Pn;highlighted=null;bvh=null;paintMesh=null;hidden=null;ratioCap=0;slowFrames=0;lastFrame=0;fullColourUpload=!1;grid=null;ring;dirty=!0;palette=Array.from({length:16},()=>new Vn(13421772));uniforms={uPalette:{value:this.palette},uHiColor:{value:new Vn(16777215)},uHiStrength:{value:.5}};material;centre=new q;size=new q;constructor(e){this.container=e,this.renderer=new Zl({antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setClearColor(0,0);let t=this.renderer.getContext().getExtension(`WEBGL_provoking_vertex`);t&&(t.provokingVertexWEBGL(t.FIRST_VERTEX_CONVENTION_WEBGL),this.ownerFirst=!0),e.appendChild(this.renderer.domElement),this.renderer.domElement.style.display=`block`,this.renderer.domElement.style.touchAction=`none`,this.root.rotation.x=-Math.PI/2,this.scene.add(this.root),this.scene.add(new Ga(16777215,3817290,1.6));let n=new oo(16777215,1.6);n.position.set(.6,1,.9),this.camera.add(n);let r=new oo(16777215,.5);r.position.set(-1,-.3,.4),this.camera.add(r),this.scene.add(this.camera),this.controls=new vv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.15,this.controls.addEventListener(`change`,()=>this.invalidate()),this.material=new xa({roughness:.72,metalness:0,side:2}),this.material.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=`attribute float aColor;
attribute float aHi;
flat varying float vColor;
flat varying float vHi;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vColor = aColor;
vHi = aHi;`),e.fragmentShader=`uniform vec3 uPalette[16];
uniform vec3 uHiColor;
uniform float uHiStrength;
flat varying float vColor;
flat varying float vHi;
`+e.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`vec3 base = uPalette[int(vColor + 0.5)];
          base = mix(base, uHiColor, step(0.5, vHi) * uHiStrength);
          vec4 diffuseColor = vec4( base, opacity );`)};let i=new la(.93,1,64);this.ring=new Di(i,new hi({color:16777215,transparent:!0,opacity:.9,depthTest:!1,side:2})),this.ring.renderOrder=10,this.ring.visible=!1,this.root.add(this.ring),this.buildGizmo(),new ResizeObserver(()=>this.resize()).observe(e),this.resize();let a=e=>{requestAnimationFrame(a),this.controls.update(),this.watchMotion(),this.dirty?(this.dirty=!1,this.renderer.render(this.scene,this.camera),this.drawGizmo(),this.fullColourUpload=!1,this.watchFrameTime(e)):this.lastFrame=0};requestAnimationFrame(a)}invalidate(){this.dirty=!0}pixelRatio(){let e=this.paintMesh?.faceCount??0,t=e>15e5?1:e>25e4?1.5:2,n=Math.min(window.devicePixelRatio||1,t);return this.ratioCap&&(n=Math.min(n,this.ratioCap)),this.moving&&e>25e4&&(n=Math.min(n,e>15e5?.75:1)),n}lastPos=new q;lastQuat=new Ft;quiet=0;watchMotion(){let e=this.camera,t=e.position.distanceTo(this.controls.target),n=e.position.distanceToSquared(this.lastPos)>(t*.001)**2||8*(1-Math.abs(e.quaternion.dot(this.lastQuat)))>1e-5;this.lastPos.copy(e.position),this.lastQuat.copy(e.quaternion),n?(this.quiet=0,this.moving||this.setMoving(!0)):this.moving&&++this.quiet>=6&&this.setMoving(!1)}setMoving(e){this.moving=e;let t=this.pixelRatio();t!==this.renderer.getPixelRatio()&&(this.renderer.setPixelRatio(t),this.resize())}watchFrameTime(e){let t=this.lastFrame?e-this.lastFrame:0;if(this.lastFrame=e,!t||t>250)return;this.slowFrames=t>34?this.slowFrames+1:Math.max(0,this.slowFrames-2);let n=this.renderer.getPixelRatio();this.slowFrames>=20&&n>1&&(this.slowFrames=0,this.ratioCap=Math.max(1,n-.5),this.renderer.setPixelRatio(this.pixelRatio()),this.resize())}resize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width=`100%`,this.renderer.domElement.style.height=`100%`,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}setPalette(e){e.slice(0,16).forEach((e,t)=>this.palette[t].set(e)),this.invalidate()}setMesh(e){this.mesh&&(this.root.remove(this.mesh),this.mesh.geometry.dispose()),this.paintMesh=e;let t=Fv(e,this.ownerFirst),n=new Lr;n.setAttribute(`position`,new Sr(t.positions,3)),n.setAttribute(`normal`,new Sr(t.normals,3,!0));let r=t.positions.length/3;this.colourAttr=new Sr(new Uint8Array(r),1),this.hiAttr=new Sr(new Uint8Array(r),1),n.setAttribute(`aColor`,this.colourAttr),n.setAttribute(`aHi`,this.hiAttr),this.fullIndex=new Sr(t.index,1),n.setIndex(this.fullIndex),this.ownerOf=t.owner,n.computeBoundingSphere(),this.mesh=new Di(n,this.material),this.root.add(this.mesh),this.highlighted=null,this.hidden=null,this.ratioCap=0,this.slowFrames=0,this.refreshAllColours(),this.renderer.setPixelRatio(this.pixelRatio()),this.resize();let i=new Lr;i.setAttribute(`position`,new Sr(e.positions,3)),i.setIndex(new Sr(e.index,1)),this.bvh=new zg(i,{indirect:!0,maxDepth:40});let a=e.bounds();this.centre.set((a[0]+a[3])/2,(a[1]+a[4])/2,(a[2]+a[5])/2),this.size.set(a[3]-a[0],a[4]-a[1],a[5]-a[2]),this.root.position.set(-this.centre.x,-a[2],this.centre.y),this.root.updateMatrixWorld(!0),this.buildGrid(),this.frame()}buildGizmo(){this.gizmo.rotation.x=-Math.PI/2,this.gizmoScene.add(this.gizmo),Nv.forEach((e,t)=>{let n=new q;n.setComponent(t,1);let r=new Di(new na(.055,.055,1,10).translate(0,.5,0).rotateX(Math.PI/2),new hi({color:e.colour}));r.quaternion.setFromUnitVectors(new q(0,0,1),n),this.gizmo.add(r);let i=new Di(new na(.03,.03,.45,8).translate(0,-.225,0).rotateX(Math.PI/2),new hi({color:e.colour,transparent:!0,opacity:.3}));i.quaternion.copy(r.quaternion),this.gizmo.add(i);let a=new ci(new Jr({map:Pv(e.name,e.colour),depthTest:!1,transparent:!0}));a.position.copy(n).multiplyScalar(1.24),a.scale.setScalar(.66),a.renderOrder=2,this.gizmo.add(a)}),this.gizmo.add(new Di(new ua(.09,12,8),new hi({color:15264496}))),this.gizmoCam.position.set(0,0,4)}gizmoSize(){let e=this.container.clientWidth,t=this.container.clientHeight;return Math.round(Math.min(78,Math.max(48,Math.min(e,t)*.1)))}drawGizmo(){if(!this.mesh)return;let e=this.gizmoSize(),t=this.container.clientHeight;if(this.container.clientWidth<e+20||t<e+20)return;this.gizmoCam.quaternion.copy(this.camera.quaternion),this.gizmoCam.position.set(0,0,4).applyQuaternion(this.camera.quaternion);let n=this.renderer;n.autoClear=!1,n.setScissorTest(!0),n.setViewport(10,10,e,e),n.setScissor(10,10,e,e),n.clearDepth(),n.render(this.gizmoScene,this.gizmoCam),n.autoClear=!0,n.setScissorTest(!1),n.setViewport(0,0,this.container.clientWidth,t)}buildGrid(){this.grid&&(this.scene.remove(this.grid),this.grid.geometry.dispose());let e=Math.max(this.size.x,this.size.y)*1.6,t=e>400?50:e>120?10:e>30?5:1,n=Math.max(4,Math.ceil(e/t/2)*2);this.grid=new Lo(n*t,n,3883344,2501171),this.scene.add(this.grid)}frame(){let e=Math.max(this.size.length()/2,1),t=new q(0,this.size.z/2,0),n=e/Math.sin(Pt.degToRad(this.camera.fov/2))*1.05;this.controls.target.copy(t),this.camera.position.set(0,t.y+e*.15,n),this.camera.near=Math.max(n/1e3,.01),this.camera.far=n*100,this.camera.updateProjectionMatrix(),this.controls.update(),this.invalidate()}refreshAllColours(){if(!this.paintMesh||!this.colourAttr||!this.ownerOf)return;let e=this.paintMesh.faceColor,t=this.colourAttr.array,n=this.ownerOf;for(let r=0;r<e.length;r++)t[n[r]]=e[r];this.colourAttr.clearUpdateRanges(),this.fullColourUpload=!0,this.colourAttr.needsUpdate=!0,this.invalidate()}updateFaces(e){if(!this.paintMesh||!this.colourAttr||!this.ownerOf)return;let t=this.paintMesh.faceColor,n=this.colourAttr.array,r=this.ownerOf,i=1/0,a=-1;for(let o of e){let e=r[o];n[e]=t[o],e<i&&(i=e),e>a&&(a=e)}a<0||(this.fullColourUpload||this.colourAttr.addUpdateRange(i,a-i+1),this.colourAttr.needsUpdate=!0,this.invalidate())}setHighlight(e,t){if(!this.hiAttr||!this.ownerOf||e===this.highlighted)return;let n=this.hiAttr.array,r=this.ownerOf;if(this.highlighted){let e=this.highlighted;for(let t=0;t<e.length;t++)n[r[e[t]]]=0}if(e){for(let t=0;t<e.length;t++)n[r[e[t]]]=1;t&&this.uniforms.uHiColor.value.set(t)}this.highlighted=e,this.hiAttr.needsUpdate=!0,this.invalidate()}setHidden(e){if(!this.mesh||!this.paintMesh)return;this.hidden=e&&e.some(e=>e)?e:null;let t=this.mesh.geometry;if(!this.hidden)t.setIndex(this.fullIndex);else{let e=this.fullIndex.array,n=0;for(let e=0;e<this.hidden.length;e++)this.hidden[e]||n++;let r=new Uint32Array(n*3),i=0;for(let t=0;t<this.hidden.length;t++)this.hidden[t]||(r[i++]=e[3*t],r[i++]=e[3*t+1],r[i++]=e[3*t+2]);t.setIndex(new Sr(r,1))}this.invalidate()}isHidden(e){return!!this.hidden&&this.hidden[e]===1}raycast(e,t){if(!this.bvh||!this.mesh||!this.paintMesh)return null;let n=this.renderer.domElement.getBoundingClientRect(),r=new K((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new To;i.setFromCamera(r,this.camera);let a=i.ray.clone().applyMatrix4(this.root.matrixWorld.clone().invert()),o;if(!this.hidden)o=this.bvh.raycastFirst(a,2);else{let e=this.hidden;o=this.bvh.raycast(a,2).filter(t=>t.faceIndex!=null&&!e[t.faceIndex]).sort((e,t)=>e.distance-t.distance)[0]??null}if(!o||o.faceIndex==null)return null;let s=this.paintMesh.normals(),c=o.faceIndex,l=new q(s[3*c],s[3*c+1],s[3*c+2]);return l.dot(a.direction)>0&&l.negate(),{face:c,point:o.point.clone(),normal:l}}modelRay(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new K((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new To;return i.setFromCamera(r,this.camera),i.ray.clone().applyMatrix4(this.root.matrixWorld.clone().invert())}ghost=new Pn;setGhost(e){if(this.clearGroup(this.ghost),this.ghost.parent||this.root.add(this.ghost),e){let t=Mv(e.positions,e.index),n=new Di(t,new hi({color:e.hex,transparent:!0,opacity:.6,depthTest:!1,depthWrite:!1,side:2}));n.renderOrder=7;let r=new Yi(new sa(t,30),new Li({color:16777215,depthTest:!1}));r.renderOrder=8,this.ghost.add(n,r)}this.invalidate()}facesInSphere(e,t,n,r,i){if(!this.bvh||!this.paintMesh)return;let a=this.paintMesh.normals();i!==void 0&&(t=new q(a[3*i],a[3*i+1],a[3*i+2]));let o=new kr(e,n),s=n*n,c=new q;this.bvh.shapecast({intersectsBounds:e=>e.intersectsSphere(o),intersectsTriangle:(n,i)=>(this.hidden&&this.hidden[i]||a[3*i]*t.x+a[3*i+1]*t.y+a[3*i+2]*t.z<=0||(n.closestPointToPoint(e,c),c.distanceToSquared(e)<=s&&r.add(i)),!1)})}nearestFace(e){if(!this.bvh||!this.paintMesh)return null;let t=this.bvh.closestPointToPoint(e,{point:new q,distance:0,faceIndex:0});if(!t||t.faceIndex==null)return null;let n=this.paintMesh.normals(),r=t.faceIndex;return this.hidden&&this.hidden[r]?null:{face:r,point:t.point.clone(),normal:new q(n[3*r],n[3*r+1],n[3*r+2])}}showRing(e,t,n=`#ffffff`){e?(this.ring.visible=!0,this.ring.position.copy(e.point).addScaledVector(e.normal,t*.02),this.ring.scale.setScalar(t),this.ring.lookAt(this.root.localToWorld(e.point.clone().add(e.normal))),this.ring.material.color.set(n),this.invalidate()):this.ring.visible&&(this.ring.visible=!1,this.invalidate())}pixelsPerMm(e){let t=this.root.localToWorld(e.clone()).distanceTo(this.camera.position);return this.renderer.domElement.clientHeight/(2*t*Math.tan(Pt.degToRad(this.camera.fov/2)))}overlay=new Pn;result=new Pn;resultItems=[];setOverlay(e){this.clearGroup(this.overlay),this.overlay.parent||this.root.add(this.overlay);for(let t of e??[]){let e=Mv(t.positions,t.index),n=t.index.length/3,r=new Float32Array(n*9),i=new Vn(t.hex),a=new Vn(1,.08,.05);for(let e=0;e<n;e++){let n=t.bad&&t.bad.size&&[0,1,2].some(n=>t.bad.has(t.index[3*e+n]))?a:i;for(let t=0;t<3;t++)r.set([n.r,n.g,n.b],9*e+3*t)}e.setAttribute(`color`,new Sr(r,3));let o=new Di(e,new hi({vertexColors:!0,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,side:2}));o.renderOrder=5,this.overlay.add(o);let s=new Yi(new sa(e,30),new Li({color:i,transparent:!0,opacity:.8,depthTest:!1}));s.renderOrder=6,this.overlay.add(s)}this.invalidate()}setResult(e){if(this.clearGroup(this.result),this.resultItems=[],this.result.parent||this.root.add(this.result),this.mesh&&(this.mesh.visible=!e),!e){this.invalidate();return}let t=this.centre.clone();for(let n of e){let e=Mv(n.positions,n.index),r=n.index.length/3,i=new Float32Array(r*9),a=n.colours.map(e=>new Vn(e));for(let e=0;e<r;e++){let t=a[n.faceColor?n.faceColor[e]:0]??a[0];for(let n=0;n<3;n++)i.set([t.r,t.g,t.b],9*e+3*n)}e.setAttribute(`color`,new Sr(i,3)),e.computeVertexNormals(),e.computeBoundingBox();let o=new Di(e,new xa({vertexColors:!0,roughness:.72,side:2})),s=e.boundingBox.getCenter(new q).sub(t);s.lengthSq()<1e-9&&s.set(0,0,1),s.normalize(),this.result.add(o),this.resultItems.push({obj:o,offset:s})}this.invalidate()}layoutResult(e,t){this.resultItems.forEach((n,r)=>{n.obj.position.copy(n.offset).multiplyScalar(r===0?0:e),n.obj.visible=t[r]!==!1}),this.invalidate()}clearGroup(e){for(let t of[...e.children]){e.remove(t);let n=t;n.geometry?.dispose(),n.material?.dispose?.()}}snapshot(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL(`image/png`)}};function Mv(e,t){let n=t.length/3,r=new Float32Array(n*9);for(let n=0;n<t.length;n++){let i=t[n]*3;r[3*n]=e[i],r[3*n+1]=e[i+1],r[3*n+2]=e[i+2]}let i=new Lr;return i.setAttribute(`position`,new Sr(r,3)),i}var Nv=[{name:`X`,colour:`#f87171`},{name:`Y`,colour:`#4ade80`},{name:`Z`,colour:`#60a5fa`}];function Pv(e,t){let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.font=`bold 44px system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.lineWidth=6,r.strokeStyle=`rgba(0,0,0,.6)`,r.strokeText(e,32,34),r.fillStyle=t,r.fillText(e,32,34);let i=new Zi(n);return i.colorSpace=Ue,i}function Fv(e,t){let n=e.faceCount,r=e.cornerNormals(),{index:i,positions:a}=e,o=3*n,s=1;for(;s<o*2;)s<<=1;let c=s-1,l=new Int32Array(s).fill(-1),u=o+n,d=new Int32Array(u),f=new Int32Array(o),p=new Int8Array(u*3),m=new Uint32Array(o),h=0;for(let e=0;e<o;e++){let t=i[e],n=Math.round(r[3*e]*127),a=Math.round(r[3*e+1]*127),o=Math.round(r[3*e+2]*127),s=(n&255)<<16|(a&255)<<8|o&255,u=(Math.imul(t,2654435761)^Math.imul(s+1,2246822507))&c;for(;;){let r=l[u];if(r<0){l[u]=h,d[h]=t,f[h]=s,p[3*h]=n,p[3*h+1]=a,p[3*h+2]=o,m[e]=h++;break}if(d[r]===t&&f[r]===s){m[e]=r;break}u=u+1&c}}let g=new Uint8Array(u),_=new Uint32Array(n),v=new Uint32Array(o);for(let e=0;e<n;e++){let n=m[3*e],r=m[3*e+1],i=m[3*e+2],a=g[n]?g[r]?g[i]?-1:2:1:0,o;a<0?(a=0,o=h++,d[o]=d[n],p[3*o]=p[3*n],p[3*o+1]=p[3*n+1],p[3*o+2]=p[3*n+2]):o=a===0?n:a===1?r:i,g[o]=1,_[e]=o;let s=a===0?r:a===1?i:n,c=a===0?i:a===1?n:r;t?(v[3*e]=o,v[3*e+1]=s,v[3*e+2]=c):(v[3*e]=s,v[3*e+1]=c,v[3*e+2]=o)}let y=new Float32Array(h*3);for(let e=0;e<h;e++){let t=d[e]*3;y[3*e]=a[t],y[3*e+1]=a[t+1],y[3*e+2]=a[t+2]}return{positions:y,normals:p.slice(0,h*3),index:v,owner:_}}var Iv={en:{tagline:`Paint 3D models for multicolour printing`,open:`Open model`,export:`Export`,export3mf:`3MF for Bambu Studio`,export3mfHint:`Painted, one filament per colour`,exportStl:`STL (geometry only)`,exportStlHint:`Without colours, for any slicer`,undo:`Undo (Ctrl+Z)`,redo:`Redo (Ctrl+Shift+Z)`,tools:`Tools`,brush:`Brush`,eraser:`Eraser`,fill:`Fill`,smooth:`Smooth`,navigate:`Navigate`,diameter:`Diameter`,strength:`Strength`,angle:`Sharp edge angle`,stopAtColour:`Stop at colour change`,stopAtColourHint:`The fill does not cross into other colours`,stopAtSharp:`Stop at sharp edges`,stopAtSharpHint:`The fill does not cross edges sharper than the angle (e.g. the faces of a box)`,fillWhat:(e,t)=>e&&t?`Fills up to sharp edges and other colours.`:e?`Fills up to sharp edges, over other colours.`:t?`Fills the whole area of the same colour.`:`Fills the whole connected piece of the model.`,symmetry:`Symmetry`,symmetryHint:`Mirrors across the red X, green Y or blue Z axis. The cross in the corner of the view shows where they point.`,palette:`Palette`,addColour:`Add colour`,deleteColour:`Delete colour`,baseColour:`Base colour (unpainted areas)`,colourName:`Name`,hex:`HEX`,library:`Filament colours`,libraryHint:`Click a colour to use it for the selected palette slot.`,gaps:`Fill gaps`,gapsHint:`Fills small unpainted spots that Fill leaves in deep creases with the selected colour.`,maxGap:`Max gap`,anyColour:`Also small areas of other colours`,fillGaps:`Fill gaps`,gapsDone:e=>e?`Filled ${e} gap${e===1?``:`s`}`:`No gaps found`,dropTitle:`Drop a model here`,dropText:`STL, 3MF (Bambu Studio, PrusaSlicer) or OBJ + MTL. Your file stays on your device; nothing is uploaded.`,sample:`Try a sample`,loading:`Loading model…`,preparing:`Preparing…`,triangles:`triangles`,hintBrush:`Drag to paint · Shift + drag erases · Right drag / Alt + drag: rotate · Wheel: zoom · [ ] size`,hintFill:`Click to fill the highlighted area · [ ] angle · Right drag: rotate · Wheel: zoom`,hintSmooth:`Drag along a ragged colour edge to even it out · [ ] size`,hintNavigate:`Drag: rotate · Right drag: pan · Wheel: zoom`,shortcuts:`Shortcuts`,shortcutList:[[`B / E / F / S / V`,`Brush, Eraser, Fill, Smooth, Navigate`],[`1 – 9`,`Pick colour`],[`[ ]`,`Brush size or fill angle`],[`X / Y / Z`,`Toggle symmetry`],[`Ctrl+Z / Ctrl+Shift+Z`,`Undo / redo`],[`Home`,`Frame the model`]],errorRead:`Could not read this file`,tooManyColours:`The file has more than 16 colours; extra colours were merged into the closest ones.`,importedFrom:(e,t)=>`Imported from ${e} (${t} object${t===1?``:`s`})`,exported:`Exported`,colour:`Colour`,privacy:`Runs entirely in your browser`,tabPaint:`Paint`,tabSplit:`Split parts`,tabExport:`Model & export`,splitTitle:`Split colours into parts`,splitIntro:`For printing each colour separately and assembling (e.g. resin). Inlay: the part sits in a pocket in the body (eyes, stripes). Cut Off: the colour is cut away whole along its edge (hair, wings, a helmet).`,presetResin:`Resin`,presetFdm:`FDM`,presetCustom:`Custom`,tolerance:`Tolerance (mm)`,toleranceHint:`Gap between each inlay part and its pocket, on every side`,depth:`Depth (mm)`,depthHint:`How deep each inlay part goes into the model`,minThickness:`Cut Off min thickness (mm)`,minThicknessHint:`Cut Off: bits of the model thinner than this (thin tips, wisps) are left out; the body is closed under them. 0 = cut everything`,cutOffGap:`Cut Off gap (mm)`,cutOffGapHint:`Cut Off: the part is shortened by this much where it was cut, leaving a gap against the body (for glue or a looser fit). 0 = they meet exactly`,connectors:`Connectors (Cut Off)`,connectorsHint:`A square peg on one side of every Cut Off cut and a matching socket in the other, so the pieces line up and hold.`,connSize:`Peg size (mm)`,connLength:`Peg length (mm)`,connTol:`Socket tolerance (mm)`,connChamfer:`Chamfer (mm)`,connChamferHint:`How far down the sides the bevel round the peg's top face reaches. 0 = sharp edges`,connAngle:`Chamfer angle (°)`,connAngleHint:`Angle of the bevel round the peg's top face, from the side: 45° is a normal chamfer, 0 = sharp edges. The sides stay straight.`,connPlace:`Placement`,connPlaceAuto:`Centre of each cut`,connPlaceManual:`Click to place`,connPlaceHint:`Move over a cut (shown see-through in the preview): the peg follows the cursor. Click to place it, click a placed peg to remove it.`,clearPegs:`Remove all`,pegsPlaced:e=>`Pegs placed: ${e}`,partNoPegs:`no pegs yet: click on the cut`,hintPlace:`Click on a cut to place a peg · click a peg to remove it · Right drag: rotate · Wheel: zoom`,pegOn:`Peg on`,pegOnBody:`Body`,pegOnPart:`Part`,partConnector:e=>`${e} connector(s)`,partNoRoom:e=>`connector does not fit (room ${(e*2).toFixed(1)} mm across)`,partConnectorThrough:e=>`the socket would go through the ${e?`body`:`part`}`,warnConnectorTooBig:(e,t)=>`${e}: the connector does not fit the cut (about ${(t*2).toFixed(1)} mm across); use a smaller peg size.`,warnConnectorFailed:e=>`${e}: the connector could not be added.`,warnConnectorThrough:(e,t)=>`${e}: the connector's socket would go through the ${t?`body`:`part`}; use a shorter peg or put the peg on the other side.`,flatBottom:`Flat bottom`,flatBottomHint:`Every inlay part gets a flat bottom (good bed adhesion, slides straight into its pocket); Depth is then its thinnest spot. Off: the bottom follows the surface at an even depth, built without a boolean, which suits any mesh.`,colours:`Colours`,bodyColour:`Body colour`,auto:`Auto (largest area)`,bodyIs:(e,t,n)=>`Body: ${e} ${t} (${n})`,whyChosen:`chosen`,whyLargest:`largest area`,cutWhich:`Colours to cut into parts`,inlay:`Inlay`,cutOff:`Cut Off`,bodyTag:`body`,unused:`not used`,uncutKeep:`Keep painted`,uncutBody:`Body colour`,uncutHint:`Unticked colours stay on the body: painted (e.g. print the body with the AMS) or turned into the body colour.`,modelSize:(e,t,n)=>`Model: ${e.toFixed(1)} × ${t.toFixed(1)} × ${n.toFixed(1)} mm`,preview:`Preview`,hidePreview:`Hide preview`,previewHint:`Parts are drawn see-through in the model, red where a part would go through.`,split:`Split colours into parts`,splitting:`Splitting…`,nothingToSplit:`Only one colour is used on the model, nothing to split`,nothingTicked:`No colour is ticked to cut, nothing to split`,partCutOff:(e,t)=>`${e} ${t}: cut off whole`,partDropped:e=>`${e} too thin face(s) left out`,partFlat:`only a thin skin: the colour is a patch on the surface, Inlay suits it better`,partDepth:(e,t,n,r)=>`${e} ${t}: ${n.toFixed(2)}–${r.toFixed(2)} mm deep`,partThrough:e=>`goes through by ${e.toFixed(2)} mm (red)`,partFits:e=>e===null?`fits`:`fits, ${e.toFixed(2)} mm of model left`,partCurved:`wraps round too far for a flat bottom`,result:`Result`,bodyName:`Body`,splitUndone:`Split undone`,explode:`Spread parts apart`,partsFormat:`Format`,exportParts:`Export parts (ZIP)`,exportPartsHint:`Every part in its own file, in millimetres. STL for any slicer, 3MF with the part's colours for Bambu Studio.`,backToPaint:`Back to painting`,warnThin:(e,t,n)=>`${e}: the model is only ${t.toFixed(2)} mm thick where the part needs ${n.toFixed(2)} mm (with tolerance); it may go through. Use a smaller depth.`,warnCurved:e=>`${e} wraps round the model too far for a flat bottom: check the part, or split that colour into smaller areas.`,warnDropped:(e,t,n)=>`${e}: ${t} face(s) thinner than ${n} mm left out`,warnFlat:e=>`${e}: the cut-off part is only a thin skin. The colour is a patch on the surface; Inlay suits it better.`,warnNotFreed:e=>`${e}: can't be cut off with flat cuts. Paint the whole piece up to a straight edge (e.g. where it meets the rest), or use Inlay for a patch on the surface.`,partNotFreed:`can't be cut off: paint it up to a straight edge, or use Inlay`,warnCovered:e=>`${e} is completely covered by neighbouring parts, no part was made for it.`,warnFailed:e=>`${e}: this part could not be cut (its painted area is not a clean surface).`,warnNotClosed:`The model is not closed (it has holes or overlapping pieces), so a flat-bottom cut cannot be made. Turn off Flat bottom: it needs no boolean and handles any mesh.`,splitDone:(e,t)=>`Body (colour ${t}) + ${e} part(s)`,modelTitle:`Model`,scale:`Scale`,scaleHint:`Sizes are millimetres. If the model was made in other units, scale it: the painting stays.`,applyScale:`Apply`,addModel:`Add another model`,addModelHint:`Adds a model at its own position in a new colour, like several objects exported together from Blender.`,filaments:`Filaments`,mergeSame:`Merge same colours`,colourTolerance:`Colour tolerance`,slot:`Slot`,slotAuto:`auto`,slotHint:`The filament (AMS slot) each colour gets in Bambu Studio. Same colours share a slot automatically; pick a number to choose it yourself.`,tooManyFilaments:e=>`${e} filaments needed; Bambu Studio supports up to 16. Assign shared slots.`,exportObj:`OBJ + MTL (ZIP)`,exportObjHint:`Fallback: Bambu Studio shows its colour dialog for coloured OBJ`,exportFormats:`Export`,models:`Models`,benchyCredit:`#3DBenchy by Creative Tools (3dbenchy.com), CC BY-ND 4.0`,showModel:`Show`,hideModel:`Hide`,showAll:`Show all`,deleteModel:`Delete model`,confirmDelete:e=>`Delete “${e}”?`,confirmDeleteNote:`The model is removed from the scene. Undo history is cleared.`,cancel:`Cancel`,delete:`Delete`,hiddenNote:`Hidden models are not painted, split or exported.`,deleted:e=>`Deleted: ${e}`,footerPrivacy:`Privacy`,footerTerms:`Terms of use`,footerLicences:`Licences`,footerAbout:`About`,footerContact:`Contact`,footerMade:`Made for multicolour 3D printing`,close:`Close`,bugTitle:`Found a bug?`,pageBug:[`Thanks for helping make STLware better! If something does not work as it should, let us know.`,`Please describe what you did, what you expected and what happened instead, and which browser you use. A screenshot helps a lot, and so does the model (or a smaller one where the bug also happens).`,`Nothing is sent automatically: your models stay on your device unless you attach them yourself.`],bugMail:`Write to us at`,bugMailBody:`What I did:

What I expected:

What happened instead:

Browser:
`,guide:`Guide`,guideHint:`How to paint, split and export`,pageGuide:[`Open a model (STL, 3MF or OBJ) or try the sample, then paint it on the Paint tab: Brush and Eraser for details, Fill for whole areas, Smooth to tidy colour edges. Each colour in the palette becomes one filament.`,`The Split parts tab cuts painted colours into separate printable parts. Inlay: the part sits in a pocket in the body (eyes, stripes). Cut Off: the colour is cut away whole along its edge (hair, wings, a helmet), optionally with connectors. Use Preview to check the parts before splitting.`,`Export a 3MF for Bambu Studio from the Export button. Bambu Studio may warn that the file is not a Bambu project: click OK and confirm the filament colours.`,`A detailed guide is coming soon.`],pageAbout:[`STLware lets you paint STL, 3MF and OBJ models right in the browser, split colours into printable parts with connectors, and export a painted 3MF for Bambu Studio (one filament per colour).`,`It is free to use and needs no account or installation.`],pagePrivacy:[`Everything runs in your browser. Your models are never uploaded: opening, painting, splitting and exporting all happen on your own computer.`,`There are no accounts, no cookies and no trackers or analytics.`,`Only your settings (language and tool options) are saved in your browser's local storage, so they are there next time. Clearing your browser data removes them.`,`The web host keeps the usual technical server logs (such as IP address and time of the request) for security and operation.`],pageTerms:[`STLware is provided free of charge, as is, without any warranty. Check your models in the slicer before printing; we are not liable for failed prints, damage or lost data.`,`You keep all rights to your models and to everything you export. Only open models you have the right to use.`,`The STLware name, logo and website may not be copied or presented as your own.`],pageLicences:[`Built with open-source software: three.js (MIT), three-mesh-bvh (MIT), Manifold (Apache-2.0), cdt2d (MIT), earcut (ISC) and fflate (MIT). Thanks to their authors.`]},sk:{tagline:`Maľovanie 3D modelov pre viacfarebnú tlač`,open:`Otvoriť model`,export:`Export`,export3mf:`3MF pre Bambu Studio`,export3mfHint:`Vymaľovaný, jeden filament na farbu`,exportStl:`STL (iba geometria)`,exportStlHint:`Bez farieb, pre akýkoľvek slicer`,undo:`Späť (Ctrl+Z)`,redo:`Znova (Ctrl+Shift+Z)`,tools:`Nástroje`,brush:`Štetec`,eraser:`Guma`,fill:`Vedro`,smooth:`Vyhladiť`,navigate:`Navigácia`,diameter:`Priemer`,strength:`Sila`,angle:`Uhol ostrej hrany`,stopAtColour:`Zastaviť na zmene farby`,stopAtColourHint:`Výplň neprejde do iných farieb`,stopAtSharp:`Zastaviť na ostrých hranách`,stopAtSharpHint:`Výplň neprejde cez hrany ostrejšie ako uhol (napr. steny kocky)`,fillWhat:(e,t)=>e&&t?`Vyplní po ostré hrany a po iné farby.`:e?`Vyplní po ostré hrany, aj cez iné farby.`:t?`Vyplní celú plochu rovnakej farby.`:`Vyplní celý súvislý kus modelu.`,symmetry:`Symetria`,symmetryHint:`Zrkadlí podľa červenej osi X, zelenej Y alebo modrej Z. Krížik v rohu pohľadu ukazuje, kam smerujú.`,palette:`Paleta`,addColour:`Pridať farbu`,deleteColour:`Zmazať farbu`,baseColour:`Základná farba (nevymaľované miesta)`,colourName:`Názov`,hex:`HEX`,library:`Farby filamentov`,libraryHint:`Kliknutím použiješ farbu pre vybraný slot palety.`,gaps:`Vyplniť medzery`,gapsHint:`Malé nevymaľované miesta, ktoré vedro nechá v hlbokých záhyboch, vyplní vybranou farbou.`,maxGap:`Max. medzera`,anyColour:`Aj malé plochy iných farieb`,fillGaps:`Vyplniť medzery`,gapsDone:e=>e?`Vyplnené medzery: ${e}`:`Žiadne medzery`,dropTitle:`Pusti sem model`,dropText:`STL, 3MF (Bambu Studio, PrusaSlicer) alebo OBJ + MTL. Súbor zostáva v tvojom zariadení, nič sa nenahráva.`,sample:`Vyskúšať ukážku`,loading:`Načítavam model…`,preparing:`Pripravujem…`,triangles:`trojuholníkov`,hintBrush:`Ťahaj na maľovanie · Shift + ťah gumuje · Pravé tlačidlo / Alt + ťah: otáčanie · Koliesko: zoom · [ ] veľkosť`,hintFill:`Klikni na vyplnenie zvýraznenej plochy · [ ] uhol · Pravé tlačidlo: otáčanie · Koliesko: zoom`,hintSmooth:`Ťahaj po zubatom okraji farby, vyrovná sa · [ ] veľkosť`,hintNavigate:`Ťah: otáčanie · Pravé tlačidlo: posun · Koliesko: zoom`,shortcuts:`Skratky`,shortcutList:[[`B / E / F / S / V`,`Štetec, Guma, Vedro, Vyhladiť, Navigácia`],[`1 – 9`,`Výber farby`],[`[ ]`,`Veľkosť štetca alebo uhol vedra`],[`X / Y / Z`,`Zapnúť/vypnúť symetriu`],[`Ctrl+Z / Ctrl+Shift+Z`,`Späť / znova`],[`Home`,`Zobraziť celý model`]],errorRead:`Tento súbor sa nepodarilo načítať`,tooManyColours:`Súbor má viac ako 16 farieb, ďalšie farby sa zlúčili s najbližšími.`,importedFrom:(e,t)=>`Importované z ${e} (objekty: ${t})`,exported:`Exportované`,colour:`Farba`,privacy:`Beží celé v tvojom prehliadači`,tabPaint:`Maľovanie`,tabSplit:`Rozdelenie`,tabExport:`Model a export`,splitTitle:`Rozdeliť farby na diely`,splitIntro:`Na tlač každej farby zvlášť a skladanie (napr. resin). Inlay: diel sedí v jamke v tele (oči, pruhy). Cut Off: farba sa odreže celá po svojom okraji (vlasy, krídla, prilba).`,presetResin:`Resin`,presetFdm:`FDM`,presetCustom:`Vlastné`,tolerance:`Tolerancia (mm)`,toleranceHint:`Medzera medzi inlay dielom a jeho jamkou, na každej strane`,depth:`Hĺbka (mm)`,depthHint:`Ako hlboko ide inlay diel do modelu`,minThickness:`Cut Off min. hrúbka (mm)`,minThicknessHint:`Cut Off: časti modelu tenšie ako toto (tenké špičky, pramienky) sa vynechajú; telo sa pod nimi uzavrie. 0 = rezať všetko`,cutOffGap:`Cut Off medzera (mm)`,cutOffGapHint:`Cut Off: diel sa v mieste rezu skráti o túto hodnotu a nechá medzeru oproti telu (na lepidlo alebo voľnejšie uloženie). 0 = sedia presne`,connectors:`Konektory (Cut Off)`,connectorsHint:`Hranatý čap na jednej strane každého Cut Off rezu a k nemu diera na druhej strane, aby diely sedeli na mieste a držali.`,connSize:`Veľkosť čapu (mm)`,connLength:`Dĺžka čapu (mm)`,connTol:`Tolerancia diery (mm)`,connChamfer:`Skosenie (mm)`,connChamferHint:`Ako ďaleko po bokoch siaha skosená hrana okolo vrchnej plochy čapu. 0 = ostré hrany`,connAngle:`Uhol skosenia (°)`,connAngleHint:`Uhol skosenej hrany okolo vrchnej plochy čapu, meraný od boku: 45° je bežné skosenie, 0 = ostré hrany. Boky ostávajú rovné.`,connPlace:`Umiestnenie`,connPlaceAuto:`Stred každého rezu`,connPlaceManual:`Klikaním`,connPlaceHint:`Prejdi myšou nad rez (v preview je priesvitný): čap ide za kurzorom. Klikom ho položíš, klikom na položený čap ho odstrániš.`,clearPegs:`Odstrániť všetky`,pegsPlaced:e=>`Položené čapy: ${e}`,partNoPegs:`zatiaľ bez čapov: klikni na rez`,hintPlace:`Klikni na rez a polož čap · klik na čap ho odstráni · Pravé tlačidlo: otáčanie · Koliesko: zoom`,pegOn:`Čap na`,pegOnBody:`Tele`,pegOnPart:`Diele`,partConnector:e=>`konektory: ${e}`,partNoRoom:e=>`konektor sa nezmestí (miesto ${(e*2).toFixed(1)} mm)`,partConnectorThrough:e=>`diera by prešla cez ${e?`telo`:`diel`}`,warnConnectorTooBig:(e,t)=>`${e}: konektor sa do rezu nezmestí (asi ${(t*2).toFixed(1)} mm); zmenši veľkosť čapu.`,warnConnectorFailed:e=>`${e}: konektor sa nepodarilo pridať.`,warnConnectorThrough:(e,t)=>`${e}: diera pre konektor by prešla cez ${t?`telo`:`diel`}; skráť čap alebo daj čap na druhú stranu.`,flatBottom:`Ploché dno`,flatBottomHint:`Každý inlay diel dostane ploché dno (dobre drží na podložke, zasunie sa rovno do jamky); Hĺbka je potom jeho najtenšie miesto. Vypnuté: dno kopíruje povrch v rovnakej hĺbke, bez booleanu, zvládne akúkoľvek sieť.`,colours:`Farby`,bodyColour:`Farba tela`,auto:`Auto (najväčšia plocha)`,bodyIs:(e,t,n)=>`Telo: ${e} ${t} (${n})`,whyChosen:`zvolené`,whyLargest:`najväčšia plocha`,cutWhich:`Farby, ktoré sa vyrežú ako diely`,inlay:`Inlay`,cutOff:`Cut Off`,bodyTag:`telo`,unused:`nepoužitá`,uncutKeep:`Nechať namaľované`,uncutBody:`Farba tela`,uncutHint:`Neodškrtnuté farby zostanú na tele: namaľované (napr. telo tlačiť s AMS) alebo vo farbe tela.`,modelSize:(e,t,n)=>`Model: ${e.toFixed(1)} × ${t.toFixed(1)} × ${n.toFixed(1)} mm`,preview:`Náhľad`,hidePreview:`Skryť náhľad`,previewHint:`Diely sú priesvitne v modeli, červené tam, kde by diel prerazil.`,split:`Rozdeliť farby na diely`,splitting:`Rozdeľujem…`,nothingToSplit:`Na modeli je len jedna farba, nie je čo deliť`,nothingTicked:`Žiadna farba nie je označená na rezanie`,partCutOff:(e,t)=>`${e} ${t}: odrezaná celá`,partDropped:e=>`vynechané tenké plôšky: ${e}`,partFlat:`len tenká šupka: farba je plôška na povrchu, lepšie sa hodí Inlay`,partDepth:(e,t,n,r)=>`${e} ${t}: hĺbka ${n.toFixed(2)}–${r.toFixed(2)} mm`,partThrough:e=>`prerazí o ${e.toFixed(2)} mm (červené)`,partFits:e=>e===null?`sedí`:`sedí, zostane ${e.toFixed(2)} mm modelu`,partCurved:`obopína model príliš na ploché dno`,result:`Výsledok`,bodyName:`Telo`,splitUndone:`Rozdelenie vrátené späť`,explode:`Roztiahnuť diely`,partsFormat:`Formát`,exportParts:`Exportovať diely (ZIP)`,exportPartsHint:`Každý diel v samostatnom súbore, v milimetroch. STL pre akýkoľvek slicer, 3MF s farbami dielu pre Bambu Studio.`,backToPaint:`Späť na maľovanie`,warnThin:(e,t,n)=>`${e}: model je hrubý len ${t.toFixed(2)} mm, diel potrebuje ${n.toFixed(2)} mm (s toleranciou); môže prerazit. Zmenši hĺbku.`,warnCurved:e=>`${e} obopína model príliš na ploché dno: skontroluj diel alebo rozdeľ farbu na menšie plochy.`,warnDropped:(e,t,n)=>`${e}: vynechané plôšky tenšie ako ${n} mm: ${t}`,warnFlat:e=>`${e}: odrezaný diel je len tenká šupka. Farba je plôška na povrchu, lepšie sa hodí Inlay.`,warnNotFreed:e=>`${e}: nedá sa odrezať rovnými rezmi. Namaľuj celý kus až po rovnú hranu (napr. kde sa stretá so zvyškom), alebo pre plôšku na povrchu použi Inlay.`,partNotFreed:`nedá sa odrezať: namaľuj ju po rovnú hranu, alebo použi Inlay`,warnCovered:e=>`${e} úplne zakrývajú susedné diely, diel nevznikol.`,warnFailed:e=>`${e}: tento diel sa nepodarilo vyrezať (namaľovaná plocha nie je čistý povrch).`,warnNotClosed:`Model nie je uzavretý (má diery alebo prekrývajúce sa časti), takže rez s plochým dnom nejde. Vypni Ploché dno: nepotrebuje boolean a zvládne akúkoľvek sieť.`,splitDone:(e,t)=>`Telo (farba ${t}) + dielov: ${e}`,modelTitle:`Model`,scale:`Mierka`,scaleHint:`Rozmery sú v milimetroch. Ak bol model v iných jednotkách, zmeň mierku: maľovanie zostane.`,applyScale:`Použiť`,addModel:`Pridať ďalší model`,addModelHint:`Pridá model na jeho vlastnú pozíciu v novej farbe, ako viac objektov exportovaných spolu z Blendera.`,filaments:`Filamenty`,mergeSame:`Zlúčiť rovnaké farby`,colourTolerance:`Tolerancia farby`,slot:`Slot`,slotAuto:`auto`,slotHint:`Filament (AMS slot), ktorý farba dostane v Bambu Studiu. Rovnaké farby zdieľajú slot automaticky; číslom ho zvolíš sám.`,tooManyFilaments:e=>`Treba ${e} filamentov; Bambu Studio zvládne najviac 16. Prideľ spoločné sloty.`,exportObj:`OBJ + MTL (ZIP)`,exportObjHint:`Záloha: Bambu Studio ukáže dialóg farieb pre farebný OBJ`,exportFormats:`Export`,models:`Modely`,benchyCredit:`#3DBenchy od Creative Tools (3dbenchy.com), licencia CC BY-ND 4.0`,showModel:`Zobraziť`,hideModel:`Skryť`,showAll:`Zobraziť všetko`,deleteModel:`Zmazať model`,confirmDelete:e=>`Zmazať „${e}“?`,confirmDeleteNote:`Model sa odstráni zo scény. História späť sa vymaže.`,cancel:`Zrušiť`,delete:`Zmazať`,hiddenNote:`Skryté modely sa nemaľujú, nerežú ani neexportujú.`,deleted:e=>`Zmazané: ${e}`,footerPrivacy:`Ochrana súkromia`,footerTerms:`Podmienky používania`,footerLicences:`Licencie`,footerAbout:`O aplikácii`,footerContact:`Kontakt`,footerMade:`Pre viacfarebnú 3D tlač`,close:`Zavrieť`,bugTitle:`Našiel si chybu?`,pageBug:[`Vďaka, že pomáhaš zlepšiť STLware! Ak niečo nefunguje, ako má, daj nám vedieť.`,`Opíš, čo si robil, čo si čakal a čo sa stalo namiesto toho, a aký prehliadač používaš. Veľmi pomôže snímka obrazovky aj model (alebo menší, na ktorom sa chyba tiež prejaví).`,`Nič sa neodosiela automaticky: tvoje modely ostávajú na tvojom zariadení, pokiaľ ich sám nepriložíš.`],bugMail:`Napíš nám na`,bugMailBody:`Čo som robil:

Čo som čakal:

Čo sa stalo:

Prehliadač:
`,guide:`Návod`,guideHint:`Ako maľovať, deliť a exportovať`,pageGuide:[`Otvor model (STL, 3MF alebo OBJ) alebo vyskúšaj ukážku a maľuj na karte Maľovanie: Štetec a Guma na detaily, Vedro na celé plochy, Vyhladiť na zarovnanie okrajov farieb. Každá farba v palete je jeden filament.`,`Karta Rozdelenie rozreže namaľované farby na samostatné tlačiteľné diely. Inlay: diel sedí v jamke v tele (oči, pásiky). Cut Off: farba sa odreže celá po svojom okraji (vlasy, krídla, prilba), voliteľne so spojkami. Pred delením si diely skontroluj cez Náhľad.`,`Cez tlačidlo Export ulož 3MF pre Bambu Studio. Bambu Studio môže upozorniť, že súbor nie je Bambu projekt: klikni OK a potvrď farby filamentov.`,`Podrobný návod pripravujeme.`],pageAbout:[`STLware ti umožní maľovať STL, 3MF a OBJ modely priamo v prehliadači, rozdeliť farby na tlačiteľné diely so spojkami a exportovať namaľovaný 3MF pre Bambu Studio (jeden filament na farbu).`,`Používanie je zadarmo, bez registrácie a bez inštalácie.`],pagePrivacy:[`Všetko beží v tvojom prehliadači. Modely sa nikam neodosielajú: otváranie, maľovanie, delenie aj export prebieha na tvojom počítači.`,`Nepoužívame účty, cookies, sledovacie ani analytické nástroje.`,`V lokálnom úložisku prehliadača sa ukladajú iba tvoje nastavenia (jazyk a nastavenia nástrojov), aby ostali aj nabudúce. Vymazaním dát prehliadača ich odstrániš.`,`Webhosting uchováva bežné technické záznamy servera (napr. IP adresu a čas požiadavky) kvôli bezpečnosti a prevádzke.`],pageTerms:[`STLware je poskytovaný zadarmo, tak ako je, bez akejkoľvek záruky. Pred tlačou si model skontroluj v sliceri; nezodpovedáme za nepodarené tlače, škody ani stratené dáta.`,`Všetky práva k tvojim modelom aj k tomu, čo exportuješ, ostávajú tebe. Otváraj iba modely, ktoré máš právo používať.`,`Názov, logo a web STLware sa nesmú kopírovať ani vydávať za vlastné.`],pageLicences:[`Postavené na open-source softvéri: three.js (MIT), three-mesh-bvh (MIT), Manifold (Apache-2.0), cdt2d (MIT), earcut (ISC) a fflate (MIT). Ďakujeme ich autorom.`]}};function Lv(){try{let e=localStorage.getItem(`stlware.lang`);if(e===`en`||e===`sk`)return e}catch{}let e=(navigator.language||`en`).toLowerCase();return e.startsWith(`sk`)||e.startsWith(`cs`)?`sk`:`en`}var Rv=Lv(),Y=Iv[Rv];function zv(){return Rv}function Bv(e){Rv=e,Y=Iv[e];try{localStorage.setItem(`stlware.lang`,e)}catch{}document.documentElement.lang=e,Vv()}function Vv(){document.querySelectorAll(`[data-i18n]`).forEach(e=>{let t=Y[e.dataset.i18n];typeof t==`string`&&(e.textContent=t)}),document.querySelectorAll(`[data-i18n-title]`).forEach(e=>{let t=Y[e.dataset.i18nTitle];typeof t==`string`&&(e.title=t)})}var Hv=(e,t)=>({hex:e,name:t,slot:0,cut:!0,mode:`inlay`});Z_(ov);var X=e=>document.getElementById(e),Z=Uv(),Q={tool:`brush`,active:0,palette:[Hv(`#D1D3D5`,`Light Gray`)],mesh:null,session:null,fileName:``,page:`paint`,bodyChoice:0,previewOn:!1,result:null,resultVisible:[],objects:[],connPoints:[]};function Uv(){let e={size:4,strength:3,angle:30,fillSharp:!0,stopColour:!0,sym:[!1,!1,!1],gap:10,gapAny:!1,preset:`resin`,tolerance:.05,depth:1,minThickness:0,cutOffGap:0,flatBottom:!0,keepUncut:!0,mergeSame:!0,colourTolerance:.02,partsFormat:`stl`,explode:0,connOn:!1,connSize:4,connLength:4,connTol:.2,connChamfer:.5,connChamferAngle:45,connPegOn:`body`,connPlace:`auto`};try{return{...e,...JSON.parse(localStorage.getItem(`stlware.settings`)||`{}`)}}catch{return e}}function Wv(){try{localStorage.setItem(`stlware.settings`,JSON.stringify(Z))}catch{}}var $=new jv(X(`viewport`)),Gv=[Hv(`#D1D3D5`,`Light Gray`)];function Kv(e){X(`loading`).hidden=e===null,X(`loadingText`).textContent=e??``}var qv=0;function Jv(e,t=!1){let n=X(`toast`);n.textContent=e,n.classList.toggle(`error`,t),n.hidden=!1,clearTimeout(qv),qv=window.setTimeout(()=>n.hidden=!0,t?7e3:3500)}var Yv=()=>new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)));async function Xv(e,t=!1){let n=e.find(e=>/\.(stl|3mf|obj)$/i.test(e.name));if(!n)return;let r=e.find(e=>/\.mtl$/i.test(e.name));Kv(Y.loading),await Yv();try{let e=await n.arrayBuffer(),i=n.name.split(`.`).pop().toLowerCase(),a,o=null;if(i===`stl`)a=su(e);else if(i===`obj`){let t=r?uu(await r.text()):void 0,n=fu(new TextDecoder().decode(e),t);a=n,o=n.palette.map((e,t)=>Hv(e,Zv(e,n.names[t])))}else{let t=ef(new Uint8Array(e));a=t,o=t.palette.map((e,n)=>Hv(e,Zv(e,t.names[n])));let n=t.source===`bambu`?`Bambu Studio`:t.source===`prusa`?`PrusaSlicer`:`3MF`;Jv(Y.importedFrom(n,t.objectCount))}if(!a.positions.length)throw Error(`no triangles`);o&&o.length>16&&(a.colors=Qv(a.colors,o),o=o.slice(0,16),Jv(Y.tooManyColours)),Kv(Y.preparing),await Yv();let s=a.objectNames?.length?a.objectNames:[n.name.replace(/\.(stl|3mf|obj)$/i,``)];t&&Q.mesh?gb(Ql.fromSoup(a),o,n.name,s):(Q.objects=s.map(e=>({name:e,visible:!0})),$v(Ql.fromSoup(a),o,n.name))}catch(e){console.error(e),Jv(`${Y.errorRead}: ${n.name}`,!0)}finally{Kv(null)}}function Zv(e,t){for(let t of sv){let n=t.colours.find(t=>t.hex.toUpperCase()===e.toUpperCase());if(n)return n.name}return t}function Qv(e,t){let n=t.map(e=>new Vn(e.hex)),r=t.map((e,t)=>{if(t<16)return t;let r=0,i=1/0;for(let e=0;e<16;e++){let a=(n[t].r-n[e].r)**2+(n[t].g-n[e].g)**2+(n[t].b-n[e].b)**2;a<i&&(i=a,r=e)}return r});return e.map(e=>r[e])}function $v(e,t,n,r=!1,i){lb(),Q.connPoints=[],hy=[],r||(Oy.length=0,ky.length=0),Q.mesh=e,e.neighbours(),Q.session=i??new au(e),Q.session.onChange=e=>{vb=null,$.updateFaces(e),Q.session?.canRedo||(ky.length=0),Dy(),nb(800)},Q.fileName=n,r||(Q.palette=t&&t.length?t:Gv.map(e=>({...e})),Q.active=Math.min(1,Q.palette.length-1),Q.bodyChoice=0),$.setPalette(Q.palette.map(e=>e.hex)),$.setMesh(e),_b=new Uint32Array(Math.max(Q.objects.length,1));let a=0;for(let t=0;t<e.faceCount;t++){let n=e.faceObject[t];if(n>=_b.length){let e=new Uint32Array(n+1);e.set(_b),_b=e}_b[n]++,a=Math.max(a,n)}for(;Q.objects.length<=a;)Q.objects.push({name:`Object ${Q.objects.length+1}`,visible:!0});xb(),X(`empty`).hidden=!0,X(`fileName`).textContent=n,X(`triCount`).textContent=`${e.faceCount.toLocaleString()} ${Y.triangles}`,X(`exportBtn`).disabled=!1,Fy(),Dy(),nb(0),Q.tool===`navigate`&&!matchMedia(`(pointer: coarse)`).matches&&Ty(`brush`)}async function ey(){Kv(Y.loading),await Yv();try{let e=await fetch(`samples/3dbenchy.stl.bin`);if(!e.ok)throw Error(`${e.status}`);let t=new Uint8Array(await e.arrayBuffer()),n=t[0]===31&&t[1]===139?pd(t):t;Kv(Y.preparing),await Yv(),Q.objects=[{name:`3DBenchy`,visible:!0}],$v(Ql.fromSoup(su(n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength))),null,`3DBenchy.stl`),Jv(Y.benchyCredit)}catch(e){console.error(e),Jv(`${Y.errorRead}: 3DBenchy (${e instanceof Error?e.message:String(e)})`,!0)}finally{Kv(null)}}var ty=$.renderer.domElement,ny=!1,ry=null,iy=1,ay=null;function oy(){return Z.size/2}function sy(e){let t=[e],n=$.centre;return Z.sym.forEach((e,r)=>{if(e)for(let e of t.slice()){let i=e.point.clone();i.setComponent(r,2*n.getComponent(r)-i.getComponent(r));let a=$.nearestFace(i);if(a){let n=e.normal.clone();n.setComponent(r,-n.getComponent(r)),t.push({face:a.face,point:a.point,normal:n})}}}),t}function cy(e){let t=Q.session,n=new Set;for(let t of sy(e))n.add(t.face),$.facesInSphere(t.point,t.normal,oy(),n,t.face);Q.tool===`smooth`?t.smooth(n,Z.strength):t.apply(n,iy)}function ly(e,t){let n=$.raycast(e,t);if(!ry)return n;let r=n?$.pixelsPerMm(n.point):1,i=Math.max(2,oy()*r*.35),a=e-ry.x,o=t-ry.y,s=Math.hypot(a,o);if(s<i)return n;let c=Math.floor(s/i);for(let e=1;e<=c;e++){let t=ry.x+a*e/c,r=ry.y+o*e/c,i=e===c?n:$.raycast(t,r);i&&cy(i)}return ry={x:e,y:t},n}function uy(e){let t=Q.session,n={sameColour:Z.stopColour,maxAngle:Z.fillSharp?Math.min(179,Z.angle):null},r=`${Z.fillSharp}|${Z.angle}|${Z.stopColour}|${Z.sym.join()}`;if(ay&&ay.key===r&&ay.face===e.face)return ay.faces;if(ay&&ay.key===r&&Z.sym.every(e=>!e)){let t=ay.faces;if(t.length>64&&fy(t,e.face))return t}let i,a=sy(e);if(a.length===1)i=t.region(e.face,n);else{let e=new Set;for(let r of a)for(let i of t.region(r.face,n))e.add(i);i=Uint32Array.from(e)}return Q.objects.some(e=>!e.visible)&&(i=i.filter(e=>!$.isHidden(e))),ay={face:e.face,key:r,faces:i},i}var dy=null;function fy(e,t){dy&&dy.src===e||(dy={src:e,sorted:e.slice().sort()});let n=dy.sorted,r=0,i=n.length-1;for(;r<=i;){let e=r+i>>1;if(n[e]===t)return!0;n[e]<t?r=e+1:i=e-1}return!1}function py(){ay=null,$.setHighlight(null)}var my=null,hy=[],gy=0;function _y(){return Q.page===`split`&&Z.connOn&&Z.connPlace===`manual`&&Q.previewOn&&!Q.result&&!!Q.mesh}function vy(e){let t=$.modelRay(e.clientX,e.clientY),n=[t.origin.x,t.origin.y,t.origin.z],r=[t.direction.x,t.direction.y,t.direction.z],i=null;for(let e of hy){let t=Rp(e,n,r);t!==null&&(!i||t<i.t)&&(i={t,j:e})}if(!i)return null;let a=[n[0]+r[0]*i.t,n[1]+r[1]*i.t,n[2]+r[2]*i.t],o=Lp(i.j,a);if(!o)return null;let s=Xy().connector,c=s.size/2+s.tolerance;return{joint:o,remove:Q.connPoints.findIndex(e=>Math.hypot(e[0]-o.centre[0],e[1]-o.centre[1],e[2]-o.centre[2])<c)}}function yy(e){let t=e.buttons?null:vy(e);if(!t){$.setGhost(null),ty.style.cursor=``;return}let n=Xy().connector,r=t.remove>=0?Lp(t.joint,Q.connPoints[t.remove])??t.joint:t.joint,{peg:i}=Wp(r,n,gy,.05),a=r.room>=Bp(n);$.setGhost({...i,hex:t.remove>=0?`#f87171`:a?`#4ade80`:`#f87171`}),ty.style.cursor=t.remove>=0||a?`pointer`:`not-allowed`}function by(e){let t=vy(e);if(!t)return!1;if(t.remove>=0)Q.connPoints.splice(t.remove,1);else{if(t.joint.room<Bp(Xy().connector))return Jv(Y.partNoRoom(t.joint.room),!0),!0;Q.connPoints.push(t.joint.centre)}return $.setGhost(null),$y(),nb(0),!0}var xy=()=>Q.page===`paint`?Q.tool:`navigate`;function Sy(e){if(_y()){$.showRing(null,0),yy(e);return}if($.setGhost(null),!Q.mesh||Q.result||xy()===`navigate`||e.buttons){$.showRing(null,0),Q.tool!==`fill`&&$.setHighlight(null);return}let t=$.raycast(e.clientX,e.clientY);if(Q.tool===`fill`){if($.showRing(null,0),!t){$.setHighlight(null);return}$.setHighlight(uy(t),Q.palette[Q.active].hex)}else{let n=Q.tool===`eraser`||e.shiftKey?Q.palette[0].hex:Q.tool===`smooth`?`#ffffff`:Q.palette[Q.active].hex;$.showRing(t,oy(),Cy(n))}}function Cy(e){let t=new Vn(e);return .2126*t.r+.7152*t.g+.0722*t.b>.85?`#2dd4bf`:e}ty.addEventListener(`pointerdown`,e=>{if(_y()){e.button===0&&!e.altKey&&by(e)&&(e.stopImmediatePropagation(),e.preventDefault());return}let t=document.activeElement;if(t&&t!==document.body&&t.matches(`input, select, textarea`)&&t.blur(),!Q.session||Q.result||xy()===`navigate`||e.button!==0||e.altKey||e.pointerType===`touch`&&!e.isPrimary)return;let n=$.raycast(e.clientX,e.clientY);if(!n)return;e.stopImmediatePropagation(),e.preventDefault();let r=Q.session;if(Q.tool===`fill`){let e=uy(n);r.apply(e,Q.active),py()}else ty.setPointerCapture(e.pointerId),ny=!0,iy=Q.tool===`eraser`||e.shiftKey?0:Q.active,r.begin(),ry={x:e.clientX,y:e.clientY},cy(n),$.showRing(n,oy(),Cy(Q.palette[iy].hex))},{capture:!0}),ty.addEventListener(`pointermove`,e=>{ny?$.showRing(ly(e.clientX,e.clientY),oy()):(my||requestAnimationFrame(()=>{my&&Sy(my),my=null}),my=e)});var wy=()=>{ny&&(ny=!1,ry=null,Q.session?.end(),py(),Dy())};ty.addEventListener(`pointerup`,wy),ty.addEventListener(`pointercancel`,wy),ty.addEventListener(`lostpointercapture`,wy),ty.addEventListener(`pointerleave`,()=>{$.setGhost(null),ny||($.showRing(null,0),Q.tool===`fill`&&$.setHighlight(null))}),ty.addEventListener(`contextmenu`,e=>e.preventDefault());function Ty(e){Q.tool=e,document.querySelectorAll(`#tools button`).forEach(t=>t.classList.toggle(`active`,t.dataset.tool===e)),X(`optSize`).hidden=![`brush`,`eraser`,`smooth`].includes(e),X(`optStrength`).hidden=e!==`smooth`,X(`optAngle`).hidden=e!==`fill`,X(`viewport`).classList.toggle(`painting`,e!==`navigate`);let t=$.controls;t.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.PAN,RIGHT:e===`navigate`?l.PAN:l.ROTATE},$.showRing(null,0),py(),Ey()}function Ey(){let e={brush:Y.hintBrush,eraser:Y.hintBrush,fill:Y.hintFill,smooth:Y.hintSmooth,navigate:Y.hintNavigate};X(`hint`).textContent=Q.mesh?_y()?Y.hintPlace:e[xy()]:``}function Dy(){X(`undoBtn`).disabled=!Q.session?.canUndo&&!Oy.length,X(`redoBtn`).disabled=!Q.session?.canRedo&&!ky.length}var Oy=[],ky=[];function Ay(){return{mesh:Q.mesh,session:Q.session,objects:Q.objects.map(e=>({...e}))}}function jy(e){Q.objects=e.objects.map(e=>({...e})),$v(e.mesh,null,Q.fileName,!0,e.session)}function My(){if(Q.session?.canUndo)Q.session.undo();else if(Oy.length&&Q.mesh){let e=Oy.pop();ky.push(Ay()),jy(e),Jv(Y.splitUndone)}py(),Dy()}function Ny(){if(Q.session?.canRedo)Q.session.redo();else if(ky.length&&Q.mesh){let e=ky.pop();Oy.push(Ay()),jy(e)}py(),Dy()}function Py(){let e=X(`sizeRange`);e.value=String(Z.size),X(`sizeOut`).textContent=`${(+Z.size).toFixed(1)} mm`,X(`strengthRange`).value=String(Z.strength),X(`strengthOut`).textContent=String(Z.strength),X(`angleRange`).value=String(Z.angle),X(`angleOut`).textContent=`${Math.min(179,Z.angle)}°`,X(`fillSharp`).checked=Z.fillSharp,X(`angleBox`).classList.toggle(`disabled`,!Z.fillSharp),X(`angleRange`).disabled=!Z.fillSharp,X(`stopColour`).checked=Z.stopColour,X(`fillNote`).textContent=Y.fillWhat(Z.fillSharp,Z.stopColour),document.querySelectorAll(`#symmetry button`).forEach(e=>e.classList.toggle(`active`,Z.sym[+e.dataset.axis])),X(`gapRange`).value=String(Z.gap),X(`gapOut`).textContent=`${Z.gap} mm²`,X(`gapAny`).checked=Z.gapAny,Wv()}function Fy(){let e=X(`swatches`);if(e.innerHTML=``,Q.palette.forEach((t,n)=>{let r=document.createElement(`button`);r.className=`swatch`+(n===Q.active?` active`:``),r.style.background=t.hex,r.title=`${n+1}. ${t.name} ${t.hex}`,r.innerHTML=`<span class="num">${n+1}</span>`,r.onclick=()=>Iy(n),e.appendChild(r)}),Q.palette.length<16){let t=document.createElement(`button`);t.className=`swatch add`,t.title=Y.addColour,t.textContent=`+`,t.onclick=Ly,e.appendChild(t)}X(`paletteCount`).textContent=`${Q.palette.length}/16`;let t=Q.palette[Q.active];if(t){X(`colourPicker`).value=t.hex.toLowerCase(),X(`pickerSwatch`).style.background=t.hex;let e=X(`colourName`);document.activeElement!==e&&(e.value=t.name);let n=X(`colourHex`);document.activeElement!==n&&(n.value=t.hex),X(`deleteColour`).disabled=Q.active===0,X(`baseNote`).hidden=Q.active!==0}X(`colourEdit`).hidden=!Q.palette.length,$y(),jb()}function Iy(e){e<0||e>=Q.palette.length||(Q.active=e,py(),Fy())}function Ly(){if(Q.palette.length>=16)return;let e=new Set(Q.palette.map(e=>e.hex)),t=sv[0].colours.find(t=>!e.has(t.hex))??{name:Y.colour,hex:`#808080`};Q.palette.push(Hv(t.hex,t.name)),Q.active=Q.palette.length-1,$.setPalette(Q.palette.map(e=>e.hex)),Fy()}function Ry(e,t){let n=Q.palette[Q.active];n&&(n.hex=e.toUpperCase(),t&&(n.name=t),$.setPalette(Q.palette.map(e=>e.hex)),Fy(),nb(300))}function zy(){let e=Q.active;e!==0&&Q.session&&(Q.palette.splice(e,1),Q.session.removeColour(e),vb=null,Q.bodyChoice===e+1?Q.bodyChoice=0:Q.bodyChoice>e+1&&Q.bodyChoice--,Q.active=Math.min(e,Q.palette.length-1),$.setPalette(Q.palette.map(e=>e.hex)),$.refreshAllColours(),py(),Fy(),Dy())}function By(){let e=X(`library`);e.innerHTML=``;for(let t of sv){let n=document.createElement(`div`);n.className=`lib-line`,n.textContent=t.line;let r=document.createElement(`div`);r.className=`lib-grid`;for(let e of t.colours){let n=document.createElement(`button`);n.style.background=e.hex,n.title=`${t.line} · ${e.name} ${e.hex}`,n.onclick=()=>Ry(e.hex,e.name),r.appendChild(n)}e.append(n,r)}}function Vy(){let e=X(`shortcutList`);e.innerHTML=``;for(let[t,n]of Y.shortcutList){let r=document.createElement(`dt`);r.textContent=t;let i=document.createElement(`dd`);i.textContent=n,e.append(r,i)}}function Hy(e,t,n){let r=new Blob([e],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),2e3)}function Uy(){return(Q.fileName||`model`).replace(/\.(stl|3mf|obj)$/i,``)}function Wy(e){let t=new Set(e),{filaments:n,map:r}=rf(Q.palette,t,Z.mergeSame,Z.colourTolerance);return{filaments:n,faceColour:e.map(e=>r[e])}}function Gy(){let e=bb();if(!e)return;let{filaments:t,faceColour:n}=Wy(e.faceColor);Hy(Id(e.positions,e.index,n,t,Uy()),`${Uy()}_painted.3mf`,`model/3mf`),Jv(`${Y.exported}: ${Uy()}_painted.3mf`)}function Ky(){let e=bb();if(!e)return;let{filaments:t,faceColour:n}=Wy(e.faceColor),r=Uy(),{obj:i,mtl:a}=sf(e.positions,e.index,n,t,r,`${r}.mtl`);Hy(Ed({[`${r}.obj`]:vd(i),[`${r}.mtl`]:vd(a)},{level:6}),`${r}_obj.zip`,`application/zip`),Jv(`${Y.exported}: ${r}_obj.zip`)}function qy(){let e=bb();e&&Hy(lu(e.positions,e.index,void 0,Uy()),`${Uy()}.stl`,`model/stl`)}function Jy(){document.querySelectorAll(`#tools button`).forEach(e=>e.onclick=()=>Ty(e.dataset.tool));let e=X(`fileInput`),t=()=>e.click();X(`openBtn`).onclick=t,X(`emptyOpen`).onclick=t,e.onchange=()=>{e.files?.length&&Xv(Array.from(e.files)),e.value=``},X(`sampleBtn`).onclick=ey,X(`undoBtn`).onclick=My,X(`redoBtn`).onclick=Ny;let n=X(`exportMenu`);X(`exportBtn`).onclick=e=>{e.stopPropagation(),n.hidden=!n.hidden},document.addEventListener(`click`,()=>n.hidden=!0),X(`export3mf`).onclick=Gy,X(`exportStl`).onclick=qy,X(`exportObj`).onclick=Ky,Mb();let r=X(`langSelect`);r.value=zv(),r.onchange=()=>{Bv(r.value),Vy(),Fy(),Ey(),Py(),ab(),fb(),Eb(),Q.mesh&&(X(`triCount`).textContent=`${Q.mesh.faceCount.toLocaleString()} ${Y.triangles}`)};let i=(e,t)=>{X(e).oninput=e=>{Z[t]=+e.target.value,t===`angle`&&py(),Py()}};i(`sizeRange`,`size`),i(`strengthRange`,`strength`),i(`angleRange`,`angle`),i(`gapRange`,`gap`),X(`fillSharp`).onchange=e=>{Z.fillSharp=e.target.checked,py(),Py()},X(`stopColour`).onchange=e=>{Z.stopColour=e.target.checked,py(),Py()},X(`gapAny`).onchange=e=>{Z.gapAny=e.target.checked,Py()},document.querySelectorAll(`#symmetry button`).forEach(e=>{e.onclick=()=>Nb(+e.dataset.axis)});let a=X(`colourPicker`);a.oninput=()=>Ry(a.value);let o=X(`colourHex`);o.oninput=()=>{let e=o.value.trim();e.startsWith(`#`)||(e=`#`+e),/^#[0-9a-f]{6}$/i.test(e)&&Ry(e)},o.onblur=()=>Fy();let s=X(`colourName`);s.oninput=()=>{let e=Q.palette[Q.active];e&&(e.name=s.value)},X(`deleteColour`).onclick=zy,X(`fillGapsBtn`).onclick=()=>{if(!Q.session)return;let e=Q.session.fillGaps(Q.active,Z.gap,Z.gapAny);py(),Dy(),Jv(Y.gapsDone(e))},X(`viewport`);let c=0;window.addEventListener(`dragenter`,e=>{e.dataTransfer?.types.includes(`Files`)&&(c++,X(`dropOverlay`).hidden=!1)}),window.addEventListener(`dragleave`,()=>{c=Math.max(0,c-1),c||(X(`dropOverlay`).hidden=!0)}),window.addEventListener(`dragover`,e=>e.preventDefault()),window.addEventListener(`drop`,e=>{e.preventDefault(),c=0,X(`dropOverlay`).hidden=!0,e.dataTransfer?.files.length&&Xv(Array.from(e.dataTransfer.files))}),window.addEventListener(`keydown`,e=>{if(e.target.matches(`input[type=text], input:not([type]), select, textarea`))return;let t=e.key.toLowerCase();if((e.ctrlKey||e.metaKey)&&t===`z`){e.preventDefault(),(e.shiftKey?X(`redoBtn`):X(`undoBtn`)).click();return}if((e.ctrlKey||e.metaKey)&&t===`y`){e.preventDefault(),X(`redoBtn`).click();return}if(e.ctrlKey||e.metaKey||e.altKey)return;let n={b:`brush`,e:`eraser`,f:`fill`,s:`smooth`,v:`navigate`};if(n[t])Ty(n[t]);else if(/^[1-9]$/.test(t))Iy(t-1);else if(t===`[`||t===`]`){let e=t===`]`?1:-1;Q.tool===`fill`?Z.angle=Math.max(1,Math.min(179,Z.angle+e*5)):Z.size=Math.max(.2,Math.min(60,+(Z.size*(e>0?1.2:1/1.2)).toFixed(1))),py(),Py()}else t===`x`||t===`y`||t===`z`?Nb(`xyz`.indexOf(t)):e.key===`Home`&&$.frame()})}var Yy=e=>`${e+1} ${Q.palette[e]?.name??``}`.trim();function Xy(){return{tolerance:Math.max(0,+Z.tolerance||0),depth:Math.max(.01,+Z.depth||.01),bodyChoice:Q.bodyChoice,flatBottom:Z.flatBottom,keepUncut:Z.keepUncut,minThickness:Math.max(0,+Z.minThickness||0),cutOffGap:Math.max(0,+Z.cutOffGap||0),cut:Q.palette.map(e=>e.cut),mode:Q.palette.map(e=>e.mode),connector:{enabled:Z.connOn,size:Math.max(.5,+Z.connSize||4),length:Math.max(.5,+Z.connLength||4),tolerance:Math.max(0,+Z.connTol||0),chamfer:Math.max(0,+Z.connChamfer||0),angle:Math.max(0,Math.min(75,+Z.connChamferAngle||0)),pegOn:Z.connPegOn===`part`?`part`:`body`,points:Z.connPlace===`manual`?Q.connPoints:void 0}}}function Zy(e){Q.page=e,e===`paint`&&lb(),$.setGhost(null),$.showRing(null,0),e!==`paint`&&$.setHighlight(null),Ey(),document.querySelectorAll(`#tabs button`).forEach(t=>t.classList.toggle(`active`,t.dataset.page===e)),document.querySelectorAll(`.page`).forEach(t=>t.hidden=t.dataset.page!==e),$y(),jb()}function Qy(){let e=Q.mesh;if(!e)return``;let t=e.bounds();return Y.modelSize(t[3]-t[0],t[4]-t[1],t[5]-t[2])}function $y(){document.querySelectorAll(`#presets button`).forEach(e=>e.classList.toggle(`active`,e.dataset.preset===Z.preset));let e=(e,t)=>{let n=X(e);document.activeElement!==n&&(n.value=String(t))};e(`tolInput`,Z.tolerance),e(`depthInput`,Z.depth),e(`minThickInput`,Z.minThickness),e(`gapInput`,Z.cutOffGap),e(`connSize`,Z.connSize),e(`connLength`,Z.connLength),e(`connTol`,Z.connTol),e(`connChamfer`,Z.connChamfer),e(`connAngle`,Z.connChamferAngle),X(`connOn`).checked=Z.connOn,X(`connBox`).hidden=!Z.connOn,document.querySelectorAll(`#pegOn button`).forEach(e=>e.classList.toggle(`active`,e.dataset.peg===Z.connPegOn)),document.querySelectorAll(`#connPlace button`).forEach(e=>e.classList.toggle(`active`,e.dataset.place===Z.connPlace));let t=Z.connPlace===`manual`;X(`placeBox`).hidden=!t,X(`placeCount`).textContent=Y.pegsPlaced(Q.connPoints.length),X(`clearPegs`).disabled=!Q.connPoints.length,Ey(),X(`flatBottom`).checked=Z.flatBottom,document.querySelectorAll(`#uncut button`).forEach(e=>e.classList.toggle(`active`,e.dataset.keep===`1`===Z.keepUncut)),X(`modelSize`).textContent=Qy(),X(`modelSize2`).textContent=Qy();let n=bb(),r=n?Zg(n,Q.palette.length):Q.palette.map(()=>0),i=Qg(r,Q.bodyChoice),a=X(`bodySelect`);a.innerHTML=``,a.append(new Option(Y.auto,`0`)),Q.palette.forEach((e,t)=>a.append(new Option(Yy(t),String(t+1)))),a.value=String(Q.bodyChoice),X(`bodyInfo`).textContent=i===null?``:Y.bodyIs(i+1,Q.palette[i].name,Q.bodyChoice?Y.whyChosen:Y.whyLargest);let o=X(`cutList`);o.innerHTML=``;let s=!1;Q.palette.forEach((e,t)=>{let n=document.createElement(`div`),a=r[t]>0,c=t===i;a&&!c&&e.cut&&e.mode!==`cutoff`&&(s=!0),n.className=`cut-row`+(!a||c||!e.cut?` off`:``);let l=document.createElement(`input`);l.type=`checkbox`,l.checked=e.cut&&!c,l.disabled=c||!a,l.onchange=()=>{e.cut=l.checked,$y(),nb(0)};let u=document.createElement(`span`);u.className=`chip`,u.style.background=e.hex;let d=document.createElement(`span`);if(d.className=`name`,d.textContent=Yy(t),n.append(l,u,d),c||!a){let e=document.createElement(`span`);e.className=`tag`,e.textContent=c?Y.bodyTag:Y.unused,a||(e.style.color=`var(--muted)`),n.append(e)}else{let t=document.createElement(`div`);t.className=`mode`;for(let[n,r]of[[`inlay`,Y.inlay],[`cutoff`,Y.cutOff]]){let i=document.createElement(`button`);i.textContent=r,i.classList.toggle(`active`,e.mode===n),i.disabled=!e.cut,i.onclick=()=>{e.mode=n,$y(),nb(0)},t.append(i)}n.append(t)}o.append(n)}),X(`flatBottom`).disabled=!s,X(`flatBottom`).closest(`label`).classList.toggle(`off`,!s),X(`flatNote`).classList.toggle(`off`,!s),X(`previewBtn`).textContent=Q.previewOn?Y.hidePreview:Y.preview,X(`previewBtn`).classList.toggle(`active`,Q.previewOn),X(`splitBtn`).disabled=!n,X(`previewBtn`).disabled=!n}var eb=0,tb=null;function nb(e){clearTimeout(eb),Q.previewOn&&Q.mesh&&!Q.result&&(eb=window.setTimeout(ib,e))}var rb=0;async function ib(){let e=bb();if(!e||!Q.previewOn)return;let t=Xy(),n=++rb,r;try{r=await q_(e,Q.palette.length,t)}catch(e){if(console.error(e),n!==rb)return;$.setOverlay(null),tb={lines:[],message:String(e)},ab();return}if(n!==rb||!Q.previewOn||Q.result)return;let i=Zg(e,Q.palette.length).filter(e=>e>0).length<2?Y.nothingToSplit:!r.parts.length&&!r.notFreed?.length?Y.nothingTicked:``,a=r.parts.map(e=>({positions:e.shape.positions,index:e.shape.index,hex:Q.palette[e.colour].hex,bad:e.report.bad})),o=t.connector,s=new Map;if(hy=[],gy=t.cutOffGap,o.enabled&&r.bodyIndex!==null)for(let n of r.parts){let i={ok:0,room:null,through:!1};for(let e of n.joints??[])hy.push(e);for(let s of(n.joints??[]).flatMap(e=>zp(e,o))){if(s.room<Bp(o)){i.room=s.room;continue}let{peg:c}=Wp(s,o,t.cutOffGap,.05);rv(o.pegOn===`body`?n.shape:e,s,o,t.cutOffGap)&&(i.through=!0),a.push({positions:c.positions,index:c.index,hex:Q.palette[o.pegOn===`body`?r.bodyIndex:n.colour].hex,bad:new Set}),i.ok++}s.set(n.colour,i)}$.setOverlay(a);let c=r.parts.slice().sort((e,t)=>e.colour-t.colour).map(e=>{let n=Q.palette[e.colour].hex,r=e.colour+1,i=Q.palette[e.colour].name;if(e.cutOff){let t=s.get(e.colour),a=o.enabled&&o.points&&!t?.ok&&t?.room==null&&e.joints?.length,c=[e.report.flat?Y.partFlat:``,e.report.dropped?Y.partDropped(e.report.dropped):``,t?.ok?Y.partConnector(t.ok):``,a?Y.partNoPegs:``,t?.room==null?``:Y.partNoRoom(t.room),t?.through?Y.partConnectorThrough(o.pegOn!==`body`):``].filter(Boolean);return{hex:n,text:Y.partCutOff(r,i),note:c.join(`, `)||void 0,bad:t?.room!=null||!!t?.through||!!e.report.flat}}let a=e.report.bad.size>0,c=Math.max(t.depth,e.report.deepest-t.tolerance),l=a?Y.partThrough(-(e.report.margin??0)):Y.partFits(e.report.margin);return e.report.tooCurved&&(l+=`, `+Y.partCurved),{hex:n,text:Y.partDepth(r,i,t.depth,c),note:l,bad:a||e.report.tooCurved}});for(let e of r.notFreed??[])c.push({hex:Q.palette[e].hex,text:Y.partCutOff(e+1,Q.palette[e].name),note:Y.partNotFreed,bad:!0});tb={lines:c,message:i},ab()}function ab(){let e=X(`previewReport`);if(e.innerHTML=``,Q.previewOn&&tb){if(tb.message){let t=document.createElement(`div`);t.className=`line`,t.textContent=tb.message,e.append(t)}else for(let t of tb.lines){let n=document.createElement(`div`);n.className=`line`+(t.bad?` bad`:``);let r=document.createElement(`span`);r.className=`chip`,r.style.background=t.hex;let i=document.createElement(`div`);if(i.textContent=t.text,t.note){let e=document.createElement(`small`);e.textContent=t.note,i.append(e)}n.append(r,i),e.append(n)}}}function ob(e=!Q.previewOn){Q.previewOn=e,e?nb(0):(clearTimeout(eb),rb++,$.setOverlay(null),tb=null,ab()),$y()}async function sb(){let e=bb();if(e){Kv(Y.splitting),await Yv();try{if(Zg(e,Q.palette.length).filter(e=>e>0).length<2){Jv(Y.nothingToSplit,!0);return}let t=await $_(e,Q.palette.length,Xy());if(!t){Jv(Y.nothingTicked,!0);return}if(!t.parts.length){Jv(t.warnings.map(ub).join(` `),!0);return}ob(!1),cb(t),Q.result=t,Q.resultVisible=[!0,...t.parts.map(()=>!0)];let n=Q.palette.map(e=>e.hex);$.setResult([{positions:t.body.positions,index:t.body.index,colours:n,faceColor:t.body.faceColor},...t.parts.map(e=>({positions:e.mesh.positions,index:e.mesh.index,colours:[n[e.colour]]}))]),$.layoutResult(Z.explode,Q.resultVisible),$.showRing(null,0),$.setHighlight(null),fb(),Jv(Y.splitDone(t.parts.length,t.bodyIndex+1))}catch(e){console.error(e),Jv(String(e),!0)}finally{Kv(null)}}}function cb(e){let t=Q.mesh;Oy.push(Ay()),ky.length=0;let n=[new Ql(e.body.positions,e.body.index,e.body.faceColor,new Uint16Array(e.body.index.length/3)),...e.parts.map((e,t)=>{let n=e.mesh.index.length/3;return new Ql(e.mesh.positions,e.mesh.index,new Uint8Array(n).fill(e.colour),new Uint16Array(n).fill(t+1))})],r=Q.objects.filter(e=>e.visible).map(e=>e.name),i=[{name:`${r.length===1?r[0]:Q.fileName.replace(/\.(stl|3mf|obj)$/i,``)} · ${Y.bodyName}`,visible:!0},...e.parts.map(e=>({name:`${Q.palette[e.colour].name} · ${e.cutOff?Y.cutOff:Y.inlay}`,visible:!0}))],a=n.reduce((e,t)=>eu(e,t,e=>e,0)),o=yb;if(o){let e=nu(t,e=>!!o[e]),n=Array.from(new Set(e.faceObject)).sort((e,t)=>e-t),r=new Map(n.map((e,t)=>[e,i.length+t]));for(let t=0;t<e.faceCount;t++)e.faceObject[t]=r.get(e.faceObject[t]);for(let e of n)i.push({...Q.objects[e]});a=eu(a,e,e=>e,0)}Q.objects=i,$v(a,null,Q.fileName,!0)}function lb(){Q.result&&(Q.result=null,$.setResult(null),fb())}function ub(e){let t=e=>Yy(e);switch(e.kind){case`thin`:return Y.warnThin(t(e.colour),e.have,e.need);case`curved`:return Y.warnCurved(t(e.colour));case`dropped`:return Y.warnDropped(t(e.colour),e.faces,Z.minThickness);case`flatPatch`:return Y.warnFlat(t(e.colour));case`notFreed`:return Y.warnNotFreed(t(e.colour));case`covered`:return Y.warnCovered(t(e.colour));case`failed`:return Y.warnFailed(t(e.colour));case`connectorTooBig`:return Y.warnConnectorTooBig(t(e.colour),e.room);case`connectorFailed`:return Y.warnConnectorFailed(t(e.colour));case`connectorThrough`:return Y.warnConnectorThrough(t(e.colour),e.onBody);case`notClosed`:return Y.warnNotClosed}}function db(e){let t=Q.result;if(e===0)return`${Y.bodyName} (${Yy(t.bodyIndex)})`;let n=t.parts[e-1];return`${Yy(n.colour)} · ${n.cutOff?Y.cutOff:Y.inlay}`}function fb(){let e=Q.result;if(X(`resultPanel`).hidden=!e,X(`hint`).hidden=!!e,document.querySelectorAll(`.page[data-page=split] > section:not(#resultPanel)`).forEach(t=>t.hidden=!!e),!e)return;X(`resultSummary`).textContent=Y.splitDone(e.parts.length,e.bodyIndex+1);let t=X(`resultList`);t.innerHTML=``;for(let n=0;n<=e.parts.length;n++){let r=document.createElement(`label`);r.className=`result-row`;let i=document.createElement(`input`);i.type=`checkbox`,i.checked=Q.resultVisible[n]!==!1,i.onchange=()=>{Q.resultVisible[n]=i.checked,$.layoutResult(Z.explode,Q.resultVisible)};let a=document.createElement(`span`);a.className=`chip`,a.style.background=Q.palette[n===0?e.bodyIndex:e.parts[n-1].colour].hex;let o=document.createElement(`span`);o.className=`name`,o.textContent=db(n),r.append(i,a,o),t.append(r)}X(`explodeRange`).value=String(Z.explode),X(`explodeOut`).textContent=`${Z.explode} mm`;let n=X(`warnings`);n.innerHTML=``;for(let t of e.warnings){let e=document.createElement(`p`);e.textContent=ub(t),n.append(e)}document.querySelectorAll(`#partsFormat button`).forEach(e=>e.classList.toggle(`active`,e.dataset.format===Z.partsFormat))}var pb=e=>e.replace(/[^A-Za-z0-9_-]+/g,`_`).replace(/^_+|_+$/g,``)||`part`;function mb(){let e=Q.result;if(!e)return;let t=Uy(),n={},r=Z.partsFormat===`3mf`,i=(e,t,i,a)=>{if(r){let{filaments:r,faceColour:o}=Wy(a);n[`${e}.3mf`]=Id(t,i,o,r,e)}else n[`${e}.stl`]=lu(t,i,void 0,e)};i(`${t}_body_${pb(Q.palette[e.bodyIndex].name)}`,e.body.positions,e.body.index,e.body.faceColor),e.parts.forEach((e,n)=>{let r=`${t}_part${n+1}_${e.colour+1}_${pb(Q.palette[e.colour].name)}`;i(r,e.mesh.positions,e.mesh.index,new Uint8Array(e.mesh.index.length/3).fill(e.colour))}),Hy(Ed(n,{level:6}),`${t}_parts.zip`,`application/zip`),Jv(`${Y.exported}: ${t}_parts.zip`)}function hb(e){let t=Q.mesh;t&&e>0&&e!==1&&($v(ru(t,e),null,Q.fileName,!0),X(`scaleInput`).value=`1`,$.frame())}function gb(e,t,n,r){let i=Q.mesh,a;if(t&&t.length)a=t.map(e=>{let t=Q.palette.findIndex(t=>t.hex.toUpperCase()===e.hex.toUpperCase());return t>=0?t:Q.palette.length>=16?0:(Q.palette.push(e),Q.palette.length-1)});else{if(Q.palette.length<16){let e=new Set(Q.palette.map(e=>e.hex)),t=sv[0].colours.find(t=>!e.has(t.hex))??{name:Y.colour,hex:`#808080`};Q.palette.push(Hv(t.hex,t.name))}a=[Q.palette.length-1]}let o=Q.objects.length;for(let e=0;e<Math.max(r.length,1);e++)Q.objects.push({name:r[e]??n,visible:!0});$v(eu(i,e,e=>a[e]??a[0],o),null,Q.fileName||n,!0),$.frame(),Jv(`+ ${n}`)}var _b=new Uint32Array,vb=null,yb=null;function bb(){let e=Q.mesh;if(!e||!yb)return e;if(vb?.mesh!==e){let t=yb;vb={mesh:e,sub:nu(e,e=>!t[e])}}return vb.sub}function xb(){let e=Q.mesh;if(vb=null,yb=null,e&&Q.objects.some(e=>!e.visible)){let t=Q.objects.map(e=>e.visible);yb=new Uint8Array(e.faceCount);for(let n=0;n<e.faceCount;n++)t[e.faceObject[n]]||(yb[n]=1)}$.setHidden(yb),py(),$.showRing(null,0),Eb()}function Sb(e,t){Q.objects[e].visible=t,xb(),$y(),jb(),nb(0)}var Cb=`<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,wb=`<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>`,Tb=`<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>`;function Eb(){let e=X(`outliner`),t=Q.mesh;if(e.hidden=!t,!t)return;let n=Q.objects.map((e,t)=>({...e,i:t,faces:_b[t]??0})).filter(e=>e.faces>0);X(`outlinerCount`).textContent=String(n.length);let r=X(`outlinerList`);r.innerHTML=``;for(let e of n){let t=document.createElement(`div`);t.className=`ol-row`+(e.visible?``:` off`);let i=document.createElement(`button`);i.className=`icon-btn`,i.title=e.visible?Y.hideModel:Y.showModel,i.innerHTML=e.visible?Cb:wb,i.onclick=()=>Sb(e.i,!e.visible);let a=document.createElement(`span`);a.className=`name`,a.textContent=e.name,a.title=e.name;let o=document.createElement(`span`);o.className=`count`,o.textContent=e.faces>=1e3?`${(e.faces/1e3).toFixed(e.faces>=1e5?0:1)}k`:String(e.faces);let s=document.createElement(`button`);s.className=`icon-btn danger`,s.title=Y.deleteModel,s.innerHTML=Tb,s.disabled=n.length<2,s.onclick=()=>Ab(e.i),t.append(i,a,o,s),r.append(t)}let i=n.some(e=>!e.visible);X(`showAllBtn`).hidden=!i,X(`hiddenNote`).hidden=!i}var Db={guide:()=>[Y.guide,Y.pageGuide],bug:()=>[Y.bugTitle,Y.pageBug],about:()=>[Y.footerAbout,Y.pageAbout],privacy:()=>[Y.footerPrivacy,Y.pagePrivacy],terms:()=>[Y.footerTerms,Y.pageTerms],licences:()=>[Y.footerLicences,Y.pageLicences]};function Ob(e){let[t,n]=Db[e]();if(X(`infoTitle`).textContent=t,X(`infoBody`).replaceChildren(...n.map(e=>Object.assign(document.createElement(`p`),{textContent:e}))),e===`bug`){let e=document.createElement(`a`);e.className=`mail-hl`,e.href=`mailto:bug@stlware.com?subject=STLware%20bug&body=${encodeURIComponent(Y.bugMailBody)}`,e.textContent=`bug@stlware.com`;let t=document.createElement(`p`);t.className=`mail-line`,t.append(Y.bugMail,` `,e),X(`infoBody`).append(t)}if(e===`about`){let e=document.createElement(`p`);e.className=`build-line`,e.textContent=`v0.3.8 · Build 2026-11-11 08:06 UTC`,X(`infoBody`).append(e)}let r=X(`infoDlg`);r.showModal(),r.focus()}X(`footerYear`).textContent=String(Math.max(2026,new Date().getFullYear())),X(`footerVersion`).textContent=`v0.3.8`,document.querySelectorAll(`[data-info]`).forEach(e=>e.addEventListener(`click`,()=>Ob(e.dataset.info)));function kb(e,t){let n=X(`confirmDlg`);return X(`confirmTitle`).textContent=e,X(`confirmText`).textContent=t,new Promise(e=>{n.onclose=()=>e(n.returnValue===`ok`),n.returnValue=``,n.showModal(),X(`confirmOk`).focus()})}async function Ab(e){let t=Q.mesh,n=Q.objects[e];if(t&&n&&await kb(Y.confirmDelete(n.name),Y.confirmDeleteNote)){Kv(Y.preparing),await Yv();try{let r=nu(t,n=>t.faceObject[n]!==e);for(let t=0;t<r.faceCount;t++)r.faceObject[t]>e&&r.faceObject[t]--;Q.objects.splice(e,1),$v(r,null,Q.fileName,!0),Jv(Y.deleted(n.name))}finally{Kv(null)}}}function jb(){let e=X(`slotList`);e.innerHTML=``;let t=bb();if(!t)return;let n=new Set(t.faceColor),{filaments:r,map:i}=rf(Q.palette,n,Z.mergeSame,Z.colourTolerance);Q.palette.forEach((t,a)=>{if(!n.has(a))return;let o=document.createElement(`div`);o.className=`slot-row`;let s=document.createElement(`span`);s.className=`chip`,s.style.background=t.hex;let c=document.createElement(`span`);c.className=`name`,c.textContent=`${Yy(a)} → F${r[i[a]].filament}`;let l=document.createElement(`select`);l.title=Y.slot,l.append(new Option(Y.slotAuto,`0`));for(let e=1;e<=16;e++)l.append(new Option(`${Y.slot} ${e}`,String(e)));l.value=String(t.slot),l.onchange=()=>{t.slot=+l.value,jb()},o.append(s,c,l),e.append(o)}),X(`mergeSame`).checked=Z.mergeSame,X(`colTolRange`).value=String(Z.colourTolerance),X(`colTolOut`).textContent=String(+Z.colourTolerance.toFixed(3)),X(`optColTol`).hidden=!Z.mergeSame;let a=Math.max(0,...r.map(e=>e.filament)),o=X(`filamentWarn`);o.hidden=a<=16,o.textContent=Y.tooManyFilaments(a)}function Mb(){X(`outlinerToggle`).onclick=()=>X(`outliner`).classList.toggle(`collapsed`),X(`showAllBtn`).onclick=()=>{Q.objects.forEach(e=>e.visible=!0),xb(),$y(),jb(),nb(0)},document.querySelectorAll(`#tabs button`).forEach(e=>e.onclick=()=>Zy(e.dataset.page)),document.querySelectorAll(`#presets button`).forEach(e=>{e.onclick=()=>{Z.preset=e.dataset.preset;let t=Kg[Z.preset];t&&(Z.tolerance=t.tolerance,Z.depth=t.depth),Wv(),$y(),nb(0)}});let e=(e,t)=>{let n=X(e);n.oninput=()=>{if(n.value!==``&&+n.value>=0){if(Z[t]=+n.value,t===`tolerance`||t===`depth`){let e=Object.entries(Kg).find(([,e])=>e.tolerance===Z.tolerance&&e.depth===Z.depth);Z.preset=e?e[0]:`custom`}Wv(),$y(),nb(400)}}};e(`tolInput`,`tolerance`),e(`depthInput`,`depth`),e(`minThickInput`,`minThickness`),e(`gapInput`,`cutOffGap`);for(let[e,t]of[[`connSize`,`connSize`],[`connLength`,`connLength`],[`connTol`,`connTol`],[`connChamfer`,`connChamfer`],[`connAngle`,`connChamferAngle`]]){let n=X(e);n.oninput=()=>{n.value!==``&&+n.value>=0&&(Z[t]=+n.value,Wv(),nb(400))}}X(`connOn`).onchange=e=>{Z.connOn=e.target.checked,Wv(),$y(),nb(0)},document.querySelectorAll(`#connPlace button`).forEach(e=>{e.onclick=()=>{Z.connPlace=e.dataset.place,Wv(),Z.connPlace===`manual`&&!Q.previewOn&&Q.mesh&&ob(!0),$y(),nb(0)}}),X(`clearPegs`).onclick=()=>{Q.connPoints=[],$y(),nb(0)},document.querySelectorAll(`#pegOn button`).forEach(e=>{e.onclick=()=>{Z.connPegOn=e.dataset.peg,Wv(),$y(),nb(0)}}),X(`flatBottom`).onchange=e=>{Z.flatBottom=e.target.checked,Wv(),nb(0)},document.querySelectorAll(`#uncut button`).forEach(e=>{e.onclick=()=>{Z.keepUncut=e.dataset.keep===`1`,Wv(),$y()}});let t=X(`bodySelect`);t.onchange=()=>{Q.bodyChoice=+t.value,$y(),nb(0)},X(`previewBtn`).onclick=()=>ob(),X(`splitBtn`).onclick=sb,X(`backBtn`).onclick=()=>{lb(),Zy(`paint`)},X(`explodeRange`).oninput=e=>{Z.explode=+e.target.value,X(`explodeOut`).textContent=`${Z.explode} mm`,$.layoutResult(Z.explode,Q.resultVisible),Wv()},document.querySelectorAll(`#partsFormat button`).forEach(e=>{e.onclick=()=>{Z.partsFormat=e.dataset.format,Wv(),fb()}}),X(`exportPartsBtn`).onclick=mb,X(`scaleBtn`).onclick=()=>hb(+X(`scaleInput`).value),document.querySelectorAll(`#scalePresets button`).forEach(e=>e.onclick=()=>hb(+e.dataset.scale));let n=X(`addInput`);X(`addModelBtn`).onclick=()=>Q.mesh?n.click():X(`fileInput`).click(),n.onchange=()=>{n.files?.length&&Xv(Array.from(n.files),!0),n.value=``},X(`mergeSame`).onchange=e=>{Z.mergeSame=e.target.checked,Wv(),jb()},X(`colTolRange`).oninput=e=>{Z.colourTolerance=+e.target.value,Wv(),jb()},document.querySelectorAll(`[data-export]`).forEach(e=>{let t={"3mf":Gy,stl:qy,obj:Ky}[e.dataset.export];e.onclick=()=>Q.mesh?t?.():void 0})}function Nb(e){Z.sym[e]=!Z.sym[e],py(),Py()}Vv(),Vy(),By(),Jy(),Py(),Ty(`brush`),Fy();function Pb(){document.querySelectorAll(`input[type=range]`).forEach(e=>{let t=+e.min||0,n=+e.max||100;e.style.setProperty(`--fill`,`${(+e.value-t)/(n-t||1)*100}%`)})}for(let e of[`input`,`change`,`click`,`keyup`])document.addEventListener(e,()=>requestAnimationFrame(Pb),!0);requestAnimationFrame(Pb);export{o as n,c as r,Gg as t};