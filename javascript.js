let price = document.getElementsByClassName("value");
let addbtn = document.getElementsByClassName("add");
let removebtn = document.getElementsByClassName("remove");
let quantity = document.getElementsByClassName("quantity");

function remove() {}

function add() {
  for (let i = 0; i < price.length; i++) {
    console.log(price[i].innerText);
    
    //only show the remove button if there are items of that type on the cart
    //add.addEventListener ("click", function () {
     // removebtn.classList.toggle("display-none");
    //})
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


//Youtube 1

function () {
  let 
}