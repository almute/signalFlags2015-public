// JavaScript Document


function Show_All_flags () {
"use strict";
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#about-page").hide();
	$("#help-page").hide();
	$("#all-flags").show();
document.getElementById("button_flags").style.opacity = "1";
document.getElementById("button_writing").style.opacity = "0.5";
document.getElementById("button_reading").style.opacity = "0.5";
document.getElementById("button_info").style.opacity = "0.5";
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
document.getElementById("button_flags").style.opacity = "0.5";
document.getElementById("button_writing").style.opacity = "0.5";
document.getElementById("button_reading").style.opacity = "1";
document.getElementById("button_info").style.opacity = "0.5";
document.getElementById("button_keyboard_reading").style.opacity = "0.5";
}


function Show_About () {
"use strict";
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").hide();
	$("#reading").hide();
	$("#about-page").show();
	$("#help-page").hide();
document.getElementById("button_flags").style.opacity = "0.5";
document.getElementById("button_writing").style.opacity = "0.5";
document.getElementById("button_reading").style.opacity = "0.5";
document.getElementById("button_info").style.opacity = "1";
document.getElementById("button_info2").style.opacity = "1";
document.getElementById("button_sprache").style.opacity = "0.5";
document.getElementById("button_help").style.opacity = "0.5";
}


// +++++++++++++ Flaggen lesen ---------------


function reading (flagLetter) {
"use strict";

var zeichentyp = flagLetter.length;
var text = document.getElementById("lesen").innerHTML;
var textlaenge = text.length;


//Flagge auslesen
if (textlaenge === 0) {
	document.images.lesen1.src = "images/" + flagLetter +".png";}
else if (textlaenge === 1) {
	document.images.lesen2.src = "images/" + flagLetter +".png";}
else if (textlaenge === 2) {
	document.images.lesen3.src = "images/" + flagLetter +".png";}
else if (textlaenge === 3) {
	document.images.lesen4.src = "images/" + flagLetter +".png";}
else if (textlaenge === 4) {
	document.images.lesen5.src = "images/" + flagLetter +".png";}
else if (textlaenge === 5) {
	document.images.lesen6.src = "images/" + flagLetter +".png";}
else if (textlaenge === 6) {
	document.images.lesen7.src = "images/" + flagLetter +".png";}
else if (textlaenge === 7) {
	document.images.lesen8.src = "images/" + flagLetter +".png";}
else if (textlaenge === 8) {
	document.images.lesen9.src = "images/" + flagLetter +".png";}
else if (textlaenge === 9) {
	document.images.lesen10.src = "images/" + flagLetter +".png";}							
else if (textlaenge === 10) {
	document.images.lesen11.src = "images/" + flagLetter +".png";}
else if (textlaenge === 11) {
	document.images.lesen12.src = "images/" + flagLetter +".png";}



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
	
		 if (flagLetter === "1st") {
		 document.getElementById("lesen").innerHTML = text + flag1;}
		 else if (flagLetter === "2nd") {
		 document.getElementById("lesen").innerHTML = text + flag2;}
		 if (flagLetter === "3rd") {
		 document.getElementById("lesen").innerHTML = text + flag3;}
		 if (flagLetter === "4th") {
		 document.getElementById("lesen").innerHTML = text + flag4;}
		}	// Ende else	
	}  //Ende wenn Text nicht zu lang

}  // ++++++++++++++   Ende function reading




// ************Alle Flaggen und Zeichen löschen ***************

function clean_reading () {
	"use strict";
	document.images.lesen1.src = "images/empty.png";
	document.images.lesen2.src = "images/empty.png";
	document.images.lesen3.src = "images/empty.png";
	document.images.lesen4.src = "images/empty.png";
	document.images.lesen5.src = "images/empty.png";
	document.images.lesen6.src = "images/empty.png";
	document.images.lesen7.src = "images/empty.png";
	document.images.lesen8.src = "images/empty.png";
	document.images.lesen9.src = "images/empty.png";
	document.images.lesen10.src = "images/empty.png";
	document.images.lesen11.src = "images/empty.png";
	document.images.lesen12.src = "images/empty.png";
	document.getElementById("lesen").innerHTML = "";
}

// ************Letzte Flaggen und letztes Zeichen löschen ***************

function delete_reading () {
"use strict";
	
var text = document.getElementById("lesen").innerHTML;
var str = text;
	var i = (text.length);
	if (i===12)
	{document.images.lesen12.src = "images/empty.png";}
	if (i===11)
	{document.images.lesen11.src = "images/empty.png";}
	if (i===10)
	{document.images.lesen10.src = "images/empty.png";}
	if (i===9)
	{document.images.lesen9.src = "images/empty.png";}
	if (i===8)
	{document.images.lesen8.src = "images/empty.png";}
	if (i===7)
	{document.images.lesen7.src = "images/empty.png";}
	if (i===6)
	{document.images.lesen6.src = "images/empty.png";}
	if (i===5)
	{document.images.lesen5.src = "images/empty.png";}
	if (i===4)
	{document.images.lesen4.src = "images/empty.png";}
	if (i===3)
	{document.images.lesen3.src = "images/empty.png";}
	if (i===2)
	{document.images.lesen2.src = "images/empty.png";}
	if (i===1)
	{document.images.lesen1.src = "images/empty.png";}
	str = str.substring(0,str.length-1);
	document.getElementById("lesen").innerHTML = str;
}


function keyboard_flags_ausblenden () {
"use strict";
	document.getElementById("flagskeyboard-popup").style.display='none';
	document.getElementById("button_keyboard_reading").style.opacity = "1";
}

function keyboard_flags_einblenden () {
"use strict";
	document.getElementById("flagskeyboard-popup").style.display='inline';
	document.getElementById("button_keyboard_reading").style.opacity = "0.5";
}

// ********************** Hilfe anzeigen ***********************

function help_Flaggen () {}
function help_Schreiben () {}
function help_Lesen () {}
