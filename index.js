var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random100 = Math.floor(Math.random()*101)
  var firstObject = {itemName: item, itemPrice: random100}
  cart.push(firstObject)
  return `${item} has been added to your cart.`
}
console.log(cart)
