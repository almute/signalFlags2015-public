
(function(compId){var _=null,y=true,n=false,x1='6.0.0',e38='${dit}',x2='5.0.0',x4='rgba(0,0,0,0)',x34='dit',e21='${Tippen_back}',b='block',e27='${Tippen_lichtsignal}',m='rect',e22='${Tippen2Copy}',e24='${flagge-e-ton}',i='none',x31='-32px',x3='6.0.0.400',x37='65px',e17='${flagge-d-lang}',o='opacity',lf='left',x35='0',x33='auto',x32='130px',e23='${Tippen_swipe}',e25='${TipTippenpen2}',e26='${flagge_c}',e28='${Tippen_ton}',g='image',e15='${flagg-e-licht}',e20='${sound}',x29='180',x30='0.5',e19='${flagge_e}',d='display',w='width',tp='top',h='height',e18='${Tippen_Scrollen}',e16='${all_flags}',x14='rgba(112,112,112,1.00)';var g10='flagge-e-ton.jpg',g9='flagge%20e.jpg',g8='flagge-d-lang.jpg',g36='Leuchtfeuer-Lichtpunkt.png',g11='flagg-e-licht.jpg',g7='flagge%20c.jpg',g13='sound.png',g5='all%20flags.jpg',g6='Tippen.png',g12='kopfzeile.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'all_flags',v:b,t:g,r:['0px','0px','375px','667px','auto','auto'],o:'1',f:[x4,im+g5,'0px','0px']},{id:'TipTippenpen2',t:g,r:['269px','100px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'flagge_c',v:i,t:g,r:['0px','0px','375px','667px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Tippen2Copy',t:g,r:['318px','131px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'flagge-d-lang',v:i,t:g,r:['0px','0px','375px','1245px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Tippen_Scrollen',t:g,r:['146px','577px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Tippen_swipe',t:g,r:['113px','189px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'flagge_e',v:i,t:g,r:['0px','0px','375px','667px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'flagge-e-ton',v:i,t:g,r:['0px','0px','375px','667px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'flagg-e-licht',v:i,t:g,r:['0px','0px','375px','667px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'Tippen_lichtsignal',t:g,r:['-5px','382px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Tippen_ton',t:g,r:['69px','377px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Tippen_back',t:g,r:['312px','56px','75px','75px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'dit',symbolName:'dit',t:m,r:['0px','392px','65','65','auto','auto']},{id:'kopfzeile',t:g,r:['0px','0px','375px','66px','auto','auto'],f:[x4,im+g12,'0px','0px']},{id:'sound',v:i,t:g,r:['107px','337px','31px','56px','auto','auto'],o:'0.5',f:[x4,im+g13,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','375px','667px','auto','auto'],overflow:'hidden',f:[x14]}}},tt:{d:17762,a:y,data:[["eid77",d,0,0,"linear",e15,i,i],["eid76",d,9199,0,"linear",e15,i,b],["eid96",d,10950,0,"linear",e15,b,i],["eid2",d,0,0,"linear",e16,b,b],["eid3",d,1633,0,"linear",e16,b,i],["eid131",d,16447,0,"linear",e16,i,b],["eid138",d,17762,0,"linear",e16,b,b],["eid150",h,3771,0,"linear",e17,'1245px','1245px'],["eid49",d,0,0,"linear",e17,i,i],["eid68",d,3197,0,"linear",e17,i,b],["eid52",d,3996,0,"linear",e17,b,b],["eid73",d,6170,0,"linear",e17,b,b],["eid75",d,7704,0,"linear",e17,b,i],["eid53",d,8035,0,"linear",e17,i,i],["eid50",o,4071,62,"linear",e18,'0.000000','1'],["eid51",o,5885,68,"linear",e18,'1','0'],["eid22",d,0,0,"linear",e19,i,i],["eid26",d,7383,0,"linear",e19,i,b],["eid27",d,9200,0,"linear",e19,b,i],["eid94",d,10700,0,"linear",e19,i,b],["eid130",d,17762,0,"linear",e19,b,i],["eid124",w,13312,1710,"linear",e20,'31px','98px'],["eid114",o,13383,418,"linear",e20,'0.5','1'],["eid127",lf,13312,1710,"linear",e20,'107px','269px'],["eid132",o,16883,62,"linear",e21,'0.000000','1'],["eid133",o,17386,68,"linear",e21,'1','0'],["eid59",lf,4310,0,"linear",e18,'146px','146px'],["eid16",o,2562,62,"linear",e22,'0.000000','1'],["eid17",o,3065,68,"linear",e22,'1','0'],["eid110",d,0,0,"linear",e20,i,i],["eid109",d,13312,0,"linear",e20,i,b],["eid129",d,15133,0,"linear",e20,b,i],["eid32",o,6677,62,"linear",e23,'0.000000','1'],["eid33",o,7180,93,"linear",e23,'1','0'],["eid106",d,0,0,"linear",e24,i,i],["eid107",d,13196,0,"linear",e24,i,b],["eid108",d,15735,0,"linear",e24,b,i],["eid128",tp,13312,1710,"linear",e20,'392px','337px'],["eid39",lf,6677,503,"linear",e23,'318px','113px'],["eid4",o,1000,62,"linear",e25,'0.000000','1'],["eid5",o,1503,68,"linear",e25,'1','0'],["eid40",tp,6677,503,"linear",e23,'175px','189px'],["eid123",h,13312,1710,"linear",e20,'56px','176px'],["eid66",tp,4310,1575,"linear",e17,'0px','-458px'],["eid14",d,0,0,"linear",e26,i,i],["eid12",d,1633,0,"linear",e26,i,b],["eid13",d,3197,0,"linear",e26,b,i],["eid79",o,8383,62,"linear",e27,'0.000000','1'],["eid80",o,8886,68,"linear",e27,'1','0'],["eid67",tp,4310,1575,"linear",e18,'577px','119px'],["eid139",tp,0,0,"linear",e22,'131px','131px'],["eid102",o,12312,62,"linear",e28,'0.000000','1'],["eid103",o,12815,68,"linear",e28,'1','0'],["eid92","tr",0,function(e,d){this.eSA(e,d);},['stop','${dit}',[]]],["eid93","tr",9383,function(e,d){this.eSA(e,d);},['play','${dit}',[700]]]]}},"dit":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{tf:[[],[x29],[],[x30,x30]],r:[x31,x31,x32,x32,x33,x33],id:x34,o:x35,t:g,f:[x4,im+g36]}],style:{'${symbolSelector}':{r:[_,_,x37,x37]}}},tt:{d:1571,a:y,data:[["eid60",o,1000,62,"linear",e38,'0.000000','1'],["eid61",o,1503,68,"linear",e38,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-6180624");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'dit'
(function(symbolName){})("dit");
//Edge symbol end:'dit'
})})(AdobeEdge.$,AdobeEdge,"EDGE-6180624");