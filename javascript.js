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
