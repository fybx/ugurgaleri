const SCROLL_MIN = 100;
const $scroll_to_top = document.getElementById("scroll-to-top");
const $drawer = document.getElementById("drawer");
const $drawer_item = document.querySelectorAll(".drawer-item");

function checkScroll() {
    if (document.documentElement.scrollTop > SCROLL_MIN || document.body.scrollTop > SCROLL_MIN) {
        $scroll_to_top.style.visibility = "visible";
    } else {
        $scroll_to_top.style.visibility = "hidden";
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
    let expanded = $drawer.classList.contains("expanded");
    if (expanded) {
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
        $drawer.classList.toggle("expanded");
    } else {
        $drawer.classList.toggle("expanded");
        await sleep(250);
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
    }
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);