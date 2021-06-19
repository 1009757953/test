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
	var cc = ((SUPPORT_end.value - SUPPORT_start.value)*1.618*1000 + UP_TURN_POINT.value*1000)/1000;
	var dd = ((SUPPORT_end.value - SUPPORT_start.value)*2*1000 + UP_TURN_POINT.value*1000)/1000;

	UP_D1.value = aa.toFixed(4);
	UP_D2.value = bb.toFixed(4);
	UP_D3.value = cc.toFixed(4);
	UP_D4.value = dd.toFixed(4);
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
	var cc = DOWN_TURN_POINT.value - (Force_start.value - Force_end.value)*1.618;
	var dd = DOWN_TURN_POINT.value - (Force_start.value - Force_end.value)*2;

	DOWN_D1.value = aa.toFixed(4);
	DOWN_D2.value = bb.toFixed(4);
	DOWN_D3.value = cc.toFixed(4);
	DOWN_D4.value = dd.toFixed(4);
}