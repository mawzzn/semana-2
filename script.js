document.addEventListener("DOMContentLoaded", function () {
    function cargarContenido(id, archivo) {
        let contenido = document.getElementById(id);
        
        // Aplica una animación de desvanecimiento antes de cargar nuevo contenido
        contenido.style.opacity = "0";
        
        fetch(archivo)
            .then(response => response.text())
            .then(data => {
                setTimeout(() => {
                    contenido.innerHTML = data;
                    contenido.style.opacity = "1"; // Muestra el contenido con efecto suave
                }, 300); // Tiempo para el fade-out antes de reemplazar contenido
            })
            .catch(error => console.error(`Error cargando ${archivo}:`, error));
    }

    // Cargar encabezado, navegación y pie de página al inicio
    cargarContenido("header", "header.html");
    cargarContenido("nav", "nav.html");
    cargarContenido("footer", "footer.html");
    cargarContenido("contenido", "inicio.html"); // Carga INICIO por defecto


    // Evento para manejar clicks en el menú y cargar secciones sin recargar
    document.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && e.target.dataset.page) {
            e.preventDefault();
            cargarContenido("contenido", e.target.dataset.page);
        }
    });
});
function toggleAccordion(row) {
    // Encuentra la siguiente fila, que contiene el contenido del acordeón
    var nextRow = row.nextElementSibling;

    // Si la fila siguiente está visible, la ocultamos
    if (nextRow.style.display === "table-row") {
        nextRow.style.display = "none";
    } else {
        // Si está oculta, la mostramos
        nextRow.style.display = "table-row";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".collapsible").forEach(row => {
        row.addEventListener("click", function () {
            let content = this.nextElementSibling;
            content.style.display = (content.style.display === "table-row") ? "none" : "table-row";
        });
        row.addEventListener("mouseleave", function () {
            let content = this.nextElementSibling;
            content.style.display = "none";
    });
});

});

