

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("smooth-modal");
    var modalContent = modal.querySelector('.smooth_modal');
    var btnAbrir = document.getElementById("btn-abrir-modal");
    var btnCerrar = document.getElementById("btn-cerrar-modal");

    btnAbrir.onclick = function() {
        modal.classList.remove('fade-out');
        modalContent.classList.remove('fade-out');
        modal.style.display = "block";
        modal.classList.add('fade-in');
        modalContent.classList.add('fade-in');
    }

    function cerrarModal() {
        modal.classList.remove('fade-in');
        modalContent.classList.remove('fade-in');
        modal.classList.add('fade-out');
        modalContent.classList.add('fade-out');
        setTimeout(function() {
            modal.style.display = "none";
        }, 90); // Tiempo de la animación 
    }

    btnCerrar.onclick = function() {
        cerrarModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }
});
