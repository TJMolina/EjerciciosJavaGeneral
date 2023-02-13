function op1(){
    var t1 =parseInt( document.getElementById('t1').value);
    
    var t2 =parseInt( document.getElementById('t2').value);
    
    var p = document.getElementById('p');
    
    if(t1+1<t2){
        for(var i=t1+1;i<t2;i++){
           if(i%2==0){
     p.innerHTML=p.innerHTML+","+i;
           }
         
        }
    }
    
    
}


}
    
    
}


    
}


