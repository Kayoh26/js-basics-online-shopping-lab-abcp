var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //randomly-generate price btwn 0-100
  var itmPrice = Math.floor(Math.random() *100); 
  
  //Use key-value pair to create obj for item
  //Add to cart array using push
  cart.push({[item]:itmPrice});
  
  //Print item has been added to cart.
  console.log(`${item} has been added to your cart.`);
  
  //Return cart
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
