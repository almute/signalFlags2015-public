// JavaScript Document


function Show_All_flags () {
"use strict";
	$("#nav-help").hide();
	$("#help-page").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#about-page").hide();
	$("#all-flags").show();
document.getElementById("button_flags").classList.remove ("reiter_inaktiv");
document.getElementById("button_writing").classList.add ("reiter_inaktiv");
document.getElementById("button_reading").classList.add ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
}

function Show_Reading () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").show();
	$("#about-page").hide();
	$("#help-page").hide();
	clean_reading ();
	keyboard_flags_start ();
document.getElementById("button_flags").classList.add ( "reiter_inaktiv");
document.getElementById("button_writing").classList.add ( "reiter_inaktiv");
document.getElementById("button_reading").classList.remove ( "reiter_inaktiv");
document.getElementById("button_info").classList.add ( "reiter_inaktiv");
//document.getElementById("button_keyboard_reading").style.opacity = "0.5";
}


function Show_About () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#about-page").show();
	$("#help-page").hide();
document.getElementById("button_flags").classList.add ( "reiter_inaktiv");
document.getElementById("button_writing").classList.add ( "reiter_inaktiv");
document.getElementById("button_reading").classList.add ( "reiter_inaktiv");
document.getElementById("button_info").classList.remove ( "reiter_inaktiv");
//document.getElementById("button_info2").style.opacity = "1";
//document.getElementById("button_sprache").style.opacity = "0.5";
//document.getElementById("button_help").style.opacity = "0.5";
}


// +++++++++++++ Flaggen lesen ---------------


function reading (flagLetter) {
"use strict";

var zeichentyp = flagLetter.length;
var text = document.getElementById("lesen").innerHTML;
var textlaenge = text.length;


//Flagge auslesen

for (var i=0; i<=textlaenge; i++ ) 
	{if (textlaenge === i) {
	var zeile = (i+1);
	{document.images.namedItem("lesen"+ zeile).src= "images/" + flagLetter +".png"; 
	if (zeichentyp !== 1) {
		document.images.namedItem("lesen"+ zeile).classList.add ("flaggentext_hilfsstander");}
	}
	}}



// Buchstaben einfügen
if (textlaenge < 12) 
	{
	if (zeichentyp === 1) 
		{
		document.getElementById("lesen").innerHTML = text + flagLetter;
		}
	else   // Hilfsstander umsetzen
		{ 

		//Erste Zeichen auslesen
		var flag1 = text.charAt(0);
		var flag2 = text.charAt(1);
		var flag3 = text.charAt(2);
		var flag4 = text.charAt(3);
	
		 if (flagLetter === "1st" && flag1 !== "") {
		 document.getElementById("lesen").innerHTML = text + flag1;}
		 else if (flagLetter === "2nd" && flag2 !== "" ) {
		 document.getElementById("lesen").innerHTML = text + flag2;}
		 else if (flagLetter === "3rd" && flag3 !== "") {
		 document.getElementById("lesen").innerHTML = text + flag3;}
		 else if (flagLetter === "4th" && flag4 !== "") {
		 document.getElementById("lesen").innerHTML = text + flag4;}
		 else {
		 document.getElementById("lesen").innerHTML = text + "?";}
		}	// Ende else	
	}  //Ende wenn Text nicht zu lang

}  // ++++++++++++++   Ende function reading



// ************Alle Flaggen und Zeichen löschen ***************

function clean_reading () {
	"use strict";
	document.getElementById("lesen").innerHTML = "";
	for (var i=1; i<=12; i++ ) {
		document.images.namedItem("lesen"+ i).src= "images/empty.png"; 
		document.images.namedItem("lesen"+ i).classList.remove("flaggentext_hilfsstander");
	}
}		


// ************Letzte Flaggen und letztes Zeichen löschen ***************

function delete_reading () {
"use strict";
	
var text = document.getElementById("lesen").innerHTML;
var str = text;
	var laenge = (text.length);
	
for (var i=1; i<=12; i++ ) {
	if (laenge ===i)
		{document.images.namedItem("lesen"+ i).src= "images/empty.png"; 
		document.images.namedItem("lesen"+ i).classList.remove("flaggentext_hilfsstander");
		}
	}
	str = str.substring(0,str.length-1);
	document.getElementById("lesen").innerHTML = str;
	}

//************

function delete_flag () {
"use strict";

var textinput = document.getElementById("textinput").innerHTML; 
var str = textinput;
var laenge = (textinput.length);
for (var i=1; i<=5; i++ ) {
	if (laenge ===i) {
		document.images.namedItem("flagge"+ i).src= "images/empty.png"; 
		document.images.namedItem("flagge"+ i).classList.remove("flaggentext2_hilfsstander");
		}
	}
	str = str.substring(0,str.length-1);
	textinput = str;
	document.getElementById("textinput").innerHTML = textinput;
}


//********* Tastatur aus und einblenden


function keyboard_flags_einblenden () {
"use strict";
if ( document.getElementById("flagskeyboard").style.display == 'inline')
	{
	document.getElementById("flagskeyboard").style.display='none';
	document.getElementById("lesen").style.display='inline';
	}
else {
	document.getElementById("flagskeyboard").style.display='inline';
}
}


function keyboard_flags_start () {
"use strict";
	document.getElementById("flagskeyboard").style.display='inline';
}
// ********************** Hilfe anzeigen ***********************

function help_Flaggen () {}
function help_Schreiben () {}
function help_Lesen () {}
