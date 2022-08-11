const SCROLL_MIN = 100;
const $scroll_to_top = document.querySelector("#scroll-to-top");
const $drawer = document.querySelector("#drawer");
const $drawer_item = document.querySelectorAll(".drawer-item");

function checkScroll() {
    if (document.documentElement.scrollTop > SCROLL_MIN || document.body.scrollTop > SCROLL_MIN) {
        $scroll_to_top.style.display = "block";
    } else {
        $scroll_to_top.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

async function toggleDropdown() {
    let expanded = $drawer.classList.contains("expanded");
    if (expanded) {
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
        $drawer.classList.toggle("expanded");
        $scroll_to_top.style.display = "block";
    } else {
        $drawer.classList.toggle("expanded");
        $scroll_to_top.style.display = "none";
        await new Promise(r => setTimeout(r, 250));
        for (let i = 0; i < $drawer_item.length; i++) {
            $drawer_item[i].classList.toggle("visible");
        }
    }
}

window.addEventListener('scroll', checkScroll);