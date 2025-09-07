/**
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * WQHD 3840 x 2160
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8k';

    } 
    else if(ancho >= 3840 && alto >= 2160){
        return 'WQHD';

    }   
    else if(ancho >= 1920 && alto >= 1080){
        return 'FHD';

    }   
    else if (ancho >= 1280 && alto >= 720){
        return 'HD';

    } else {
        return false;
    }
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);