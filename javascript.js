let removebtn = document.getElementsByClassName("remove");

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

/*for (let addCounter = 0; addCounter < addBtn.length; addCounter++) {
  addBtn[addCounter].addEventListener("click", function() {
    cartNumbers();
    totalCost(products[addCounter]);
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }
}

function totalCost(product) {
  //console.log("The product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
} */
