/*==========================
        NAVBAR SCROLL
==========================*/



/*==========================
    ANIMACIÓN DE TARJETAS
==========================*/

const cards = document.querySelectorAll(".service-card, .benefit");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.classList.add("hidden");
    observer.observe(card);

});


/*==========================
        BOTONES
==========================*/

const botonesSolicitud = document.querySelectorAll(".btn-solicitar");


botonesSolicitud.forEach(boton => {

    boton.addEventListener("click",()=>{
        const servicio = boton.dataset.service;

        window.location.href =
        `../Formularios/SolicitudesServicios.html?categoria=${servicio}`;

    });


});

/*==========================
      EFECTO EN ÍCONOS
==========================*/

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "rotate(10deg) scale(1.12)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "rotate(0deg) scale(1)";

    });

});

/* ==========================
   CARGAR CATEGORÍA DESDE URL
========================== */

document.addEventListener("DOMContentLoaded",()=>{


    const parametros = new URLSearchParams(
        window.location.search
    );


    const categoriaURL = parametros.get("categoria");


    const categoriaSelect = document.getElementById("categoria");


    if(categoriaURL && categoriaSelect){


        categoriaSelect.value = categoriaURL;


        categoriaSelect.dispatchEvent(
            new Event("change")
        );


    }


});

console.log(categoriaURL);