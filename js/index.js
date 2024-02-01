const tabellone = document.getElementById("tombola");
const numeriEstratti = new Set();

for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("td");
    cella.textContent = i;
    tabellone.appendChild(cella);
}

function estraiNumero() {
    const numeroEstratto = Math.floor(Math.random() * 76) + 1;
    numeriEstratti.add(numeroEstratto);
    evidenziaCella(numeroEstratto);
    console.log("Numero estratto", numeroEstratto);
    console.log("Numeri estratti", Array.from(numeriEstratti));
}

function evidenziaCella(numero) {
    const celle = tabellone.getElementsByTagName("td");
    for (const cella of celle) {
        cella.classList.remove("selected");
    }

    const cellaCorrispondente = celle[numero - 1];
    cellaCorrispondente.classList.add("selected");
}