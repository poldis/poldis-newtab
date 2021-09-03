if (localStorage.getItem("url") && localStorage.getItem("url").length > 0) {
    if (localStorage.getItem("change") && localStorage.getItem("change") === "true") {
        window.location.href = localStorage.getItem("url");
    } else {
        document.getElementById("iframe").setAttribute("src", localStorage.getItem("url"));
    }
} else {
	document.getElementById("iframe").src = "/options.html";
}

if (localStorage.getItem("title") && localStorage.getItem("title").length > 0) {
    document.title = localStorage.getItem("title");
} else {
    document.title = 'Poldis NewTab';
}

if (localStorage.getItem("css") && localStorage.getItem("css").length > 0) {
    var styleSheet = document.createElement("style");
    styleSheet.innerText = localStorage.getItem("css");
    document.head.appendChild(styleSheet);
}