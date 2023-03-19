let per = document.getElementById("personaje");
let clickX;
let clickY;
let isMoving = false;

document.addEventListener("mousedown",(event)=>{
    clickX = event.clientX;
    clickY = event.clientY;  
    isMoving = true;
    moverPersonaje();
});

document.addEventListener("mouseup",()=>{
    isMoving=false;
});

function moverPersonaje(){
    //obtener posicion actual del personaje.
    let deltaX = clickX -  per.offsetLeft;
    let deltaY = clickY -  per.offsetTop;
    
    //calcular la distancia entre el personaje y el click
    let distancia = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

    if(distancia>5 &&isMoving){
        let speed = 5;
        //normalizar la diferencia para obtener un vector de direccion.
        let direccionX = speed * (deltaX / distancia);
        let direccionY = speed * (deltaY / distancia);

        //calcular el angulo entre el personaje y el mouse
        const characterX = per.offsetLeft + (per.offsetWidth / 2);
        const characterY = per.offsetTop + (per.offsetHeight / 2);
        const mouseX = clickX;
        const mouseY = clickY;
        const angle = Math.atan2(mouseY - characterY, mouseX - characterX) * (180 / Math.PI);

        //girar al personaje hacia el angulo del mouse
        per.style.transform = `rotate(${angle}deg)`;

        //mover al personaje en la direccion del click
        per.style.left = per.offsetLeft+direccionX+"px";
        per.style.top = per.offsetTop+direccionY+"px";

        //llamar a esta funcion en cada frame
        requestAnimationFrame(moverPersonaje);
    }
}
