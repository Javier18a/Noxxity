// =========================
// MENU RESPONSIVE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// =========================
// CERRAR MENU
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

// =========================
// NAVBAR SCROLL
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 50){

        header.style.background = "rgba(5, 8, 22, 0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    }else{

        header.style.background = "rgba(5, 8, 22, 0.5)";
        header.style.boxShadow = "none";

    }

});

// =========================
// REVEAL ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(
    ".business-about-card, .project-card, .business-stat-box"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const rect = element.getBoundingClientRect();

        if(rect.top < triggerBottom){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// COUNTER STATS
// =========================

const counters = document.querySelectorAll(".business-stat-box h2");

const animateCounter = (counter) => {

    const originalText = counter.dataset.target || counter.innerText;

    counter.dataset.target = originalText;

    const target = parseInt(originalText.replace(/\D/g, ""));

    if(isNaN(target)) return;

    let current = 0;

    const increment = target / 120;

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.innerText = "+" + Math.floor(current);

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText = originalText;

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold:0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =========================
// CARD HOVER EFFECT
// =========================

const hoverCards = document.querySelectorAll(
    ".project-card, .business-about-card"
);

hoverCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(56,189,248,0.15),
            rgba(255,255,255,0.03)
        )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});

// =========================
// PROJECT IMAGE EFFECT
// =========================

const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach(image => {

    image.addEventListener("mousemove", (e) => {

        const rect = image.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        image.style.transform = `
        scale(1.08)
        translate(
            ${(x - 0.5) * 15}px,
            ${(y - 0.5) * 15}px
        )
        `;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// =========================
// LOADED EFFECT
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});