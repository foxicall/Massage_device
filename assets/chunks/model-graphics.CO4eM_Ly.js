import{U as Dt,c as pr,N as wt,S as hr,C as nt,R as mr,e as Je,w as We,V as Et,l as mi,M as tn,F as Pa,W as _i,a as Rt,b as at,L as $t,H as yt,D as Ut,B as xt,d as un,f as be,p as _r,g as gi,h as gr,i as vr,A as sn,O as Sr,j as Er,k as Mr,m as xr,n as Tr,o as Ar,q as Rr,r as br,s as Cr,t as Pr,u as Lr,v as Dr,x as wr,y as Ur,Z as Ir,z as Nr,E as qn,G as yr,I as In,J as Mt,K as gn,P as Or,Q as zt,T as Fr,X as Br,Y as ti,_ as Gr,$ as ni,a0 as Hr,a1 as Vr,a2 as Wr,a3 as kr,a4 as zr,a5 as Ot,a6 as et,a7 as Cn,a8 as Zn,a9 as Ft,aa as Mn,ab as Xr,ac as Nt,ad as fn,ae as nn,af as Rn,ag as Vt,ah as an,ai as Yr,aj as Xt,ak as vi,al as Kr,am as La,an as je,ao as qr,ap as xn,aq as Zr,ar as Nn,as as It,at as jt,au as pn,av as $r,aw as jr,ax as Qr,ay as Zt,az as Oe,aA as Da,aB as wa,aC as Ua,aD as Ia,aE as bn,aF as Na,aG as ya,aH as Jr,aI as eo,aJ as to,aK as no,aL as io,aM as ao,aN as ro,aO as oo,aP as Si,aQ as so,aR as Tn,aS as lo,aT as Ei,aU as Mi,aV as xi,aW as co,aX as Pn,aY as Ti,aZ as fo,a_ as ii,a$ as $n,b0 as Oa,b1 as Fa,b2 as Ba,b3 as uo,b4 as Ga,b5 as po,b6 as ho,b7 as mo,b8 as _o,b9 as Ha,ba as go,bb as vo,bc as So,bd as yn,be as On,bf as Fn,bg as Bn,bh as Ai,bi as Ri,bj as bi,bk as Ci,bl as Pi,bm as Li,bn as Di,bo as wi,bp as Ui,bq as jn,br as Ii,bs as Ni,bt as yi,bu as Oi,bv as Fi,bw as Bi,bx as Gi,by as Hi,bz as Vi,bA as Wi,bB as ki,bC as zi,bD as Xi,bE as Yi,bF as Ki,bG as qi,bH as Zi,bI as $i,bJ as ji,bK as Qi,bL as Qn,bM as Ji,bN as Va,bO as ea,bP as Wa,bQ as ta,bR as St,bS as Eo,bT as ka,bU as za,bV as Xa,bW as Ya,bX as Ka,bY as qa,bZ as Za,b_ as Gn,b$ as Hn,c0 as Mo,c1 as xo,c2 as $a,c3 as hn,c4 as rn,c5 as To,c6 as Ao,c7 as Ro,c8 as bo,c9 as Co,ca as Po,cb as Lo,cc as Do,cd as wo,ce as Uo,cf as Io,cg as en,ch as Qt,ci as na,cj as ia,ck as No,cl as yo}from"./three-core.BkUtlR3N.js";import{cm as jd,cn as Qd,co as Jd,cp as eu,cq as tu,cr as nu,cs as iu,ct as au,cu as ru,cv as ou,cw as su,cx as lu,cy as cu,cz as fu,cA as du,cB as uu,cC as pu,cD as hu}from"./three-core.BkUtlR3N.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ja(){let e=null,n=!1,t=null,i=null;function s(o,f){i=e.requestAnimationFrame(s),t(o,f)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function Oo(e){const n=new WeakMap;function t(h,R){const T=h.array,H=h.usage,I=T.byteLength,p=e.createBuffer();e.bindBuffer(R,p),e.bufferData(R,T,H),h.onUploadCallback();let x;if(T instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&T instanceof Float16Array)x=e.HALF_FLOAT;else if(T instanceof Uint16Array)h.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(T instanceof Int16Array)x=e.SHORT;else if(T instanceof Uint32Array)x=e.UNSIGNED_INT;else if(T instanceof Int32Array)x=e.INT;else if(T instanceof Int8Array)x=e.BYTE;else if(T instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(T instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+T);return{buffer:p,type:x,bytesPerElement:T.BYTES_PER_ELEMENT,version:h.version,size:I}}function i(h,R,T){const H=R.array,I=R.updateRanges;if(e.bindBuffer(T,h),I.length===0)e.bufferSubData(T,0,H);else{I.sort((x,N)=>x.start-N.start);let p=0;for(let x=1;x<I.length;x++){const N=I[p],W=I[x];W.start<=N.start+N.count+1?N.count=Math.max(N.count,W.start+W.count-N.start):(++p,I[p]=W)}I.length=p+1;for(let x=0,N=I.length;x<N;x++){const W=I[x];e.bufferSubData(T,W.start*H.BYTES_PER_ELEMENT,H,W.start,W.count)}R.clearUpdateRanges()}R.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const R=n.get(h);R&&(e.deleteBuffer(R.buffer),n.delete(h))}function f(h,R){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const H=n.get(h);(!H||H.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const T=n.get(h);if(T===void 0)n.set(h,t(h,R));else if(T.version<h.version){if(T.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(T.buffer,h,R),T.version=h.version}}return{get:s,remove:o,update:f}}var Fo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bo=`#ifdef USE_ALPHAHASH
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
#endif`,Go=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ho=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ko=`#ifdef USE_AOMAP
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
#endif`,zo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xo=`#ifdef USE_BATCHING
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
#endif`,Yo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ko=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$o=`#ifdef USE_IRIDESCENCE
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
#endif`,jo=`#ifdef USE_BUMPMAP
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
#endif`,Qo=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,es=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ts=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ns=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,is=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,as=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rs=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,os=`#define PI 3.141592653589793
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
} // validated`,ss=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ls=`vec3 transformedNormal = objectNormal;
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
#endif`,cs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ds=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,us=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ps="gl_FragColor = linearToOutputTexel( gl_FragColor );",hs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ms=`#ifdef USE_ENVMAP
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
#endif`,_s=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gs=`#ifdef USE_ENVMAP
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
#endif`,vs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ss=`#ifdef USE_ENVMAP
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
#endif`,Es=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ms=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ts=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,As=`#ifdef USE_GRADIENTMAP
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
}`,Rs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ps=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ls=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ds=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ws=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Us=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Is=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ns=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,ys=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Os=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Bs=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gs=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Hs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ws=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ks=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ys=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ks=`#if defined( USE_POINTS_UV )
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
#endif`,qs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$s=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,js=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Js=`#ifdef USE_MORPHTARGETS
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
#endif`,el=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,il=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,al=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ol=`#ifdef USE_NORMALMAP
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
#endif`,sl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ll=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ul=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ml=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_l=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,El=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ml=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xl=`float getShadowMask() {
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
}`,Tl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Al=`#ifdef USE_SKINNING
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
#endif`,Rl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bl=`#ifdef USE_SKINNING
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
#endif`,Cl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ll=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wl=`#ifdef USE_TRANSMISSION
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
#endif`,Ul=`#ifdef USE_TRANSMISSION
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
#endif`,Il=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ol=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bl=`uniform sampler2D t2D;
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
}`,Gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kl=`#include <common>
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
}`,zl=`#if DEPTH_PACKING == 3200
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
}`,Xl=`#define DISTANCE
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
}`,Yl=`#define DISTANCE
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
}`,Kl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ql=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zl=`uniform float scale;
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
}`,$l=`uniform vec3 diffuse;
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
}`,jl=`#include <common>
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
}`,Ql=`uniform vec3 diffuse;
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
}`,Jl=`#define LAMBERT
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
}`,ec=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,tc=`#define MATCAP
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
}`,nc=`#define MATCAP
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
}`,ic=`#define NORMAL
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
}`,ac=`#define NORMAL
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
}`,rc=`#define PHONG
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
}`,oc=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,sc=`#define STANDARD
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
}`,lc=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,cc=`#define TOON
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
}`,fc=`#define TOON
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
}`,dc=`uniform float size;
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
}`,uc=`uniform vec3 diffuse;
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
}`,pc=`#include <common>
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
}`,hc=`uniform vec3 color;
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
}`,mc=`uniform float rotation;
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
}`,_c=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Fo,alphahash_pars_fragment:Bo,alphamap_fragment:Go,alphamap_pars_fragment:Ho,alphatest_fragment:Vo,alphatest_pars_fragment:Wo,aomap_fragment:ko,aomap_pars_fragment:zo,batching_pars_vertex:Xo,batching_vertex:Yo,begin_vertex:Ko,beginnormal_vertex:qo,bsdfs:Zo,iridescence_fragment:$o,bumpmap_pars_fragment:jo,clipping_planes_fragment:Qo,clipping_planes_pars_fragment:Jo,clipping_planes_pars_vertex:es,clipping_planes_vertex:ts,color_fragment:ns,color_pars_fragment:is,color_pars_vertex:as,color_vertex:rs,common:os,cube_uv_reflection_fragment:ss,defaultnormal_vertex:ls,displacementmap_pars_vertex:cs,displacementmap_vertex:fs,emissivemap_fragment:ds,emissivemap_pars_fragment:us,colorspace_fragment:ps,colorspace_pars_fragment:hs,envmap_fragment:ms,envmap_common_pars_fragment:_s,envmap_pars_fragment:gs,envmap_pars_vertex:vs,envmap_physical_pars_fragment:Ls,envmap_vertex:Ss,fog_vertex:Es,fog_pars_vertex:Ms,fog_fragment:xs,fog_pars_fragment:Ts,gradientmap_pars_fragment:As,lightmap_pars_fragment:Rs,lights_lambert_fragment:bs,lights_lambert_pars_fragment:Cs,lights_pars_begin:Ps,lights_toon_fragment:Ds,lights_toon_pars_fragment:ws,lights_phong_fragment:Us,lights_phong_pars_fragment:Is,lights_physical_fragment:Ns,lights_physical_pars_fragment:ys,lights_fragment_begin:Os,lights_fragment_maps:Fs,lights_fragment_end:Bs,lightprobes_pars_fragment:Gs,logdepthbuf_fragment:Hs,logdepthbuf_pars_fragment:Vs,logdepthbuf_pars_vertex:Ws,logdepthbuf_vertex:ks,map_fragment:zs,map_pars_fragment:Xs,map_particle_fragment:Ys,map_particle_pars_fragment:Ks,metalnessmap_fragment:qs,metalnessmap_pars_fragment:Zs,morphinstance_vertex:$s,morphcolor_vertex:js,morphnormal_vertex:Qs,morphtarget_pars_vertex:Js,morphtarget_vertex:el,normal_fragment_begin:tl,normal_fragment_maps:nl,normal_pars_fragment:il,normal_pars_vertex:al,normal_vertex:rl,normalmap_pars_fragment:ol,clearcoat_normal_fragment_begin:sl,clearcoat_normal_fragment_maps:ll,clearcoat_pars_fragment:cl,iridescence_pars_fragment:fl,opaque_fragment:dl,packing:ul,premultiplied_alpha_fragment:pl,project_vertex:hl,dithering_fragment:ml,dithering_pars_fragment:_l,roughnessmap_fragment:gl,roughnessmap_pars_fragment:vl,shadowmap_pars_fragment:Sl,shadowmap_pars_vertex:El,shadowmap_vertex:Ml,shadowmask_pars_fragment:xl,skinbase_vertex:Tl,skinning_pars_vertex:Al,skinning_vertex:Rl,skinnormal_vertex:bl,specularmap_fragment:Cl,specularmap_pars_fragment:Pl,tonemapping_fragment:Ll,tonemapping_pars_fragment:Dl,transmission_fragment:wl,transmission_pars_fragment:Ul,uv_pars_fragment:Il,uv_pars_vertex:Nl,uv_vertex:yl,worldpos_vertex:Ol,background_vert:Fl,background_frag:Bl,backgroundCube_vert:Gl,backgroundCube_frag:Hl,cube_vert:Vl,cube_frag:Wl,depth_vert:kl,depth_frag:zl,distance_vert:Xl,distance_frag:Yl,equirect_vert:Kl,equirect_frag:ql,linedashed_vert:Zl,linedashed_frag:$l,meshbasic_vert:jl,meshbasic_frag:Ql,meshlambert_vert:Jl,meshlambert_frag:ec,meshmatcap_vert:tc,meshmatcap_frag:nc,meshnormal_vert:ic,meshnormal_frag:ac,meshphong_vert:rc,meshphong_frag:oc,meshphysical_vert:sc,meshphysical_frag:lc,meshtoon_vert:cc,meshtoon_frag:fc,points_vert:dc,points_frag:uc,shadow_vert:pc,shadow_frag:hc,sprite_vert:mc,sprite_frag:_c},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new be},probesMax:{value:new be},probesResolution:{value:new be}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Lt={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Lt.physical={uniforms:St([Lt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const vn={r:0,b:0,g:0},gc=new tn,Qa=new Oe;Qa.set(-1,0,0,0,1,0,0,0,1);function vc(e,n,t,i,s,o){const f=new nt(0);let h=s===!0?0:1,R,T,H=null,I=0,p=null;function x(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){const m=L.backgroundBlurriness>0;z=n.get(z,m)}return z}function N(L){let z=!1;const m=x(L);m===null?d(f,h):m&&m.isColor&&(d(m,1),z=!0);const S=e.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(e.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function W(L,z){const m=x(z);m&&(m.isCubeTexture||m.mapping===Pn)?(T===void 0&&(T=new Ft(new ii(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:$n(Lt.backgroundCube.uniforms),vertexShader:Lt.backgroundCube.vertexShader,fragmentShader:Lt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(S,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(T)),T.material.uniforms.envMap.value=m,T.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,T.material.uniforms.backgroundRotation.value.setFromMatrix4(gc.makeRotationFromEuler(z.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&T.material.uniforms.backgroundRotation.value.premultiply(Qa),T.material.toneMapped=at.getTransfer(m.colorSpace)!==je,(H!==m||I!==m.version||p!==e.toneMapping)&&(T.material.needsUpdate=!0,H=m,I=m.version,p=e.toneMapping),T.layers.enableAll(),L.unshift(T,T.geometry,T.material,0,0,null)):m&&m.isTexture&&(R===void 0&&(R=new Ft(new Oa(2,2),new Ot({name:"BackgroundMaterial",uniforms:$n(Lt.background.uniforms),vertexShader:Lt.background.vertexShader,fragmentShader:Lt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),Object.defineProperty(R.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(R)),R.material.uniforms.t2D.value=m,R.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,R.material.toneMapped=at.getTransfer(m.colorSpace)!==je,m.matrixAutoUpdate===!0&&m.updateMatrix(),R.material.uniforms.uvTransform.value.copy(m.matrix),(H!==m||I!==m.version||p!==e.toneMapping)&&(R.material.needsUpdate=!0,H=m,I=m.version,p=e.toneMapping),R.layers.enableAll(),L.unshift(R,R.geometry,R.material,0,0,null))}function d(L,z){L.getRGB(vn,Fa(e)),t.buffers.color.setClear(vn.r,vn.g,vn.b,z,o)}function l(){T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0),R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,z=1){f.set(L),h=z,d(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,d(f,h)},render:N,addToRenderList:W,dispose:l}}function Sc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=p(null);let o=s,f=!1;function h(O,G,q,P,Y){let j=!1;const K=I(O,P,q,G);o!==K&&(o=K,T(o.object)),j=x(O,P,q,Y),j&&N(O,P,q,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,m(O,G,q,P),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function R(){return e.createVertexArray()}function T(O){return e.bindVertexArray(O)}function H(O){return e.deleteVertexArray(O)}function I(O,G,q,P){const Y=P.wireframe===!0;let j=i[G.id];j===void 0&&(j={},i[G.id]=j);const K=O.isInstancedMesh===!0?O.id:0;let ne=j[K];ne===void 0&&(ne={},j[K]=ne);let Z=ne[q.id];Z===void 0&&(Z={},ne[q.id]=Z);let J=Z[Y];return J===void 0&&(J=p(R()),Z[Y]=J),J}function p(O){const G=[],q=[],P=[];for(let Y=0;Y<t;Y++)G[Y]=0,q[Y]=0,P[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:P,object:O,attributes:{},index:null}}function x(O,G,q,P){const Y=o.attributes,j=G.attributes;let K=0;const ne=q.getAttributes();for(const Z in ne)if(ne[Z].location>=0){const ee=Y[Z];let Ce=j[Z];if(Ce===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Ce=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Ce=O.instanceColor)),ee===void 0||ee.attribute!==Ce||Ce&&ee.data!==Ce.data)return!0;K++}return o.attributesNum!==K||o.index!==P}function N(O,G,q,P){const Y={},j=G.attributes;let K=0;const ne=q.getAttributes();for(const Z in ne)if(ne[Z].location>=0){let ee=j[Z];ee===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const Ce={};Ce.attribute=ee,ee&&ee.data&&(Ce.data=ee.data),Y[Z]=Ce,K++}o.attributes=Y,o.attributesNum=K,o.index=P}function W(){const O=o.newAttributes;for(let G=0,q=O.length;G<q;G++)O[G]=0}function d(O){l(O,0)}function l(O,G){const q=o.newAttributes,P=o.enabledAttributes,Y=o.attributeDivisors;q[O]=1,P[O]===0&&(e.enableVertexAttribArray(O),P[O]=1),Y[O]!==G&&(e.vertexAttribDivisor(O,G),Y[O]=G)}function L(){const O=o.newAttributes,G=o.enabledAttributes;for(let q=0,P=G.length;q<P;q++)G[q]!==O[q]&&(e.disableVertexAttribArray(q),G[q]=0)}function z(O,G,q,P,Y,j,K){K===!0?e.vertexAttribIPointer(O,G,q,Y,j):e.vertexAttribPointer(O,G,q,P,Y,j)}function m(O,G,q,P){W();const Y=P.attributes,j=q.getAttributes(),K=G.defaultAttributeValues;for(const ne in j){const Z=j[ne];if(Z.location>=0){let J=Y[ne];if(J===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){const ee=J.normalized,Ce=J.itemSize,Re=n.get(J);if(Re===void 0)continue;const rt=Re.buffer,ze=Re.type,Xe=Re.bytesPerElement,V=ze===e.INT||ze===e.UNSIGNED_INT||J.gpuType===Ha;if(J.isInterleavedBufferAttribute){const $=J.data,Ee=$.stride,we=J.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)l(Z.location+me,$.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<Z.locationSize;me++)d(Z.location+me);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let me=0;me<Z.locationSize;me++)z(Z.location+me,Ce/Z.locationSize,ze,ee,Ee*Xe,(we+Ce/Z.locationSize*me)*Xe,V)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)l(Z.location+$,J.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<Z.locationSize;$++)d(Z.location+$);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let $=0;$<Z.locationSize;$++)z(Z.location+$,Ce/Z.locationSize,ze,ee,Ce*Xe,Ce/Z.locationSize*$*Xe,V)}}else if(K!==void 0){const ee=K[ne];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(Z.location,ee);break;case 3:e.vertexAttrib3fv(Z.location,ee);break;case 4:e.vertexAttrib4fv(Z.location,ee);break;default:e.vertexAttrib1fv(Z.location,ee)}}}}L()}function S(){g();for(const O in i){const G=i[O];for(const q in G){const P=G[q];for(const Y in P){const j=P[Y];for(const K in j)H(j[K].object),delete j[K];delete P[Y]}}delete i[O]}}function _(O){if(i[O.id]===void 0)return;const G=i[O.id];for(const q in G){const P=G[q];for(const Y in P){const j=P[Y];for(const K in j)H(j[K].object),delete j[K];delete P[Y]}}delete i[O.id]}function w(O){for(const G in i){const q=i[G];for(const P in q){const Y=q[P];if(Y[O.id]===void 0)continue;const j=Y[O.id];for(const K in j)H(j[K].object),delete j[K];delete Y[O.id]}}}function c(O){for(const G in i){const q=i[G],P=O.isInstancedMesh===!0?O.id:0,Y=q[P];if(Y!==void 0){for(const j in Y){const K=Y[j];for(const ne in K)H(K[ne].object),delete K[ne];delete Y[j]}delete q[P],Object.keys(q).length===0&&delete i[G]}}}function g(){U(),f=!0,o!==s&&(o=s,T(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:g,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:_,releaseStatesOfObject:c,releaseStatesOfProgram:w,initAttributes:W,enableAttribute:d,disableUnusedAttributes:L}}function Ec(e,n,t){let i;function s(R){i=R}function o(R,T){e.drawArrays(i,R,T),t.update(T,i,1)}function f(R,T,H){H!==0&&(e.drawArraysInstanced(i,R,T,H),t.update(T,i,H))}function h(R,T,H){if(H===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,R,0,T,0,H);let p=0;for(let x=0;x<H;x++)p+=T[x];t.update(p,i,1)}this.setMode=s,this.render=o,this.renderInstances=f,this.renderMultiDraw=h}function Mc(e,n,t,i){let s;function o(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const w=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(w){return!(w!==It&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(w){const c=w===yt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(w!==Dt&&w!==Vt&&!c&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function R(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let T=t.precision!==void 0?t.precision:"highp";const H=R(T);H!==T&&(We("WebGLRenderer:",T,"not supported, using",H,"instead."),T=H);const I=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),W=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),z=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),_=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:R,textureFormatReadable:f,textureTypeReadable:h,precision:T,logarithmicDepthBuffer:I,reversedDepthBuffer:p,maxTextures:x,maxVertexTextures:N,maxTextureSize:W,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:m,maxSamples:S,samples:_}}function xc(e){const n=this;let t=null,i=0,s=!1,o=!1;const f=new Da,h=new Oe,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(I,p){const x=I.length!==0||p||i!==0||s;return s=p,i=I.length,x},this.beginShadows=function(){o=!0,H(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(I,p){t=H(I,p,0)},this.setState=function(I,p,x){const N=I.clippingPlanes,W=I.clipIntersection,d=I.clipShadows,l=e.get(I);if(!s||N===null||N.length===0||o&&!d)o?H(null):T();else{const L=o?0:i,z=L*4;let m=l.clippingState||null;R.value=m,m=H(N,p,z,x);for(let S=0;S!==z;++S)m[S]=t[S];l.clippingState=m,this.numIntersection=W?this.numPlanes:0,this.numPlanes+=L}};function T(){R.value!==t&&(R.value=t,R.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function H(I,p,x,N){const W=I!==null?I.length:0;let d=null;if(W!==0){if(d=R.value,N!==!0||d===null){const l=x+W*4,L=p.matrixWorldInverse;h.getNormalMatrix(L),(d===null||d.length<l)&&(d=new Float32Array(l));for(let z=0,m=x;z!==W;++z,m+=4)f.copy(I[z]).applyMatrix4(L,h),f.normal.toArray(d,m),d[m+3]=f.constant}R.value=d,R.needsUpdate=!0}return n.numPlanes=W,n.numIntersection=0,d}}const Jt=4,Tc=6,Ac=20,Rc=256,ln=new La,aa=new nt;let Vn=null,Wn=0,kn=0,zn=!1;const bc=new be,kt=new be;class ra{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,s=100,o={}){const{size:f=256,position:h=bc}=o;Vn=this._renderer.getRenderTarget(),Wn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const R=this._allocateTargets();return R.depthBuffer=!0,this._sceneToCubeUV(n,i,s,R,h),t>0&&this._blur(R,0,0,t),this._applyPMREM(R),this._cleanup(R),R}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=la(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Vn,Wn,kn),this._renderer.xr.enabled=zn,n.scissorTest=!1,qt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===hn||n.mapping===rn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Vn=this._renderer.getRenderTarget(),Wn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:yt,format:It,colorSpace:$a,depthBuffer:!1},s=oa(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oa(n,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cc(o)),this._blurMaterial=Lc(o,n,t),this._ggxMaterial=Pc(o,n,t)}return s}_compileMaterial(n){const t=new Ft(new Cn,n);this._renderer.compile(t,ln)}_sceneToCubeUV(n,t,i,s,o){const R=new xn(90,1,t,i),T=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],I=this._renderer,p=I.autoClear,x=I.toneMapping;I.getClearColor(aa),I.toneMapping=wt,I.autoClear=!1,I.state.buffers.depth.getReversed()&&(I.setRenderTarget(s),I.clearDepth(),I.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new ii,new To({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1})));const W=this._backgroundBox,d=W.material;let l=!1;const L=n.background;L?L.isColor&&(d.color.copy(L),n.background=null,l=!0):(d.color.copy(aa),l=!0);for(let z=0;z<6;z++){const m=z%3;m===0?(R.up.set(0,T[z],0),R.position.set(o.x,o.y,o.z),R.lookAt(o.x+H[z],o.y,o.z)):m===1?(R.up.set(0,0,T[z]),R.position.set(o.x,o.y,o.z),R.lookAt(o.x,o.y+H[z],o.z)):(R.up.set(0,T[z],0),R.position.set(o.x,o.y,o.z),R.lookAt(o.x,o.y,o.z+H[z]));const S=this._cubeSize;qt(s,m*S,z>2?S:0,S,S),I.setRenderTarget(s),l&&I.render(W,R),I.render(n,R)}I.toneMapping=x,I.autoClear=p,n.background=L}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===hn||n.mapping===rn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=la()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sa());const o=s?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=o;const h=o.uniforms;h.envMap.value=n;const R=this._cubeSize;qt(t,0,0,3*R,2*R),i.setRenderTarget(t),i.render(f,ln)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(n,o-1,o);t.autoClear=i}_applyGGXFilter(n,t,i){const s=this._renderer,o=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[i];h.material=f;const R=f.uniforms,T=i/(this._lodMeshes.length-1),H=t/(this._lodMeshes.length-1),I=Math.sqrt(T*T-H*H),p=T*1.25,x=I*p,{_lodMax:N}=this,W=this._sizeLods[i],d=3*W*(i>N-Jt?i-N+Jt:0),l=4*(this._cubeSize-W);R.envMap.value=n.texture,R.roughness.value=x,R.mipInt.value=N-t,qt(o,d,l,3*W,2*W),s.setRenderTarget(o),s.render(h,ln),R.envMap.value=o.texture,R.roughness.value=0,R.mipInt.value=N-i,qt(n,d,l,3*W,2*W),s.setRenderTarget(n),s.render(h,ln)}_blur(n,t,i,s){const o=this._pingPongRenderTarget,f=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(n,o,t,i,f),this._blurPass(o,n,i,i,f)}_blurPass(n,t,i,s,o){const f=this._renderer,h=this._blurMaterial,R=this._lodMeshes[s];R.material=h;const T=h.uniforms;T.envMap.value=n.texture,T.sigma.value=o,T.mipInt.value=this._lodMax-i;const H=this._sizeLods[s],I=3*H*(s>this._lodMax-Jt?s-this._lodMax+Jt:0),p=4*(this._cubeSize-H);qt(t,I,p,3*H,2*H),f.setRenderTarget(t),f.render(R,ln)}}function Cc(e){const n=[],t=[];let i=e;const s=e-Jt+1+Tc;for(let o=0;o<s;o++){const f=Math.pow(2,i);n.push(f);const h=1/(f-2),R=-h,T=1+h,H=[R,R,T,R,T,T,R,R,T,T,R,T],I=6,p=6,x=3,N=new Float32Array(x*p*I),W=new Float32Array(x*p*I);for(let l=0;l<I;l++){const L=l%3*2/3-1,z=l>2?0:-1,m=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];N.set(m,x*p*l);for(let S=0;S<p;S++){const _=H[S*2]*2-1,w=H[S*2+1]*2-1;l===0?kt.set(1,w,_):l===1?kt.set(-_,1,-w):l===2?kt.set(-_,w,1):l===3?kt.set(-1,w,-_):l===4?kt.set(-_,-1,w):kt.set(_,w,-1),kt.toArray(W,(l*p+S)*x)}}const d=new Cn;d.setAttribute("position",new Zn(N,x)),d.setAttribute("outputDirection",new Zn(W,x)),t.push(new Ft(d,null)),i>Jt&&i--}return{lodMeshes:t,sizeLods:n}}function oa(e,n,t){const i=new Rt(e,n,t);return i.texture.mapping=Pn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qt(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function Pc(e,n,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Lc(e,n,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:Ac,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function sa(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function la(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Ln(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ja extends Rt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},s=[i,i,i,i,i,i];this.texture=new Ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),o=new Ot({name:"CubemapFromEquirect",uniforms:$n(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:Nt});o.uniforms.tEquirect.value=t;const f=new Ft(s,o),h=t.minFilter;return t.minFilter===$t&&(t.minFilter=Mt),new uo(1,10,this).update(n,f),t.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(n,t=!0,i=!0,s=!0){const o=n.getRenderTarget();for(let f=0;f<6;f++)n.setRenderTarget(this,f),n.clear(t,i,s);n.setRenderTarget(o)}}function Dc(e){let n=new WeakMap,t=new WeakMap,i=null;function s(p,x=!1){return p==null?null:x?f(p):o(p)}function o(p){if(p&&p.isTexture){const x=p.mapping;if(x===Gn||x===Hn)if(n.has(p)){const N=n.get(p).texture;return h(N,p.mapping)}else{const N=p.image;if(N&&N.height>0){const W=new Ja(N.height);return W.fromEquirectangularTexture(e,p),n.set(p,W),p.addEventListener("dispose",T),h(W.texture,p.mapping)}else return null}}return p}function f(p){if(p&&p.isTexture){const x=p.mapping,N=x===Gn||x===Hn,W=x===hn||x===rn;if(N||W){let d=t.get(p);const l=d!==void 0?d.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==l)return i===null&&(i=new ra(e)),d=N?i.fromEquirectangular(p,d):i.fromCubemap(p,d),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),d.texture;if(d!==void 0)return d.texture;{const L=p.image;return N&&L&&L.height>0||W&&L&&R(L)?(i===null&&(i=new ra(e)),d=N?i.fromEquirectangular(p):i.fromCubemap(p),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),p.addEventListener("dispose",H),d.texture):null}}}return p}function h(p,x){return x===Gn?p.mapping=hn:x===Hn&&(p.mapping=rn),p}function R(p){let x=0;const N=6;for(let W=0;W<N;W++)p[W]!==void 0&&x++;return x===N}function T(p){const x=p.target;x.removeEventListener("dispose",T);const N=n.get(x);N!==void 0&&(n.delete(x),N.dispose())}function H(p){const x=p.target;x.removeEventListener("dispose",H);const N=t.get(x);N!==void 0&&(t.delete(x),N.dispose())}function I(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:I}}function wc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const s=e.getExtension(i);return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qr("WebGLRenderer: "+i+" extension not supported."),s}}}function Uc(e,n,t,i){const s={},o=new WeakMap;function f(I){const p=I.target;p.index!==null&&n.remove(p.index);for(const N in p.attributes)n.remove(p.attributes[N]);p.removeEventListener("dispose",f),delete s[p.id];const x=o.get(p);x&&(n.remove(x),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function h(I,p){return s[p.id]===!0||(p.addEventListener("dispose",f),s[p.id]=!0,t.memory.geometries++),p}function R(I){const p=I.attributes;for(const x in p)n.update(p[x],e.ARRAY_BUFFER)}function T(I){const p=[],x=I.index,N=I.attributes.position;let W=0;if(N===void 0)return;if(x!==null){const L=x.array;W=x.version;for(let z=0,m=L.length;z<m;z+=3){const S=L[z+0],_=L[z+1],w=L[z+2];p.push(S,_,_,w,w,S)}}else{const L=N.array;W=N.version;for(let z=0,m=L.length/3-1;z<m;z+=3){const S=z+0,_=z+1,w=z+2;p.push(S,_,_,w,w,S)}}const d=new(N.count>=65535?Mo:xo)(p,1);d.version=W;const l=o.get(I);l&&n.remove(l),o.set(I,d)}function H(I){const p=o.get(I);if(p){const x=I.index;x!==null&&p.version<x.version&&T(I)}else T(I);return o.get(I)}return{get:h,update:R,getWireframeAttribute:H}}function Ic(e,n,t){let i;function s(I){i=I}let o,f;function h(I){o=I.type,f=I.bytesPerElement}function R(I,p){e.drawElements(i,p,o,I*f),t.update(p,i,1)}function T(I,p,x){x!==0&&(e.drawElementsInstanced(i,p,o,I*f,x),t.update(p,i,x))}function H(I,p,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,I,0,x);let W=0;for(let d=0;d<x;d++)W+=p[d];t.update(W,i,1)}this.setMode=s,this.setIndex=h,this.render=R,this.renderInstances=T,this.renderMultiDraw=H}function Nc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,f,h){switch(t.calls++,f){case e.TRIANGLES:t.triangles+=h*(o/3);break;case e.LINES:t.lines+=h*(o/2);break;case e.LINE_STRIP:t.lines+=h*(o-1);break;case e.LINE_LOOP:t.lines+=h*o;break;case e.POINTS:t.points+=h*o;break;default:Je("WebGLInfo: Unknown draw mode:",f);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yc(e,n,t){const i=new WeakMap,s=new Et;function o(f,h,R){const T=f.morphTargetInfluences,H=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,I=H!==void 0?H.length:0;let p=i.get(h);if(p===void 0||p.count!==I){let g=function(){w.dispose(),i.delete(h),h.removeEventListener("dispose",g)};p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,W=h.morphAttributes.color!==void 0,d=h.morphAttributes.position||[],l=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let z=0;x===!0&&(z=1),N===!0&&(z=2),W===!0&&(z=3);let m=h.attributes.position.count*z,S=1;m>n.maxTextureSize&&(S=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);const _=new Float32Array(m*S*4*I),w=new Va(_,m,S,I);w.type=Vt,w.needsUpdate=!0;const c=z*4;for(let U=0;U<I;U++){const O=d[U],G=l[U],q=L[U],P=m*S*4*U;for(let Y=0;Y<O.count;Y++){const j=Y*c;x===!0&&(s.fromBufferAttribute(O,Y),_[P+j+0]=s.x,_[P+j+1]=s.y,_[P+j+2]=s.z,_[P+j+3]=0),N===!0&&(s.fromBufferAttribute(G,Y),_[P+j+4]=s.x,_[P+j+5]=s.y,_[P+j+6]=s.z,_[P+j+7]=0),W===!0&&(s.fromBufferAttribute(q,Y),_[P+j+8]=s.x,_[P+j+9]=s.y,_[P+j+10]=s.z,_[P+j+11]=q.itemSize===4?s.w:1)}}p={count:I,texture:w,size:new et(m,S)},i.set(h,p),h.addEventListener("dispose",g)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)R.getUniforms().setValue(e,"morphTexture",f.morphTexture,t);else{let x=0;for(let W=0;W<T.length;W++)x+=T[W];const N=h.morphTargetsRelative?1:1-x;R.getUniforms().setValue(e,"morphTargetBaseInfluence",N),R.getUniforms().setValue(e,"morphTargetInfluences",T)}R.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),R.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:o}}function Oc(e,n,t,i,s){let o=new WeakMap;function f(T){const H=s.render.frame,I=T.geometry,p=n.get(T,I);if(o.get(p)!==H&&(n.update(p),o.set(p,H)),T.isInstancedMesh&&(T.hasEventListener("dispose",R)===!1&&T.addEventListener("dispose",R),o.get(T)!==H&&(t.update(T.instanceMatrix,e.ARRAY_BUFFER),T.instanceColor!==null&&t.update(T.instanceColor,e.ARRAY_BUFFER),o.set(T,H))),T.isSkinnedMesh){const x=T.skeleton;o.get(x)!==H&&(x.update(),o.set(x,H))}return p}function h(){o=new WeakMap}function R(T){const H=T.target;H.removeEventListener("dispose",R),i.releaseStatesOfObject(H),t.remove(H.instanceMatrix),H.instanceColor!==null&&t.remove(H.instanceColor)}return{update:f,dispose:h}}const Fc={[Za]:"LINEAR_TONE_MAPPING",[qa]:"REINHARD_TONE_MAPPING",[Ka]:"CINEON_TONE_MAPPING",[Ya]:"ACES_FILMIC_TONE_MAPPING",[Xa]:"AGX_TONE_MAPPING",[za]:"NEUTRAL_TONE_MAPPING",[ka]:"CUSTOM_TONE_MAPPING"};function Bc(e,n,t,i,s,o){const f=new Rt(n,t,{type:e,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,R=null;const T=new Cn;T.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),T.setAttribute("uv",new vi([0,2,0,0,2,0],2));const H=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),I=new Ft(T,H),p=new La(-1,1,1,-1,0,1);let x=null,N=null,W=!1,d,l=null,L=[],z=!1;this.setSize=function(m,S){f.setSize(m,S),h!==null&&h.setSize(m,S),R!==null&&R.setSize(m,S);for(let _=0;_<L.length;_++){const w=L[_];w.setSize&&w.setSize(m,S)}},this.setEffects=function(m){L=m,z=L.length>0&&L[0].isRenderPass===!0;const S=f.width,_=f.height;L.length>0&&h===null&&(h=new Rt(S,_,{type:yt,depthBuffer:!1,stencilBuffer:!1}),R=new Rt(S,_,{type:yt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<L.length;w++){const c=L[w];c.setSize&&c.setSize(S,_)}},this.begin=function(m,S){if(W||m.toneMapping===wt&&L.length===0)return!1;if(l=S,S!==null){const _=S.width,w=S.height;(f.width!==_||f.height!==w)&&this.setSize(_,w)}return z===!1&&m.setRenderTarget(f),d=m.toneMapping,m.toneMapping=wt,!0},this.hasRenderPass=function(){return z},this.end=function(m,S){m.toneMapping=d,W=!0;let _=f,w=h;for(let c=0;c<L.length;c++){const g=L[c];g.enabled!==!1&&(g.render(m,w,_,S),g.needsSwap!==!1&&(_=w,w=w===h?R:h))}if(x!==m.outputColorSpace||N!==m.toneMapping){x=m.outputColorSpace,N=m.toneMapping,H.defines={},at.getTransfer(x)===je&&(H.defines.SRGB_TRANSFER="");const c=Fc[N];c&&(H.defines[c]=""),H.needsUpdate=!0}H.uniforms.tDiffuse.value=_.texture,m.setRenderTarget(l),m.render(I,p),l=null,W=!1},this.isCompositing=function(){return W},this.dispose=function(){f.dispose(),h!==null&&h.dispose(),R!==null&&R.dispose(),T.dispose(),H.dispose()}}const er=new Lo,Jn=new Rn(1,1),tr=new Va,nr=new Po,ir=new Ba,ca=[],fa=[],da=new Float32Array(16),ua=new Float32Array(9),pa=new Float32Array(4);function on(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let o=ca[s];if(o===void 0&&(o=new Float32Array(s),ca[s]=o),n!==0){i.toArray(o,0);for(let f=1,h=0;f!==n;++f)h+=t,e[f].toArray(o,h)}return o}function dt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Dn(e,n){let t=fa[n];t===void 0&&(t=new Int32Array(n),fa[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Gc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Hc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function Vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(dt(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function Wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function kc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;pa.set(i),e.uniformMatrix2fv(this.addr,!1,pa),ut(t,i)}}function zc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;ua.set(i),e.uniformMatrix3fv(this.addr,!1,ua),ut(t,i)}}function Xc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;da.set(i),e.uniformMatrix4fv(this.addr,!1,da),ut(t,i)}}function Yc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Kc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function qc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(dt(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function Zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function $c(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function jc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function Qc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(dt(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function Jc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function ef(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(Jn.compareFunction=t.isReversedDepthBuffer()?ti:ni,o=Jn):o=er,t.setTexture2D(n||o,s)}function tf(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||nr,s)}function nf(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||ir,s)}function af(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||tr,s)}function rf(e){switch(e){case 5126:return Gc;case 35664:return Hc;case 35665:return Vc;case 35666:return Wc;case 35674:return kc;case 35675:return zc;case 35676:return Xc;case 5124:case 35670:return Yc;case 35667:case 35671:return Kc;case 35668:case 35672:return qc;case 35669:case 35673:return Zc;case 5125:return $c;case 36294:return jc;case 36295:return Qc;case 36296:return Jc;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return af}}function of(e,n){e.uniform1fv(this.addr,n)}function sf(e,n){const t=on(n,this.size,2);e.uniform2fv(this.addr,t)}function lf(e,n){const t=on(n,this.size,3);e.uniform3fv(this.addr,t)}function cf(e,n){const t=on(n,this.size,4);e.uniform4fv(this.addr,t)}function ff(e,n){const t=on(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function df(e,n){const t=on(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function uf(e,n){const t=on(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function pf(e,n){e.uniform1iv(this.addr,n)}function hf(e,n){e.uniform2iv(this.addr,n)}function mf(e,n){e.uniform3iv(this.addr,n)}function _f(e,n){e.uniform4iv(this.addr,n)}function gf(e,n){e.uniform1uiv(this.addr,n)}function vf(e,n){e.uniform2uiv(this.addr,n)}function Sf(e,n){e.uniform3uiv(this.addr,n)}function Ef(e,n){e.uniform4uiv(this.addr,n)}function Mf(e,n,t){const i=this.cache,s=n.length,o=Dn(t,s);dt(i,o)||(e.uniform1iv(this.addr,o),ut(i,o));let f;this.type===e.SAMPLER_2D_SHADOW?f=Jn:f=er;for(let h=0;h!==s;++h)t.setTexture2D(n[h]||f,o[h])}function xf(e,n,t){const i=this.cache,s=n.length,o=Dn(t,s);dt(i,o)||(e.uniform1iv(this.addr,o),ut(i,o));for(let f=0;f!==s;++f)t.setTexture3D(n[f]||nr,o[f])}function Tf(e,n,t){const i=this.cache,s=n.length,o=Dn(t,s);dt(i,o)||(e.uniform1iv(this.addr,o),ut(i,o));for(let f=0;f!==s;++f)t.setTextureCube(n[f]||ir,o[f])}function Af(e,n,t){const i=this.cache,s=n.length,o=Dn(t,s);dt(i,o)||(e.uniform1iv(this.addr,o),ut(i,o));for(let f=0;f!==s;++f)t.setTexture2DArray(n[f]||tr,o[f])}function Rf(e){switch(e){case 5126:return of;case 35664:return sf;case 35665:return lf;case 35666:return cf;case 35674:return ff;case 35675:return df;case 35676:return uf;case 5124:case 35670:return pf;case 35667:case 35671:return hf;case 35668:case 35672:return mf;case 35669:case 35673:return _f;case 5125:return gf;case 36294:return vf;case 36295:return Sf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Af}}class bf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rf(t.type)}}class Cf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rf(t.type)}}class Pf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let o=0,f=s.length;o!==f;++o){const h=s[o];h.setValue(n,t[h.id],i)}}}const Xn=/(\w+)(\])?(\[|\.)?/g;function ha(e,n){e.seq.push(n),e.map[n.id]=n}function Lf(e,n,t){const i=e.name,s=i.length;for(Xn.lastIndex=0;;){const o=Xn.exec(i),f=Xn.lastIndex;let h=o[1];const R=o[2]==="]",T=o[3];if(R&&(h=h|0),T===void 0||T==="["&&f+2===s){ha(t,T===void 0?new bf(h,e,n):new Cf(h,e,n));break}else{let I=t.map[h];I===void 0&&(I=new Pf(h),ha(t,I)),t=I}}}class An{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let f=0;f<i;++f){const h=n.getActiveUniform(t,f),R=n.getUniformLocation(t,h.name);Lf(h,R,this)}const s=[],o=[];for(const f of this.seq)f.type===n.SAMPLER_2D_SHADOW||f.type===n.SAMPLER_CUBE_SHADOW||f.type===n.SAMPLER_2D_ARRAY_SHADOW?s.push(f):o.push(f);s.length>0&&(this.seq=s.concat(o))}setValue(n,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let o=0,f=t.length;o!==f;++o){const h=t[o],R=i[h.id];R.needsUpdate!==!1&&h.setValue(n,R.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,o=n.length;s!==o;++s){const f=n[s];f.id in t&&i.push(f)}return i}}function ma(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Df=37297;let wf=0;function Uf(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let f=s;f<o;f++){const h=f+1;i.push(`${h===n?">":" "} ${h}: ${t[f]}`)}return i.join(`
`)}const _a=new Oe;function If(e){at._getMatrix(_a,at.workingColorSpace,e);const n=`mat3( ${_a.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(e)){case Wa:return[n,"LinearTransferOETF"];case je:return[n,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ga(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const f=/ERROR: 0:(\d+)/.exec(o);if(f){const h=parseInt(f[1]);return t.toUpperCase()+`

`+o+`

`+Uf(e.getShaderSource(n),h)}else return o}function Nf(e,n){const t=If(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yf={[Za]:"Linear",[qa]:"Reinhard",[Ka]:"Cineon",[Ya]:"ACESFilmic",[Xa]:"AgX",[za]:"Neutral",[ka]:"Custom"};function Of(e,n){const t=yf[n];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sn=new be;function Ff(){at.getLuminanceCoefficients(Sn);const e=Sn.x.toFixed(4),n=Sn.y.toFixed(4),t=Sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dn).join(`
`)}function Gf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Hf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=e.getActiveAttrib(n,s),f=o.name;let h=1;o.type===e.FLOAT_MAT2&&(h=2),o.type===e.FLOAT_MAT3&&(h=3),o.type===e.FLOAT_MAT4&&(h=4),t[f]={type:o.type,location:e.getAttribLocation(n,f),locationSize:h}}return t}function dn(e){return e!==""}function va(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Sa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ei(e){return e.replace(Vf,kf)}const Wf=new Map;function kf(e,n){let t=De[n];if(t===void 0){const i=Wf.get(n);if(i!==void 0)t=De[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return ei(t)}const zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(e){return e.replace(zf,Xf)}function Xf(e,n,t,i){let s="";for(let o=parseInt(n);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ma(e){let n=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Yf={[Mn]:"SHADOWMAP_TYPE_PCF",[fn]:"SHADOWMAP_TYPE_VSM"};function Kf(e){return Yf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qf={[hn]:"ENVMAP_TYPE_CUBE",[rn]:"ENVMAP_TYPE_CUBE",[Pn]:"ENVMAP_TYPE_CUBE_UV"};function Zf(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":qf[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const $f={[rn]:"ENVMAP_MODE_REFRACTION"};function jf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":$f[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qf={[Co]:"ENVMAP_BLENDING_MULTIPLY",[bo]:"ENVMAP_BLENDING_MIX",[Ro]:"ENVMAP_BLENDING_ADD"};function Jf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Qf[e.combine]||"ENVMAP_BLENDING_NONE"}function ed(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function td(e,n,t,i){const s=e.getContext(),o=t.defines;let f=t.vertexShader,h=t.fragmentShader;const R=Kf(t),T=Zf(t),H=jf(t),I=Jf(t),p=ed(t),x=Bf(t),N=Gf(o),W=s.createProgram();let d,l,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(dn).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(dn).join(`
`),l.length>0&&(l+=`
`)):(d=[Ma(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+H:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dn).join(`
`),l=[Ma(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+T:"",t.envMap?"#define "+H:"",t.envMap?"#define "+I:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wt?"#define TONE_MAPPING":"",t.toneMapping!==wt?De.tonemapping_pars_fragment:"",t.toneMapping!==wt?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Nf("linearToOutputTexel",t.outputColorSpace),Ff(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dn).join(`
`)),f=ei(f),f=va(f,t),f=Sa(f,t),h=ei(h),h=va(h,t),h=Sa(h,t),f=Ea(f),h=Ea(h),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,d=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const z=L+d+f,m=L+l+h,S=ma(s,s.VERTEX_SHADER,z),_=ma(s,s.FRAGMENT_SHADER,m);s.attachShader(W,S),s.attachShader(W,_),t.index0AttributeName!==void 0?s.bindAttribLocation(W,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(W,0,"position"),s.linkProgram(W);function w(O){if(e.debug.checkShaderErrors){const G=s.getProgramInfoLog(W)||"",q=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(_)||"",Y=G.trim(),j=q.trim(),K=P.trim();let ne=!0,Z=!0;if(s.getProgramParameter(W,s.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,W,S,_);else{const J=ga(s,S,"vertex"),ee=ga(s,_,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(W,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+J+`
`+ee)}else Y!==""?We("WebGLProgram: Program Info Log:",Y):(j===""||K==="")&&(Z=!1);Z&&(O.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:j,prefix:d},fragmentShader:{log:K,prefix:l}})}s.deleteShader(S),s.deleteShader(_),c=new An(s,W),g=Hf(s,W)}let c;this.getUniforms=function(){return c===void 0&&w(this),c};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(W,Df)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(W),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wf++,this.cacheKey=n,this.usedTimes=1,this.program=W,this.vertexShader=S,this.fragmentShader=_,this}let nd=0;class id{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const s=this._getShaderCacheForMaterial(n);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new ad(n),t.set(n,i)),i}}class ad{constructor(n){this.id=nd++,this.code=n,this.usedTimes=0}}function rd(e){return e===nn||e===jn||e===Qn}function od(e,n,t,i,s,o){const f=new Eo,h=new id,R=new Set,T=[],H=new Map,I=i.logarithmicDepthBuffer;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(c){return R.add(c),c===0?"uv":`uv${c}`}function W(c,g,U,O,G,q){const P=O.fog,Y=G.geometry,j=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?O.environment:null,K=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap,ne=n.get(c.envMap||j,K),Z=ne&&ne.mapping===Pn?ne.image.height:null,J=x[c.type];c.precision!==null&&(p=i.getMaxPrecision(c.precision),p!==c.precision&&We("WebGLProgram.getParameters:",c.precision,"not supported, using",p,"instead."));const ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=ee!==void 0?ee.length:0;let Re=0;Y.morphAttributes.position!==void 0&&(Re=1),Y.morphAttributes.normal!==void 0&&(Re=2),Y.morphAttributes.color!==void 0&&(Re=3);let rt,ze,Xe,V;if(J){const Ze=Lt[J];rt=Ze.vertexShader,ze=Ze.fragmentShader}else{rt=c.vertexShader,ze=c.fragmentShader;const Ze=h.getVertexShaderStage(c),Ge=h.getFragmentShaderStage(c);h.update(c,Ze,Ge),Xe=Ze.id,V=Ge.id}const $=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),we=G.isInstancedMesh===!0,me=G.isBatchedMesh===!0,ye=!!c.map,ct=!!c.matcap,Ue=!!ne,Be=!!c.aoMap,qe=!!c.lightMap,Ne=!!c.bumpMap&&c.wireframe===!1,tt=!!c.normalMap,pt=!!c.displacementMap,gt=!!c.emissiveMap,it=!!c.metalnessMap,st=!!c.roughnessMap,M=c.anisotropy>0,ht=c.clearcoat>0,Ve=c.dispersion>0,u=c.retroreflectivity>0,a=c.iridescence>0,A=c.sheen>0,D=c.transmission>0,F=M&&!!c.anisotropyMap,te=ht&&!!c.clearcoatMap,ie=ht&&!!c.clearcoatNormalMap,B=ht&&!!c.clearcoatRoughnessMap,X=a&&!!c.iridescenceMap,ae=a&&!!c.iridescenceThicknessMap,Me=A&&!!c.sheenColorMap,le=A&&!!c.sheenRoughnessMap,re=!!c.specularMap,xe=!!c.specularColorMap,Ae=!!c.specularIntensityMap,Pe=D&&!!c.transmissionMap,E=D&&!!c.thicknessMap,oe=!!c.gradientMap,k=!!c.alphaMap,se=c.alphaTest>0,ue=!!c.alphaHash,Q=!!c.extensions;let Te=wt;c.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Te=e.toneMapping);const ve={shaderID:J,shaderType:c.type,shaderName:c.name,vertexShader:rt,fragmentShader:ze,defines:c.defines,customVertexShaderID:Xe,customFragmentShaderID:V,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:p,batching:me,batchingColor:me&&G._colorsTexture!==null,instancing:we,instancingColor:we&&G.instanceColor!==null,instancingMorph:we&&G.morphTexture!==null,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!c.alphaToCoverage,map:ye,matcap:ct,envMap:Ue,envMapMode:Ue&&ne.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:qe,bumpMap:Ne,normalMap:tt,displacementMap:pt,emissiveMap:gt,normalMapObjectSpace:tt&&c.normalMapType===fo,normalMapTangentSpace:tt&&c.normalMapType===Ti,packedNormalMap:tt&&c.normalMapType===Ti&&rd(c.normalMap.format),metalnessMap:it,roughnessMap:st,anisotropy:M,anisotropyMap:F,clearcoat:ht,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:B,dispersion:Ve,retroreflection:u,iridescence:a,iridescenceMap:X,iridescenceThicknessMap:ae,sheen:A,sheenColorMap:Me,sheenRoughnessMap:le,specularMap:re,specularColorMap:xe,specularIntensityMap:Ae,transmission:D,transmissionMap:Pe,thicknessMap:E,gradientMap:oe,opaque:c.transparent===!1&&c.blending===Tn&&c.alphaToCoverage===!1,alphaMap:k,alphaTest:se,alphaHash:ue,combine:c.combine,mapUv:ye&&N(c.map.channel),aoMapUv:Be&&N(c.aoMap.channel),lightMapUv:qe&&N(c.lightMap.channel),bumpMapUv:Ne&&N(c.bumpMap.channel),normalMapUv:tt&&N(c.normalMap.channel),displacementMapUv:pt&&N(c.displacementMap.channel),emissiveMapUv:gt&&N(c.emissiveMap.channel),metalnessMapUv:it&&N(c.metalnessMap.channel),roughnessMapUv:st&&N(c.roughnessMap.channel),anisotropyMapUv:F&&N(c.anisotropyMap.channel),clearcoatMapUv:te&&N(c.clearcoatMap.channel),clearcoatNormalMapUv:ie&&N(c.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&N(c.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&N(c.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&N(c.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&N(c.sheenColorMap.channel),sheenRoughnessMapUv:le&&N(c.sheenRoughnessMap.channel),specularMapUv:re&&N(c.specularMap.channel),specularColorMapUv:xe&&N(c.specularColorMap.channel),specularIntensityMapUv:Ae&&N(c.specularIntensityMap.channel),transmissionMapUv:Pe&&N(c.transmissionMap.channel),thicknessMapUv:E&&N(c.thicknessMap.channel),alphaMapUv:k&&N(c.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tt||M),vertexNormals:!!Y.attributes.normal,vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(ye||k),fog:!!P,useFog:c.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:c.wireframe===!1&&(c.flatShading===!0||Y.attributes.normal===void 0&&tt===!1&&(c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshPhysicalMaterial)),sizeAttenuation:c.sizeAttenuation===!0,logarithmicDepthBuffer:I,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Re,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:c.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:ye&&c.map.isVideoTexture===!0&&at.getTransfer(c.map.colorSpace)===je,decodeVideoTextureEmissive:gt&&c.emissiveMap.isVideoTexture===!0&&at.getTransfer(c.emissiveMap.colorSpace)===je,premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===Ut,flipSided:c.side===xt,useDepthPacking:c.depthPacking>=0,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionClipCullDistance:Q&&c.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&c.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:c.customProgramCacheKey()};return ve.vertexUv1s=R.has(1),ve.vertexUv2s=R.has(2),ve.vertexUv3s=R.has(3),R.clear(),ve}function d(c){const g=[];if(c.shaderID?g.push(c.shaderID):(g.push(c.customVertexShaderID),g.push(c.customFragmentShaderID)),c.defines!==void 0)for(const U in c.defines)g.push(U),g.push(c.defines[U]);return c.isRawShaderMaterial===!1&&(l(g,c),L(g,c),g.push(e.outputColorSpace)),g.push(c.customProgramCacheKey),g.join()}function l(c,g){c.push(g.precision),c.push(g.outputColorSpace),c.push(g.envMapMode),c.push(g.envMapCubeUVHeight),c.push(g.mapUv),c.push(g.alphaMapUv),c.push(g.lightMapUv),c.push(g.aoMapUv),c.push(g.bumpMapUv),c.push(g.normalMapUv),c.push(g.displacementMapUv),c.push(g.emissiveMapUv),c.push(g.metalnessMapUv),c.push(g.roughnessMapUv),c.push(g.anisotropyMapUv),c.push(g.clearcoatMapUv),c.push(g.clearcoatNormalMapUv),c.push(g.clearcoatRoughnessMapUv),c.push(g.iridescenceMapUv),c.push(g.iridescenceThicknessMapUv),c.push(g.sheenColorMapUv),c.push(g.sheenRoughnessMapUv),c.push(g.specularMapUv),c.push(g.specularColorMapUv),c.push(g.specularIntensityMapUv),c.push(g.transmissionMapUv),c.push(g.thicknessMapUv),c.push(g.combine),c.push(g.fogExp2),c.push(g.sizeAttenuation),c.push(g.morphTargetsCount),c.push(g.morphAttributeCount),c.push(g.numSunLights),c.push(g.numDirLights),c.push(g.numPointLights),c.push(g.numSpotLights),c.push(g.numSpotLightMaps),c.push(g.numHemiLights),c.push(g.numRectAreaLights),c.push(g.numSunLightShadows),c.push(g.numDirLightShadows),c.push(g.numPointLightShadows),c.push(g.numSpotLightShadows),c.push(g.numSpotLightShadowsWithMaps),c.push(g.numLightProbes),c.push(g.shadowMapType),c.push(g.toneMapping),c.push(g.numClippingPlanes),c.push(g.numClipIntersection),c.push(g.depthPacking)}function L(c,g){f.disableAll(),g.instancing&&f.enable(0),g.instancingColor&&f.enable(1),g.instancingMorph&&f.enable(2),g.matcap&&f.enable(3),g.envMap&&f.enable(4),g.normalMapObjectSpace&&f.enable(5),g.normalMapTangentSpace&&f.enable(6),g.clearcoat&&f.enable(7),g.iridescence&&f.enable(8),g.alphaTest&&f.enable(9),g.vertexColors&&f.enable(10),g.vertexAlphas&&f.enable(11),g.vertexUv1s&&f.enable(12),g.vertexUv2s&&f.enable(13),g.vertexUv3s&&f.enable(14),g.vertexTangents&&f.enable(15),g.anisotropy&&f.enable(16),g.alphaHash&&f.enable(17),g.batching&&f.enable(18),g.dispersion&&f.enable(19),g.retroreflection&&f.enable(24),g.batchingColor&&f.enable(20),g.gradientMap&&f.enable(21),g.packedNormalMap&&f.enable(22),g.vertexNormals&&f.enable(23),c.push(f.mask),f.disableAll(),g.fog&&f.enable(0),g.useFog&&f.enable(1),g.flatShading&&f.enable(2),g.logarithmicDepthBuffer&&f.enable(3),g.reversedDepthBuffer&&f.enable(4),g.skinning&&f.enable(5),g.morphTargets&&f.enable(6),g.morphNormals&&f.enable(7),g.morphColors&&f.enable(8),g.premultipliedAlpha&&f.enable(9),g.shadowMapEnabled&&f.enable(10),g.doubleSided&&f.enable(11),g.flipSided&&f.enable(12),g.useDepthPacking&&f.enable(13),g.dithering&&f.enable(14),g.transmission&&f.enable(15),g.sheen&&f.enable(16),g.opaque&&f.enable(17),g.pointsUvs&&f.enable(18),g.decodeVideoTexture&&f.enable(19),g.decodeVideoTextureEmissive&&f.enable(20),g.alphaToCoverage&&f.enable(21),g.numLightProbeGrids>0&&f.enable(22),g.hasPositionAttribute&&f.enable(23),c.push(f.mask)}function z(c){const g=x[c.type];let U;if(g){const O=Lt[g];U=co.clone(O.uniforms)}else U=c.uniforms;return U}function m(c,g){let U=H.get(g);return U!==void 0?++U.usedTimes:(U=new td(e,g,c,s),T.push(U),H.set(g,U)),U}function S(c){if(--c.usedTimes===0){const g=T.indexOf(c);T[g]=T[T.length-1],T.pop(),H.delete(c.cacheKey),c.destroy()}}function _(c){h.remove(c)}function w(){h.dispose()}return{getParameters:W,getProgramCacheKey:d,getUniforms:z,acquireProgram:m,releaseProgram:S,releaseShaderCache:_,programs:T,dispose:w}}function sd(){let e=new WeakMap;function n(f){return e.has(f)}function t(f){let h=e.get(f);return h===void 0&&(h={},e.set(f,h)),h}function i(f){e.delete(f)}function s(f,h,R){e.get(f)[h]=R}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:o}}function ld(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function xa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ta(){const e=[];let n=0;const t=[],i=[],s=[];function o(){n=0,t.length=0,i.length=0,s.length=0}function f(p){let x=0;return p.isInstancedMesh&&(x+=2),p.isSkinnedMesh&&(x+=1),x}function h(p,x,N,W,d,l){let L=e[n];return L===void 0?(L={id:p.id,object:p,geometry:x,material:N,materialVariant:f(p),groupOrder:W,renderOrder:p.renderOrder,z:d,group:l},e[n]=L):(L.id=p.id,L.object=p,L.geometry=x,L.material=N,L.materialVariant=f(p),L.groupOrder=W,L.renderOrder=p.renderOrder,L.z=d,L.group=l),n++,L}function R(p,x,N,W,d,l,L){L.reversedDepth===!0&&(d=-d);const z=h(p,x,N,W,d,l);N.transmission>0?i.push(z):N.transparent===!0?s.push(z):t.push(z)}function T(p,x,N,W,d,l){const L=h(p,x,N,W,d,l);N.transmission>0?i.unshift(L):N.transparent===!0?s.unshift(L):t.unshift(L)}function H(p,x){t.length>1&&t.sort(p||ld),i.length>1&&i.sort(x||xa),s.length>1&&s.sort(x||xa)}function I(){for(let p=n,x=e.length;p<x;p++){const N=e[p];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:R,unshift:T,finish:I,sort:H}}function cd(){let e=new WeakMap;function n(i,s){const o=e.get(i);let f;return o===void 0?(f=new Ta,e.set(i,[f])):s>=o.length?(f=new Ta,o.push(f)):f=o[s],f}function t(){e=new WeakMap}return{get:n,dispose:t}}function fd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new be,color:new nt};break;case"SpotLight":t={position:new be,direction:new be,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new be,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new be,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new be,halfWidth:new be,halfHeight:new be};break}return e[n.id]=t,t}}}function dd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ud=0;function pd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function hd(e){const n=new fd,t=dd(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let T=0;T<9;T++)i.probe.push(new be);const s=new be,o=new tn,f=new tn;function h(T){let H=0,I=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,N=0,W=0,d=0,l=0,L=0,z=0,m=0,S=0,_=0,w=0,c=0,g=0,U=0;T.sort(pd);for(let G=0,q=T.length;G<q;G++){const P=T[G],Y=P.color,j=P.intensity,K=P.distance;let ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===nn?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)H+=Y.r*j,I+=Y.g*j,p+=Y.b*j;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],j);U++}else if(P.isSunLight){const Z=n.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[N]=ee,i.sunShadowMap[N]=ne;const Ce=J.getViewportCount();for(let Re=0;Re<Ce;Re++)i.sunShadowMatrix[W+Re]=J.getMatrix(Re),i.sunShadowCascade[W+Re]=J._cascadeData[Re];W+=Ce,N++}i.sun[x]=Z,x++}else if(P.isDirectionalLight){const Z=n.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[d]=ee,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=P.shadow.matrix,S++}i.directional[d]=Z,d++}else if(P.isSpotLight){const Z=n.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(Y).multiplyScalar(j),Z.distance=K,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[L]=Z;const J=P.shadow;if(P.map&&(i.spotLightMap[c]=P.map,c++,J.updateMatrices(P),P.castShadow&&g++),i.spotLightMatrix[L]=J.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[L]=ee,i.spotShadowMap[L]=ne,w++}L++}else if(P.isRectAreaLight){const Z=n.get(P);Z.color.copy(Y).multiplyScalar(j),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[z]=Z,z++}else if(P.isPointLight){const Z=n.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[l]=ee,i.pointShadowMap[l]=ne,i.pointShadowMatrix[l]=P.shadow.matrix,_++}i.point[l]=Z,l++}else if(P.isHemisphereLight){const Z=n.get(P);Z.skyColor.copy(P.color).multiplyScalar(j),Z.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[m]=Z,m++}}z>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=H,i.ambient[1]=I,i.ambient[2]=p;const O=i.hash;(O.sunLength!==x||O.directionalLength!==d||O.pointLength!==l||O.spotLength!==L||O.rectAreaLength!==z||O.hemiLength!==m||O.numSunShadows!==N||O.numDirectionalShadows!==S||O.numPointShadows!==_||O.numSpotShadows!==w||O.numSpotMaps!==c||O.numLightProbes!==U)&&(i.sun.length=x,i.directional.length=d,i.spot.length=L,i.rectArea.length=z,i.point.length=l,i.hemi.length=m,i.sunShadow.length=N,i.sunShadowMap.length=N,i.sunShadowMatrix.length=W,i.sunShadowCascade.length=W,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+c-g,i.spotLightMap.length=c,i.numSpotLightShadowsWithMaps=g,i.numLightProbes=U,O.sunLength=x,O.directionalLength=d,O.pointLength=l,O.spotLength=L,O.rectAreaLength=z,O.hemiLength=m,O.numSunShadows=N,O.numDirectionalShadows=S,O.numPointShadows=_,O.numSpotShadows=w,O.numSpotMaps=c,O.numLightProbes=U,i.version=ud++)}function R(T,H){let I=0,p=0,x=0,N=0,W=0,d=0;const l=H.matrixWorldInverse;for(let L=0,z=T.length;L<z;L++){const m=T[L];if(m.isSunLight){const S=i.sun[I];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(l),I++}else if(m.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(l),p++}else if(m.isSpotLight){const S=i.spot[N];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(l),S.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(l),N++}else if(m.isRectAreaLight){const S=i.rectArea[W];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(l),f.identity(),o.copy(m.matrixWorld),o.premultiply(l),f.extractRotation(o),S.halfWidth.set(m.width*.5,0,0),S.halfHeight.set(0,m.height*.5,0),S.halfWidth.applyMatrix4(f),S.halfHeight.applyMatrix4(f),W++}else if(m.isPointLight){const S=i.point[x];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(l),x++}else if(m.isHemisphereLight){const S=i.hemi[d];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(l),d++}}}return{setup:h,setupView:R,state:i}}function Aa(e){const n=new hd(e),t=[],i=[],s=[];function o(p){I.camera=p,t.length=0,i.length=0,s.length=0}function f(p){t.push(p)}function h(p){i.push(p)}function R(p){s.push(p)}function T(){n.setup(t)}function H(p){n.setupView(t,p)}const I={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:I,setupLights:T,setupLightsView:H,pushLight:f,pushShadow:h,pushLightProbeGrid:R}}function md(e){let n=new WeakMap;function t(s,o=0){const f=n.get(s);let h;return f===void 0?(h=new Aa(e),n.set(s,[h])):o>=f.length?(h=new Aa(e),f.push(h)):h=f[o],h}function i(){n=new WeakMap}return{get:t,dispose:i}}const _d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gd=`uniform sampler2D shadow_pass;
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
}`,vd=[new be(1,0,0),new be(-1,0,0),new be(0,1,0),new be(0,-1,0),new be(0,0,1),new be(0,0,-1)],Sd=[new be(0,-1,0),new be(0,-1,0),new be(0,0,1),new be(0,0,-1),new be(0,-1,0),new be(0,-1,0)],Ra=new tn,cn=new be,Yn=new be;function Ed(e,n,t){let i=new Pa;const s=new et,o=new et,f=new Et,h=new kr,R=new zr,T={},H=t.maxTextureSize,I={[un]:xt,[xt]:un,[Ut]:Ut},p=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:_d,fragmentShader:gd}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const N=new Cn;N.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const W=new Ft(N,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mn;let l=this.type;this.render=function(_,w,c){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;this.type===Xr&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mn);const g=e.getRenderTarget(),U=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),G=e.state;G.setBlending(Nt),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=l!==this.type;q&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Y=>Y.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Y=_.length;P<Y;P++){const j=_[P],K=j.shadow;if(K===void 0){We("WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ne=K.getFrameExtents();s.multiply(ne),o.copy(K.mapSize),(s.x>H||s.y>H)&&(s.x>H&&(o.x=Math.floor(H/ne.x),s.x=o.x*ne.x,K.mapSize.x=o.x),s.y>H&&(o.y=Math.floor(H/ne.y),s.y=o.y*ne.y,K.mapSize.y=o.y));const Z=e.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===fn){if(j.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Rt(s.x,s.y,{format:nn,type:yt,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),K.map.texture.name=j.name+".shadowMap",K.map.depthTexture=new Rn(s.x,s.y,Vt),K.map.depthTexture.name=j.name+".shadowMapDepth",K.map.depthTexture.format=an,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=zt,K.map.depthTexture.magFilter=zt}else j.isPointLight?(K.map=new Ja(s.x),K.map.depthTexture=new Yr(s.x,Xt)):(K.map=new Rt(s.x,s.y),K.map.depthTexture=new Rn(s.x,s.y,Xt)),K.map.depthTexture.name=j.name+".shadowMap",K.map.depthTexture.format=an,this.type===Mn?(K.map.depthTexture.compareFunction=Z?ti:ni,K.map.depthTexture.minFilter=Mt,K.map.depthTexture.magFilter=Mt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=zt,K.map.depthTexture.magFilter=zt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const J=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();j.isPointLight!==!0&&K.updateMatrices(j,c);for(let ee=0;ee<J;ee++){const Ce=K.getCamera(ee);if(j.isPointLight){const Re=K.camera,rt=K.matrix,ze=j.distance||Re.far;ze!==Re.far&&(Re.far=ze,Re.updateProjectionMatrix()),cn.setFromMatrixPosition(j.matrixWorld),Re.position.copy(cn),Yn.copy(Re.position),Yn.add(vd[ee]),Re.up.copy(Sd[ee]),Re.lookAt(Yn),Re.updateMatrixWorld(),rt.makeTranslation(-cn.x,-cn.y,-cn.z),Ra.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ra,Re.coordinateSystem,Re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)e.setRenderTarget(K.map,ee),e.clear();else{ee===0&&(e.setRenderTarget(K.map),e.clear());const Re=K.getViewport(ee);f.set(o.x*Re.x,o.y*Re.y,o.x*Re.z,o.y*Re.w),G.viewport(f)}i=K.getFrustum(ee),m(w,c,Ce,j,this.type)}K.isPointLightShadow!==!0&&this.type===fn&&L(K,c),K.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(g,U,O)};function L(_,w){const c=n.update(W);p.defines.VSM_SAMPLES!==_.blurSamples&&(p.defines.VSM_SAMPLES=_.blurSamples,x.defines.VSM_SAMPLES=_.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),_.mapPass===null?_.mapPass=new Rt(s.x,s.y,{format:nn,type:yt}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),p.uniforms.shadow_pass.value=_.map.depthTexture,p.uniforms.resolution.value.set(_.map.width,_.map.height),p.uniforms.radius.value=_.radius,e.setRenderTarget(_.mapPass),e.clear(),e.renderBufferDirect(w,null,c,p,W,null),x.uniforms.shadow_pass.value=_.mapPass.texture,x.uniforms.resolution.value.set(_.map.width,_.map.height),x.uniforms.radius.value=_.radius,e.setRenderTarget(_.map),e.clear(),e.renderBufferDirect(w,null,c,x,W,null)}function z(_,w,c,g){let U=null;const O=c.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(O!==void 0)U=O;else if(U=c.isPointLight===!0?R:h,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const G=U.uuid,q=w.uuid;let P=T[G];P===void 0&&(P={},T[G]=P);let Y=P[q];Y===void 0&&(Y=U.clone(),P[q]=Y,w.addEventListener("dispose",S)),U=Y}if(U.visible=w.visible,U.wireframe=w.wireframe,g===fn?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:I[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,c.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const G=e.properties.get(U);G.light=c}return U}function m(_,w,c,g,U){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&U===fn)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,_.matrixWorld);const q=n.update(_),P=_.material;if(Array.isArray(P)){const Y=q.groups;for(let j=0,K=Y.length;j<K;j++){const ne=Y[j],Z=P[ne.materialIndex];if(Z&&Z.visible){const J=z(_,Z,g,U);_.onBeforeShadow(e,_,w,c,q,J,ne),e.renderBufferDirect(c,null,q,J,_,ne),_.onAfterShadow(e,_,w,c,q,J,ne)}}}else if(P.visible){const Y=z(_,P,g,U);_.onBeforeShadow(e,_,w,c,q,Y,null),e.renderBufferDirect(c,null,q,Y,_,null),_.onAfterShadow(e,_,w,c,q,Y,null)}}const G=_.children;for(let q=0,P=G.length;q<P;q++)m(G[q],w,c,g,U)}function S(_){_.target.removeEventListener("dispose",S);for(const c in T){const g=T[c],U=_.target.uuid;U in g&&(g[U].dispose(),delete g[U])}}}function Md(e,n){function t(){let E=!1;const oe=new Et;let k=null;const se=new Et(0,0,0,0);return{setMask:function(ue){k!==ue&&!E&&(e.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){E=ue},setClear:function(ue,Q,Te,ve,Ze){Ze===!0&&(ue*=ve,Q*=ve,Te*=ve),oe.set(ue,Q,Te,ve),se.equals(oe)===!1&&(e.clearColor(ue,Q,Te,ve),se.copy(oe))},reset:function(){E=!1,k=null,se.set(-1,0,0,0)}}}function i(){let E=!1,oe=!1,k=null,se=null,ue=null;return{setReversed:function(Q){if(oe!==Q){const Te=n.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;const ve=ue;ue=null,this.setClear(ve)}},getReversed:function(){return oe},setTest:function(Q){Q?$(e.DEPTH_TEST):Ee(e.DEPTH_TEST)},setMask:function(Q){k!==Q&&!E&&(e.depthMask(Q),k=Q)},setFunc:function(Q){if(oe&&(Q=Do[Q]),se!==Q){switch(Q){case ro:e.depthFunc(e.NEVER);break;case ao:e.depthFunc(e.ALWAYS);break;case io:e.depthFunc(e.LESS);break;case gi:e.depthFunc(e.LEQUAL);break;case no:e.depthFunc(e.EQUAL);break;case to:e.depthFunc(e.GEQUAL);break;case eo:e.depthFunc(e.GREATER);break;case Jr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=Q}},setLocked:function(Q){E=Q},setClear:function(Q){ue!==Q&&(ue=Q,oe&&(Q=1-Q),e.clearDepth(Q))},reset:function(){E=!1,k=null,se=null,ue=null,oe=!1}}}function s(){let E=!1,oe=null,k=null,se=null,ue=null,Q=null,Te=null,ve=null,Ze=null;return{setTest:function(Ge){E||(Ge?$(e.STENCIL_TEST):Ee(e.STENCIL_TEST))},setMask:function(Ge){oe!==Ge&&!E&&(e.stencilMask(Ge),oe=Ge)},setFunc:function(Ge,At,bt){(k!==Ge||se!==At||ue!==bt)&&(e.stencilFunc(Ge,At,bt),k=Ge,se=At,ue=bt)},setOp:function(Ge,At,bt){(Q!==Ge||Te!==At||ve!==bt)&&(e.stencilOp(Ge,At,bt),Q=Ge,Te=At,ve=bt)},setLocked:function(Ge){E=Ge},setClear:function(Ge){Ze!==Ge&&(e.clearStencil(Ge),Ze=Ge)},reset:function(){E=!1,oe=null,k=null,se=null,ue=null,Q=null,Te=null,ve=null,Ze=null}}}const o=new t,f=new i,h=new s,R=new WeakMap,T=new WeakMap;let H={},I={},p={},x=new WeakMap,N=[],W=null,d=!1,l=null,L=null,z=null,m=null,S=null,_=null,w=null,c=new nt(0,0,0),g=0,U=!1,O=null,G=null,q=null,P=null,Y=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ne=0;const Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=ne>=2);let J=null,ee={};const Ce=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),rt=new Et().fromArray(Ce),ze=new Et().fromArray(Re);function Xe(E,oe,k,se){const ue=new Uint8Array(4),Q=e.createTexture();e.bindTexture(E,Q),e.texParameteri(E,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(E,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Te=0;Te<k;Te++)E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY?e.texImage3D(oe,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,ue):e.texImage2D(oe+Te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ue);return Q}const V={};V[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),f.setClear(1),h.setClear(0),$(e.DEPTH_TEST),f.setFunc(gi),Ne(!1),tt(Si),$(e.CULL_FACE),Be(Nt);function $(E){H[E]!==!0&&(e.enable(E),H[E]=!0)}function Ee(E){H[E]!==!1&&(e.disable(E),H[E]=!1)}function we(E,oe){return p[E]!==oe?(e.bindFramebuffer(E,oe),p[E]=oe,E===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=oe),E===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(E,oe){let k=N,se=!1;if(E){k=x.get(oe),k===void 0&&(k=[],x.set(oe,k));const ue=E.textures;if(k.length!==ue.length||k[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,Te=ue.length;Q<Te;Q++)k[Q]=e.COLOR_ATTACHMENT0+Q;k.length=ue.length,se=!0}}else k[0]!==e.BACK&&(k[0]=e.BACK,se=!0);se&&e.drawBuffers(k)}function ye(E){return W!==E?(e.useProgram(E),W=E,!0):!1}const ct={[sn]:e.FUNC_ADD,[vr]:e.FUNC_SUBTRACT,[gr]:e.FUNC_REVERSE_SUBTRACT};ct[wo]=e.MIN,ct[Uo]=e.MAX;const Ue={[Ir]:e.ZERO,[Ur]:e.ONE,[wr]:e.SRC_COLOR,[Dr]:e.SRC_ALPHA,[Lr]:e.SRC_ALPHA_SATURATE,[Pr]:e.DST_COLOR,[Cr]:e.DST_ALPHA,[br]:e.ONE_MINUS_SRC_COLOR,[Rr]:e.ONE_MINUS_SRC_ALPHA,[Ar]:e.ONE_MINUS_DST_COLOR,[Tr]:e.ONE_MINUS_DST_ALPHA,[xr]:e.CONSTANT_COLOR,[Mr]:e.ONE_MINUS_CONSTANT_COLOR,[Er]:e.CONSTANT_ALPHA,[Sr]:e.ONE_MINUS_CONSTANT_ALPHA};function Be(E,oe,k,se,ue,Q,Te,ve,Ze,Ge){if(E===Nt){d===!0&&(Ee(e.BLEND),d=!1);return}if(d===!1&&($(e.BLEND),d=!0),E!==lo){if(E!==l||Ge!==U){if((L!==sn||S!==sn)&&(e.blendEquation(e.FUNC_ADD),L=sn,S=sn),Ge)switch(E){case Tn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xi:e.blendFunc(e.ONE,e.ONE);break;case Mi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ei:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Je("WebGLState: Invalid blending: ",E);break}else switch(E){case Tn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Mi:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ei:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",E);break}z=null,m=null,_=null,w=null,c.set(0,0,0),g=0,l=E,U=Ge}return}ue=ue||oe,Q=Q||k,Te=Te||se,(oe!==L||ue!==S)&&(e.blendEquationSeparate(ct[oe],ct[ue]),L=oe,S=ue),(k!==z||se!==m||Q!==_||Te!==w)&&(e.blendFuncSeparate(Ue[k],Ue[se],Ue[Q],Ue[Te]),z=k,m=se,_=Q,w=Te),(ve.equals(c)===!1||Ze!==g)&&(e.blendColor(ve.r,ve.g,ve.b,Ze),c.copy(ve),g=Ze),l=E,U=!1}function qe(E,oe){E.side===Ut?Ee(e.CULL_FACE):$(e.CULL_FACE);let k=E.side===xt;oe&&(k=!k),Ne(k),E.blending===Tn&&E.transparent===!1?Be(Nt):Be(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),f.setFunc(E.depthFunc),f.setTest(E.depthTest),f.setMask(E.depthWrite),o.setMask(E.colorWrite);const se=E.stencilWrite;h.setTest(se),se&&(h.setMask(E.stencilWriteMask),h.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),h.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),gt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):Ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(E){O!==E&&(E?e.frontFace(e.CW):e.frontFace(e.CCW),O=E)}function tt(E){E!==oo?($(e.CULL_FACE),E!==G&&(E===Si?e.cullFace(e.BACK):E===so?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ee(e.CULL_FACE),G=E}function pt(E){E!==q&&(K&&e.lineWidth(E),q=E)}function gt(E,oe,k){E?($(e.POLYGON_OFFSET_FILL),(P!==oe||Y!==k)&&(P=oe,Y=k,f.getReversed()&&(oe=-oe),e.polygonOffset(oe,k))):Ee(e.POLYGON_OFFSET_FILL)}function it(E){E?$(e.SCISSOR_TEST):Ee(e.SCISSOR_TEST)}function st(E){E===void 0&&(E=e.TEXTURE0+j-1),J!==E&&(e.activeTexture(E),J=E)}function M(E,oe,k){k===void 0&&(J===null?k=e.TEXTURE0+j-1:k=J);let se=ee[k];se===void 0&&(se={type:void 0,texture:void 0},ee[k]=se),(se.type!==E||se.texture!==oe)&&(J!==k&&(e.activeTexture(k),J=k),e.bindTexture(E,oe||V[E]),se.type=E,se.texture=oe)}function ht(){const E=ee[J];E!==void 0&&E.type!==void 0&&(e.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Ve(){try{e.compressedTexImage2D(...arguments)}catch(E){Je("WebGLState:",E)}}function u(){try{e.compressedTexImage3D(...arguments)}catch(E){Je("WebGLState:",E)}}function a(){try{e.texSubImage2D(...arguments)}catch(E){Je("WebGLState:",E)}}function A(){try{e.texSubImage3D(...arguments)}catch(E){Je("WebGLState:",E)}}function D(){try{e.compressedTexSubImage2D(...arguments)}catch(E){Je("WebGLState:",E)}}function F(){try{e.compressedTexSubImage3D(...arguments)}catch(E){Je("WebGLState:",E)}}function te(){try{e.texStorage2D(...arguments)}catch(E){Je("WebGLState:",E)}}function ie(){try{e.texStorage3D(...arguments)}catch(E){Je("WebGLState:",E)}}function B(){try{e.texImage2D(...arguments)}catch(E){Je("WebGLState:",E)}}function X(){try{e.texImage3D(...arguments)}catch(E){Je("WebGLState:",E)}}function ae(E){return I[E]!==void 0?I[E]:e.getParameter(E)}function Me(E,oe){I[E]!==oe&&(e.pixelStorei(E,oe),I[E]=oe)}function le(E){rt.equals(E)===!1&&(e.scissor(E.x,E.y,E.z,E.w),rt.copy(E))}function re(E){ze.equals(E)===!1&&(e.viewport(E.x,E.y,E.z,E.w),ze.copy(E))}function xe(E,oe){let k=T.get(oe);k===void 0&&(k=new WeakMap,T.set(oe,k));let se=k.get(E);se===void 0&&(se=e.getUniformBlockIndex(oe,E.name),k.set(E,se))}function Ae(E,oe){const se=T.get(oe).get(E);R.get(oe)!==se&&(e.uniformBlockBinding(oe,se,E.__bindingPointIndex),R.set(oe,se))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),f.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),H={},I={},J=null,ee={},p={},x=new WeakMap,N=[],W=null,d=!1,l=null,L=null,z=null,m=null,S=null,_=null,w=null,c=new nt(0,0,0),g=0,U=!1,O=null,G=null,q=null,P=null,Y=null,rt.set(0,0,e.canvas.width,e.canvas.height),ze.set(0,0,e.canvas.width,e.canvas.height),o.reset(),f.reset(),h.reset()}return{buffers:{color:o,depth:f,stencil:h},enable:$,disable:Ee,bindFramebuffer:we,drawBuffers:me,useProgram:ye,setBlending:Be,setMaterial:qe,setFlipSided:Ne,setCullFace:tt,setLineWidth:pt,setPolygonOffset:gt,setScissorTest:it,activeTexture:st,bindTexture:M,unbindTexture:ht,compressedTexImage2D:Ve,compressedTexImage3D:u,texImage2D:B,texImage3D:X,pixelStorei:Me,getParameter:ae,updateUBOMapping:xe,uniformBlockBinding:Ae,texStorage2D:te,texStorage3D:ie,texSubImage2D:a,texSubImage3D:A,compressedTexSubImage2D:D,compressedTexSubImage3D:F,scissor:le,viewport:re,reset:Pe}}function xd(e,n,t,i,s,o,f){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new et,H=new WeakMap,I=new Set;let p;const x=new WeakMap;let N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function W(u,a){return N?new OffscreenCanvas(u,a):Ao("canvas")}function d(u,a,A){let D=1;const F=Ve(u);if((F.width>A||F.height>A)&&(D=A/Math.max(F.width,F.height)),D<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const te=Math.floor(D*F.width),ie=Math.floor(D*F.height);p===void 0&&(p=W(te,ie));const B=a?W(te,ie):p;return B.width=te,B.height=ie,B.getContext("2d").drawImage(u,0,0,te,ie),We("WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+te+"x"+ie+")."),B}else return"data"in u&&We("WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),u;return u}function l(u){return u.generateMipmaps}function L(u){e.generateMipmap(u)}function z(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(u,a,A,D,F,te=!1){if(u!==null){if(e[u]!==void 0)return e[u];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let ie;D&&(ie=n.get("EXT_texture_norm16"),ie||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=a;if(a===e.RED&&(A===e.FLOAT&&(B=e.R32F),A===e.HALF_FLOAT&&(B=e.R16F),A===e.UNSIGNED_BYTE&&(B=e.R8),A===e.UNSIGNED_SHORT&&ie&&(B=ie.R16_EXT),A===e.SHORT&&ie&&(B=ie.R16_SNORM_EXT)),a===e.RED_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.R8UI),A===e.UNSIGNED_SHORT&&(B=e.R16UI),A===e.UNSIGNED_INT&&(B=e.R32UI),A===e.BYTE&&(B=e.R8I),A===e.SHORT&&(B=e.R16I),A===e.INT&&(B=e.R32I)),a===e.RG&&(A===e.FLOAT&&(B=e.RG32F),A===e.HALF_FLOAT&&(B=e.RG16F),A===e.UNSIGNED_BYTE&&(B=e.RG8),A===e.UNSIGNED_SHORT&&ie&&(B=ie.RG16_EXT),A===e.SHORT&&ie&&(B=ie.RG16_SNORM_EXT)),a===e.RG_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RG8UI),A===e.UNSIGNED_SHORT&&(B=e.RG16UI),A===e.UNSIGNED_INT&&(B=e.RG32UI),A===e.BYTE&&(B=e.RG8I),A===e.SHORT&&(B=e.RG16I),A===e.INT&&(B=e.RG32I)),a===e.RGB_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RGB8UI),A===e.UNSIGNED_SHORT&&(B=e.RGB16UI),A===e.UNSIGNED_INT&&(B=e.RGB32UI),A===e.BYTE&&(B=e.RGB8I),A===e.SHORT&&(B=e.RGB16I),A===e.INT&&(B=e.RGB32I)),a===e.RGBA_INTEGER&&(A===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),A===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),A===e.UNSIGNED_INT&&(B=e.RGBA32UI),A===e.BYTE&&(B=e.RGBA8I),A===e.SHORT&&(B=e.RGBA16I),A===e.INT&&(B=e.RGBA32I)),a===e.RGB&&(A===e.UNSIGNED_SHORT&&ie&&(B=ie.RGB16_EXT),A===e.SHORT&&ie&&(B=ie.RGB16_SNORM_EXT),A===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),A===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),a===e.RGBA){const X=te?Wa:at.getTransfer(F);A===e.FLOAT&&(B=e.RGBA32F),A===e.HALF_FLOAT&&(B=e.RGBA16F),A===e.UNSIGNED_BYTE&&(B=X===je?e.SRGB8_ALPHA8:e.RGBA8),A===e.UNSIGNED_SHORT&&ie&&(B=ie.RGBA16_EXT),A===e.SHORT&&ie&&(B=ie.RGBA16_SNORM_EXT),A===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),A===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&n.get("EXT_color_buffer_float"),B}function S(u,a){let A;return u?a===null||a===Xt||a===pn?A=e.DEPTH24_STENCIL8:a===Vt?A=e.DEPTH32F_STENCIL8:a===bn&&(A=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Xt||a===pn?A=e.DEPTH_COMPONENT24:a===Vt?A=e.DEPTH_COMPONENT32F:a===bn&&(A=e.DEPTH_COMPONENT16),A}function _(u,a){return l(u)===!0||u.isFramebufferTexture&&u.minFilter!==zt&&u.minFilter!==Mt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function w(u){const a=u.target;a.removeEventListener("dispose",w),g(a),a.isVideoTexture&&H.delete(a),a.isHTMLTexture&&I.delete(a)}function c(u){const a=u.target;a.removeEventListener("dispose",c),O(a)}function g(u){const a=i.get(u);if(a.__webglInit===void 0)return;const A=u.source,D=x.get(A);if(D){const F=D[a.__cacheKey];F.usedTimes--,F.usedTimes===0&&U(u),Object.keys(D).length===0&&x.delete(A)}i.remove(u)}function U(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const A=u.source,D=x.get(A);delete D[a.__cacheKey],f.memory.textures--}function O(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(a.__webglFramebuffer[D]))for(let F=0;F<a.__webglFramebuffer[D].length;F++)e.deleteFramebuffer(a.__webglFramebuffer[D][F]);else e.deleteFramebuffer(a.__webglFramebuffer[D]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[D])}else{if(Array.isArray(a.__webglFramebuffer))for(let D=0;D<a.__webglFramebuffer.length;D++)e.deleteFramebuffer(a.__webglFramebuffer[D]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let D=0;D<a.__webglColorRenderbuffer.length;D++)a.__webglColorRenderbuffer[D]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[D]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const A=u.textures;for(let D=0,F=A.length;D<F;D++){const te=i.get(A[D]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),f.memory.textures--),i.remove(A[D])}i.remove(u)}let G=0;function q(){G=0}function P(){return G}function Y(u){G=u}function j(){const u=G;return u>=s.maxTextures&&We("WebGLTextures: Trying to use "+(u+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,u}function K(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function ne(u,a){const A=i.get(u);if(u.isVideoTexture&&M(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&A.__version!==u.version){const D=u.image;if(D===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(A,u,a);return}}else u.isExternalTexture&&(A.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+a)}function Z(u,a){const A=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&A.__version!==u.version){Ee(A,u,a);return}else u.isExternalTexture&&(A.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+a)}function J(u,a){const A=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&A.__version!==u.version){Ee(A,u,a);return}t.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+a)}function ee(u,a){const A=i.get(u);if(u.isCubeDepthTexture!==!0&&u.version>0&&A.__version!==u.version){we(A,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+a)}const Ce={[yr]:e.REPEAT,[qn]:e.CLAMP_TO_EDGE,[Nr]:e.MIRRORED_REPEAT},Re={[zt]:e.NEAREST,[Or]:e.NEAREST_MIPMAP_NEAREST,[gn]:e.NEAREST_MIPMAP_LINEAR,[Mt]:e.LINEAR,[In]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},rt={[Wr]:e.NEVER,[Vr]:e.ALWAYS,[Hr]:e.LESS,[ni]:e.LEQUAL,[Gr]:e.EQUAL,[ti]:e.GEQUAL,[Br]:e.GREATER,[Fr]:e.NOTEQUAL};function ze(u,a){if(a.type===Vt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Mt||a.magFilter===In||a.magFilter===gn||a.magFilter===$t||a.minFilter===Mt||a.minFilter===In||a.minFilter===gn||a.minFilter===$t)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,Ce[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,Ce[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,Ce[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Re[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Re[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,rt[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===zt||a.minFilter!==gn&&a.minFilter!==$t||a.type===Vt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const A=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,s.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Xe(u,a){let A=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",w));const D=a.source;let F=x.get(D);F===void 0&&(F={},x.set(D,F));const te=K(a);if(te!==u.__cacheKey){F[te]===void 0&&(F[te]={texture:e.createTexture(),usedTimes:0},f.memory.textures++,A=!0),F[te].usedTimes++;const ie=F[u.__cacheKey];ie!==void 0&&(F[u.__cacheKey].usedTimes--,ie.usedTimes===0&&U(a)),u.__cacheKey=te,u.__webglTexture=F[te].texture}return A}function V(u,a,A){return Math.floor(Math.floor(u/A)/a)}function $(u,a,A,D){const te=u.updateRanges;if(te.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,A,D,a.data);else{te.sort((Me,le)=>Me.start-le.start);let ie=0;for(let Me=1;Me<te.length;Me++){const le=te[ie],re=te[Me],xe=le.start+le.count,Ae=V(re.start,a.width,4),Pe=V(le.start,a.width,4);re.start<=xe+1&&Ae===Pe&&V(re.start+re.count-1,a.width,4)===Ae?le.count=Math.max(le.count,re.start+re.count-le.start):(++ie,te[ie]=re)}te.length=ie+1;const B=t.getParameter(e.UNPACK_ROW_LENGTH),X=t.getParameter(e.UNPACK_SKIP_PIXELS),ae=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let Me=0,le=te.length;Me<le;Me++){const re=te[Me],xe=Math.floor(re.start/4),Ae=Math.ceil(re.count/4),Pe=xe%a.width,E=Math.floor(xe/a.width),oe=Ae,k=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(e.UNPACK_SKIP_ROWS,E),t.texSubImage2D(e.TEXTURE_2D,0,Pe,E,oe,k,A,D,a.data)}u.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,B),t.pixelStorei(e.UNPACK_SKIP_PIXELS,X),t.pixelStorei(e.UNPACK_SKIP_ROWS,ae)}}function Ee(u,a,A){let D=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(D=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(D=e.TEXTURE_3D);const F=Xe(u,a),te=a.source;t.bindTexture(D,u.__webglTexture,e.TEXTURE0+A);const ie=i.get(te);if(te.version!==ie.__version||F===!0){if(t.activeTexture(e.TEXTURE0+A),(typeof ImageBitmap<"u"&&a.image instanceof ImageBitmap)===!1){const k=at.getPrimaries(at.workingColorSpace),se=a.colorSpace===Zt?null:at.getPrimaries(a.colorSpace),ue=a.colorSpace===Zt||k===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let X=d(a.image,!1,s.maxTextureSize);X=ht(a,X);const ae=o.convert(a.format,a.colorSpace),Me=o.convert(a.type);let le=m(a.internalFormat,ae,Me,a.normalized,a.colorSpace,a.isVideoTexture);ze(D,a);let re;const xe=a.mipmaps,Ae=a.isVideoTexture!==!0,Pe=ie.__version===void 0||F===!0,E=te.dataReady,oe=_(a,X);if(a.isDepthTexture)le=S(a.format===jt,a.type),Pe&&(Ae?t.texStorage2D(e.TEXTURE_2D,1,le,X.width,X.height):t.texImage2D(e.TEXTURE_2D,0,le,X.width,X.height,0,ae,Me,null));else if(a.isDataTexture)if(xe.length>0){Ae&&Pe&&t.texStorage2D(e.TEXTURE_2D,oe,le,xe[0].width,xe[0].height);for(let k=0,se=xe.length;k<se;k++)re=xe[k],Ae?E&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,re.width,re.height,ae,Me,re.data):t.texImage2D(e.TEXTURE_2D,k,le,re.width,re.height,0,ae,Me,re.data);a.generateMipmaps=!1}else Ae?(Pe&&t.texStorage2D(e.TEXTURE_2D,oe,le,X.width,X.height),E&&$(a,X,ae,Me)):t.texImage2D(e.TEXTURE_2D,0,le,X.width,X.height,0,ae,Me,X.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){Ae&&Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,oe,le,xe[0].width,xe[0].height,X.depth);for(let k=0,se=xe.length;k<se;k++)if(re=xe[k],a.format!==It)if(ae!==null)if(Ae){if(E)if(a.layerUpdates.size>0){const ue=ea(re.width,re.height,a.format,a.type);for(const Q of a.layerUpdates){const Te=re.data.subarray(Q*ue/re.data.BYTES_PER_ELEMENT,(Q+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,Q,re.width,re.height,1,ae,Te)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,re.width,re.height,X.depth,ae,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,le,re.width,re.height,X.depth,0,re.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?E&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,re.width,re.height,X.depth,ae,Me,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,k,le,re.width,re.height,X.depth,0,ae,Me,re.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{Ae&&Pe&&t.texStorage2D(e.TEXTURE_2D,oe,le,xe[0].width,xe[0].height);for(let k=0,se=xe.length;k<se;k++)re=xe[k],a.format!==It?ae!==null?Ae?E&&t.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(e.TEXTURE_2D,k,le,re.width,re.height,0,re.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?E&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,re.width,re.height,ae,Me,re.data):t.texImage2D(e.TEXTURE_2D,k,le,re.width,re.height,0,ae,Me,re.data)}else if(a.isDataArrayTexture)if(Ae){if(Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,oe,le,X.width,X.height,X.depth),E)if(a.layerUpdates.size>0){const k=ea(X.width,X.height,a.format,a.type);for(const se of a.layerUpdates){const ue=X.data.subarray(se*k/X.data.BYTES_PER_ELEMENT,(se+1)*k/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,X.width,X.height,1,ae,Me,ue)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ae,Me,X.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,le,X.width,X.height,X.depth,0,ae,Me,X.data);else if(a.isData3DTexture)Ae?(Pe&&t.texStorage3D(e.TEXTURE_3D,oe,le,X.width,X.height,X.depth),E&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ae,Me,X.data)):t.texImage3D(e.TEXTURE_3D,0,le,X.width,X.height,X.depth,0,ae,Me,X.data);else if(a.isFramebufferTexture){if(Pe)if(Ae)t.texStorage2D(e.TEXTURE_2D,oe,le,X.width,X.height);else{let k=X.width,se=X.height;for(let ue=0;ue<oe;ue++)t.texImage2D(e.TEXTURE_2D,ue,le,k,se,0,ae,Me,null),k>>=1,se>>=1}}else if(a.isHTMLTexture){if("texElementImage2D"in e){const k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),X.parentNode!==k){k.appendChild(X),I.add(a),k.onpaint=se=>{const ue=se.changedElements;for(const Q of I)ue.includes(Q.image)&&(Q.needsUpdate=!0)},k.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,X);else{const ue=e.RGBA,Q=e.RGBA,Te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ue,Q,Te,X)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Ae&&Pe){const k=Ve(xe[0]);t.texStorage2D(e.TEXTURE_2D,oe,le,k.width,k.height)}for(let k=0,se=xe.length;k<se;k++)re=xe[k],Ae?E&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,ae,Me,re):t.texImage2D(e.TEXTURE_2D,k,le,ae,Me,re);a.generateMipmaps=!1}else if(Ae){if(Pe){const k=Ve(X);t.texStorage2D(e.TEXTURE_2D,oe,le,k.width,k.height)}E&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,Me,X)}else t.texImage2D(e.TEXTURE_2D,0,le,ae,Me,X);l(a)&&L(D),ie.__version=te.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function we(u,a,A){if(a.image.length!==6)return;const D=Xe(u,a),F=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+A);const te=i.get(F);if(F.version!==te.__version||D===!0){t.activeTexture(e.TEXTURE0+A);const ie=at.getPrimaries(at.workingColorSpace),B=a.colorSpace===Zt?null:at.getPrimaries(a.colorSpace),X=a.colorSpace===Zt||ie===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const ae=a.isCompressedTexture||a.image[0].isCompressedTexture,Me=a.image[0]&&a.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!ae&&!Me?le[Q]=d(a.image[Q],!0,s.maxCubemapSize):le[Q]=Me?a.image[Q].image:a.image[Q],le[Q]=ht(a,le[Q]);const re=le[0],xe=o.convert(a.format,a.colorSpace),Ae=o.convert(a.type),Pe=m(a.internalFormat,xe,Ae,a.normalized,a.colorSpace),E=a.isVideoTexture!==!0,oe=te.__version===void 0||D===!0,k=F.dataReady;let se=_(a,re);ze(e.TEXTURE_CUBE_MAP,a);let ue;if(ae){E&&oe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,se,Pe,re.width,re.height);for(let Q=0;Q<6;Q++){ue=le[Q].mipmaps;for(let Te=0;Te<ue.length;Te++){const ve=ue[Te];a.format!==It?xe!==null?E?k&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Pe,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,ve.width,ve.height,xe,Ae,ve.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Pe,ve.width,ve.height,0,xe,Ae,ve.data)}}}else{if(ue=a.mipmaps,E&&oe){ue.length>0&&se++;const Q=Ve(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,se,Pe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Me){E?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,xe,Ae,le[Q].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pe,le[Q].width,le[Q].height,0,xe,Ae,le[Q].data);for(let Te=0;Te<ue.length;Te++){const Ze=ue[Te].image[Q].image;E?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ze.width,Ze.height,xe,Ae,Ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Pe,Ze.width,Ze.height,0,xe,Ae,Ze.data)}}else{E?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe,Ae,le[Q]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pe,xe,Ae,le[Q]);for(let Te=0;Te<ue.length;Te++){const ve=ue[Te];E?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,xe,Ae,ve.image[Q]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Pe,xe,Ae,ve.image[Q])}}}l(a)&&L(e.TEXTURE_CUBE_MAP),te.__version=F.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function me(u,a,A,D,F,te){const ie=o.convert(A.format,A.colorSpace),B=o.convert(A.type),X=m(A.internalFormat,ie,B,A.normalized,A.colorSpace),ae=i.get(a),Me=i.get(A);if(Me.__renderTarget=a,!ae.__hasExternalTextures){const le=Math.max(1,a.width>>te),re=Math.max(1,a.height>>te);F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?t.texImage3D(F,te,X,le,re,a.depth,0,ie,B,null):t.texImage2D(F,te,X,le,re,0,ie,B,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),st(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,D,F,Me.__webglTexture,0,it(a)):(F===e.TEXTURE_2D||F>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,D,F,Me.__webglTexture,te),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(u,a,A){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const D=a.depthTexture,F=D&&D.isDepthTexture?D.type:null,te=S(a.stencilBuffer,F),ie=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;st(a)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(a),te,a.width,a.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(a),te,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,te,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,u)}else{const D=a.textures;for(let F=0;F<D.length;F++){const te=D[F],ie=o.convert(te.format,te.colorSpace),B=o.convert(te.type),X=m(te.internalFormat,ie,B,te.normalized,te.colorSpace);st(a)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(a),X,a.width,a.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(a),X,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,X,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ct(u,a,A){const D=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const F=i.get(a.depthTexture);if(F.__renderTarget=a,(!F.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),D){if(F.__webglInit===void 0&&(F.__webglInit=!0,a.depthTexture.addEventListener("dispose",w)),F.__webglTexture===void 0){F.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture),ze(e.TEXTURE_CUBE_MAP,a.depthTexture);const ae=o.convert(a.depthTexture.format),Me=o.convert(a.depthTexture.type);let le;a.depthTexture.format===an?le=e.DEPTH_COMPONENT24:a.depthTexture.format===jt&&(le=e.DEPTH24_STENCIL8);for(let re=0;re<6;re++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,a.width,a.height,0,ae,Me,null)}}else ne(a.depthTexture,0);const te=F.__webglTexture,ie=it(a),B=D?e.TEXTURE_CUBE_MAP_POSITIVE_X+A:e.TEXTURE_2D,X=a.depthTexture.format===jt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===an)st(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,B,te,0,ie):e.framebufferTexture2D(e.FRAMEBUFFER,X,B,te,0);else if(a.depthTexture.format===jt)st(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,B,te,0,ie):e.framebufferTexture2D(e.FRAMEBUFFER,X,B,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(u){const a=i.get(u),A=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const D=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),D){const F=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,D.removeEventListener("dispose",F)};D.addEventListener("dispose",F),a.__depthDisposeCallback=F}a.__boundDepthTexture=D}if(u.depthTexture&&!a.__autoAllocateDepthBuffer)if(A)for(let D=0;D<6;D++)ct(a.__webglFramebuffer[D],u,D);else{const D=u.texture.mipmaps;D&&D.length>0?ct(a.__webglFramebuffer[0],u,0):ct(a.__webglFramebuffer,u,0)}else if(A){a.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[D]),a.__webglDepthbuffer[D]===void 0)a.__webglDepthbuffer[D]=e.createRenderbuffer(),ye(a.__webglDepthbuffer[D],u,!1);else{const F=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=a.__webglDepthbuffer[D];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,F,e.RENDERBUFFER,te)}}else{const D=u.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),ye(a.__webglDepthbuffer,u,!1);else{const F=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,F,e.RENDERBUFFER,te)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(u,a,A){const D=i.get(u);a!==void 0&&me(D.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),A!==void 0&&Ue(u)}function qe(u){const a=u.texture,A=i.get(u),D=i.get(a);u.addEventListener("dispose",c);const F=u.textures,te=u.isWebGLCubeRenderTarget===!0,ie=F.length>1;if(ie||(D.__webglTexture===void 0&&(D.__webglTexture=e.createTexture()),D.__version=a.version,f.memory.textures++),te){A.__webglFramebuffer=[];for(let B=0;B<6;B++)if(a.mipmaps&&a.mipmaps.length>0){A.__webglFramebuffer[B]=[];for(let X=0;X<a.mipmaps.length;X++)A.__webglFramebuffer[B][X]=e.createFramebuffer()}else A.__webglFramebuffer[B]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){A.__webglFramebuffer=[];for(let B=0;B<a.mipmaps.length;B++)A.__webglFramebuffer[B]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(ie)for(let B=0,X=F.length;B<X;B++){const ae=i.get(F[B]);ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture(),f.memory.textures++)}if(u.samples>0&&st(u)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let B=0;B<F.length;B++){const X=F[B];A.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[B]);const ae=o.convert(X.format,X.colorSpace),Me=o.convert(X.type),le=m(X.internalFormat,ae,Me,X.normalized,X.colorSpace,u.isXRRenderTarget===!0),re=it(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,le,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,A.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(A.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){t.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture),ze(e.TEXTURE_CUBE_MAP,a);for(let B=0;B<6;B++)if(a.mipmaps&&a.mipmaps.length>0)for(let X=0;X<a.mipmaps.length;X++)me(A.__webglFramebuffer[B][X],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,X);else me(A.__webglFramebuffer[B],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);l(a)&&L(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let B=0,X=F.length;B<X;B++){const ae=F[B],Me=i.get(ae);let le=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(le=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(le,Me.__webglTexture),ze(le,ae),me(A.__webglFramebuffer,u,ae,e.COLOR_ATTACHMENT0+B,le,0),l(ae)&&L(le)}t.unbindTexture()}else{let B=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(B=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(B,D.__webglTexture),ze(B,a),a.mipmaps&&a.mipmaps.length>0)for(let X=0;X<a.mipmaps.length;X++)me(A.__webglFramebuffer[X],u,a,e.COLOR_ATTACHMENT0,B,X);else me(A.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,B,0);l(a)&&L(B),t.unbindTexture()}u.depthBuffer&&Ue(u)}function Ne(u){const a=u.textures;for(let A=0,D=a.length;A<D;A++){const F=a[A];if(l(F)){const te=z(u),ie=i.get(F).__webglTexture;t.bindTexture(te,ie),L(te),t.unbindTexture()}}}const tt=[],pt=[];function gt(u){if(u.samples>0){if(st(u)===!1){const a=u.textures,A=u.width,D=u.height;let F=e.COLOR_BUFFER_BIT;const te=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=i.get(u),B=a.length>1;if(B)for(let ae=0;ae<a.length;ae++)t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const X=u.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ae=0;ae<a.length;ae++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(F|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(F|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ie.__webglColorRenderbuffer[ae]);const Me=i.get(a[ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Me,0)}e.blitFramebuffer(0,0,A,D,0,0,A,D,F,e.NEAREST),R===!0&&(tt.length=0,pt.length=0,tt.push(e.COLOR_ATTACHMENT0+ae),u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&(tt.push(te),pt.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,pt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let ae=0;ae<a.length;ae++){t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,ie.__webglColorRenderbuffer[ae]);const Me=i.get(a[ae]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,Me,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&R){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function it(u){return Math.min(s.maxSamples,u.samples)}function st(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function M(u){const a=f.render.frame;H.get(u)!==a&&(H.set(u,a),u.update())}function ht(u,a){const A=u.colorSpace,D=u.format,F=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||A!==$a&&A!==Zt&&(at.getTransfer(A)===je?(D!==It||F!==Dt)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",A)),a}function Ve(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(T.width=u.naturalWidth||u.width,T.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(T.width=u.displayWidth,T.height=u.displayHeight):(T.width=u.width,T.height=u.height),T}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.getTextureUnits=P,this.setTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=Be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Td(e,n){function t(i,s=Zt){let o;const f=at.getTransfer(s);if(i===Dt)return e.UNSIGNED_BYTE;if(i===Na)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return e.UNSIGNED_SHORT_5_5_5_1;if(i===po)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ho)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===mo)return e.BYTE;if(i===_o)return e.SHORT;if(i===bn)return e.UNSIGNED_SHORT;if(i===Ha)return e.INT;if(i===Xt)return e.UNSIGNED_INT;if(i===Vt)return e.FLOAT;if(i===yt)return e.HALF_FLOAT;if(i===go)return e.ALPHA;if(i===vo)return e.RGB;if(i===It)return e.RGBA;if(i===an)return e.DEPTH_COMPONENT;if(i===jt)return e.DEPTH_STENCIL;if(i===So)return e.RED;if(i===Ia)return e.RED_INTEGER;if(i===nn)return e.RG;if(i===Ua)return e.RG_INTEGER;if(i===wa)return e.RGBA_INTEGER;if(i===yn||i===On||i===Fn||i===Bn)if(f===je)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===yn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===On)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===yn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===On)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ai||i===Ri||i===bi||i===Ci)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ai)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ri)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bi)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ci)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pi||i===Li||i===Di||i===wi||i===Ui||i===jn||i===Ii)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Pi||i===Li)return f===je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Di)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===wi)return o.COMPRESSED_R11_EAC;if(i===Ui)return o.COMPRESSED_SIGNED_R11_EAC;if(i===jn)return o.COMPRESSED_RG11_EAC;if(i===Ii)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ni||i===yi||i===Oi||i===Fi||i===Bi||i===Gi||i===Hi||i===Vi||i===Wi||i===ki||i===zi||i===Xi||i===Yi||i===Ki)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ni)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ki)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yi)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ki)return f===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qi||i===Zi||i===$i)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===qi)return f===je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zi)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$i)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ji||i===Qi||i===Qn||i===Ji)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===ji)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Qi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qn)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ji)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Ad=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rd=`
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

}`;class bd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ga(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ot({vertexShader:Ad,fragmentShader:Rd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cd extends qr{constructor(n,t){super();const i=this;let s=null,o=1,f=null,h="local-floor",R=1,T=null,H=null,I=null,p=null,x=null,N=null;const W=typeof XRWebGLBinding<"u",d=new bd,l={},L=t.getContextAttributes();let z=null,m=null;const S=[],_=[],w=new et;let c=null,g=null;const U=new xn;U.viewport=new Et;const O=new xn;O.viewport=new Et;const G=[U,O],q=new Zr;let P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=S[V];return $===void 0&&($=new Nn,S[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=S[V];return $===void 0&&($=new Nn,S[V]=$),$.getGripSpace()},this.getHand=function(V){let $=S[V];return $===void 0&&($=new Nn,S[V]=$),$.getHandSpace()};function j(V){const $=_.indexOf(V.inputSource);if($===-1)return;const Ee=S[$];Ee!==void 0&&(Ee.update(V.inputSource,V.frame,T||f),Ee.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<S.length;V++){const $=_[V];$!==null&&(_[V]=null,S[V].disconnect($))}P=null,Y=null,d.reset();for(const V in l)delete l[V];if(n.setRenderTarget(z),x=null,p=null,I=null,s=null,m=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(c),n.setSize(w.width,w.height,!1),g!==null){const V=g.camera;V.fov=g.fov,V.zoom=g.zoom,V.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return T||f},this.setReferenceSpace=function(V){T=V},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return I===null&&W&&(I=new XRWebGLBinding(s,t)),I},this.getFrame=function(){return N},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(z=n.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ne),L.xrCompatible!==!0&&await t.makeXRCompatible(),c=n.getPixelRatio(),n.getSize(w),W&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,we=null,me=null;L.depth&&(me=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=L.stencil?jt:an,we=L.stencil?pn:Xt);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:o};I=this.getBinding(),p=I.createProjectionLayer(ye),s.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),m=new Rt(p.textureWidth,p.textureHeight,{format:It,type:Dt,depthTexture:new Rn(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:L.stencil,colorSpace:n.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Ee={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),m=new Rt(x.framebufferWidth,x.framebufferHeight,{format:It,type:Dt,colorSpace:n.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(R),T=null,f=await s.requestReferenceSpace(h),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(V){for(let $=0;$<V.removed.length;$++){const Ee=V.removed[$],we=_.indexOf(Ee);we>=0&&(_[we]=null,S[we].disconnect(Ee))}for(let $=0;$<V.added.length;$++){const Ee=V.added[$];let we=_.indexOf(Ee);if(we===-1){for(let ye=0;ye<S.length;ye++)if(ye>=_.length){_.push(Ee),we=ye;break}else if(_[ye]===null){_[ye]=Ee,we=ye;break}if(we===-1)break}const me=S[we];me&&me.connect(Ee)}}const Z=new be,J=new be;function ee(V,$,Ee){Z.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const we=Z.distanceTo(J),me=$.projectionMatrix.elements,ye=Ee.projectionMatrix.elements,ct=me[14]/(me[10]-1),Ue=me[14]/(me[10]+1),Be=(me[9]+1)/me[5],qe=(me[9]-1)/me[5],Ne=(me[8]-1)/me[0],tt=(ye[8]+1)/ye[0],pt=ct*Ne,gt=ct*tt,it=we/(-Ne+tt),st=it*-Ne;if($.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),me[10]===-1)V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const M=ct+it,ht=Ue+it,Ve=pt-st,u=gt+(we-st),a=Be*Ue/ht*M,A=qe*Ue/ht*M;V.projectionMatrix.makePerspective(Ve,u,a,A,M,ht),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ce(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let $=V.near,Ee=V.far;d.texture!==null&&(d.depthNear>0&&($=d.depthNear),d.depthFar>0&&(Ee=d.depthFar)),q.near=O.near=U.near=$,q.far=O.far=U.far=Ee,(P!==q.near||Y!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,Y=q.far),q.layers.mask=V.layers.mask|6,U.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;const we=V.parent,me=q.cameras;Ce(q,we);for(let ye=0;ye<me.length;ye++)Ce(me[ye],we);me.length===2?ee(q,U,O):q.projectionMatrix.copy(U.projectionMatrix),g===null&&V.isPerspectiveCamera&&(g={camera:V,fov:V.fov,zoom:V.zoom}),Re(V,q,we)};function Re(V,$,Ee){Ee===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(Ee.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$r*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(p===null&&x===null))return R},this.setFoveation=function(V){R=V,p!==null&&(p.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(q)},this.getCameraTexture=function(V){return l[V]};let rt=null;function ze(V,$){if(H=$.getViewerPose(T||f),N=$,H!==null){const Ee=H.views;x!==null&&(n.setRenderTargetFramebuffer(m,x.framebuffer),n.setRenderTarget(m));let we=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Be=Ee[Ue];let qe=null;if(x!==null)qe=x.getViewport(Be);else{const tt=I.getViewSubImage(p,Be);qe=tt.viewport,Ue===0&&(n.setRenderTargetTextures(m,tt.colorTexture,tt.depthStencilTexture),n.setRenderTarget(m))}let Ne=G[Ue];Ne===void 0&&(Ne=new xn,Ne.layers.enable(Ue),Ne.viewport=new Et,G[Ue]=Ne),Ne.matrix.fromArray(Be.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Be.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(qe.x,qe.y,qe.width,qe.height),Ue===0&&(q.matrix.copy(Ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Ne)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&W){I=i.getBinding();const Ue=I.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&d.init(Ue,s.renderState)}if(me&&me.includes("camera-access")&&W){n.state.unbindTexture(),I=i.getBinding();for(let Ue=0;Ue<Ee.length;Ue++){const Be=Ee[Ue].camera;if(Be){let qe=l[Be];qe||(qe=new Ga,l[Be]=qe);const Ne=I.getCameraImage(Be);qe.sourceTexture=Ne}}}}for(let Ee=0;Ee<S.length;Ee++){const we=_[Ee],me=S[Ee];we!==null&&me!==void 0&&me.update(we,$,T||f)}rt&&rt(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),N=null}const Xe=new ja;Xe.setAnimationLoop(ze),this.setAnimationLoop=function(V){rt=V},this.dispose=function(){}}}const Pd=new tn,ar=new Oe;ar.set(-1,0,0,0,1,0,0,0,1);function Ld(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}function i(d,l){l.color.getRGB(d.fogColor.value,Fa(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}function s(d,l,L,z,m){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?o(d,l):l.isMeshLambertMaterial?(o(d,l),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(o(d,l),I(d,l)):l.isMeshPhongMaterial?(o(d,l),H(d,l),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(o(d,l),p(d,l),l.isMeshPhysicalMaterial&&x(d,l,m)):l.isMeshMatcapMaterial?(o(d,l),N(d,l)):l.isMeshDepthMaterial?o(d,l):l.isMeshDistanceMaterial?(o(d,l),W(d,l)):l.isMeshNormalMaterial?o(d,l):l.isLineBasicMaterial?(f(d,l),l.isLineDashedMaterial&&h(d,l)):l.isPointsMaterial?R(d,l,L,z):l.isSpriteMaterial?T(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function o(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===xt&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===xt&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const L=n.get(l),z=L.envMap,m=L.envMapRotation;z&&(d.envMap.value=z,d.envMapRotation.value.setFromMatrix4(Pd.makeRotationFromEuler(m)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(ar),d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}function f(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}function h(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}function R(d,l,L,z){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*L,d.scale.value=z*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function T(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function H(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}function I(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}function p(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}function x(d,l,L){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===xt&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.retroreflectivity>0&&(d.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=L.texture,d.transmissionSamplerSize.value.set(L.width,L.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}function N(d,l){l.matcap&&(d.matcap.value=l.matcap)}function W(d,l){const L=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(L.matrixWorld),d.nearDistance.value=L.shadow.camera.near,d.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dd(e,n,t,i){let s={},o={},f=[];const h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function R(m,S){const _=S.program;i.uniformBlockBinding(m,_)}function T(m,S){let _=s[m.id];_===void 0&&(d(m),_=H(m),s[m.id]=_,m.addEventListener("dispose",L));const w=S.program;i.updateUBOMapping(m,w);const c=n.render.frame;o[m.id]!==c&&(p(m),o[m.id]=c)}function H(m){const S=I();m.__bindingPointIndex=S;const _=e.createBuffer(),w=m.__size,c=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,w,c),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,_),_}function I(){for(let m=0;m<h;m++)if(f.indexOf(m)===-1)return f.push(m),m;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const S=s[m.id],_=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let c=0,g=_.length;c<g;c++){const U=_[c];if(Array.isArray(U))for(let O=0,G=U.length;O<G;O++)x(U[O],c,O,w);else x(U,c,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(m,S,_,w){if(W(m,S,_,w)===!0){const c=m.__offset,g=m.value;if(Array.isArray(g)){let U=0;for(let O=0;O<g.length;O++){const G=g[O],q=l(G);N(G,m.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else N(g,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,c,m.__data)}}function N(m,S,_){typeof m=="number"||typeof m=="boolean"?S[0]=m:m.isMatrix3?(S[0]=m.elements[0],S[1]=m.elements[1],S[2]=m.elements[2],S[3]=0,S[4]=m.elements[3],S[5]=m.elements[4],S[6]=m.elements[5],S[7]=0,S[8]=m.elements[6],S[9]=m.elements[7],S[10]=m.elements[8],S[11]=0):ArrayBuffer.isView(m)?S.set(new m.constructor(m.buffer,m.byteOffset,S.length)):m.toArray(S,_)}function W(m,S,_,w){const c=m.value,g=S+"_"+_;if(w[g]===void 0)return typeof c=="number"||typeof c=="boolean"?w[g]=c:ArrayBuffer.isView(c)?w[g]=c.slice():w[g]=c.clone(),!0;{const U=w[g];if(typeof c=="number"||typeof c=="boolean"){if(U!==c)return w[g]=c,!0}else{if(ArrayBuffer.isView(c))return!0;if(U.equals(c)===!1)return U.copy(c),!0}}return!1}function d(m){const S=m.uniforms;let _=0;const w=16;for(let g=0,U=S.length;g<U;g++){const O=Array.isArray(S[g])?S[g]:[S[g]];for(let G=0,q=O.length;G<q;G++){const P=O[G],Y=Array.isArray(P.value)?P.value:[P.value];for(let j=0,K=Y.length;j<K;j++){const ne=Y[j],Z=l(ne),J=_%w,ee=J%Z.boundary,Ce=J+ee;_+=ee,Ce!==0&&w-Ce<Z.storage&&(_+=w-Ce),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=Z.storage}}}const c=_%w;return c>0&&(_+=w-c),m.__size=_,m.__cache={},this}function l(m){const S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=48,S.storage=48):m.isMatrix4?(S.boundary=64,S.storage=64):m.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):We("WebGLRenderer: Unsupported uniform value type.",m),S}function L(m){const S=m.target;S.removeEventListener("dispose",L);const _=f.indexOf(S.__bindingPointIndex);f.splice(_,1),e.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function z(){for(const m in s)e.deleteBuffer(s[m]);f=[],s={},o={}}return{bind:R,update:T,dispose:z}}const wd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pt=null;function Ud(){return Pt===null&&(Pt=new jr(wd,16,16,nn,yt),Pt.name="DFG_LUT",Pt.minFilter=Mt,Pt.magFilter=Mt,Pt.wrapS=qn,Pt.wrapT=qn,Pt.generateMipmaps=!1,Pt.needsUpdate=!0),Pt}class Kd{constructor(n={}){const{canvas:t=pr(),context:i=null,depth:s=!0,stencil:o=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:R=!0,preserveDrawingBuffer:T=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:I=!1,reversedDepthBuffer:p=!1,outputBufferType:x=Dt}=n;this.isWebGLRenderer=!0;let N;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=i.getContextAttributes().alpha}else N=f;const W=x,d=new Set([wa,Ua,Ia]),l=new Set([Dt,Xt,bn,pn,Na,ya]),L=new Uint32Array(4),z=new Int32Array(4),m=new be;let S=null,_=null;const w=[],c=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1,G=null,q=null,P=null,Y=null;this._outputColorSpace=hr;let j=0,K=0,ne=null,Z=-1,J=null;const ee=new Et,Ce=new Et;let Re=null;const rt=new nt(0);let ze=0,Xe=t.width,V=t.height,$=1,Ee=null,we=null;const me=new Et(0,0,Xe,V),ye=new Et(0,0,Xe,V);let ct=!1;const Ue=new Pa;let Be=!1,qe=!1;const Ne=new tn,tt=new be,pt=new Et,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function st(){return ne===null?$:1}let M=i;function ht(r,v){return t.getContext(r,v)}let Ve,u,a,A,D,F,te,ie,B,X,ae,Me,le,re,xe,Ae,Pe,E,oe,k,se,ue,Q;try{const r={alpha:!0,depth:s,stencil:o,antialias:h,premultipliedAlpha:R,preserveDrawingBuffer:T,powerPreference:H,failIfMajorPerformanceCaveat:I};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mr}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",At,!1),M===null){const v="webgl2";if(M=ht(v,r),M===null)throw ht(v)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(r){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Je("WebGLRenderer: "+r.message),r}function Te(){Ve=new wc(M),Ve.init(),se=new Td(M,Ve),u=new Mc(M,Ve,n,se),a=new Md(M,Ve),u.reversedDepthBuffer&&p&&a.buffers.depth.setReversed(!0),q=M.createFramebuffer(),P=M.createFramebuffer(),Y=M.createFramebuffer(),A=new Nc(M),D=new sd,F=new xd(M,Ve,a,D,u,se,A),te=new Dc(U),ie=new Oo(M),ue=new Sc(M,ie),B=new Uc(M,ie,A,ue),X=new Oc(M,B,ie,ue,A),E=new yc(M,u,F),xe=new xc(D),ae=new od(U,te,Ve,u,ue,xe),Me=new Ld(U,D),le=new cd,re=new md(Ve),Pe=new vc(U,te,a,X,N,R),Ae=new Ed(U,X,u),Q=new Dd(M,A,u,a),oe=new Ec(M,Ve,A),k=new Ic(M,Ve,A),A.programs=ae.programs,U.capabilities=u,U.extensions=Ve,U.properties=D,U.renderLists=le,U.shadowMap=Ae,U.state=a,U.info=A}W!==Dt&&(g=new Bc(W,t.width,t.height,h,s,o));const ve=new Cd(U,M);this.xr=ve,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const r=Ve.get("WEBGL_lose_context");r&&r.loseContext()},this.forceContextRestore=function(){const r=Ve.get("WEBGL_lose_context");r&&r.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(r){r!==void 0&&($=r,this.setSize(Xe,V,!1))},this.getSize=function(r){return r.set(Xe,V)},this.setSize=function(r,v,y=!0){if(ve.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=r,V=v,t.width=Math.floor(r*$),t.height=Math.floor(v*$),y===!0&&(t.style.width=r+"px",t.style.height=v+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,r,v)},this.getDrawingBufferSize=function(r){return r.set(Xe*$,V*$).floor()},this.setDrawingBufferSize=function(r,v,y){Xe=r,V=v,$=y,t.width=Math.floor(r*y),t.height=Math.floor(v*y),this.setViewport(0,0,r,v)},this.setEffects=function(r){if(W===Dt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(r){for(let v=0;v<r.length;v++)if(r[v].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(r||[])},this.getCurrentViewport=function(r){return r.copy(ee)},this.getViewport=function(r){return r.copy(me)},this.setViewport=function(r,v,y,b){r.isVector4?me.set(r.x,r.y,r.z,r.w):me.set(r,v,y,b),a.viewport(ee.copy(me).multiplyScalar($).round())},this.getScissor=function(r){return r.copy(ye)},this.setScissor=function(r,v,y,b){r.isVector4?ye.set(r.x,r.y,r.z,r.w):ye.set(r,v,y,b),a.scissor(Ce.copy(ye).multiplyScalar($).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(r){a.setScissorTest(ct=r)},this.setOpaqueSort=function(r){Ee=r},this.setTransparentSort=function(r){we=r},this.getClearColor=function(r){return r.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(r=!0,v=!0,y=!0){let b=0;if(r){let C=!1;if(ne!==null){const de=ne.texture.format;C=d.has(de)}if(C){const de=ne.texture.type,he=l.has(de),fe=Pe.getClearColor(),_e=Pe.getClearAlpha(),Se=fe.r,Le=fe.g,Ie=fe.b;he?(L[0]=Se,L[1]=Le,L[2]=Ie,L[3]=_e,M.clearBufferuiv(M.COLOR,0,L)):(z[0]=Se,z[1]=Le,z[2]=Ie,z[3]=_e,M.clearBufferiv(M.COLOR,0,z))}else b|=M.COLOR_BUFFER_BIT}v&&(b|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),y&&(b|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b!==0&&M.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(r){r.setRenderer(this),G=r},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Pe.dispose(),le.dispose(),re.dispose(),D.dispose(),te.dispose(),X.dispose(),ue.dispose(),Q.dispose(),ae.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",oi),ve.removeEventListener("sessionend",si),Wt.stop()};function Ze(r){r.preventDefault(),mi("WebGLRenderer: Context Lost."),O=!0}function Ge(){mi("WebGLRenderer: Context Restored."),O=!1;const r=A.autoReset,v=Ae.enabled,y=Ae.autoUpdate,b=Ae.needsUpdate,C=Ae.type;Te(),A.autoReset=r,Ae.enabled=v,Ae.autoUpdate=y,Ae.needsUpdate=b,Ae.type=C}function At(r){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",r.statusMessage)}function bt(r){const v=r.target;v.removeEventListener("dispose",bt),or(v)}function or(r){sr(r),D.remove(r)}function sr(r){const v=D.get(r).programs;v!==void 0&&(v.forEach(function(y){ae.releaseProgram(y)}),r.isShaderMaterial&&ae.releaseShaderCache(r))}this.renderBufferDirect=function(r,v,y,b,C,de){v===null&&(v=gt);const he=C.isMesh&&C.matrixWorld.determinantAffine()<0,fe=fr(r,v,y,b,C);a.setMaterial(b,he);let _e=y.index,Se=1;if(b.wireframe===!0){if(_e=B.getWireframeAttribute(y),_e===void 0)return;Se=2}const Le=y.drawRange,Ie=y.attributes.position;let ge=Le.start*Se,He=(Le.start+Le.count)*Se;de!==null&&(ge=Math.max(ge,de.start*Se),He=Math.min(He,(de.start+de.count)*Se)),_e!==null?(ge=Math.max(ge,0),He=Math.min(He,_e.count)):Ie!=null&&(ge=Math.max(ge,0),He=Math.min(He,Ie.count));const lt=He-ge;if(lt<0||lt===1/0)return;ue.setup(C,b,fe,y,_e);let Qe,Ke=oe;if(_e!==null&&(Qe=ie.get(_e),Ke=k,Ke.setIndex(Qe)),C.isMesh)b.wireframe===!0?(a.setLineWidth(b.wireframeLinewidth*st()),Ke.setMode(M.LINES)):Ke.setMode(M.TRIANGLES);else if(C.isLine){let mt=b.linewidth;mt===void 0&&(mt=1),a.setLineWidth(mt*st()),C.isLineSegments?Ke.setMode(M.LINES):C.isLineLoop?Ke.setMode(M.LINE_LOOP):Ke.setMode(M.LINE_STRIP)}else C.isPoints?Ke.setMode(M.POINTS):C.isSprite&&Ke.setMode(M.TRIANGLES);if(C.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const mt=C._multiDrawStarts,pe=C._multiDrawCounts,_t=C._multiDrawCount,Fe=_e?ie.get(_e).bytesPerElement:1,Tt=D.get(b).currentProgram.getUniforms();for(let Ct=0;Ct<_t;Ct++)Tt.setValue(M,"_gl_DrawID",Ct),Ke.render(mt[Ct]/Fe,pe[Ct])}else if(C.isInstancedMesh)Ke.renderInstances(ge,lt,C.count);else if(y.isInstancedBufferGeometry){const mt=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,pe=Math.min(y.instanceCount,mt);Ke.renderInstances(ge,lt,pe)}else Ke.render(ge,lt)};function ri(r,v,y,b){G!==null&&r.isNodeMaterial&&G.setObject(b,r),Be===!0&&xe.setState(r,y,!1),r.transparent===!0&&r.side===Ut&&r.forceSinglePass===!1?(r.side=xt,r.needsUpdate=!0,_n(r,v,b),r.side=un,r.needsUpdate=!0,_n(r,v,b),r.side=Ut):_n(r,v,b)}this.compile=function(r,v,y=null){y===null&&(y=r),G!==null&&G.renderStart(r,v,y),_=re.get(y),_.init(v),c.push(_),y.traverseVisible(function(C){C.isLight&&C.layers.test(v.layers)&&(_.pushLight(C),C.castShadow&&_.pushShadow(C))}),r!==y&&r.traverseVisible(function(C){C.isLight&&C.layers.test(v.layers)&&(_.pushLight(C),C.castShadow&&_.pushShadow(C))}),_.setupLights(),G!==null&&G.updateLights(_.state.lightsArray),qe=this.localClippingEnabled,Be=xe.init(this.clippingPlanes,qe),Be===!0&&xe.setGlobalState(this.clippingPlanes,v),G!==null&&Ae.render(_.state.shadowsArray,y,v);const b=new Set;return r.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const de=C.material;if(de)if(Array.isArray(de))for(let he=0;he<de.length;he++){const fe=de[he];ri(fe,y,v,C),b.add(fe)}else ri(de,y,v,C),b.add(de)}),_=c.pop(),G!==null&&G.renderEnd(),b},this.compileAsync=function(r,v,y=null){const b=this.compile(r,v,y);return new Promise(C=>{function de(){if(b.forEach(function(he){const _e=D.get(he).currentProgram;(_e===void 0||_e.isReady())&&b.delete(he)}),b.size===0){C(r);return}setTimeout(de,10)}Ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let wn=null;function lr(r){wn&&wn(r)}function oi(){Wt.stop()}function si(){Wt.start()}const Wt=new ja;Wt.setAnimationLoop(lr),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(r){wn=r,ve.setAnimationLoop(r),r===null?Wt.stop():Wt.start()},ve.addEventListener("sessionstart",oi),ve.addEventListener("sessionend",si),this.render=function(r,v){if(v!==void 0&&v.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(r,v);const y=ve.enabled===!0&&ve.isPresenting===!0,b=g!==null&&(ne===null||y)&&g.begin(U,ne);if(r.matrixWorldAutoUpdate===!0&&r.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(v),v=ve.getCamera()),r.isScene===!0&&r.onBeforeRender(U,r,v,ne),_=re.get(r,c.length),_.init(v),_.state.textureUnits=F.getTextureUnits(),c.push(_),Ne.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),Ue.setFromProjectionMatrix(Ne,_i,v.reversedDepth),qe=this.localClippingEnabled,Be=xe.init(this.clippingPlanes,qe),S=le.get(r,w.length),S.init(),w.push(S),ve.enabled===!0&&ve.isPresenting===!0){const he=U.xr.getDepthSensingMesh();he!==null&&Un(he,v,-1/0,U.sortObjects)}Un(r,v,0,U.sortObjects),S.finish(),G!==null&&G.updateLights(_.state.lightsArray),U.sortObjects===!0&&S.sort(Ee,we),it=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,it&&Pe.addToRenderList(S,r),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&xe.beginShadows();const C=_.state.shadowsArray;if(Ae.render(C,r,v),Be===!0&&xe.endShadows(),(b&&g.hasRenderPass())===!1){const he=S.opaque,fe=S.transmissive;if(_.setupLights(),v.isArrayCamera){const _e=v.cameras;if(fe.length>0)for(let Se=0,Le=_e.length;Se<Le;Se++){const Ie=_e[Se];ci(he,fe,r,Ie)}it&&Pe.render(r);for(let Se=0,Le=_e.length;Se<Le;Se++){const Ie=_e[Se];li(S,r,Ie,Ie.viewport)}}else fe.length>0&&ci(he,fe,r,v),it&&Pe.render(r),li(S,r,v)}ne!==null&&K===0&&(F.updateMultisampleRenderTarget(ne),F.updateRenderTargetMipmap(ne)),b&&g.end(U),r.isScene===!0&&r.onAfterRender(U,r,v),ue.resetDefaultState(),Z=-1,J=null,c.pop(),c.length>0?(_=c[c.length-1],F.setTextureUnits(_.state.textureUnits),Be===!0&&xe.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,G!==null&&G.renderEnd()};function Un(r,v,y,b){if(r.visible===!1)return;if(r.layers.test(v.layers)){if(r.isGroup)y=r.renderOrder;else if(r.isLOD)r.autoUpdate===!0&&r.update(v);else if(r.isLightProbeGrid)_.pushLightProbeGrid(r);else if(r.isLight)_.pushLight(r),r.castShadow&&_.pushShadow(r);else if(r.isSprite){if(!r.frustumCulled||r.intersectsFrustum(Ue)){b&&pt.setFromMatrixPosition(r.matrixWorld).applyMatrix4(Ne);const he=X.update(r),fe=r.material;fe.visible&&S.push(r,he,fe,y,pt.z,null,v)}}else if((r.isMesh||r.isLine||r.isPoints)&&(!r.frustumCulled||r.intersectsFrustum(Ue))){const he=X.update(r),fe=r.material;if(b&&(r.boundingSphere!==void 0?(r.boundingSphere===null&&r.computeBoundingSphere(),pt.copy(r.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),pt.copy(he.boundingSphere.center)),pt.applyMatrix4(r.matrixWorld).applyMatrix4(Ne)),Array.isArray(fe)){const _e=he.groups;for(let Se=0,Le=_e.length;Se<Le;Se++){const Ie=_e[Se],ge=fe[Ie.materialIndex];ge&&ge.visible&&S.push(r,he,ge,y,pt.z,Ie,v)}}else fe.visible&&S.push(r,he,fe,y,pt.z,null,v)}}const de=r.children;for(let he=0,fe=de.length;he<fe;he++)Un(de[he],v,y,b)}function li(r,v,y,b){const{opaque:C,transmissive:de,transparent:he}=r;_.setupLightsView(y),Be===!0&&xe.setGlobalState(U.clippingPlanes,y),b&&a.viewport(ee.copy(b)),C.length>0&&mn(C,v,y),de.length>0&&mn(de,v,y),he.length>0&&mn(he,v,y),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function ci(r,v,y,b){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[b.id]===void 0){const ge=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[b.id]=new Rt(1,1,{generateMipmaps:!0,type:ge?yt:Dt,minFilter:$t,samples:Math.max(4,u.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const de=_.state.transmissionRenderTarget[b.id],he=b.viewport||ee;de.setSize(he.z*U.transmissionResolutionScale,he.w*U.transmissionResolutionScale);const fe=U.getRenderTarget(),_e=U.getActiveCubeFace(),Se=U.getActiveMipmapLevel();U.setRenderTarget(de),U.getClearColor(rt),ze=U.getClearAlpha(),ze<1&&U.setClearColor(16777215,.5),U.clear(),it&&Pe.render(y);const Le=U.toneMapping;U.toneMapping=wt;const Ie=b.viewport;if(b.viewport!==void 0&&(b.viewport=void 0),_.setupLightsView(b),Be===!0&&xe.setGlobalState(U.clippingPlanes,b),mn(r,y,b),F.updateMultisampleRenderTarget(de),F.updateRenderTargetMipmap(de),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let He=0,lt=v.length;He<lt;He++){const Qe=v[He],{object:Ke,geometry:mt,material:pe,group:_t}=Qe;if(pe.side===Ut&&Ke.layers.test(b.layers)){const Fe=pe.side;pe.side=xt,pe.needsUpdate=!0,fi(Ke,y,b,mt,pe,_t),pe.side=Fe,pe.needsUpdate=!0,ge=!0}}ge===!0&&(F.updateMultisampleRenderTarget(de),F.updateRenderTargetMipmap(de))}U.setRenderTarget(fe,_e,Se),U.setClearColor(rt,ze),Ie!==void 0&&(b.viewport=Ie),U.toneMapping=Le}function mn(r,v,y){const b=v.isScene===!0?v.overrideMaterial:null;for(let C=0,de=r.length;C<de;C++){const he=r[C],{object:fe,geometry:_e,group:Se}=he;let Le=he.material;Le.allowOverride===!0&&b!==null&&(Le=b),fe.layers.test(y.layers)&&fi(fe,v,y,_e,Le,Se)}}function fi(r,v,y,b,C,de){G!==null&&C.isNodeMaterial&&G.setObject(r,C),r.onBeforeRender(U,v,y,b,C,de),r.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,r.matrixWorld),r.normalMatrix.getNormalMatrix(r.modelViewMatrix),C.onBeforeRender(U,v,y,b,r,de),C.transparent===!0&&C.side===Ut&&C.forceSinglePass===!1?(C.side=xt,C.needsUpdate=!0,U.renderBufferDirect(y,v,b,C,r,de),C.side=un,C.needsUpdate=!0,U.renderBufferDirect(y,v,b,C,r,de),C.side=Ut):U.renderBufferDirect(y,v,b,C,r,de),r.onAfterRender(U,v,y,b,C,de)}function _n(r,v,y){v.isScene!==!0&&(v=gt);const b=D.get(r),C=_.state.lights,de=_.state.shadowsArray,he=C.state.version,fe=ae.getParameters(r,C.state,de,v,y,_.state.lightProbeGridArray),_e=ae.getProgramCacheKey(fe);let Se=b.programs;b.environment=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?v.environment:null,b.fog=v.fog;const Le=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap;b.envMap=te.get(r.envMap||b.environment,Le),b.envMapRotation=b.environment!==null&&r.envMap===null?v.environmentRotation:r.envMapRotation,Se===void 0&&(r.addEventListener("dispose",bt),Se=new Map,b.programs=Se);let Ie=Se.get(_e);if(Ie!==void 0){if(b.currentProgram===Ie&&b.lightsStateVersion===he)return ui(r,fe),Ie}else fe.uniforms=ae.getUniforms(r),G!==null&&r.isNodeMaterial&&G.build(r,y,fe),r.onBeforeCompile(fe,U),Ie=ae.acquireProgram(fe,_e),Se.set(_e,Ie),b.uniforms=fe.uniforms;const ge=b.uniforms;return(!r.isShaderMaterial&&!r.isRawShaderMaterial||r.clipping===!0)&&(ge.clippingPlanes=xe.uniform),ui(r,fe),b.needsLights=ur(r),b.lightsStateVersion=he,b.needsLights&&(ge.ambientLightColor.value=C.state.ambient,ge.lightProbe.value=C.state.probe,ge.sunLights.value=C.state.sun,ge.sunLightShadows.value=C.state.sunShadow,ge.directionalLights.value=C.state.directional,ge.directionalLightShadows.value=C.state.directionalShadow,ge.spotLights.value=C.state.spot,ge.spotLightShadows.value=C.state.spotShadow,ge.rectAreaLights.value=C.state.rectArea,ge.ltc_1.value=C.state.rectAreaLTC1,ge.ltc_2.value=C.state.rectAreaLTC2,ge.pointLights.value=C.state.point,ge.pointLightShadows.value=C.state.pointShadow,ge.hemisphereLights.value=C.state.hemi,ge.sunShadowMatrix.value=C.state.sunShadowMatrix,ge.sunShadowCascade.value=C.state.sunShadowCascade,ge.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ge.spotLightMatrix.value=C.state.spotLightMatrix,ge.spotLightMap.value=C.state.spotLightMap,ge.pointShadowMatrix.value=C.state.pointShadowMatrix),b.lightProbeGrid=_.state.lightProbeGridArray.length>0,b.currentProgram=Ie,b.uniformsList=null,Ie}function di(r){if(r.uniformsList===null){const v=r.currentProgram.getUniforms();r.uniformsList=An.seqWithValue(v.seq,r.uniforms)}return r.uniformsList}function ui(r,v){const y=D.get(r);y.outputColorSpace=v.outputColorSpace,y.batching=v.batching,y.batchingColor=v.batchingColor,y.instancing=v.instancing,y.instancingColor=v.instancingColor,y.instancingMorph=v.instancingMorph,y.skinning=v.skinning,y.morphTargets=v.morphTargets,y.morphNormals=v.morphNormals,y.morphColors=v.morphColors,y.morphTargetsCount=v.morphTargetsCount,y.numClippingPlanes=v.numClippingPlanes,y.numIntersection=v.numClipIntersection,y.vertexAlphas=v.vertexAlphas,y.vertexTangents=v.vertexTangents,y.toneMapping=v.toneMapping}function cr(r,v){if(r.length===0)return null;if(r.length===1)return r[0].texture!==null?r[0]:null;m.setFromMatrixPosition(v.matrixWorld);for(let y=0,b=r.length;y<b;y++){const C=r[y];if(C.texture!==null&&C.boundingBox.containsPoint(m))return C}return null}function fr(r,v,y,b,C){v.isScene!==!0&&(v=gt),F.resetTextureUnits();const de=v.fog,he=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?v.environment:null,fe=ne===null?U.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:at.workingColorSpace,_e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Se=te.get(b.envMap||he,_e),Le=b.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,Ie=!!y.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),ge=!!y.morphAttributes.position,He=!!y.morphAttributes.normal,lt=!!y.morphAttributes.color;let Qe=wt;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qe=U.toneMapping);const Ke=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,mt=Ke!==void 0?Ke.length:0,pe=D.get(b),_t=_.state.lights;if(Be===!0&&(qe===!0||r!==J)){const $e=r===J&&b.id===Z;xe.setState(b,r,$e)}let Fe=!1;b.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==_t.state.version||pe.outputColorSpace!==fe||C.isBatchedMesh&&pe.batching===!1||!C.isBatchedMesh&&pe.batching===!0||C.isBatchedMesh&&pe.batchingColor===!0&&C._colorsTexture===null||C.isBatchedMesh&&pe.batchingColor===!1&&C._colorsTexture!==null||C.isInstancedMesh&&pe.instancing===!1||!C.isInstancedMesh&&pe.instancing===!0||C.isSkinnedMesh&&pe.skinning===!1||!C.isSkinnedMesh&&pe.skinning===!0||C.isInstancedMesh&&pe.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&pe.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&pe.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&pe.instancingMorph===!1&&C.morphTexture!==null||pe.envMap!==Se||b.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==xe.numPlanes||pe.numIntersection!==xe.numIntersection)||pe.vertexAlphas!==Le||pe.vertexTangents!==Ie||pe.morphTargets!==ge||pe.morphNormals!==He||pe.morphColors!==lt||pe.toneMapping!==Qe||pe.morphTargetsCount!==mt||!!pe.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,pe.__version=b.version);let Tt=pe.currentProgram;Fe===!0&&(Tt=_n(b,v,C),G&&b.isNodeMaterial&&G.onUpdateProgram(b,Tt,pe));let Ct=!1,Bt=!1,Yt=!1;const Ye=Tt.getUniforms(),ot=pe.uniforms;if(a.useProgram(Tt.program)&&(Ct=!0,Bt=!0,Yt=!0),b.id!==Z&&(Z=b.id,Bt=!0),pe.needsLights){const $e=cr(_.state.lightProbeGridArray,C);pe.lightProbeGrid!==$e&&(pe.lightProbeGrid=$e,Bt=!0)}if(Ct||J!==r){a.buffers.depth.getReversed()&&r.reversedDepth!==!0&&(r._reversedDepth=!0,r.updateProjectionMatrix()),Ye.setValue(M,"projectionMatrix",r.projectionMatrix),Ye.setValue(M,"viewMatrix",r.matrixWorldInverse);const Ht=Ye.map.cameraPosition;Ht!==void 0&&Ht.setValue(M,tt.setFromMatrixPosition(r.matrixWorld)),u.logarithmicDepthBuffer&&Ye.setValue(M,"logDepthBufFC",2/(Math.log(r.far+1)/Math.LN2)),(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)&&Ye.setValue(M,"isOrthographic",r.isOrthographicCamera===!0),J!==r&&(J=r,Bt=!0,Yt=!0)}if(pe.needsLights&&(_t.state.sunShadowMap.length>0&&Ye.setValue(M,"sunShadowMap",_t.state.sunShadowMap,F),_t.state.directionalShadowMap.length>0&&Ye.setValue(M,"directionalShadowMap",_t.state.directionalShadowMap,F),_t.state.spotShadowMap.length>0&&Ye.setValue(M,"spotShadowMap",_t.state.spotShadowMap,F),_t.state.pointShadowMap.length>0&&Ye.setValue(M,"pointShadowMap",_t.state.pointShadowMap,F)),C.isSkinnedMesh){Ye.setOptional(M,C,"bindMatrix"),Ye.setOptional(M,C,"bindMatrixInverse");const $e=C.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ye.setValue(M,"boneTexture",$e.boneTexture,F))}C.isBatchedMesh&&(Ye.setOptional(M,C,"batchingTexture"),Ye.setValue(M,"batchingTexture",C._matricesTexture,F),Ye.setOptional(M,C,"batchingIdTexture"),Ye.setValue(M,"batchingIdTexture",C._indirectTexture,F),Ye.setOptional(M,C,"batchingColorTexture"),C._colorsTexture!==null&&Ye.setValue(M,"batchingColorTexture",C._colorsTexture,F));const Gt=y.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&E.update(C,y,Tt),(Bt||pe.receiveShadow!==C.receiveShadow)&&(pe.receiveShadow=C.receiveShadow,Ye.setValue(M,"receiveShadow",C.receiveShadow)),(b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&v.environment!==null&&(ot.envMapIntensity.value=v.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=Ud()),Bt){if(Ye.setValue(M,"toneMappingExposure",U.toneMappingExposure),pe.needsLights&&dr(ot,Yt),de&&b.fog===!0&&Me.refreshFogUniforms(ot,de),Me.refreshMaterialUniforms(ot,b,$,V,_.state.transmissionRenderTarget[r.id]),pe.needsLights&&pe.lightProbeGrid){const $e=pe.lightProbeGrid;ot.probesSH.value=$e.texture,ot.probesMin.value.copy($e.boundingBox.min),ot.probesMax.value.copy($e.boundingBox.max),ot.probesResolution.value.copy($e.resolution)}An.upload(M,di(pe),ot,F)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0&&(An.upload(M,di(pe),ot,F),b.uniformsNeedUpdate=!1),b.isSpriteMaterial&&Ye.setValue(M,"center",C.center),Ye.setValue(M,"modelViewMatrix",C.modelViewMatrix),Ye.setValue(M,"normalMatrix",C.normalMatrix),Ye.setValue(M,"modelMatrix",C.matrixWorld),b.uniformsGroups!==void 0){const $e=b.uniformsGroups;for(let Ht=0,Kt=$e.length;Ht<Kt;Ht++){const hi=$e[Ht];Q.update(hi,Tt),Q.bind(hi,Tt)}}return Tt}function dr(r,v){r.ambientLightColor.needsUpdate=v,r.lightProbe.needsUpdate=v,r.sunLights.needsUpdate=v,r.sunLightShadows.needsUpdate=v,r.directionalLights.needsUpdate=v,r.directionalLightShadows.needsUpdate=v,r.pointLights.needsUpdate=v,r.pointLightShadows.needsUpdate=v,r.spotLights.needsUpdate=v,r.spotLightShadows.needsUpdate=v,r.rectAreaLights.needsUpdate=v,r.hemisphereLights.needsUpdate=v}function ur(r){return r.isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&r.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(r,v,y){const b=D.get(r);b.__autoAllocateDepthBuffer=r.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1&&(b.__useRenderToTexture=!1),D.get(r.texture).__webglTexture=v,D.get(r.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:y,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(r,v){const y=D.get(r);y.__webglFramebuffer=v,y.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(r,v=0,y=0){ne=r,j=v,K=y;let b=null,C=!1,de=!1;if(r){const fe=D.get(r);if(fe.__useDefaultFramebuffer!==void 0){a.bindFramebuffer(M.FRAMEBUFFER,fe.__webglFramebuffer),ee.copy(r.viewport),Ce.copy(r.scissor),Re=r.scissorTest,a.viewport(ee),a.scissor(Ce),a.setScissorTest(Re),Z=-1;return}else if(fe.__webglFramebuffer===void 0)F.setupRenderTarget(r);else if(fe.__hasExternalTextures)F.rebindTextures(r,D.get(r.texture).__webglTexture,D.get(r.depthTexture).__webglTexture);else if(r.depthBuffer){const Le=r.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&D.has(Le)&&(r.width!==Le.image.width||r.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(r)}}const _e=r.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);const Se=D.get(r).__webglFramebuffer;r.isWebGLCubeRenderTarget?(Array.isArray(Se[v])?b=Se[v][y]:b=Se[v],C=!0):r.samples>0&&F.useMultisampledRTT(r)===!1?b=D.get(r).__webglMultisampledFramebuffer:Array.isArray(Se)?b=Se[y]:b=Se,ee.copy(r.viewport),Ce.copy(r.scissor),Re=r.scissorTest}else ee.copy(me).multiplyScalar($).floor(),Ce.copy(ye).multiplyScalar($).floor(),Re=ct;if(y!==0&&(b=q),a.bindFramebuffer(M.FRAMEBUFFER,b)&&a.drawBuffers(r,b),a.viewport(ee),a.scissor(Ce),a.setScissorTest(Re),C){const fe=D.get(r.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+v,fe.__webglTexture,y)}else if(de){const fe=v;for(let _e=0;_e<r.textures.length;_e++){const Se=D.get(r.textures[_e]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+_e,Se.__webglTexture,y,fe)}}else if(r!==null&&y!==0){const fe=D.get(r.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,fe.__webglTexture,y)}Z=-1};function pi(r){const v=D.get(r);return(v.__readFormat!==r.format||v.__readType!==r.type)&&(v.__readFormat=r.format,v.__readType=r.type,v.__formatReadable=u.textureFormatReadable(r.format),v.__typeReadable=u.textureTypeReadable(r.type)),v}this.readRenderTargetPixels=function(r,v,y,b,C,de,he,fe=0){if(!(r&&r.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=D.get(r).__webglFramebuffer;if(r.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){a.bindFramebuffer(M.FRAMEBUFFER,_e);try{const Se=r.textures[fe],Le=Se.format,Ie=Se.type;r.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+fe);const ge=pi(Se);if(ge.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ge.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=r.width-b&&y>=0&&y<=r.height-C&&M.readPixels(v,y,b,C,se.convert(Le),se.convert(Ie),de)}finally{const Se=ne!==null?D.get(ne).__webglFramebuffer:null;a.bindFramebuffer(M.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(r,v,y,b,C,de,he,fe=0){if(!(r&&r.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=D.get(r).__webglFramebuffer;if(r.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(v>=0&&v<=r.width-b&&y>=0&&y<=r.height-C){a.bindFramebuffer(M.FRAMEBUFFER,_e);const Se=r.textures[fe],Le=Se.format,Ie=Se.type;r.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+fe);const ge=pi(Se);if(ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,He),M.bufferData(M.PIXEL_PACK_BUFFER,de.byteLength,M.STREAM_READ),M.readPixels(v,y,b,C,se.convert(Le),se.convert(Ie),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);const lt=ne!==null?D.get(ne).__webglFramebuffer:null;a.bindFramebuffer(M.FRAMEBUFFER,lt);const Qe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await _r(M,Qe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,He),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,de),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(He),M.deleteSync(Qe),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(r,v=null,y=0){const b=Math.pow(2,-y),C=Math.floor(r.image.width*b),de=Math.floor(r.image.height*b),he=v!==null?v.x:0,fe=v!==null?v.y:0;F.setTexture2D(r,0),M.copyTexSubImage2D(M.TEXTURE_2D,y,0,0,he,fe,C,de),a.unbindTexture()},this.copyTextureToTexture=function(r,v,y=null,b=null,C=0,de=0){let he,fe,_e,Se,Le,Ie,ge,He,lt;const Qe=r.isCompressedTexture?r.mipmaps[de]:r.image;if(y!==null)he=y.max.x-y.min.x,fe=y.max.y-y.min.y,_e=y.isBox3?y.max.z-y.min.z:1,Se=y.min.x,Le=y.min.y,Ie=y.isBox3?y.min.z:0;else{const ot=Math.pow(2,-C);he=Math.floor(Qe.width*ot),fe=Math.floor(Qe.height*ot),r.isDataArrayTexture?_e=Qe.depth:r.isData3DTexture?_e=Math.floor(Qe.depth*ot):_e=1,Se=0,Le=0,Ie=0}b!==null?(ge=b.x,He=b.y,lt=b.z):(ge=0,He=0,lt=0);const Ke=se.convert(v.format),mt=se.convert(v.type);let pe;v.isData3DTexture?(F.setTexture3D(v,0),pe=M.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(F.setTexture2DArray(v,0),pe=M.TEXTURE_2D_ARRAY):(F.setTexture2D(v,0),pe=M.TEXTURE_2D),a.activeTexture(M.TEXTURE0),a.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(M.UNPACK_ALIGNMENT,v.unpackAlignment);const _t=a.getParameter(M.UNPACK_ROW_LENGTH),Fe=a.getParameter(M.UNPACK_IMAGE_HEIGHT),Tt=a.getParameter(M.UNPACK_SKIP_PIXELS),Ct=a.getParameter(M.UNPACK_SKIP_ROWS),Bt=a.getParameter(M.UNPACK_SKIP_IMAGES);a.pixelStorei(M.UNPACK_ROW_LENGTH,Qe.width),a.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Qe.height),a.pixelStorei(M.UNPACK_SKIP_PIXELS,Se),a.pixelStorei(M.UNPACK_SKIP_ROWS,Le),a.pixelStorei(M.UNPACK_SKIP_IMAGES,Ie);const Yt=r.isDataArrayTexture||r.isData3DTexture,Ye=v.isDataArrayTexture||v.isData3DTexture;if(r.isDepthTexture){const ot=D.get(r),Gt=D.get(v),$e=D.get(ot.__renderTarget),Ht=D.get(Gt.__renderTarget);a.bindFramebuffer(M.READ_FRAMEBUFFER,$e.__webglFramebuffer),a.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Kt=0;Kt<_e;Kt++)Yt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,D.get(r).__webglTexture,C,Ie+Kt),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,D.get(v).__webglTexture,de,lt+Kt)),M.blitFramebuffer(Se,Le,he,fe,ge,He,he,fe,M.DEPTH_BUFFER_BIT,M.NEAREST);a.bindFramebuffer(M.READ_FRAMEBUFFER,null),a.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(C!==0||r.isRenderTargetTexture||D.has(r)){const ot=D.get(r),Gt=D.get(v);a.bindFramebuffer(M.READ_FRAMEBUFFER,P),a.bindFramebuffer(M.DRAW_FRAMEBUFFER,Y);for(let $e=0;$e<_e;$e++)Yt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ot.__webglTexture,C,Ie+$e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ot.__webglTexture,C),Ye?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Gt.__webglTexture,de,lt+$e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Gt.__webglTexture,de),C!==0?M.blitFramebuffer(Se,Le,he,fe,ge,He,he,fe,M.COLOR_BUFFER_BIT,M.NEAREST):Ye?M.copyTexSubImage3D(pe,de,ge,He,lt+$e,Se,Le,he,fe):M.copyTexSubImage2D(pe,de,ge,He,Se,Le,he,fe);a.bindFramebuffer(M.READ_FRAMEBUFFER,null),a.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Ye?r.isDataTexture||r.isData3DTexture?M.texSubImage3D(pe,de,ge,He,lt,he,fe,_e,Ke,mt,Qe.data):v.isCompressedArrayTexture?M.compressedTexSubImage3D(pe,de,ge,He,lt,he,fe,_e,Ke,Qe.data):M.texSubImage3D(pe,de,ge,He,lt,he,fe,_e,Ke,mt,Qe):r.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,de,ge,He,he,fe,Ke,mt,Qe.data):r.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,de,ge,He,Qe.width,Qe.height,Ke,Qe.data):M.texSubImage2D(M.TEXTURE_2D,de,ge,He,he,fe,Ke,mt,Qe);a.pixelStorei(M.UNPACK_ROW_LENGTH,_t),a.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Fe),a.pixelStorei(M.UNPACK_SKIP_PIXELS,Tt),a.pixelStorei(M.UNPACK_SKIP_ROWS,Ct),a.pixelStorei(M.UNPACK_SKIP_IMAGES,Bt),de===0&&v.generateMipmaps&&M.generateMipmap(pe),a.unbindTexture()},this.initRenderTarget=function(r){D.get(r).__webglFramebuffer===void 0&&F.setupRenderTarget(r)},this.initTexture=function(r){r.isCubeTexture?F.setTextureCube(r,0):r.isData3DTexture?F.setTexture3D(r,0):r.isDataArrayTexture||r.isCompressedArrayTexture?F.setTexture2DArray(r,0):F.setTexture2D(r,0),a.unbindTexture()},this.resetState=function(){j=0,K=0,ne=null,a.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(n),t.unpackColorSpace=at._getUnpackColorSpace()}}const ba={type:"change"},ai={type:"start"},rr={type:"end"},En=new No,Ca=new Da,Id=Math.cos(70*yo.DEG2RAD),ft=new be,vt=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kn=1e-6;class qd extends Io{constructor(n,t=null){super(n,t),this.state=ke.NONE,this.target=new be,this.cursor=new be,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:en.ROTATE,MIDDLE:en.DOLLY,RIGHT:en.PAN},this.touches={ONE:Qt.ROTATE,TWO:Qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new be,this._lastQuaternion=new na,this._lastTargetPosition=new be,this._quat=new na().setFromUnitVectors(n.up,new be(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ia,this._sphericalDelta=new ia,this._scale=1,this._panOffset=new be,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new be,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yd.bind(this),this._onPointerDown=Nd.bind(this),this._onPointerUp=Od.bind(this),this._onContextMenu=kd.bind(this),this._onMouseWheel=Gd.bind(this),this._onKeyDown=Hd.bind(this),this._onTouchStart=Vd.bind(this),this._onTouchMove=Wd.bind(this),this._onMouseDown=Fd.bind(this),this._onMouseMove=Bd.bind(this),this._interceptControlDown=zd.bind(this),this._interceptControlUp=Xd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const n=this.domElement.getRootNode();n.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),n.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ba),this.update(),this.state=ke.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ft.copy(t).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vt:i>Math.PI&&(i-=vt),s<-Math.PI?s+=vt:s>Math.PI&&(s-=vt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=f!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=ft.length();f=this._clampDistance(h*this._scale);const R=h-f;this.object.position.addScaledVector(this._dollyDirection,R),this.object.updateMatrixWorld(),o=!!R}else if(this.object.isOrthographicCamera){const h=new be(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const R=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=R!==this.object.zoom;const T=new be(this._mouse.x,this._mouse.y,0);T.unproject(this.object),this.object.position.sub(T).add(h),this.object.updateMatrixWorld(),f=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(En.origin.copy(this.object.position),En.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(En.direction))<Id?this.object.lookAt(this.target):(Ca.setFromNormalAndCoplanarPoint(this.object.up,this.target),En.intersectPlane(Ca,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Kn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kn||this._lastTargetPosition.distanceToSquared(this.target)>Kn?(this.dispatchEvent(ba),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?vt/60*this.autoRotateSpeed*n:vt/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ft.setFromMatrixColumn(t,0),ft.multiplyScalar(-n),this._panOffset.add(ft)}_panUp(n,t){this.screenSpacePanning===!0?ft.setFromMatrixColumn(t,1):(ft.setFromMatrixColumn(t,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(n),this._panOffset.add(ft)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let o=ft.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=n-i.left,o=t-i.top,f=i.width,h=i.height;this._mouse.x=s/f*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),s=.5*(n.pageX+i.x),o=.5*(n.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(n.pageX+t.x)*.5,h=(n.pageY+t.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new et,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Nd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yd(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Od(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rr),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Fd(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case en.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ke.DOLLY;break;case en.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ke.ROTATE}break;case en.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(ai)}function Bd(e){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Gd(e){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(e.preventDefault(),this.dispatchEvent(ai),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(rr))}function Hd(e){this.enabled!==!1&&this._handleKeyDown(e)}function Vd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ke.TOUCH_ROTATE;break;case Qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ke.TOUCH_DOLLY_PAN;break;case Qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(ai)}function Wd(e){switch(this._trackPointer(e),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ke.NONE}}function kd(e){this.enabled!==!1&&e.preventDefault()}function zd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}export{Ya as ACESFilmicToneMapping,jd as AmbientLight,ii as BoxGeometry,Qd as CatmullRomCurve3,Jd as ConeGeometry,eu as CylinderGeometry,tu as DirectionalLight,nu as Group,iu as HemisphereLight,au as IcosahedronGeometry,ru as LatheGeometry,ou as LineBasicMaterial,su as LineSegments,yo as MathUtils,Ft as Mesh,lu as MeshStandardMaterial,qd as OrbitControls,La as OrthographicCamera,Mn as PCFShadowMap,Xr as PCFSoftShadowMap,xn as PerspectiveCamera,Oa as PlaneGeometry,cu as Raycaster,hr as SRGBColorSpace,fu as Scene,du as ShadowMaterial,uu as SphereGeometry,pu as TorusGeometry,et as Vector2,be as Vector3,Kd as WebGLRenderer,hu as WireframeGeometry};
