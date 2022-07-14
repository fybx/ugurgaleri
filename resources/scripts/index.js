const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('reverse'))
                entry.target.classList.add('table-item-animation-reverse');
            else
                entry.target.classList.add('table-item-animation');
        }
    });
});



let targets = document.querySelectorAll('.table-item');
targets.forEach(target => {
    observer.observe(target);
})