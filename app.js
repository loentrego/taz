const $=s=>document.querySelector(s), fmt=n=>'$'+n.toFixed(2), T=s=>s.split(' ');
const ING=a=>a.map(([n,e])=>({n,e,p:0,d:1})), EX=a=>a.map(([n,e,p])=>({n,e,p}));
const SAUCE=[['Salsa de la casa','🥫']];
const PZ=(n,pz,tp,d)=>({n,e:'🍕',pz,tp:T(tp),d});
const PR={
pizza:{name:'Pizza',e:'🍕',tag:'Tamaño, especialidad, borde y toppings',groups:[
 {k:'size',t:'Tamaño',type:'one',opts:[{n:'Personal',e:'🍕'},{n:'Medium',e:'🍕'},{n:'Familiar',e:'🍕'}]},
 {k:'base',t:'Especialidad',type:'one',opts:[
  PZ('Hawaiana',[13,19,24],'🍍 🧀 🥓','Piña, queso, jamón'),
  PZ('Pepperoni',[13,19,24],'🔴 🧀 🥓','Pepperoni, queso, jamón'),
  PZ('Tropical',[15,22,26],'🍍 🍒 🍑 🥓 🧀','Piña, cereza, durazno, jamón'),
  PZ('Ay Dios Mío',[15,22,28],'🍗 🍄 🧀','Pollo, champiñones, queso'),
  PZ('Californiana',[16,24,29],'🍗 🍄 🦐 🥓 🧀 🌶️','Pollo, camarones, jamón, pimentón'),
  PZ('Mexicana',[16,24,29],'🥩 🥓 🧀 🌶️ 🧅','Carne, jamón, queso, pimentón'),
  PZ('Camarones',[20,26,32],'🦐 🥓 🧀 🌶️','Camarones, jamón, queso'),
  PZ('La 4K',[22,28,34],'🥓 🌭 🧀 🥩','Jamón, carne de res, pollo, chorizo'),
  PZ('Legendaria',[16,22,28],'🥩 🌽 🥓 🌶️ 🧀','Carne molida, maíz, tocino, pimentón')]},
 {k:'edge',t:'Borde',type:'one',opts:[{n:'Normal',e:'🍞',p:0},{n:'Borde de bocadillo',e:'🍬',p:3}]},
 {k:'ex',t:'Toppings extra',sub:'Se ven sobre tu pizza',type:'many',opts:EX([['Queso extra','🧀',2],['Tocineta','🥓',2],['Jamón','🍖',2],['Champiñones','🍄',2],['Piña','🍍',2],['Maíz','🌽',1.5],['Cebolla','🧅',1],['Pimentón','🌶️',1.5],['Pollo','🍗',2.5],['Camarones','🦐',3.5]])}]},
burger:{name:'Burguer',e:'🍔',tag:'Pan artesanal y todo a tu gusto',groups:[
 {k:'base',t:'Elige tu burguer',type:'one',opts:[{n:'Gran Burguer',e:'🍔',p:13,d:'Carne, pollo apanado, tocineta'},{n:'De carne',e:'🥩',p:10,d:'Carne y papas a la francesa'},{n:'De pollo',e:'🍗',p:10,d:'Pollo apanado'},{n:'De camarones',e:'🦐',p:16,d:'Camarones molidos'}]},
 {k:'ing',t:'Ingredientes',sub:'Quita lo que no quieras',type:'many',opts:ING([['Lechuga','🥬'],['Tomate','🍅'],['Cebolla grille','🧅'],['Queso en rodaja','🧀'],['Pepinillos','🥒'],['Salsa de la casa','🥫']])},
 {k:'ex',t:'Extras',type:'many',opts:EX([['Tocineta','🥓',2],['Queso extra','🧀',1.5],['Huevo','🍳',1.5],['Piña','🍍',1.5],['Papas a la francesa','🍟',3]])}]},
perro:{name:'Perro caliente',e:'🌭',tag:'Perro salvaje con pan horneado',groups:[
 {k:'base',t:'Tu perro',type:'one',opts:[{n:'Perro salvaje',e:'🌭',p:10,d:'Pan horneado, salchicha tradicional'}]},
 {k:'ing',t:'Ingredientes',sub:'Quita lo que no quieras',type:'many',opts:ING([['Carne picada','🥩'],['Pollo picado','🍗'],['Maíz','🌽'],['Queso rayado','🧀'],['Tocineta','🥓'],['Cebolla grille','🧅'],['Lechuga','🥬'],['Chorizo','🌶️'],...SAUCE])},
 {k:'ex',t:'Extras',type:'many',opts:EX([['Queso extra','🧀',1.5],['Tocineta extra','🥓',2],['Camarones','🦐',3.5],['Papas a la francesa','🍟',3]])}]},
salchi:{name:'Salchipapas',e:'🍟',tag:'Papas a la francesa y mucho encima',groups:[
 {k:'base',t:'Elige tu salchi',type:'one',opts:[{n:'Salchi Californiana',e:'🍟',p:16,d:'Salchicha, pollo, carne, maíz'},{n:'Salchi Tazmania',e:'🦐',p:19,d:'Con camarones y tocineta'}]},
 {k:'ing',t:'Ingredientes',sub:'Quita lo que no quieras',type:'many',opts:ING([['Papas a la francesa','🍟'],['Salchicha','🌭'],['Pollo picado','🍗'],['Carne picada','🥩'],['Maíz','🌽'],['Lechuga','🥬'],['Queso rayado','🧀'],['Chorizo','🌶️'],...SAUCE])},
 {k:'ex',t:'Extras',type:'many',opts:EX([['Camarones','🦐',3.5],['Tocineta','🥓',2],['Queso extra','🧀',1.5],['Huevo','🍳',1.5]])}]},
mazo:{name:'Mazorcada',e:'🌽',tag:'Maíz con todo, servida en plato',groups:[
 {k:'base',t:'Tu mazorcada',type:'one',opts:[{n:'Mazorcada TAZ',e:'🌽',p:16,d:'Maíz, carne, pollo, queso'}]},
 {k:'ing',t:'Ingredientes',sub:'Quita lo que no quieras',type:'many',opts:ING([['Maíz','🌽'],['Carne picada','🥩'],['Pollo picado','🍗'],['Lechuga','🥬'],['Queso rayado','🧀'],['Chorizo','🌶️'],...SAUCE])},
 {k:'ex',t:'Extras',type:'many',opts:EX([['Queso extra','🧀',1.5],['Tocineta','🥓',2],['Camarones','🦐',3.5]])}]}
};
const KEYS=Object.keys(PR);

const LOGO_SRC="assets/logo.webp";
function logo(){return `<img src="${LOGO_SRC}" alt="TAZ Fast Food, hecho en Colombia" style="width:100%;height:100%;object-fit:contain;display:block">`}
let cart=[],cur=null,st=null;
try{cart=JSON.parse(localStorage.getItem('taz-cart')||'[]')}catch(e){}
const save=()=>{try{localStorage.setItem('taz-cart',JSON.stringify(cart))}catch(e){}};

function init(k){
  const ch={};
  PR[k].groups.forEach(g=>{ch[g.k]=g.type==='one'?0:g.opts.map((o,i)=>o.d&&!o.pz&&!o.tp&&g.k==='ing'?i:-1).filter(i=>i>=0)});
  return {k,ch,q:1};
}
function sel(g){const v=st.ch[g.k];return g.type==='one'?[g.opts[v]]:v.map(i=>g.opts[i])}
function price(){
  const P=PR[st.k];let t=0;const si=st.ch.size||0;
  P.groups.forEach(g=>sel(g).forEach(o=>{t+=o.pz?o.pz[si]:(o.p||0)}));
  return t;
}
function view(){
  const h=(location.hash||'#inicio').slice(1);
  document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.dataset.v===h));
  if(PR[h]){if(!st||st.k!==h)st=init(h);builder()}else{st=null;home()}
  scrollTo(0,0);
}
const FC=(a,b,y,m)=>`<g stroke="#120303" stroke-width="4"><circle cx="${a}" cy="${y}" r="10" fill="#fff"/><circle cx="${b}" cy="${y}" r="10" fill="#fff"/></g><circle cx="${a+2}" cy="${y+1}" r="4.5" fill="#120303"/><circle cx="${b+2}" cy="${y+1}" r="4.5" fill="#120303"/><path d="M${a} ${m}Q${(a+b)/2} ${m+22} ${b} ${m}Z" fill="#7a1010" stroke="#120303" stroke-width="4" stroke-linejoin="round"/><ellipse cx="${a-13}" cy="${m-4}" rx="7" ry="4" fill="#ff6b4a" opacity=".75"/><ellipse cx="${b+13}" cy="${m-4}" rx="7" ry="4" fill="#ff6b4a" opacity=".75"/>`;
const MPZ=()=>`<svg viewBox="0 0 200 210"><g stroke="#120303" stroke-width="6" stroke-linejoin="round"><path d="M18 44Q100 6 182 44L100 198Z" fill="#ffc933"/><path d="M12 40Q100 0 188 40Q190 62 170 60Q100 32 30 60Q10 62 12 40Z" fill="#d98a2b"/><circle cx="58" cy="100" r="13" fill="#e63312"/><circle cx="142" cy="100" r="13" fill="#e63312"/><circle cx="100" cy="160" r="11" fill="#e63312"/></g>${FC(80,120,82,108)}</svg>`;
const MBG=()=>`<svg viewBox="0 0 200 200"><g stroke="#120303" stroke-width="6" stroke-linejoin="round"><path d="M22 92Q22 20 100 20Q178 20 178 92Z" fill="#f0a030"/><path d="M14 98Q30 88 46 98T78 98T110 98T142 98T186 98L186 108Q100 122 14 108Z" fill="#6ccf6a"/><path d="M24 108H176L100 132Z" fill="#ffc933"/><rect x="18" y="122" width="164" height="30" rx="15" fill="#6b2a14"/><path d="M22 156H178Q178 186 150 186H50Q22 186 22 156Z" fill="#f0a030"/></g><g fill="#fff3dc"><ellipse cx="60" cy="40" rx="6" ry="3.5"/><ellipse cx="140" cy="40" rx="6" ry="3.5"/><ellipse cx="100" cy="32" rx="6" ry="3.5"/></g>${FC(78,122,60,76)}</svg>`;
const MHD=()=>`<svg viewBox="0 0 200 200"><g stroke="#120303" stroke-width="6" stroke-linejoin="round"><rect x="14" y="80" width="172" height="86" rx="43" fill="#f0a030"/><rect x="4" y="62" width="192" height="40" rx="20" fill="#e63312"/><path d="M24 82l14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14" fill="none" stroke="#ffc933" stroke-width="7" stroke-linecap="round"/></g>${FC(78,122,124,140)}</svg>`;
const CC=['#ff6b4a','#f7941d','#ffc933','#fff3dc','#ffa94d'];
function home(){
  const mq='<span>🔥 Fast food hecho en Colombia 🔥 Arma tu antojo 🔥 Delivery a tu puerta </span>'.repeat(4);
  $('#app').innerHTML=`<section class="cvh"><div><span class="stick">¡Hecho en Colombia!</span><h1>Arma tu antojo</h1><p class="s">Tú escoges, nosotros cocinamos. Mira tu pizza, burguer o perro armarse en pantalla y pídelo a tu puerta.</p><button class="cta" onclick="location.hash='#pizza'">¡Armar mi pizza!</button></div><div class="scene"><div class="sun"></div><div class="lg">${logo()}</div><div class="mc a">${MPZ()}</div><div class="mc b">${MBG()}</div><div class="mc c">${MHD()}</div></div></section>
  <div class="mq" aria-hidden="true"><div>${mq}${mq}</div></div>
  <h2 class="cvt">¿Qué se te antoja hoy?</h2>
  <div class="cg">${KEYS.map((k,i)=>{const P=PR[k],mn=Math.min(...P.groups[k==='pizza'?1:0].opts.map(o=>o.pz?o.pz[0]:o.p));return`<button class="cc" style="background:${CC[i]}" onclick="location.hash='#${k}'"><div class="em">${P.e}</div><h3>${P.name}</h3><small>${P.tag}</small><span class="fr">Desde ${fmt(mn)}</span></button>`}).join('')}</div>
  <h2 class="cvt">Así de fácil</h2>
  <div class="hw"><div><h3><i>1</i>Escoge tu base</h3><p>Tamaño y especialidad, o la burguer y el perro que prefieras.</p></div><div><h3><i>2</i>Ármalo a tu gusto</h3><p>Activa y desactiva ingredientes. El plato cambia al instante.</p></div><div><h3><i>3</i>Pídelo a casa</h3><p>Revisa tu carrito y envía el pedido por WhatsApp.</p></div></div>`;
}
function previewHTML(){
  const P=PR[st.k],items=[];
  if(st.k==='pizza'){
    const b=P.groups[1].opts[st.ch.base],ex=sel(P.groups[3]).map(o=>o.e),em=[...b.tp,...ex];
    const pct=[62,80,100][st.ch.size],list=[];
    em.forEach(e=>{for(let r=0;r<(ex.includes(e)&&!b.tp.includes(e)?4:5);r++)list.push(e)});
    list.sort((a,b)=>a.localeCompare(b)*0+((a.codePointAt(0)*7)%11)-((b.codePointAt(0)*7)%11));
    const N=list.length,dots=list.map((e,i)=>{const a=i*2.399,r=Math.sqrt((i+.6)/N)*40;return`<i style="left:${50+r*Math.cos(a)}%;top:${50+r*Math.sin(a)}%;font-size:${pct>70?26:20}px">${e}</i>`}).join('');
    const edge=st.ch.edge?'border-color:#d4406a;':'';
    return`<div class="pz" style="width:${pct*.92}%;height:${pct*.92}%;${edge}">${dots}</div>`;
  }
  const lay=[];P.groups.forEach(g=>{if(g.k!=='base')sel(g).forEach(o=>lay.push(o))});
  const bs=sel(P.groups[0])[0];
  return`<div class="stk"><div class="bun"></div><div class="ly">${bs.e}<span>${bs.n}</span></div>${lay.map(o=>`<div class="ly">${o.e}<span>${o.n}</span></div>`).join('')}<div class="bun b"></div></div>`;
}
function builder(){
  const P=PR[st.k];
  $('#app').innerHTML=`<button class="back" onclick="location.hash='#inicio'">‹ Volver al inicio</button><div class="bld"><div class="pv"><h2>${P.name}</h2><div class="stage" id="stage">${previewHTML()}</div><div class="tot" id="tot">${fmt(price())}</div></div><div>
  ${P.groups.map((g,gi)=>`<div class="step"><h3>${gi+1}. ${g.t}<small>${g.sub||''}</small></h3><div class="opts">${g.opts.map((o,i)=>{const on=g.type==='one'?st.ch[g.k]===i:st.ch[g.k].includes(i);
   const pr=g.k==='size'?'':o.pz?fmt(o.pz[st.ch.size]):o.p?(g.type==='many'?'+':'')+fmt(o.p):'';
   return`<button class="op${on?' on':''}" data-g="${g.k}" data-i="${i}" aria-pressed="${on}"><em>${o.e}</em><span>${o.n}${o.d?`<small>${o.d}</small>`:''}${pr?`<span class="pr">${pr}</span>`:''}</span></button>`}).join('')}</div></div>`).join('')}
  <div class="add"><div class="qty"><button data-q="-1" aria-label="Menos">−</button><span id="q">${st.q}</span><button data-q="1" aria-label="Más">+</button></div><button class="cta" id="addBtn">Agregar al carrito · ${fmt(price()*st.q)}</button></div></div></div>`;
}
document.addEventListener('click',e=>{
  const op=e.target.closest('.op');
  if(op&&st){
    const g=PR[st.k].groups.find(x=>x.k===op.dataset.g),i=+op.dataset.i;
    if(g.type==='one')st.ch[g.k]=i;else{const a=st.ch[g.k],j=a.indexOf(i);j>=0?a.splice(j,1):a.push(i)}
    const y=scrollY;builder();scrollTo(0,y);return;
  }
  const q=e.target.closest('[data-q]');
  if(q&&st){st.q=Math.max(1,Math.min(20,st.q+ +q.dataset.q));$('#q').textContent=st.q;$('#addBtn').textContent='Agregar al carrito · '+fmt(price()*st.q);return}
  if(e.target.id==='addBtn')addCart();
  const c=e.target.closest('[data-c]');
  if(c){const it=cart[+c.dataset.i];if(c.dataset.c==='del')cart.splice(+c.dataset.i,1);else{it.q+=+c.dataset.c;if(it.q<1)cart.splice(+c.dataset.i,1)}save();drawCart()}
});
function lines(){
  const P=PR[st.k],out=[];
  P.groups.forEach(g=>{
    if(g.k==='base'&&P.groups[0].opts.length===1)return;
    if(g.k==='ing'){const off=g.opts.filter((o,i)=>!st.ch.ing.includes(i)).map(o=>o.n);if(off.length)out.push('Sin '+off.join(', '));return}
    if(g.k==='ex'){const s=sel(g).map(o=>o.n);if(s.length)out.push('Extra: '+s.join(', '));return}
    if(g.k==='edge'&&!st.ch.edge)return;
    out.push(sel(g)[0].n);
  });
  return out;
}
function addCart(){
  const P=PR[st.k],b=sel(P.groups[st.k==='pizza'?1:0])[0];
  cart.push({name:(st.k==='pizza'?'Pizza ':'')+b.n,lines:lines(),unit:price(),q:st.q});
  save();drawCart();
  const t=$('#toast');t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1600);
  st=init(st.k);builder();
}
function drawCart(){
  const n=cart.reduce((s,i)=>s+i.q,0),tot=cart.reduce((s,i)=>s+i.q*i.unit,0);
  $('#cnt').textContent=n;$('#ctot').textContent=fmt(tot);$('#send').disabled=!n;
  $('#items').innerHTML=n?cart.map((it,i)=>`<div class="it"><div class="row"><b>${it.name}</b><span>${fmt(it.unit*it.q)}</span></div><p>${it.lines.join(' · ')}</p><div class="row"><div class="qty"><button data-c="-1" data-i="${i}" aria-label="Menos">−</button><span>${it.q}</span><button data-c="1" data-i="${i}" aria-label="Más">+</button></div><button class="x" data-c="del" data-i="${i}">Quitar</button></div></div>`).join(''):'<div class="empty">Tu carrito está vacío. Arma tu primer plato y aparecerá aquí.</div>';
}
const cartOpen=o=>{$('#cart').classList.toggle('on',o);$('#ov').classList.toggle('on',o)};
$('#openCart').onclick=()=>cartOpen(true);$('#closeCart').onclick=$('#ov').onclick=()=>cartOpen(false);
$('#send').onclick=()=>{
  const tot=cart.reduce((s,i)=>s+i.q*i.unit,0);
  const msg='Hola TAZ, quiero hacer este pedido:\n'+cart.map(i=>`${i.q}x ${i.name} (${i.lines.join('; ')}) - ${fmt(i.q*i.unit)}`).join('\n')+'\nTotal: '+fmt(tot);
  window.open('https://wa.me/16506830906?text='+encodeURIComponent(msg),'_blank');
};
$('#hlogo').innerHTML=logo();$('#hlogo').onclick=()=>location.hash='#inicio';
$('#nav').innerHTML='<a href="#inicio" data-v="inicio">Inicio</a>'+KEYS.map(k=>`<a href="#${k}" data-v="${k}">${PR[k].e} ${PR[k].name}</a>`).join('');
addEventListener('hashchange',view);drawCart();view();
