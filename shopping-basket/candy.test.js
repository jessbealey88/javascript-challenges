const Candy = require('./candy');

describe('Candy', () => {
    it('returns the name of the candy', () => {
        const newCandy = new Candy('Snickers', 1.50)
        expect(newCandy.getName()).toEqual('Snickers');
    });
    it('returns the price of the candy', () => {
        const newCandy = new Candy('Snickers', 1.50)
        expect(newCandy.getPrice()).toEqual(1.50);
    });
});