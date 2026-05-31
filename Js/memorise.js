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

const revealItems = document.querySelectorAll(
    ".timeline-item, .memory-box, .experience-card"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealItems.forEach(item => {

        const rect = item.getBoundingClientRect();

        if(rect.top < triggerBottom){

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// GALLERY HOVER EFFECT
// =========================

const memoryBoxes = document.querySelectorAll(".memory-box");

memoryBoxes.forEach(box => {

    box.addEventListener("mousemove", (e) => {

        const rect = box.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        box.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(56,189,248,0.15),
            rgba(255,255,255,0.02)
        )
        `;

    });

    box.addEventListener("mouseleave", () => {

        box.style.background = "";

    });

});

// =========================
// TIMELINE IMAGE EFFECT
// =========================

const timelineImages = document.querySelectorAll(".timeline-image img");

timelineImages.forEach(image => {

    image.addEventListener("mousemove", (e) => {

        const rect = image.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        image.style.transform = `
        scale(1.08)
        translate(
            ${(x - 0.5) * 20}px,
            ${(y - 0.5) * 20}px
        )
        `;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// =========================
// SMOOTH APPEAR
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================
// MODAL GALERIA
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const boxes = document.querySelectorAll(".memory-box");

    const modal = document.querySelector(".gallery-modal");

    const galleryView = document.querySelector(".gallery-view");

    const closeBtn = document.querySelector(".close-gallery");

    // =========================
    // IMAGENES
    // =========================

    const galleries = {

        team: [
            "../Src/imgs/ft1.jpeg",
            "../Src/imgs/ft2.jpeg",
            "../Src/imgs/ft3.jpeg",
            "../Src/imgs/ft6.jpeg",
            "../Src/imgs/ft9.jpeg",
            "../Src/imgs/ft11.jpeg",
            "../Src/imgs/ft12.jpeg",
            "../Src/imgs/ft13.jpeg",
            "../Src/imgs/BorealLabs-Noxxity.jpeg"
        ],

        development: [
            "../Src/imgs/Zentryx.jpeg"
        ],

        events: [
            "../Src/imgs/ft4.jpeg",
            "../Src/imgs/ft5.jpeg",
            "../Src/imgs/ft7.jpeg",
            "../Src/imgs/ft8.jpeg",
            "../Src/imgs/ft10.jpeg"
        ],

        // community: [
        //     "img/community.jpg",
        //     "img/community2.jpg",
        //     "img/community3.jpg"
        // ],

        // ideas: [
        //     "img/project.jpg",
        //     "img/project2.jpg",
        //     "img/project3.jpg"
        // ]

    };

    // =========================
    // ABRIR MODAL
    // =========================

    boxes.forEach(box => {

        box.addEventListener("click", () => {

            const category = box.dataset.gallery;

            if(!galleries[category]) return;

            galleryView.innerHTML = "";

            galleries[category].forEach(src => {

                const img = document.createElement("img");

                img.src = src;

                galleryView.appendChild(img);

            });

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    // =========================
    // CERRAR MODAL
    // =========================

    closeBtn.addEventListener("click", () => {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    });

    // =========================
    // CLICK FUERA
    // =========================

    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("active");

            document.body.style.overflow = "auto";

        }

    });

});