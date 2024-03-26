import{w as ln,c as W}from"./path-CbwjOpE9.js";import{aR as an,aS as $,aT as S,aU as rn,aV as y,V as on,aW as B,aX as _,aY as un,aZ as t,a_ as sn,a$ as tn,b0 as fn}from"./mermaid.core-BWG6Nn9r.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,D,V,v,R,X,a){var E=D-l,i=V-h,n=X-v,m=a-R,r=m*E-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*E,h+r*i]}function K(l,h,D,V,v,R,X){var a=l-D,E=h-V,i=(X?R:-R)/B(a*a+E*E),n=i*E,m=-i*a,r=l+n,s=h+m,f=D+n,c=V+m,Y=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,I=(g<0?-1:1)*B(fn(0,T*T*A-P*P)),O=(P*g-p*I)/A,U=(-P*p-g*I)/A,w=(P*g+p*I)/A,d=(-P*p+g*I)/A,x=O-Y,e=U-o,u=w-Y,Z=d-o;return x*x+e*e>u*u+Z*Z&&(O=w,U=d),{cx:O,cy:U,x01:-n,y01:-m,x11:O*(v/T-1),y11:U*(v/T-1)}}function vn(){var l=cn,h=yn,D=W(0),V=null,v=gn,R=mn,X=pn,a=null,E=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,Y=un(c-f),o=c>f;if(a||(a=n=E()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(Y>on-y)a.moveTo(s*$(f),s*S(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*$(c),r*S(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=Y,I=Y,O=X.apply(this,arguments)/2,U=O>y&&(V?+V.apply(this,arguments):B(r*r+s*s)),w=_(un(s-r)/2,+D.apply(this,arguments)),d=w,x=w,e,u;if(U>y){var Z=sn(U/r*S(O)),C=sn(U/s*S(O));(P-=Z*2)>y?(Z*=o?1:-1,A+=Z,T-=Z):(P=0,A=T=(f+c)/2),(I-=C*2)>y?(C*=o?1:-1,p+=C,g-=C):(I=0,p=g=(f+c)/2)}var j=s*$(p),z=s*S(p),F=r*$(T),G=r*S(T);if(w>y){var H=s*$(g),J=s*S(g),L=r*$(A),M=r*S(A),q;if(Y<an)if(q=dn(j,z,L,M,H,J,F,G)){var N=j-q[0],Q=z-q[1],b=H-q[0],k=J-q[1],nn=1/S(tn((N*b+Q*k)/(B(N*N+Q*Q)*B(b*b+k*k)))/2),en=B(q[0]*q[0]+q[1]*q[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}I>y?x>y?(e=K(L,M,j,z,s,x,o),u=K(H,J,F,G,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(j,z),a.arc(0,0,s,p,g,!o)):a.moveTo(j,z),!(r>y)||!(P>y)?a.lineTo(F,G):d>y?(e=K(F,G,H,J,r,-d,o),u=K(j,z,L,M,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[$(m)*n,S(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:W(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:W(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:W(+n),i):D},i.padRadius=function(n){return arguments.length?(V=n==null?null:typeof n=="function"?n:W(+n),i):V},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:W(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:W(+n),i):R},i.padAngle=function(n){return arguments.length?(X=typeof n=="function"?n:W(+n),i):X},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};