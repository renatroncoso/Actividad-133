function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let camposVacios = [];

    if (nombre === "") {
        camposVacios.push("Nombre");
    }

    if (correo === "") {
        camposVacios.push("Correo electrónico");
    }

    if (telefono === "") {
        camposVacios.push("Teléfono");
    }

    if (mensaje === "") {
        camposVacios.push("Mensaje");
    }

    if (camposVacios.length > 0) {
        alert("Los siguientes campos están vacíos:\n- " + camposVacios.join("\n- "));
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
