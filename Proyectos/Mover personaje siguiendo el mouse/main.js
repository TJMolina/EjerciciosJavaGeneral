let per = document.getElementById("personaje");

document.addEventListener("mouseover",function(event){
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    per.style.left = mouseX-per.offsetWidth/2+"px";
    per.style.top = mouseY-per.offsetHeight/2+"px";
})