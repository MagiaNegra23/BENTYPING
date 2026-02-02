const puppeteer = require('puppeteer');
const { printLog } = require('./log');

class Proposta {
    constructor(nome, cpf, datanasc, rg, orgao, ufrg, dataemissao, sexo, nomemae, estadocivil, nacionalidade, estadonatural, cidadenatural,
        especie, categoriabeneficio, matricula, valorbeneficio, cep, logradouro, numero, uf, municipio, bairro,
        ddd, numerocell, email, banco, agencia, conta, tipoconta, meiopagamento, tabelamargem, vlparcela, tabelaaumento,
        nrcontrato, vlaumento, pensao, representante, bloqempres, elegempres, descbloq, dataext) {
        this._nome = nome;
        this._cpf = cpf;
        this._datanasc = datanasc;
        this._rg = rg;
        this._orgao = orgao;
        this._ufrg = ufrg;
        this._dataemissao = dataemissao;
        this._sexo = sexo;
        this._nomemae = nomemae;
        this._estadocivil = estadocivil;
        this._nacionalidade = nacionalidade;
        this._estadonatural = estadonatural;
        this._cidadenatural = cidadenatural;
        this._especie = especie;
        this._categoriabeneficio = categoriabeneficio;
        this._matricula = matricula;
        this._valorbeneficio = valorbeneficio;
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._uf = uf;
        this._municipio = municipio;
        this._bairro = bairro;
        this._ddd = ddd;
        this._numerocell = numerocell;
        this._email = email;
        this._banco = banco;
        this._agencia = agencia;
        this._conta = conta;
        this._tipoconta = tipoconta;
        this._meiopagamento = meiopagamento;
        this._tabelamargem = tabelamargem;
        this._vlparcela = vlparcela;
        this._tabelaaumento = tabelaaumento;
        this._vlaumento = vlaumento;
        this._nrcontrato = nrcontrato;
        this._pensao = pensao;
        this._representante = representante;
        this._bloqempres = bloqempres;
        this._elegempres = elegempres;
        this._descbloq = descbloq;
        this._dataext = dataext;
    }
    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get cpf() { return this._cpf; }
    set cpf(valor) { this._cpf = valor; }

    get datanasc() { return this._datanasc; }
    set datanasc(valor) { this._datanasc = valor; }

    get rg() { return this._rg; }
    set rg(valor) { this._rg = valor; }

    get orgao() { return this._orgao; }
    set orgao(valor) { this._orgao = valor; }

    get ufrg() { return this._ufrg; }
    set ufrg(valor) { this._ufrg = valor; }

    get dataemissao() { return this._dataemissao; }
    set dataemissao(valor) { this._dataemissao = valor; }

    get sexo() { return this._sexo; }
    set sexo(valor) { this._sexo = valor; }

    get nomemae() { return this._nomemae; }
    set nomemae(valor) { this._nomemae = valor; }

    get estadocivil() { return this._estadocivil; }
    set estadocivil(valor) { this._estadocivil = valor; }

    get nacionalidade() { return this._nacionalidade; }
    set nacionalidade(valor) { this._nacionalidade = valor; }

    get estadonatural() { return this._estadonatural; }
    set estadonatural(valor) { this._estadonatural = valor; }

    get cidadenatural() { return this._cidadenatural; }
    set cidadenatural(valor) { this._cidadenatural = valor; }

    get especie() { return this._especie; }
    set especie(valor) { this._especie = valor; }

    get categoriabeneficio() { return this._categoriabeneficio; }
    set categoriabeneficio(valor) { this._categoriabeneficio = valor; }

    get matricula() { return this._matricula; }
    set matricula(valor) { this._matricula = valor; }

    get valorbeneficio() { return this._valorbeneficio; }
    set valorbeneficio(valor) { this._valorbeneficio = valor; }

    get cep() { return this._cep; }
    set cep(valor) { this._cep = valor; }

    get logradouro() { return this._logradouro; }
    set logradouro(valor) { this._logradouro = valor; }

    get numero() { return this._numero; }
    set numero(valor) { this._numero = valor; }

    get uf() { return this._uf; }
    set uf(valor) { this._uf = valor; }

    get municipio() { return this._municipio; }
    set municipio(valor) { this._municipio = valor; }

    get bairro() { return this._bairro; }
    set bairro(valor) { this._bairro = valor; }

    get ddd() { return this._ddd; }
    set ddd(valor) { this._ddd = valor; }

    get numerocell() { return this._numerocell; }
    set numerocell(valor) { this._numerocell = valor; }

    get email() { return this._email; }
    set email(valor) { this._email = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get agencia() { return this._agencia; }
    set agencia(valor) { this._agencia = valor; }

    get conta() { return this._conta; }
    set conta(valor) { this._conta = valor; }

    get tipoconta() { return this._tipoconta; }
    set tipoconta(valor) { this._tipoconta = valor; }

    get meiopagamento() { return this._meiopagamento; }
    set meiopagamento(valor) { this._meiopagamento = valor; }

    get tabelamargem() { return this._tabelamargem; }
    set tabelamargem(valor) { this._tabelamargem = valor; }

    get vlparcela() { return this._vlparcela; }
    set vlparcela(valor) { this._vlparcela = valor; }

    get tabelaaumento() { return this._tabelaaumento; }
    set tabelaaumento(valor) { this._tabelaaumento = valor; }

    get vlaumento() { return this._vlaumento; }
    set vlaumento(valor) { this._vlaumento = valor; }

    get nrcontrato() { return this._nrcontrato; }
    set nrcontrato(valor) { this._nrcontrato = valor; }

    get pensao() { return this._pensao; }
    set pensao(valor) { this._pensao = valor; }

    get representante() { return this._representante; }
    set representante(valor) { this._representante = valor; }

    get bloqempres() { return this._bloqempres; }
    set bloqempres(valor) { this._bloqempres = valor; }

    get elegempres() { return this._elegempres }
    set elegempres(valor) { this._elegempres = valor }

    get descbloq() { return this._descbloq }
    set descbloq(valor) { this._descbloq = valor }

    get dataext() { return this._dataext }
    set dataext(valor) { this._dataext = valor }
}
async function buscarPorTexto (page ,titulo){
    try {
        return await page.evaluate((txt) => {
            const paragrafos = Array.from(document.querySelectorAll('p, small, span, b'));
            // Mudamos de .includes() para uma comparação mais rigorosa
            const alvo = paragrafos.find(p => {
                const textoInterno = p.innerText.trim().toUpperCase();
                // Verifica se o texto é EXATAMENTE igual ou se termina com ":"
                // Isso evita confundir "RG" com "MARGEM"
                return textoInterno === txt.toUpperCase() || textoInterno === txt.toUpperCase() + ":";
            });

            if (alvo && alvo.nextElementSibling) {
                return alvo.nextElementSibling.innerText.trim();
            }

            return "NÃO ENCONTRADO";
        }, titulo);
    } catch (e) {
        return "ERRO NA BUSCA";
    }
};

async function pegaDados(page) {
    console.log('--- Aguardando carregamento dos dados ---');

    // Aguarda o container principal
    await page.waitForSelector('.row.g-1', { timeout: 10000 });

    const novaProposta = new Proposta();

    /**
     * Busca o valor baseado no texto de um parágrafo (âncora).
     * Procura um <p> que contenha o 'titulo' e retorna o texto do PRÓXIMO elemento.
     */
    
    // --- CAPTURA INTELIGENTE (SEM ÍNDICES) ---
    // Substitua os textos abaixo pelos títulos REAIS que aparecem no site
    novaProposta.nome = await buscarPorTexto(page,'Nome');
    novaProposta.cpf = await buscarPorTexto(page,'CPF');
    novaProposta.matricula = await buscarPorTexto(page,'Benefício'); // ou 'NB'
    novaProposta.nomemae = await buscarPorTexto(page,'Nome da Mãe');
    novaProposta.datanasc = await buscarPorTexto(page,'Data Nascimento');
    novaProposta.rg = await buscarPorTexto(page,'RG'); // ou 'RG'

    // Localização e Endereço
    novaProposta.municipio = await buscarPorTexto(page,'Município');
    novaProposta.uf = await buscarPorTexto(page,'UF');
    novaProposta.ufrg = await buscarPorTexto(page,'UF');
    novaProposta.cep = await buscarPorTexto(page,'CEP');
    novaProposta.logradouro = await buscarPorTexto(page,'Endereco');

    // Dados Financeiros
    novaProposta.valorbeneficio = await buscarPorTexto(page,'Valor do Benefício');
    novaProposta.agencia = await buscarPorTexto(page,'Número da Agência');
    novaProposta.conta = await buscarPorTexto(page,'Número da Conta');
    novaProposta.tipoconta = await buscarPorTexto(page,'Tipo de conta');

    // Status (Bloqueios/Elegibilidade)
    novaProposta.pensao = await buscarPorTexto(page,'Pensão Alimenticia');
    novaProposta.bloqempres = await buscarPorTexto(page,'Bloqueado para Empréstimo');
    novaProposta.elegempres = await buscarPorTexto(page,'Elegível para Empréstimo');
    novaProposta.dataext = await buscarPorTexto(page,'Data da Extinção');
    novaProposta.descbloq = await buscarPorTexto(page,'Descrição do Bloqueio')

    novaProposta.numero = 0;
    //XPATH MUDOU E TEM QUE SER UTILIZADO DE OUTRA MANEIRA, MAS O MÉTODO DE ESCOLHER O ELEMENTO SEGUE O MESMO
    //BANCO
    novaProposta.banco = await page.$eval('small.mb-0.text-gray.fw-bold', el => el.innerText);

    console.log('--- RESULTADO DA CAPTURA (POR ÂNCORA) ---');
    console.table(novaProposta);

    return;
}
module.exports = { pegaDados, buscarPorTexto };