var p = document.getElementById('body');

var myP=document.createElement('p');
myP.innerHTML="Creo un element";
//document.body.append(myP);
p.appendChild(myP);