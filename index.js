//const prompt = require("prompt-sync")();
//input = prompt("testo?");
//console.log("ciao Mondo"+ input);

class Macchina {
    #m_targa = null;
    #m_carburante = null;
    #m_matricola = null; 
    #m_potenza = null;
    constructor(targa, carburante, matricola, potenza) {
        this.targa = targa;
        this.carburante = carburante;
        this.matricola = matricola;
        this.potenza = potenza;
    }
    set targa(nuovaTarga) {
        this.#m_targa = nuovaTarga;
    }
    get targa() {
        return this.#m_targa;
    }
    set carburante(nuovoCarburante) {
        this.#m_carburante = nuovoCarburante;
    }
    get carburante() {
        return this.#m_carburante;
    }
    set matricola(nuovaMatricola) {
        this.#m_matricola = nuovaMatricola;
    }
    get matricola() {
        return this.#m_matricola;
    }
    set potenza(nuovaPotenza) {
        this.#m_potenza = nuovaPotenza;
    }
    get potenza() {
        return this.#m_potenza;
    }
}
const prompt = require("prompt-sync")();
let targa = prompt("targa?");
let carburante = prompt("carburante?");
let matricola = prompt("matricola?");
let potenza = prompt("potenza?");
let macchina = new Macchina (targa, carburante, matricola, potenza);
console.log("targa: " + macchina.targa);
console.log("carburante: " + macchina.modello);
console.log("matricola: " + macchina.matricola);
console.log("potenza: " + macchina.potenza);
