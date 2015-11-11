// JavaScript Document

function Show_Top () {
"use strict";
	window.scroll( 0, 0 );
}

function More_hide () {
	$("#help-page").hide();
	$("#about-page").hide();
	$("#settings").hide();
	$("#menu1").show();
	$("#menu2").hide();
}

function Show_All_flags () {
"use strict";
	$("#nav-help").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#gala").hide();
	$("#all-flags").show();
document.getElementById("button_flags").classList.remove ("reiter_inaktiv");
document.getElementById("button_writing").classList.add ("reiter_inaktiv");
document.getElementById("button_reading").classList.add ("reiter_inaktiv");
document.getElementById("button_gala").classList.add ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
document.getElementById("button_help").classList.add ("reiter_inaktiv");
	More_hide (); 
	window.scrollTo( 0, 0 );
}

function Show_Reading () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").show();
	$("#about-page").hide();
	$("#help-page").hide();
	$("#gala").hide();
	$("#settings").hide();
	clean_reading ();
	keyboard_flags_start ();
document.getElementById("button_flags").classList.add ("reiter_inaktiv");
document.getElementById("button_writing").classList.add ("reiter_inaktiv");
document.getElementById("button_reading").classList.remove ("reiter_inaktiv");
document.getElementById("button_gala").classList.add ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
document.getElementById("button_help").classList.add ("reiter_inaktiv");
	window.scrollTo( 0, 0 );
}


function Show_About () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#gala").hide();
	$("#help-page").hide();

	$("#about-page").show();
	$("#settings").hide();
	$("#menu1").hide();
	$("#menu2").show();

	
document.getElementById("button_flags2").classList.add ("reiter_inaktiv");
document.getElementById("button_settings").classList.add ("reiter_inaktiv");
document.getElementById("button_info2").classList.remove ("reiter_inaktiv");
document.getElementById("button_help").classList.add ("reiter_inaktiv");
	window.scrollTo( 0, 0 );
}

function Show_Settings () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#gala").hide();
	$("#help-page").hide();

	$("#about-page").hide();
	$("#settings").show();
	$("#menu1").hide();
	$("#menu2").show();

	
document.getElementById("button_flags2").classList.add ("reiter_inaktiv");
document.getElementById("button_settings").classList.remove ("reiter_inaktiv");
document.getElementById("button_info2").classList.add ("reiter_inaktiv");
document.getElementById("button_help").classList.add ("reiter_inaktiv");
	window.scrollTo( 0, 0 );
}

// +++++++++++++++++++++++++++++++++++++++++++ Gala ----------+++++++++++++++++++++-----

function Show_Gala () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#about-page").hide();
	$("#help-page").hide();
	$("#gala").show();
document.getElementById("button_flags").classList.add ("reiter_inaktiv");
document.getElementById("button_writing").classList.add ("reiter_inaktiv");
document.getElementById("button_reading").classList.add ("reiter_inaktiv");
document.getElementById("button_gala").classList.remove ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
document.getElementById("button_help").classList.add ("reiter_inaktiv");
	window.scrollTo( 0, 0 );
	
// Starteinstellung für Gala
	$("#gala2").hide();
	$("#gala3").hide();
	document.getElementById("gala_back").style.opacity = "0.3";
	document.getElementById("gala_vor").style.opacity = "1";
    localStorage.setItem("galanummer", "1");

}


// ++++++++++ Gala blätern ++++++++++++++++++++++++++

//nächste Gala anzeigen
function nextGala() {
    'use strict';
    var galanummer_alt = localStorage.getItem("galanummer");
    if (galanummer_alt < 3) 
	{
	var galanummer_neu = (Number(galanummer_alt) +1);
	$("#gala"+galanummer_alt).hide();
	$("#gala"+galanummer_neu).show();  
	localStorage.setItem("galanummer", galanummer_neu);
	document.getElementById("gala_back").style.opacity = "1";

// Button Vor ausgrauen
    if (galanummer_neu === "3" || galanummer_neu === 3) {
        document.getElementById("gala_vor").style.opacity = "0.3";
	} else {
        document.getElementById("gala_vor").style.opacity = "1";
	}
	}
}  // ++++++  Ende function nextGala 

//vorherige Gala anzeigen
function previousGala() {
    'use strict';
    var galanummer_alt = localStorage.getItem("galanummer");
    if (galanummer_alt > 1) 
	{
	var galanummer_neu = (Number(galanummer_alt) -1);
	$("#gala"+galanummer_alt).hide();
	$("#gala"+galanummer_neu).show();  
	localStorage.setItem("galanummer", galanummer_neu);	
	document.getElementById("gala_vor").style.opacity = "1";

// Button Zurück ausgrauen
    if (galanummer_neu === "1" || Number (galanummer_neu) === 1) {
        document.getElementById("gala_back").style.opacity = "0.3";
    } else {
        document.getElementById("gala_back").style.opacity = "1";
    }
	}
}  // ++++++  Ende function previousGala



// ++++++++++   Swipe für Gala

function activateSwipeGala () {
var myElementGala = document.getElementById('gala');
var mc = new Hammer(myElementGala);

mc.on("swipeleft", function(ev) {
    nextGala();
	window.scrollTo( 0, 0 );
});

mc.on("swiperight", function(ev) {
    previousGala();
	window.scrollTo( 0, 0 );
});
}

// +++++++++++++++++++++++++++++++++++++++++++ Flaggen lesen +++++++++++++++++++++++---------------


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
		document.images.namedItem("lesen"+ zeile).classList.add ("readingFlags_hilfsstander");}
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
		document.images.namedItem("lesen"+ i).classList.remove("readingFlags_hilfsstander");
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
		document.images.namedItem("lesen"+ i).classList.remove("readingFlags_hilfsstander");
		}
	}
	str = str.substring(0,str.length-1);
	document.getElementById("lesen").innerHTML = str;
	}



//********* Tastatur aus und einblenden


function keyboard_flags_einblenden () {
"use strict";
if ( document.getElementById("readingKeyboard").style.display == 'inline')
	{
	document.getElementById("readingKeyboard").style.display='none';
	document.getElementById("lesen").style.display='inline';
	}
else {
	document.getElementById("readingKeyboard").style.display='inline';
}
}


function keyboard_flags_start () {
"use strict";
	document.getElementById("readingKeyboard").style.display='inline';
}
// ********************** Hilfe anzeigen ***********************

function help_Flaggen () {}
function help_Schreiben () {}
function help_Lesen () {}
