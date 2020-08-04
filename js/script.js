var prezzoKilometro = 0.21;
// richiesta kilometri
var distanza = parseInt(prompt("Quanti Kilometri vuoi percorrere?"));
// richiesta etá
var age = parseInt(prompt("Quanti anni hai?"));
// prezzo biglietto
var prezzo = distanza * prezzoKilometro;
// calcolo sconto
if (age < 18) {
  prezzo = prezzo - ((prezzo / 100) * 20);
} else if (age >= 65) {
  prezzo = prezzo - ((prezzo / 100) * 40);
}
// risultati nel codice html
document.getElementById("distanza").innerHTML = distanza;
document.getElementById("age").innerHTML = age;
document.getElementById("prezzo").innerHTML = prezzo;
