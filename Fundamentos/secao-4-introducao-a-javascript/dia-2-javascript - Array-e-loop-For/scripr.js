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
