// Esta función retorna una carta

/**
 * 
 * @param {array<String>} deck Ejemplo: ['AC','HG','TG','BD'] 
 * @returns {String} Retorna el nombre de la carta
 */

export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}