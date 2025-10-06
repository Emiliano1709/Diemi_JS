const fechaCasados = new Date("2025-10-04T20:00:00").getTime();

const actualizaContador = () => {
    const ahora = new Date().getTime();         //Fecha y hora actual
    const casados = fechaCasados - ahora; //Momento en que ya estamos casados

    //Aviso del templo
    //Aviso de los recién casados
    if (casados < 0) {
        document.getElementById("anuncio").innerHTML = "<p>Presiona el botón naranja de arriba para dejar un mensaje a los...</p>";
        document.getElementById("contador").innerHTML = "<h1>¡RECIEN CASADOS!</h1>";
        clearInterval(timer);
        return;
    }
};

const timer = setInterval(actualizaContador, 1000);
actualizaContador(); // llamar una vez al inicio de todo xd