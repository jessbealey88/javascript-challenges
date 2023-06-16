class Pokedex {
    constructor() {
        this.pokedex = [];
    }

fetchPokemon = (pokemonName) => {
   return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type) => type.type.name),
        };
        return pokemon;
    });
};

catch(pokemonName) {
    return this.fetchPokemon(pokemonName).then((pokemon) => {
        this.pokedex.push(pokemon);
    });
};

all() {
    return this.pokedex;
};
};

module.exports = Pokedex;