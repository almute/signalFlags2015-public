
(function(compId){var _=null,y=true,n=false,e10='${ditCopy3}',x4='6.0.0.400',x3='5.0.0',o='opacity',e11='${lamp_white}',g='image',x8='rgba(0,0,0,0.00)',b='block',e9='${dashCopy}',e12='${dash}',e14='${ditCopy2}',e13='${ditCopy4}',x2='6.0.0',d='display',x5='rgba(0,0,0,0)',i='none';var g1='jquery-1.7.1.min.js',g7='lamp%20white.svg',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dit',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy3',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy4',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dash',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy',t:g,r:['0px','-15px','60px','60px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'lamp_white',v:b,t:g,r:['23px','0px','15px','30px','auto','auto'],overflow:'visible',o:'1',f:[x5,im+g7,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','60px','30px','auto','auto'],f:[x8]}}},tt:{d:9000,a:n,l:{"stop":0,"animation":750},data:[["eid121",o,1000,62,"linear",e9,'0.000000','1'],["eid122",o,2507,68,"linear",e9,'1','0'],["eid115",o,6000,62,"linear",e10,'0.000000','1'],["eid116",o,6503,68,"linear",e10,'1','0'],["eid87",d,0,0,"linear",e11,b,b],["eid90",d,750,0,"linear",e11,b,i],["eid109",d,9000,0,"linear",e11,i,b],["eid119",o,3000,62,"linear",e12,'0.000000','1'],["eid120",o,4507,68,"linear",e12,'1','0'],["eid117",o,7000,62,"linear",e13,'0.000000','1'],["eid118",o,7503,68,"linear",e13,'1','0'],["eid113",o,5000,62,"linear",e14,'0.000000','1'],["eid114",o,5503,68,"linear",e14,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${lamp_white}","click",function(sym,e){sym.play("animation");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");