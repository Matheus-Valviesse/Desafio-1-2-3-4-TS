// let employee = {};
// employee.code = 10;
// employee.name = "John";

// DESSAFIO 1 - 3 respostas ================================================
const funcionario = {
    code:  10,
    name: "Jhon"
}

const funcionario2: {fName:string, fCode: number} = {
    fName : "Jhon",
    fCode : 10,
}

interface Funcionario {
    codigo: number,
    nome: string,
}

const funcionario3: Funcionario = {
    codigo: 10,
    nome:"joão",
}



// DESSAFIO 2 - 1 resposta ==========================================================

type Cadastro = {
    nomee: string,
    idadee: number,
    profissaoe: string,
}


const pessoa1: Cadastro = {
    nomee: 'Maria',
    idadee: 29,
    profissaoe: 'atriz',
};

const pessoa2: Cadastro = {
    nomee: 'roberto',
    idadee: 19,
    profissaoe: 'Padeiro',
};

const pessoa3: Cadastro = {
    nomee: 'laura',
    idadee: 32,
    profissaoe: 'atriz',
};

const pessoa4: Cadastro = {
    nomee: 'carlos',
    idadee: 19,
    profissaoe: 'padeiro',
};



// DESSAFIO 3 - 0 resposta ==========================================================


let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});
}

//HTML =============================

// NÃO ESQUECER O 'defer' NO HTML.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="desafio1.js" defer></script>
// </head>
// <body>
//     <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
// </body>
// </html>