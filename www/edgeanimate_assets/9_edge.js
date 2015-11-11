
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e15='${_9}',x8='rgba(255,255,255,0.00)',x3='5.0.0',o='opacity',x9='rgba(213,35,35,0.01)',g='image',e11='${ditCopy4}',b='block',e10='${dashCopy3}',e12='${dashCopy2}',e13='${dash}',d='display',m='rect',e14='${dashCopy}',x4='6.0.0.400',x5='rgba(0,0,0,0)',i='none';var g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png',g7='9.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'ditCopy4',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dash',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy3',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'dashCopy',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'_9',t:g,r:['3px','26px','136px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','140px','52px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','140px','60px','auto','auto'],f:[x9]}}},tt:{d:11000,a:n,l:{"stop":0,"animation":750},data:[["eid125",o,7000,62,"linear",e10,'0.000000','1'],["eid126",o,8507,68,"linear",e10,'1','0'],["eid117",o,9000,62,"linear",e11,'0.000000','1'],["eid118",o,9503,68,"linear",e11,'1','0'],["eid123",o,3000,62,"linear",e12,'0.000000','1'],["eid124",o,4507,68,"linear",e12,'1','0'],["eid119",o,5000,62,"linear",e13,'0.000000','1'],["eid120",o,6507,68,"linear",e13,'1','0'],["eid121",o,1000,62,"linear",e14,'0.000000','1'],["eid122",o,2507,68,"linear",e14,'1','0'],["eid131",d,0,0,"linear",e15,b,b],["eid132",d,750,0,"linear",e15,b,i],["eid133",d,11000,0,"linear",e15,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
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