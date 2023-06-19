class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }
    addSmartphone(model, storage, price, condition) {
        if (model !== '' && storage >= 0 && price >= 0 && condition !== '') {
            this.availableSmartphones.push({ model, storage, price, condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        } else {
            throw new Error("Invalid smartphone!");
        }
    }
    sellSmartphone(model, desiredStorage) {
        const phone = this.availableSmartphones.find(x => x.model === model);
        if (!phone) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice = 0;
        if (phone.storage >= desiredStorage) {
            soldPrice = phone.price;
        } else if (desiredStorage - phone.storage <= 128) {
            soldPrice = phone.price * 0.9;
        } else if (desiredStorage - phone.storage > 128) {
            soldPrice = phone.price * 0.8;
        }
        this.availableSmartphones = this.availableSmartphones.filter(el => el.model !== model);
        this.soldSmartphones.push({ model, storage: phone.storage, soldPrice: soldPrice });
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    upgradePhones() {
        const list = ["Upgraded Smartphones:"];
        if (this.availableSmartphones.length > 0) {
            for (let smartphone of this.availableSmartphones) {
                smartphone.storage *= 2;
            }
            this.availableSmartphones.forEach((el) => {
                list.push(`${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$`);
            });
            return list.join('\n');
        } else {
            throw new Error("There are no available smartphones!");
        }
    }
    salesJournal(criteria) {
        if (criteria === 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria === 'model') {
            this.soldSmartphones.sort((a, b) => (a.model).localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }
        const result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`];
        result.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach((el) => {
            result.push(`${el.model} / ${el.storage} GB / ${(el.soldPrice).toFixed(2)}$`);
        });
        return result.join('\n');
    }
}