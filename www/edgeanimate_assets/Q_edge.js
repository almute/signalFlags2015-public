
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e10='${dit}',x4='6.0.0.400',o='opacity',e13='${Q}',g='image',x8='rgba(0,0,0,0.00)',b='block',e12='${dashCopy}',e11='${dash}',d='display',x3='5.0.0',e9='${dashCopy2}',x5='rgba(0,0,0,0)',i='none';var g7='Q.png',g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'Q',t:g,r:['3px','26px','90px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','100px','60px','auto','auto'],f:[x8]}}},tt:{d:9000,a:n,l:{"stop":0,"animation":750},data:[["eid115",o,6000,62,"linear",e9,'0.000000','1'],["eid116",o,7507,68,"linear",e9,'1','0'],["eid60",o,5000,62,"linear",e10,'0.000000','1'],["eid61",o,5503,68,"linear",e10,'1','0'],["eid28",o,1000,62,"linear",e11,'0.000000','1'],["eid30",o,2507,68,"linear",e11,'1','0'],["eid113",o,3000,62,"linear",e12,'0.000000','1'],["eid114",o,4507,68,"linear",e12,'1','0'],["eid117",d,0,0,"linear",e13,b,b],["eid118",d,750,0,"linear",e13,b,i],["eid119",d,9000,0,"linear",e13,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){sym.play("animation");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");