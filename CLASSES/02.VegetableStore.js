class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let vegetable = this.availableProducts.find(x => x.type == type);
            if (vegetable) {
                vegetable.quantity += quantity;
                if (price > vegetable.price) {
                    vegetable.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
            }
        });
        let list = []
        this.availableProducts.forEach(el => {
           list.push(el.type)})
        return `Successfully added ${list.join(', ')}`;
    };
    buyingVegetables (selectedProducts){
        let totalPrice = 0;
        selectedProducts.forEach(el => {
            let [type, quantity] = el.split(' ')
            quantity = Number(quantity)
            let vegetable = this.availableProducts.find(x => x.type == type);
            if(!vegetable){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if(quantity > vegetable.quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += (quantity * vegetable.price);
            vegetable.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable (type, quantity) {
        let vegetable = this.availableProducts.find(x => x.type == type);
        if(!vegetable){
            throw new Error(`${type} is not available in the store.`)
        }
        if(quantity > vegetable.quantity){
            vegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        vegetable.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    };
    revision () {
        let list = ['Available vegetables:']
        let unsorted = Object.values(this.availableProducts);
        let sorted = unsorted.sort((a, b) => {
            return a.price - b.price;
        });
        sorted.forEach((el) => {
            list.push(`${el.type}-${el.quantity}-$${el.price}`);
        });
        list.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return list.join('\n')
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia"); 

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"])); 

console.log(vegStore.rottingVegetable("Okra", 1)); 

console.log(vegStore.rottingVegetable("Okra", 2.5)); 

console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"])); 

console.log(vegStore.revision()); 