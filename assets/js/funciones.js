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

const botonesFiltro = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;

        botonesFiltro.forEach((item) => {
            item.classList.remove("bg-blue-700", "text-white");
            item.classList.add("bg-white", "text-blue-700", "shadow");
        });

        boton.classList.remove("bg-white", "text-blue-700", "shadow");
        boton.classList.add("bg-blue-700", "text-white");

        productos.forEach((producto) => {
            const mostrar = categoria === "todos" || producto.dataset.categoria === categoria;
            producto.classList.toggle("hidden", !mostrar);
        });
    });
});
