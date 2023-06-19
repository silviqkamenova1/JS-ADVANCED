class WineSelection {
    constructor(space) {
        this.space = space,
            this.wines = [],
            this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        let paid = false;
        if (this.space > 0) {
            this.space--;
            this.wines.push({ wineName, wineType, price, paid:false});
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        } else {
            throw new Error("Not enough space in the cellar.") ;
        }
    }
    payWineBottle(wineName, price) {
        let wine = this.wines.find(x => x.wineName == wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid == true) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            wine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }
    openBottle(wineName) {
        let wine = this.wines.find(x => x.wineName == wineName);
        if (!wine) {
            throw new Error("The wine, you're looking for, is not found.");
        }
        if (wine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            //let wineToRemove = this.wines['wineName']
            let index = this.wines.indexOf(wine);
            this.wines.splice(index, 1);
            //this.wines.splice(this.wines.findIndex(a => a.wine === wineToRemove.wine) , 1)
            return `You drank a bottle of ${wineName}.`;
        }
    }
    cellarRevision(wineType) {
        if (arguments.length === 0) {
            let unsorted = Object.values(this.wines);
            let sorted = unsorted.sort((a, b) => (a.wineName).localeCompare(b.wineName));
            let list = [];
            sorted.forEach((el) => {
                let paid = ''
                if (el.paid === false) {
                    paid = 'Not Paid';
                    list.push(`${el.wineName} > ${el.wineType} - ${paid}.`);
                } else {
                    paid = 'Has Paid';
                    list.push(`${el.wineName} > ${el.wineType} - ${paid}.`);
                }
            })
            
            return `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n${list.join('\n')}`;
        } else {
            let wine = this.wines.find(x => x.wineType == wineType);
            if (!wine) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                let paid = '';
                if (wine.paid === false) {
                    paid = 'Not Paid';
                } else {
                    paid = 'Has Paid';
                }
                return `${wine.wineName} > ${wine.wineType} - ${paid}.`;
            }
        }
 
    }
}