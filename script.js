const btn = document.querySelector(".btn")
let inputValue = document.querySelector(".inputBtn").value


let num = 0;

baseStr = `${num} Meters = ${x} Feet | ${num} Feet = ${x} Meters`

function meterAndFeet(){
    const meter = inputValue / 3.28;
    const feet = inputValue * 3.28;
}

function literToGallon(){
    const liters = inputValue * 3.785;
    const gallons = inputValue / 3.785;
}

function kilogramsToPounds(){
    const kilograms = inputValue / 2.205;
    const pounds = inputValue * 2.205;
}