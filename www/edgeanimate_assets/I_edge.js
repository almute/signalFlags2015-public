
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e13='${dit}',x4='6.0.0.400',x3='5.0.0',x5='rgba(0,0,0,0)',x12='rgba(227,17,17,0.00)',g='image',b='block',e16='${I}',d='display',e15='${horn2}',e14='${ditCopy2}',o='opacity',m='rect',x11='rgba(255,250,250,0.00)',x10='rgba(255,255,255,0.00)',i='none';var g1='jquery-1.7.1.min.js',g9='I.mp3',g8='horn.png',g6='Leuchtfeuer-Lichtpunkt.png',g7='I.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'I',t:g,r:['3px','26px','22px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'horn2',t:g,r:['65px','4px','52px','52px','auto','auto'],o:'1',f:[x5,im+g8,'0px','0px']},{id:'I2',v:i,t:'audio',tag:'audio',r:['91','30','320px','45px','auto','auto'],sr:[aud+g9],pr:'auto'},{id:'Button_Lichtsignale',t:m,r:['0px','4px','65px','52px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Button_Sound',t:m,r:['66px','4px','54px','52px','auto','auto'],f:[x11],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','120px','60px','auto','auto'],f:[x12]}}},tt:{d:11750,a:n,l:{"stop":0,"animation":750,"animation_stop":4000,"Sound":4750},data:[["eid60",o,1000,62,"linear",e13,'0.000000','1'],["eid61",o,1503,68,"linear",e13,'1','0'],["eid76",o,1999,62,"linear",e14,'0.000000','1'],["eid77",o,2502,68,"linear",e14,'1','0'],["eid132",o,0,0,"linear",e15,'1','1'],["eid133",o,4835,44,"linear",e15,'1','0.5'],["eid134",o,11641,48,"linear",e15,'0.500000','1'],["eid129",d,0,0,"linear",e16,b,b],["eid130",d,750,0,"linear",e16,b,i],["eid131",d,4000,0,"linear",e16,i,b],["eid142","tr",0,function(e,d){this.eMA(e,d);},['pause','${I2}',[]]],["eid143","tr",250,function(e,d){this.eMA(e,d);},['pause','${I2}',[]]],["eid144","tr",750,function(e,d){this.eMA(e,d);},['pause','${I2}',[]]],["eid145","tr",4750,function(e,d){this.eMA(e,d);},['pause','${I2}',[]]],["eid146","tr",4948,function(e,d){this.eMA(e,d);},['play','${I2}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4750,function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Sound}","click",function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Lichtsignale}","click",function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4747,function(sym,e){sym.play("Sound");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");