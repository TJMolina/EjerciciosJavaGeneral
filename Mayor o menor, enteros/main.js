function mostrar(){
    var text =parseInt( document.getElementById('text').value);
    var p = document.getElementById('p');
    
    if(text<15){
        p.innerHTML="Infantil";
    }
    else if(text<20){
        p.innerHTML="Cadete";
    }
    else if(text<30){
        p.innerHTML="Juvenil";
    }
    else if(text>30){
        p.innerHTML="Veterano";
    }
}