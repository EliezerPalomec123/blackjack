// turno de la computadora
import {crearCarta, pedirCarta, valorCarta} from './index.js';
import { divCartasComputadora } from '../index.js';


/**
 * 
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar. 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML Referencia al elemento HTML de los puntos
 * @param {divCartasComputadora} divCartasComputadora Referencia al contenedor de la imágenes de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck ) => {

    if(!puntosMinimos) throw new Error('Puntos mínimos necesarios');

    let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');
        // divCartasComputadora.append( imgCarta );

        crearCarta( divCartasComputadora, carta );

        // crearCarta()

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}