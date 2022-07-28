const SCROLL_MIN = 100;
scroll_to_top = document.getElementById("scroll-to-top");
el_drawer = document.getElementById("drawer");
el_container = document.getElementById("container");

function checkScroll() {
    if (document.documentElement.scrollTop > SCROLL_MIN || document.body.scrollTop > SCROLL_MIN) {
        scroll_to_top.style.visibility = "visible";
    } else {
        scroll_to_top.style.visibility = "hidden";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let navitems = document.getElementsByClassName('dropdown-nav-item');

function toggleDropdown() {
    el_drawer.classList.toggle("expanded");
    for (let i = 0; i < navitems.length; i++) {
        navitems[i].classList.toggle("visible");
    }
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);