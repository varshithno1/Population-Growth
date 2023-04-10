const nav = document.querySelector(".wrap");
const hero = document.querySelector(".hero-wrap");

const heroOptions = {
    threshold: 0.25
};

const heroObserver = new IntersectionObserver(function(entries, heroObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("scrolled");
        }else{
            nav.classList.remove("scrolled");
        }
    })
}, heroOptions);

heroObserver.observe(hero);