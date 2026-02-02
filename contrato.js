const puppeteer = require('puppeteer');
const { printLog } = require('./log');
const { buscarPorTexto } = require('./PegaDados.js');
//const { buscarPorTexto } = require('./PegaDados.js');
class Contrato {
    constructor(banco, nrcontrato, valor, parcela, prazo) {
        this._banco = banco;
        this._nrcontrato = nrcontrato;
        this._valor = valor;
        this._parcela = parcela;
        this._prazo = prazo;
    }
    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get nrcontrato() { return this._nrcontrato; }
    set nrcontrato(valor) { this._nrcontrato = valor; }

    get valor() { return this._valor; }
    set valor(valor) { this._valor = valor; }

    get parcela() { return this._parcela; }
    set parcela(valor) { this._parcela = valor; }

    get prazo() { return this._prazo; }
    set prazo(valor) { this._prazo = valor; }

}

async function preencheContrato(page) {
    const novoContrato = new Contrato;
    novoContrato.nrcontrato = await buscarPorTexto(page, 'Contrato');
    novoContrato.banco = await page.$eval('small.mb-0.text-gray.fw-semibold', el => el.innerText);
    novoContrato.parcela = await buscarPorTexto(page, 'Parcela');
    novoContrato.valor = await buscarPorTexto(page, 'Valor');
    novoContrato.prazo = await buscarPorTexto(page, 'Prazos');
    console.log('Resultado:');
    console.table(novoContrato);

    return;
}
module.exports = { preencheContrato };