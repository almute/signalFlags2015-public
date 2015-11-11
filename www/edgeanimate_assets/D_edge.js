
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e13='${dit}',x9='rgba(255,255,255,0.00)',x3='5.0.0',x5='rgba(0,0,0,0)',x12='rgba(207,69,69,0.00)',g='image',e15='${horn}',e16='${D}',e17='${ditCopy2}',e14='${dash}',b='block',d='display',m='rect',x10='rgba(255,250,250,0.00)',o='opacity',x4='6.0.0.400',i='none';var g1='jquery-1.7.1.min.js',g11='D2.mp3',g7='D.png',g8='horn.png',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'D',t:g,r:['3px','26px','49px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'horn',t:g,r:['66px','4px','50px','52px','auto','auto'],o:'0.5',f:[x5,im+g8,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','65px','52px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Button_Sound',t:m,r:['66px','4px','54px','52px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Sound_D',v:i,t:'audio',tag:'audio',r:['91','34','320px','45px','auto','auto'],sr:[aud+g11],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','120px','60px','auto','auto'],f:[x12]}}},tt:{d:19500,a:n,l:{"stop":0,"animation":750,"animation_stop":6000,"Sound":7000},data:[["eid60",o,3003,62,"linear",e13,'0.000000','1'],["eid61",o,3506,68,"linear",e13,'1','0'],["eid28",o,1000,62,"linear",e14,'0.000000','1'],["eid30",o,2507,68,"linear",e14,'1','0'],["eid170",o,0,0,"linear",e15,'1','1'],["eid174",o,7000,250,"linear",e15,'1','0.5'],["eid178",o,19394,106,"linear",e15,'0.500000','1'],["eid135",d,0,0,"linear",e16,b,b],["eid136",d,750,0,"linear",e16,b,i],["eid137",d,6000,0,"linear",e16,i,b],["eid76",o,4002,62,"linear",e17,'0.000000','1'],["eid77",o,4505,68,"linear",e17,'1','0'],["eid179","tr",0,function(e,d){this.eMA(e,d);},['pause','${Sound_D}',[]]],["eid180","tr",250,function(e,d){this.eMA(e,d);},['pause','${Sound_D}',[]]],["eid181","tr",750,function(e,d){this.eMA(e,d);},['pause','${Sound_D}',[]]],["eid182","tr",7000,function(e,d){this.eMA(e,d);},['pause','${Sound_D}',[]]],["eid183","tr",7198,function(e,d){this.eMA(e,d);},['play','${Sound_D}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Lichtsignale}","click",function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Sound}","click",function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19500,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");