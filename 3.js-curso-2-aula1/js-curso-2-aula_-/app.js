let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    console.log("O botão foi clicado");
}

function euAmoJavascript() {
    alert("Eu amo JS");
}

function verificarChute() {
    console.log("O botão foi clicado");
  }  
  
  function euAmoJavascript() {
    alert("Eu amo JS");
  } 
 
  function mostrarCidade() {
    const cidade = prompt("Qual cidade do Brasil você visitou?");
  
    if (cidade === null || cidade === "") {
      alert("Você não digitou nenhuma cidade.");
      return;
    }
  
    const mensagem = `Estive em ${cidade} e lembrei de você!`;
    alert(mensagem);
  }

  function somarNumeros() {
    const numero1 = parseInt(prompt("Digite o primeiro número:"));
    const numero2 = parseInt(prompt("Digite o segundo número:"));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Você deve digitar apenas números.");
      return;
    }
  
    const soma = numero1 + numero2;
    alert(`A soma dos números é: ${soma}`);
  }