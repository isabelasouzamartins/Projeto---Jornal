export function api() {
    let ConteudoArray = "";
    const MostrarTela = document.getElementById('clima');
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
        .then((response) => response.json())
        .then((dadosClima) => {
            for (let index = 0; index < 7; index++) {
                console.log("oi", dadosClima.hourly.temperature_2m[index]);
                console.log("oi", dadosClima.hourly.time[index]);
                ConteudoArray += dadosClima.hourly.temperature_2m[index] + ` ºC ` + dadosClima.hourly.time[index] + '\n';
            }
            MostrarTela.innerText = ConteudoArray;
        })
}