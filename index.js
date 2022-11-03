const hamburger = document.getElementById("hamburger")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const nav = document.querySelector("nav")
const navItems = document.querySelectorAll(".nav-item")
let hamburgerToggled = false 


if (window.innerWidth <= 600) {
    gsap.to('nav', {opacity: 0, duration: .1, backgroundColor: '#eafaf1'})
    gsap.to('.nav-item', {duration: .1, opacity: 0})
    nav.classList.add("not-displayed")
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("not-displayed")
    }
    main.classList.remove("not-displayed")
    footer.classList.remove("not-displayed")
}

hamburger.addEventListener("click", function() {
    if (!hamburgerToggled) {
        hamburgerToggled = true
        gsap.to('main', {duration: .5, opacity: 0, ease: 'ease-in-out'})
        gsap.to('footer', {duration: .5, opacity: 0, ease: 'ease-in-out'})
        setTimeout(function() {
            main.classList.add("not-displayed")
            footer.classList.add("not-displayed")
            nav.classList.remove("not-displayed")
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove("not-displayed")
            }
        }, 1000)
        gsap.to('nav', {opacity: 1, duration: .25, backgroundColor: '#fcfcfc'})
        gsap.to('.nav-item', {delay: 1, duration: .25, opacity: 1, stagger: .2})
    } else {
        hamburgerToggled = false
        gsap.to('nav', {opacity: 0, duration: .25, backgroundColor: '#eafaf1'})
        gsap.to('.nav-item', {duration: .5, opacity: 0})
        setTimeout(function() {
            nav.classList.add("not-displayed")
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove("not-displayed")
            }
            main.classList.remove("not-displayed")
            footer.classList.remove("not-displayed")
        }, 50);
        gsap.to('main', {duration: .5, opacity: 1, ease: 'ease-in-out', delay: 1})
        gsap.to('footer', {duration: .5, opacity: 1, ease: 'ease-in-out', delay: 1})
    }
})