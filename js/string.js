let papanoel = "off"
let noelplay = document.getElementById("play");
let noelpause = document.getElementById("pause");
let noelStop = document.getElementById("baileOff");
let botonAudio = new Audio('./sound/baile.mp3');

botonAudio.disabled = true;

function bailar() {
    if (papanoel == "off") {
        noelplay.addEventListener('click', () => {
            botonAudio.play();
            botonAudio.disabled = true;
        })
    }
}

function nobailar() {
    noelpause.addEventListener('click', () => {
        botonAudio.pause();
        botonAudio.disabled = false;


    })
}

function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();

    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;

    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);

    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);

    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);

    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

function cuentaRegresiva(tiempoFaltante, mensaje) {
    const titulo = document.getElementById("titulo");
    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horasFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;

        if (t.tiempoFaltante < 1) {
            clearInterval(tiempoActual);
            const tituloa = "";
            titulo.innerHTML = mensaje;
            tituloantes.innerHTML = tituloa;
            dias.innerHTML = '00';
            horas.innerHTML = '00';
            minutos.innerHTML = '00';
            segundos.innerHTML = '00';
            noelStop.classList.add("on");
        }
    }, 1000)
}

cuentaRegresiva('Nov 18 2023 23:15:00 GMT-0500', '¡Feliz Navidad!')