const temperature = 50;
const wind = 20;

function caluculateWindChill(T,V) {
    return 35.74 + (0.6215*T) - (35.75*(Math.pow(V,0.16))) + (0.4275*T)*(Math.pow(V,0.16));
}

const tempElement = document.getElementById("temp");
tempElement.innerHTML = temperature;

document.querySelector("#wind").innerText = wind;

document.getElementById("chillbutton").addEventListener('click',() => {
    const chill = caluculateWindChill(temperature,wind);
    document.getElementById("chill").innerText = chill.toFixed(2);


    document.getElementById('currentyear').innerText = new Date().getFullYear();


    document.getElementById('lastModified').innerText = `Last Modified: ${document.lastModified}`;

})