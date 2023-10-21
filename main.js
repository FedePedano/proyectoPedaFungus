let botonEl=document.querySelector('.contenedor_boton');
let contenedorNav=document.querySelector('.nav_container');

botonEl.addEventListener('click',()=>{
    let siguienteEl=botonEl.nextElementSibling;

    while(siguienteEl){
        if(siguienteEl.tagName==='UL'){
            console.log(`Encontre al ul ${siguienteEl}`);
            siguienteEl.classList.toggle('arrow');
            contenedorNav.classList.toggle('arrow2');
            break;

        }
        siguienteEl=siguienteEl.nextElementSibling;
    }

});