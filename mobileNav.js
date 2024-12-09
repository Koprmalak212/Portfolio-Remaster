//Wordt opgeroepen door de button boven in de HTML
function toggleMenu() {
    //Elke keer dat deze functie wordt gecalled voeg de show-mobile-nav toe aan de #mobile-nav.
    //Als de #mobile-nav al actief is omdat er al 1 keer is op geklikt, haal de class weer weg
    document.getElementById("mobile-nav").classList.toggle("show-mobile-nav");
}
