// ******* STATE *******
const state = {{ name: "apple", quantity: 6. price: 1.75 },
{ name: "banana", quantity:6000, price: 0.25 },};

const items = [
  { name: "apple", price: 1.75 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 1.0 },
  { name: "broccoli", price: 3.0 },
  { name: "cucumber", price: 1.0 },
  { name: "carrot", price: 1.0 },
  { name: "milk", price: 5.75 },
  { name: "cheddar cheese", price: 4.0 },
  { name: "sourdough loaf", price: 5.5 },
  { name: "eggs", price: 4.0 },
  { name: "cereal", price: 3.5 },
  { name: "rice", price: 5 },
];

// ******* REFERENCES *******
const form = document.querySelector("form");
const itemInput = document.querySelector("#grocery-input");
const addButton = document.querySelector(".submit-btn");
const clearButton = document.getElementsByClassName("clear-btn");
const tableBody = document.c
// ******* EVENT LISTENERS *******
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = itemInput.value;
  const quantity = Math.floor(Math.random() * 10);
  const price = Math.floor(Math.random() * 50);

  state.groceries.push({name, quantity, price});

  itemInput.value = "";

  console.log("groceries: ", state.groceries);

});
// Initial rendering

render();


clearButton.addEventListener("click", () =>{
  state.groceries = state.groceries = [];
  console.log
})

// ******* RENDER *******
function render() {
  state.groceries.map((item) => {
    const newRow = document.createElement("tr");
    

    const name = document.createElement("td")
    name.innerText = item.name;
    
    const quantity = document.createElement("td")
    quantity.innerText = item.quantity;
    
    const price = document.createElement("td")
    price.innerText = item.price;
    
    console.log("new row: "newRow);
    return newRow;
  });
}
// ******* FUNCTIONS *******
