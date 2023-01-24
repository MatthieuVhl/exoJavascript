let price = Math.floor(Math.random() * 1000) + 1;
let nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === price) {alert("Bravo");
        break;
    }
    if (nombre > price) {
        alert("trop grand");
    }
    if (nombre < price) {
        alert("trop petit");
    } 
    else {
        alert("ce n'est pas un chiffre");
        compteur-=1;
}
alert("c'est fini. le chiffre cherche est : " + price)
}