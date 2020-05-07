//list of products

let products = [
  {
    name: "Logitech Pebble M350 Pink",
    tag: "mouse",
    price: 15.99,
    count: ""
  },
  {
    name: "Logitech K380 Multi-Device Bluetooth Keyboard",
    tag: "keyboard",
    price: 20.99,
    count: ""
  },
  {
    name: "Anker SoundCore min",
    tag: "speaker",
    price: 22.99,
    count: ""
  }
];
let basket = [];
//ADD
function add() {
  let quantity = document.getElementsByClassName("quantity");
  let totalPrice = [];
  let nameCount = 0;

  let basketSentence = document.getElementById("yourBasket");
  for (let i = 0; i < quantity.length; i++) {
    products[i].count = quantity[i].value;
  }
  for (var name in products) {
    nameCount = nameCount + 1;
  }
  yourBasket.innerHTML = "";
  for (let i = 0; i < nameCount; i++) {
    totalPrice[i] = products[i].price * products[i].count;

    var sum = totalPrice.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (products[i].count != 0) {
      basket.push(products[i]);
      const newLi = document.createElement("li");

      newLi.innerText = products[i].count + " " + products[i].name;
      yourBasket.append(newLi);
    }
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
  yourBasket.innerHTML = "";

  for (var name in products) {
    nameCount = nameCount + 1;
  }
  for (let i = 0; i < quantity.length; i++) {
    products[i].count = quantity[i].value;
  }
  for (let i = 0; i < nameCount; i++) {
    totalPrice[i] = products[i].price * products[i].count;

    var sum = totalPrice.reduce(function(a, b) {
      return a + b;
    }, 0);

    if (products[i].count != 0) {
      basket.push(products[i]);
      const newLi = document.createElement("li");

      newLi.innerText = products[i].count + " " + products[i].name;
      yourBasket.append(newLi);
    }

    document.getElementById("total-value").innerHTML = sum;
  }
}
