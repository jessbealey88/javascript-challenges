const ShoppingBasket = require('./shoppingbasket');

describe('ShoppingBasket', () => {
    it('gets the price for an item in the basket', () => {
        const candyDouble = { getName: () => "Mars", getPrice: () => 1.70};
        const basket = new ShoppingBasket();
        basket.addItem(candyDouble);
        expect(basket.getTotalPrice()).toBe(1.70);
    });
    it('gets the total price for two items in the basket', () => {
        const candyDouble = { getName: () => "Mars", getPrice: () => 1.70};
        const anotherDouble = { getName: () => "Snickers", getPrice: () => 1.30};
        const basket = new ShoppingBasket();
        basket.addItem(candyDouble);
        basket.addItem(anotherDouble);
        expect(basket.getTotalPrice()).toBe(3.00);
    });
    it('applies a discountand removes from the price of item in the basket', () => {
        const candyDouble = { getName: () => "Mars", getPrice: () => 1.70};
        const basket = new ShoppingBasket();
        basket.addItem(candyDouble);
        basket.applyDiscount(0.5);
        expect(basket.getTotalPrice()).toBe(1.20);
    });

});