
function smooth_modal_create(idModal, headerContent, bodyContent, footerContent) {
    const body = document.querySelector("body");

    const modalContainer = document.createElement("div");
    modalContainer.classList.add("smooth_modal_cont");
    modalContainer.classList.add("smooth-modal-default");
    const id = `smooth-modal-${idModal}`
    const idCerrarModal = `btn-cerrar-modal-${idModal}`
    modalContainer.id = id

    // Verificar que exista primero:
    const modalVerificar = document.querySelector(`#${id}`);

    if (!modalVerificar) {
        modalContainer.innerHTML = `
            <div class="smooth_modal" id="smoothmodal-window-${id}">
                

                <!--Header start-->
                    <div class="cont_header_smooth_modal">
                        <div class="cont_title_header_smooth_modal">
                            ${headerContent}
                        </div>
                        <div class="cont_btn_close_header_smooth_modal">
                            <span class="smooth_modal_close" id="${idCerrarModal}">&times;</span>
                        </div>
                    
                    </div>
                <!--Header end-->

                <!--Body start-->
                    <div class="cont_body_smooth_modal">
                        ${bodyContent}
                    </div>
                <!--Body end-->

                <!--Footer start-->
                    <div class="cont_footer_smooth_modal">
                        ${footerContent}
                    </div>
                <!--Footer end-->
            </div>
        `

        // Agregar el modal después del último hijo del body
        body.appendChild(modalContainer);

        // Agregar eventos
        modalContainer.addEventListener("click", function(event) {
            if (event.target === modalContainer) {
                cerrarModalAction(modalContainer)
            }
        });

        const btnCerrar = modalContainer.querySelector(`#${idCerrarModal}`);
        btnCerrar.addEventListener("click", () => {
            cerrarModalAction(modalContainer)
        })
    }
}

function smooth_modal_open(idModal){
   
    var modal = document.getElementById(`smooth-modal-${idModal}`);
    var modalContent = modal.querySelector('.smooth_modal');

    modal.classList.remove('fade-out');
    modalContent.classList.remove('fade-out');
    modal.style.display = "block";
    modal.classList.add('fade-in');
    modalContent.classList.add('fade-in');
}


function smooth_modal_close(idModal){
    
    var modal = document.getElementById(`smooth-modal-${idModal}`);
    cerrarModalAction(modal)
}



function cerrarModalAction(modal){
   
    const modalContent = modal.querySelector('.smooth_modal');
    
    modal.classList.remove('fade-in');
    modalContent.classList.remove('fade-in');
    modal.classList.add('fade-out');
    modalContent.classList.add('fade-out');
    setTimeout(function() {
        modal.style.display = "none";
    }, 90); // Tiempo de la animación 
}