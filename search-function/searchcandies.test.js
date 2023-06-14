const searchCandies = require('./searchcandies');

describe('searchCandies', () => {
    it('Finds candies beginning with Ma and price less than 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
    it('Finds candies beginning with Ma and price less than 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
    it('Finds candies beginning with S and price less than 10', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
    it('Finds candies beginning with S and price less than 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
    it('Finds candies beginning with ma and price less than 10', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
    });