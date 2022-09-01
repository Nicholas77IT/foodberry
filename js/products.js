//Enable popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


var cartList = [];
var cartDisplay = document.querySelector("#cart_display");
var cartElements = document.querySelector("#cart_elements");
var cake = document.getElementById("cake_btn")

function displayItems() {
    localStorage.clear();
    cartDisplay.innerHTML = "";
    cartElements.innerHTML = null;
    for(let i = 0; i < cartList.length; i++) {
        cartDisplay.innerHTML += `${cartList[i]} <br>`;
        cartElements.innerHTML += `${cartList[i]} \n`;
    }
    localStorage.setItem("Cart Elements", cartElements.innerHTML)
}

displayItems();

/*functions to add items to the cart
couldn't figure out how to use a single function
*/

function addCake() {
    cartList.push("Birthday Cake")
    displayItems();
}

function addParfait() {
    cartList.push("Cake Parfait");
    displayItems();
}

function addSpringrolls() {
    cartList.push("Spring Rolls");
    displayItems();
}

function addMeatpie() {
    cartList.push("Meat Pie");
    displayItems();
}

function addBankuchili() {
    cartList.push("Banku with Chili Pepper and Tilapia");
    displayItems();
}

function addJollof() {
    cartList.push("Vegetable Jollof rice with Chicken/Fish");
    displayItems();
}

function addFriedrice() {
    cartList.push("Fried rice with Chicken/Fish");
    displayItems();
}

function addWaakye() {
    cartList.push("Waakye with FIsh/Chicken");
    displayItems();
}

function addYam() {
    cartList.push("Chicken wings with fried yam chips");
    displayItems();
}

function addAsana() {
    cartList.push("Asana");
    displayItems();
}

function addLamugine() {
    cartList.push("Lamugine");
    displayItems();
}

function addPineapple() {
    cartList.push("Pineapple Juice");
    displayItems();
}

function addWatermelon() {
    cartList.push("Watermelon Juice");
    displayItems();
}

function addOrange() {
    cartList.push("Orange Juice");
    displayItems();
}