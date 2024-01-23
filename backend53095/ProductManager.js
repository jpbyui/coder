class ProductManager {
    constructor() {
        this.products = [];
        this.productId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return false;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("El código del producto ya existe");
            return false;
        }

        const newProduct = {
            id: this.productId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);

        console.log("Producto agregado:", newProduct);
        return true
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let foundProduct = this.products.find(product => product.id === id);

        if (foundProduct) {
            console.log("Producto encontrado:", foundProduct);
        } else {
            console.error('Not found')
        }
        return foundProduct;
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

let allProductsNow = productManager.getProducts()
console.log('Todos los productos al inicio: ', allProductsNow)

productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);

allProductsNow = productManager.getProducts()
console.log('Todos los productos al inicio: ', allProductsNow)

productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);

let productIdToFind = 1;
productManager.getProductById(productIdToFind);

productIdToFind = 3;
productManager.getProductById(productIdToFind);
