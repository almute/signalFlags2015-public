
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e14='${dit}',x9='rgba(255,255,255,0.00)',x3='5.0.0',x5='rgba(0,0,0,0)',g='image',x12='rgba(0,0,0,0.00)',b='block',e18='${ditCopy2}',d='display',e16='${ditCopy}',e17='${dash}',e15='${L}',e13='${horn2}',m='rect',x10='rgba(255,250,250,0.00)',o='opacity',x4='6.0.0.400',i='none';var g7='L.png',g1='jquery-1.7.1.min.js',g11='L.mp3',g8='horn.png',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'L',t:g,r:['3px','26px','65px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'horn2',t:g,r:['88px','4px','52px','52px','auto','auto'],o:'1',f:[x5,im+g8,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','81px','52px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Button_Sound',t:m,r:['87px','4px','54px','52px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'L2',v:i,t:'audio',tag:'audio',r:['114','30','320px','45px','auto','auto'],sr:[aud+g11],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','140px','60px','auto','auto'],f:[x12]}}},tt:{d:22500,a:n,l:{"stop":0,"animation":750,"animation_stop":7000,"Sound":7750},data:[["eid142",o,7000,0,"linear",e13,'1','1'],["eid143",o,7835,44,"linear",e13,'1','0.5'],["eid144",o,22330,48,"linear",e13,'0.500000','1'],["eid60",o,1000,62,"linear",e14,'0.000000','1'],["eid61",o,1503,68,"linear",e14,'1','0'],["eid139",d,0,0,"linear",e15,b,b],["eid140",d,750,0,"linear",e15,b,i],["eid141",d,7000,0,"linear",e15,i,b],["eid111",o,4000,62,"linear",e16,'0.000000','1'],["eid112",o,4503,68,"linear",e16,'1','0'],["eid28",o,2000,62,"linear",e17,'0.000000','1'],["eid30",o,3507,68,"linear",e17,'1','0'],["eid113",o,5000,62,"linear",e18,'0.000000','1'],["eid114",o,5503,68,"linear",e18,'1','0'],["eid152","tr",0,function(e,d){this.eMA(e,d);},['pause','${L2}',[]]],["eid153","tr",250,function(e,d){this.eMA(e,d);},['pause','${L2}',[]]],["eid154","tr",750,function(e,d){this.eMA(e,d);},['pause','${L2}',[]]],["eid155","tr",7750,function(e,d){this.eMA(e,d);},['pause','${L2}',[]]],["eid156","tr",7948,function(e,d){this.eMA(e,d);},['play','${L2}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Sound}","click",function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Lichtsignale}","click",function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7750,function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",22500,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");