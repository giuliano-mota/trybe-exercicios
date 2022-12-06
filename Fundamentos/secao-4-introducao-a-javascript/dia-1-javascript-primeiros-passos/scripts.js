//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

//Adição
let a = 5,b = 7;
let adicao;
console.log("Adição: ",adicao = a + b);
//Subtração
a = 10, b = 4;
let subtracao; 
console.log("Subtração: ",subtracao = a - b);
//Multipliocação
a = 7, b = 8;
let multiplicação;
console.log("Multiplicação: ", multiplicação = a * b);
//Divisão
a = 12, b = 6;
let divisao
console.log("Divisão: ",divisao = a / b);
//Módulo
a = 25, b = 5;
let modulo;
console.log("Módulo: ", modulo = a % b);

//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const num1 = 30;
const num2 = 20; 

if (num1 > num2){
    console.log("O maior valor é num1: ", num1);
}
else{
    console.log("O maior valor é num2: ",num2);
}

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const valor1 = 40;
const valor2 = 45;
const valor3 = 25; 

if (valor1 > valor2 && valor1 > valor3){
    console.log("Valor1 é o maior ", valor1);
}
else if(valor2 > valor3){
    console.log("Valor2 é o maior ", valor2);
}
else{
    console.log("Valor3 é o maior ", valor3)
}