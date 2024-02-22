const cart = {
    items: [],
    addItem: function(item) {
        this.items.push(item);
    },
    removeItem: function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },
    getTotalPrice: function() {
        let totalPrice = 0;
        for (let i = 0; i < this.items.length; i++) {
            totalPrice += this.items[i].price;
        }
        return totalPrice;
    }
};
