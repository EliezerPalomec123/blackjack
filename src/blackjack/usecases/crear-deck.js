import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * 
 * @param {array<String>} tipos Ejemplo: ['C','D','H','S']
 * @param {array<String>} especiales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

    if( !tipos ) throw new Error("Tipos de carta es obligatorio");
    // if( tipos.length = 0 ) throw new Error("Tipos de carta tiene que ser arreglo de string");


    let deck = [];
    console.log("Hola");
    console.log(tipos);
    console.log(especiales);
    // console.log(typeof(tipos));
    console.log(Array.isArray(tipos));
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }
    
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}