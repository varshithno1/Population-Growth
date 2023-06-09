const nav = document.querySelector(".wrap");
const hero = document.querySelector(".hero-wrap");

// const more = document.querySelector(".matter");

const herop = document.querySelector(".hide");
const herobtn = document.querySelector(".hero-btn");
const heroa = document.querySelector(".know-more");

herobtn.addEventListener("click", () => {
    if(herop.style.display == "none"){
        herop.style.display = "inline"
        heroa.innerText = "Less"
    }
    else{
        herop.style.display = "none"
        heroa.innerText = "Know More"
    }
});

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
heroObserver.observe(more);
