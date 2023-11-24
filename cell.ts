interface Smartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor(caricaIniziale: number) {
    this.carica = caricaIniziale;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
    this.updateUI();
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      this.updateUI();
    } else {
      alert("Saldo insufficiente per effettuare la chiamata.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    this.updateUI();
  }

  private updateUI(): void {
    const saldoElement = document.getElementById("saldo-1") as HTMLSpanElement;
    const numChiamateElement = document.getElementById("num-chiamate-1") as HTMLSpanElement;

    saldoElement.textContent = this.numero404().toFixed(2);
    numChiamateElement.textContent = this.getNumeroChiamate().toString();
  }
}

const user1 = new User(10.0);

function ricarica(userIndex: number): void {
  const amount = parseFloat(prompt("Inserisci l'importo da ricaricare:"));
  if (!isNaN(amount)) {
    if (userIndex === 1) {
      user1.ricarica(amount);
    }
  } else {
    alert("Inserisci un importo valido.");
  }
}

function effettuaChiamata(userIndex: number, durataMinuti: number): void {
  if (userIndex === 1) {
    user1.chiamata(durataMinuti);
  }
}
