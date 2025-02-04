document.addEventListener("DOMContentLoaded", function () { 
    // Navigáció betöltése
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Hiba a navigáció betöltésekor:", error));

    // Footer betöltése
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Hiba a footer betöltésekor:", error));
});