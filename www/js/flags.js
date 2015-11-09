// JavaScript Document

function help_anzeigen (){
	'use strict';

    $("#all-flags").hide();
    $("#flaginfo").hide();
    $("#writing").hide();
    $("#reading").hide();
    $("#about-page").hide();
	$("#help-page").show();
	document.getElementById("button_flags").style.opacity = "0.5";
    document.getElementById("button_writing").style.opacity = "0.5";
    document.getElementById("button_reading").style.opacity = "0.5";
    document.getElementById("button_info").style.opacity = "1";
}

function help_Flaggen () {
	'use strict';
	// Carousels ein-/ausblenden
	localStorage.setItem("carousel", 0);
	$("#HelpCarousel0").show();
	$("#HelpCarousel1").hide();
    $("#HelpCarousel2").hide();
	// Carousel starten
	$("#HelpCarousel0").carousel(0);
   	$("#HelpCarousel0").carousel({interval: 1000});
}

function help_Writing () {
	'use strict';
	// Carousels ein-/ausblenden
	localStorage.setItem("carousel", 1);
	$("#HelpCarousel0").hide(); 
	$("#HelpCarousel1").show();
    $("#HelpCarousel2").hide();
	// Carousel starten
	$("#HelpCarousel1").carousel(0);
  	$("#HelpCarousel1").carousel({interval: 1000});
}

function help_Reading () {
	'use strict';
	// Carousels ein-/ausblenden
	localStorage.setItem("carousel", 2);
	$("#HelpCarousel0").hide();
	$("#HelpCarousel1").hide();
    $("#HelpCarousel2").show();
	// Carousel starten
	$("#HelpCarousel2").carousel(0);
  	$("#HelpCarousel2").carousel({interval: 1000});
}

function slide_Restart () {
	'use strict';
	var carouselnum = localStorage.getItem("carousel");
	$("#HelpCarousel"+carouselnum).carousel(	0);
	$("#HelpCarousel"+carouselnum).carousel({interval: 1000});
}

function slide_Quit () {
	'use strict';
	$("#about-page").show();
	$("#help-page").hide();
}

// *************** Systemsprache bestimmen, speichern unter "sprache_system" *******************************************************

function spracheSystem() {
    'use strict';

    var userLang = navigator.language || navigator.userLanguage;
    var userLang_kurz = "";
    if (userLang.indexOf("de") > - 1)
    {
        userLang_kurz = "de";
    } else 
    {
        userLang_kurz = "en";
    }

    //Speichern der Systemsprache   Speicher: +++++++  sprache_system  ++++++++++
    localStorage.setItem("sprache_system", userLang_kurz);
    document.getElementById("sprache_auto").innerHTML = localStorage.getItem("sprache_system");
  
}  // +++++++++  Ende function spracheSystem



// *************** richtigen Button für Sprache auf Aktiv setzen *******************************************************

function buttonActive() {
    //
    'use strict';
    var usersprache = localStorage.getItem("sprache");
    if (usersprache === "en1") 
        {
        document.getElementById("englisch").checked = true;
        } 
    else if (usersprache === "de1") 
        {
        document.getElementById('deutsch').checked = true;
        } 
    else 
        {
        document.getElementById("auto").checked = true;
        localStorage.setItem("sprache", localStorage.getItem("sprache_system"));
        }
    document.getElementById("sprache_aktiv").innerHTML = localStorage.getItem("sprache");
}  // +++++++++  Ende function buttonActive


// *************** Texte abhängig von Sprache setzen *******************************************************
function spracheText() {
    'use strict';
    var usersprache = localStorage.getItem("sprache");
    if (usersprache === "en1") 
        {
		spracheTexte(0);
        } 
    else if (usersprache === "en") 
        {
		spracheTexte(0);
        } 
    else 
        {
		spracheTexte(1);
        } 
} // +++++++++  Ende function spracheText



function spracheTexte(sprache) {
    'use strict';
	
	var Sprachauswahl_Titel = ["Language", "Sprache"];
	var Help_Titel = ["Help", "Hilfe"];
	var help_info = ["Flags", "Flaggen"];
	var help_schreiben = ["Writing", "Schreiben"];
	var help_lesen = ["Reading", "Lesen"];
	
	document.getElementById("Sprachauswahl_Titel").innerHTML = Sprachauswahl_Titel[sprache];
	document.getElementById("Help_Titel").innerHTML = Help_Titel[sprache];
	document.getElementById("help_info").innerHTML = help_info[sprache];
	document.getElementById("help_schreiben").innerHTML = help_schreiben[sprache];
	document.getElementById("help_lesen").innerHTML = help_lesen[sprache];

}

// *************** Buttons drücken, aktive Sprache festlegen *******************************************************

//  ***********  Button auto, speichern unter "sprache"
function button_auto() {
    'use strict';
    localStorage.setItem("sprache", localStorage.getItem("sprache_system"));
    document.getElementById("sprache_speicher").innerHTML = localStorage.getItem("sprache");
    if (localStorage.getItem("sprache") === "en") {
		spracheTexte(0);
    } else {
		spracheTexte(1);
    }
}  // +++++++++  Ende function button_auto

//  ***********  Button deutsch, speichern unter "sprache"
function button_de() {
    'use strict';
    localStorage.setItem("sprache", "de1");
    document.getElementById("sprache_speicher").innerHTML = localStorage.getItem("sprache");
		spracheTexte(1);
} // +++++++++  Ende function button_de


//  ***********  Button englisch, speichern unter "sprache"
function button_en() {
    'use strict';
    localStorage.setItem("sprache", "en1");
    document.getElementById("sprache_speicher").innerHTML = localStorage.getItem("sprache");
	spracheTexte(0);
}  // +++++++++  Ende function button_en


//  *********** Benutzer-Sprachauswahl
function sprache() {
    'use strict';

    if (localStorage.getItem("sprache") === "") 
    {
        if (document.getElementById("deutsch").checked) {
            document.getElementById("sprache_aktiv").innerHTML = "de1";
            localStorage.setItem("sprache", "de1");
			spracheTexte(1);
        	}
        if (document.getElementById("englisch").checked) {
            document.getElementById("sprache_aktiv").innerHTML = "en1";
            localStorage.setItem("sprache", "en1");
			spracheTexte(0);
	        } 
		else {
            localStorage.setItem("sprache", localStorage.getItem("sprache_system"));
            document.getElementById("sprache_aktiv").innerHTML = localStorage.getItem("sprache_system");
        }
    }   //Ende if kein Sprache gespeichert
}  // +++++++++  Ende function sprache




// ***************************** Infos für Flaggen anzeigen ****************************

function insertHtml(flag) {

    'use strict';

    // andere Seitenbereiche ausblenden

    //$("#startpage").hide();
	
    $("#all-flags").hide();
    $("#flaginfo").show();
    $("#writing").hide();
    $("#reading").hide();
    $("#about-page").hide();
	$("#help-page").hide();
	window.scrollTo( 0, 0 );

/*	$("#gala").hide();
*/
/*document.getElementById("button_flags").classList.remove ("reiter_inaktiv");
document.getElementById("button_writing").classList.add ("reiter_inaktiv");
document.getElementById("button_reading").classList.add ("reiter_inaktiv");
document.getElementById("button_info").classList.add ("reiter_inaktiv");
*/

    //Sprache setzen

    sprache();
    var sprache_aktiv = localStorage.getItem("sprache");
    document.getElementById("sprache_aktiv").innerHTML = sprache_aktiv;



    // Button Zurück ausgrauen
    if (flag === "0" || Number (flag) === 0) {
        document.getElementById("back").style.opacity = "0.3";
    } else {
        document.getElementById("back").style.opacity = "1";
    }

    // Button Vor ausgrauen
    if (flag === "40" || flag === 40) {
        document.getElementById("vor").style.opacity = "0.3";
    } else {
        document.getElementById("vor").style.opacity = "1";
    }

// Flaggenbild 
var image = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "Answer",
];


// Titel 

var title = [
    "   A   &nbsp;&nbsp;&nbsp;&nbsp;Alfa    &nbsp;&nbsp;&nbsp;&nbsp;al•fah",
    "   B   &nbsp;&nbsp;&nbsp;&nbsp;Bravo   &nbsp;&nbsp;&nbsp;&nbsp;brah•voh",
    "   C   &nbsp;&nbsp;&nbsp;&nbsp;Charlie &nbsp;&nbsp;&nbsp;&nbsp;char•lee",
    "   D   &nbsp;&nbsp;&nbsp;&nbsp;Delta   &nbsp;&nbsp;&nbsp;&nbsp;dell•tah",
    "   E   &nbsp;&nbsp;&nbsp;&nbsp;Echo    &nbsp;&nbsp;&nbsp;&nbsp;eck•oh",
    "   F   &nbsp;&nbsp;&nbsp;&nbsp;Foxtrot &nbsp;&nbsp;&nbsp;&nbsp;foks•trot",
    "   G   &nbsp;&nbsp;&nbsp;&nbsp;Golf    &nbsp;&nbsp;&nbsp;&nbsp;golf",
    "   H   &nbsp;&nbsp;&nbsp;&nbsp;Hotel   &nbsp;&nbsp;&nbsp;&nbsp;ho•tell",
    "   I   &nbsp;&nbsp;&nbsp;&nbsp;India   &nbsp;&nbsp;&nbsp;&nbsp;in•dee•ah",
    "   J   &nbsp;&nbsp;&nbsp;&nbsp;Juliett &nbsp;&nbsp;&nbsp;&nbsp;jew•lee•ett",
    "   K   &nbsp;&nbsp;&nbsp;&nbsp;Kilo    &nbsp;&nbsp;&nbsp;&nbsp;key•loh",
    "   L   &nbsp;&nbsp;&nbsp;&nbsp;Lima    &nbsp;&nbsp;&nbsp;&nbsp;lee•mah",
    "   M   &nbsp;&nbsp;&nbsp;&nbsp;Mike    &nbsp;&nbsp;&nbsp;&nbsp;mike",
    "   N   &nbsp;&nbsp;&nbsp;&nbsp;November    &nbsp;&nbsp;&nbsp;&nbsp;no•vem•ber",
    "   O   &nbsp;&nbsp;&nbsp;&nbsp;Oscar   &nbsp;&nbsp;&nbsp;&nbsp;oss•cah",
    "   P   &nbsp;&nbsp;&nbsp;&nbsp;Papa    &nbsp;&nbsp;&nbsp;&nbsp;pah•pah",
    "   Q   &nbsp;&nbsp;&nbsp;&nbsp;Quebec  &nbsp;&nbsp;&nbsp;&nbsp;keh•beck",
    "   R   &nbsp;&nbsp;&nbsp;&nbsp;Romeo   &nbsp;&nbsp;&nbsp;&nbsp;row•me•oh",
    "   S   &nbsp;&nbsp;&nbsp;&nbsp;Sierra  &nbsp;&nbsp;&nbsp;&nbsp;see•air•rah",
    "   T   &nbsp;&nbsp;&nbsp;&nbsp;Tango   &nbsp;&nbsp;&nbsp;&nbsp;tang•go",
    "   U   &nbsp;&nbsp;&nbsp;&nbsp;Uniform &nbsp;&nbsp;&nbsp;&nbsp;you•nee•form",
    "   V   &nbsp;&nbsp;&nbsp;&nbsp;Victor  &nbsp;&nbsp;&nbsp;&nbsp;vik•tah",
    "   W   &nbsp;&nbsp;&nbsp;&nbsp;Whiskey &nbsp;&nbsp;&nbsp;&nbsp;wiss•key",
    "   X   &nbsp;&nbsp;&nbsp;&nbsp;X-ray   &nbsp;&nbsp;&nbsp;&nbsp;ecks•ray",
    "   Y   &nbsp;&nbsp;&nbsp;&nbsp;Yankee  &nbsp;&nbsp;&nbsp;&nbsp;yang•key",
    "   Z   &nbsp;&nbsp;&nbsp;&nbsp;Zulu    &nbsp;&nbsp;&nbsp;&nbsp;zoo•loo",
    "   1   &nbsp;&nbsp;&nbsp;&nbsp;Unaone  &nbsp;&nbsp;&nbsp;&nbsp;oo•nah•wun",
    "   2   &nbsp;&nbsp;&nbsp;&nbsp;Bissotwo    &nbsp;&nbsp;&nbsp;&nbsp;bees•soh•too",
    "   3   &nbsp;&nbsp;&nbsp;&nbsp;Terrathree  &nbsp;&nbsp;&nbsp;&nbsp;tay•ray•tree",
    "   4   &nbsp;&nbsp;&nbsp;&nbsp;Kartefour   &nbsp;&nbsp;&nbsp;&nbsp;kar•tay•fower",
    "   5   &nbsp;&nbsp;&nbsp;&nbsp;Pentafive   &nbsp;&nbsp;&nbsp;&nbsp;pan•tah•five",
    "   6   &nbsp;&nbsp;&nbsp;&nbsp;Soxisix &nbsp;&nbsp;&nbsp;&nbsp;sok–see–six",
    "   7   &nbsp;&nbsp;&nbsp;&nbsp;Settseven   &nbsp;&nbsp;&nbsp;&nbsp;say•tay•seven",
    "   8   &nbsp;&nbsp;&nbsp;&nbsp;Oktoeight   &nbsp;&nbsp;&nbsp;&nbsp;ok•toh•ait",
    "   9   &nbsp;&nbsp;&nbsp;&nbsp;Novenine    &nbsp;&nbsp;&nbsp;&nbsp;no•vay•niner",
    "   0   &nbsp;&nbsp;&nbsp;&nbsp;Nadazero    &nbsp;&nbsp;&nbsp;&nbsp;nah•da•zay•roh",
    "   1st &nbsp;&nbsp;&nbsp;&nbsp;1st Substitute",
    "   2nd &nbsp;&nbsp;&nbsp;&nbsp;2nd Substitude",
    "   3rd &nbsp;&nbsp;&nbsp;&nbsp;3rd Substitude",
    "   4th &nbsp;&nbsp;&nbsp;&nbsp;4th Substitude",
    "   Answer",
];

var titleDE = [
    "   A   &nbsp;&nbsp;&nbsp;&nbsp;Alfa    &nbsp;&nbsp;&nbsp;&nbsp;al•fah",
    "   B   &nbsp;&nbsp;&nbsp;&nbsp;Bravo   &nbsp;&nbsp;&nbsp;&nbsp;bra•wo",
    "   C   &nbsp;&nbsp;&nbsp;&nbsp;Charlie &nbsp;&nbsp;&nbsp;&nbsp;tschah•li",
    "   D   &nbsp;&nbsp;&nbsp;&nbsp;Delta   &nbsp;&nbsp;&nbsp;&nbsp;del•tah",
    "   E   &nbsp;&nbsp;&nbsp;&nbsp;Echo    &nbsp;&nbsp;&nbsp;&nbsp;eck•o",
    "   F   &nbsp;&nbsp;&nbsp;&nbsp;Foxtrot &nbsp;&nbsp;&nbsp;&nbsp;foks•trott",
    "   G   &nbsp;&nbsp;&nbsp;&nbsp;Golf    &nbsp;&nbsp;&nbsp;&nbsp;golf",
    "   H   &nbsp;&nbsp;&nbsp;&nbsp;Hotel   &nbsp;&nbsp;&nbsp;&nbsp;ho•tell",
    "   I   &nbsp;&nbsp;&nbsp;&nbsp;India   &nbsp;&nbsp;&nbsp;&nbsp;in•di•ah",
    "   J   &nbsp;&nbsp;&nbsp;&nbsp;Juliet  &nbsp;&nbsp;&nbsp;&nbsp;juh•li•ett",
    "   K   &nbsp;&nbsp;&nbsp;&nbsp;Kilo    &nbsp;&nbsp;&nbsp;&nbsp;ki•lo",
    "   L   &nbsp;&nbsp;&nbsp;&nbsp;Lima    &nbsp;&nbsp;&nbsp;&nbsp;li•mah",
    "   M   &nbsp;&nbsp;&nbsp;&nbsp;Mike    &nbsp;&nbsp;&nbsp;&nbsp;meike",
    "   N   &nbsp;&nbsp;&nbsp;&nbsp;November    &nbsp;&nbsp;&nbsp;&nbsp;no•wemm•ber",
    "   O   &nbsp;&nbsp;&nbsp;&nbsp;Oscar   &nbsp;&nbsp;&nbsp;&nbsp;oss•kar",
    "   P   &nbsp;&nbsp;&nbsp;&nbsp;Papa    &nbsp;&nbsp;&nbsp;&nbsp;pa•pah",
    "   Q   &nbsp;&nbsp;&nbsp;&nbsp;Quebec  &nbsp;&nbsp;&nbsp;&nbsp;ki•beck",
    "   R   &nbsp;&nbsp;&nbsp;&nbsp;Romeo   &nbsp;&nbsp;&nbsp;&nbsp;ro•mio",
    "   S   &nbsp;&nbsp;&nbsp;&nbsp;Sierra  &nbsp;&nbsp;&nbsp;&nbsp;ssi•er•rah",
    "   T   &nbsp;&nbsp;&nbsp;&nbsp;Tango   &nbsp;&nbsp;&nbsp;&nbsp;tang•go",
    "   U   &nbsp;&nbsp;&nbsp;&nbsp;Uniform &nbsp;&nbsp;&nbsp;&nbsp;ju•ni•form",
    "   V   &nbsp;&nbsp;&nbsp;&nbsp;Victor  &nbsp;&nbsp;&nbsp;&nbsp;wick•tar",
    "   W   &nbsp;&nbsp;&nbsp;&nbsp;Whiskey &nbsp;&nbsp;&nbsp;&nbsp;wiss•ki",
    "   X   &nbsp;&nbsp;&nbsp;&nbsp;X-ray   &nbsp;&nbsp;&nbsp;&nbsp;ex•reh",
    "   Y   &nbsp;&nbsp;&nbsp;&nbsp;Yankee  &nbsp;&nbsp;&nbsp;&nbsp;jeng•ki",
    "   Z   &nbsp;&nbsp;&nbsp;&nbsp;Zulu    &nbsp;&nbsp;&nbsp;&nbsp;suh•luh",
    "   1   &nbsp;&nbsp;&nbsp;&nbsp;Unaone  &nbsp;&nbsp;&nbsp;&nbsp;uh•nah•wann",
    "   2   &nbsp;&nbsp;&nbsp;&nbsp;Bissotwo    &nbsp;&nbsp;&nbsp;&nbsp;bis•so•tuh",
    "   3   &nbsp;&nbsp;&nbsp;&nbsp;Terrathree  &nbsp;&nbsp;&nbsp;&nbsp;ter•ra•trih",
    "   4   &nbsp;&nbsp;&nbsp;&nbsp;Kartefour   &nbsp;&nbsp;&nbsp;&nbsp;kar•te•fauer",
    "   5   &nbsp;&nbsp;&nbsp;&nbsp;Pentafive   &nbsp;&nbsp;&nbsp;&nbsp;pann•ta•faif",
    "   6   &nbsp;&nbsp;&nbsp;&nbsp;Soxisix &nbsp;&nbsp;&nbsp;&nbsp;ssock•ssi•ssix",
    "   7   &nbsp;&nbsp;&nbsp;&nbsp;Settseven   &nbsp;&nbsp;&nbsp;&nbsp;sset•teh•ssäwn",
    "   8   &nbsp;&nbsp;&nbsp;&nbsp;Oktoeight   &nbsp;&nbsp;&nbsp;&nbsp;ock•to•äit",
    "   9   &nbsp;&nbsp;&nbsp;&nbsp;Novenine    &nbsp;&nbsp;&nbsp;&nbsp;no•weh•nainer",
    "   0   &nbsp;&nbsp;&nbsp;&nbsp;Nadazero    &nbsp;&nbsp;&nbsp;&nbsp;nah•dah•seh•ro",
    "   1st &nbsp;&nbsp;&nbsp;&nbsp;1. Hilfsstander",
    "   2nd &nbsp;&nbsp;&nbsp;&nbsp;2. Hilfsstander",
    "   3rd &nbsp;&nbsp;&nbsp;&nbsp;3. Hilfsstander",
    "   4th &nbsp;&nbsp;&nbsp;&nbsp;4. Hilfsstander",
    "   Answer",
];



// Flaggentext

var flaginfoText = [ 
    "<ul><li>I have a diver down; keep well clear at slow speed.</li><li>I am undergoing a speed trial.</li><li> With three numerals:<br>azimuth or bearing.<br><br><object data=\"images/A.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><br><span>(Azimuth 120 degrees)</span></li></ul><hr><strong>AC</strong><object data=\"images/A.png\"></object><object data=\"images/C.png\"></object><br>I am abandoning my vessel.<br><hr><strong>AN</strong><object data=\"images/A.png\"></object><object data=\"images/N.png\"></object><br>I need a doctor.<br><hr><strong>AN1</strong><object data=\"images/A.png\"></object><object data=\"images/N.png\"></object><object data=\"images/1.png\"></object><br>I need a doctor; I have severe burns.<br><hr><strong> AQ </strong><object data=\"images/A.png\"></object><object data=\"images/Q.png\"></object><br> I have injured/sick person to be taken off urgently. <br><br><br><br>",
    "<ul><li>I am taking in, or discharging, or carrying dangerous goods.</li></ul><hr><strong>BR</strong><object data=\"images/B.png\"></object><object data=\"images/R.png\"></object><br>I require a helicopter.<br><br><br><br>",
    "<ul><li>Affirmative.</li><li> With three numerals:<br>course in degrees magnetic.<br><br><object data=\"images/C.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><br><span>(Course 120 degrees)</span></li></ul><hr><strong>CB</strong><object data=\"images/C.png\"></object><object data=\"images/B.png\"></object><br>I require immediate assistance.<br><hr><strong> CG </strong><object data=\"images/C.png\"></object><object data=\"images/G.png\"></object><br> Stand by to assist me. <br><hr><strong> CV </strong><object data=\"images/C.png\"></object><object data=\"images/V.png\"></object><br> I am unable to give assistance. <br><br><br><br>",
    "<ul><li>Keep clear of me; I am maneuvering with difficulty.</li><li> With two, four, or six numerals:<br>date. (The first two numerals indicate the day of the month, the following two the month of the year and the last two the year.)<br><br><object data=\"images/D.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><br><span>(The 12th this month)</span><br><br><object data=\"images/D.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><object data=\"images/4.png\"></object><br><span>(The 12th of April this year)</span></li><br><br><br></ul>",
    "<ul><li>I am altering my course to starboard.</li></ul><hr><strong>EF</strong><object data=\"images/E.png\"></object><object data=\"images/F.png\"></object><br> MAYDAY has been canceled.<br><hr><strong>EL</strong><object data=\"images/E.png\"></object><object data=\"images/L.png\"></object><br>Repeat the distress position<br><hr><strong>EL1</strong><object data=\"images/E.png\"></object><object data=\"images/L.png\"></object><object data=\"images/1.png\"></object><br>What is the position of vessel in distress?<br><br><br><br>",
    "<ul><li>I am disabled; communicate with me.</li><li> On aircraft carriers: <br>Warning; flight operations underway.</li></ul><hr><strong>FA</strong><object data=\"images/F.png\"></object><object data=\"images/A.png\"></object><br> Will you give me my position?<br><br><br><br>",
    "<ul><li>I require a pilot.</li><li> On Fishing Vessels:<br> I am hauling nets.</li><li> With four or five numerals:<br>longitude.<br><br><object data=\"images/G.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/6.png\"></object><object data=\"images/4.png\"></object><object data=\"images/5.png\"></object><br><span>(Longitude 16 degrees 45 minutes)</span></li></ul><hr><strong>GM</strong><object data=\"images/G.png\"></object><object data=\"images/M.png\"></object><br>I cannot save my vessel.<br><hr><strong>GN</strong><object data=\"images/G.png\"></object><object data=\"images/N.png\"></object><br>You should take off persons.<br><br><hr><strong> GQ </strong><object data=\"images/G.png\"></object><object data=\"images/Q.png\"></object><br> I cannot proceed to the rescue owing to weather. You should do all you can. <br><hr><strong> GV </strong><object data=\"images/G.png\"></object><object data=\"images/V.png\"></object><br> You should endeavor to send me a line. <br><hr><strong>GW</strong><object data=\"images/G.png\"></object><object data=\"images/W.png\"></object><br> Man overboard. Please take action to pick him up.<br><br><br><br>",
    "<ul><li>I have a pilot on board.</li><br><br><br></ul>",
    "<ul><li>I am altering my course to port.</li></ul><hr><strong>IT</strong><object data=\"images/I.png\"></object><object data=\"images/T.png\"></object><br>I am on fire.<br><br><br><br>",
    "<ul><li>I am on fire and have dangerous cargo on board:<br> keep well clear of me.</li><li> I am leaking dangerous cargo.</li></ul><hr><strong>JL</strong><object data=\"images/J.png\"></object><object data=\"images/L.png\"></object><br> You are running the risk of going aground.<br><hr><strong> JW </strong><object data=\"images/J.png\"></object><object data=\"images/W.png\"></object><br> I have sprung a leak. <br><br><br><br>",
    "<ul><li>I wish to communicate with you.</li><li> With one numeral:<br> I wish to communicate with you by <br>1 - Morse signalling by hand-flags or arms; <br>2 - Loud hailer (megaphone); <br>3 - Morse signalling lamp; <br>4 - Sound signals.<br><br><object data=\"images/K.png\"></object></object><object data=\"images/3.png\"></object><br><span>(I wish to communicate with you by morse signalling lamp.)</span></li><br><br><br></ul>",
    "<ul><li>You should stop your vessel instantly.</li><li> In harbour:<br> The ship is quarantined.</li><li> With four numerals:<br> latitude<br><br><object data=\"images/L.png\"></object></object><object data=\"images/5.png\"></object><object data=\"images/4.png\"></object><object data=\"images/1.png\"></object><object data=\"images/0.png\"></object><br><span>(Latitude 54 degrees 10 minutes)<s/pan></li><br><br><br></ul>",
    "<ul><li>My vessel is stopped and making no way through the water.</li></ul><hr><strong>MAA</strong><object data=\"images/M.png\"></object><object data=\"images/A.png\"></object><object data=\"images/2nd.png\"></object><br>I request urgent medical advice.<br><hr><strong>MAB</strong><object data=\"images/M.png\"></object><object data=\"images/A.png\"></object><object data=\"images/B.png\"></object><br>I request you to make rendezvous in position indicated.<br><br><br><br>",
    "<ul><li>Negative.</li><li>Want to pass the bridge.</li></ul><hr><strong>NC </strong><object data=\"images/N.png\"></object><object data=\"images/C.png\"></object><br>I am in distress and require immediate assistance.<br><br><br><br>",
    "<ul><li>Man overboard.</li><br><br><br></ul>",
    "<ul><li>At sea:<br> Your lights are out or burning badly.</li><li>On Fishing Vessels:<br> My nets have come fast upon an obstruction.</li><li> In harbour:<br> All persons should report on board as the vessel is about to proceed to sea.</li></ul><hr><strong>PD</strong><object data=\"images/P.png\"></object><object data=\"images/D.png\"></object><br>Your navigation lights are not visible.<br><br><br><br>",
    "<ul><li>My vessel is 'healthy' and I request free pratique.</li></ul><hr><strong> QN </strong><object data=\"images/Q.png\"></object><object data=\"images/N.png\"></object><br> You should come alongside my starboard side. <br><hr><strong> QN1 </strong><object data=\"images/Q.png\"></object><object data=\"images/N.png\"></object><object data=\"images/1.png\"></object><br> You should come alongside my port side. <br><hr><strong>QQ</strong><object data=\"images/Q.png\"></object><object data=\"images/1st.png\"></object><br>I require health clearance.<br><hr><strong>QU</strong><object data=\"images/Q.png\"></object><object data=\"images/U.png\"></object><br>Anchoring is prohibited.<br><br><br><br>",
    "<ul><li>The way is off my ship.</li><li> With one or more numerals:<br>distance (range) in nautical miles.<br><br><object data=\"images/R.png\"></object></object><object data=\"images/5.png\"></object><br><span>(Distance 5 miles)</span></li><br><br><br></ul>",
    "<ul><li>I am operating astern propulsion.</li><li> With one or more numerals:<br>speed in knots.<br><br><object data=\"images/S.png\"></object></object><object data=\"images/9.png\"></object><br><span>(Speed 9 knots)</span></li><br><br><br></ul>",
    "<ul><li>Do not pass ahead of me.</li><li>On fishing vessel:<br> Keep clear of me; I am engaged in pair trawling.</li><li> With four numerals:<br>local time. (The first 2 numerals denote hours; the last 2 denote minutes.)<br><br><object data=\"images/T.png\"></object></object><object data=\"images/2.png\"></object><object data=\"images/1.png\"></object><object data=\"images/3.png\"></object><object data=\"images/0.png\"></object><br><span>(Local time 21:30 h)</span></li><br><br><br></ul>",
    "<ul><li>You are running into danger.</li></ul><hr><strong>UM</strong><object data=\"images/U.png\"></object><object data=\"images/M.png\"></object><br> The Harbour is closed to traffic.<br><hr><strong> UP </strong><object data=\"images/U.png\"></object><object data=\"images/P.png\"></object><br> Permission to enter Harbour is urgently requested. I have an emergency.<br><hr><strong> UW </strong><object data=\"images/U.png\"></object><object data=\"images/W.png\"></object><br> Good Luck.<br><br><br><br>",
    "<ul><li>I require assistance.</li><li> With one or more numerals:<br>speed in kilometres per hour.<br><br><object data=\"images/V.png\"></object></object><object data=\"images/2.png\"></object><object data=\"images/5.png\"></object><br><span>(Speed 25 kilometres per hour)</span></li><br><br><br></ul>",
    "<ul><li>I require medical assistance.</li><br><br><br></ul>",
    "<ul><li>Stop carrying out your intentions and watch for my signals.</li><br><br><br></ul>",
    "<ul><li>I am dragging my anchor.</li><br><br><br></ul>",
    "<ul><li>I require a tug.</li><li> On fishing vessels:<br> I am shooting nets.</li><li> With one or more numerals:<br>time (UTC). (The first 2 numerals denote hours; the last 2 denote minutes.)<br><br><object data=\"images/Z.png\"></object></object><object data=\"images/0.png\"></object></object><object data=\"images/7.png\"></object></object><object data=\"images/1.png\"></object></object><object data=\"images/5.png\"></object><br><span>(Time 07:15 UTC)</span></li></ul><hr><strong>ZL</strong><object data=\"images/Z.png\"></object><object data=\"images/L.png\"></object><br>Your signal has been received but not understood.<br><br><br><br>",   
	"", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "Code and answering pennant", 
];

var flaginfoTextDE = [
     "<ul><li>Ich habe Taucher unten; halten Sie sich bei langsamer Fahrt gut frei von mir.</li><li>Ich mache einen Geschwindigkeitstest.</li><li> Mit drei Ziffernwimpeln:<br> Azimut oder Peilung.<br><br><object data=\"images/A.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><br><span>(Azimut 120 Grad)</span></li></ul><hr><strong>   AC  </strong><object data=\"images/A.png\"></object><object data=\"images/C.png\"></object><br>Ich gebe mein Schiff auf.<br><hr><strong>AN</strong><object data=\"images/A.png\"></object><object data=\"images/N.png\"></object><br>Ich benötige einen Arzt.<br><hr><strong>AN1    </strong><object data=\"images/A.png\"></object><object data=\"images/N.png\"></object><object data=\"images/1.png\"></object><br>Ich benötige einen Arzt; I have severe burns.<br><hr><strong> AQ </strong><object data=\"images/A.png\"></object><object data=\"images/Q.png\"></object><br> Ich habe einen Verletzten, der übernommen werden muss. <br><br><br><br>",
     "<ul><li>Ich lade/lösche/befördere gefährliche Güter.</li></ul><hr><strong>    BR  </strong><object data=\"images/B.png\"></object><object data=\"images/R.png\"></object><br>Ich benötige einen Helicopter.<br><br><br><br>",
     "<ul><li>Ja.</li><li> Mit drei Ziffernwimpeln:<br> Kompasskurs in Grad.<br><br><object data=\"images/C.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><br><span>(Kompasskurs 120 Grad)</span></li></ul><hr><strong> CB  </strong><object data=\"images/C.png\"></object><object data=\"images/B.png\"></object><br>Ich brauche sofortige Hilfe.<br><hr><strong> CG </strong><object data=\"images/C.png\"></object><object data=\"images/G.png\"></object><br> Halten Sie sich bereit, mir zu helfen. <br><hr><strong> CV </strong><object data=\"images/C.png\"></object><object data=\"images/V.png\"></object><br> Ich bin nicht in der Lage, Hilfe zu leisten. <br><br><br><br>",
     "<ul><li>Halten Sie sich frei von mir; ich manövriere unter Schwierigkeiten.</li><li> Mit zwei, vier oder fünf Ziffernwimpeln:<br> Datum. (Die beiden ersten Ziffernwimpel geben den Tag des Monats an, die beiden nächsten den Monat und die beiden letzten das Jahr.)<br><br><object data=\"images/D.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><br><span>(Der 12. dieses Monats)</span><br><br><object data=\"images/D.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/2.png\"></object><object data=\"images/0.png\"></object><object data=\"images/4.png\"></object><br><span>(Der 12. April in diesem Jahr)</span></li><br><br><br></ul>",
     "<ul><li>Ich ändere meinen Kurs nach Steuerbord.</li></ul><hr><strong> EF  </strong><object data=\"images/E.png\"></object><object data=\"images/F.png\"></object><br>  MAYDAY wurde abgebrochen.<br><hr><strong>  EL  </strong><object data=\"images/E.png\"></object><object data=\"images/L.png\"></object><br> Wiederholen Sie die Notposition<br><hr><strong> EL1 </strong><object data=\"images/E.png\"></object><object data=\"images/L.png\"></object><object data=\"images/1.png\"></object><br>  An welcher Position befindet sich das Schiff in Not?<br><br><br><br>",
     "<ul><li>Ich bin manövrierunfähig; treten Sie mit mir in Verbindung.</li><li> Auf Flugzeugträgern:<br> Führe Flugbetrieb durch.</li></ul><hr><strong>FA</strong><object data=\"images/F.png\"></object><object data=\"images/A.png\"></object><br> Nennen Sie mir Ihre Position?<br><br><br><br>",
     "<ul><li>Ich benötige einen Lotsen.</li><li> Bei Fischereischiffen:<br> Ich schleppe Netze.</li><li> Mit vier Ziffernwimpeln:<br> geographische Länge.<br><br><object data=\"images/G.png\"></object></object><object data=\"images/1.png\"></object><object data=\"images/6.png\"></object><object data=\"images/4.png\"></object><object data=\"images/5.png\"></object><br><span>(Geografische Länge 16 Grad 45 Minuten)</span></li></ul><hr><strong>GM</strong><object data=\"images/G.png\"></object><object data=\"images/M.png\"></object><br>Ich kann mein Schiff nicht retten.<br><hr><strong>GN</strong><object data=\"images/G.png\"></object><object data=\"images/N.png\"></object><br>Übernehmen Sie die Menschen.<br><hr><strong> GQ </strong><object data=\"images/G.png\"></object><object data=\"images/Q.png\"></object><br> Ich kann wegen des Wetters nicht zu Hilfe kommen; tun Sie was sie können. <br><hr><strong> GV </strong><object data=\"images/G.png\"></object><object data=\"images/V.png\"></object><br> Versuchen Sie mir eine Leine zu geben. <br><br><hr><strong>GW</strong><object data=\"images/G.png\"></object><object data=\"images/W.png\"></object><br> Mann über Bord, unternehmen Sie etwas, um ihn aufzunehmen.<br><br><br><br>",
     "<ul><li>Ich habe einen Lotsen an Bord.</li><br><br><br></ul>",
     "<ul><li>Ich ändere meinen Kurs nach Backbord.</li></ul><hr><strong>IT</strong><object data=\"images/I.png\"></object><object data=\"images/T.png\"></object><br>Ich brenne.<br><br><br><br>",
     "<ul><li>Ich habe Feuer im Schiff und gefährliche Ladung an Bord; halten Sie gut frei von mir.</li><li> Gefährliche Ladung tritt aus.</li></ul><hr><strong>JL</strong><object data=\"images/J.png\"></object><object data=\"images/L.png\"></object><br> Sie laufen Gefahr, auf Grund zu laufen.<br><hr><strong> JW </strong><object data=\"images/J.png\"></object><object data=\"images/W.png\"></object><br> Ich habe ein Leck. <br><br><br><br>",
     "<ul><li>Ich möchte mit Ihnen Verbindung aufnehmen.</li><li> Mit einem Ziffernwimpel:<br> Ich möchte mit Ihnen kommunizieren über <br>1 - Flaggensignale (Semaphoren); <br>2 - Megaphon oder Lautsprecher; <br>3 - Morse-Zeichen mit Lampe; <br>4 - Schallsignale.<br><br><object data=\"images/K.png\"></object></object><object data=\"images/3.png\"></object><br><span>(Ich möchte mit Ihnen über Morse-Zeichen mit Lampe Verbindung aufnehmen.)</span></li><br><br><br></ul>",
     "<ul><li>Bringen Sie Ihr Fahrzeug sofort zum Stehen.</li><li> Im Hafen:<br> Schiff ist unter Quarantäne.</li><li> Mit vier Ziffernwimpeln:<br> geografische Breite<br><br><object data=\"images/L.png\"></object></object><object data=\"images/5.png\"></object><object data=\"images/4.png\"></object><object data=\"images/1.png\"></object><object data=\"images/0.png\"></object><br><span>(Geografische Breite 54 Grad 10 Minuten)</span></li><br><br><br></ul>",
     "<ul><li>Meine Maschine ist gestoppt und ich mache keine Fahrt durchs Wasser.</li></ul><hr><strong>MAA</strong><object data=\"images/M.png\"></object><object data=\"images/A.png\"></object><object data=\"images/2nd.png\"></object><br>Ich bitte dringend um ärztlichen Rat.<br><hr><strong>MAB</strong><object data=\"images/M.png\"></object><object data=\"images/A.png\"></object><object data=\"images/B.png\"></object><br>Ich ersuche Sie um ein Rendezvous an der angegebenen Position.<br><br><br><br>",
     "<ul><li>Nein.</li><li>Ich möchte die Brücke passieren.</li></ul><hr><strong>NC </strong><object data=\"images/N.png\"></object><object data=\"images/C.png\"></object><br>Ich bin in Not und benötige sofortige Hilfe.<br><br><br><br>",
     "<ul><li>Mann (Mensch) über Bord.</li><br><br><br></ul>",
     "<ul><li>Auf See:<br> Ihre Lichter sind aus oder leuchten schlecht.</li><li>Bei Fischereischiffen:<br> Mein Netz hat sich an einem Hindernis verhakt.</li><li> Im Hafen:<br> Alle Mann an Bord, da Fahrzeug auslaufen will.</li></ul><hr><strong>PD</strong><object data=\"images/P.png\"></object><object data=\"images/D.png\"></object><br>Ihre Navigationslichter sind nicht sichtbar.<br><br><br><br></ul>",
     "<ul><li>An Bord ist alles gesund und ich bitte um freie Verkehrerlaubnis.</li></ul><hr><strong> QN </strong><object data=\"images/Q.png\"></object><object data=\"images/N.png\"></object><br> Kommen Sie Steuerbord längsseits. <br><hr><strong> QN1 </strong><object data=\"images/Q.png\"></object><object data=\"images/N.png\"></object><object data=\"images/1.png\"></object><br> Kommen Sie Backbord längsseits. <br><hr><strong>QQ</strong><object data=\"images/Q.png\"></object><object data=\"images/1st.png\"></object><br>I require health clearance.<br><hr><strong>QU</strong><object data=\"images/Q.png\"></object><object data=\"images/U.png\"></object><br>Ankern verboten.<br><br><br><br>",
     "<ul><li>Kurs ist klar.</li><li> Mit einem oder mehr Ziffernwimpeln:<br> Entfernung in nautischen Meilen.<br><br><object data=\"images/R.png\"></object></object><object data=\"images/5.png\"></object><br><span>(Entfernung 5 nautische Meilen)</span></li><br><br><br></ul>",
     "<ul><li>Meine Maschine geht rückwärts.</li><li> Mit einem oder mehr Ziffernwimpeln:<br> Geschwindigkeit in Knoten.<br><br><object data=\"images/S.png\"></object></object><object data=\"images/9.png\"></object><br><span>(Geschwindigkeit 9 Knoten)</span></li><br><br><br></ul>",
     "<ul><li>Passieren Sie nicht vor mir.</li><li>Bei Fischereischiffen:<br> Halten Sie frei von mir; ich bin beim Gespannfischen.</li><li> Mit vier Ziffernwimpeln:<br> Ortszeit. (Die beiden ersten Stelle bezeichnen die Stunden, die beiden letzten die Minuten.)<br><br><object data=\"images/T.png\"></object></object><object data=\"images/2.png\"></object><object data=\"images/1.png\"></object><object data=\"images/3.png\"></object><object data=\"images/0.png\"></object><br><span>(Ortszeit 21:30 h)</span></li><br><br><br></ul>",
     "<ul><li>Sie begeben sich in Gefahr.</li></ul><hr><strong>UM</strong><object data=\"images/U.png\"></object><object data=\"images/M.png\"></object><br> Der Hafen ist für den Verkehr geschlossen.<br><hr><strong> UP </strong><object data=\"images/U.png\"></object><object data=\"images/P.png\"></object><br> Es wird dringend um Erlaubnis zum Einlaufen in den Hafen gebeten. Ich habe einen Notfall.<br><hr><strong> UW </strong><object data=\"images/U.png\"></object><object data=\"images/W.png\"></object><br> Gute Reise.<br><br><br><br>",
     "<ul><li>Ich benötige Hilfe.</li><li> Mit einem oder mehr Ziffernwimpeln:<br> Geschwindigkeit in Kilometer pro Stunde.<br><br><object data=\"images/V.png\"></object></object><object data=\"images/2.png\"></object><object data=\"images/5.png\"></object><br><span>(Geschwindigkeit 25 Stundenkilometer)</span></li><br><br><br></ul>",
     "<ul><li>Ich benötige ärztliche Hilfe.</li><br><br><br></ul>",
     "<ul><li>Unterbrechen Sie Ihr gegenwärtiges Vorhaben (Manöver) und achten Sie auf meine Signale.</li><br><br><br></ul>",
     "<ul><li>Ich treibe vor Anker.</li><br><br><br></ul>",
     "<ul><li>Ich benötige einen Schlepper.</li><li> Bei Fischereifahrzeugen:<br> Ich bringe Netze aus.</li><li> Mit einem oder mehr Ziffernwimpeln:<br> Uhrzeit (UTC). (Die beiden ersten Stelle bezeichnen die Stunden, die beiden letzten die Minuten.)<br><br><object data=\"images/Z.png\"></object></object><object data=\"images/0.png\"></object></object><object data=\"images/7.png\"></object></object><object data=\"images/1.png\"></object></object><object data=\"images/5.png\"></object><br><span>(Uhrzeit 07:15 UTC)</span></li></ul><hr><strong>ZL</strong><object data=\"images/Z.png\"></object><object data=\"images/L.png\"></object><br>Ihr Signal wurde empfangen aber nicht verstanden. <br><br><br><br>",
	"", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "Signalbuch und Antwortwimpel", 
];



    
// ++++++++Inhalte in Seite eintragen
    
// Bild und Morsecode - unabhängig von Sprache
    document.getElementById("flaginfoImage").innerHTML = "<object data=\"images/" + image[flag] + ".png\"></object>";
//    document.getElementById("morse").innerHTML = morsecode[flag];
	document.getElementById("flaginfoMorse").innerHTML = "<object type=\"text/html\" width=\"200\" height=\"80\" data-dw-widget=\"Edge\" data=\"edgeanimate_assets/" + image[flag] + ".html\"></object>";
   
   
//   <object id="EdgeID36" type="text/html" width="140" height="80" data-dw-widget="Edge" data="edgeanimate_assets/A/Assets/A.html">
//</object>


// deutsch manuell gewählt oder Systemsprache deutsch
    if (sprache_aktiv === "de1" || sprache_aktiv === "de") 
        {document.getElementById("flaginfoTitle").innerHTML = titleDE[flag];
        document.getElementById("flaginfoText").innerHTML = flaginfoTextDE[flag];
        }
    
// andere Systemsprache oder englisch gewählt
    else 
        {document.getElementById("flaginfoTitle").innerHTML = title[flag];
        document.getElementById("flaginfoText").innerHTML = flaginfoText[flag];
        } 
    
// Flagggennummer speichern auf Seite
    document.getElementById("flagnummer").innerHTML = flag;
   
// Kein Strich wenn kein Morsecode
    if 	(document.getElementById("flaginfoMorse").innerHTML=== "" ||document.getElementById("flaginfoText").innerHTML=== "" || flag === "40" )
        {	$("#hr1").hide();	
        }
    else 
        {$("#hr1").show();
        }
}  // ++++++  Ende function insertHTML  ++++++++++++++++



// *******************************  Blättern-Funktionen  *********************************

//nächste Flagge anzeigen
function nextFlag() {
    'use strict';
    var flag = document.getElementById("flagnummer").innerHTML;
    if (flag < 40) 
        {flag = (Number(flag) +1);
        document.getElementById("flagnummer").innerHTML = flag;insertHtml(flag);
        }
}  // ++++++  Ende function nextFlag 

//vorherige Flagge anzeigen
function previousFlag() {
    'use strict';
    var flag = document.getElementById("flagnummer").innerHTML;
    if (Number(flag) > 0) 
        { flag = (Number(flag) -1);document.getElementById("flagnummer").innerHTML = flag;
        insertHtml(flag);	
        }
}  // ++++++  Ende function previousFlag

/*// swipe nach links/rechts
function activateSwipe () {
    'use strict';
$(".flaginfo").on("swipeleft", function()
{	nextFlag(); 
});

$(".flaginfo").on("swiperight", function()
{	previousFlag(); 
});

    //nach oben und unten normales Verhalten
$(".flaginfo").on("swipeup", function()
{	$.detectSwipe.preventDefault = false;
});

$(".flaginfo").on("swipedown", function()
{	$.detectSwipe.preventDefault= false;
});

}
*/
function activateSwipe () {
var myElement = document.getElementById('flaginfo');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("swipeleft", function(ev) {
    nextFlag();
	window.scrollTo( 0, 0 );
});

mc.on("swiperight", function(ev) {
    previousFlag();
	window.scrollTo( 0, 0 );
});
}