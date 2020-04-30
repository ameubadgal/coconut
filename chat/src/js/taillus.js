

function resizo()
{
resizex=true;
if(contor<30)
setTimeout("sourisup()",300);
}
function sourisup()
{
if (resizex)
{
resizex=false;
taillo();
sauve(0);
}
}



function bloxi(ww1,hh1,ww2,hh2,cc1)
{
if(!ie6)
{
ww2-=2;
hh2-=2;
}	
return(niro+";"+blox(ww1,hh1,ww2,hh2,cc1));	
	
}

function blox(ww1,hh1,ww2,hh2,cc1)
{
var rr0="position:absolute;";
if(ww1!=-8)
rr0+="left:"+ww1+"px;";
if(hh1!=-8)
rr0+="top:"+hh1+"px;";
if(ww2!=-8)
rr0+="width:"+ww2+"px;";
if(hh2!=-8)
rr0+="height:"+hh2+"px;";
if(cc1!=-8)
rr0+="background-color:#"+cc1+";";
return rr0;
}

function divon(nn1,ww1,hh1,ww2,hh2,cc1,evv,in1)
{
if(!ie6)
{
ww2-=2;
hh2-=2;
}	
return(divo(nn1,ww1,hh1,ww2,hh2,cc1,niro+";"+evv,in1));		
}
function divo(nn1,ww1,hh1,ww2,hh2,cc1,evv,in1)
{
var rr1="<div style='";	
if(nn1!=-8)
rr1="<div id="+nn1+" style='";

rr1+=blox(ww1,hh1,ww2,hh2,cc1);
rr1+=evv;
rr1+=">";
if(in1!=-8)
rr1+=in1;
rr1+="</div>";
return rr1;
}

function tablette(uuy)
{
//messig("onDDDDD");

if(uuy==0)
{
contor=48;
		var mvp = document.getElementById('viewport');


var mvp = document.getElementById('viewport');
mvp.setAttribute("content","minimal-ui, user-scalable=1");


mvp.setAttribute("content","minimal-ui, width="+largos+", user-scalable=1");
document.body.style.position="static";

//document.getElementById("tout").style.width=largos;
//	document.getElementById("tout").style.height=hautos;
}
else if(uuy==1)
document.getElementById("tout").style.overflow="hidden";





taillo();
initial();resinit();


}

function initaillo()
{
if(contor==777)
{
document.getElementById("wirn").style.visibility="hidden";
var qq5="<div style='position:absolute;left:45%;top:90;width:55%;height:70;background-color:cccccc;text-align:center;'><img src=tablet.jpg width=100% "+start1+"=tablette(0);></div>";
qq5+="<div style='position:absolute;left:5%;top:40;width:40%;height:70;background-color:cccccc;text-align:center;' ><img src=smartphone.jpg width=100% "+start1+"=tablette(1);></div>";

document.getElementById("tout").innerHTML=qq5;
//dimdim();

}
else
{
	taillo();
	initial();resinit();
}	
	

}

function taillo()
{
//if((largos>1000)||(hautos>1000))
//contor=777;



//messig("Version tablette");

if(contor<800)
tailla();
}
function tailla()
{
dimdim();






stockar="";

document.getElementById("tout").innerHTML="";
//document.body.innerHTML='';  //     reset ALL


document.body.style.backgroundColor=groundy;





dextrop=0;
var mizo=950;
var coulsabl="FFFF8E";
var coulsa="EAEA88";

var refpub=parami[6];



if(refpub.length>2)
{
	
	modex=1;
}
bordi="";
if(modex==1)
{
	mizo=860;
	deluxe=true;
	if(refpub.indexOf("apos")>-1)
	hido=1;
	
	if(refpub.indexOf("erra")>-1)
	{
	document.body.style.backgroundColor="bbadae";	
	bordi="c";	
		
	}
	
	else
	{
	document.body.style.backgroundColor="d0def4";
	bordi="g";
	}
	
	
	coulsabl="F8eeF6";
	coulsa="DDDDDD";
}
	

if (largos<mizo)
largos=mizo;

if (hautos<520)
hautos=520;

if(contor==48)
{
if(hautos>largos)
hautos=Math.floor(hautos*0.66);

}

if(contor==777)
{



largos=450;	
hautos=602;

//largos=381;	
//hautos=310;
}

/*
largos=larg_utile;
hautos=haut_utile;
*/

widx=largos-263;
widy=hautos-238;

//widx=largos-263;
//widy=hautos-218;

if(contor==777)
{
	

/*
widy=hautos-218;

	
if(bbout>window.innerHeight)
{
	widy+=(window.innerHeight-bbout);
	bbout=window.innerHeight-1;
}
else if(bbout<(window.innerHeight-2))
{
widy+=(window.innerHeight-bbout);
bbout=window.innerHeight-1;
document.getElementById("tout").style.height=bbout+1;
}
*/
bbout=window.innerHeight;
widy=bbout-152;
document.getElementById("tout").style.height=bbout+1;

oldheight=window.innerHeight;


}
else
{
	document.getElementById("tout").style.width=largos;
	document.getElementById("tout").style.height=hautos;
}



cadrx=150;
cadry=141;


var gausabl=120;
var larsabl=widx+84;
resy=cadry-1;

decax=300;

extclose=cadrx+widx-234;
var extcloset=cadry+19;
if(modex==1)
{	

widx-=10;	
	
	
	widy-=18;
	
cadrx=20;
	
	
	cadry=152;
	gausabl=cadrx;
	larsabl=widx+20;
	
	
	decax=cadrx;
	if(ffox==-1)  
	{
		widx+=4;
		cadry+=2;
		larsabl+=2;
		
		
	}
	resy=cadry-27;
	extclose=cadrx+widx+16;
	extcloset=cadry+21;
	
}

if(hautos<570)
{
	cadry=90;
	widy+=50;
	extcloset=cadry+19;
}

var gautext=cadrx+40;
var lartext=widx-41;

if(contor==777)
{
cadrx=-6;
cadry=70;
decax=0;
widx=largg+10;
gautext=2;
lartext=widx-42;
}




stockar='';

stockar+="<div id='degradus' style='"+bloxi(cadrx,cadry,widx,widy,"eeeeee")+"overflow:hidden;z-index:2;'><img id='degradon' src=http://coco.fr/chat/degrade.gif width="+(widx-1)+" height="+(widy)+" GALLERYIMG=no style='z-index:4;'></div>";



larzone=widx-97;
if(voxeus)
larzone=widx-250;


var sle=blox(cadrx+50,cadry+widy+17,larzone,32,"FFFF8E");




if(modex==1)
{
larzone=widx;
if(voxeus)
larzone=widx-168;
sle=blox(cadrx,cadry+widy+33,larzone,32,"eeeeee")+niro+";";
var brd="<img src=http://coco.fr/chat/coinhg.gif style='"+blox(-1,-1,y,y,y)+"z-index:15;'><img src=http://coco.fr/chat/coinhd.gif style='"+blox(widx-9,-1,y,y,y)+"z-index:15;'>";
brd+="<img src=http://coco.fr/chat/coinbg.gif style='"+blox(-1,65,y,y,y)+"z-index:15;'><img src=http://coco.fr/chat/coinbd.gif style='"+blox(widx-9,65,y,y,y)+"z-index:15;'>";
stockar+=divon(y,cadrx,cadry+widy+12,y,74,"eeeeee","z-index:10;'","<img src=http://coco.fr/chat/degra.gif width="+(widx-2)+" height=20><img src=http://coco.fr/chat/degra.gif style='"+blox(0,52,widx-2,20,y)+"'>"+brd);


brd="<img src=http://coco.fr/chat/coinhg.gif style='"+blox(-1,-1,y,y,y)+"z-index:15;'><img src=http://coco.fr/chat/coinhd.gif style='"+blox(207,-1,y,y,y)+"z-index:15;'>";
brd+="<img src=http://coco.fr/chat/coinbg.gif style='"+blox(-1,widy-9,y,y,y)+"z-index:15;'><img src=http://coco.fr/chat/coinbd.gif style='"+blox(207,widy-9,y,y,y)+"z-index:15;'>";
stockar+=divon(y,extclose,cadry,y,widy,"dddddd","z-index:10;'","<img src=http://coco.fr/chat/degra.gif width=214 Height=20><img src=http://coco.fr/chat/degra.gif style='"+blox(0,widy-22,214,20,y)+"'>"+brd);
stockar+=divon(y,extclose,cadry+21,216,widy-42,"bbbbbb","z-index:10;'","");

stockar+=divon(y,cadrx,cadry+widy+33,larzone,32,"eeeeee","z-index:10'","");
}

if(contor<777)
{
var jtj="onpropertychange='this.focus();' onfocus='raz();'";
if(contor>40)
jtj="";

stockar+="<input type=text id='cocoa' MAXLENGTH=460 onkeypress='return displayunicode(event);' "+jtj+" autocapitalize='off' autocomplete='off' autocorrect='off' style='z-index:11;"+sle+"font-family:"+policius+";"+bo13+";padding-top:"+(6+4*gapy)+";padding-left:2;outline:none;'>";

}
else
{
sle=blox(5,10,larzone+20,25,"FFFFFF");
var cocom="<input type=text id='cocoa' MAXLENGTH=460 onkeypress='return displayunicode(event);' "+jtj+" autocapitalize='off' autocomplete='off' autocorrect='off' style='"+sle+"font-family:"+policius+";"+bo13+";font-size:16;padding-top:"+(2+4*gapy)+";padding-left:2;outline:none;'>";	



//cocom+=divo("minitext",10,54,larzone+50,116,"88bbee","overflow:auto;' ","aaa");
stockar+=divon("lignus",cadrx+5,cadry,larzone+89,180,"eeeeee","z-index:0;display:none;'",cocom);	


stockar+=divo("boutus",cadrx+larzone+35,cadry,50,50,y,"z-index:95;display:none;'",divon(y,10,-55,45,65,"cccccc","text-align:center;border-radius:5px;z-index:94;' "+end1+"=effacio();cancelo(event);","<b>X</b>")+divon(y,0,-10,55,55,"44dd44","text-align:center;border-radius:5px;z-index:95;' "+start1+"=writus();eventHandler(event);","<b>OK</b>"));	

}
//stockar+=divon("kok",0,1,55,55,"77dd44","text-align:center;z-index:95;' "+start1+"=jjj();eventHandler(event);","<b>ko</b>");

stockar+=divo("ongulus",decax,0,largos-cadrx,cadry,y,"z-index:70;pointer-events: none;overflow:hidden;'","");


stockar+=divo("onguselect1",0,-3,largos-cadrx,cadry+3,y,"z-index:71;overflow:hidden;'",divo("onguselect",y,y,100,cadry+20,y,"border-radius:10px;"+niro+";' onmousedown=sorc(888,event);",divo("onguselecn",8,6+yfont,y,y,y,"font-family:"+fixpol+";'","")));



stockar+=divon("closus",extclose,extcloset,216,56,y,"overflow:hidden;z-index:21;'","");

//stockar+="<div id=encum style='position:absolute;top:"+(cadry+1)+";left:"+gautext+";overflow:auto;height:"+(widy-2)+";width:"+lartext+";z-index:5;'>";

if(tablet)
{
stockar+="<IFRAME id=streamup name=streamup src='' FRAMEBORDER=0 style='position:absolute;top:0;left:0;display:none;z-index:0;overflow:hidden;width:5px;height:5px;'></IFRAME>";
stockar+="<IFRAME id=viewup name=viewup src='' width=5 HEIGHT=5 FRAMEBORDER=0 style='position:absolute;top:0;left:0;display:none;z-index:0;overflow:hidden;'></IFRAME>";
stockar+="<IFRAME id=micstro name=micstro src='' FRAMEBORDER=0 style='position:absolute;top:0;left:220px;display:none;z-index:0;overflow:hidden;width:5px;height:5px;'></IFRAME>";

}


stockar+=divo("textum",gautext,cadry+1,lartext,widy-2,y,"font-family:"+policius+";z-index:10;overflow:auto;overflow-y:scroll;background-size:"+lartext+" "+(widy-2)+";' onmousewheel=setTimeout('wheelos()',40); ontouchmove=wheelos()",y);

stockar+=divo("scrall",cadrx+widx-80,cadry+widy-80,48,48,y,"overflow:hidden;'","<img src=http://coco.fr/chat/scrall.gif?0 TITLE='scrolling' style='position:absolute;left:0;top:0;height:96px;width:48px;'  onclick='scrallo();' onmouseover=this.style.top=-48px; onmouseout='this.style.top=0'; >");


//stockar+="</div>"; 
var lsx=cadrx+20;
//if(modex==1)
//lsx-=20;

stockar+="<div id=cadrum style='position:absolute;top:"+(cadry+1)+"px;left:"+cadrx+"px;height:"+(widy-2)+";"+bo13+";width:"+widx+";z-index:40;'>";

if(modex==1)
{
gautext=cadrx+8;
lartext=widx-9
}

//if(contor<700)
//stockar+="<IFRAME SRC='miniban.html' name='minipub' id='minipub' HEIGHT=60 WIDTH=468 allowTransparency='true' FRAMEBORDER=0 SCROLLING=NO style='position:absolute;left:"+(cadrx+widx-474)+";margin:0;overflow:hidden;z-index:60;top:5;'></IFRAME>";

stockar+=divo("searchy",widx-367,1,366,widy-3,y,"overflow-y:scroll;"+bo13+";z-index:5;font-weight:normal;'",kkk7);




var hws="";
if(resux.length<40)
hws="visibility:hidden;";

stockar+=divon("salox",40,65,270,widy-66,"bbb4df","overflow-y:scroll;"+hws+"'","salut");
stockar+="</div>";



//stockar+="<div id='critero'  style='"+blox(lsx+40,cadry+22,240,60,y)+bo13+";z-index:10;'> </div>";

var apex1=cadrx+316;
var apey1=cadry+100;
if(tablet)
{
apex1=0;
apey1=0;
}

stockar+="<div id=tino onmouseover=this.style.display='none'; style='"+bloxi(apex1,apey1,y,y,"bbbbbb")+"z-index:90;padding:16px;display:none;'></div>";

if((modex==0)&&(contor<777))
{
	

//if(!deluxe)
//stockar+="<IMG ondblclick=adroll(0); SRC=http://coco.fr/chat/soleil.gif id='solius' WIDTH=140 HEIGHT=140 style='position:absolute;top:0;left:"+(largos-141)+";'>";
stockar+=divo(y,23,hautos-119,190,112,y,"z-index:28;background-image:url(http://coco.fr/chat/basepalm.gif);'","");

stockar+=divo(y,y,7,344,225,y,"z-index:30;background-image:url(http://coco.fr/chat/palme.gif);'","");

stockar+=divo(y,50,142,137,hautos-240,y,"overflow:hidden;z-index:29;'","<IMG SRC=http://coco.fr/chat/palmiero.gif WIDTH=137 HEIGHT=305 style='position:absolute;top:"+(hautos-516)+"px;'> <IMG SRC=http://coco.fr/chat/palmiero.gif WIDTH=137 HEIGHT=305 style='position:absolute;top:"+(hautos-774)+"px;'><IMG SRC=http://coco.fr/chat/palmiero.gif WIDTH=137 HEIGHT=305 style='position:absolute;top:"+(hautos-1032)+"px;'><IMG SRC=http://coco.fr/chat/palmiero.gif style='position:absolute;top:"+(hautos-1290)+"px;'>");

//stockar+="<IMG SRC=http://coco.fr/chat/anan.gif style='position:absolute;top:"+(hautos-366)+";left:"+(largos-152)+";z-index:5;'>";


}



var testa=""+location;

sourcad="ifrad";


if(true)
{
//sourcad=parami[6];
var ftx=290;
if(modex==1)
ftx=42;
sourcad="bigban";
if(parami[6].length>6)
sourcad=parami[6];
var ddip="";
if(hautos<570)
ddip="display:none;";
stockar+="<IFRAME SRC='' name='ifrad' id='ifrad' HEIGHT=95 WIDTH=720 allowTransparency='true' FRAMEBORDER=0 SCROLLING=NO style='position:absolute;margin:0;"+ddip+"overflow:hidden;top:0;left:"+ftx+"px;z-index:60;'></IFRAME>";
	
}
/*
else
stockar+="<IFRAME SRC='' name='ifrad' id='ifrad' HEIGHT=60 WIDTH=468 FRAMEBORDER=0 SCROLLING=NO style='position:absolute;overflow:hidden;top:0;left:340;z-index:40;'></IFRAME>";	
*/
if(contor==777)
{
stockar+="<div id='recherchus' style='position:absolute;overflow:hidden;top:0;left:0;z-index:15;'></div>";
//stockar+="<input type=button id='cocoa' style='position:absolute;top:420;left:0;z-index:0;'>";
}
	





stockar+=divon("overy",300,300,y,y,y,"font-family:"+fixpol+";padding:10px;overflow:auto;visibility:hidden;z-index:59;'","");

stockar+=divo("questi",cadrx+widx-565,cadry+widy-20,565,y,y,"'","");


//
if(contor<777)
{
if(modex==0)
stockar+=divon("sablus",gausabl,cadry+widy-1,larsabl,70,coulsa,"z-index:4;overflow:hidden;'","");

stockar+="<div style='position:absolute;top:"+(hautos-17-2*gapy)+"px;'>";
//stockar+="<div onclick=agir('77126'); style='position:absolute;cursor:pointer;font-size:10;z-index:5;left:"+(largos-459)+";'>Top30</div>";
var reg2="reglement.html";
if(locc==1)
reg2="regle.html";
if(locc==2)
reg2="rules.html";

stockar+=divo(y,largos-349,y,y,y,y,"font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('"+reg2+"');","Réglement");

stockar+=divo(y,largos-270,y,y,y,y,"font-size:10px;cursor:pointer;z-index:5;' onclick=messig('contact@"+provi.toLowerCase()+"');","Contact");

stockar+=divo(y,largos-209,y,y,y,y,"font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('"+base+"aide/');","Aide");

stockar+=divo(y,largos-169,y,y,y,y,"font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('http://www.moxt.com/');","Jeux&nbsp;Gratuits");

//stockar+="<div onclick=window.open('"+base+"WEBMASTER/'); style='position:absolute;cursor:pointer;font-size:10;z-index:5;left:"+(largos-74)+";'>Webmasters</div>";

//stockar+="<div onclick=window.open('http://www.joker.net/poker.html'); style='position:absolute;cursor:pointer;font-family:courier new;font-weight:bold;font-size:12;z-index:5;top:-2;left:"+(largos-450)+";'>Poker</div>";



stockar+="</div>";




}
stockar+="<IFRAME SRC='' name='certif' id='certif' FRAMEBORDER=0 style='position:absolute;top:"+(hautos-400)+";left:"+(cadrx+widx-335)+";z-index:0;width:300;height:270;visibility:hidden;border-style:solid;border-width:1px;'></IFRAME>";

stockar+="<IFRAME SRC='' name='boardz' id='boardz' FRAMEBORDER=0 style='position:absolute;width:"+(widx-1)+";height:"+(widy-2)+";top:"+(cadry+1)+";left:"+(cadrx)+";z-index:0;visibility:hidden;'></IFRAME>";



stockar+="<img id='showav' src='' style='position:absolute;z-index:52;width:120;height:120;left:"+(extclose+60)+";top:250;visibility:hidden;' onmousedown=this.style.visibility='hidden'; onload=this.style.visibility='visible'; >";

var babal=cadrx+50;
var babah=cadry+widy+52;
if(modex==1)
{
babal=cadrx+8;
babah=cadry+widy+68;	
}
stockar+=divo("babar",babal,babah+yfont,y,y,y,"font-family:"+fixpol+";z-index:10;'","");

ecritl=cadrx+58;
ecrith=cadry+widy+3;
if(modex==1)
{
ecritl=cadrx+12;
ecrith=cadry+widy+16;
}
stockar+=divo("ecrito",ecritl,ecrith,y,y,y,"z-index:10;font-style:italic;font-size:10px;visibility:hidden;'","en train d'écrire ...");
//stockar+=divo("publis",ecritl+190,ecrith,y,y,y,"z-index:80;font-family:"+fixpol+";background-color:ff00ff;'","<div onclick=window.open('http://www.joker.net/'); style='position:absolute;cursor:pointer;font-family:courier new;font-weight:bold;font-size:12;z-index:5;top:0;left:0'>&nbsp;&nbsp;Poker&Echecs<div style='position:absolute;font-size:16;z-index:52;left:2;top:-2;font-weight:normal;'>&#9829;</div></div>");

var alx=hautos-49;
var aly=largos-108;
if(modex==1)
{
alx=hautos-122;
aly=largos-215;
}
stockar+=divon("babaw",aly,alx+yfont,y,y,y,"font-family:"+fixpol+";z-index:10;visibility:"+warna+";'",warni);


stockar+="<div id='zeroo' style='position:absolute;top:0;left:0;font-family:"+fixpol+";z-index:10;' onclick=oppop('www.coco.fr/graph/')></div>";
stockar+="<div id='zerob' style='position:absolute;top:"+(hautos-18)+";left:0;font-family:"+fixpol+";z-index:30;'></div>";

var zkr="";//"line-height:2em;vertical-align:middle;";
var optal=cadrx+widx+20;
var optah=cadry+5;
var resety=150;
if(modex==1)
{
zkr="";
optah=cadry+widy+18;
optal=cadrx+widx+20;
}
stockar+="<div id=optim style='"+blox(optal,optah,y,y,y)+";"+zkr+"font-family:"+fixpol+";'>";
var optio=new Array("'cliconglet(0)'","dddddd","Accueil","'filtro()'","d8afca","&nbsp;"+filtram,"'designu()'","e0e28f","Design","'reseto()'","bbddaa","Reset","'profilum()'","dddddd","Profil","'premiolo()'","ddccaa","Premium","'agir(77369)'","E69E9E","Info","emota()","b8bed8","Smiley","'mizor()'","E2B838","Amiz");
//b8bed8,
var lengopt=optio.length/3;
opto[0]=widy-100;
opto[1]=widy-212;
opto[2]=widy-150;
opto[3]=widy-170;
for(i=0; i<lengopt; i++)
{
	var mth="onmousedown";
	if((optio[3*i+2]=="Premium")||(optio[3*i+2]=="Reset")||(optio[3*i+2]=="Info"))
	mth="onclick"
	
	var optl=0;
	var optt=Math.floor(i*(widy-50)/(lengopt-1));
	var opth=28;
	var optw=70;
	
	var toptex=5;
	if(modex==0)
	{
	if(i==1)
	opto[0]=optt;
	if(i==4)
	opto[1]=optt-90;
	if(i==8)
	opto[2]=optt-210;
	if(i==7)
	opto[3]=optt-240;
	}
	if(modex==1)
	{
		toptex=2;
		opth=22;
		optw=68;
		/*
		optt=Math.floor(i%3)*26;
		optl=160-(72*Math.floor(i/3));
		optl-=15*(i%3);
		*/
		optt=Math.floor(i%3)*21;
		optl=140-(67*Math.floor(i/3));
		
	}
	
	if(i==1)
	stockar+=divo("shieldo",optl+4,optt+opth/2-10,1,16,y,"font-size:"+(17+yfont)+"px;font-family:courier new;z-index:20;' "+bleu+" onmousedown=shieldum();",shielda);
	//stockar+="<div id=shieldo "+bleu+" onmousedown=shieldum(); style='position:absolute;font-size:"+(17+yfont)+";left:"+(optl+4)+";top:"+(optt+opth/2-10)+";font-family:courier new;height:16;width:15;z-index:20;'>"+shielda+"</div>";
	
	
	if(i==2)
	resety=cadry+optt+21;
	
	stockar+=divon("opt"+i,optl,optt,optw,opth,optio[3*i+1],"' "+mth+"="+optio[i*3]+" "+roug,divo("optg"+i,y,toptex+yfont,optw,10,y,"text-align:center;'",optio[3*i+2]));
}
stockar+="</div>";


stockar+=divo("messao",cadrx+widx-250,cadry+widy+2,y,y,"z-index:40;visibility:hidden;font-family:"+fixpol+"' onclick=this.style.visibility='hidden';affimess();","New Mess");

if(contor<700)
stockar+=divo("blogo",cadrx+200,cadry+widy-2,220,20,y,"z-index:50;font-weight:bold;font-size:14;cursor:pointer;' "+roug+" ","");





var voxil=cadrx+widx-195;
var voxit=cadry+widy-15;
if(modex==1)
{
voxil=cadrx+widx-169;
voxit=cadry+widy+3;
}

var hnn="hidden";
if(voxeus)
hnn="visible";
stockar+="<div id='voxi' style='"+bloxi(voxil,voxit,150,95,"ffffff")+"visibility:"+hnn+";font-family:"+fixpol+";z-index:57;'>";


stockar+=divon("voxo",3,3,60,20,"dddddd","font-family:"+fixpol+";' onmouseup=mygain=50;voxou('25');","Mic ON");

stockar+=divon("voxz",78,3,38,20,"dddddd","font-family:"+fixpol+";' onclick=activox(7);","");


stockar+=divo("muto",119,13,y,y,"eeeeee","font-size:10px;font-family:"+policius+";' onclick=muta();","mute");
//stockar+=divo("speex",119,1,y,y,"eeeeee","font-size:10px;visibility:hidden;font-family:"+policius+";' onclick=speex();","V");


stockar+=divo("micra",138,0,10,10,"000000","overflow:hidden;'","");

stockar+=divo("voxa",3,22,y,y,y,"font-family:"+fixpol+";'","");

stockar+="</div>";

//document.body.innerHTML=stockar;
document.getElementById("tout").innerHTML=stockar;


if(ffox==-1)
document.getElementById('textum').addEventListener('DOMMouseScroll', wheelos);


document.getElementById('onguselect').style.backgroundColor=colotab[0];

document.getElementById("cadrum").innerHTML+=kkk7;






adroll(0);


microok=false;

//

if(ffID.length>0)
amiga();





var closas=divo(y,190,4,90,21,y,"overflow:hidden;z-index:50;'",croix+"onclick=deletonglet(ongleto);>");
//"<div style='position:absolute;overflow:hidden;height:21;left:190;top:4;width:90;z-index:50;'>";
//closas+=croix+"onclick=deletonglet(ongleto);>";

//closas+="</div>";


closas+=divo("quest",0,0,24,24,y,"overflow:hidden;z-index:50;'","<img  src=http://coco.fr/chat/camzy.gif TITLE='allumer la cam' style='position:absolute;left:0;top:0;"+squa+"'  onclick=opencam();  onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");


closas+="<IFRAME SRC='"+envox+"' name='ifranos' id='ifranos' HEIGHT=35 WIDTH=30 FRAMEBORDER=0 SCROLLING=NO allowTransparency='true' style='position:absolute;overflow:hidden;z-index:50;' onload=setTimeout('refrenvoi()',100); ></IFRAME>";

//closas+="<div style='position:absolute;left:154;top:32;height:36;width:80;z-index:20;font-family:"+fixpol+";'>Envoyer<br>Fichier</div>";


closas+=divo(y,128,94,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/kill.gif TITLE='bloquer' style='position:absolute;left:0;top:0;"+squa+"'  onclick='killum();' onmouseover=this.style.top=-24; onmouseout=this.style.top=0; >");


closas+=divo(y,128,124,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/ami.gif?1 TITLE='ajouter amiz' style='position:absolute;left:0;top:0;"+squa+"'  onclick='amigo();' onmouseover='this.style.top=-24;' onmouseout='this.style.top=0'; >");



closas+=divo("blogi",188,124,24,24,y,"overflow:hidden;'","");





closas+=divo("closuscoul",4,4,28,25,"","overflow:hidden'","");

closas+=divo("closusage",10,5+yfont,25,21,"","font-family:"+fixpol+";' onclick=al2()","");




closas+=divo("closustext",34,9,160,34,"","font-family:"+fixpol+";overflow:hidden'","");


closas+=divo(y,188,64,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/fleur2.gif?5 TITLE='faire un cadeau' style='position:absolute;left:0;top:0;"+squa+"'  onclick=cadolo(); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

closas+=divo(y,158,64,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/tele.gif TITLE='appeler' style='position:absolute;left:0;top:0;"+squa+"'  onclick=neutel(0); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

closas+=divo(y,158,124,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/questor.gif?2 TITLE='info' style='position:absolute;left:0;top:0;"+squa+"'  onmousedown=infuz(event); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");


closas+=divo(y,158,94,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/alerte.gif?3 TITLE='alerter abus' style='position:absolute;left:0;top:0;"+squa+"' onmousedown=alerta() onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");


closas+=divo(y,188,94,24,24,y,"overflow:hidden;'","<img src=http://coco.fr/chat/micro.gif?3 TITLE='micro' style='position:absolute;left:0;top:0;"+squa+"' onclick=openmic() onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");


closas+=divo(y,6,14,20,15,y,"font-family:"+fixpol+";'","ans");



closas+=divon(y,14,44,100,100,y,"font-family:"+fixpol+";z-index:21;'","no avatar");


closas+=divo("nopvs",15,50,100,y,"ddbbbb","visibility:hidden;"+bo13+";z-index:35;'","no PV");

closas+="<img id=autrui  WIDTH=120 HEIGHT=120 style='position:absolute;left:3px;top:32px;visibility:hidden;z-index:34;'>";

var salonh=268;
if(modex==1)
salonh=widy-72;

var ggk=divo("salonik",4,0,210,salonh,colotab[3],"overflow:auto;z-index:45;font-family:"+fixpol+";' onmousedown=checkavu(event); onmouseup=checkavo();","")
closas+=divo("allsalon",0,30,y,y,y,"z-index:40;'",ggk);
closas+=divo("saloncon",2,3,190,23,colotab[3],"padding-top:3px;padding-left:62px;z-index:40;font-family:"+fixpol+";' "+roug+" onclick=expandinfo();","Liste du salon");

document.getElementById("closus").innerHTML=closas;

document.getElementById("salonik").innerHTML=saloo;

for (i=0; i<salcoul.length; i++)
{
	var topr=15+Math.floor(i/8)*23;
	
	var topg=2+(i%8)*23+Math.floor(i/8)*7;
if(i==16)
{
topr=38;
topg=193;
}
selecol+=divo(y,topg,topr,18,18,salcoul[i],"z-index:46;' onmouseover=this.style.width=22;this.style.height=22;this.style.margin=-2; onmouseout=this.style.width=18;this.style.height=18;this.style.margin=0; onclick=couli("+i+");colsave=-1;document.getElementById('colium').style.visibility='visible';sauve(0);","");


}



if(contor==777)
setTimeout("initimob()",50);	








document.getElementById("ongulus").innerHTML=sauvegarde;





arrangus(0);



if(ongleto==999)   
resinit();
else    
cliconglet(ongleto);

if(modex==1)
document.getElementById("closus").style.height=widy-42;



}

function designu()
{
modex=(modex+1)%2;

taillo();
/*
for(i=0; i<maxonglus; i++)
{

document.getElementById("brdg"+i).src="http://coco.fr/chat/gauche"+bordi+".gif";
document.getElementById("ongur"+i).src="http://coco.fr/chat/droite"+bordi+".gif";
}
*/
sauve(0);

}




