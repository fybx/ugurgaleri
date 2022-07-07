async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let dropdown = document.getElementsByClassName('dropdown')[0];
let navitems = document.getElementsByClassName('dropdown-nav-item');

function showDropdown() {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('flex');
}

function hideDropdown() {
    dropdown.classList.remove('flex');
    dropdown.classList.add('hidden');
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
    if (dropdown.classList.contains('hidden')) {
        showDropdown();
        await sleep(200);
        showNavitems();
    }
    else {
        dropdown.classList.add('dropdown_close_animation');
        await sleep(550);
        dropdown.classList.remove('dropdown_close_animation');
        hideDropdown();
        hideNavitems();
    }
}