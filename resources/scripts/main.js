async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function toggleDropdown() {
    let dropdown = document.getElementsByClassName('dropdown')[0];
    let navitems = document.getElementsByClassName('dropdown-nav-item');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('flex');
    }
    else {
        dropdown.classList.add('dropdown_close_animation');
        await sleep(550);
        dropdown.classList.remove('dropdown_close_animation');
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
    }
}