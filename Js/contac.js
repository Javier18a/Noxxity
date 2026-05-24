const form = document.getElementById("solicitudForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value;
    const contacto = document.getElementById("contacto").value;

    const destinatario = "noxxity.oficial@gmail.com";

    const asunto = `Solicitud de ${tipo}`;

    const mensaje = `
    Nombre: ${nombre}

    Correo: ${correo}

    Tipo: ${tipo}

    Descripción:
    ${descripcion}

    Contacto:
    ${contacto}
        `;

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
});