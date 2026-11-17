const projects = [
{id:'yuanbai',title:'感知元白',en:'YUANBAI',type:'交互体验 / 团队项目',category:1,image:'p4-1.jpg',ratio:1.06,contain:true,overlay:true,caption:'EXPLORE / DIALOGUE',description:'让空间被探索，也让建筑会回应。以元白楼为线索，把了解一座建筑转化为两种可参与的体验：在游戏中建立空间判断，在语音对话中感知建筑的回应。',role:'个人参与：技术路线验证、玩法设计、初步 UI、语音交互动画、内测与 Bug 修复、多端适配及服务器部署。网页架构、后续 UI 升级、Logo 与部分动画由团队成员完成。',extra:['p10-0.jpg'],link:'https://apps-demo.muyang23333.top/yuanbai/'},
{id:'patrol',title:'《乘警纪实》',en:'PATROL',type:'微纪录片 / 团队项目',category:2,image:'p17-0.jpg',ratio:.77,description:'以真实还原铁路乘警工作日常、传递基层执法者责任与温度为主题的微纪录片。沿着调研、分镜、拍摄与剪辑的过程，靠近工作现场中的人物。',role:'个人参与：选题调研、部分分镜、大部分拍摄及部分剪辑。团队毕业设计作品，成片时长 9 分钟。',extra:['p21-2.jpg','p21-0.jpg','p21-4.jpg','p21-3.jpg']},
{id:'metro',title:'地铁站',en:'METRO',type:'三维场景 / 材质与灯光',category:3,image:'p27-0.jpg',ratio:1.5,description:'以 Blender 构建写实地铁站场景。从实地观察与建模出发，探索 PBR 材质、灯光与空间叙事的关系，让物理真实与视觉表达相互支撑。',role:'创作内容：场景调研、建模、UV 展开、材质制作、灯光与场景动画。',extra:['p33-0.jpg','p33-1.jpg','p33-2.jpg']},
{id:'lantern',title:'《小灯和小狐》',en:'LANTERN',type:'角色与场景手稿 / 陪伴与温暖',category:2,image:'p23-0.jpg',ratio:.91,contain:true,description:'唐朝江南乡间，一位小守灯人与一只腼腆的小狐狸，在灯笼的暖光下无言相伴。以极简画面与温暖色调，表达陪伴无需多言。',role:'创作内容：前期策划、角色设计与场景美术。本页展示原始绘画手稿，并补充角色视图、表情与道具设定。',extra:['p23-1.jpg']},
{id:'noise',title:'《吵》',en:'NOISE',type:'动画叙事 / 团队项目',category:2,image:'p26-2.jpg',ratio:1.25,description:'让观众从儿童的位置理解冲突。以家庭争吵与视角转换为线索，探索镜头、节奏和声音如何共同呈现角色感受。',role:'个人参与：剧本编写、动态分镜、剪辑合成、音效选择；参与美术风格设定、动画上色与补帧。团队成员：席欣、朱小娜、郭皓彦。',extra:['p26-0.jpg','p26-1.jpg','p26-3.jpg']},
{id:'together',title:'快来救救社恐',en:'A DAY TOGETHER',type:'H5 交互叙事 / 团队项目',category:1,image:'p37-1.jpg',ratio:.85,contain:true,description:'玩家以朋友的视角，陪伴“盒子”角色经历餐厅、超市和高铁上的日常情境。通过选择与点击物品推进故事，让理解与适度帮助成为互动的一部分。',role:'个人参与：H5 制作、音乐音效、汇报制作；共同参与流程策划、剧本与交互设计。角色、场景绘制和动画制作由席欣、朱小娜完成。',extra:['p37-0.jpg','p37-2.jpg']},
{id:'xy',title:'Xy · 数学兴趣组织',en:'XY IDENTITY',type:'标志设计 / 几何与秩序',category:3,image:'p40-0.jpg',ratio:1.1,contain:true,description:'以斜向拼接的几何单元构成折面轮廓，通过留白与深色侧面强化结构。蓝绿渐变沿结构展开，让数学组织的标志兼具秩序与活力。',role:'中南大学 Xy 数学兴趣组织 Logo 设计。探索标志轮廓、字体组合以及不同展示方向的适配。',extra:['p40-1.jpg','p40-2.jpg']},
{id:'brick',title:'Brick Breaker',en:'BRICK BREAKER',type:'2D 游戏 / Unity',category:1,image:'p35-0.jpg',ratio:1.2,description:'围绕打砖块的目标，将角色、砖阵、魔法特效与场景障碍组织在同一画面中。得分、生命值与结果反馈，让游戏状态持续可见。',role:'Unity 游戏设计练习：游戏视觉、界面与交互反馈。',extra:[]},
{id:'photography',title:'日常里的注视与停留',en:'OBSERVATIONS',type:'摄影 / 空间、光与时间',category:3,image:'p43-0.jpg',ratio:.8,description:'从窗边的人物、街头的片刻，到长曝光下的城市流光。等待自然的姿态与关系出现，再用取景组织注意力。',role:'摄影选集。部分长曝光作品拍摄于 2023.03—2023.08，设备为 Canon EOS RP + 24–105mm F4。',extra:['p42-0.jpg','p42-2.jpg','p43-2.jpg','p44-0.jpg','p44-1.jpg']}
];
for (const project of projects) Object.assign(project, window.portfolioDetails?.[project.id] || {});
function showDialog(d){lastFocus=document.activeElement;d.showModal();document.body.classList.add('dialog-open')}
function projectFigures(items,layout='') {
 return `<div class="case-images ${layout}">${items.map(item=>`<figure><img src="assets/${item.src}" loading="lazy" alt="${item.caption}" width="1000"><figcaption>${item.caption}</figcaption></figure>`).join('')}</div>`;
}
function renderSection(section) {
 return `<section class="case-section"><div class="case-section-heading"><span class="eyebrow">${section.eyebrow}</span><h3>${section.title}</h3><p>${section.text}</p></div>${section.steps?`<ol class="case-steps">${section.steps.map((step,i)=>`<li><span>0${i+1}</span>${step}</li>`).join('')}</ol>`:''}${section.notes?`<div class="case-notes">${section.notes.map(([title,text])=>`<div><h4>${title}</h4><p>${text}</p></div>`).join('')}</div>`:''}${section.images?projectFigures(section.images,section.layout||''):''}${section.palette?`<dl class="case-palette" aria-label="角色色彩设定">${section.palette.map(([label,color])=>`<div><dt><span class="palette-swatch" style="background:${color}" aria-hidden="true"></span>${label}</dt><dd>${color}</dd></div>`).join('')}</dl>`:''}</section>`;
}
function stopProjectMedia(){document.querySelectorAll('#projectContent video').forEach(video=>{video.pause();video.removeAttribute('src');video.load()})}
function initPlayer(p){
 if(!p.videos)return;
 const stage=document.querySelector('.video-stage');const tabs=[...document.querySelectorAll('.media-tab')];
 function selectMedia(index){stopProjectMedia();const clip=p.videos[index];tabs.forEach((button,i)=>button.setAttribute('aria-pressed',String(index===i)));stage.replaceChildren();const play=document.createElement('button');play.className='video-cover';play.setAttribute('aria-label',`播放${p.title}：${clip.label}`);play.innerHTML=`<img src="assets/${clip.poster}" alt="${p.title}视频封面"><span class="play-circle" aria-hidden="true">▶</span><span class="play-label">${clip.label} <span>点击播放 · 保留原声</span></span>`;play.onclick=()=>{const video=document.createElement('video');video.controls=true;video.playsInline=true;video.preload='metadata';video.poster=`assets/${clip.poster}`;video.setAttribute('aria-label',`${p.title}：${clip.label}`);video.src=`media/${clip.src}`;stage.replaceChildren(video);video.play().catch(()=>{});video.focus()};stage.append(play);}
 tabs.forEach((button,i)=>button.onclick=()=>selectMedia(i));selectMedia(0);
}
function openProject(p){
 const content=document.querySelector('#projectContent');stopProjectMedia();
 content.innerHTML=`<div class="detail-heading"><div><span>${p.type}</span><h2 id="detail-title">${p.title}</h2></div><span>${p.en}</span></div>${p.intro?`<p class="project-intro">${p.intro}</p>`:''}<img class="detail-main ${p.id==='xy'?'logo-main':p.id==='lantern'?'art-main':''}" src="assets/${p.image}" alt="${p.title}主视觉">${p.meta?`<dl class="project-facts">${p.meta.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl>`:''}<div class="detail-copy"><p>${p.description}</p><p class="detail-role">${p.role}</p></div>${p.link?`<a class="line-link project-link" href="${p.link}" target="_blank" rel="noopener noreferrer">访问项目原体验入口 ↗</a>`:''}${p.videos?`<section class="project-player"><div class="media-toolbar"><span class="eyebrow">FILM / PLAY</span><div class="media-tabs">${p.videos.map((clip,i)=>`<button class="media-tab" aria-pressed="${i===0}">${clip.label}</button>`).join('')}</div></div><div class="video-stage"></div></section>`:''}${p.sections?p.sections.map(renderSection).join(''):`<div class="detail-images">${p.extra.map(img=>`<img src="assets/${img}" loading="lazy" alt="${p.title}项目细节">`).join('')}</div>`}${p.reflection?`<blockquote class="case-reflection"><span class="eyebrow">REFLECTION / 我的思考</span><p>${p.reflection}</p></blockquote>`:''}${p.credits?`<section class="case-credits"><span class="eyebrow">TEAM / 协作与分工</span>${p.credits.map(([name,role])=>`<div><h4>${name}</h4><p>${role}</p></div>`).join('')}</section>`:''}<div class="case-end"><span>${p.en} / NIKO GUO</span><button class="line-link" id="backToGallery">返回作品 ↗</button></div>`;
 const dialog=document.querySelector('#projectDialog');dialog.setAttribute('aria-labelledby','detail-title');showDialog(dialog);dialog.scrollTop=0;initPlayer(p);document.querySelector('#backToGallery').onclick=()=>dialog.close();
}
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileQuery=matchMedia('(max-width:800px)');
const categories=[{label:'selected works',caption:'从影像出发，探索可以被参与的表达。',value:0},{label:'interaction',caption:'交互与数字体验 / 用行动感知空间。',value:1},{label:'moving image',caption:'影像与叙事 / 看见人物，也靠近情感。',value:2},{label:'visual studies',caption:'视觉与实验 / 形式、光与空间的观察。',value:3}];
let categoryIndex=0,categoryBusy=false,lastFocus=null,scrollFrame=0;
let chapterNodes=[],figureNodes=[],figureNumber=0;
const collection=document.querySelector('#work'),catalog=document.querySelector('#catalog'),catalogList=document.querySelector('#catalogList'),catalogToggle=document.querySelector('#catalogToggle'),cursor=document.querySelector('#projectCursor'),activeTitle=document.querySelector('#activeProjectTitle');
let activeId='',smoothScrollY=scrollY;
const reveal=new IntersectionObserver(entries=>{for(const entry of entries){entry.target.classList.toggle('in-view',entry.isIntersecting);if(entry.isIntersecting)entry.target.classList.add('is-visible')}},{rootMargin:'120px 0px 100px 0px',threshold:0});
function renderExhibition(){
 reveal.disconnect();collection.replaceChildren();catalogList.replaceChildren();figureNumber=0;chapterNodes=[];figureNodes=[];activeId='';
 const visible=window.exhibition.filter(section=>{const project=projects.find(p=>p.id===section.id);return !categories[categoryIndex].value||project.category===categories[categoryIndex].value});
 for(const composition of visible){
  const project=projects.find(p=>p.id===composition.id);const section=document.createElement('section');section.className='work-chapter';section.id=project.id;section.setAttribute('aria-label',`${project.title} — ${project.type}`);section.style.setProperty('--chapter-height',composition.height);section.style.setProperty('--mobile-height',composition.mheight);section.dataset.project=project.id;
  const heading=document.createElement('h2');heading.className='sr-only';heading.textContent=project.title;section.append(heading);
  const firstNumber=figureNumber+1;
  composition.figures.forEach((figure,i)=>{
   figureNumber++;const item=document.createElement('figure');item.className=`work-object kind-${figure.kind||'image'}`;item.style.cssText=`--x:${figure.x};--y:${figure.y};--w:${figure.w};--mx:${figure.mx};--my:${figure.my};--mw:${figure.mw};--rotation:${figure.rotate||0}deg`;
   const number=String(figureNumber).padStart(2,'0');const button=document.createElement('button');button.className='object-link';button.type='button';button.setAttribute('aria-label',`查看${project.title}，画面 ${number}`);button.innerHTML=`<span class="object-visual"><img src="assets/${figure.src}" alt="${project.title} / ${composition.en} / 作品画面 ${i+1}" ${figureNumber>3?'loading="lazy"':''} decoding="async"></span><span class="object-caption"><span>FIG. ${number}${figure.note?`<span class="figure-note">${figure.note}</span>`:''}</span><span class="caption-action">${project.videos?'WATCH FILM':'OPEN PROJECT'} ↗</span></span>`;
   button.onclick=()=>openProject(project);button.addEventListener('pointerenter',()=>{cursor.textContent=project.videos?'WATCH FILM ↗':'OPEN PROJECT ↗';cursor.classList.add('active')});button.addEventListener('pointerleave',()=>cursor.classList.remove('active'));button.addEventListener('focus',()=>item.classList.add('is-visible'));item.append(button);section.append(item);reveal.observe(item);figureNodes.push({node:item,section,design:figure});
  });
  collection.append(section);chapterNodes.push({node:section,composition,project});
  const row=document.createElement('button');row.className='catalog-row';row.type='button';row.dataset.project=project.id;row.innerHTML=`<span class="catalog-range">FIG. ${String(firstNumber).padStart(2,'0')}–${String(figureNumber).padStart(2,'0')}</span><span class="catalog-name">${project.title.replace(/[《》]/g,'')}</span>`;row.onclick=()=>{setCatalog(false);jumpTo(section);history.replaceState(null,'',`#${project.id}`)};catalogList.append(row);
 }
 syncCatalog();
 if(reduced)document.querySelectorAll('.work-object').forEach(item=>item.classList.add('is-visible'));
 updateScroll();
}
function jumpTo(section){window.scrollTo({top:section.getBoundingClientRect().top+scrollY-innerHeight*.2,behavior:reduced?'instant':'smooth'})}
function syncCatalog(){const expanded=mobileQuery.matches?catalog.classList.contains('open'):!catalog.classList.contains('collapsed');catalogToggle.setAttribute('aria-expanded',String(expanded));catalogList.inert=!expanded;}
function setCatalog(open){catalog.classList.toggle('open',open);syncCatalog();}
catalogToggle.onclick=()=>{if(mobileQuery.matches)setCatalog(!catalog.classList.contains('open'));else{catalog.classList.toggle('collapsed');syncCatalog()}};
document.addEventListener('click',event=>{if(!catalog.contains(event.target))setCatalog(false)});
document.addEventListener('keydown',event=>{if(event.key==='Escape')setCatalog(false)});
function clamp(value,min=0,max=1){return Math.max(min,Math.min(max,value))}
function updateScroll(){
 const y=scrollY,h=innerHeight,w=innerWidth;
 const mark=document.querySelector('#introArt');const opacity=clamp(1-Math.max(0,y-h*.36)/(h*.62));
 mark.style.opacity=opacity;mark.style.visibility=opacity?'visible':'hidden';if(!reduced)mark.style.transform=`translate(-50%,${-y*.025}px) scale(${1+y/h*.025})`;
 const message=document.querySelector('#introMessage');message.style.opacity=clamp(1-y/(h*.2));message.style.pointerEvents=y>h*.2?'none':'';
 document.querySelector('#miniSignature').classList.toggle('visible',y>h*.15);
 catalog.classList.toggle('visible',y>h*.18);if(y<h*.18)setCatalog(false);
 let current=null;
 for(const item of chapterNodes){const box=item.node.getBoundingClientRect();if(box.top<h*.5&&box.bottom>h*.45){current={...item,box};break}}
 if(current){
  const {composition,project,box}=current;const alpha=Math.min(clamp((h*.42-box.top)/(h*.3)),clamp((box.bottom-h*.35)/(h*.4)));
  if(activeId!==project.id){activeId=project.id;activeTitle.innerHTML=composition.heading.map(line=>`<span>${line}</span>`).join('');activeTitle.classList.toggle('long-title',composition.heading.join('').length>7);document.querySelectorAll('.catalog-row').forEach(row=>{const on=row.dataset.project===project.id;row.classList.toggle('current',on);if(on)row.setAttribute('aria-current','true');else row.removeAttribute('aria-current')})}
  activeTitle.style.opacity=alpha;
 }else activeTitle.style.opacity=0;
 if(!reduced){const scale=w/(mobileQuery.matches?390:1440);for(const {node,section,design} of figureNodes){const box=section.getBoundingClientRect();if(box.top>h*2||box.bottom<-h)continue;const baseY=box.top+(mobileQuery.matches?design.my:design.y)*scale;const drift=clamp((h*.5-baseY)*(design.speed||.05),-90,90);node.style.setProperty('--drift',`${drift}px`)}}
 const end=document.querySelector('.end-stage').getBoundingClientRect();const footerDim=clamp((h*.8-end.top)/(h*.8))*.65;document.querySelector('#ambientDim').style.opacity=Math.max(.58*(1-clamp(y/(h*.8))),footerDim);
 if(end.top<h*.6)activeTitle.style.opacity=0;
 scrollFrame=0;
}
addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll)},{passive:true});
function resizeStage(){const svg=document.querySelector('#heroSignature');svg.setAttribute('viewBox',mobileQuery.matches?'0 0 570 500':'0 0 1040 250');svg.querySelector('#word-guo').setAttribute('transform',mobileQuery.matches?'translate(90 250)':'translate(575 0)');syncCatalog();updateScroll()}
addEventListener('resize',resizeStage,{passive:true});
const category=document.querySelector('#category');category.onclick=async()=>{if(categoryBusy)return;categoryBusy=true;category.classList.add('leaving');await new Promise(resolve=>setTimeout(resolve,reduced?0:270));categoryIndex=(categoryIndex+1)%categories.length;document.querySelector('#categoryText').textContent=categories[categoryIndex].label;document.querySelector('#categoryCaption').textContent=categories[categoryIndex].caption;category.setAttribute('aria-label',`当前分类：${categories[categoryIndex].label}，点击切换下一分类`);category.style.transition='none';category.classList.remove('leaving');category.classList.add('entering');renderExhibition();requestAnimationFrame(()=>requestAnimationFrame(()=>{category.style.transition='';category.classList.remove('entering')}));categoryBusy=false;};
document.addEventListener('pointermove',event=>{cursor.style.transform=`translate3d(${event.clientX+18}px,${event.clientY+18}px,0)`},{passive:true});
for(const dialog of document.querySelectorAll('dialog')){dialog.querySelector('.close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}});dialog.addEventListener('close',()=>{if(dialog.id==='projectDialog')stopProjectMedia();document.body.classList.remove('dialog-open');lastFocus?.focus({preventScroll:true})})}
document.querySelector('#aboutButton').onclick=()=>showDialog(document.querySelector('#aboutDialog'));
document.querySelector('#contactButton').onclick=()=>{setCatalog(false);document.querySelector('#contact').scrollIntoView({behavior:reduced?'instant':'smooth'});history.replaceState(null,'','#contact')};
for(const link of document.querySelectorAll('[data-home],#miniSignature'))link.addEventListener('click',event=>{event.preventDefault();setCatalog(false);scrollTo({top:0,behavior:reduced?'instant':'smooth'});history.replaceState(null,'',location.pathname)});
document.querySelector('#copyEmail').onclick=async function(){try{await navigator.clipboard.writeText('npciko@sina.com');this.textContent='COPIED ✓';setTimeout(()=>this.textContent='COPY EMAIL',2200)}catch{location.href='mailto:npciko@sina.com'}};
renderExhibition();resizeStage();
if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>{const target=document.getElementById(id);if(target&&target.classList.contains('work-chapter'))jumpTo(target)})}
