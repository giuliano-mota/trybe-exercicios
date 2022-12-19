console.log("Atividade 1 ")
console.log(" ");
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

//Adição
const a = 15; 
const b = 5;

console.log("Soma " + (a + b)); 
//Subtração 
console.log("Subtração " + (a - b)); 
//Multiplicação
console.log("Multiplicação " + (a * b)); 
//Divisão
console.log("Divisão " + (a / b)); 
//Módulo
console.log("Módulo " + (a % b)); 

console.log(" ");
console.log("Atividade 2 ");
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const num1 = 45;
const num2 = 86;

if (num1 > num2){
    console.log("num1 " + num1 +   " é maior que num2 " + num2);
}
else{
    console.log("num2 " + num2 + " é maior que num1 " + num1);
}

console.log(" ");
console.log("Atividade 3 ");
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const numA = 152;
const numB = 220;
const numC = 150;

if (numA > numB && numA > numC){
    console.log("numA " + numA + " é o maior número " );
}
else if (numB > numC){
    console.log("numB " + numB + " é o maior número ");
}
else{
    console.log("numC " + numC + " é o maior número ");
}

console.log(" ");
console.log("Atividade 4 ");
//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
let value = -4;
if (value < 0){
    console.log("O número " + value + " é negativo");
}
else if(value > 0){
    console.log("O número " + value + " é positivo");
}
else{
    console.log("zero ");
}

console.log(" ");
console.log("Atividade 4 ");
// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.
const angle1 = 0;
const angle2 = 0;
const angle3 = -1;
const soma = (angle1 + angle2 + angle3);
if(soma === 180){
    console.log(true);
} 
else if(soma !== 180){
    console.log(false);
}
 if(soma < 0 ){
    console.log("ângulo inválido "); 
}

console.log(" ");
console.log("Atividade 5 ");
//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)


console.log(" ");
console.log("Atividade 6 ");
//Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A

//Porcentagem >= 80 -> B

//Porcentagem >= 70 -> C

//Porcentagem >= 60 -> D

//Porcentagem >= 50 -> E

//Porcentagem < 50 -> F

//O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let note = -1;
let porcentagem = note;

if (porcentagem >= 90){
    console.log("A ");
}
if(porcentagem >= 80 && porcentagem < 90){
    console.log("B ");
}
if(porcentagem >= 70 && porcentagem < 80){
    console.log("c ");
}
if(porcentagem >= 60 && porcentagem < 70 ){
    console.log("D ");
}
if(porcentagem >= 50 && porcentagem < 60 ){
    console.log("E ");
}
if(porcentagem < 50 && porcentagem > 0){
    console.log("F ");
}
else if(porcentagem < 0 || porcentagem > 100){
    console.log( "Erro, código encerrado"); 
}

