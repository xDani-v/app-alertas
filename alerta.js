// alerta.js
function mostrarAlerta(mensaje, color) {
    var alerta = document.getElementById('miAlerta');
    alerta.innerHTML = mensaje + '<span class="cerrar" onclick="cerrarAlerta()">&times;</span>';

    // Configurar el color de fondo de la alerta
    alerta.style.backgroundColor = color;

    // Añadir la clase 'visible' para mostrar la alerta con transición
    alerta.classList.add('visible');

    // Después de 1 segundo, quitar la clase 'visible' para ocultar la alerta con transición
    setTimeout(function () {
        alerta.classList.remove('visible');
    }, 1000);
}

function cerrarAlerta() {
    document.getElementById('miAlerta').classList.remove('visible');
}
