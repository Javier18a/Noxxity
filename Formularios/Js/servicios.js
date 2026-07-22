/* ==========================
   SERVICIOS NOXXITY
========================== */


const servicios = {

    desarrollo: [

        "Landing Page",
        "Página Web Empresarial",
        "Tienda Online (E-commerce)",
        "Sistema Web Personalizado",
        "Portafolio Profesional",
        "Blog o Sitio Informativo",
        "Mantenimiento Web",
        "Rediseño de Sitio Web",
        "Optimización Web",
        "Integración con Firebase",
        "Integración de Formularios",
        "Panel de Administración",
        "Hosting y Dominio",
        "Otro"

    ],


    diseno: [

        "Diseño de Logotipo",
        "Identidad Corporativa",
        "Manual de Marca",
        "Tarjetas de Presentación",
        "Banners Publicitarios",
        "Publicaciones para Redes Sociales",
        "Flyers",
        "Presentaciones Profesionales",
        "Mockups",
        "Otro"

    ],


    soporte: [

        "Diagnóstico de Equipos",
        "Mantenimiento Preventivo",
        "Mantenimiento Correctivo",
        "Instalación de Software",
        "Configuración de Equipos",
        "Eliminación de Virus",
        "Optimización del Sistema",
        "Respaldo de Información",
        "Configuración de Redes",
        "Asistencia Remota",
        "Otro"

    ],


    mentorias: [

        "Apoyo en Materias Clave",
        "Sesiones de Estudio Guiadas",
        "Tutoría Individual",
        "Tutoría Grupal",
        "Resolución de Dudas",
        "Preparación para Exámenes",
        "Acompañamiento Académico",
        "Nivelación Académica",
        "Otro"

    ],


    adaptacion: [

        "Orientación para Nuevo Ingreso",
        "Adaptación Universitaria",
        "Acompañamiento Inicial",
        "Prevención del Abandono Escolar",
        "Plan de Integración Estudiantil",
        "Otro"

    ],


    academico: [

        "Talleres Formativos",
        "Charlas Académicas",
        "Técnicas de Estudio",
        "Competencias Digitales",
        "Competencias Profesionales",
        "Gestión del Tiempo",
        "Aprendizaje Colaborativo",
        "Habilidades Blandas",
        "Otro"

    ],


    emprendimiento: [

        "Incubadora de Proyectos",
        "Desarrollo de Ideas de Negocio",
        "Validación de Proyectos",
        "Publicación de Proyectos",
        "Mentoría para Emprendedores",
        "Metodologías Ágiles",
        "Scrum",
        "Kanban",
        "Planificación de Proyectos",
        "Otro"

    ],


    asesoria: [

        "Consultoría Tecnológica",
        "Planificación de Proyectos",
        "Transformación Digital",
        "Automatización de Procesos",
        "Selección de Tecnologías",
        "Arquitectura de Software",
        "Gestión de Proyectos",
        "Otro"

    ],


    plataforma: [

        "Red Académica Estudiantil",
        "Soporte Académico",
        "Gestión de Tickets",
        "Repositorio de Recursos",
        "Kits de Nivelación",
        "Ayuda con Plataforma",
        "Reporte de Errores",
        "Solicitud de Nuevas Funciones",
        "Otro"

    ],


    comunidad: [

        "Red de Mentores",
        "Participar como Mentor",
        "Networking Académico",
        "Ferias Universitarias",
        "Jornadas Académicas",
        "Eventos de Integración",
        "Foros de Discusión",
        "Otro"

    ],


    eventos: [

        "Conferencias",
        "Talleres Presenciales",
        "Talleres Virtuales",
        "Seminarios",
        "Bootcamps",
        "Webinars",
        "Hackatones",
        "Concursos Académicos",
        "Otro"

    ]

};

/* ==========================
   SELECT DINÁMICO
========================== */


const categoria = document.getElementById("categoria");
const servicio = document.getElementById("servicio");

categoria.addEventListener("change", () => {

    const seleccion = categoria.value;


    servicio.innerHTML = "";
    if (seleccion === "") {
        servicio.innerHTML = `
        <option>
            Primero seleccione una categoría
        </option>

        `;


        return;

    }

    servicio.innerHTML = `

    <option value="">
    Seleccione un servicio
    </option>

    `;

    servicios[seleccion].forEach(item => {
        const opcion = document.createElement("option");
        opcion.value = item;
        opcion.textContent = item;
        servicio.appendChild(opcion);

    });

});

/* ==========================
   ANIMACIÓN AL CAMBIAR
========================== */

servicio.addEventListener("change", () => {
    servicio.style.borderColor = "#008cff";
    setTimeout(() => {
        servicio.style.borderColor = "";
    }, 500);

});

const formulario = document.querySelector("form");
const modal = document.getElementById("modalConfirmacion");
const cerrar = document.getElementById("cerrarModal");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.classList.add("active");
    setTimeout(() => {
        formulario.submit();
    }, 2500);
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("active");

});

/* ==========================
   TIPO DE CLIENTE
========================== */

const tipoCliente = document.getElementById("tipoCliente");
const otroClienteContainer = document.getElementById("otroClienteContainer");
const otroCliente = document.getElementById("otroCliente");

tipoCliente.addEventListener("change", () => {

    if (tipoCliente.value === "Otro") {
        otroClienteContainer.style.display = "block";
        otroCliente.required = true;
    } else {
        otroClienteContainer.style.display = "none";
        otroCliente.required = false;
        otroCliente.value = "";
    }

});


/* ==========================
   OTRO SERVICIO
========================== */

const otroServicioContainer = document.getElementById("otroServicioContainer");
const otroServicio = document.getElementById("otroServicio");

servicio.addEventListener("change", () => {

    // Mostrar u ocultar el campo "Otro servicio"
    if (servicio.value === "Otro") {
        otroServicioContainer.style.display = "block";
        otroServicio.required = true;
    } else {
        otroServicioContainer.style.display = "none";
        otroServicio.required = false;
        otroServicio.value = "";
    }

});

categoria.addEventListener("change", () => {

    // Reiniciar el campo al cambiar de categoría
    otroServicioContainer.style.display = "none";
    otroServicio.required = false;
    otroServicio.value = "";

});


