'use strict';
/* v7: 12 languages, tier auras, armor rings, best score + share, daily gift */
(()=>{
const KS='title,sub,wave,boss,done,nogold,hit,win,lose,retry,next,menu,credit,score,lvl,max,sell,un0,un1,un2,tn0,tn1,tn2,tn3,tn4,tn5,tn6'.split(',');
const D={
id:'Pertahanan Tank|Pilih medan perang|Gelombang|⚠️ BOS DATANG ⚠️|Gelombang selesai|Emas tidak cukup|Markas diserang|Kemenangan!|Markas hancur|Ulangi|Level berikutnya|Menu|Pemrograman & desain|Skor|Level|MAKS|Jual|Damage|Jangkauan|Kecepatan|Gatling|Roket|Tesla|Beku|Racun|Penembak jitu|Api',
hi:'टैंक डिफेंस|युद्धक्षेत्र चुनें|लहर|⚠️ बॉस आ रहा है ⚠️|लहर पूरी|सोना कम है|बेस पर हमला|जीत!|बेस नष्ट|फिर कोशिश|अगला स्तर|मेनू|प्रोग्रामिंग और डिज़ाइन|स्कोर|स्तर|अधिकतम|बेचें|क्षति|रेंज|गति|गैटलिंग|रॉकेट|टेस्ला|बर्फ|ज़हर|स्नाइपर|आग',
pt:'Defesa de Tanques|Escolha o campo de batalha|Onda|⚠️ CHEFE A CAMINHO ⚠️|Onda concluída|Ouro insuficiente|Base sob ataque|Vitória!|Base destruída|Tentar de novo|Próximo nível|Menu|Programação e design|Pontos|Nível|MÁX|Vender|Dano|Alcance|Velocidade|Metralhadora|Foguete|Tesla|Gelo|Veneno|Atirador|Chamas',
de:'Panzerabwehr|Wähle dein Schlachtfeld|Welle|⚠️ BOSS NAHT ⚠️|Welle geschafft|Nicht genug Gold|Basis unter Beschuss|Sieg!|Basis zerstört|Nochmal|Nächstes Level|Menü|Programmierung & Design|Punkte|Stufe|MAX|Verkaufen|Schaden|Reichweite|Tempo|MG|Rakete|Tesla|Frost|Gift|Scharfschütze|Flammen',
ja:'タンクディフェンス|戦場を選ぼう|ウェーブ|⚠️ ボス接近 ⚠️|ウェーブ完了|ゴールド不足|基地が攻撃されています|勝利！|基地破壊|リトライ|次のレベル|メニュー|プログラム＆デザイン|スコア|Lv|MAX|売却|攻撃力|射程|速度|ガトリング|ロケット|テスラ|冷凍|毒|スナイパー|火炎',
zh:'坦克防御|选择战场|波次|⚠️ BOSS来袭 ⚠️|波次完成|金币不足|基地遭到攻击|胜利！|基地被毁|重试|下一关|菜单|编程与设计|得分|等级|满级|出售|伤害|射程|速度|加特林|火箭|特斯拉|冰冻|剧毒|狙击|火焰'};
const NN={id:'Indonesia',hi:'हिन्दी',pt:'Português',de:'Deutsch',ja:'日本語',zh:'中文'};
for(const k in I)for(let j=0;j<6;j++)I[k].push(I[k][1]);
Object.keys(D).forEach((c,j)=>{LN.push(c);LNAME.push(NN[c]);D[c].split('|').forEach((s,n)=>{I[KS[n]][6+j]=s})});
try{if(localStorage.tdL===undefined){const j=LN.indexOf((navigator.language||'').slice(0,2));if(j>=0)LI=j}}catch(e){}
setLang(LI);
const _dt=drawTower;drawTower=function(t){_dt(t);const lv=t.u[0]+t.u[1]+t.u[2];if(lv>=3){const c=lv>=8?'#ff6aff':lv>=6?'#ffc83d':'#5fd4ff',s=G.t||0;ctx.save();ctx.globalCompositeOperation='lighter';ctx.strokeStyle=c;ctx.lineWidth=2.5;ctx.globalAlpha=.5+.3*Math.sin(s*3);ctx.setLineDash([10,8]);ctx.lineDashOffset=-s*25;ctx.beginPath();ctx.arc(t.x,t.y,42,0,TAU);ctx.stroke();glow(t.x,t.y,56,c,.25);ctx.restore()}};
const _tk=drawTank;drawTank=function(e){_tk(e);if(e.ar>0){const s=G.t||0;ctx.save();ctx.strokeStyle='#9fc4ff';ctx.lineWidth=2.2;ctx.globalAlpha=.4;ctx.beginPath();ctx.arc(e.x,e.y,32,s*2,s*2+2.2);ctx.stroke();ctx.beginPath();ctx.arc(e.x,e.y,32,s*2+3.14,s*2+5.3);ctx.stroke();ctx.restore()}};
const sb=document.createElement('button');sb.className='go alt';sb.id='eS';sb.textContent='📤';$('eM').after(sb);
const msg=()=>`🛡️ Tank Defense — ${t('score')}: ${G.score} · ${LV[L].wd+1}-${(L&3)+1}`;
sb.onclick=()=>{try{if(window.Android&&Android.share)Android.share(msg());else if(navigator.share)navigator.share({text:msg()})}catch(e){}};
const _se=showEnd;showEnd=function(w){_se(w);PR.b=PR.b||{};const old=PR.b[L]||0,rec=G.score>old;if(rec){PR.b[L]=G.score;savePR()}$('eP').innerHTML+=` · 🏆 <b>${PR.b[L]||0}</b>${rec&&G.score>0?' 🔥NEW':''}`;sb.style.display=w?'':'none'};
const _s=start;start=function(i){_s(i);const d=new Date().toDateString();if(PR.dr!==d){PR.dr=d;savePR();G.gold+=300;hud();setTimeout(()=>toast('🎁 +300 🪙','#ffd54a'),900)}};
})();
