// HÁA UM PAR ENTRE NÓS

//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if
const num1 = 1;
const num2 = 3;
const num3 = 7;

let isEvem = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    isEvem = true;
};
console.log(isEvem);
