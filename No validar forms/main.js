let form = document.querySelector("form");
let nom = document.getElementById("n")
let edad = document.getElementById("e")

form.onsubmit = function(){
    if(!form.reportValidity())
    {
        let nomm = nom.validationMessage;
        let edadd = edad.validationMessage;
        if(nomm)alert("Completa el nombre y apellido")
        else if(edadd)alert("Completa la edad correctamente")
        else form.submit()
    }
}