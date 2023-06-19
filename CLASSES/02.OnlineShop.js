class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace,
            this.products = [],
            this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if ((this.warehouseSpace - spaceRequired) >= 0) {
            this.products.push({ product, quantity });
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        } else {
            throw new Error("Not enough space in the warehouse.");
        }
    }
    quantityCheck(product, minimalQuantity) {
        let storeProduct = this.products.find(x => x.product == product);
        if (!storeProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (minimalQuantity <= storeProduct.quantity) {
            return `You have enough from product ${product}.`;
        }
        let difference = minimalQuantity - storeProduct.quantity;
        storeProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }
    sellProduct(product) {
        let storeProduct = this.products.find(x => x.product == product);
        if (!storeProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        storeProduct.quantity--;
        //let quantity = storeProduct.quantity;
        this.sales.push({ product, quantity:1 });
        return `The ${product} has been successfully sold.`;
    }
    revision() {
        let list = [];
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!");
        }
        list.push(`You sold ${this.sales.length} products today!`);
        list.push("Products in the warehouse:")
        this.products.forEach((el) => {
            list.push(`${el.product}-${el.quantity} more left`);
        });
        return list.join('\n');
    }
}