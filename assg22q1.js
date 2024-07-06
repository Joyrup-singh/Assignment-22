// 1. In the following shopping cart add, remove, and edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// * add 'Meat' in the beginning of your shopping cart if it has not been already added
// * add Sugar at the end of your shopping cart if it has not been already added
// * remove 'Honey' if you are allergic to honey
// * modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]

let addFirstItem = shoppingCart.unshift("Meat");
let addLastItem = shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";


console.log(shoppingCart);
