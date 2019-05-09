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

function viewCart() {
  var Obj = new Object({cart})
  if (cart.length===0) {
    return `Your shopping cart is empty.`
  } else if (cart.length===1) {
      return `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
