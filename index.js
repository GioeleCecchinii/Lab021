//const prompt = require("prompt-sync")();
//input = prompt("testo?");
//console.log("ciao Mondo"+ input);

class Macchina {
    #m_marca = null;
    #m_modello = null;
    #m_cavalli = null; 
    constructor(marca, modello, cavalli) {
        this.marca = marca;
        this.modello = modello;
        this.cavalli = cavalli;
    }
    set marca(nuovaMarca) {
        this.#m_marca = nuovaMarca;
    }
    get marca() {
        return this.#m_marca;
    }
    set modello(nuovoModello) {
        this.#m_modello = nuovoModello;
    }
    get modello() {
        return this.#m_modello;
    }
    set cavalli(nuoviCavalli) {
        this.#m_cavalli = nuoviCavalli;
    }
    get cavalli() {
        return this.#m_cavalli;
    }
}
const prompt = require("prompt-sync")();
let marca = prompt("Marca?");
let modello = prompt("Modello?");
let cavalli = prompt("Cavalli?");
let macchina = new Macchina (marca, modello, cavalli);
console.log("Marca: " + macchina.marca);
console.log("Modello: " + macchina.modello);
console.log("Cavalli: " + macchina.cavalli);