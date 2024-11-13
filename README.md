# Shopping Cart Project (Object-Oriented JavaScript)

## Project Overview

This project is an Object-Oriented JavaScript (OOJ) implementation of a shopping cart system. It recreates a basic shopping cart using JavaScript objects and classes, allowing users to:
- Create products
- Add items to a shopping cart
- Display cart items with prices
- Calculate the total price of items in the cart
- Remove items from the cart

The project builds on concepts such as JavaScript classes, methods, and DOM manipulation to make a dynamic, interactive shopping experience.

## Features

1. **Product Creation**: Each product has an `id`, `name`, and `price`.
2. **Cart Items**: Each shopping cart item holds a product and its quantity.
3. **Shopping Cart**: Users can add or remove items, and see a total price for the cart.
4. **Display Cart**: The items, quantities, prices, and total cost are displayed dynamically on the webpage.
5. **Multiple Carts**: The project supports multiple carts to demonstrate the flexibility of the shopping cart functionality.

## Project Structure

- **index.html**: Contains the HTML structure, including sections for each cart and buttons to interact with the cart.
- **styles.css**: Provides basic styling for the shopping cart layout.
- **script.js**: Contains the JavaScript code, including all classes and methods to manage the shopping cart functionalities.

## Classes and Methods

### Product Class
The `Product` class creates a product object with the following properties:
- `id`: A unique identifier for the product.
- `name`: The product's name.
- `price`: The price of the product.

### ShoppingCartItem Class
The `ShoppingCartItem` class creates an item with:
- `product`: The `Product` object.
- `quantity`: The number of units of the product.
- `getTotalPrice()`: Calculates the total price of the item based on quantity and price.

### ShoppingCart Class
The `ShoppingCart` class contains an array of `ShoppingCartItem` instances and provides methods to manage the cart:
- `addItem(product, quantity)`: Adds a product to the cart with the specified quantity. If the item is already in the cart, it updates the quantity.
- `removeItem(productId)`: Removes a product from the cart based on its `id`.
- `getTotal()`: Returns the total price of all items in the cart.
- `displayCart(cartNumber)`: Displays the cart items, quantities, and total price on the page.

## Usage Instructions

1. **Setup**: Clone this repository and open `index.html` in a browser to see the shopping cart in action.

2. **Interacting with the Cart**:
    - Click **Show Cart** buttons to view the contents of each cart.
    - Use the **Remove Item** button (if available) to remove specific items.
    - The cart will update and show the total price each time an item is added, removed, or displayed.

3. **Adding Products and Testing the Cart**:
   You can modify `script.js` to add more products and experiment with different quantities for each cart.

## Example Code

Here's a quick overview of how the objects and methods work together in the code.

```javascript
// Create products
let product1 = new Product(1, "Laptop", 1000);
let product2 = new Product(2, "Phone", 800);

// Create a shopping cart
let cart1 = new ShoppingCart();

// Add items to the cart
cart1.addItem(product1, 1);  // Adds 1 Laptop
cart1.addItem(product2, 2);  // Adds 2 Phones

// Display the cart
cart1.displayCart(1);  // Displays items in cart1
