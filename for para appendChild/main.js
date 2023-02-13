var body = document.getElementById('body');

for(var i=1;i<11;i++){
    var myp = document.createElement('p');
    
    myp.innerHTML = i;
    
    body.appendChild(myp);
}