(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=(e,t)=>{let n=0;return t.map(t=>{e[n++]=t.x,e[n++]=t.y,e[n++]=t.z}),e},t=t=>{let n=[],r=[];return t.faces.map(e=>{n.push(t.vertices[e.a],t.vertices[e.b],t.vertices[e.c]);let{color:i,vertexColors:a}=e;a.length===3?r.push(...a):r.push(i,i,i)}),{position:e(new Float32Array(n.length*3),n),color:e(new Float32Array(r.length*3),r)}},n=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),r=(e,t,n,r)=>(e.x=t,e.y=n,e.z=r,e),i=(e,t)=>(e.x=t,e.y=t,e.z=t,e),a=e=>n(e.x,e.y,e.z),o=(e,t)=>(e.x+=t.x,e.y+=t.y,e.z+=t.z,e),s=(e,t,n)=>(e.x=t.x+n.x,e.y=t.y+n.y,e.z=t.z+n.z,e),c=(e,t,n)=>(e.x+=t.x*n,e.y+=t.y*n,e.z+=t.z*n,e),l=(e,t)=>(e.x-=t.x,e.y-=t.y,e.z-=t.z,e),u=(e,t,n)=>(e.x=t.x-n.x,e.y=t.y-n.y,e.z=t.z-n.z,e),d=(e,t)=>(e.x*=t.x,e.y*=t.y,e.z*=t.z,e),f=(e,t)=>(e.x*=t,e.y*=t,e.z*=t,e),p=(e,t)=>{let{x:n,y:r,z:i}=e,a=1/(t[3]*n+t[7]*r+t[11]*i+t[15]);return e.x=(t[0]*n+t[4]*r+t[8]*i+t[12])*a,e.y=(t[1]*n+t[5]*r+t[9]*i+t[13])*a,e.z=(t[2]*n+t[6]*r+t[10]*i+t[14])*a,e},m=(e,t)=>{let{x:n,y:r,z:i}=e,a=t.x,o=t.y,s=t.z,c=t.w,l=c*n+o*i-s*r,u=c*r+s*n-a*i,d=c*i+a*r-o*n,f=-a*n-o*r-s*i;return e.x=l*c+f*-a+u*-s-d*-o,e.y=u*c+f*-o+d*-a-l*-s,e.z=d*c+f*-s+l*-o-u*-a,e},h=(e,t)=>{let{x:n,y:r,z:i}=e;return e.x=t[0]*n+t[4]*r+t[8]*i,e.y=t[1]*n+t[5]*r+t[9]*i,e.z=t[2]*n+t[6]*r+t[10]*i,x(e)},g=(e,t)=>f(e,1/t),_=(e,t)=>(e.x=Math.min(e.x,t.x),e.y=Math.min(e.y,t.y),e.z=Math.min(e.z,t.z),e),v=(e,t)=>(e.x=Math.max(e.x,t.x),e.y=Math.max(e.y,t.y),e.z=Math.max(e.z,t.z),e),y=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z,b=e=>Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z),x=e=>g(e,b(e)||1),S=(e,t)=>f(x(e),t),C=(e,t,n,r)=>o(f(u(e,n,t),r),t),w=(e,t)=>{let{x:n,y:r,z:i}=e;return e.x=r*t.z-i*t.y,e.y=i*t.x-n*t.z,e.z=n*t.y-r*t.x,e},T=(e,t,n)=>{let r=t.x,i=t.y,a=t.z,o=n.x,s=n.y,c=n.z;return e.x=i*c-a*s,e.y=a*o-r*c,e.z=r*s-i*o,e},ee=(e,t)=>Math.sqrt(te(e,t)),te=(e,t)=>{let n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i},E=(e,t)=>(e.x=t[12],e.y=t[13],e.z=t[14],e),ne=n(1,0,0),D=n(0,1,0),O=n(0,0,1),k=1.001,A=(e,t,n)=>{let r=y(e,t);return r<0?r*=n:r/=n,c(e,t,-r)},j=n(),re=n(),M=n(),N=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),ie=(e,t)=>(e.set(t),e),ae=(e,t,n,r)=>(b(u(M,t,n))||(M.z=1),b(T(j,r,x(M)))||(Math.abs(r.z)===1?M.x+=1e-4:M.z+=1e-4,T(j,r,x(M))),T(re,M,x(j)),e[0]=j.x,e[4]=re.x,e[8]=M.x,e[1]=j.y,e[5]=re.y,e[9]=M.y,e[2]=j.z,e[6]=re.z,e[10]=M.z,e),oe=(e,t,n)=>{let[r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v]=t,[y,b,x,S,C,w,T,ee,te,E,ne,D,O,k,A,j]=n;return e.set([r*y+s*b+d*x+h*S,i*y+c*b+f*x+g*S,a*y+l*b+p*x+_*S,o*y+u*b+m*x+v*S,r*C+s*w+d*T+h*ee,i*C+c*w+f*T+g*ee,a*C+l*w+p*T+_*ee,o*C+u*w+m*T+v*ee,r*te+s*E+d*ne+h*D,i*te+c*E+f*ne+g*D,a*te+l*E+p*ne+_*D,o*te+u*E+m*ne+v*D,r*O+s*k+d*A+h*j,i*O+c*k+f*A+g*j,a*O+l*k+p*A+_*j,o*O+u*k+m*A+v*j]),e},se=(e,t)=>(e[12]=t.x,e[13]=t.y,e[14]=t.z,e),ce=e=>{let[t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g]=e,_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return e.fill(0);let S=1/x;return e.set([_*S,(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,v*S,(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,y*S,(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,b*S,(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S]),e},le=(e,t,n,r)=>{let{x:i,y:a,z:o,w:s}=n,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=r.x,x=r.y,S=r.z;return e.set([(1-(m+g))*b,(f+y)*b,(p-v)*b,0,(f-y)*x,(1-(d+g))*x,(h+_)*x,0,(p+v)*S,(h-_)*S,(1-(d+m))*S,0,t.x,t.y,t.z,1]),e},ue=(e,t,n)=>Math.min(Math.max(e,t),n),P=(e,t)=>e+Math.random()*(t-e),F=e=>e*(.5-Math.random()),de=(e=0,t=0,n=0,r=1)=>({x:e,y:t,z:n,w:r}),fe=(e,t)=>(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e),pe=(e,t)=>{let{x:n,y:r,z:i}=t,a=Math.cos(n/2),o=Math.cos(r/2),s=Math.cos(i/2),c=Math.sin(n/2),l=Math.sin(r/2),u=Math.sin(i/2);return e.x=c*o*s+a*l*u,e.y=a*l*s-c*o*u,e.z=a*o*u+c*l*s,e.w=a*o*s-c*l*u,e},me=(e,t,n)=>{let r=n/2,i=Math.sin(r);return e.x=t.x*i,e.y=t.y*i,e.z=t.z*i,e.w=Math.cos(r),e},he=(e,t)=>{let n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u,f;return d>0?(f=.5/Math.sqrt(d+1),e.w=.25/f,e.x=(l-s)*f,e.y=(i-c)*f,e.z=(a-r)*f):n>o&&n>u?(f=2*Math.sqrt(1+n-o-u),e.w=(l-s)/f,e.x=.25*f,e.y=(r+a)/f,e.z=(i+c)/f):o>u?(f=2*Math.sqrt(1+o-n-u),e.w=(i-c)/f,e.x=(r+a)/f,e.y=.25*f,e.z=(s+l)/f):(f=2*Math.sqrt(1+u-n-o),e.w=(a-r)/f,e.x=(i+c)/f,e.y=(s+l)/f,e.z=.25*f),e},ge=(e,t)=>2*Math.acos(Math.abs(ue(ve(e,t),-1,1))),_e=(e,t,n)=>{let r=ge(e,t);return r&&Se(e,t,Math.min(1,n/r)),e},ve=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,ye=e=>Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w),be=e=>{let t=ye(e);return t?(t=1/t,e.x*=t,e.y*=t,e.z*=t,e.w*=t):(e.x=0,e.y=0,e.z=0,e.w=1),e},xe=(e,t)=>{let n=e.x,r=e.y,i=e.z,a=e.w,o=t.x,s=t.y,c=t.z,l=t.w;return e.x=n*l+a*o+r*c-i*s,e.y=r*l+a*s+i*o-n*c,e.z=i*l+a*c+n*s-r*o,e.w=a*l-n*o-r*s-i*c,e},Se=(e,t,n)=>{if(n===0)return e;if(n===1)return fe(e,t);let{x:r,y:i,z:a,w:o}=e,s=o*t.w+r*t.x+i*t.y+a*t.z;if(s<0?(e.w=-t.w,e.x=-t.x,e.y=-t.y,e.z=-t.z,s=-s):fe(e,t),s>=1)return e.w=o,e.x=r,e.y=i,e.z=a,e;let c=1-s*s;if(c<=2**-52){let t=1-n;return e.w=t*o+n*e.w,e.x=t*r+n*e.x,e.y=t*i+n*e.y,e.z=t*a+n*e.z,be(e)}let l=Math.sqrt(c),u=Math.atan2(l,s),d=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return e.w=o*d+e.w*f,e.x=r*d+e.x*f,e.y=i*d+e.y*f,e.z=a*d+e.z*f,e},Ce=de(),we=N(),I=()=>({parent:void 0,children:[],components:[],position:n(),quaternion:de(),scale:n(1,1,1),matrix:N(),matrixWorld:N(),modelViewMatrix:N(),visible:!0,castShadow:!1,receiveShadow:!1}),Te=(e,t)=>{he(e.quaternion,ae(we,t,e.position,D))},L=(e,t)=>(t.parent=e,e.children.push(t),e),Ee=(e,t)=>{let n=e.children.indexOf(t);n>=0&&e.children.splice(n,1)},De=(e,t,n)=>(xe(e.quaternion,me(Ce,t,n)),e),Oe=(e,t)=>De(e,ne,t),ke=(e,t)=>De(e,D,t),Ae=(e,t)=>De(e,O,t),je=(e,t)=>{t(e),e.children.map(e=>je(e,t))},Me=e=>{le(e.matrix,e.position,e.quaternion,e.scale)},Ne=e=>{Me(e),e.parent?oe(e.matrixWorld,e.parent.matrixWorld,e.matrix):ie(e.matrixWorld,e.matrix),e.children.map(Ne)},Pe=Math.PI/180,Fe=N(),Ie=(e=60,t=1,n=.1,r=2e3)=>{let i={...I(),fov:e,near:n,far:r,aspect:t,up:a(D),matrixWorldInverse:N(),projectionMatrix:N()};return Re(i),i},Le=(e,t)=>{he(e.quaternion,ae(Fe,e.position,t,e.up))},Re=e=>{let{near:t,far:n}=e,r=t*Math.tan(Pe*.5*e.fov),i=-r,a=i*e.aspect,o=r*e.aspect,s=2*t/(o-a),c=2*t/(r-i),l=(o+a)/(o-a),u=(r+i)/(r-i),d=-(n+t)/(n-t),f=-2*n*t/(n-t);e.projectionMatrix.set([s,0,0,0,0,c,0,0,l,u,d,-1,0,0,f,0])},ze=e=>{Ne(e),e.matrixWorldInverse.set(e.matrixWorld),ce(e.matrixWorldInverse)},Be=de(),Ve=de(),He=e=>{let t=n(),r=n();var i={object:e,sensitivity:.002,enabled:!1,onMouseMove(n){i.enabled&&(t.x=ue(t.x-n.movementY*i.sensitivity,-Math.PI/2,Math.PI/2),r.y-=n.movementX*i.sensitivity,Object.assign(e.quaternion,xe(pe(Ve,r),pe(Be,t))))}};return addEventListener(`mousemove`,i.onMouseMove),i},Ue=(e=-1,t=1,n=1,r=-1,i=.1,o=2e3)=>{let s={...I(),left:e,right:t,top:n,bottom:r,near:i,far:o,up:a(D),matrixWorldInverse:N(),projectionMatrix:N()};return We(s),s},We=e=>{let{left:t,right:n,top:r,bottom:i,near:a,far:o}=e,s=1/(n-t),c=1/(r-i),l=1/(o-a),u=(n+t)*s,d=(r+i)*c,f=(o+a)*l;e.projectionMatrix.set([2*s,0,0,0,0,2*c,0,0,0,0,-2*l,0,-u,-d,-f,1])},Ge=n(),Ke=()=>({camera:Ue(-5,5,5,-5,.5,500),matrix:N()}),qe=(e,t)=>{let{camera:n,matrix:r}=e;E(n.position,t.matrixWorld),Le(n,E(Ge,t.target.matrixWorld)),ze(n),r.set([.5,0,0,0,0,.5,0,0,0,0,.5,0,.5,.5,.5,1]),oe(r,oe(r,r,n.projectionMatrix),n.matrixWorldInverse)},Je=(e,t)=>({parent:void 0,update:e,...t}),Ye=(e,t)=>(t.parent=e,e.components.push(t),e),Xe=(e,t)=>e.components.find(t),Ze=(e,t)=>e.components.filter(t),Qe=(e,...t)=>e.components.map(e=>e.update(...t));N();var $e=n(),et=n(),tt=64,nt=(e,t)=>{let n=ee(e.position,t.position);return n<tt?0:n<512?1:n<1024?2:3},rt=(e,t)=>y(x(u(et,t.position,e.position)),m(Object.assign($e,O),e.quaternion))>.3,it=(e,t)=>{let n=nt(e,t);return!(n===3||(n===1||n===2)&&!rt(e,t))},R=new AudioContext,{sampleRate:at}=R,ot=e=>2**((e-69)/12)*440,st=(e,t=R.destination)=>{let n=new AudioBufferSourceNode(R,{buffer:e});n.connect(t),n.start()},ct=(e,t,n)=>{let r=t*at,i=new AudioBuffer({length:r,sampleRate:at}),a=i.getChannelData(0);for(let t=0;t<r;t++)a[t]=e(t/at,t,a)*n;return i},lt=(e,t,n)=>new Proxy({},{get(r,i){let a=r[i]||ct(e(ot(i)),t,n);return r[i]=a,a}}),ut=e=>t=>-1+2*(t%(1/e)*e%1),dt=e=>t=>t%(1/e)*e%1>.5?1:-1,ft=e=>()=>t=>Math.exp(-t*e),pt=()=>{let e=0;return()=>{let t=F(1),n=(e+.02*t)/1.02;return e=n,n*3.5}},mt=(e,t)=>n=>{let r=e(n),i=t(n);return(e,t,n)=>r(e,t,n)*i(e,t,n)},ht=(e,t,n)=>r=>(i,a,o)=>e(r+(i>n?t:0))(i,a,o),gt=(e,t,n,r,i)=>{let a=e+t+n+r;return()=>n=>n<e?n/e:n<e+t?1-(n-e)/t*(1-i):n<a-r?i:n<a?(a-n)/r*i:0},_t=new GainNode(R,{gain:.3}),vt=new GainNode(R,{gain:1-_t.gain.value}),yt=new ConvolverNode(R),bt=new GainNode(R);bt.connect(vt).connect(R.destination),bt.connect(yt).connect(_t).connect(R.destination),(async()=>{let e=.01,t=1.5+e,n=new OfflineAudioContext(1,t*at,at),r=new GainNode(n,{gain:0});r.gain.setValueAtTime(1,e).exponentialRampToValueAtTime(.01,t);let i=new AudioBufferSourceNode(n,{buffer:ct(pt(),t,1)});i.connect(r).connect(n.destination),i.start(),yt.buffer=await n.startRendering()})();var xt=e=>st(e,bt),St=lt(mt(mt(ut,pt),ft(24)),.5,1),Ct=()=>xt(St[16]),wt=lt(mt(mt(dt,ht(dt,ot(36)-ot(31),.1)),gt(.003,.05,.01,.03,.5)),.3,.2),Tt=()=>xt(wt[31]),Et=lt(mt(mt(ut,ht(dt,ot(27)-ot(15),.1)),gt(.001,.3,.4,.3,.7)),1,.4),Dt=()=>xt(Et[15]);addEventListener(`click`,()=>R.resume(),{once:!0});var Ot=(e,t,r)=>({a:e,b:t,c:r,color:n(1,1,1),vertexColors:[]}),kt=e=>({a:e.a,b:e.b,c:e.c,color:a(e.color),vertexColors:e.vertexColors.map(a)}),At=(...e)=>t=>e.reduce((e,t)=>t(e),t),z=e=>(...t)=>n=>e(n,...t),jt=e=>e[Math.random()*e.length|0],Mt=n(),Nt=()=>({vertices:[],faces:[]}),Pt=(e,t,r)=>{let i=e.vertices.length;for(var a=0;a<t.length;)e.vertices.push(n(t[a++],t[a++],t[a++]));for(a=0;a<r.length;)e.faces.push(Ot(i+r[a++],i+r[a++],i+r[a++]));return e},Ft=(e,t)=>(e.vertices.map(e=>m(e,t)),e),It=(e,t,n,i)=>(r(Mt,t,n,i),e.vertices.map(e=>o(e,Mt)),e),Lt=(e,t)=>{let n=e.vertices.length;return e.vertices.push(...t.vertices.map(a)),e.faces.push(...t.faces.map(e=>{let t=kt(e);return t.a+=n,t.b+=n,t.c+=n,t})),e},Rt=z(It),zt=z(Lt),Bt=(e,t,n)=>{let r=e/2,i=t/2,a=n/2,o=[r,i,a,r,i,-a,r,-i,a,r,-i,-a,-r,i,-a,-r,i,a,-r,-i,-a,-r,-i,a];return Pt(Nt(),o,[0,2,1,2,3,1,4,6,5,6,7,5,4,5,1,5,0,1,7,6,2,6,3,2,5,7,0,7,2,0,1,3,4,3,6,4])},Vt=[0],Ht=[1],Ut=[2],Wt=[4],Gt=[5],Kt=[7],qt=[0,1],Jt=[2,3],Yt=[4,5],Xt=[6,7],Zt=[0,2],Qt=[1,3],$t=[4,6],en=[5,7],tn=[0,5],nn=[1,4],rn=[2,7],an=[0,1,2,3],on=[4,5,6,7],sn=[0,1,4,5],cn=[2,3,6,7],B=[0,2,5,7],V=[1,3,4,6],ln=[0,1,2,3,4,5,6,7],un=[0,1],dn=[2,3],fn=[4,5],pn=[6,7],mn=[8,9],hn=[10,11],H=n(),gn=n(),_n=n(),vn=(e,t,n)=>{Array.isArray(t)?r(e,...t):typeof t==`object`?Object.assign(e,n,t):typeof t==`number`&&i(e,t)},yn=(e,t,n)=>(i(n,0),t.map(t=>o(n,e.vertices[t])),g(n,t.length),n),bn=(e,t)=>(yn(e,t,H),It(e,-H.x,-H.y,-H.z)),xn=(e,t,n,r)=>(yn(e,t,gn),yn(n,r,_n),u(H,gn,_n),It(e,-H.x,-H.y,-H.z)),U=z(bn),W=z(xn),Sn=(e,t=n())=>(n,...r)=>(r.map(([r,i])=>{vn(H,i,t),r.map(t=>e(n.vertices[t],H))}),n),G=z(Sn(o)),Cn=z(Sn(d,n(1,1,1))),wn=((e,t=n())=>n=>(r,...i)=>(i.map(([i,a=t[n]])=>{Object.assign(H,t),H[n]=a,i.map(t=>e(r.vertices[t],H))}),r))(o),Tn=z(wn(`x`));wn(`y`);var En=z(wn(`z`)),Dn=(()=>{let e=n(),t=new Map([[an,on],[sn,cn],[B,V],[on,an],[cn,sn],[V,B]]);return(n,r,i)=>{vn(H,i,e);let a=t.get(r),s=Bt();return r.map((e,t)=>{let r=a[t];Object.assign(s.vertices[a===an||a===on?r^1:r],n.vertices[e]),o(Object.assign(s.vertices[e],n.vertices[e]),H)}),s}})(),K=z((e,...t)=>(t.flat().sort((e,t)=>e-t).reverse().map(t=>e.faces.splice(t,1)),e)),On=n(0,-800,0),kn=(e=n(),t=1)=>({...I(),color:e,intensity:t,target:I(),shadow:Ke()}),An=new WeakMap,jn=(e,t,n)=>{let r=An.get(e)||{};return An.set(e,r),r[t]=r[t]||[],r[t].push(n),e},Mn=(e,t,n)=>(An.get(e)?.[t]?.map(e=>e(n)),e),Nn=e=>{let t=0,n=e;return(r,i=!0)=>{if(n+=r,n-t>e)return i&&(t=n),i}},Pn=()=>{let e={};return addEventListener(`keydown`,t=>e[t.code]=!0),addEventListener(`keyup`,t=>e[t.code]=!1),e},q=()=>({color:n(1,1,1),specular:n(1/15,1/15,1/15),shininess:30,emissive:n(),fog:!0}),J=(e,t)=>({...I(),geometry:e,material:t}),Fn=n(),In=(e=n(1/0,1/0,1/0),t=n(-1/0,-1/0,-1/0))=>({min:e,max:t}),Ln=(e,t)=>(Object.assign(e.min,t.min),Object.assign(e.max,t.max),e),Rn=e=>(e.min.x=e.min.y=e.min.z=1/0,e.max.x=e.max.y=e.max.z-=1/0,e),zn=e=>e.max.x<e.min.x||e.max.y<e.min.y||e.max.z<e.min.z,Bn=(e,t)=>zn(e)?i(t,0):f(s(t,e.min,e.max),.5),Vn=(e,t)=>zn(e)?i(t,0):u(t,e.max,e.min),Hn=(e,t)=>(_(e.min,t),v(e.max,t),e),Un=(e,t)=>(Ne(t),je(t,t=>t.geometry?.vertices.map(n=>Hn(e,p(Object.assign(Fn,n),t.matrixWorld)))),e),Wn=(e,t)=>(Rn(e),Un(e,t),e),Gn=(e,t)=>e.min.x<=t.x&&t.x<=e.max.x&&e.min.y<=t.y&&t.y<=e.max.y&&e.min.z<=t.z&&t.z<=e.max.z,Kn=(e,t)=>!(e.max.x<=t.min.x||e.min.x>=t.max.x||e.max.y<=t.min.y||e.min.y>=t.max.y||e.max.z<=t.min.z||e.min.z>=t.max.z),qn=(e,t)=>Hn(Hn(e,t.min),t.max),Jn=(e,t)=>(o(e.min,t),o(e.max,t),e),Yn=(e,t,n)=>{e.a===t&&(e.vertexColors[0]=n),e.b===t&&(e.vertexColors[1]=n),e.c===t&&(e.vertexColors[2]=n)},Xn=z((e,...t)=>(t.map(([t,r])=>{let i=n();vn(i,r),e.faces.map(e=>t.map(t=>Yn(e,t,i)))}),e)),Zn=z((e,...t)=>(t.map(([t,n])=>t.map(t=>vn(e.faces[t].color,n))),e)),Qn=.01,$n=de(),er=n(),Y=(e,...t)=>At(...t)(Bt(...e)),tr=(...e)=>At(...e.map(zt))(Nt()),nr=(e,t,n)=>{let r=(t-e)/(n+1);return[...Array(n)].map((t,n)=>e+r*(n+1))},rr=(e,t,n,r)=>{u(er,t,e);let i=er.x,a=er.z;return Y(i?[i,r,n]:[n,r,a],U(i?Yt:nn),Rt(e.x,e.y,e.z))},ir=(e,t,n=e)=>{let r=Y([n,3/16*t,e],U(cn)),i=At(()=>Dn(r,sn,{y:3/4*t}),Tn([qt,-n/2]),K(pn))();return tr(r,i,At(()=>Dn(i,sn,{y:1/16*t}),Tn([qt,-n/2]),K(pn))())},ar=Bt(1,1,1),or=q();i(or.emissive,1);var sr=q();i(sr.color,0);var cr=(e,t)=>{let i=I(),a=Bn(e,n()),s=Vn(e,n()),l=[...Array(t)].map(()=>{let e=J(ar,or);e.castShadow=!0,r(e.scale,P(4,s.x),P(4,2*s.y),P(4,s.z)),r(e.position,F(.5),F(.5),F(.5));let t=J(ar,sr);return r(t.scale,1-2/e.scale.x,1-2/e.scale.y,1-2/e.scale.z),e.scale.x*=-1,L(e,t),o(d(e.position,s),a),L(i,e),n(0,P(32,256),0)});return Ye(i,Je(e=>{let t=0;i.children.map((n,r)=>{c(n.position,l[r],e),f(n.scale,1-5*e),b(n.scale)>Qn&&t++}),t||Ee(i.parent,i)}))},lr=()=>{let e=12288,t=2560/2,n=5/6*t,r=Y([t,128,e],U(an),Tn([en,n],[ln,-512/2]),G([rn,{y:128}]),K(fn)),i=At(()=>Dn(r,sn,{y:512}),G([$t,{x:n}],[tn,{y:-512}]),K(dn,pn))(),a=At(()=>Dn(i,on,{x:-n}),G([en,{x:n}],[Wt,{y:-512}]),K(un,pn))(),o=Y([t,128,e],U(on),Tn([Zt,-n],[ln,512/2]),G([rn,{y:128}]),K(fn)),s=At(()=>Dn(o,sn,{y:512}),G([Qt,{x:-n}],[tn,{y:-512}]),K(un,pn))(),c=tr(r,i,a,o,s,At(()=>Dn(s,an,{x:n}),G([Zt,{x:-n}],[Ht,{y:-512}]),K(dn,pn))(),Y([768,384,3072],U(rn),G([ln,{z:-e/3}],[nn,{y:-384/3}])));return tr(c,pr(c,2048,()=>Y([P(16,128),P(16,128),P(16,64)],U(B))))},ur=Y([.5,.5,1]),dr=[[1,1,1],[1,.75,0],[1,.5,0]].map(e=>{let t=q();return r(t.color,...e),r(t.emissive,...e),t}),fr=e=>{let t=I(),n=[...Array(e)].map(()=>{let e=J(ur,jt(dr));e.castShadow=!0,i(e.scale,P(1,8)),r(e.position,F(4),F(4),F(4)),L(t,e);let n=S(a(e.position),P(64,128));return Te(e,n),n});return Ye(t,Je(e=>{let r=0;t.children.map((t,i)=>{c(t.position,c(n[i],On,e),e),f(t.scale,1-8*e),b(t.scale)>Qn&&r++}),r||Ee(t.parent,t)}))},pr=(()=>{let e=n(),t=n(),r=N(),a=n(),o=(n,r,i)=>b(w(u(e,i,r),u(t,n,r)))*.5,s=(n,r,i)=>x(w(u(e,i,r),u(t,n,r))),l=(e,t,n)=>{let r=Math.random(),a=Math.random();r+a>1&&(r=1-r,a=1-a);let o=1-r-a;return c(c(c(i(er,0),e,r),t,a),n,o)};return(e,t,n)=>{let i=0,c=e.faces.map(t=>(i+=o(e.vertices[t.a],e.vertices[t.b],e.vertices[t.c]),i)),u=e=>{let t=0,n=c.length-1;for(;t<=n;){let r=Math.ceil((t+n)/2);if(!r||c[r-1]<=e&&c[r]>e)return r;e<c[r]?n=r-1:t=r+1}return-1};return tr(...[...Array(t)].map(()=>{let t=u(Math.random()*i),o=e.faces[t],c=e.vertices[o.a],d=e.vertices[o.b],f=e.vertices[o.c],m=l(c,d,f);se(ae(r,a,s(c,d,f),D),m);let h=n();return h.vertices.map(e=>p(e,r)),h}))}})(),mr=()=>{let e=n(16,1,1);return tr(Y([40,12,16],U(cn),G([ln,{y:60}],[qt,{x:-40/2}],[Yt,{x:40/2}],[tn,{z:-16}],[Ut,{x:-40/2}],[Kt,{x:40/2}],[rn,{y:-8}])),Y([18,56,16],U(Jt),G([ln,{x:-4/2}],[Xt,{x:18}],[qt,{y:-8}],[rn,{z:-16}],[Gt,{z:-16}])),Y([18,56,16],U(Xt),G([ln,{x:4/2}],[Jt,{x:-18}],[Yt,{y:-8}],[rn,{z:-16}],[Vt,{z:-16}])),Y([8,8,8],e=>Ft(e,pe($n,r(er,Math.PI/4,-Math.PI/4,0))),Zn([un,e],[fn,e],[mn,e]),Rt(0,56-4/2,-16/4)))},hr=(e,t,n,r)=>{let i=e-4*r,a=n-4*r,o=K(un,dn,mn,hn),s=Y([e-2*r,t,a],o),c=Y([i,t,r],W(V,s,B),Tn([$t,-r],[Qt,r]),o),l=Y([i,t,r],W(B,s,V),Tn([en,-r],[Zt,r]),o),u=[r,t,r],d=Xn([ln,[.4,.4,.5]]),f=r/2;return tr(s,c,l,Y([i,t,r],W(V,c,B),Tn([en,-f],[Zt,f]),K(un,dn,hn),d),Y([i,t,r],W(B,l,V),Tn([$t,-f],[Qt,f]),K(un,dn,mn),d),Y([r,t,a],W(on,s,an),En([Qt,-f],[Zt,f]),K(dn,mn,hn),d),Y([r,t,a],W(an,s,on),En([$t,-f],[en,f]),K(un,mn,hn),d),Y(u,W($t,s,Zt),G([an,{z:f}],[B,{x:-r}],[Zt,{x:-f,z:f}]),d),Y(u,W(Qt,s,en),G([on,{z:f}],[B,{x:r}],[en,{x:f,z:f}]),d),Y(u,W(en,s,Qt),G([an,{z:-f}],[V,{x:-r}],[Qt,{x:-f,z:-f}]),d),Y(u,W(Zt,s,$t),G([on,{z:-f}],[V,{x:r}],[$t,{x:f,z:-f}]),d))},gr=()=>{let e=n(16,1,1),t=Y([16,16,6],Cn([B,{x:.5,y:.5}]),Zn([mn,e]),K(hn));return Ft(tr(t,Y([16,16,26],W(B,t,V),Cn([V,{x:0,y:0}]),K(mn))),pe($n,r(er,0,0,Math.PI/4)))},_r=(e,t)=>{let n=[];for(let r=0;r<t;r++){let t=2*Math.PI*Math.random(),r=2*Math.random()-1,i=Math.sqrt(1-r*r),a=P(8,32);n.push(Y([a,a,a],Rt(e*i*Math.cos(t),e*i*Math.sin(t),e*r)))}return tr(...n)},vr=(e,t)=>{let r={physics:t,boundingBox:Wn(In(),e),velocity:n(),collide(){}};return Je(t=>c(e.position,r.velocity,t),r)},yr=(e,t)=>Ye(e,vr(e,t)),X=e=>Xe(e,br),br=e=>e.physics,xr=e=>{let t=[];return je(e,e=>{t.push(...Ze(e,br))}),t},Sr=(()=>{let e=n();return(t,n,i,a)=>{let s=a.max.x-i.min.x,u=i.max.x-a.min.x,d=a.max.y-i.min.y,p=i.max.y-a.min.y,m=a.max.z-i.min.z,h=i.max.z-a.min.z,g=0;s>0&&u>0&&(g=s<u?s:-u);let _=0;d>0&&p>0&&(_=d<p?d:-p);let v=0;m>0&&h>0&&(v=m<h?m:-h);let y=Math.abs(g),C=Math.abs(_),w=Math.abs(v);y<C&&y<w?r(e,g,0,0):C<w?r(e,0,_,0):r(e,0,0,v);let T=t.parent,ee=n.parent;t.physics===1?(c(ee.position,e,-k),A(n.velocity,x(e),k)):n.physics===1?(c(T.position,e,k),A(t.velocity,x(e),k)):(f(e,.5),b(e)<1.001&&S(e,k),o(T.position,e),l(ee.position,e))}})(),Cr=(()=>{let e=n(),t=n();return(n,a,o,s,c)=>{if(Kn(s,c)){n.allsolid=!0,n.fraction=0;return}i(e,1/0),u(t,o.velocity,a.velocity);let l=t.x,d=t.y,f=t.z,p=c.max.x-s.min.x,m=s.max.x-c.min.x,h=c.max.y-s.min.y,g=s.max.y-c.min.y,_=c.max.z-s.min.z,v=s.max.z-c.min.z,y=0,b=1/0;if(l<0){if(p<0)return;p>0&&(b=Math.min(-p/l,b)),m<0&&(e.x=m/l,y=Math.max(e.x,y))}else if(l>0){if(m<0)return;m>0&&(b=Math.min(m/l,b)),p<0&&(e.x=-p/l,y=Math.max(e.x,y))}if(!(y>b)){if(d<0){if(h<0)return;h>0&&(b=Math.min(-h/d,b)),g<0&&(e.y=g/d,y=Math.max(e.y,y))}else if(d>0){if(g<0)return;g>0&&(b=Math.min(g/d,b)),h<0&&(e.y=-h/d,y=Math.max(e.y,y))}if(!(y>b)){if(f<0){if(_<0)return;_>0&&(b=Math.min(-_/f,b)),v<0&&(e.z=v/f,y=Math.max(e.z,y))}else if(f>0){if(v<0)return;v>0&&(b=Math.min(v/f,b)),_<0&&(e.z=-_/f,y=Math.max(e.z,y))}y>b||(n.fraction=y,e.x<e.y&&e.x<e.z?r(n.normal,Math.sign(l),0,0):e.y<e.z?r(n.normal,0,Math.sign(d),0):r(n.normal,0,0,Math.sign(f)))}}}})(),wr=(e,t)=>Jn(Ln(e,t.boundingBox),t.parent.position),Tr=(()=>{let e=In(),t=In(),n=In();return r=>{for(let o=0;o<r.length;o++){let s=r[o];for(let c=o+1;c<r.length;c++){let o=r[c];if(!(s.physics===1&&o.physics===1)&&!(s.physics===4&&o.physics===4)){var i,a;if(!((s.physics===4||o.physics===4)&&(s.physics===4?(i=s,a=o):(i=o,a=s),Gn(wr(e,a),i.parent.position)&&i.collide(a.parent)===!1))&&Kn(wr(t,s),wr(n,o))){if(s.collide(o.parent)===!1||o.collide(s.parent)===!1)continue;Mn(s.parent,`collide`,o.parent),Mn(o.parent,`collide`,s.parent),Sr(s,o,t,n)}}}}}})(),Er=270,Dr=100,Or=10,kr=1,Ar=6,jr=320,Mr=800,Nr=a(D),Pr=(e,t)=>({object:e,body:t,scene:void 0,command:n(),dt:0,gravity:Mr,speed:jr,viewForward:n(),viewRight:n(),jump:0,walking:!1}),Fr=e=>{e.command.y<10&&(e.jump=!1),Yr(e),e.walking?Wr(e):Gr(e),Yr(e)},Ir=()=>({allsolid:!1,fraction:1,endpos:n(),normal:n()}),Lr=(e,t)=>(e.allsolid=t.allsolid,e.fraction=t.fraction,Object.assign(e.endpos,t.endpos),Object.assign(e.normal,t.normal),e),Rr=(()=>{let e=Ir();return t=>(Lr(t,e),t)})(),zr=(()=>{let e=In(),t=In(),r=In(),i=n(),a=n(),o=Ir();return(n,s,c,l,d)=>{Rr(c),Object.assign(i,s.velocity),Object.assign(s.velocity,u(a,d,l)),qn(Jn(Ln(r,s.boundingBox),d),Jn(Ln(e,s.boundingBox),l));for(let i=0;i<n.length;i++){let a=n[i];Kn(r,Jn(Ln(t,a.boundingBox),a.parent.position))&&(Cr(Rr(o),s,a,e,t),o.fraction<c.fraction&&Lr(c,o))}Object.assign(s.velocity,i),C(c.endpos,l,d,c.fraction)}})(),Br=(e,t,n,r)=>{zr(xr(e.scene).filter(t=>t!==e.body&&t.physics!==4),e.body,t,n,r)},Vr=5,Hr=(()=>{let e=n(),t,r=[...Array(Vr)].map(()=>n()),a=n(),s=Ir(),l=n(),u=n(),d=n();return(n,p)=>{p&&(Object.assign(u,n.body.velocity),u.y-=n.gravity*n.dt,n.body.velocity.y=(n.body.velocity.y+u.y)*.5,n.walking&&A(n.body.velocity,Nr,k));let m=n.dt;n.walking?(t=1,Object.assign(r[0],Nr)):t=0,x(Object.assign(r[t],n.body.velocity)),t++;let h;for(h=0;h<4;h++){if(c(Object.assign(l,n.object.position),n.body.velocity,m),Br(n,s,n.object.position,l),s.allsolid)return n.body.velocity.y=0,!0;if(s.fraction>0&&Object.assign(n.object.position,s.endpos),s.fraction===1)break;if(m-=m*s.fraction,t>=Vr)return i(n.body.velocity,0),!0;for(var g=0;g<t;g++)if(y(s.normal,r[g])>.99){o(n.body.velocity,s.normal);break}if(!(g<t)){for(Object.assign(r[t],s.normal),t++,g=0;g<t;g++)if(!(y(n.body.velocity,r[g])>=.1)){A(Object.assign(a,n.body.velocity),r[g],k),p&&A(Object.assign(d,u),r[g],k);for(let o=0;o<t;o++)if(o!==g&&!(y(a,r[o])>=.1)&&(A(a,r[o],k),p&&A(d,r[o],k),!(y(a,r[g])>=0))){f(Object.assign(a,x(T(e,r[g],r[o]))),y(e,n.body.velocity)),p&&f(Object.assign(d,e),y(e,u));for(let e=0;e<t;e++)if(!(e===g||e===o)&&!(y(a,r[e])>=.1))return i(n.body.velocity,0),!0}Object.assign(n.body.velocity,a),p&&Object.assign(u,d);break}}}return p&&Object.assign(n.body.velocity,u),h!==0}})(),Ur=e=>e.command.y<10?!1:e.jump?(e.command.y=0,!1):(e.walking=!1,e.jump=!0,e.body.velocity.y=Er,Tt(),!0),Wr=(()=>{let e=n(),t=n();return n=>{if(Ur(n)){Gr(n);return}Kr(n);let r=n.command.z,a=n.command.x,o=qr(n);n.viewForward.y=0,n.viewRight.y=0,c(c(i(e,0),x(A(n.viewForward,Nr,k)),r),x(A(n.viewRight,Nr,k)),a);let s=b(Object.assign(t,e));x(t),s*=o,Jr(n,t,s,Or),A(n.body.velocity,Nr,k),!(!n.body.velocity.x&&!n.body.velocity.z)&&Hr(n,!1)}})(),Gr=(()=>{let e=n(),t=n();return n=>{Kr(n);let r=n.command.z,a=n.command.x,o=qr(n);n.viewForward.y=0,n.viewRight.y=0,c(c(i(e,0),x(n.viewForward),r),x(n.viewRight),a),e.y=0,Object.assign(t,e);let s=b(t);x(t),s*=o,Jr(n,t,s,kr),n.walking&&A(n.body.velocity,Nr,k),Hr(n,!0)}})(),Kr=(()=>{let e=n();return t=>{let n=t.body.velocity;Object.assign(e,n),t.walking&&(e.y=0);let r=b(e);if(r<1){n.x=0,n.z=0;return}let i=0;t.walking&&(i+=(r<Dr?Dr:r)*Ar*t.dt);let a=r-i;a<0&&(a=0),a/=r,f(n,a)}})(),qr=e=>{let t=Math.max(Math.abs(e.command.x),Math.abs(e.command.y),Math.abs(e.command.z));if(!t)return 0;let n=b(e.command);return e.speed*t/(127*n)},Jr=(e,t,n,r)=>{let i=n-y(e.body.velocity,t);if(i<=0)return;let a=r*e.dt*n;a>i&&(a=i),c(e.body.velocity,t,a)},Yr=(()=>{let e=n(),t=Ir();return n=>{if(Object.assign(e,n.object.position),e.y-=.25,Br(n,t,n.object.position,e),t.fraction===1){n.walking=!1;return}n.walking=!0}})(),Xr=Pn(),Zr=!1,Qr=de(),$r=n(),ei=n(),ti=(e,t,a)=>{let s=I();L(t,s);let l=n(.2,.2,.3),d=kn(n(1,1,1));r(d.position,64,256,-64),L(s,d),a.far=16384;let h=I();L(h,a),L(s,h);let g=yr(J(Bt(30,56,30),q()),2);g.position.y+=56/2,g.visible=!1,Object.assign(h.position,g.position),L(s,g);let _=X(g);_.update=()=>{};let v=Pr(g,_);v.scene=s;let C=100,T=0,te=()=>{let e=p(Object.assign($r,h.position),d.shadow.camera.matrixWorldInverse);Object.assign(d.shadow.camera,{left:e.x-512,right:e.x+512,top:e.y+512,bottom:e.y-512}),We(d.shadow.camera)};Ne(d),qe(d.shadow,d),te();let E=e=>{let t=q();r(t.color,.7,.7,.75);let n=yr(J(e,t),1);return n.castShadow=!0,n.receiveShadow=!0,L(s,n),n};[[[160,128,256],[-512,0,128],[U(Xt)]]].map(([e,t,n=[U(cn)]])=>r(E(Y(e,...n)).position,...t)),[[[1024,16,768,8],[0,0,0]],[[128,8,256,8],[256,48,-240]],[[128,8,172,8],[-256,16,-192]],[[160,8,246,8],[128,160,0]],[[512,8,352,8],[0,32,-544]],[[128,8,128,8],[256,64,0]],[[128,8,160,8],[320,96,144]],[[480,8,128,8],[0,128,256]],[[128,24,128,8],[-160,12,0]],[[128,24,128,8],[-160,96,0]]].map(([e,t])=>r(E(hr(...e)).position,...t)),[].map(([e,t,r,i])=>E(rr(n(...e),n(...t),r,i))),nr(256,0,4).map(e=>[-340,0,e]).map(e=>r(E(ir(24,128)).position,...e));let ne=q();i(ne.emissive,1),ne.fog=!1,L(h,J(_r(15360,512),ne));let k=q();i(k.specular,1),k.fog=!1;let A=J(lr(),k);r(A.position,512,1536,-6144),ke(A,-Math.PI/2),Oe(A,-Math.PI/8),Ae(A,-Math.PI/4),L(s,A);let j=()=>{let e=q(),t=J(mr(),e);return i(e.color,.5),i(e.specular,1),t.castShadow=!0,t.receiveShadow=!0,t},re=(e,t)=>{let n=t,r,i=X(e);return jn(e,`collide`,t=>{if(X(t).physics===4)if(n--,clearTimeout(r),n<=0){Dt(),ce(e.position);let t=cr(i.boundingBox,16);Object.assign(t.position,e.position),Object.assign(t.quaternion,e.quaternion),L(s,t),Ee(s,e)}else e.material.emissive.x=1,r=setTimeout(()=>e.material.emissive.x=0,48)}),e},M=(e,t)=>{let n=0;return Ye(e,Je(r=>{n+=r,n>t&&Ee(e.parent,e)}))},N=()=>{let e=q();i(e.color,.5),i(e.specular,1);let t=J(gr(),e);return t.castShadow=!0,t.receiveShadow=!0,t},ie=()=>{let e=Bt(2,2,8),t=q();r(t.emissive,2,.5,.5);let n=M(yr(J(e,t),4));return n.castShadow=!0,n},ae=(e=2)=>{C-=e,C<=0&&(document.exitPointerLock(),document.querySelector(`.e`).hidden=!1)},oe=()=>{let e=0,t=n(),r=n(),a=Ir(),o=Nn(1.1);var l=Ye(re(yr(j(),2),5),Je(n=>{e===0&&it(l,g);let d=X(l);c(d.velocity,On,n);let p=nt(l,g),h=e===2||it(l,g)?u($r,g.position,l.position):i($r,0);if(h.y=0,x(h),b(h)&&(me(Qr,D,Math.atan2(h.x,h.z)),_e(l.quaternion,Qr,Math.PI*n),S(Object.assign(ei,h),160),Object.assign(t,l.position),c(Object.assign(r,t),ei,16*n),Object.assign(t,r),r.y-=.25,zr(fe,d,a,t,r),a.allsolid),p!==0){let e=d.velocity.y;d.velocity.y=0;let t=b(d.velocity),r=Math.max(t-Math.max(t,100)*6*n,0);S(d.velocity,r);let i=y(d.velocity,h);d.velocity.y=e;let a=160-i;if(a>0){let e=Math.min(10*n*160,a);c(d.velocity,h,e)}}let _=Object.assign(ei,l.position);if(_.y+=52,o(n,it(l,g))){let e=ie();Object.assign(e.position,_),Te(e,g.position);let t=X(e);f(m(Object.assign(t.velocity,O),e.quaternion),400),L(s,e),t.collide=t=>{if(t.isEnemy)return!1;t===g&&ae(),ce(e.position),Ee(s,e)}}}));return l.isEnemy=!0,l.isPhantom=!0,jn(l,`collide`,t=>{X(t).physics===4&&(e=2)}),l},se=()=>{let e=0,t=n(),r=n(),a=n(),l=Ir(),d=Nn(1.3),p=P(64,128);var h=Ye(re(yr(N(),2),2),Je(n=>{e===0&&it(h,g)&&(e=2);let _=X(h);f(Object.assign(t,_.velocity),-.5);let v=nt(h,g),C=e===2||it(h,g)?u($r,g.position,h.position):i($r,0);x(C),b(C)&&(me(Qr,D,Math.atan2(C.x,C.z)),_e(h.quaternion,Qr,Math.PI*n),S(Object.assign(ei,C),400));let w=_.velocity.y;if(w<=32&&(Object.assign(r,h.position),Object.assign(a,r),a.y-=32,zr(fe,_,l,r,a),l.fraction!==1)){let e=Math.max(16,-w*.5);t.y+=e*(1-l.fraction)}if(v!==0&&ee(h.position,g.position)>p){let e=b(_.velocity),t=Math.max(e-Math.max(e,20)*.3*n,0);S(_.velocity,t);let r=400-y(_.velocity,C);if(r>0){let e=Math.min(10*n*400,r);c(_.velocity,C,e)}}let T=Object.assign(ei,h.position);if(d(n,it(h,g))){let e=ie();Object.assign(e.position,T),Te(e,g.position);let t=X(e);f(m(Object.assign(t.velocity,O),e.quaternion),400),L(s,e),t.collide=t=>{if(t.isEnemy)return!1;t===g&&ae(),ce(e.position),Ee(s,e)}}o(_.velocity,t)}));return h.isEnemy=!0,h.isScanner=!0,jn(h,`collide`,t=>{X(t).physics===4&&(e=2)}),h};var ce=e=>{let t=fr(4);Object.assign(t.position,e),L(s,t)};let le=Nn(.1),de,fe,pe=Nn(7),he=Nn(3);return Ye(s,Je(e=>{if(de=xr(s),fe=de.filter(e=>e.physics===1),fe.map(e=>e.parent),Tr(de),v.dt=e,i(v.command,0),(Xr.KeyW||Xr.ArrowUp)&&v.command.z++,(Xr.KeyS||Xr.ArrowDown)&&v.command.z--,(Xr.KeyA||Xr.ArrowLeft)&&v.command.x--,(Xr.KeyD||Xr.ArrowRight)&&v.command.x++,Xr.Space&&v.command.y++,f(v.command,127),r(v.viewForward,0,0,-1),r(v.viewRight,1,0,0),m(r(v.viewForward,0,0,-1),a.quaternion),x(w(r(v.viewRight,0,-1,0),v.viewForward)),Fr(v),Object.assign(h.position,g.position),te(),C=ue(C+1*e,0,100),document.querySelector(`.h`).textContent=Math.round(C),document.querySelector(`.s`).textContent=T,g.position.y<=-2048&&ae(100),le(e,Zr)){Ct();let e=Bt(2,2,8),t=q();r(t.emissive,.5,.5,2);let n=M(yr(J(e,t),4),4);n.castShadow=!0,Te(n,c(r($r,F(1),F(1),F(1)),m(Object.assign(ei,O),a.quaternion),-16));let i=X(n);c(i.velocity,m(Object.assign($r,O),n.quaternion),800),o(m(r(n.position,30/4,-56/8,0),a.quaternion),g.position),L(s,n),i.collide=e=>{if(e===g)return!1;ce(n.position),Ee(s,n),e.isPhantom&&(T+=100),e.isScanner&&(T+=50)}}if(pe(e)){let e=oe();r(e.position,P(-160,150),P(128,32),P(-512,-640)),L(s,e)}if(he(e)){let e=se();r(e.position,P(-160,160),P(128,32),P(-512,-720)),L(s,e)}})),addEventListener(`mousedown`,()=>Zr=!0),addEventListener(`mouseup`,()=>Zr=!1),{ambient:l,directional:d}},ni=(e,t)=>{document.addEventListener(`pointerlockchange`,()=>e.enabled=t===document.pointerLockElement),addEventListener(`click`,()=>t.requestPointerLock())},ri=(e,t,n)=>{let r=e.createProgram(),i=(t,n)=>{let i=e.createShader(t);e.shaderSource(i,n),e.compileShader(i),e.attachShader(r,i)};return i(e.VERTEX_SHADER,t),i(e.FRAGMENT_SHADER,n),e.linkProgram(r),r},ii=(e,t)=>{let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),n},ai=(e,t,n,r)=>{e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,r,e.FLOAT,!1,0,0)},oi=(e,t,n)=>e.uniformMatrix4fv(t,!1,n),si=(e,t,n)=>e.uniform3f(t,n.x,n.y,n.z),ci=(e,t)=>{let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let{name:r}=e.getActiveAttrib(t,i);n[r]=e.getAttribLocation(t,r)}return n},li=(e,t)=>{let n={},r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let{name:r}=e.getActiveUniform(t,i);n[r]=e.getUniformLocation(t,r)}return n},ui=`#version 300 es

precision highp float;
precision highp int;

vec4 packDepthToRGBA(float v) {
  vec4 r = vec4(
    fract(
      v *
      // PackFactors
      vec3(256 * 256 * 256, 256 * 256, 256)
    ),
    v
  );
  r.yzw -=
    r.xyz *
    // ShiftRight8
    1. / 256.;
  return
    r *
    // PackUpscale
    256. / 255.;
}

in vec2 vHighPrecisionZW;

out vec4 color;

void main() {
  color = packDepthToRGBA(
    // fragCoordZ
    .5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + .5
  );
}`,di=`#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;

out vec2 vHighPrecisionZW;

void main() {
  gl_Position =
    projectionMatrix *
    // mvPosition
    modelViewMatrix * vec4(position, 1);
  vHighPrecisionZW = gl_Position.zw;
}`,fi=`#version 300 es

precision highp float;
precision highp int;

#define saturate(a) clamp(a, 0., 1.)

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

in vec3 vColor;

uniform bool fog;
uniform vec3 fogColor;
in vec3 vFogPosition;
uniform float fogNear;
uniform float fogFar;

uniform bool receiveShadow;
uniform vec3 ambient;

struct DirectionalLight {
  vec3 direction;
  vec3 color;
};

uniform DirectionalLight directionalLight;

in vec3 vViewPosition;

uniform sampler2D directionalShadowMap;
in vec4 vDirectionalShadowCoord;

out vec4 color;

void main() {
  vec3 diffuseColor = diffuse * vColor;

  vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  vec3 viewDir = normalize(vViewPosition);

  vec4 shadowCoord = vDirectionalShadowCoord;
  shadowCoord.xyz /= shadowCoord.w;
  vec3 irradiance =
    // dotNL
    saturate(dot(normal, directionalLight.direction)) *
    directionalLight.color *
    // getShadow
    (receiveShadow &&
    all(
      bvec2(
        all(
          bvec4(
            shadowCoord.x >= 0.,
            shadowCoord.x <= 1.,
            shadowCoord.y >= 0.,
            shadowCoord.y <= 1.
          )
        ),
        shadowCoord.z <= 1.
      )
    )
      ? // texture2DCompare
        step(
          shadowCoord.z,
          // unpackRGBAToDepth
          dot(
            texture(directionalShadowMap, shadowCoord.xy),
            // UnpackFactors
            // UnpackDownscale
            255. / 256. /
            // PackFactors
            vec4(256 * 256 * 256, 256 * 256, 256, 1.)
          )
        )
      : 1.);
  vec3 halfDir = normalize(directionalLight.direction + viewDir);
  float dotVH = saturate(dot(viewDir, halfDir));
  float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);

  color = vec4(
    mix(
      // outgoingLight
      // directDiffuse
      irradiance * diffuseColor +
      // indirectDiffuse
      ambient * diffuseColor +
      // directSpecular
      irradiance *
        // F_Schlick
        (specular * (1. - fresnel) + fresnel) *
        // G_BlinnPhong_Implicit
        .25 *
        // D_BlinnPhong
        (shininess * .5 + 1.) *
        pow(
          // dotNH
          saturate(dot(normal, halfDir)),
          shininess
       ) +
      emissive,
      fogColor,
      // fogFactor
      fog
        ? smoothstep(
            fogNear,
            fogFar,
            // fogDepth
            length(vFogPosition)
          )
        : 0.
    ),
    1
  );
}`,pi=`#version 300 es

precision highp float;
precision highp int;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;
out vec3 vViewPosition;

in vec3 color;
out vec3 vColor;

out vec3 vFogPosition;

uniform mat4 directionalShadowMatrix;
out vec4 vDirectionalShadowCoord;

void main() {
  vColor.xyz = color.xyz;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1);

  gl_Position = projectionMatrix * mvPosition;
  vViewPosition = -mvPosition.xyz;

  vDirectionalShadowCoord =
    directionalShadowMatrix *
    // worldPosition
    modelMatrix * vec4(position, 1);

  vFogPosition = mvPosition.xyz;
}`,Z=canvas.getContext(`webgl2`);Z.clearColor(0,0,0,0),Z.enable(Z.DEPTH_TEST),Z.enable(Z.CULL_FACE),Z.depthFunc(Z.LEQUAL);var mi=!1,Q=I();Q.fogColor=n(),Q.fogNear=1,Q.fogFar=1e3;var hi=Ie(90);ni(He(hi),canvas);var{ambient:gi,directional:_i}=ti(Z,Q,hi),vi=ri(Z,pi,fi),yi=ri(Z,di,ui),bi=ci(Z,vi),$=li(Z,vi),xi=ci(Z,yi),Si=li(Z,yi),Ci=Z.createTexture(),wi=1024;Z.bindTexture(Z.TEXTURE_2D,Ci),Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA8,wi,wi,0,Z.RGBA,Z.UNSIGNED_BYTE,null),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_MAG_FILTER,Z.NEAREST),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_MIN_FILTER,Z.NEAREST),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_WRAP_S,Z.CLAMP_TO_EDGE),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_WRAP_T,Z.CLAMP_TO_EDGE);var Ti=Z.createFramebuffer();Z.bindFramebuffer(Z.FRAMEBUFFER,Ti),Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ci,0);var Ei=Z.createRenderbuffer();Z.bindRenderbuffer(Z.RENDERBUFFER,Ei),Z.renderbufferStorage(Z.RENDERBUFFER,Z.DEPTH_COMPONENT16,wi,wi),Z.framebufferRenderbuffer(Z.FRAMEBUFFER,Z.DEPTH_ATTACHMENT,Z.RENDERBUFFER,Ei);var Di=1/60,Oi=Di,ki,Ai=()=>{let e=(performance.now()||0)*.001;ki||=e;let t=Math.min(e-ki,.1);for(Oi+=t,ki=e;Oi>=Di;)je(Q,e=>{Qe(e,Di,Q)}),Oi-=Di},ji=new WeakMap,Mi=(e,t,n,r)=>{let i=ji.get(n)||{};ji.set(n,i);let a=i[e]||ii(Z,n[e]);i[e]=a,ai(Z,t,a,r)},Ni=new WeakMap,Pi=e=>{let n=Ni.get(e)||t(e);return Ni.set(e,n),n},Fi=e=>{let{geometry:t}=e;oi(Z,Si.modelViewMatrix,oe(e.modelViewMatrix,_i.shadow.camera.matrixWorldInverse,e.matrixWorld)),oi(Z,Si.projectionMatrix,_i.shadow.camera.projectionMatrix);let n=Pi(t);Mi(`position`,xi.position,n,3),Z.drawArrays(Z.TRIANGLES,0,n.position.length/3)},Ii=e=>{let{geometry:t,material:n}=e;Z.uniform1i($.fog,n.fog),si(Z,$.fogColor,Q.fogColor),Z.uniform1f($.fogNear,Q.fogNear),Z.uniform1f($.fogFar,Q.fogFar),si(Z,$.diffuse,n.color),si(Z,$.specular,n.specular),Z.uniform1f($.shininess,n.shininess),si(Z,$.emissive,n.emissive),Z.uniform1i($.receiveShadow,e.receiveShadow),oi(Z,$.modelMatrix,e.matrixWorld),oi(Z,$.modelViewMatrix,oe(e.modelViewMatrix,hi.matrixWorldInverse,e.matrixWorld)),oi(Z,$.projectionMatrix,hi.projectionMatrix);let r=Pi(t);Mi(`position`,bi.position,r,3),Mi(`color`,bi.color,r,3),Z.drawArrays(Z.TRIANGLES,0,r.position.length/3)},Li=n(),Ri=n(),zi=()=>{Ne(Q),hi.matrixWorldInverse.set(hi.matrixWorld),ce(hi.matrixWorldInverse),Z.useProgram(yi),Z.bindFramebuffer(Z.FRAMEBUFFER,Ti),Z.viewport(0,0,wi,wi),Z.clearColor(1,1,1,1),Z.clear(Z.COLOR_BUFFER_BIT|Z.DEPTH_BUFFER_BIT),Z.frontFace(Z.CW),qe(_i.shadow,_i),We(_i.shadow.camera),je(Q,e=>{e.visible&&e.geometry&&e.castShadow&&Fi(e)}),Z.bindFramebuffer(Z.FRAMEBUFFER,null),Z.useProgram(vi),Z.viewport(0,0,canvas.width,canvas.height),Z.clearColor(0,0,0,0),Z.clear(Z.COLOR_BUFFER_BIT|Z.DEPTH_BUFFER_BIT),Z.frontFace(Z.CCW),si(Z,$.ambient,gi),E(Ri,_i.matrixWorld),E(Li,_i.target.matrixWorld),h(l(Ri,Li),hi.matrixWorldInverse);let e=f(Object.assign(Li,_i.color),_i.intensity);si(Z,$[`directionalLight.direction`],Ri),si(Z,$[`directionalLight.color`],e),oi(Z,$.directionalShadowMatrix,_i.shadow.matrix),je(Q,e=>{e.visible&&e.geometry&&e.material&&Ii(e)})},Bi=()=>{Ai(),zi(),mi&&requestAnimationFrame(Bi)},Vi=(e,t)=>{canvas.width=e*devicePixelRatio,canvas.height=t*devicePixelRatio,canvas.style.width=e+`px`,canvas.style.height=t+`px`,Z.viewport(0,0,canvas.width,canvas.height),hi.aspect=e/t,Re(hi)};Vi(innerWidth,innerHeight),Bi(),addEventListener(`resize`,()=>{Vi(innerWidth,innerHeight),zi()}),addEventListener(`keypress`,e=>{e.code===`KeyP`&&(mi=!mi,mi?Bi():document.exitPointerLock())}),addEventListener(`click`,()=>{mi||(mi=!0,Bi())});