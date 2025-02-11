// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Array declarado
const amigos = [];

//Funcion que permite agregar los nombres al array y a su vez indica un alert en caso de que se intente ingresar el campo vacio
function agregarAmigo() {
    var nombre_amigo=document.getElementById("amigo").value;
   
    if(nombre_amigo==""){
        alert("El campo no puede estar vacio");
        return;
    }

    amigos.push(nombre_amigo);

    console.log(amigos);

//Permite limpiar el input del formulario despues de guardar los elementos en el array y selecciona automáticamente el cuadro de texto
function limpiar(){

   document.getElementById("amigo").value="";
   document.getElementById("amigo").focus();

    }

//Actualiza la lista de nombres y limpia la lista antes de agregar un nuevo elemento, el bucle for each crea la lista y recorre el arreglo para agregarlos
function actualizarLista(){

    const listaAmigoul = document.getElementById("listaAmigos");
    listaAmigoul.innerHTML = "";

    amigos.forEach(amigo =>{
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoul.appendChild(li);
    })
} 

    actualizarLista();

    limpiar();
}

