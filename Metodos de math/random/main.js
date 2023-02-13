function op1(){
    var t1 =parseInt( document.getElementById('t1').value);
    
    var p1 = document.getElementById('p1');
    
    var p2 = document.getElementById('p2');
    
    var random = Math.floor(Math.random()*(10-1))+1;
    
    p1.innerHTML="Número random: "+random;


    if(random===t1){
        p2.innerHTML="Son iguales";
    } else p2.innerHTML="Son diferentes";
}


