//1 - Soma simples
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado : " + (n1 + n2);

}

// Exercício 2: Calcular Idade
function idade() {

    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado2").innerText = "Maior de Idade";

    } else {
        document.getElementById("resultado2").innerText = "Menor de Idade";

    }
}
// Exercício 3: Contar Caracteres
function contarCaracteres() {
  const texto = document.getElementById("textoCaracteres").value;
  document.getElementById("resultadoCaracteres").innerText = `Total de caracteres: ${texto.length}`;
}

// Exercício 4: Verificar Par ou Ímpar
function verificarParOuImpar() {
  const numero = parseInt(document.getElementById("numeroParImpar").value);
  const resultado = numero % 2 === 0 ? "É par." : "É ímpar.";
  document.getElementById("resultadoParImpar").innerText = resultado;
}

// Exercício 5: Nome em Caixa Alta
function converterCaixaAlta() {
  const nome = document.getElementById("nomeCaixaAlta").value;
  document.getElementById("resultadoCaixaAlta").innerText = nome.toUpperCase();
}

// Exercício 6: Maior de Dois Números
function compararNumeros() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let resultado;
  if (n1 > n2) resultado = `${n1} é maior.`;
  else if (n2 > n1) resultado = `${n2} é maior.`;
  else resultado = "Os números são iguais.";
  document.getElementById("resultadoMaior").innerText = resultado;
}

// Exercício 7: Tabuada
function gerarTabuada() {
  const numero = parseInt(document.getElementById("numeroTabuada").value);
  const divResultado = document.getElementById("resultadoTabuada");
  divResultado.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    divResultado.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }
}

// Exercício 8: Contador de 1 a 10
function contarAteDez() {
  const div = document.getElementById("resultadoContador");
  div.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    div.innerHTML += `<p>${i}</p>`;
  }
}

// Exercício 9: Média de Notas
function calcularMedia() {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const media = (n1 + n2 + n3) / 3;
  const resultado = media >= 6 ? "Aprovado!" : "Reprovado.";
  document.getElementById("resultadoMedia").innerText = `${resultado} Média: ${media.toFixed(2)}`;
}

// Exercício 10: Conversor de Temperatura
function converterTemperatura() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultadoTemperatura").innerText = `${fahrenheit.toFixed(2)} °F`;
}

// Exercício 11: Dia da Semana
function verificarDiaSemana() {
  const numero = parseInt(document.getElementById("numeroDia").value);
  const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const resultado = numero >= 1 && numero <= 7 ? dias[numero - 1] : "Número inválido.";
  document.getElementById("resultadoDiaSemana").innerText = resultado;
}

// Exercício 12: Senha Simples
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const resultado = senha === "1234" ? "Acesso permitido!" : "Senha incorreta.";
  document.getElementById("resultadoSenha").innerText = resultado;
}

// Exercício 13: Contagem Regressiva
function contagemRegressiva() {
  const div = document.getElementById("resultadoContagem");
  div.innerHTML = "";
  for (let i = 10; i >= 1; i--) {
    div.innerHTML += `<p>${i}</p>`;
  }
}
