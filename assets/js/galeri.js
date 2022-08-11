let fullscreen = document.getElementById("fullscreen");
let img = document.getElementById("fullscreen-img");
let header = document.getElementById("header");
let container = document.getElementById("container");

function hideEverything(bool) {
    if (bool) {
        header.style.display = "none";
        container.style.display = "none";
    } else {
        header.style.display = "flex";
        container.style.display = "grid";
    }
}

window.onclick = e => {
    let el = e.target;
    if (el.classList.contains("photo") || el.id === "fullscreen-img") {
        if (fullscreen.style.display === "flex") {
            fullscreen.style.display = "none";
            hideEverything(false);
        } else {
            img.src = el.src;
            fullscreen.style.display = "flex";
            hideEverything(true);
        }
    }
}