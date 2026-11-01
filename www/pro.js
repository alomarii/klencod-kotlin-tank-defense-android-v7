'use strict';
/* v6 PRO layer: effects, smooth quality, rich level cards */
(()=>{
const sp=document.createElement('div');sp.id='splash';sp.innerHTML='<div class="spe">🛡️</div><h1>Tank Defense</h1><div class="spb"><i></i></div><small>محمد العمري · 730215825</small>';document.body.appendChild(sp);
setTimeout(()=>sp.classList.add('out'),1500);setTimeout(()=>sp.remove(),2400);
let combo=0,ct=0,coins=[],last=performance.now(),avg=.016;const ease=u=>u*u*(3-2*u);
const _d=dmg;dmg=function(e,d,c,q){if(!e.dead)e.hf=.1;return _d(e,d,c,q)};
const _k=kill;kill=function(e){if(!e.dead){combo=ct>0?combo+1:1;ct=1.8;for(let i=0;i<(e.boss?9:3);i++)coins.push({x:e.x,y:e.y,t:-i*.06,bx:(R()-.5)*90,by:-30-R()*40})}return _k(e)};
function ov(){const now=performance.now(),dt=Math.min(.05,(now-last)/1000),t=now/1000;last=now;avg=avg*.92+dt*.08;
if(avg>.028&&G.pa&&G.pa.length>150)G.pa.splice(0,G.pa.length-150);
if(G.menu)return;const run=G.run&&!G.pause,cc=TM.cc||'#ffc83d';
ctx.setTransform(K,0,0,K,OX,OY);ctx.globalCompositeOperation='lighter';
for(const e of G.en)if(e.hf>0){if(run)e.hf-=dt;glow(e.x,e.y,40,'#ffffff',Math.min(1,e.hf*7))}
const a0=P[0],a1=P[1],ang=Math.atan2(a1[1]-a0[1],a1[0]-a0[0]),px=Math.max(26,Math.min(W-26,a0[0])),py=Math.max(26,Math.min(H-26,a0[1]));
glow(px,py,56,cc,.45+.15*Math.sin(t*3));ctx.strokeStyle=cc;ctx.lineWidth=2.5;
for(let i=0;i<3;i++){const s=t*(i%2?-2:2)+i;ctx.globalAlpha=.7-i*.15;ctx.beginPath();ctx.arc(px,py,14+i*8,s,s+3.2);ctx.stroke()}
ctx.fillStyle=cc;for(let i=0;i<3;i++){const o=(t*50+i*26)%78;ctx.globalAlpha=(1-o/78)*.8;ctx.save();ctx.translate(px+Math.cos(ang)*(34+o),py+Math.sin(ang)*(34+o));ctx.rotate(ang);ctx.beginPath();ctx.moveTo(7,0);ctx.lineTo(-5,-7);ctx.lineTo(-2,0);ctx.lineTo(-5,7);ctx.closePath();ctx.fill();ctx.restore()}
const hp=Math.max(0,G.hp)/100;ctx.strokeStyle=hp>.6?'#5fd4ff':hp>.3?'#ffc83d':'#ff4a3a';ctx.lineWidth=2;ctx.globalAlpha=.22+.12*Math.sin(t*3);ctx.beginPath();ctx.arc(BASE[0],BASE[1],66,0,TAU);ctx.stroke();
ctx.globalAlpha=.5;ctx.setLineDash([14,18]);ctx.lineDashOffset=-t*30;ctx.beginPath();ctx.arc(BASE[0],BASE[1],72,0,TAU);ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=1;
for(const c of coins){if(run)c.t+=dt*1.15;if(c.t<0)continue;const u=Math.min(1,c.t),b=Math.min(1,u*4),x0=c.x+c.bx*b,y0=c.y+c.by*b,e=ease(u),x=x0+(60-x0)*e,y=y0+(30-y0)*e;glow(x,y,13,'#ffc83d',1);ctx.fillStyle='#fff3b0';ctx.beginPath();ctx.arc(x,y,3.5,0,TAU);ctx.fill()}
coins=coins.filter(c=>c.t<1);ctx.globalCompositeOperation='source-over';
if(run&&ct>0)ct-=dt;
if(ct>0&&combo>=3){const s=1+Math.max(0,ct-1.55)*2.2,m='x'+combo+' COMBO';ctx.save();ctx.translate(W/2,250);ctx.scale(s,s);ctx.globalAlpha=Math.min(1,ct*1.5);ctx.textAlign='center';ctx.lineJoin='round';ctx.font=`900 ${26+Math.min(combo,15)*2}px system-ui`;ctx.lineWidth=6;ctx.strokeStyle='rgba(0,0,0,.75)';ctx.strokeText(m,0,0);ctx.fillStyle=combo>=10?'#ff6a2b':'#ffd54a';ctx.fillText(m,0,0);ctx.restore()}
ctx.setTransform(1,0,0,1,0,0);const w=cv.width,h=cv.height;
if(G.hp<35){const g=ctx.createRadialGradient(w/2,h/2,h*.35,w/2,h/2,w*.62);g.addColorStop(0,'rgba(255,0,0,0)');g.addColorStop(1,`rgba(255,20,0,${.18+.16*Math.sin(t*6)})`);ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}
const lx=((t*.05)%1.6-.3)*w,g2=ctx.createLinearGradient(lx-w*.15,0,lx+w*.15,h*.3);g2.addColorStop(0,'rgba(255,255,255,0)');g2.addColorStop(.5,'rgba(255,248,220,.045)');g2.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g2;ctx.fillRect(0,0,w,h);ctx.globalAlpha=1}
const _r=render;render=function(){_r();ov()};
preview=function(c,i){c.width=340;c.height=192;const x=c.getContext('2d'),T=TH[LV[i].th],p=LV[i].P,k=340/W,r=mulb(i*31+7);
let g=x.createLinearGradient(0,0,340,192);g.addColorStop(0,T.g[1]);g.addColorStop(1,T.g[2]);x.fillStyle=g;x.fillRect(0,0,340,192);
x.globalAlpha=.55;for(let n=0;n<30;n++){x.fillStyle=T.fl[n%T.fl.length];x.beginPath();x.arc(r()*340,r()*192,1+r()*1.6,0,TAU);x.fill()}x.globalAlpha=1;
x.lineCap=x.lineJoin='round';const path=()=>{x.beginPath();p.forEach((q,j)=>j?x.lineTo(q[0]*k,q[1]*k):x.moveTo(q[0]*k,q[1]*k))};
for(const[w,col]of[[PW+14,'rgba(0,0,0,.45)'],[PW+6,T.rd[0]],[PW-2,T.rd[1]],[PW-20,T.rd[2]]]){x.strokeStyle=col;x.lineWidth=w*k;path();x.stroke()}
x.setLineDash([7,7]);x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=1.4;path();x.stroke();x.setLineDash([]);
const e=p[0],b=p[p.length-1],ex=Math.max(10,Math.min(330,e[0]*k)),ey=Math.max(10,Math.min(182,e[1]*k));
g=x.createRadialGradient(ex,ey,1,ex,ey,16);g.addColorStop(0,T.cc);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(ex-16,ey-16,32,32);
x.fillStyle='#ffc83d';x.strokeStyle='#241600';x.lineWidth=2;x.beginPath();x.arc(b[0]*k,b[1]*k,8,0,TAU);x.fill();x.stroke();
g=x.createRadialGradient(170,96,50,170,96,200);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,T.vg);x.fillStyle=g;x.fillRect(0,0,340,192);
g=x.createLinearGradient(0,0,0,90);g.addColorStop(0,'rgba(255,255,255,.18)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,340,90)};
const _rm=renderMenu;renderMenu=function(){_rm();document.querySelectorAll('#lvls .lc').forEach(c=>{const i=+c.dataset.i;if(i===PR.u&&!PR.s[i]){c.classList.add('cur');c.insertAdjacentHTML('beforeend','<em class="new">▶ PLAY</em>')}else if((PR.s[i]||0)==3)c.classList.add('gold')})};
renderMenu();
})();
