document.querySelector('#boton').addEventListener('click',traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','tabla.json',true);//no funciona
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4&&this.status == 200){
            let datos = JSON.parse(this.responseText);
        }

    }

}




/*

//1. en una aplicacion web los datos JSON se reciben como una cadena

const cars = `
[
    {
        "modelo":"for mustang",
        "produccion":2010,
        "millaje":12000
    },
    {
        "modelo":"honda accord",
        "produccion":2011,
        "millaje":4560
    },
    {
        "modelo":"honda accord",
        "produccion":2016,
        "millaje":58200
    }
]
`;

console.log(typeof cars);

//2. para convertir la cadena en un objeto javascript usa el metodo parse

const jsonData = JSON.parse(cars);
console.log(typeof jsonData);

//3. despues se puede manipular como cualquier objeto

const carrosNuevos = jsonData.filter(
    (carro)=>carro.produccion > 2010 && carro.millaje < 30000
);

console.log(carrosNuevos);

//4 para convertir los datos en una cadena usa el metodo stringify

const newCars = JSON.stringify(carrosNuevos);
console.log(typeof newCars);

//modificar un archivo JSON (node)

//file system 


let data = fs.readFileSync('tabla.js');
console.log(data);

const carronuevo =
{
    modelo:'mini cooper',
    produccion: 2016,
    millaje: 58200
}

const newCar = JSON.stringify(carronuevo);

fs.writeFile('tabla.json',newCar,(error)=>{
    if(error)throw error;
    console.log('Informacion recibida');
});




/*[
    {
        "modelo":"for mustang",
        "produccion":2010,
        "millaje":12000
    },
    {
        "modelo":"honda accord",
        "produccion":2011,
        "millaje":4560
    },
    {
        "modelo":"honda accord",
        "produccion":2016,
        "millaje":58200
    }
] */
