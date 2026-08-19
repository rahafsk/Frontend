"use strict";

/* =====================================================
   2.1 - ARRAYS: THE BASICS
===================================================== */

console.log("========== 2.1 ARRAYS ==========");

let cities = [
  "Muscat",
  "Salalah",
  "Sohar",
  "Nizwa",
  "Sur",
  "Ibri",
];

console.log("Original array:", cities);

cities.push("Barka");
console.log("After push:", cities);

cities.pop();
console.log("After pop:", cities);

cities.shift();
console.log("After shift:", cities);

cities.unshift("Khasab");
console.log("After unshift:", cities);

console.log("Length before duplicate:", cities.length);

cities.push("Sohar");

console.log("After adding duplicate:", cities);
console.log("Length after duplicate:", cities.length);

console.log("Classic for loop:");

for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}

console.log("for...of loop:");

for (const city of cities) {
  console.log(city);
}

/* =====================================================
   2.2 - DESTRUCTURING
===================================================== */

console.log("========== 2.2 DESTRUCTURING ==========");

const order = {
  id: 101,
  customer: "Sara Ahmed",
  total: 249.99,
  status: "Shipped",
};

const { customer, total } = order;

console.log("Customer:", customer);
console.log("Total:", total);

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber, ...remainingNumbers] = numbers;

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);
console.log("Remaining numbers:", remainingNumbers);

function summarizeOrder({ id, customer, total, status }) {
  return `Order #${id} for ${customer}: $${total.toFixed(2)} (${status})`;
}

console.log(summarizeOrder(order));

/* =====================================================
   2.3 - SPREAD AND REST
===================================================== */

console.log("========== 2.3 SPREAD AND REST ==========");

const onlineOrderIds = [101, 102, 103];
const storeOrderIds = [201, 202, 203];

const allOrderIds = [...onlineOrderIds, ...storeOrderIds];

console.log("Combined order IDs:", allOrderIds);

const originalOrder = {
  id: 305,
  customer: "Omar Ali",
  total: 89.5,
  status: "Pending",
};

const cancelledOrder = {
  ...originalOrder,
  status: "Cancelled",
};