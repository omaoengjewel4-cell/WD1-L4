let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push(name + " - $" + price);
  total += price;
  document.getElementById("cart-list").innerHTML = 
    cart.join("<br>") + "<br><br>Total: $" + total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for buying! Total: $" + total);
    cart = [];
    total = 0;
    document.getElementById("cart-list").innerHTML = "";
  }
}
