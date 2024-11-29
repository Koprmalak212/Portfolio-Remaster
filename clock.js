function clock(){
    const now = new Date(); // creert een object dat de datum en tijd representeerd
    const hours = now.getHours().toString().padStart(2, '0'); // extract uren
    const minutes = now.getMinutes().toString().padStart(2, '0');// extract minuten
    const seconds = now.getSeconds().toString().padStart(2, '0');// extract secondes
    // .toString().padStart(2,'0') zorgt ervoor dat het bijv 08:00 is ipv 8:00


    // format voor tijd in UUR:MIN:SEC
    // content van de h1 element updaten
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// greeting gebaseerd op tijd van dag bepalen
const now = new Date();
const hours = now.getHours(); // Haal de uren op van de huidige tijd
let greeting;

if (hours >= 5 && hours < 12) {
    greeting = ',Goedemorgen!';
} else if (hours >= 12 && hours < 17) {
    greeting = ',Goedemiddag!';
} else if (hours >= 17 && hours < 21) {
    greeting = ',Goedeavond!';
} else {
    greeting = ',Goedenacht!';
}

// content van "glockgreet" id updaten
document.getElementById('clockgreet').textContent = greeting;

console.log(greeting); // controleert of de begroeting correct is

// clock updaten dan elke sec clock updaten
clock();
setInterval(clock, 1000);

