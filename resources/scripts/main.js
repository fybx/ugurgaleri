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

function showDropdown() {
    el_drawer.classList.remove('hidden');
    el_drawer.classList.add('flex');
}

function hideDropdown() {
    el_drawer.classList.remove('flex');
    el_drawer.classList.add('hidden');
}

function showNavitems() {
    for (let i = 0; i < navitems.length; i++) {
        navitems[i].classList.remove('hidden');
        navitems[i].classList.add('inline-block');
    }
}

function hideNavitems() {
    for (let i = 0; i < navitems.length; i++) {
        navitems[i].classList.remove('inline-block');
        navitems[i].classList.add('hidden');
    }
}

async function toggleDropdown() {
    el_drawer.classList.toggle("expanded");
    await sleep(500);
    el_container.classList.toggle("hidden");
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);