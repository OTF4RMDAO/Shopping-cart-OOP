class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart(cartNumber) {
        let cartDisplay = document.getElementById(`cart-display-${cartNumber}`);
        cartDisplay.innerHTML = "";
        this.items.forEach(item => {
            cartDisplay.innerHTML += `<p>${item.product.name}: $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}</p>`;
        });
        cartDisplay.innerHTML += `<h3>Total: $${this.getTotal()}</h3>`;
    }
}

// Create products
let product1 = new Product(1, "Laptop", 1000);
let product2 = new Product(2, "Phone", 800);
let product3 = new Product(3, "Headphones", 150);

// Create shopping carts
let cart1 = new ShoppingCart();
let cart2 = new ShoppingCart();
let cart3 = new ShoppingCart();
let cart4 = new ShoppingCart();

// Add items to each cart
cart1.addItem(product1, 1);  // Cart 1: 1 Laptop
cart1.addItem(product2, 2);  // Cart 1: 2 Phones

cart2.addItem(product3, 3);  // Cart 2: 3 Headphones
cart2.addItem(product1, 1);  // Cart 2: 1 Laptop

cart3.addItem(product2, 2);  // Cart 3: 2 Phones

cart4.addItem(product1, 1);  // Cart 4: 1 Laptop
cart4.addItem(product3, 1);  // Cart 4: 1 Headphones

// Function to show a specific cart
function showCart(cartNumber) {
    switch(cartNumber) {
        case 1:
            cart1.displayCart(cartNumber);
            break;
        case 2:
            cart2.displayCart(cartNumber);
            break;
        case 3:
            cart3.displayCart(cartNumber);
            break;
        case 4:
            cart4.displayCart(cartNumber);
            break;
        default:
            console.log("Cart not found");
    }
}
