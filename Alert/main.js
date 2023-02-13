let formulario = document.getElementById('formulario');
//swal('Titulo','Contenido','error');
//swal("Bien hecho","Exito",'success');
//swal("Bien hecho","Exito",'error');
/*
swal("Continuar",{
    buttons: ["Ok","No"]
});*/
/*
https://sweetalert.js.org/guides/

swal ( " Haga clic en el botón o fuera del modal. " )
. entonces ( ( valor ) =>  { 
  swal ( ` El valor devuelto es:  ${ valor } ` ) ;
} ) ;

swal({
    title: 'Encabezado',
    text: 'Contenido',
    icon: 'success'
})

swal ( " ¿Estás seguro de que quieres hacer esto? " , { 
  botones : [ " ¡Oh, noez! " , " Aww yiss! " ] ,  
} ) ;




swal("User name:", {
    content: "input",
    })
    .then((value) => {

    swal("Record Time: ",{
        content: "input",
    })
    .then((value2)=>{
        swal(`You typed: ${value} and ${value2}`);
    })

    });



*/

formulario.addEventListener('submit', function(e){
    e.preventDefault();//evita ejecutar lo que es por defecto, procesar el formulario

    var datos = new FormData(formulario);


    fetch('subirData.php',{//enviar datos al php
        method: 'POST',
        body: datos
    })
    .then(res=>res.json())//recise la respuesta en json
    .then(data =>{
        console.log(data);
    })
    


});


