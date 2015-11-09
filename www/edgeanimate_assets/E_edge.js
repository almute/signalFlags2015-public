
(function(compId){var _=null,y=true,n=false,x2='6.0.0',e15='${dit}',x9='rgba(255,255,255,0.00)',x3='5.0.0',x5='rgba(0,0,0,0)',e13='${E}',g='image',x12='rgba(0,0,0,0.00)',b='block',e14='${horn2}',o='opacity',m='rect',x10='rgba(255,250,250,0.00)',d='display',x4='6.0.0.400',i='none';var g1='jquery-1.7.1.min.js',g7='E.png',g11='E.mp3',g8='horn.png',g6='Leuchtfeuer-Lichtpunkt.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'dit',t:g,r:['-35px','-35px','130px','130px','auto','auto'],o:'0',f:[x5,im+g6],tf:[[],['180'],[],['0.5','0.5']]},{id:'E',t:g,r:['3px','26px','8px','8px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'horn2',t:g,r:['65px','4px','52px','52px','auto','auto'],o:'1',f:[x5,im+g8,'0px','0px']},{id:'Button_Lichtsignale',t:m,r:['0px','4px','65px','52px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Button_Sound',t:m,r:['66px','4px','54px','52px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'E2',v:i,t:'audio',tag:'audio',r:['91','34','320px','45px','auto','auto'],sr:[aud+g11],pr:'metadata'}],style:{'${Stage}':{isStage:true,r:['null','null','120px','60px','auto','auto'],f:[x12]}}},tt:{d:9402,a:n,l:{"stop":0,"animation":750,"animation_stop":3000,"Sound":4000},data:[["eid118",d,0,0,"linear",e13,b,b],["eid119",d,750,0,"linear",e13,b,i],["eid120",d,3000,0,"linear",e13,i,b],["eid121",o,0,0,"linear",e14,'1','1'],["eid122",o,4085,44,"linear",e14,'1','0.5'],["eid123",o,9293,48,"linear",e14,'0.500000','1'],["eid60",o,1000,62,"linear",e15,'0.000000','1'],["eid61",o,1503,68,"linear",e15,'1','0'],["eid129","tr",0,function(e,d){this.eMA(e,d);},['pause','${E2}',[]]],["eid130","tr",250,function(e,d){this.eMA(e,d);},['pause','${E2}',[]]],["eid131","tr",750,function(e,d){this.eMA(e,d);},['pause','${E2}',[]]],["eid132","tr",4000,function(e,d){this.eMA(e,d);},['pause','${E2}',[]]],["eid133","tr",4198,function(e,d){this.eMA(e,d);},['play','${E2}',[0]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-80035868");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Sound}","click",function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_Lichtsignale}","click",function(sym,e){sym.play("animation");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play("Sound");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9402,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){})("Abwärtskompatibel");
//Edge symbol end:'Abwärtskompatibel'
})})(AdobeEdge.$,AdobeEdge,"EDGE-80035868");