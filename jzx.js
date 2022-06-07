function js1() {
	var a = document.getElementById("yi").value;
	var b = document.getElementById("er").value;
	var c = document.getElementById("san").value;

	if(c!==''){
		var d = Number(b)-Number(c);
		var e = Number(b)-Number(a);
		var f = Number(d)/Number(e);

		document.getElementById("res").value=f.toFixed(4);
	}

	var x = document.getElementById("yi").value;
	var y = document.getElementById("er").value;

	var x=Number(x);
	var y=Number(y);

	var a = document.getElementById("res0").value;
	var b = document.getElementById("res1").value;
	var c = document.getElementById("res2").value;
	var d = document.getElementById("res3").value;

	if(a!=='0'){
		var z=y-(Number(a)*y-Number(a)*x);
		document.getElementById("res01").value=z.toFixed(4);
	}else{
		document.getElementById("res01").value=0;
	}
	if(b!=='0'){
		var z=y-(Number(b)*y-Number(b)*x);
		document.getElementById("res11").value=z.toFixed(4);
	}else{
		document.getElementById("res11").value=0;
	}
	if(c!=='0'){
		var z=y-(Number(c)*y-Number(c)*x);
		document.getElementById("res21").value=z.toFixed(4);
	}else{
		document.getElementById("res21").value=0;
	}
	if(d!=='0'){
		var z=y-(Number(d)*y-Number(d)*x);
		document.getElementById("res31").value=z.toFixed(4);
	}else{
		document.getElementById("res31").value=0;
	}
}

function js2() {
	var a = document.getElementById("si").value;
	var b = document.getElementById("wu").value;
	var c = document.getElementById("liu").value;

	if(c!==''){
		var d = Number(c)-Number(b);
		var e = Number(a)-Number(b);
		var f = Number(d)/Number(e);

		document.getElementById("result").value=f.toFixed(4);
	}

	var x = document.getElementById("si").value;
	var y = document.getElementById("wu").value;

	var x=Number(x);
	var y=Number(y);

	var a = document.getElementById("result0").value;
	var b = document.getElementById("result1").value;
	var c = document.getElementById("result2").value;
	var d = document.getElementById("result3").value;

	if(a!=='0'){
		var z=y+Number(a)*x-Number(a)*y;
		document.getElementById("result01").value=z.toFixed(4);
	}else{
		document.getElementById("result01").value='0';
	}
	if(b!=='0'){
		var z=y+Number(b)*x-Number(b)*y;
		document.getElementById("result11").value=z.toFixed(4);
	}else{
		document.getElementById("result11").value='0';
	}
	if(c!=='0'){
		var z=y+Number(c)*x-Number(c)*y;
		document.getElementById("result21").value=z.toFixed(4);
	}else{
		document.getElementById("result21").value='0';
	}
	if(d!=='0'){
		var z=y+Number(d)*x-Number(d)*y;
		document.getElementById("result31").value=z.toFixed(4);
	}else{
		document.getElementById("result31").value='0';
	}
}
