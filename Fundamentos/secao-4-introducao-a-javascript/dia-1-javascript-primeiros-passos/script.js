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