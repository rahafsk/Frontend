"use strict";

/* =====================================================
   1. LOCAL ORDER DATA
===================================================== */

const orders = [
  {
    id: 1001,
    customer: "Sara Ahmed",
    status: "Shipped",
    date: "2026-08-01",
    items: [
      {
        product: "Wireless Mouse",
        price: 24.99,
        quantity: 2,
      },
      {
        product: "Mechanical Keyboard",
        price: 79.5,
        quantity: 1,
      },
    ],
  },
  {
    id: 1002,
    customer: "Omar Ali",
    status: "Pending",
    date: "2026-08-02",
    items: [
      {
        product: "27-inch Monitor",
        price: 229.99,
        quantity: 1,
      },
      {
        product: "HDMI Cable",
        price: 12.5,
        quantity: 2,
      },
    ],
  },
  {
    id: 1003,
    customer: "Layla Noor",
    status: "Shipped",
    date: "2026-08-03",
    items: [
      {
        product: "USB-C Hub",
        price: 44.95,
        quantity: 1,
      },
      {
        product: "Laptop Stand",
        price: 36.75,
        quantity: 1,
      },
      {
        product: "Webcam",
        price: 69.99,
        quantity: 1,
      },
    ],
  },
  {
    id: 1004,
    customer: "Ahmed Khan",
    status: "Cancelled",
    date: "2026-08-04",
    items: [
      {
        product: "Noise-Cancelling Headphones",
        price: 189.99,
        quantity: 1,
      },
    ],
  },
  {
    id: 1005,
    customer: "Maya Said",
    status: "Pending",
    date: "2026-08-05",
    items: [
      {
        product: "Tablet",
        price: 319,
        quantity: 1,
      },
      {
        product: "Protective Case",
        price: 28.5,
        quantity: 1,
      },
    ],
  },
{
    id: 1006,
    customer: "Rahaf Said",
    status: "Shipped",
    date: "2026-08-06",
    items: [
      {
        product: "Smart Speaker",
        price: 84.99,
        quantity: 2,
      },
      {
        product: "Smart Bulb",
        price: 16.25,
        quantity: 3,
      },
    ],
  },
  {
    id: 1007,
    customer: "Baraah Said",
    status: "Cancelled",
    date: "2026-08-07",
    items: [
      {
        product: "Fitness Tracker",
        price: 129.5,
        quantity: 1,
      },
    ],
  },
  {
    id: 1008,
    customer: "Fatma Rashid",
    status: "Shipped",
    date: "2026-08-08",
    items: [
      {
        product: "External SSD",
        price: 119.99,
        quantity: 1,
      },
      {
        product: "USB-C Cable",
        price: 14.99,
        quantity: 2,
      },
    ],
  },
  {
    id: 1009,
    customer: "Sara Ahmed",
    status: "Pending",
    date: "2026-08-09",
    items: [
      {
        product: "Laptop",
        price: 899,
        quantity: 1,
      },
      {
        product: "Laptop Sleeve",
        price: 32.99,
        quantity: 1,
      },
      {
        product: "Wireless Mouse",
        price: 24.99,
        quantity: 1,
      },
    ],
  },
  {
    id: 1010,
    customer: "Omar Ali",
    status: "Shipped",
    date: "2026-08-10",
    items: [
      {
        product: "Gaming Chair",
        price: 279.99,
        quantity: 1,
      },
    ],
  },
{
    id: 1011,
    customer: "Huda Karim",
    status: "Pending",
    date: "2026-08-11",
    items: [
      {
        product: "Portable Charger",
        price: 39.95,
        quantity: 2,
      },
      {
        product: "Phone Stand",
        price: 11.5,
        quantity: 1,
      },
    ],
  },
  {
    id: 1012,
    customer: "Salim Nasser",
    status: "Cancelled",
    date: "2026-08-12",
    items: [
      {
        product: "Drone",
        price: 449,
        quantity: 1,
      },
      {
        product: "Spare Battery",
        price: 59.99,
        quantity: 2,
      },
    ],
  },
  {
    id: 1013,
    customer: "Layla Noor",
    status: "Shipped",
    date: "2026-08-13",
    items: [
      {
        product: "E-reader",
        price: 139.99,
        quantity: 1,
      },
      {
        product: "E-reader Cover",
        price: 24.5,
        quantity: 1,
      },
    ],
  },
  {
    id: 1014,
    customer: "Maryam Adel",
    status: "Pending",
    date: "2026-08-14",
    items: [
      {
        product: "Desk Lamp",
        price: 34.5,
        quantity: 2,
      },
      {
        product: "Cable Organizer",
        price: 9.99,
        quantity: 3,
      },
    ],
  },
  {
    id: 1015,
    customer: "Khalid Jamal",
    status: "Shipped",
    date: "2026-08-15",
    items: [
      {
        product: "Graphics Tablet",
        price: 199.5,
        quantity: 1,
      },
      {
        product: "Drawing Glove",
        price: 14.25,
        quantity: 1,
      },
    ],
  },
];
/*
  Save a snapshot of the original data.

  Later, we compare the current original array with this
  snapshot to make sure the discount did not mutate it.
*/
const originalOrdersSnapshot = JSON.stringify(orders);

/* =====================================================
   FORMATTING
===================================================== */

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/* =====================================================
   2. PER-ORDER TOTAL
===================================================== */

/*
  The function destructures items directly from the
  order object.

  reduce() calculates:
  price × quantity for every item.
*/
function calculateOrderTotal({ items }) {
  return items.reduce(
    (sum, { price, quantity }) =>
      sum + price * quantity,
    0,
  );
}

/* =====================================================
   6. IMMUTABLE DISCOUNT PREVIEW
===================================================== */

function createDiscountedOrders(sourceOrders) {
  return sourceOrders.map((order) => ({
    // Create a new order object
    ...order,

    // Create a new items array
    items: order.items.map((item) => ({
      // Create a new item object
      ...item,

      // Keep 85%, which means subtracting 15%
      price: item.price * 0.85,
    })),
  }));
}

/* =====================================================
   PAGE ELEMENTS
===================================================== */

const elements = {
  statusButtons: document.querySelectorAll(
    "[data-status]",
  ),

  customerSearch: document.querySelector(
    "#customer-search",
  ),

  discountToggle: document.querySelector(
    "#discount-toggle",
  ),

  previewMessage: document.querySelector(
    "#preview-message",
  ),

  totalRevenue: document.querySelector(
    "#total-revenue",
  ),

  statusCounts: document.querySelector(
    "#status-counts",
  ),

  highestOrder: document.querySelector(
    "#highest-order",
  ),

  highestCustomer: document.querySelector(
    "#highest-customer",
  ),

  allHaveItems: document.querySelector(
    "#all-have-items",
  ),

  topOrders: document.querySelector("#top-orders"),

  highValueCustomers: document.querySelector(
    "#high-value-customers",
  ),

  orderCount: document.querySelector("#order-count"),

  ordersContainer: document.querySelector(
    "#orders-container",
  ),
};

/* =====================================================
   APPLICATION STATE
===================================================== */

let selectedStatus = "All";
let customerSearchText = "";
let discountEnabled = false;
