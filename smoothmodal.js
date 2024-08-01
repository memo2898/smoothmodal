console.log("smooth modal run...")

function smooth_modal_create(){
    console.log("smooth modal create...")
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("smooth-modal");
    var btnAbrir = document.getElementById("btn-abrir-modal");
    var btnCerrar = document.getElementById("btn-cerrar-modal");

    btnAbrir.onclick = function() {
        modal.style.display = "block";
    }

    btnCerrar.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
