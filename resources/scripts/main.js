function toggleDropdown() {
    let target = document.getElementsByClassName('dropdown')[0];
    if (target.classList.contains('hidden')) {
        target.classList.remove('hidden');
        target.classList.add('flex');
        //document.getElementById('container').style.display = 'none';
    }
    else {
        target.classList.add('dropdown_close_animation');
        target.classList.add('hidden');
        target.classList.remove('flex');
    }
}