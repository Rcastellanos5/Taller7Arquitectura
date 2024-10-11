
function Guardar (){
let dni="";
let nombre="";
    const myHeaders =new Headers ();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();     
    
    let raw=JSON.stringify({
        "documentodelestudiante":document.getElementById("dni").value,
        "nombre":document.getElementById("nombre").value
    });
    let requestOptions ={
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"  
    };
    fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";

    for (let vc in transformado){
        elemento = elemento + "<br>Documento de identidad: " + transformado[vc].documentodelestudiante;
        elemento = elemento + "<br>Nombres: " + transformado[vc].nombre +"<br>" ;
    }
       
    document.getElementById("rta").innerHTML = elemento;
};
    function listar(){
        event.preventDefault();
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
        .then((response) =>
          response.text())
        .then((result) =>
          cargar(result))
        .catch((error) =>
          console.error(error));
  
  }
  function respuesta_actualizar(resultado){
    document.getElementById("rtaA").innerHTML = resultado;
}

function actualizar(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
      "nombre": document.getElementById("nombreA").value,
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    let elid=document.getElementById("dniA").value;
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>response.text())
      .then((result) => respuesta_actualizar(result))
      .catch((error) =>
 console.error(error));
}
function cargarLE(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>Documento de identidad: " + transformado.documentodeidentidadestudiante;
  elemento = elemento + "<br>Nombres: " + transformado.nombrescompletosdelestudiante;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaLE").innerHTML = salida;
} 

function listar_estudiante(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    let elid = document.getElementById("document").value;
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargarEE(result))
      .catch((error) =>
        console.error(error));
}        
function cargarEE(resultado){
    let transformado = JSON.parse(resultado);
    document.getElementById("rtaEE").innerHTML = transformado.respuesta;
}
function eliminar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("documento").value;
  fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
    .then((response) => 
      response.text())
    .then((result) =>
      cargarEE(result))   
    .catch((error) =>
      console.error(error));
}
function Guardarcurso(){
  let idcur="";
  let nomcur="";
      const myHeaders =new Headers ();
      myHeaders.append("Content-Type", "application/json");
      event.preventDefault();     
      
      let raw=JSON.stringify({
          "codigodelcurso":document.getElementById("idcur").value,
          "nombredelcurso":document.getElementById("nomcur").value
      });
      let requestOptions ={
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"  
      };
      fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    }
    function cargarcur(resultado){
      let transformado = JSON.parse(resultado);
      var salida="";
      var elemento="";
  
      for (let vc in transformado){
          elemento = elemento + "<br>Codigo del curso: " + transformado[vc].codigodelcurso ;
           elemento = elemento + "<br>Nombre del curos: " + transformado[vc].nombredelcurso  ;
      }
         
      document.getElementById("rta").innerHTML = elemento;
  };
      function listar_cursos(){
          event.preventDefault();
          const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          fetch("http://localhost:8888/.netlify/functions/cursos/", requestOptions)
          .then((response) =>
            response.text())
          .then((result) =>
            cargar(result))
          .catch((error) =>
            console.error(error));
    
    }
    function respuesta_actualizarcur(resultado){
      document.getElementById("rtaA").innerHTML = resultado;
  }
  
function actualizar_curso(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "nomcur": document.getElementById("nomcurA").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("idcurA").value;
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) =>response.text())
    .then((result) => respuesta_actualizar(result))
    .catch((error) =>
console.error(error));
}
function cargarLE(resultado){
let transformado = JSON.parse(resultado);
var salida="";
var elemento="";
elemento = elemento + "<br>Codigo del curos: " + transformado.codigodelcurso;
elemento = elemento + "<br>Nombre del curos: " + transformado.nombredelcurso;
salida = salida  + elemento + "<br><br>";
document.getElementById("rtaLE").innerHTML = salida;
} 
function buscar_curso (){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();
  let elid = document.getElementById("idcur").value;
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEE(result))
    .catch((error) =>
      console.error(error));
}        
function cargarEE(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaEE").innerHTML = transformado.respuesta;
}
function eliminar_curso(){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
event.preventDefault();

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};
let elid=document.getElementById("documento").value;
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) => 
      response.text())
    .then((result) =>
      cargarEE(result))   
    .catch((error) =>
      console.error(error));
}
function Guardarseccion(){
  let fe="";
  let hi="";
  let hf="";
      const myHeaders =new Headers ();
      myHeaders.append("Content-Type", "application/json");
      event.preventDefault();     
      
      let raw=JSON.stringify({
          "fecha":document.getElementById("fe").value,
          "horadeinicio":document.getElementById("hi").value,
          "horafinal":document.getElementById("hf").value,
      });
      let requestOptions ={
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"  
      };
      fetch("http://localhost:8888/.netlify/functions/secciones", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    }
    function cargarsec(resultado){
      let transformado = JSON.parse(resultado);
      var salida="";
      var elemento="";
  
      for (let vc in transformado){
          elemento = elemento + "<br>fecha: " + transformado[vc].fecha ;
           elemento = elemento + "<br>hora de inicio: " + transformado[vc].horadeinicio ;
           elemento=elemento+"<br>hora final; "+transformado[vc].horafinal
      }
         
      document.getElementById("rta").innerHTML = elemento;
  };
      function listar_secciones (){
          event.preventDefault();
          const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          fetch("http://localhost:8888/.netlify/functions/secciones/", requestOptions)
          .then((response) =>
            response.text())
          .then((result) =>
            cargar(result))
          .catch((error) =>
            console.error(error));
    
    }
    function respuesta_actualizarsec(resultado){
      document.getElementById("rtaA").innerHTML = resultado;
  }
  
function actualizar_secciones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "fe": document.getElementById("feA").value,
    "hi": document.getElementById("hiA").value,
    "hf": document.getElementById("hf").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("idseA").value;
  fetch("http://localhost:8888/.netlify/functions/secciones/"+elid, requestOptions)
    .then((response) =>response.text())
    .then((result) => respuesta_actualizar(result))
    .catch((error) =>
console.error(error));
}
function cargarLE(resultado){
let transformado = JSON.parse(resultado);
var salida="";
var elemento="";
elemento = elemento + "<br>Fecha: " + transformado.fecha;
elemento = elemento + "<br>Hora inicial: " + transformado.horadeinicio;
elemento=elemento+ "<br>Hora final"+transformado.horafinal;
salida = salida  + elemento + "<br><br>";
document.getElementById("rtaLE").innerHTML = salida;
} 
function buscar_seccion (){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();
  let elid = document.getElementById("idse").value;
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("http://localhost:8888/.netlify/functions/secciones/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEE(result))
    .catch((error) =>
      console.error(error));
}        
function cargarEE(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaEE").innerHTML = transformado.respuesta;
}
function eliminar_estudiante(){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
event.preventDefault();

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
}
let elid=document.getElementById("idse").value;
fetch("http://localhost:8888/.netlify/functions/secciones/"+elid, requestOptions)
  .then((response) => 
    response.text())
  .then((result) =>
    cargarEE(result))   
  .catch((error) =>
    console.error(error));
}
