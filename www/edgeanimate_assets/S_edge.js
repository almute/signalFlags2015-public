
(function(compId){var _=null,y=true,n=false,x2='6.0.0',x9='rgba(255,255,255,0.00)',x3='5.0.0',g='image',b='block',e17='${ditCopy2}',e16='${horn2}',e15='${S}',d='display',e14='${dit}',e13='${ditCopy3}',o='opacity',x4='6.0.0.400',m='rect',x10='rgba(255,250,250,0.00)',x5='rgba(0,0,0,0)',x12='rgba(209,20,20,0.00)',i='none';var g7='S.png',g11='S.mp3',g1='jquery-1.7.1.min.js',g6='Leuchtfeuer-Lichtpunkt.png',g8='horn.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy2',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'ditCopy3',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'S',t:g,r:['3px','26px','36px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'horn2',t:g,r:['65px','4px','52px','52px','auto','auto'],o:'1',f:[x5,im+g8,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','60px','52px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Button_Sound',t:m,r:['65px','4px','54px','52px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'S2',v:i,t:'audio',tag:'audio',r:['91','30','320px','45px','auto','auto'],sr:[aud+g11],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','120px','60px','auto','auto'],f:[x12]}}},tt:{d:14500,a:n,l:{"stop":0,"animation":750,"animation_stop":5000,"Sound":5790},data:[["eid80",o,2990,62,"linear",e13,'0.000000','1'],["eid81",o,3493,68,"linear",e13,'1','0'],["eid60",o,1000,62,"linear",e14,'0.000000','1'],["eid61",o,1503,68,"linear",e14,'1','0'],["eid130",d,0,0,"linear",e15,b,b],["eid131",d,750,0,"linear",e15,b,i],["eid132",d,5000,0,"linear",e15,i,b],["eid133",o,5000,0,"linear",e16,'1','1'],["eid134",o,5835,44,"linear",e16,'1','0.5'],["eid135",o,14433,48,"linear",e16,'0.500000','1'],["eid76",o,1999,62,"linear",e17,'0.000000','1'],["eid77",o,2502,68,"linear",e17,'1','0'],["eid144","tr",0,function(e,d){this.eMA(e,d);},['pause','${S2}',[]]],["eid145","tr",250,function(e,d){this.eMA(e,d);},['pause','${S2}',[]]],["eid146","tr",750,function(e,d){this.eMA(e,d);},['pause','${S2}',[]]],["eid147","tr",5750,function(e,d){this.eMA(e,d);},['pause','${S2}',[]]],["eid148","tr",5948,function(e,d){this.eMA(e,d);},['play','${S2}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5790,function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14500,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");