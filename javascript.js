'use strict';

//Variáveis 
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendasMussarela = 0.00;
let vendasMista = 0.00;
let vendasCalabresa = 0.00;

//Manipulação dos botões
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos
btnVendas.addEventListener('click',vendas,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//Funções

function vendas(e) 
{
    if (document.getElementById('mussarela').checked)
    {
    somaMussarela = somaMussarela + 1;
    vendasMussarela = vendasMussarela + 25.00;
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendasMussarela').innerHTML = vendasMussarela.toFixed(2);
    
    }else if(document.getElementById('mista').checked)

    {
    somaMista = somaMista + 1;
    vendasMista = vendasMista + 25.00;
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendasMista').innerHTML = vendasMista.toFixed(2);
    
    }else if (document.getElementById('calabresa').checked)

    {
    somaCalabresa = somaCalabresa + 1;
    vendasCalabresa = vendasCalabresa + 25.00;
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendasCalabresa').innerHTML = vendasCalabresa.toFixed(2);
    }
}
function estorno(e) 
{
    if (document.getElementById('mussarela').checked)
    {
    somaMussarela = somaMussarela - 1;
    vendasMussarela = vendasMussarela - 25.00;
    if (somaMussarela < 0)
    {
        somaMussarela = 0;
        vendasMussarela = 0.00;
    }
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendasMussarela').innerHTML = vendasMussarela.toFixed(2);
    
    }else if(document.getElementById('mista').checked)

    {
    somaMista = somaMista - 1;
    vendasMista = vendasMista - 25.00;
    if (somaMista < 0)
    {
        somaMista = 0;
        vendasMista = 0.00;
    }
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendasMista').innerHTML = vendasMista.toFixed(2);
    
    }else if (document.getElementById('calabresa').checked)

    {
    somaCalabresa = somaCalabresa - 1;
    vendasCalabresa = vendasCalabresa - 25.00;
    if (somaCalabresa < 0)
    {
        somaCalabresa = 0;
        vendasCalabresa = 0.00;
    }
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendasCalabresa').innerHTML = vendasCalabresa.toFixed(2);
    }
}
function planilha(e)
{
    TableToExel.convert(document.getElementById('table'));
}

