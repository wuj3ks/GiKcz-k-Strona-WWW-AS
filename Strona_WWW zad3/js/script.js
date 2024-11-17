// 1. Utworzenie tablicy obiektów
const objectsArray = [
    { name: "Jan", age: 25, city: "Warszawa" },
    { name: "Anna", age: 30, city: "Kraków" },
    { name: "Piotr", age: 35, city: "Gdańsk" }
];

// 2. Znalezienie przycisku na stronie
const button = document.getElementById("showPropertiesButton");

// 3. Dodanie eventu kliknięcia
button.addEventListener("click", () => {
    // Iteracja przez tablicę obiektów
    objectsArray.forEach((obj, index) => {
        console.log(`Obiekt ${index + 1}:`);
        // Iteracja przez właściwości obiektu i ich wypisanie
        for (const [key, value] of Object.entries(obj)) {
            console.log(`${key}: ${value}`);
        }
    });
});