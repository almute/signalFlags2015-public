
(function(compId){var _=null,y=true,n=false,x2='6.0.0',x8='rgba(255,255,255,0.00)',x3='5.0.0',x5='rgba(0,0,0,0)',e15='${ditCopy5}',g='image',x9='rgba(0,0,0,0.00)',b='block',e11='${dashCopy3}',e10='${_3}',e13='${dash}',e14='${ditCopy4}',m='rect',e12='${ditCopy6}',o='opacity',x4='6.0.0.400',d='display',i='none';var g7='3.png',g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'ditCopy4',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy6',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy5',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy3',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'_3',t:g,r:['3px','26px','90px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','100px','52px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','100px','60px','auto','auto'],f:[x9]}}},tt:{d:10107,a:n,l:{"stop":0,"animation":750},data:[["eid139",d,0,0,"linear",e10,b,b],["eid140",d,750,0,"linear",e10,b,i],["eid141",d,10107,0,"linear",e10,i,b],["eid125",o,4000,74,"linear",e11,'0.000000','1'],["eid126",o,5802,81,"linear",e11,'1','0'],["eid131",o,3000,62,"linear",e12,'0.000000','1'],["eid132",o,3503,68,"linear",e12,'1','0'],["eid119",o,6392,74,"linear",e13,'0.000000','1'],["eid120",o,8194,81,"linear",e13,'1','0'],["eid117",o,2000,62,"linear",e14,'0.000000','1'],["eid118",o,2503,68,"linear",e14,'1','0'],["eid129",o,1000,62,"linear",e15,'0.000000','1'],["eid130",o,1503,68,"linear",e15,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10107,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
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