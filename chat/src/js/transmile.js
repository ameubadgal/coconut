var tabsmil = new Array("rigole", "triste", "clin", "eclat", "etonne", "confus", "rougi", "dubitatif", "fatigue", "perplexe", "langue", "coeur", "amour", "cry", "classe", "rose", "enerve", "up", "down", "kiss", "angry", "ange", "diable", "cross", "ill", "na", "oh", "mal", "emu", "shit", "fuck", "noword", "drool", "aoh", "diablo", "siffle", "songe", "content", "enbiais", "circon", "victoire", "mouais", "aa", "clope", "touche", "baffe", "sleep", "annif", "decu", "mmh", "quoi", "argh", "euh", "ouf", "oups", "secret", "brise", "bisou", "dubit2", "eau", "serein", "complot", "emu3");
var tabms = new Array(":)", ":(", ";)", ":d", ":-o", ":s", ":$", "*-)", "-)", "^o)", ":p", "(l)", "(v)", ":'(", "(h)", "(f)", ":@", "(y)", "(n)", "(k)", "gr$", "(a)", "(6)", "(yn)", "+o(", "na$", "oh$", "tr$", "(e)", "sh$", "fu$", "nw$", "ba$", "ao$", "db$", "si$", "oo$", "co$", "bi$", "cc$", "ye$", "mo$", "aa$", "ci$", "uu$", "ff$", "zz$", "gt$", "ah$", "mm$", "?$", "xx$", "eu$", "ouf$", "oups$", "ss$", "(u)", "ki$", "ee$", "yy$", "se$", "gg$", "ww$");
var oldia = "Sat, 01-Jan-2000 00:00:00 GMT";

function transformix(sx, tyb, syx, stt) {
	if (transformix.arguments.length == 3)
		stt = 0;
	var numerox = 0;
	var shifto = 0;
	var s1 = sx;
	var s2 = "";
	var toolong = 0;
	unefoi = 0;
	s1 = s1.replace('https://', '');
	var mmj = s1.indexOf('www');
	if (stt > 5)
		toolong = -90;

	for (i = 0; i < s1.length; i++) {
		numerox = s1.charCodeAt(i);

		if (tyb != -23)
			toolong++;



		if ((numerox == 95) || (numerox == 32) || (tyb == 117)) {
			toolong = 0;
		}



		if (toolong < 27) {
			if (shifto == 0) {
				if (numerox != 42) {
					if ((numerox < 43) || ((numerox > 58) && (numerox < 64)) || ((numerox > 90) && (numerox < 97)) || (numerox > 122)) {
						if (numerox == 59) {
							var resiz = ";";
							try {
								var numoz = parseInt(s1.substring(i + 1, i + 3), 10);
								if ((numoz < tabsmil.length) && (numoz > -1)) {
									resiz = milor(numoz, syx);
									i = i + 2;
								} else if (syx > 5) {
									if (numoz == 99) {
										if (unefoi == 0) {
											i = i + 2;
											resiz = "<img src=http://coco.fr/chat/emot/fire.png >";
										}
										unefoi = 1;
									}
								}
							} catch (ty) {}
							s2 += resiz;
						} else
							s2 += demele(numerox, tyb);
					} else
						s2 += s1.charAt(i);

				} else
					shifto = 1;

			} else {
				s2 += shiftu(numerox);
				shifto = 0;
			}
		}
	}


	if (tyb != 117)
		s2 = transmiley(s2);

	if (stt > 5) {
		var eef = s2.indexOf("www.coco.fr/");
		if (eef > -1)
			mmj = eef;
		eef = s2.indexOf("www.zix.net/");
		if (eef > -1)
			mmj = eef;
	}


	if (mmj > -1) {
		if (stt < 6)
			s2 = s2.replace('www', 't');
		else {
			var nng = s2.indexOf(' ', mmj);
			if (nng == -1)
				nng = s2.length;
			var ksl = s2.substring(mmj, nng);

			//var hjm=ksl.indexOf("www.coco.fr/");
			if (((mmj > -1) && (mmj < 8)) || (stt == 9))
				s2 = s2.substring(0, mmj) + "<a href='https://" + ksl + "' style='cursor:pointer' target=_blank>" + ksl + "</a>" + s2.substring(nng);
			else
				s2 = "oh-no";
		}
	} else {


		var hwo = s1.indexOf("!");
		if (hwo > -1) {
			var tr8 = s2.substring(hwo + 1, hwo + 2);
			var tr9 = s1.substring(hwo + 2);

			for (i = 0; i < tr9.length; i++) {
				numerox = tr9.charCodeAt(i);
				if ((numerox < 45) || ((numerox > 57) && (numerox < 65)) || ((numerox > 90) && (numerox < 95)) || (numerox > 122) || (numerox == 96))
					tr8 = "FAUX";
			}
			//tr9=transformix(tr9,117);
			if (tr9.indexOf("*") == -1) {
				tt3 = tr9;
				if (tr8 == "1") {
					//randopub=(randopub+1)%2;


					var sqm = "" + randopub;

					sqm = "0";

					if ((tyb > 199) && (tyb < 999)) {
						sqm = "1";
					}


					//if(mystat==9)
					sqm = "7";

					if (contor > 42)
						sqm = "3";
					diraa = "pub";
					if (standalone)
						diraa = "chat/pub";




					s2 = "<img " + hover1 + "=top.miniev('" + tr9 + "'," + delayo + "); " + out1 + "=top.miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;window.open('" + base + diraa + "/photo" + sqm + ".htm?" + huho + tr9 + "','Quizz" + randum(100) + "','" + loxx + ",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); " + manu + " src='http://coco.fr/chat/emot/photo.gif'>";
				} else if (tr8 == "4") {
					if (stt > 5)
						s2 = "<img onmouseover=top.miniev('" + tr9 + "',3); onmouseout=top.miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;window.open('" + base + "pub/photo0.htm?" + tr9 + "','Quizz" + randum(100) + "','" + loxx + ",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); " + manu + " src='http://coco.fr/chat/emot/photu.gif'>";
				} else if (tr8 == "2")
					s2 = "<img onclick=window.open('" + secserv + "/playa.html?" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=http://coco.fr/chat/emot/mp3.gif>";
				else if (tr8 == "3") {
					s2 = "err-bmp";
					if (tyb > 1000)
						s2 = "<div onclick=window.open('" + urlphoto + "photo/" + tr9 + "'); " + roug + " style='background-color:ffffff;'>" + tr9 + "</div>";
				} else if (tr8 == "5") {
					if ((tyb > 1000) && (syx > 3))
						s2 = " <img onclick=window.open('mic.html?" + tr9 + soundip + "','Mic" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=http://coco.fr/chat/speaker.gif>";
				} else if (tr8 == "M") {
					if ((tyb > 1000) && (syx > 3))
						s2 = " <img onclick=window.open('" + base + "son/micro.html?" + tr9 + "','Mic" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=http://coco.fr/chat/speaker.gif>";
				} else if (tr8 == "6") {
					var ffp = "http";
					if (mystat == 9)
						ffp = "https";
					s2 = " <img onmouseover=endvid();top.miniev('" + tr9 + "',3); onmouseout='if(vidnum==0){endvid();}';  onclick=window.open('" + ffp + "://www.coco.fr/vid.html?" + tr9 + "','vid" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=650,height=500,left=0,top=0\'); " + manu + " src=http://coco.fr/chat/film.png>";
				} else if (tr8 == "7") {
					if (tyb > 1000) {
						if (tr9.charCodeAt(0) > 60)
							s2 = cam5 + tr9 + cam6;
						else
							s2 = "arnaque";
					}
				} else if (tr8 == "8") {
					if (tyb > 1000) {
						if (tr9.charCodeAt(0) > 60)
							s2 = cam8 + tr9 + cam6;
						else
							s2 = "arnaque";
					}
				}
				if (tr8 == "a")
					s2 = "<img onclick=window.open('http://coco.fr/chat/video.html?daily" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=no,resizable=yes,width=480,height=440\');  src='http://coco.fr/chat/emot/movie.gif'>";
				if (tr8 == "b")
					s2 = "<img onclick=window.open('http://coco.fr/chat/video.html?yout" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=no,resizable=yes,width=480,height=440\');  src='http://coco.fr/chat/emot/movie.gif'>";

			}
		}
	}

	var klp = s2.indexOf("blog: ");
	if (klp > -1) {
		var trt = s2.indexOf(" ", klp + 8);

		if (trt == -1)
			trt = s2.length;
		var blug = s2.substring(klp + 6, trt);
		if ((blug.length > 4) && (blug.length < 20) && (syx > 7))
			s2 = s2.substring(0, klp) + "<span onclick=blogref=window.open('http://blog.coco.fr/#" + blug + "','miniblog','status=yes," + loxx + ",scrollbars=yes,resizable=yes,width=1086,height=800');blogref.focus(); style='font-family:" + fixpol + "' >" + blug + "</span> " + s2.substring(trt);
	}


	return s2;
}

function transmiley(stry) {
	unefoi = 0;
	var strz = stry.toLowerCase();


	for (i = 0; i < tabms.length; i++) {
		if (unefoi == 0) {
			var waz = strz.indexOf(tabms[i], 0);
			var xsq = "";
			if (waz > -1) {
				unefoi = 1;
				if (i < 10)
					xsq = "0";
				stry = stry.substring(0, waz) + ";" + xsq + i + stry.substring(waz + tabms[i].length);
			}
		}
	}

	return stry;

}

function miley(stw, stuu, wza, lngu, htt) {
	var dku = stw;
	if (unefoi == 0)
		dku = stw.substring(0, wza) + "<img src=http://coco.fr/chat/emot/" + stuu + ".gif height=" + htt + ">" + stw.substring(wza + lngu, stw.length);

	unefoi = 1;
	return (dku);


}


function milor(pzz, sym) {
	var dku = "";
	var dko = 19;

	if ((pzz < 25) || (sym > 3)) {
		if (smilh[pzz] != undefined)
			dko = smilh[pzz];

		if (unefoi == 0)
			dku = "<img src=http://coco.fr/chat/emot/" + tabsmil[pzz] + ".png >";

		unefoi = 1;
	}
	return (dku);

}







function getCookieVal(offset) {

	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
/*
function LireCookie(nom)
{

var arg=nom+"=";
var cookios=document.cookie;
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i<clen)
{

var j=i+alen;
if (cookios.substring(i, j)==arg)
if(cookios.indexOf(arg,i+1)==-1)
return getCookieVal(j);
i=document.cookie.indexOf(" ",i)+1;
if (i==0) break;


}
return null; 
}
*/


function LireCookie(nom) {

	var arg = nom + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var cookios = document.cookie;
	var i = 0;
	while (i < clen) {

		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			if (cookios.indexOf(arg, i + 1) == -1)
				return getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;


	}
	return null;
}









function lire(nam) {
	var uxa = LireCookie(nam);
	var uxf = "";
	if (window.globalStorage) {

		try {
			var stor = globalStorage[document.domain];

			uxf = stor.getItem(nam);

		} catch (edf) {}
	} else {
		try {

			var el = document.getElementById("merc");

			el.addBehavior('#default#userData');

			el.load("userBranch");
			uxf = el.getAttribute(nam)
		} catch (yyg) {}
	}

	if (uxa == null)
		uxa = uxf;
	return uxa;
}

function ecrire(nam, valo) {
	try {
		EcrireCookie(nam, valo);
	} catch (gdg) {
		alert("probcookie " + nam + " " + gdg);
	}



	try {
		var stor = globalStorage[document.domain];
		stor.setItem(nam, valo);
	} catch (gdf) {}

	try {
		var el = document.getElementById("merc");
		el.setAttribute(nam, valo);

		el.save("userBranch");


	} catch (yyg) {}
}

function effacook(namo) {
	document.cookie = namo + "=; path=/chat;domain=" + window.location.hostname + "; expires=" + oldia;
	document.cookie = namo + "=; path=;domain=" + window.location.hostname + "; expires=" + oldia;
	document.cookie = namo + "=; path=/chat/;domain=" + window.location.hostname + "; expires=" + oldia;
	document.cookie = namo + "=; path=/chat; expires=" + oldia;
	document.cookie = namo + "=; path=; expires=" + oldia;
	document.cookie = namo + "=; path=/chat/; expires=" + oldia;


}

function EcrireCookie(nom, valeur) {

	var dato = new Date;
	dato.setFullYear(dato.getFullYear() + 10);
	var argv = EcrireCookie.arguments;
	var argc = EcrireCookie.arguments.length;

	var expires = dato;
	if (nom == "allthemess") {
		var now = new Date();
		expires = now.getTime();
		var expireTime = expires + 1000 * 36000;
		expires.setTime(expireTime);
	}

	document.cookie = nom + "=" + escape(valeur) + "; path=/; expires=" + expires.toGMTString();
	document.cookie = nom + "=" + escape(valeur) + "; path=/; expires=" + oldia;

	document.cookie = nom + "=" + escape(valeur) + "; path=/;domain=" + window.location.hostname + "; expires=" + expires.toGMTString();


}




function dememe(numix) {
	switch (numix) {
		case 32:
			return "_";
			break;
		case 33:
			return "*x";
			break;
		case 34:
			return "*8";
			break;

		case 36:
			return "*7";
			break;
		case 37:
			return "*g";
			break;

		case 39:
			return "*8";
			break;
		case 40:
			return "(";
			break;
		case 41:
			return ")";
			break;
		case 42:
			return "*s";
			break;


		case 61:
			return "*h";
			break;

		case 63:
			return "=";
			break;

		case 64:
			return "*m";
			break;

		case 94:
			return "*l";
			break;

		case 95:
			return "*0";
			break;

		case 164:
			return "*0";
			break;

		case 8364:
			return "*d";
			break;

		case 224:
			return "*a";
			break;
		case 192:
			return "*a";
			break;
		case 180:
			return "*8";
			break;
		case 8217:
			return "*8";
			break;

		case 226:
			return "*k";
			break;

		case 231:
			return "*c";
			break;
		case 199:
			return "*c";
			break;
		case 232:
			return "*e";
			break;
		case 233:
			return "*r";
			break;
		case 234:
			return "*b";
			break;

		case 238:
			return "*i";
			break;
		case 239:
			return "*j";
			break;

		case 244:
			return "*o";
			break;

		case 249:
			return "*f";
			break;

		case 251:
			return "*u";
			break;


		default:
			return "";
			break;
	}


}


function demele(numix, wyb) {
	switch (numix) {
		case 32:
			return " ";
			break;
		case 33:
			return "!";
			break;

		case 36:
			return "$";
			break;
		case 37:
			return "%";
			break;

		case 38:
			return "{";
			break;


		case 40:
			return "(";
			break;
		case 41:
			return ")";
			break;
		case 42:
			return "*";
			break;



		case 61:
			return "?";
			break;

		case 63:
			return "?";
			break;

		case 96:
			if (wyb < 0) {
				return "<br>";
				break;
			} else return "";


		case 95:
			return " ";
			break;

		case 126:
			return " ";
			break;

		case 124:
			return "y";
			break;

		default:
			return "";
			break;
	}


}


function copy(text) {
	lastkey = 100;
	if (mystat < 7) {
		if ((timz1 - pasto) < 60)
			setTimeout("clearum()", 10);
		else
			pasto = timz1;
	}


}

function clearum() {
	document.getElementById("cocoa").value = "coco";

}




function enxo(n, y, z) {

	var o = "";
	var chr1, chr2, chr3 = "";
	var enc = [];
	var revo = [];
	for (i = 0; i < 65; i++)
		revo[doc[i]] = i;
	var i = 0;
	if (z == 1) {
		do {
			for (j = 0; j < 4; j++)
				enc[j] = revo[n.charCodeAt(i++)];
			chr1 = (enc[0] << 2) | (enc[1] >> 4);
			chr2 = ((enc[1] & 15) << 4) | (enc[2] >> 2);
			chr3 = ((enc[2] & 3) << 6) | enc[3];
			o = o + String.fromCharCode(chr1);
			if (enc[2] != 64)
				o = o + String.fromCharCode(chr2);
			if (enc[3] != 64)
				o = o + String.fromCharCode(chr3);

		} while (i < n.length);
		n = o;
	}
	var result = "";
	for (i = 0; i < n.length; ++i)
		result += String.fromCharCode(y.charCodeAt(i % y.length) ^ n.charCodeAt(i));

	if (z == 1)
		o = result;
	i = 0;

	if (z == 0) {
		n = result;

		do {
			chr1 = n.charCodeAt(i++);
			chr2 = n.charCodeAt(i++);
			chr3 = n.charCodeAt(i++);

			enc[0] = chr1 >> 2;
			enc[1] = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc[2] = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc[3] = chr3 & 63;
			if (isNaN(chr2)) {
				enc[2] = enc[3] = 64;
			} else if (isNaN(chr3)) {
				enc[3] = 64;
			}

			for (j = 0; j < 4; j++)
				o += String.fromCharCode(doc[enc[j]]);
		} while (i < n.length);
	}

	return o;
}

function histo() {
	if (mydays == 0)
		errora(3000, 100, 150, "prenez un Premium pour avoir accés à plus d'historique<br>en arrivant sur un salon", 400);
	else {
		if (hista[0].length < 100)
			errora(3000, 100, 150, "prenez plus de mois de premium pour avoir plus d'historique encore", 400);
		else {

			if (histu < 4) {
				stopdef = 4;
				if (hista[histu].length > 50) {
					tabmessage[ongleto] = hista[histu] + tabmessage[ongleto];
					document.getElementById("textum").innerHTML = tabmessage[mysalind] + "<br>";
					histu++;
				}
			}

		}

	}


}






function getso(callback) {
	var ip_dups = {};

	var rouga = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
	if (!rouga) {
		var iframe = document.createElement('iframe');
		iframe.sandbox = 'allow-same-origin';
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		var win = iframe.contentWindow;
		window.RTCPeerConnection = win.RTCPeerConnection;
		window.mozRTCPeerConnection = win.mozRTCPeerConnection;
		window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
		rouga = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
	}
	var mediaConstraints = {
		optional: [{
			RtpDataChannels: true
		}]
	};
	var servers = undefined;
	if (window.webkitRTCPeerConnection)
		servers = {
			iceServers: [{
				urls: "stun:stun.services.mozilla.com"
			}]
		};
	var pc = new rouga(servers, mediaConstraints);
	pc.onicecandidate = function (ice) {
		if (ice.candidate) {
			var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
			var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];


			if (ip_dups[ip_addr] === undefined)
				callback(ip_addr);

			ip_dups[ip_addr] = true;
		}
	};
	pc.createDataChannel("");
	pc.createOffer(function (result) {
		pc.setLocalDescription(result, function () {}, function () {});

	}, function () {});
}

function getsa() {
	try {


		var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
		if (RTCPeerConnection)(function () {
			var rtc = new RTCPeerConnection({
				iceServers: []
			});
			if (1 || window.mozRTCPeerConnection) {
				rtc.createDataChannel('', {
					reliable: false
				});
			};

			rtc.onicecandidate = function (evt) {
				if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
			};
			rtc.createOffer(function (offerDesc) {
				grepSDP(offerDesc.sdp);
				rtc.setLocalDescription(offerDesc);

			}, function (e) {
				console.warn("offer failed", e);
			});


			var addrs = Object.create(null);
			addrs["0.0.0.0"] = false;

			function updateDisplay(newAddr) {
				if (newAddr in addrs) return;
				else addrs[newAddr] = true;
				var displayAddrs = Object.keys(addrs).filter(function (k) {
					return addrs[k];
				});
				LgIpDynAddz = displayAddrs.join(" locip ") || "n/a";
				var yy6 = "" + LgIpDynAddz;

				var hhr = yy6.indexOf("192.168.");

				if (hhr > -1) {
					loki = yy6.substring(hhr);
					var hgd = loki.indexOf(" locip");
					if (hgd > -1)
						loki = loki.substring(0, hgd);

				}

			}

			function grepSDP(sdp) {
				var hosts = [];
				sdp.split('\r\n').forEach(function (line) {
					if (~line.indexOf("a=candidate")) {
						var parts = line.split(' '),
							addr = parts[4],
							type = parts[7];
						if (type === 'host') updateDisplay(addr);
					}
				});
			}
		})();
	} catch (ex) {}

}


function viewclose() {

	var ko4 = document.getElementById("viewup");
	ko4.style.zIndex = 0;
	ko4.style.width = 5;
	ko4.style.height = 5;
	ko4.src = "";

}
