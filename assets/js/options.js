const check = document.getElementById("change");

document.getElementById("ok").addEventListener("click", function () {
	const input = document.getElementById("url").value.trim();
	const change = check.checked;
	const title = document.getElementById("title").value.trim();
	localStorage.setItem("url", input);
	localStorage.setItem("change", change);
	localStorage.setItem("title", title);
	alert("Successfully saved!");
	if (window.location !== window.parent.location) {
		window.location.reload();
	} else {
		window.close();
	}
});

if (localStorage.getItem("url")) {
	document.getElementById("url").value = localStorage.getItem("url");
}

if (localStorage.getItem("change")) {
	check.checked = localStorage.getItem("change") == "true" ? true : false;
}

if (localStorage.getItem("title")) {
	document.getElementById("title").value = localStorage.getItem("title");
}

// switch (checkbox)
document.getElementById("change-label").addEventListener("click", function () {
	if (check.checked ^= 1) {
		check.checked = false;
	} else {
		check.checked = true;
	}
});