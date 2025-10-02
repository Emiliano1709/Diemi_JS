const fechaObjetivo = new Date("2025-10-04T11:00:00").getTime();

const actualizaContador = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia < 0) {
        document.getElementById("anuncio").innerHTML = "<p>Es de nuestro agrado informar que...</p>";
        document.getElementById("contador").innerHTML = "<h1>¡Nos estamos casandoooo!</h1>";
        clearInterval(timer);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
};

const timer = setInterval(actualizaContador, 1000);
actualizaContador(); // llamar una vez al inicio de todo xd