// =========================
// MENU RESPONSIVE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =========================
// CERRAR MENU AL DAR CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =========================
// NAVBAR EFECTO SCROLL
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(5,8,22,0.9)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    }else{

        header.style.background = "rgba(5,8,22,0.5)";
        header.style.boxShadow = "none";

    }

});

// =========================
// ANIMACIONES AL SCROLL
// =========================

const revealElements = document.querySelectorAll(
    ".mini-card, .stat-box, .objective-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// EFECTO CONTADOR SUAVE
// =========================

const counters = document.querySelectorAll(".stat-box h2");

const animateCounter = (counter) => {

    const originalText = counter.dataset.target || counter.innerText;

    // Guardar el texto original
    counter.dataset.target = originalText;

    // Extraer numero
    const target = parseInt(originalText.replace(/\D/g, ""));

    // Si no hay numero, salir
    if(isNaN(target)) return;

    let current = 0;

    // Velocidad mas suave
    const increment = target / 120;

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.innerText = "+" + Math.floor(current);

            requestAnimationFrame(updateCounter);

        }else{

            // Restaurar formato original
            counter.innerText = originalText;

        }

    };

    updateCounter();

};

// =========================
// ACTIVAR AL HACER SCROLL
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});

// =========================
// PARALLAX SUAVE HERO
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    hero.style.backgroundPositionY = `${scroll * 0.5}px`;

});

// =========================
// HOVER DINAMICO CARDS
// =========================

const cards = document.querySelectorAll(
    ".mini-card, .objective-card, .stat-box"
);

cards.forEach(card => {

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