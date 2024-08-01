const btn1 = document.querySelector("#btn-abrir-modal");
const btn2 = document.querySelector("#btn-abrir-modal2");

btn1.addEventListener("click",()=>{
    //1. Crear modal.
    const idModal = "34"
    const headerContent =`<h1>Titulo del modal ${idModal}</h2>`
    const bodyContent =`<p>Contenido del modal${idModal}</p>`
    const footerContent =`<p>Contenido del footer${idModal}</p>`
    smooth_modal_create(idModal,headerContent, bodyContent, footerContent)
    //2. Abrir modal.
    smooth_modal_open(idModal)
    //3. Cerrar modal.
    //smooth_modal_close(idModal)
 


})
btn2.addEventListener("click",()=>{
    //1. Crear modal.
    const idModal = "3shsj"
    const headerContent =`<h1>Titulo del modal ${idModal}</h2>`
    const bodyContent =`<p>Contenido del modal${idModal}</p>`
    const footerContent =`<p>Contenido del footer${idModal}</p>`
    smooth_modal_create(idModal,headerContent, bodyContent, footerContent)
    //2. Abrir modal.
    smooth_modal_open(idModal)
    //3. Cerrar modal.

    let contador = 0;
    const intervalo = setInterval(()=>{
        contador++;
        console.log(contador)
        if(contador == 4){
            smooth_modal_close(idModal)
            clearInterval(intervalo)
        }
    },1000)


})