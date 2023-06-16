const Pokedex = require('./api');

describe('fetchPokemon', () => {
    it('returns a promise of the useful pokemon data', (done) =>{
        const pokedex = new Pokedex()
        pokedex.fetchPokemon('charizard')
        .then((pokemon) => {
            expect(pokemon.id).toEqual(6);
            done();
        });
    });
    it('catches a pokemon and adds to the pokedex', (done) =>{
        const pokedex = new Pokedex();
        pokedex.catch('charizard')
        .then(() => {
            expect(pokedex.pokedex.length).toEqual(1);
            expect(pokedex.pokedex[0].name).toEqual('charizard');
            done();
        });
    });
    it('catches a pokemon, then catches another pokemon', (done) =>{
        const pokedex = new Pokedex();
        pokedex.catch('charizard');
        pokedex.catch('pikachu')
        .then(() => {
            expect(pokedex.pokedex.length).toEqual(2);
            expect(pokedex.pokedex[0].name).toEqual('charizard');
            expect(pokedex.pokedex[1].name).toEqual('pikachu');
            done();
        });
    });
    it('returns an array of all pokemon in the pokedex', (done) =>{
        const pokedex = new Pokedex();
        pokedex.catch('charizard');
        pokedex.catch('pikachu')
        .then(() => {
            expect(pokedex.all()[0].name).toEqual('charizard');
            done();
        });
    });
});
