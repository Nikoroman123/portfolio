// Each figure is a piece of an existing project, arranged on a free composition.
// Coordinates use a 1440px desktop canvas and a 390px mobile canvas.
window.exhibition = [
 {id:'yuanbai',height:1530,mheight:1370,heading:['感知元白'],en:'YUANBAI',figures:[
  {src:'yuanbai-model-alpha.png',x:285,y:130,w:330,mx:26,my:85,mw:185,kind:'cutout',speed:.14},
  {src:'yuanbai-mobile.jpg',x:1010,y:30,w:190,mx:242,my:25,mw:113,speed:-.06},
  {src:'yuanbai-dialogue.jpg',x:660,y:380,w:580,mx:130,my:340,mw:240,kind:'screen',speed:.04},
  {src:'yuanbai-home-clean.png',x:205,y:650,w:565,mx:20,my:580,mw:253,kind:'screen',speed:-.04},
  {src:'yuanbai-process-9-0.jpg',x:825,y:970,w:395,mx:137,my:940,mw:230,kind:'screen',speed:.06},
  {src:'yuanbai-process-14-0.jpg',x:290,y:1130,w:360,mx:18,my:1130,mw:200,kind:'screen',speed:.12}]},
 {id:'patrol',height:1410,mheight:1260,heading:['乘警纪实'],en:'PATROL',figures:[
  {src:'p17-0.jpg',x:850,y:80,w:335,mx:221,my:45,mw:143,speed:.06},
  {src:'patrol-still-1.jpg',x:210,y:280,w:550,mx:20,my:250,mw:240,kind:'film',speed:-.04},
  {src:'patrol-still-3.jpg',x:670,y:680,w:570,mx:130,my:590,mw:240,kind:'film',speed:.05},
  {src:'patrol-board-3.jpg',x:235,y:860,w:325,mx:20,my:835,mw:170,rotate:-4,speed:.1},
  {src:'patrol-board-6.jpg',x:745,y:1080,w:300,mx:203,my:995,mw:164,rotate:3,speed:.04}]},
 {id:'metro',height:1260,mheight:1110,heading:['地铁站'],en:'METRO',figures:[
  {src:'p27-0.jpg',x:225,y:110,w:565,mx:17,my:85,mw:260,kind:'film',speed:.07},
  {src:'p33-0.jpg',x:845,y:390,w:380,mx:174,my:355,mw:200,kind:'film',speed:-.07},
  {src:'p33-1.jpg',x:300,y:690,w:460,mx:23,my:615,mw:234,kind:'film',speed:.06},
  {src:'p33-2.jpg',x:815,y:920,w:405,mx:153,my:866,mw:218,kind:'film',speed:.12}]},
 {id:'lantern',height:1250,mheight:1120,heading:['小灯和小狐'],en:'LANTERN',figures:[
  {src:'lantern-pair-native.png',x:235,y:90,w:450,mx:18,my:70,mw:240,kind:'cutout',speed:.12},
  {src:'lantern-fox-alpha.png',x:865,y:430,w:245,mx:235,my:410,mw:135,kind:'cutout',rotate:4,speed:-.05},
  {src:'lantern-offering-native.png',x:380,y:780,w:190,mx:24,my:710,mw:135,kind:'cutout',speed:.08}]},
 {id:'noise',height:1340,mheight:1220,heading:['吵'],en:'NOISE',figures:[
  {src:'noise-still-4.jpg',x:230,y:100,w:500,mx:20,my:80,mw:255,kind:'film',speed:.1},
  {src:'noise-still-1.jpg',x:825,y:330,w:415,mx:150,my:335,mw:220,kind:'film',speed:-.05},
  {src:'noise-draft-3.jpg',x:265,y:640,w:380,mx:16,my:570,mw:190,rotate:-3,speed:.1},
  {src:'noise-characters.jpg',x:795,y:790,w:405,mx:170,my:800,mw:200,speed:.04},
  {src:'noise-still-3.jpg',x:375,y:1040,w:430,mx:24,my:1020,mw:230,kind:'film',speed:.12}]},
 {id:'together',height:1460,mheight:1290,heading:['快来救救','社恐'],en:'A DAY TOGETHER',figures:[
  {src:'together-cover.jpg',x:245,y:140,w:235,mx:28,my:100,mw:141,kind:'paper',rotate:-4,speed:.09},
  {src:'together-map.jpg',x:735,y:50,w:250,mx:207,my:30,mw:145,kind:'paper',speed:-.04},
  {src:'together-choice.jpg',x:1000,y:680,w:225,mx:211,my:700,mw:144,kind:'paper',rotate:4,speed:.08},
  {src:'together-action.jpg',x:365,y:860,w:245,mx:24,my:840,mw:146,kind:'paper',speed:.12}]},
 {id:'xy',height:1350,mheight:1100,heading:['Xy'],en:'IDENTITY',figures:[
  {src:'xy-logo-cutout.svg',x:270,y:140,w:310,mx:24,my:90,mw:170,kind:'cutout',speed:.12},
  {src:'xy-stationery-mockup.png',x:720,y:330,w:490,mx:144,my:370,mw:230,note:'应用示意',speed:-.06},
  {src:'xy-signage-mockup.png',x:250,y:800,w:570,mx:24,my:740,mw:285,note:'应用示意',speed:.06}]},
 {id:'brick',height:1160,mheight:1060,heading:['Brick','Breaker'],en:'UNITY GAME',figures:[
  {src:'brick-detail-1.jpg',x:260,y:80,w:525,mx:20,my:70,mw:260,kind:'screen',speed:.08},
  {src:'p35-0.jpg',x:825,y:400,w:400,mx:153,my:355,mw:220,kind:'screen',rotate:3,speed:-.06},
  {src:'brick-detail-2.jpg',x:330,y:780,w:500,mx:20,my:700,mw:260,kind:'screen',speed:.12}]},
 {id:'photography',height:1710,mheight:1720,heading:['日常里的','注视与停留'],en:'OBSERVATIONS',figures:[
  {src:'photo-window.jpg',x:285,y:100,w:300,mx:24,my:80,mw:153,speed:.1},
  {src:'photo-frame.jpg',x:865,y:280,w:330,mx:214,my:260,mw:150,speed:-.05},
  {src:'photo-street.jpg',x:205,y:710,w:530,mx:20,my:655,mw:240,speed:.08},
  {src:'photo-flower.jpg',x:875,y:790,w:290,mx:214,my:850,mw:155,speed:.02},
  {src:'photo-architecture.jpg',x:330,y:1120,w:330,mx:25,my:1120,mw:168,speed:.08},
  {src:'photo-light-2.jpg',x:790,y:1390,w:430,mx:153,my:1440,mw:221,speed:.12}]}
];
