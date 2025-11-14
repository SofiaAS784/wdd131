const temp = document.querySelector("#temp").textContent;
const wind = document.querySelector("#wind").textContent;
const tempValue = parseInt(temp, 10);
const windValue = parseFloat(wind, 10);

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16)
}

if (tempValue <= 10) {
    if (windValue > 4.8) {
        const windChill = calculateWindChill(tempValue, windValue);
        const windChillRounded = Math.round(windChill * 100) / 100;
        document.querySelector("#windChill").textContent = windChillRounded + " °C";
    }
}
else {
    document.querySelector("#windChill").innerHTML = "N/A";
}