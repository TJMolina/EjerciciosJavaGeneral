let agregar = document.querySelector("#button");
let borrar = document.getElementsByClassName("borrar");

agregar.addEventListener("click",agregarItemALista);
for (boton of borrar) agregarEventoBorrar(boton);




function agregarEventoBorrar(boton){
    boton.addEventListener("click",()=>boton.parentNode.remove());
}

function agregarItemALista(){
    let inputTexto = document.getElementById("text");
    let texto = inputTexto.value+" ";
    
    let soloContieneEspacios = /^\s*$/.test(texto)
    if(soloContieneEspacios)return;

    inputTexto.value = '';

    const li = document.createElement("li")
    li.innerHTML = texto+`<input type="button" class="borrar" value="X">`;
    
    let lista = document.getElementById("idd")
    lista.appendChild(li);

    let ultimoBoton = lista.lastChild.querySelector(".borrar");
    agregarEventoBorrar(ultimoBoton);
}