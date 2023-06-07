let form = document.createElement("form");
let contra = document.createElement("input");
let ciudad = document.createElement("select");
let merlo = document.createElement("option");
let padua = document.createElement("option");
let ituzaingo = document.createElement("option");
let castelar = document.createElement("option");
let nombre = document.createElement("input");
let enviar = document.createElement("input");

form.name = "usuario"
contra.name = "contraseña"
ciudad.name = "ciudad"
nombre.name = "nombre"
enviar.name = "enviar"

nombre.type = "text";
contra.type = "password";
enviar.type = "submit"

nombre.required = true;
contra.required = true;

merlo.innerHTML = "Merlo"
ituzaingo.innerHTML = "ituzaingo"
padua.innerHTML = "Padua"
castelar.innerHTML = "Castelar"

ciudad.appendChild(merlo)
ciudad.appendChild(padua)
ciudad.appendChild(ituzaingo)
ciudad.appendChild(castelar)

form.method = "post"
form.noValidate = true;
form.setAttribute("action", "https://example.com/registro")

form.appendChild(nombre)
form.appendChild(contra)
form.appendChild(ciudad)
form.appendChild(enviar)

document.body.appendChild(form);

form.onsubmit = function(e){
    if(!form.reportValidity())
    {
        let nomm = nombre.validationMessage;
        let contraa = contra.validationMessage;
        if(nomm||contraa){
            if(nomm)alert("Completa el nombre y apellido")
            if(contraa)alert("Completa la contraseña correctamente")
            e.preventDefault();
        }
    }
}