/**
 *  Remove Item from list in array.
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

filteredCart = shoppingCart.filter(item => item.product != 'phone')
console.log('filteredCart: ', filteredCart)