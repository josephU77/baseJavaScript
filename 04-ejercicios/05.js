/**
 * Crear algoritmo que devuelva 
 * menor y mayor de un array
 */

let arr = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (mayor < arr[i]){
            mayor = arr[i];
        }
        if (arr[i] < menor){
            menor = arr[i];
        }
    }
    return [mayor, menor];
}

let numeros = getMenorMayor(arr);
console.log(numeros);