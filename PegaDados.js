const puppeteer = require('puppeteer');
const { printLog } = require('./log');

class Proposta {
    constructor(nome, cpf, datanasc, rg, orgao, ufrg, dataemissao, sexo, nomemae, estadocivil, nacionalidade, estadonatural, cidadenatural,
        especie, categoriabeneficio, matricula, valorbeneficio, cep, logradouro, numero, uf, municipio, bairro,
        ddd, numerocell, email, banco, agencia, conta, tipoconta, meiopagamento, tabelamargem, vlparcela, tabelaaumento,
        nrcontrato, vlaumento) {
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
}

async function pegaDados(page) {
    console.log('--- Aguardando dados ---');
    await page.waitForSelector('.row.g-1', { timeout: 10000 })
    const novaProposta = new Proposta();
    novaProposta.nome = await page.querySelectorAll('#nome_beneficiario')[0];
    novaProposta.cpf = await page.querySelectorAll('#cpf_beneficiario')[0];
    novaProposta.matricula = await page.querySelectorAll('#nb_beneficiario')[0];
    novaProposta.valorbeneficio = await page.querySelectorAll('.mb-0.text-success.fw-bold')[0];
    novaProposta.nomemae = await page.querySelectorAll('#nomeMae_beneficiario')[0];
    novaProposta.datanasc = await page.querySelectorAll('#light-text')[0];
    novaProposta.rg = await page.querySelectorAll('#rg_beneficiario')[0];
    novaProposta.uf = await page.querySelectorAll('#mb-0')[0];
    novaProposta.municipio = await page.querySelectorAll('#mb-0')[1];
    novaProposta.cep = await page.querySelectorAll('#mb-0')[2];
    novaProposta.logradouro = await page.querySelectorAll('#mb-0')[3];
    
    // linhas.forEach(linha => {
    //     const colunas = linha.querySelectorAll('td');
    //     if (colunas.length > 0) {
    //         resultados.push({
    //             nome: colunas[0]?.innerText.trim(),
    //             cpf: colunas[1]?.innerText.trim(),
    //             ddb: colunas[2]?.innerText.trim(),
    //             liberado: colunas[3]?.querySelector('span')?.innerText.trim(), // Exemplo pegando elemento aninhado
    //             benificio: colunas[4]?.innerText.trim(),
    //             valorbeneficio: colunas[5]?.innerText.trim(),
    //             idade: colunas[6]?.innerText.trim(),
    //             especie:  colunas[7]?.innerText.trim()
    //         });
    //     }
    // });

    //   return resultados; // Retorna o array para o contexto do Node.js
    //});

}