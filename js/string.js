function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
}
//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));//
function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundosFaltantes}s`;

        if (t.tiempoFaltante < 0) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
        }
    }, 1000)
};
let papaNoel = "off";
let papaNoelStop = document.getElementById("papaNoelQuieto");
let botonSonido = new Audio('../sound/vaile.mp3');
let botonAudio = new Audio('../sound/vaile.mp3');

function bailar() {
    if (papaNoel == "off") {
        papaNoel = "on";
        papaNoelStop.classList.add("on");
        papaNoelStop.addEventListener('click', () => {
            botonSonido.play();
        })

        console.log("off");
    } else {
        papaNoel = "off"
        papaNoelStop.classList.remove("off");
        papaNoelStop.addEventListener('click', () => {
            botonAudio.pause();
        })
        console.log("Off");
    }
}

function bailar1() {
    if (papaNoel == "off") {
        papaNoel = "on";
        papaNoelStop.classList.add("on");
        papaNoelStop.addEventListener('click', () => {
            botonSonido.play();
        })

        console.log("On");
    } else {
        papaNoel = "on"
        papaNoelStop.classList.remove("on");
        papaNoelStop.addEventListener('click', () => {
            botonAudio.pause();
        })
        console.log("On");
    }
}
cuentaRegresiva('nov 25 2023 00:00:00 GMT-500', 'cuentaRegresiva', '!Feliz Navidad');