function op1(){
    var t1 =parseInt( document.getElementById('t1').value);
    var t2 =parseInt( document.getElementById('t2').value);
var t3 =parseInt( document.getElementById('t3').value);
    var p = document.getElementById('p');
    var p2 = document.getElementById('p2');
    var tot = t1+t2+t3;
    
    if(tot>0){
        p.innerHTML="Total a pagar: "+tot;
        p2.innerHTML="Con descuento: "+(tot-tot*0.15);
    }
    
}


function op2(){
    var t1 =parseInt( document.getElementById('t1').value);
    var t2 =parseInt( document.getElementById('t2').value);
var t3 =parseInt( document.getElementById('t3').value);
    var p = document.getElementById('p');
    var p2 = document.getElementById('p2');
    var tot = t1+t2+t3;
    
    if(tot>0){
        p.innerHTML="Total a pagar: "+tot;
        p2.innerHTML="Con descuento: "+(tot-tot*0.20);
    }
    
}

function op3(){
    var t1 =parseInt( document.getElementById('t1').value);
    var t2 =parseInt( document.getElementById('t2').value);
var t3 =parseInt( document.getElementById('t3').value);
    var p = document.getElementById('p');
    var p2 = document.getElementById('p2');
    var tot = t1+t2+t3;
    
    if(tot>0){
        p.innerHTML="Total a pagar: "+tot;
        p2.innerHTML="Con descuento: "+(tot-tot*0.25);
    }
    
}

