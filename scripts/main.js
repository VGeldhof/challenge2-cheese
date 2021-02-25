document.getElementsByClassName('menutoggle')[0].onclick = function () {
	var menu = document.getElementById('menu');
	if (menu.className =="active") {
		menu.className = "inactive"; 
		// Als die actief is maak hem inactief
	}
	else {
		menu.className ="active";
	}
}

// Hij wisselt door het knopje aan te klikken

