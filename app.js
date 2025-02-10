// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Array declarado
const amigos = [];

//Funcion que permite agregar los nombres al array y a su vez indica un alert en caso de que se intente ingresar el campo vacio
function agregarAmigo() {
    var nombre_amigo=document.getElementById("amigo").value;
    var count = amigos.push
    if(nombre_amigo==""){
        alert("El campo no puede estar vacio");
    }

    amigos.push(nombre_amigo);

    console.log(amigos);

//Permite limpiar el input del formulario despues de guardar los elementos en el array
function limpiar(){

   document.getElementById("amigo").value="";
    }

   

    limpiar();
}

