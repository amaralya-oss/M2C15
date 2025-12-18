// Movimiento del ícono del carrito al hacer clic
document.addEventListener("DOMContentLoaded", function() {
    const carritoIcon = document.getElementById('carrito-icon');

    carritoIcon.onmouseover = () => {
        carritoIcon.style.transform = "scale(1.3)";
        carritoIcon.style.color = "#FF5733";
        carritoIcon.style.transition = "0.3s";
    };

    carritoIcon.onmouseout = () => {
        carritoIcon.style.transform = "scale(1)";
        carritoIcon.style.color = "#fff"; // ajusta según el color original de tu navbar
    };
});

// Funcionalidad de favoritos con jQuery
$(document).ready(function() {
    let carritoCantidad = 0; // contador inicial

    // FAVORITOS
    $(".btn-fav").click(function() {
        const card = $(this).closest(".product-card");
        const nombre = card.data("producto");

        card.toggleClass("favorito");
        $(this).text(card.hasClass("favorito") ? "💖 Favorito" : "❤ Favorito");

        let mensaje = card.find(".toast-message");
        if (mensaje.length === 0) {
            mensaje = $('<div class="toast-message"></div>');
            card.append(mensaje);
        }

        mensaje.text(card.hasClass("favorito")
            ? `"${nombre}" agregado a favoritos`
            : `"${nombre}" eliminado de favoritos`)
            .fadeIn(300).delay(1000).fadeOut(500);
    });

    // CARRITO
    $(".btn-cart").click(function() {
        const card = $(this).closest(".product-card");
        const nombre = card.data("producto");

        // Actualizar contador
        carritoCantidad++;
        $("#carrito-count").text(carritoCantidad);

        // Mensaje temporal
        let mensaje = card.find(".toast-message");
        if (mensaje.length === 0) {
            mensaje = $('<div class="toast-message"></div>');
            card.append(mensaje);
        }

        mensaje.text(`"${nombre}" agregado al carrito`)
            .fadeIn(300).delay(1000).fadeOut(500);
    });
});
