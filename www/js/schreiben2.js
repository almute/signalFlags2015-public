/*function onLoad() 
{ 
"use strict";
document.addEventListener("deviceready", isDeviceReady, false); 
} 
function isDeviceReady() 
{ 
"use strict";
navigator.notification.alert('device ready'); 
} */

// ************Fenster Schreiben einblenden ***************

function Show_Writing () {
"use strict";
//	$("#startpage").hide();
	$("#all-flags").hide();
	$("#flaginfo").hide();
	$("#writing").show();
	$("#reading").hide();
	$("#about-page").hide();
	 clean_flags ();
	keyboard_start ();
	window.scrollTo( 0, 0 );
document.getElementById("button_flags").classList.add("reiter_inaktiv");
document.getElementById("button_writing").classList.remove ("reiter_inaktiv");
document.getElementById("button_reading").classList.add ("reiter_inaktiv");
document.getElementById("button_gala").classList.add ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
// document.getElementById("button_keyboard_schreiben").style.opacity = "0.5";
}

// ************Zeichen in Textfeld einfügen ***************

function flags (flagLetter) {
"use strict";
var writingTextfield = document.getElementById("writingTextfield").innerHTML; 
if (writingTextfield.length < 5)
	{writingTextfield = writingTextfield + flagLetter;}
	
	var textFolge = writingTextfield;
	document.getElementById("writingTextfield").innerHTML = textFolge;

//Alle Zeichen auslesen
var flag1 = textFolge.charAt(0);
var flag2 = textFolge.charAt(1);
var flag3 = textFolge.charAt(2);
var flag4 = textFolge.charAt(3);
var flag5 = textFolge.charAt(4);


//Flagge ist erstes Zeichen
if (textFolge.length === 1) {
document.images.flagge1.src = "images/" + flag1 +".png";
}  // Ende Flagge 1

//Flagge ist zweites Zeichen
else if (textFolge.length === 2) {
var flag2Korr = flag2;
	if (flag2 === flag1 ){
		flag2Korr = "1st";
	document.images.flagge2.classList.add("writingFlags_hilfsstander");	
}

document.images.flagge2.src = "images/" + flag2Korr +".png";
}  // Ende Flagge 2


//Flagge ist drittes Zeichen
else if (textFolge.length === 3) {
var flag3Korr = flag3;
	if (flag3 === flag1 ){
		 flag3Korr = "1st";
	}
	else if (flag3 === flag2)
		{ flag3Korr = "2nd";
	}
	if (flag3Korr === "1st" && flag2 === flag1)
	{ flag3Korr = "2nd";}
	
document.images.flagge3.src = "images/" + flag3Korr +".png";
if (flag3Korr.length > 1) {
document.images.flagge3.classList.add("writingFlags_hilfsstander");}	

}  // Ende Flagge 3


//Flagge ist viertes Zeichen	
else if (textFolge.length === 4) {
var flag4Korr = flag4;
	if (flag4 === flag1 ){
		flag4Korr = "1st";}
	else if (flag4 === flag2){
		flag4Korr = "2nd";}
		
	else if (flag4 === flag3)
		{flag4Korr = "3rd";}
	
	if (flag4Korr === "1st" && flag2 === flag1)
	{ flag4Korr = "2nd";}
	if (flag4Korr === "1st" && flag3 === flag1)
	{ flag4Korr = "3rd";}

	if (flag4Korr === "2nd" && flag3 === flag2)
	{ flag4Korr = "3rd";}
	

document.images.flagge4.src = "images/" + flag4Korr +".png";
if (flag4Korr.length > 1) {
document.images.flagge4.classList.add("writingFlags_hilfsstander");}	
}  // Ende Flagge 4

//Flagge ist fünftes Zeichen	
else if (textFolge.length === 5) {
 	var flag5Korr = flag5;
	if (flag5 === flag1 )
	{flag5Korr = "1st";}
	
	else if (flag5 === flag2)
	{ flag5Korr = "2nd";}
	
	else if (flag5 === flag3)
	{ flag5Korr = "3rd";}
	
	else if (flag5 === flag4)
	{ flag5Korr = "4th";}


	if (flag5Korr === "1st" && flag2 === flag1)
	{ flag5Korr = "2nd";}
	if (flag5Korr === "1st" && flag3 === flag1)
	{ flag5Korr = "3rd";}
	if (flag5Korr === "1st" && flag4 === flag1)
	{ flag5Korr = "4th";}

	if (flag5Korr === "2nd" && flag3 === flag2)
	{ flag5Korr = "3rd";}
	if (flag5Korr === "2nd" && flag4 === flag2)
	{ flag5Korr = "4th";}

	if (flag5Korr === "3rd" && flag4 === flag3)
	{ flag5Korr = "4th";}
		

document.images.flagge5.src = "images/" + flag5Korr +".png";
if (flag5Korr.length > 1) {
document.images.flagge5.classList.add("writingFlags_hilfsstander");}	
}  // Ende Flagge 5
	
}  // Ende gesamt





// ************Alle Flaggen und Zeichen löschen ***************

function clean_flags () {
	"use strict";
	document.getElementById("writingTextfield").innerHTML = "";
	for (var i=1; i<=5; i++ ) {
		document.images.namedItem("flagge"+ i).src= "images/empty.png"; 
		document.images.namedItem("flagge"+ i).classList.remove("writingFlags_hilfsstander");
	}
}

// ************Letzte Flaggen und letztes Zeichen löschen ***************

function delete_flag () {
"use strict";

var writingTextfield = document.getElementById("writingTextfield").innerHTML; 
var str = writingTextfield;
var laenge = (writingTextfield.length);
for (var i=1; i<=5; i++ ) {
	if (laenge ===i) {
		document.images.namedItem("flagge"+ i).src= "images/empty.png"; 
		document.images.namedItem("flagge"+ i).classList.remove("writingFlags_hilfsstander");
		}
	}
	str = str.substring(0,str.length-1);
	writingTextfield = str;
	document.getElementById("writingTextfield").innerHTML = writingTextfield;
}


 //Tastatur ein/ausblenden +++++++++++++++
function keyboard_einblenden () {
"use strict";
if 	(document.getElementById('keyboard').style.display =='inline') {
	document.getElementById('keyboard').style.display='none';
	document.getElementById('writingTextfield').style.display='inline';	
	}
else {
	document.getElementById('keyboard').style.display='inline';}	
}

function keyboard_start () {
"use strict";
	document.getElementById('keyboard').style.display='inline';	
}
