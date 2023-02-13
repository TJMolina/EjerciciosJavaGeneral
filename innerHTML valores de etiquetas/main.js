function sumar(){
    var n1 =parseInt(document.getElementById('n1').value);
            
            var n2 =parseInt(document.getElementById('n2').value);
            
            var n3 = document.getElementById('n3');
            
            n3.innerHTML = n1+n2;
          
}


function restar(){
        var n1 =parseInt(document.getElementById('n1').value);
            
            var n2 =parseInt(document.getElementById('n2').value);
            
            var n3 = document.getElementById('n3');
            
            n3.innerHTML = n1-n2;
          
}

function multiplicar(){
        var n1 =parseInt(document.getElementById('n1').value);
            
            var n2 =parseInt(document.getElementById('n2').value);
            
            var n3 = document.getElementById('n3');
            
            n3.innerHTML = n1*n2;
          
}

function dividir(){
        var n1 =parseInt(document.getElementById('n1').value);
            
            var n2 =parseInt(document.getElementById('n2').value);
            
            var n3 = document.getElementById('n3');
            
            if(n2!==0){
                n3.innerHTML = n1/n2;
            }
            
          
}
