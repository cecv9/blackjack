/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */
let deck =[];//Array de cartas donde se guardaran las cartas
const tipos = ['C','D','H','S',]; //Array de los tipos de cartas
const especiales = ['A','J','Q','K']; //Array de las cartas especiales

//Esta funcion crea un nuevo deck
 const crearDeck =() =>{

    for(let i=2; i<=10;i++){ //Ciclo para las cartas del 2 al 10
        for(let tipo of tipos){ //Ciclo para los tipos de cartas
                deck.push(i + tipo); //Agrega las cartas al deck
        }
   }

   for(tipo of tipos){ //Ciclo para los tipos de cartas
       for(let esp of especiales){ //Ciclo para las cartas especiales
           deck.push(esp + tipo); //Agrega las cartas especiales al deck
   }
}

//console.log(deck); //Imprime el deck

deck=_.shuffle(deck); //Baraja las cartas

console.log(deck); //Imprime el deck barajado

return deck; //Retorna el deck barajado

}

   crearDeck(); //Llama a la funcion crearDeck



    //Esta funcion me permite tomar una carta

   const pedirCarta = () =>{

    if(deck.length === 0){ //Condicional si el deck esta vacio
        throw 'No hay cartas en el deck'; //Mensaje de error
    }

    const carta = deck.pop(); //Toma la ultima carta del deck
    console.log(deck); //Imprime el deck
    console.log(carta); //Imprime la carta tomada

    return carta; //Retorna la carta tomada
   }


  //pedirCarta(); //Llama a la funcion pedirCarta