let price = document.getElementsByClassName("value");
let addbtn = document.getElementsByClassName("add");
let removebtn = document.getElementsByClassName("remove");
let quantity = document.getElementsByClassName("quantity");

function remove() {}

function add() {
  for (let i = 0; i < price.length; i++) {
    console.log(price[i].innerText);
  }
}
function total() {
  for (let q = 0; q < quantity.length; q++) {
    console.log(quantity[q].innerText);
  }
}

function bla() {
  let total = document.getElementById("total-value");

  if (quantity > 0) {
    total = quantity * 2;
  }
}
