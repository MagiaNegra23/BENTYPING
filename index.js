const puppeteer = require('puppeteer');
const { abreConsulta } = require('./consultar');
const { pegaDados } = require('./PegaDados.js');
//const { preencheContrato } = require('./contrato.js');
const { pegaContratos } = require ('./contrato.js');


(async () => {
    // 1. Configuração do Navegador
    // 'headless: false' permite ver o navegador abrindo (útil para debug).
    // Mude para 'true' quando rodar em produção/servidor.
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null, // Usa o tamanho total da janela
        args: ['--start-maximized'] // Inicia maximizado
    });

    const page = await browser.newPage();

    // Define um User-Agent para evitar bloqueios simples de segurança
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

    try {
        console.log('--- Iniciando Navegação ---');

        // 2. Navegar para a URL
        // 'networkidle2' espera até que não haja mais de 2 conexões de rede ativas (página carregada)
        await page.goto('https://app.multicorban.com/', { waitUntil: 'networkidle2' });

        // 3. Interação: Digitar em campos (Login)
        // Primeiro, esperamos o seletor estar visível para garantir que o site carregou
        await page.waitForSelector('#login', { visible: true });

        // Digita lentamente (delay) para simular um humano e evitar detecção de bot
        await page.type('#login', 'robson_extrato', { delay: 100 });
        await page.type('#senha', 'bBbBBb@1222', { delay: 100 });

        page.click('#html-alert'), // Clica no botão

            // 4. Interação: Pressionar Botões
            console.log('--- Efetuando Login ---');

        // Forma 1: Clicar e esperar a navegação acontecer (Ideal para logins que mudam de página)
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2' }), // Espera a URL mudar
            page.click('#html-alert'), // Clica no botão
        ]);
        //Consultar
        await abreConsulta(page);
        //AMÉM
        console.log('PEGANDO DADOS');
        await pegaDados(page);
        await pegaContratos(page);

        //Catch de dados de contrato, criação de objetos, entre outros.

        

        





        // 5. Navegação Pós-Login (opcional, caso precise ir a outra URL interna)
        // await page.goto('https://exemplo-site-login.com/dashboard/relatorios');

        // 6. Esperar dados carregarem na tela
        // Suponha que queremos extrair dados de uma tabela com a classe '.tabela-dados'
        // console.log('--- Aguardando dados ---');
        // await page.waitForSelector('.tabela-dados tbody tr', { timeout: 10000 }); // Timeout de 10s

        // // 7. Recolher Dados (Scraping)
        // // O método 'evaluate' roda JavaScript DENTRO do contexto do navegador
        // const dadosExtraidos = await page.evaluate(() => {
        //     // Tudo aqui dentro é JavaScript do browser (DOM), não Node.js
        //     const linhas = document.querySelectorAll('.tabela-dados tbody tr');
        //     const resultados = [];

        //     linhas.forEach(linha => {
        //         const colunas = linha.querySelectorAll('td');
        //         if (colunas.length > 0) {
        //             resultados.push({
        //                 id: colunas[0]?.innerText.trim(),
        //                 nome: colunas[1]?.innerText.trim(),
        //                 valor: colunas[2]?.innerText.trim(),
        //                 status: colunas[3]?.querySelector('span')?.innerText // Exemplo pegando elemento aninhado
        //             });
        //         }
        //     });

        //     return resultados; // Retorna o array para o contexto do Node.js
        // });

        // console.log('--- Dados Recolhidos com Sucesso ---');
        // console.table(dadosExtraidos); // Exibe os dados formatados no console

        // // Opcional: Tirar um print da evidência
        // await page.screenshot({ path: 'evidencia_sucesso.png', fullPage: true });

    } catch (error) {
        console.error('!!! Ocorreu um erro durante a execução !!!');
        console.error(error);
        await page.screenshot({ path: 'erro_execucao.png' });
    } finally {
        // 8. Fechar o navegador (Sempre use o finally para garantir que processos não fiquem abertos)
        await browser.close();
        console.log('--- Navegador Fechado ---');
    }
})();