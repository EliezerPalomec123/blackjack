// Fución para crear el elemento img y añadirlo al contenedor
/**
 * 
 * @param {HttpElement} HttpElement Cotenedor de las cartas del jugador 
 * @param {String} carta Carta obtenida
 */
export const crearCarta = (HttpElement, carta) => {
    if(!carta) throw new Error("La carta es un argumento obligatorio");
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    HttpElement.append( imgCarta );
}