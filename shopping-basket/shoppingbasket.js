class ShoppingBasket {
    constructor(){
        this.items = [];
        this.discount = 0;
    };


    addItem(candy) {
        this.items.push(candy);
    };

    applyDiscount(discount) {
        this.discount = discount;
    }


    getTotalPrice() {
       let totalPrice = this.items.reduce((total, item) => total + item.getPrice(), 0)
       return totalPrice - this.discount;
    }


}

module.exports = ShoppingBasket;