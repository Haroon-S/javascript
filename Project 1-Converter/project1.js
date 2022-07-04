let value  = 0
console.log(value)  
let feet = 0
let volume = 0
let mass = 0
let valueL = 0
let valueV = 0
let valueM = 0
let feetCon = 0
let volumeCon = 0
let massCon = 0


function conversions()
{
    value = document.getElementById("input").value
    console.log(value)  
    feet = value
    volume = value
    mass = value
    lengthConverter()
    volumeConverter()
    massConverter()
}
function lengthConverter() {

    feetCon = value * 3.28084
    feetCon = feetCon.toFixed(3);
    valueL = feet / 3.28084
    valueL = valueL.toFixed(3);
    console.log(feetCon)  
    console.log(valueL)  
    document.getElementById("lengthH").textContent = value + " meters = " + feetCon + " feet | " + feet + " feet = " + valueL + " meter"
}

function volumeConverter() {

    volumeCon = value * 0.26417
    volumeCon = volumeCon.toFixed(3);
    valueV = value / 0.26417
    valueV = valueV.toFixed(3);
    console.log(volumeCon)  
    console.log(valueV)  
    document.getElementById("volumeH").textContent = value + " liters = " + feetCon + " gallons | " + volume + " gallons = " + valueV + " liters"
}

function massConverter() {

    massCon = value * 2.204623
    massCon = massCon.toFixed(3);
    valueM = value / 2.204623
    valueM = valueM.toFixed(3);
    console.log(massCon)  
    console.log(valueM)  
    document.getElementById("massH").textContent = value + " kilos = " + feetCon + " pounds | " + mass + " pounds = " + valueM + " kilos"
}

document.getElementById("lengthH").textContent = value + " meters = " + feetCon + " feet | " + feet + " feet = " + valueL + " meter"
document.getElementById("volumeH").textContent = value + " liters = " + feetCon + " gallons | " + volume + " gallons = " + valueV + " liters"
document.getElementById("massH").textContent = value + " kilos = " + feetCon + " pounds | " + mass + " pounds = " + valueM + " kilos"

value = value.toFixed(3);

