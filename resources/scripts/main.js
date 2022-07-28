const SCROLL_MIN = 100;
scroll_to_top = document.getElementById("scroll-to-top");
el_drawer = document.getElementById("drawer");
el_container = document.getElementById("container");
$drawer_item = document.querySelectorAll(".drawer-item");

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

async function toggleDropdown() {
    let expanded = el_drawer.classList.contains("expanded");
    if (expanded) {
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
        el_drawer.classList.toggle("expanded");
    } else {
        el_drawer.classList.toggle("expanded");
        await sleep(250);
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
    }
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);