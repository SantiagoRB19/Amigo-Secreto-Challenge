// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

let amigosSorteo = [];
let nombreAmigo ;
resultadoSorteo.innerHTML = '';


// Funciones

// Capturar valor
function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo)

    if (nombreAmigo == ""){
        alert("Por favor, ingrese un nombre")
    } else {
       amigosSorteo.push(nombreAmigo)
    }

    

    limpiarCelda();

    listaVisual();

   

};

// Limpiar caja

function limpiarCelda(){
    let valorCelda = document.querySelector('#amigo');
    valorCelda.value = '';
}

// Actualizar lista

function listaVisual(){

    let listaDeAmigos = document.querySelector('#listaAmigos');
    listaDeAmigos.innerHTML = '';

    for (let i = 0; i < amigosSorteo.length; i++){
        let listaSorteo = document.createElement('li');
        listaSorteo.textContent = (amigosSorteo[i]);
        listaDeAmigos.appendChild(listaSorteo);
    }
}

// Sortear amigos

function sortearAmigo(){

    

    if (amigosSorteo.length === 0){
        alert('No hay ningún nombre en la lista.')
    }

    let numAleatorio = Math.floor(Math.random()*amigosSorteo.length)

    console.log(numAleatorio);

    let resultadoSorteo = document.querySelector('#resultado');
    resultadoSorteo.innerHTML = `El amigo secreto es: ${amigosSorteo[numAleatorio]}` ;

    let listaDeAmigos = document.querySelector('#listaAmigos');
    listaDeAmigos.innerHTML = '';


}

agregarAmigo();
sortearAmigo();

