function calcular() {
    const temperaturainput = parseFloat(document.getElementById("temperatura").value);
    const parrafoFahrenheit = document.getElementById("Fahrenheit"); // Cambiado a "Fahrenheit" con "F" en mayúscula
    const parrafoKelvin = document.getElementById("Kelvin"); // Cambiado a "Kelvin" con "K" en mayúscula
    const Fahrenheit = (temperaturainput * 9 / 5) + 32;
    const kelvin = temperaturainput + 273.15;
    
    parrafoFahrenheit.innerText = `Fahrenheit: ${Fahrenheit}`;
    parrafoKelvin.innerText = `Kelvin: ${kelvin.toFixed(2)}`;
}