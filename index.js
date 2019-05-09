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
  if (cart.length===0) {
    return `Your shopping cart is empty.`
  } else {
    var itemList = []
    for (var i=0; i<cart.length; i++) {
      
    }
  }

}
function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}
function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
