class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable,
            this.plants = [],
            this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(x => x.plantName == plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {
        let plant = this.plants.find(x => x.plantName == plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let qnt = plant.quantity;
        //let spaceRequired = plant.spaceRequired;
        this.spaceAvailable += plant.spaceRequired;
        let index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);
        this.storage.push({ plantName, qnt });
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let result = [];
        let first = `The garden has ${this.spaceAvailable} free space left.`;
        result.push(first);
        Object.values(this.plants).sort((a, b) => (a.plantName).localeCompare(b.plantName));
        let list = [];
        this.plants.forEach((el) => {
            list.push(el.plantName);
        });
        result.push(`Plants in the garden: ${list.join(', ')}`);

        if (this.storage.length === 0) {
            result.push("Plants in storage: The storage is empty.");
        } else {
            let storageList = [];
            this.storage.forEach((el) => {
                storageList.push(`${el.plantName} (${el.qnt})`);
            });
            result.push(`Plants in storage: ${storageList.join(', ')}`);
        }
        return result.join('\n');
    }
}