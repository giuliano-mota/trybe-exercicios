let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);

}

//Some todos os valores contidos no array e imprima o resultado;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (index = 0; index < numbers.length; index += 1){
    result += numbers[index];

}
console.log("Soma de todos os elementos",result);

//Calcule e imprima a média aritmética dos valores contidos no array;
console.log("-------------------------------");
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sum = 0;
for (index = 0; index < numbers.length; index += 1){
    sum += numbers[index];

}
let average = sum / numbers.length;
console.log("Média aritmética", average);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
console.log("-----------------------------");
if (average > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("-----------------------------");
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for(index = 1; index < numbers.length; index += 1){
    if (numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}
console.log(higherNumber)


