let nombre;
let sb;
let hExtra50=[];
let hExtra100=[];
let antiguedad;
let titulo;
let mSueldo;
let presencialidad;
let inasistencia;
let fac;
let viatico;
let habiles;
body = document.getElementById('body');
swal("Nombre:",
{
  content: "input",
})
.then((Nombre)=>
{
  return new Promise((resolve,reject)=>{resolve(nombre = Nombre);})
})

    .then(()=>
    {
      return new Promise((resolve,reject)=>
      {
        resolve(
          swal("Sueldo básico:",
          {
            content: "input",
          }).then((Sb)=>
              {
                sb = Sb
              })
          )
      }) 
    })



    .then(()=>
    {
      return new Promise((resolve,rejec)=>
      {
        resolve(
          swal("Agregar horas extra?:", 
          {
            content: "input",
          }).then((res)=>
            {
              if(siNo(res)){
                agregarHoraExtra();
              }else fase2();
            })
        )
      })
    })


function fase2(){

        swal('Cuantos años de antigüedad tiene?',
        {
          content: 'input',
        })
        .then(res2=>
          {
                antiguedad = res2;
          })

  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuanto cobra por el título?',
        {
          content: 'input',
        }).then(res3=>
          {
              titulo = res3;
          })
      )
    })
  })

  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuanto cobra por presencialidad?',
        {
          content:'input',
        }).then(res4=>
          {
              presencialidad = res4;
          })
        )
    })
  })
  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('De cuanto fue su máximo Sueldo?',
        {
          content:'input',
        })
        .then(res5=>
          {
              mSueldo = res5;
          })
        )
    })
  })

  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuantos días habiles hay?',
        {
          content:'input',
        })
        .then(res8=>
          {
              habiles = res8;
          })
      )
    })
  })

  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuantos días faltó?',
        {
          content:'input',
        })
        .then(res6=>
          {
              inasistencia = res6;
          })
      )
    })
  })

  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuantos Familiares A Cargo tiene?',
        {
          content:'input',
          })
          .then(res7=>
            {
                fac = res7;
            })
        )
    })
  })
  .then(()=>
  {
    return new Promise((resolve,rejec)=>
    {
      resolve(
        swal('Cuantos son los viáticos por día hábil?',
        {
          content:'input',
        })
        .then(res8=>
          {
              viatico = res8;
          })
      )
    })
  })
  .then(()=>resultado())
}

function agregarHoraExtra(){
  part1();
  let falla = false;
  function part1()
  {
    swal('Al 50% o 100%?',
    {
      content: "input",
    })
    .then(respuesta=>
      {
        part2(respuesta);
      })
    }
function part2(respuesta)
{
  if(respuesta=='50%')
  {
        swal('Cuantas horas?',
        {
          content: "input",
        })
        .then(hora=>
          {
              part3(50,hora)
          })//hora50
  }
  else if(respuesta=='100%')
  {
    swal('Cuantas horas?',
    {
      content: "input",
    })
    .then(hora=>
      {
        part3(100,hora);
      })//hora100
}

function part3(hor,hora)
{
  if(hor==50)
  {
    try
    {
      hExtra50.push(Number(hora));
    }
    catch(x)
    {
      falla=true;
    }
  }
  else{
    try
    {
      hExtra100.push(Number(hora));
    }
    catch
    {
      falla=true;
    }
  }
  part4();
}
}
      function part4(){
          if(!falla){
            swal('Agegar mas horas? Si/No',{
              content:'input',
            })
            .then(res=>{
              if(siNo(res)){
                agregarHoraExtra();
              }else fase2();
            })
          }
        }
}

      function siNo(res){
        if(res == "si" || res=="Si"||res=="sI"||res=="SI")
        return true;
        else return false;
      }

function resultado(){
  let ganaPorAntigue = Number((Number(sb)*(Number(antiguedad)*2))/100);
  let sbnh = Number(Number(sb) + Number(ganaPorAntigue) + Number(titulo));
  let ganaPorPresencialidad = 0;
  let pierdePorPresencialidad = 0;
  let CincuentaPorciento=0;
  let CienPorciento=0;
  let aCobrar=0;
  let totFac = Number((Number(sbnh)*Number(fac))/100);

  let tot50horas = calcinc();
  function calcinc(){
    let suma=0;
    hExtra50.forEach(hora=>{
      CincuentaPorciento+=hora;
      suma+=((sbnh/200)+((sbnh/200)*0.50))*hora;
    });
    return suma;
  }

  let tot100horas =  calcien();
  function calcien(){
    let suma=0;
    hExtra100.forEach(hora=>{
      CienPorciento+=hora;
      suma+=((sbnh/200)+(sbnh/200))*hora;
    });
    return suma;
  }
  let aportes=0;
  let siemprepresente = false;
  if(inasistencia>=1){
      pierdePorPresencialidad = (Number(sbnh)*Number(inasistencia))/Number(habiles);
    }else {
      ganaPorPresencialidad = Number(presencialidad)
      siemprepresente = true;
    };

 let sueldoBruto = Number(sbnh+tot100horas+tot50horas+ganaPorPresencialidad);
 
   aportes += calaport();
   function calaport(){
   let tot =0;
   tot+=Number(sueldoBruto)*0.11;
   tot+=Number(sueldoBruto)*0.03;
   tot+=Number(sueldoBruto)*0.03;
   tot+=Number(sueldoBruto)*0.04;
   return tot;
 }
  let totViaticos = Number(Number(viatico)*(Number(habiles) - Number(inasistencia)));
  aCobrar = Number((sueldoBruto-(aportes+totFac+pierdePorPresencialidad))+totViaticos);
  if(siemprepresente)aCobrar+=presencialidad;
  tabla = document.createElement('table');
 tabla.setAttribute("class","table");
  tabla.innerHTML=(`
  <thead>
    <tr>
      <th scope="col">Concepto</th>
      <th scope="col">Detalle</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Remuneracion con aporte</th>
      <th scope="col">Remuneracion sin aporte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Basico</td>
      <td>1</td>
      <td>${sb}</td>
      <td>-</td>
    </tr>

    <tr>
    <th scope="row">02</th>
    <td>Bruto</td>
    <td>1</td>
    <td>${sueldoBruto}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">03</th>
    <td>Horas extra al 50%</td>
    <td>${CincuentaPorciento}</td>
    <td>${tot50horas}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">04</th>
    <td>Horas extra al 100%</td>
    <td>${CienPorciento}</td>
    <td>${tot100horas}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">05</th>
    <td>Antiguedad</td>
    <td>${antiguedad}</td>
    <td>${ganaPorAntigue}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">06</th>
    <td>Titulo</td>
    <td>1</td>
    <td>${titulo}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">07</th>
    <td>Presencialidad</td>
    <td>1</td>
    <td>${ganaPorPresencialidad}</td>
    <td>-${pierdePorPresencialidad}</td>
    </tr>

    <tr>
    <th scope="row">08</th>
    <td>Maximo sueldo</td>
    <td>1</td>
    <td>${mSueldo}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">08.5</th>
    <td>SBNH</td>
    <td>1</td>
    <td>${sbnh}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">09</th>
    <td>Familiar a cargo</td>
    <td>${fac}</td>
    <td>-</td>
    <td>-${totFac}</td>
    </tr>

    <tr>
    <th scope="row">10</th>
    <td>Aportes</td>
    <td>4</td>
    <td>-</td>
    <td>-${aportes}</td>
    </tr>

    <tr>
    <th scope="row">11</th>
    <td>Total viaticos</td>
    <td>${habiles-inasistencia}</td>
    <td>${totViaticos}</td>
    <td>-</td>
    </tr>

    <tr>
    <th scope="row">12</th>
    <td>Total Total a cobrar</td>
    <td>$1</td>
    <td>${aCobrar}</td>
    <td>-</td>
    </tr>

  </tbody>
  `);
  body.append(tabla);
}
