const btn = document.querySelector(".btn")
const length = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")
const inputValue = document.getElementById("inputBtn")





btn.addEventListener("click",() => {
    meterAndFeet();
    literToGallon();
    kilogramsToPounds();
    console.log(inputValue)
})

function meterAndFeet(){
    let num = inputValue.value
    const meter = num / 3.28;
    const feet = num * 3.28;
    let resultOne = `${num} Meters = ${feet} Feet | ${num} Feet = ${meter.toFixed(2)} Meters`
    length.textContent = resultOne
}

function literToGallon(){
    let num = inputValue.value
    const liters = num * 3.785;
    const gallons = num / 3.785;
    let resultTwo = `${num} Liters = ${gallons.toFixed(2)} Feet | ${num} Gallons = ${liters} Liters`
    volume.textContent = resultTwo
}

function kilogramsToPounds(){
    let num = inputValue.value
    const kilograms = num / 2.205;
    const pounds = num * 2.205;
    let resultThree = `${num} Kilograms = ${pounds} pounds | ${num} Pounds = ${kilograms.toFixed(2)} Kilograms`
    mass.textContent = resultThree
}