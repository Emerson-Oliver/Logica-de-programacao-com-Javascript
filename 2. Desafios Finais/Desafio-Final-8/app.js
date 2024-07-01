let numero;
numero = prompt("Insira um número:");

if (numero > 0) {
  alert("O número " + numero + " é positivo.");
  console.log("O número " + numero + " é positivo.");
} else if (numero < 0) {
  alert("O número " + numero + " é negativo.");
  console.log("O número " + numero + " é negativo.");
} else {
  alert("O número " + numero + " é negativo.");
  console.log("O número " + numero + " é zero.");
}