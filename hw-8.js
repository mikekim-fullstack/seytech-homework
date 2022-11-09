/**
 * To calculate the total amount of the products 
 * in the shopping cart, you can use the reduce() method, 
 * like this:
 */
let shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 500,
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 10,
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20,
    },
];

totalPrice = shoppingCart.reduce((acc, items) => (acc + items.price * items.qty), 0)
console.log('totalPrice: ', totalPrice)