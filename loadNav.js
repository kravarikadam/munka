document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html") // Betöltjük a nav.html tartalmát
        .then(response => response.text()) // Átalakítjuk szöveggé
        .then(data => {
            document.getElementById("navbar").innerHTML = data; // Beillesztjük az oldalba
        })
        .catch(error => console.error("Hiba a navigáció betöltésekor:", error));
});