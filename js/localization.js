var LANGUAGE_CODE = "en_us";

window.onload = function() {
	let localizables = document.getElementsByClassName("i18n");
	let localizables2 = document.getElementsByClassName("i18n-value");
	let request = new XMLHttpRequest();
	request.open("GET", `./lang/${LANGUAGE_CODE}.json`);
	request.send(null);
	request.onload = function() {
		if(request.status != 200) {
			console.error(`Cannot find "./lang/${LANGUAGE_CODE}.json" !`);
			return;
		}
		let m = JSON.parse(request.responseText);
		for(let e of localizables) {
			let t = m[e.getAttribute("i18n-key")];
			if(!t) {
				t = e.getAttribute("i18n-key");
				console.error("Missing i18n key: " + t);
			}
			e.innerText = t;
		}
		for(let e of localizables2) {
			let t = m[e.getAttribute("i18n-key")];
			if(!t) {
				t = e.getAttribute("i18n-key");
				console.error("Missing i18n key: " + t);
			}
			e.value = t;
		}
	}
}