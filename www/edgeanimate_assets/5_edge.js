
(function(compId){var _=null,y=true,n=false,e10='${ditCopy3}',e13='${ditCopy}',x8='rgba(255,255,255,0.00)',x3='5.0.0',o='opacity',g='image',x9='rgba(0,0,0,0.00)',b='block',e15='${dit}',e14='${_5}',d='display',e12='${ditCopy4}',x2='6.0.0',m='rect',e11='${ditCopy2}',x4='6.0.0.400',x5='rgba(0,0,0,0)',i='none';var g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png',g7='5.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy3',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy4',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'_5',t:g,r:['3px','26px','65px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'Button_LichtsignaleCopy',t:m,r:['0px','4px','80px','52px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','80px','60px','auto','auto'],f:[x9]}}},tt:{d:7000,a:n,l:{"stop":0,"animation":750},data:[["eid115",o,4000,62,"linear",e10,'0.000000','1'],["eid116",o,4503,68,"linear",e10,'1','0'],["eid113",o,3000,62,"linear",e11,'0.000000','1'],["eid114",o,3503,68,"linear",e11,'1','0'],["eid117",o,5000,62,"linear",e12,'0.000000','1'],["eid118",o,5503,68,"linear",e12,'1','0'],["eid111",o,2000,62,"linear",e13,'0.000000','1'],["eid112",o,2503,68,"linear",e13,'1','0'],["eid119",d,0,0,"linear",e14,b,b],["eid120",d,750,0,"linear",e14,b,i],["eid121",d,7000,0,"linear",e14,i,b],["eid60",o,1000,62,"linear",e15,'0.000000','1'],["eid61",o,1503,68,"linear",e15,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_LichtsignaleCopy}","click",function(sym,e){sym.play("animation");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");