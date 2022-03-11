
const numMaxPokemonToGet = 151;


function checkPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((res) => res.json())
  .then((resJson) => {
    console.log(resJson);
    printCards(resJson);
  });
}


function getCards (){
    for (let index = 1; index < numMaxPokemonToGet; index++) {
        checkPokemon(index)

    }
  }


function printCards(card){

        const gallery$$ = document.querySelector(".gallery");
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p");

        title$$.textContent = card.name;
        image$$.src= card.sprites.other.dream_world.front_default;
        type$$.textContent = 'Atack Damage: '+ card.weight + ' type: ' +card.types[0].type.name;


        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        figure$$.appendChild(type$$);
        gallery$$.appendChild(figure$$);
    
}
getCards(); 