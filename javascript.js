//list of products

let products = [
  {
    name: "mouse",
    tag: "mouse",
    price: 15.99,
    count: ""
  },
  {
    name: "keyboard",
    tag: "keyboard",
    price: 20.99,
    count: ""
  },
  {
    name: "speaker",
    tag: "speaker",
    price: 22.99,
    count: ""
  }
];

//ADD
function add() {
  let quantity = document.getElementsByClassName("quantity");
  let totalPrice = [];
  let nameCount = 0;
  for (let i = 0; i < quantity.length; i++) {
    products[i].count = quantity[i].value;
  }
  for (var name in products) {
    nameCount = nameCount + 1;
  }
  for (let i = 0; i < nameCount; i++) {
    totalPrice[i] = products[i].price * products[i].count;

    var sum = totalPrice.reduce(function(a, b) {
      return a + b;
    }, 0);

    document.getElementById("total-value").innerHTML = sum;
  }
}

//REMOVE
let removeBtn = document.querySelectorAll(".remove");
let quantity = document.querySelectorAll(".quantity");

removeBtn.forEach(function(check) {
  check.addEventListener("click", checkIndex);
});

function checkIndex(event) {
  let totalPrice = [];
  let nameCount = 0;
  var index = Array.from(removeBtn).indexOf(event.target);
  console.log(index);
  quantity[index].value = "";
  products[index].count = quantity[index].value;
  console.log(products[index].count);

  for (var name in products) {
    nameCount = nameCount + 1;
  }
  for (let i = 0; i < nameCount; i++) {
    totalPrice[i] = products[i].price * products[i].count;

    var sum = totalPrice.reduce(function(a, b) {
      return a + b;
    }, 0);

    document.getElementById("total-value").innerHTML = sum;
  }
}
