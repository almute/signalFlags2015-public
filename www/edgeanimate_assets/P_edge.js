
(function(compId){var _=null,y=true,n=false,x2='6.0.0',x9='rgba(182,9,9,0.01)',x8='rgba(255,255,255,0.00)',x3='5.0.0',x5='rgba(0,0,0,0)',g='image',b='block',e13='${dashCopy}',e14='${dash}',e12='${ditCopy}',e11='${dit}',m='rect',o='opacity',x4='6.0.0.400',e10='${P}',d='display',i='none';var g7='P.png',g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'P',t:g,r:['3px','26px','79px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','90px','52px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','90px','60px','auto','auto'],f:[x9]}}},tt:{d:7927,a:n,l:{"stop":0,"animation":750},data:[["eid115",d,0,0,"linear",e10,b,b],["eid116",d,750,0,"linear",e10,b,i],["eid117",d,7927,0,"linear",e10,i,b],["eid60",o,1000,62,"linear",e11,'0.000000','1'],["eid61",o,1503,68,"linear",e11,'1','0'],["eid111",o,6000,62,"linear",e12,'0.000000','1'],["eid112",o,6503,68,"linear",e12,'1','0'],["eid113",o,4000,62,"linear",e13,'0.000000','1'],["eid114",o,5507,68,"linear",e13,'1','0'],["eid28",o,2000,62,"linear",e14,'0.000000','1'],["eid30",o,3507,68,"linear",e14,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7927,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Lichtsignale}","click",function(sym,e){sym.play("animation");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");