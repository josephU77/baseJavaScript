/**
 * indice validar qye no sea menor 
 * a cero y que el elemento exista
 * en el array
 */

function getbyIdx(arr, idx){
    if(idx >= 0 && idx < arr.length){
        return arr[idx];
    } else {
        return 'index no valido';
    }
}

let resultado = getbyIdx([1, 2, 3, 4, 5, 6], 4)
console.log(resultado);