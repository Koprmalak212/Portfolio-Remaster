function darkMode() {
    // toggled de dark mode class aan en uit, light mode staat als default.
    document.body.classList.toggle("dark-mode");
    toggleImage()
}

function toggleImage() {
    // Maakt img variabele en linkt het naar de id.
    var img = document.getElementById("darkModeImage");

    // Check de src en toggle
    if (img.src.includes("images/dark-mode.png")) {
        img.src = "images/dark-mode2.png";
    } else {
        img.src = "images/dark-mode.png";
    }
}

// On click replacement zodat je alleen een id hoeft te gebruiken.
document.getElementById("darkMode").addEventListener("click", darkMode);
document.getElementById("darkModeImage").addEventListener("click", toggleImage);