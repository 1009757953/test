/*
function GetSupport(){
	var SUPPORT_start = document.getElementById("SUPPORT_start");
	var SUPPORT_end = document.getElementById("SUPPORT_end");
	var SUPPORT_GZ = document.getElementById("SUPPORT_GZ");
	var SUPPORT_JX = document.getElementById("SUPPORT_JX");

	var aa = Math.sqrt(SUPPORT_start.value*SUPPORT_end.value);
	var bb = SUPPORT_end.value -((SUPPORT_end.value-SUPPORT_start.value)*0.738);

	SUPPORT_GZ.value = aa.toFixed(5);
	SUPPORT_JX.value = bb.toFixed(5);
}

function GetForce(){
	var Force_start = document.getElementById("Force_start");
	var Force_end = document.getElementById("Force_end");
	var Force_GZ = document.getElementById("ForceGZ");
	var Force_JX = document.getElementById("ForceJX");
	
	Force_GZ.value = 0;
	Force_JX.value = 0;

	var Force_aa = Math.sqrt(Force_start.value*Force_end.value);
	var Force_bb = (Force_start.value-Force_end.value)*0.738;
	var Force_cc = ((Force_bb*1000 + Force_end.value*1000)/1000) ;

	Force_GZ.value = Force_aa.toFixed(5);
	Force_JX.value = Force_cc.toFixed(5);
}
*/
function GetSupport(){
	var SUPPORT_start = document.getElementById("SUPPORT_start").value;
	var SUPPORT_end = document.getElementById("SUPPORT_end").value;
	var SUPPORT_GZ = document.getElementById("SUPPORT_GZ");
	var SUPPORT_JX = document.getElementById("SUPPORT_JX");

	var c=Number(SUPPORT_start);
	var d=Number(SUPPORT_end);
	var e=d/c;
	var g=Math.pow(e, 1/4);
	var h=Math.sqrt(e);
	var j=h+g-1;

	var aa = Math.sqrt(SUPPORT_start*SUPPORT_end);
	var bb=d/j;

	SUPPORT_GZ.value = aa.toFixed(5);
	SUPPORT_JX.value = bb.toFixed(5);
}

function GetForce(){
	var Force_start = document.getElementById("Force_start").value;
	var Force_end = document.getElementById("Force_end").value;
	var Force_GZ = document.getElementById("ForceGZ");
	var Force_JX = document.getElementById("ForceJX");
	
	var c=Number(Force_start);
	var d=Number(Force_end);
	var e=c/d;
	var g=Math.pow(e, 1/4);
	var h=Math.sqrt(e);
	var j=h+g-1;

	Force_GZ.value = 0;
	Force_JX.value = 0;

	var Force_aa = Math.sqrt(Force_start*Force_end);
	var Force_bb=j*d;

	Force_GZ.value = Force_aa.toFixed(5);
	Force_JX.value = Force_bb.toFixed(5);
}

function GetTargetUp(){
	var SUPPORT_start = document.getElementById("SUPPORT_start");
	var SUPPORT_end = document.getElementById("SUPPORT_end");
	var UP_TURN_POINT = document.getElementById("UP_TURN_POINT");

	var UP_D1 = document.getElementById("UP_D1");
	var UP_D2 = document.getElementById("UP_D2");
	var UP_D3 = document.getElementById("UP_D3");
	var UP_D4 = document.getElementById("UP_D4");

	var aa = ((SUPPORT_end.value - UP_TURN_POINT.value)*1.382*1000 + UP_TURN_POINT.value*1000)/1000;
	var bb = ((SUPPORT_end.value - SUPPORT_start.value)*1000 + UP_TURN_POINT.value*1000)/1000;
	var cc = ((SUPPORT_end.value - SUPPORT_start.value)*1.5*1000 + UP_TURN_POINT.value*1000)/1000;
	var dd = ((SUPPORT_end.value - SUPPORT_start.value)*2*1000 + UP_TURN_POINT.value*1000)/1000;

	UP_D1.value = aa.toFixed(5);
	UP_D2.value = bb.toFixed(5);
	UP_D3.value = cc.toFixed(5);
	UP_D4.value = dd.toFixed(5);
}

function GetTargetDown(){
	var Force_start = document.getElementById("Force_start");
	var Force_end = document.getElementById("Force_end");
	var DOWN_TURN_POINT = document.getElementById("DOWN_TURN_POINT");
	
	var DOWN_D1 = document.getElementById("DOWN_D1");
	var DOWN_D2 = document.getElementById("DOWN_D2");
	var DOWN_D3 = document.getElementById("DOWN_D3");
	var DOWN_D4 = document.getElementById("DOWN_D4");

	var aa = DOWN_TURN_POINT.value - (DOWN_TURN_POINT.value - Force_end.value)*1.382;
	var bb = DOWN_TURN_POINT.value - (Force_start.value - Force_end.value);
	var cc = DOWN_TURN_POINT.value - (Force_start.value - Force_end.value)*1.5;
	var dd = DOWN_TURN_POINT.value - (Force_start.value - Force_end.value)*2;

	DOWN_D1.value = aa.toFixed(5);
	DOWN_D2.value = bb.toFixed(5);
	DOWN_D3.value = cc.toFixed(5);
	DOWN_D4.value = dd.toFixed(5);
}
