// Obtener el elemento por ID
let parrafo = document.getElementById(miParrafo);
console.log(parrafo.textContent);

let boton = document.getElementById("miBotton")
boton.addEventListener("click", function(){
    parrafo.textContent = "Texto actualizado";
    console.log(parrafo.textContent);
})