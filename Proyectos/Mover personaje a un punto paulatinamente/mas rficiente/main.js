let per = document.getElementById("personaje");
let clickX = 0;
let clickY = 0;

function moverPersonaje(){
    //obtener posicion actual del personaje.
    let deltaX = clickX -  per.offsetLeft;
    let deltaY = clickY -  per.offsetTop;
    
    //calcular la distancia entre el personaje y el click
    let distancia = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

    if(distancia>5){
        let speed = 5;
        //normalizar la diferencia para obtener un vector de direccion.
        let direccionX = speed * (deltaX / distancia);
        let direccionY = speed * (deltaY / distancia);

        //mover al personaje en la direccion del click
        per.style.left = per.offsetLeft+direccionX+"px";
        per.style.top = per.offsetTop+direccionY+"px";
        requestAnimationFrame(moverPersonaje);//repetir hasta llegar al punto
    }
    else{
        per.style.left = clickX+"px";
        per.style.top = clickY+"px";
    }
}

function onClick(event){
    //obtener la posicion del click
    clickX = event.clientX;
    clickY = event.clientY;    
    requestAnimationFrame(moverPersonaje);
}
document.addEventListener("click",onClick);