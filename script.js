let toggled = localStorage.getItem("theme") === "dark";

let body = document.getElementsByTagName("body")[0];
let circle = document.getElementById("theme-toggle");
let h1 = document.getElementsByTagName("h1")[0];
let container = document.getElementById("container");
let box = document.getElementById("container");

if (toggled) {
    enableDarkMode();
}

container.onclick = function () {
    if (!toggled) {
        enableDarkMode();
        toggled = true;
    } else {
        disableDarkMode();
        toggled = false;
    }
    localStorage.setItem("theme", toggled ? "dark" : "light");
}

function enableDarkMode() {
    h1.classList.add("white");
    body.classList.add("black-bg");
    circle.classList.add("darkMode");
    container.classList.add("white-bg");
}

function disableDarkMode() {
    h1.classList.remove("white");
    body.classList.remove("black-bg");
    circle.classList.remove("darkMode");
    container.classList.remove("white-bg");
}