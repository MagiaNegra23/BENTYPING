const puppeteer = require('puppeteer');
const { printLog } = require('./log');
const { buscarPorTexto } = require('./PegaDados.js');
//const { buscarPorTexto } = require('./PegaDados.js');
class Contrato {
    constructor(banco, nrcontrato, saldo, parcela, prazo) {
        this._banco = banco;
        this._nrcontrato = nrcontrato;
        this._saldo = saldo;
        this._parcela = parcela;
        this._prazo = prazo;
    }
    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get nrcontrato() { return this._nrcontrato; }
    set nrcontrato(valor) { this._nrcontrato = valor; }

    get saldo() { return this._saldo; }
    set saldo(saldo) { this._saldo = saldo; }

    get parcela() { return this._parcela; }
    set parcela(valor) { this._parcela = valor; }

    get prazo() { return this._prazo; }
    set prazo(valor) { this._prazo = valor; }

}
async function pegaContratos(page) {
    // 1. Extração dos dados brutos
    const contratosBrutos = await page.evaluate(() => {
        const containers = Array.from(document.querySelectorAll('.card-body'));
        return containers.map(container => {
            const getDado = (label) => {
                // 1. Busca os blocos de colunas dentro do container do contrato
                const cards = Array.from(container.querySelectorAll('mb-0, .mt-3.col-lg-2.col-sm-12,.card.mb-4, .d-flex.align-items-center, .col-lg-12, .col-lg-1'));
                // 2. Encontra o bloco que contém o parágrafo (p) com o título desejado
                if (label === '') {
                    const exc = document.getElementsByClassName('.mb-0.text-gray.fw-semibold', el => el.innerText);
                    return exc;
                }
                else {
                    const alvo = cards.find(c => c.querySelector('p')?.innerText.includes(label));
                    if (!alvo) return null;

                    // 3. Tenta capturar o elemento de valor (pode ser small ou input)
                    const campoValor = alvo.querySelector('small, input');
                    if (!campoValor) return null;

                    // 4. Lógica de extração: se for input pega .value, se for outro (small) pega .innerText
                    if (campoValor.tagName.toLowerCase() === 'img') {
                        return campoValor.innerText.trim();
                    }
                    if (campoValor.tagName.toLowerCase() === 'input') {
                        return campoValor.value;
                    } else {
                        return campoValor.innerText.trim();
                    }
                }

            };
            return {
                nrcontrato: getDado('Contrato'),
                parcela: getDado('Valor da Parcelas'),
                saldo: getDado('Saldo Devedor'),
                prazo: getDado('Prazos'),
                banco: getDado('')
            };
        });
    });

    // 2. Criação da variável e Processamento (AQUI ESTAVA O ERRO)
    const contratosElegiveis = contratosBrutos
        .map(dados => {
            const c = new Contrato();
            Object.assign(c, dados);
            return c;
        })
        .filter(c => c.nrcontrato !== null); // Exemplo de filtro para garantir que a variável exista

    // 3. Agora a variável existe e pode ser usada
    console.log('--- CONTRATOS ENCONTRADOS ---');
    console.table(contratosElegiveis);

    return;
}
async function preencheContrato(page) {
    const novoContrato = new Contrato;
    novoContrato.nrcontrato = await buscarPorTexto(page, 'Contrato');
    novoContrato.banco = await page.$eval('small.mb-0.text-gray.fw-semibold', el => el.innerText);
    novoContrato.parcela = await buscarPorTexto(page, 'Valor da Parcelas');
    novoContrato.valor = await buscarPorTexto(page, 'Saldo Devedor');
    novoContrato.prazo = await buscarPorTexto(page, 'Prazos');
    console.log('Resultado:');
    console.table(novoContrato);

    return;
}
module.exports = { preencheContrato, pegaContratos };