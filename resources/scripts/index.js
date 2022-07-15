const doSlideshow = true;
const slideTime = 7500; // milliseconds
const animTime = 1000; // milliseconds

async function slideshow() {
    let showcase = document.getElementsByClassName("showcase")[0];
    while(doSlideshow) {
        showcase.style.backgroundImage = "url(resources/img/index/g.jpg)";
        showcase.classList.add("showcase-animation");
        await sleep(animTime);
        showcase.classList.remove("showcase-animation");
        await sleep(slideTime);
        showcase.style.backgroundImage = "url(resources/img/index/y.jpg)";
        showcase.classList.add("showcase-animation");
        await sleep(animTime);
        showcase.classList.remove("showcase-animation");
        await sleep(slideTime);
    }
}

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

slideshow();