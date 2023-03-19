let per = document.getElementById("personaje");

document.addEventListener("click",function(event){
    //obtener posicion actual del personaje.
    let perX = per.offsetLeft;
    let perY = per.offsetTop;

    //obtener la posicion del click
    let clickX = event.clientX;
    let clickY = event.clientY;

    //calcular la diferencia entre la posicion del personaje y el click
    let deltaX = clickX - perX;
    let deltaY = clickY - perY;

    //calcular la distancia entre el personaje y el click
    let distancia = Math.sqrt(deltaX*deltaX+deltaY*deltaY);
    /*
        esto de arriba calcula da distancia diagonal entre el personaje y el 
        punto dado por el click. Para ello se utiliza la formula de distancia
        entre dos puntos en un plano cartesiano, que requiere la raiz cuadrada
        de la suma de los cuadrados(significa potenciados a 2) de las 
        diferencias (deltaX y deltaY) en las coordenadas x e y.
    */

    //normalizar la diferencia para obtener un vector de direccion.
    let direccionX = deltaX / distancia;
    let direccionY = deltaY / distancia;

    //mover al personaje en la direccion del click
    let speed = 50;
    per.style.left = perX+direccionX*speed+"px";
    per.style.top = perY+direccionY*speed+"px";

})