function enviar() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let pais = document.getElementById("pais").value
    let posicion = document.getElementById("posicion").value

    if (posicion == 3 ){
        document.getElementById("mostrar").innerHTML = nombre
        document.getElementById("mostrar2").innerHTML = apellido
        document.getElementById("mostrar3").innerHTML = edad
        document.getElementById("mostrar4").innerHTML = pais
    }
    if (posicion == 1 ){
    document.getElementById("mostrar5").innerHTML = nombre
    document.getElementById("mostrar6").innerHTML = apellido
    document.getElementById("mostrar7").innerHTML = edad
    document.getElementById("mostrar8").innerHTML = pais
    }
    if (posicion == 2 ){
        document.getElementById("mostrar9").innerHTML = nombre
        document.getElementById("mostrar10").innerHTML = apellido
        document.getElementById("mostrar11").innerHTML = edad
        document.getElementById("mostrar12").innerHTML = pais
    }
}