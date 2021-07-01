class Product{
    static productCounter = 0;

    constructor(nameProduct, priceProduct){
        this._name = nameProduct;
        this._price = priceProduct;
        this._id = ++Product.productCounter;
    }

    get idProduct(){
        return `Id: ${this._id}`;
    }

    get name(){
        return `Name: ${this._name}`;
    }

    set name(chageNameProduct){
        this._name = chageNameProduct;
    }

    get price(){
        return `Price: $${this._price}`;
    }

    set price(changePrice){
        this._price = changePrice;
    }

    toString(){
        return `Name: ${this._name}, ID product: ${this._id}, Price: $${this._price}`  
    }
}

class Orden{
    static orderCounter = 0;
    static get MAX_PRODUCT(){
        return 5; 
    }
    constructor(){
        this._idOrden = ++Orden.orderCounter;
        this._product = [];
        /* this._addedProducts = 0; */
    }
    get idOrden(){
        return `Id orden: ${this._idOrden}`;
    }

    addProduct(product){
        (this._product.length < Orden.MAX_PRODUCT) ? this._product.push(product) : console.log('Se supero el maximo de productos');
    }

    finalPrice(){
        let total = 0;
        for(let products of this._product){
            total += products._price;
        }
        return total;
    }

    showOrden(){
        let productsOrden = ' ';
        for (let product of this._product){
            productsOrden += '\n --> '+ product.toString() + '\n';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.finalPrice()}, \n Product: ${productsOrden}`)
    }
}

let producto1 = new Product('Arroz', 25.23);
let producto2 = new Product('Coffee', 254.21);

let orden1 = new Orden();
orden1.addProduct(producto1);
orden1.addProduct(producto2);

let show = orden1.showOrden();
console.log(show)