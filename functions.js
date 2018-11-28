function damage(current, extra) {
	current = parseFloat(current);
	extra = parseFloat(extra);
	var bot = 1 + (current/100);
	var top = bot + (extra/100);
	var increase = (top/bot) - 1;
    return (increase*100).toFixed(3);
}

function attack(current,extra){
	current = parseFloat(current);
	extra = parseFloat(extra);
	return (100*extra/current).toFixed(3);
}

function piercing(current, extra){
	current = parseFloat(current)/100;
	extra = parseFloat(extra)/100;
	extra = current + extra;

	currDMG = 1 / Math.max(1- current, 0.7);
	extraDMG = 1 / Math.max(1- extra, 0.7);
	
	return (100*(extraDMG - currDMG)).toFixed(3);
}

function breakpoint(attack){
	attack = parseFloat(attack);
	var blob = (12+attack)/attack;
	var top = 100*(1.05-blob);
	var bot = blob - 1;
	return (top/bot).toFixed(3);
}


function damageButton() {
	var current  = document.getElementById("currentdmg").value;
	var extra  = document.getElementById("extradmg").value;
	document.getElementById("damageresult").innerHTML = damage(current, extra);
}

function attackButton() {
	var current  = document.getElementById("currentatk").value;
	var extra  = document.getElementById("extraatk").value;
	document.getElementById("attackresult").innerHTML = attack(current, extra);
	document.getElementById("breakpointresult").innerHTML = breakpoint(current);
}

function piercingButton() {
	var current  = document.getElementById("pcurrent").value;
	var extra  = document.getElementById("pextra").value;
	document.getElementById("piercingresult").innerHTML = piercing(current, extra);
}


/*
function breakpointButton() {
	var attack  = document.getElementById("breakpoint").value;
	document.getElementById("breakpointresult").innerHTML = breakpoint(attack);
}
*/