const claveapi = 'OWapiP4ss';
//funcion para obtener datos del clima a través de Api
async function getTemperatura(){
    const ciudad = 'Bogota';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${claveapi}&units=metric`;
} 