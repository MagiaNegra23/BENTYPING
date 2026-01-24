const puppeteer = require('puppeteer');

async function abreConsulta(page) {
  //Fecha o botão de anúncio novo, talvez alterar 
  await page.click('.swal2-close')

  //Abrir a cascata da Consulta
  await page.evaluate((seletor) => {
    const el = document.querySelector(seletor);
    if (el) {
      el.click(); // Clique nativo do navegador
    }
  }, 'ul.menu-inner.mt-3.ps li:nth-child(2) a.menu-link.menu-toggle');

  //Clicar em INSS
  await page.evaluate((seletor) => {
    const el = document.querySelector(seletor);
    if (el) {
      el.click(); // Clique nativo do navegador
    }
  }, 'ul.menu-sub li:nth-child(1) a.menu-link');

  console.log('--- Consultando ---');
  //Espera a página carregar
  await new Promise(r => setTimeout(r, 2000));

  //Ativar checkbox da consulta
  // page.waitForNavigation({ waitUntil: 'networkidle2' }), // 1. Espera a navegação acabar
  //   page.click('#consultaPremium')// 2. Dispara o clique

  //Escrever a consulta
  const x = '2231845738';
  await page.click('#input');
  await page.type('#input', x, { delay: 100 });

  //Submit
  await new Promise(r => setTimeout(r,1000));
  await page.click('#localizar');

  // Espera o ícone de carregamento sumir (isso substitui o tempo fixo)
    // await page.waitForSelector('div.blockUI.blockoverlay', { hidden: true });
    // await new Promise(r => setTimeout(r,1000));
  //Informações Complementares
  await page.waitForSelector('button.bg-light,accordion-button.text-warning.collapsed', {visible: true});
  const seletor = 'button.bg-light,accordion-button.text-warning.collapsed'; // ou o índice [n]
    
    await page.evaluate((sel) => {
        const elemento = document.querySelector(sel);
        if (elemento) {
            elemento.click(); // Clique direto no motor do navegador
        }
    }, seletor);
  
};
module.exports = { abreConsulta };