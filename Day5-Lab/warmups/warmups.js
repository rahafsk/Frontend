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

cities.push("Barka"); // push() adds an element to the end of the array.
console.log("After push:", cities);

cities.pop(); // pop() removes the last element from the array and returns it.
console.log("After pop:", cities);

cities.shift(); // shift() removes the first element from the array and returns it.
console.log("After shift:", cities);

cities.unshift("Khasab"); // unshift() adds an element to the beginning of the array.
console.log("After unshift:", cities);

console.log("Length before duplicate:", cities.length); // The length property tells us how many elements are inside the array.

cities.push("Sohar");

console.log("After adding duplicate:", cities); // The array now contains a duplicate value.
console.log("Length after duplicate:", cities.length); // The length property counts all elements, including duplicates.

console.log("Classic for loop:"); 

for (let index = 0; index < cities.length; index++) {  
  console.log(cities[index]); // Accessing each element using its index.
}

console.log("for...of loop:");

for (const city of cities) {  // for...of loop iterates over the values of the array directly.
  console.log(city);
}

/* =====================================================
   2.2 - DESTRUCTURING
===================================================== */

console.log("========== 2.2 DESTRUCTURING ==========");

const order = {  // An object representing an order.
  id: 101,
  customer: "Sara Ahmed",
  total: 249.99,
  status: "Shipped",
};

const { customer, total } = order;// Destructuring assignment extracts values from objects and assigns them to variables.

console.log("Customer:", customer); // Accessing the 'customer' property from the destructured object.
console.log("Total:", total); // Accessing the 'total' property from the destructured object.

const numbers = [10, 20, 30, 40, 50]; // An array of numbers.

const [firstNumber, secondNumber, ...remainingNumbers] = numbers; 

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);
console.log("Remaining numbers:", remainingNumbers);

function summarizeOrder({ id, customer, total, status }) { // Function that takes an order object and returns a formatted string summarizing the order.
  return `Order #${id} for ${customer}: $${total.toFixed(2)} (${status})`;  // Formatting the order summary with fixed-point notation for the total.
}

console.log(summarizeOrder(order));  // Calling the summarizeOrder function with the order object and logging the result.

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

console.log("Original order:", originalOrder);
console.log("Updated copy:", cancelledOrder);

function collectOrderTotals(...totals) {
  return totals;
}

console.log(
  "Collected totals:",
  collectOrderTotals(19.99, 45, 120.5, 249.99),
);

/* =====================================================
   2.4 - ARRAY METHODS
===================================================== */

console.log("========== 2.4 ARRAY METHODS ==========");

const warmupOrders = [
  {
    id: 401,
    customer: "Sara Ahmed",
    total: 249.99,
    status: "Shipped",
  },
 {
    id: 402,
    customer: "Omar Ali",
    total: 89.5,
    status: "Pending",
  },
  {
    id: 403,
    customer: "Layla Noor",
    total: 320,
    status: "Shipped",
  },
  {
    id: 404,
    customer: "Ahmed Khan",
    total: 45.75,
    status: "Cancelled",
  },
  {
    id: 405,
    customer: "Maya Said",
    total: 175.25,
    status: "Pending",
  },
  {
    id: 406,
    customer: "Noor Hassan",
    total: 59.99,
    status: "Shipped",
  },
  {
    id: 407,
    customer: "Yusuf Saleh",
    total: 210,
    status: "Cancelled",
  },
  {
    id: 408,
    customer: "Fatma Rashid",
    total: 135.4,
    status: "Shipped",
  },
];

// reduce(): calculate the combined total
const combinedTotal = warmupOrders.reduce(
  (sum, currentOrder) => sum + currentOrder.total,
  0,
);

console.log("Combined total:", combinedTotal.toFixed(2));

// filter(): keep Shipped orders
const shippedOrders = warmupOrders.filter(
  ({ status }) => status === "Shipped",
);

console.log("Shipped orders:", shippedOrders);

// map(): create an array of customer names
const customerNames = warmupOrders.map(
  ({ customer }) => customer,
);

console.log("Customer names:", customerNames);

// find(): find the first order over $200
const firstOrderOver200 = warmupOrders.find(
  ({ total }) => total > 200,
);

console.log("First order over $200:", firstOrderOver200);

// some(): check whether any order is Cancelled
const hasCancelledOrder = warmupOrders.some(
  ({ status }) => status === "Cancelled",
);

console.log("Is any order Cancelled?", hasCancelledOrder);

// every(): check whether all totals are positive
const allTotalsArePositive = warmupOrders.every(
  ({ total }) => total > 0,
);

console.log(
  "Does every order have a positive total?",
  allTotalsArePositive,
);

// sort(): highest total first
// Spread creates a copy because sort() mutates arrays.
const ordersHighestFirst = [...warmupOrders].sort(
  (firstOrder, secondOrder) =>
    secondOrder.total - firstOrder.total,
);

console.log("Orders sorted highest first:", ordersHighestFirst);

// Chained filter() and map()
const shippedCustomerSummaries = warmupOrders
  .filter(({ status }) => status === "Shipped")
  .map(
    ({ customer, total }) =>
      `${customer}: $${total.toFixed(2)}`,
  );

console.log(
  "Shipped customer summaries:",
  shippedCustomerSummaries,
);