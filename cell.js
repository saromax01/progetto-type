"use strict";
class User {
    constructor(caricaIniziale) {
        this.carica = caricaIniziale;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
        this.updateUI();
    }
    chiamata(minutiDurata) {
        const costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            this.updateUI();
        }
        else {
            alert("Saldo insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.updateUI();
    }
    updateUI() {
        const saldoElement = document.getElementById("saldo-1");
        const numChiamateElement = document.getElementById("num-chiamate-1");
        saldoElement.textContent = this.numero404().toFixed(2);
        numChiamateElement.textContent = this.getNumeroChiamate().toString();
    }
}
const user1 = new User(10.0);
function ricarica(userIndex) {
    const amount = parseFloat(prompt("Inserisci l'importo da ricaricare:"));
    if (!isNaN(amount)) {
        if (userIndex === 1) {
            user1.ricarica(amount);
        }
    }
    else {
        alert("Inserisci un importo valido.");
    }
}
function effettuaChiamata(userIndex, durataMinuti) {
    if (userIndex === 1) {
        user1.chiamata(durataMinuti);
    }
}
