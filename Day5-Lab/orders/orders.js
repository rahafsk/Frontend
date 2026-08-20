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

/* =====================================================
   3. DASHBOARD CALCULATIONS
===================================================== */

function calculateStatusCounts(currentOrders) {
  return currentOrders.reduce(
    (counts, { status }) => ({
      ...counts,

      [status]: counts[status] + 1,
    }),
    {
      Pending: 0,
      Shipped: 0,
      Cancelled: 0,
    },
  );
}

function findHighestValueOrder(currentOrders) {
  return currentOrders.reduce(
    (highestOrder, currentOrder) => {
      const highestTotal =
        calculateOrderTotal(highestOrder);

        const currentTotal =
        calculateOrderTotal(currentOrder);

      return currentTotal > highestTotal
        ? currentOrder
        : highestOrder;
    },
  );
}
function getTopThreeOrders(currentOrders) {
  /*
    sort() mutates arrays, so [...currentOrders]
    creates a copy first.
  */
  return [...currentOrders]
    .sort(
      (firstOrder, secondOrder) =>
        calculateOrderTotal(secondOrder) -
        calculateOrderTotal(firstOrder),
    )
    .slice(0, 3);
}

function getUniqueHighValueCustomers(currentOrders) {
  const qualifyingNames = currentOrders
    .filter(
      (order) => calculateOrderTotal(order) > 150,
    )
    .map(({ customer }) => customer);

  /*
    Set removes duplicate customer names.
  */
  return [...new Set(qualifyingNames)].sort(
    (firstName, secondName) =>
      firstName.localeCompare(secondName),
  );
}

/* =====================================================
   SUMMARY RENDERING
===================================================== */

function renderSummary(currentOrders) {
  const totalRevenue = currentOrders.reduce(
    (sum, order) =>
      sum + calculateOrderTotal(order),
    0,
  );

  const counts =
    calculateStatusCounts(currentOrders);

  const highest =
    findHighestValueOrder(currentOrders);

  const everyOrderHasItems = currentOrders.every(
    ({ items }) => items.length > 0,
  );

  elements.totalRevenue.textContent =
    currencyFormatter.format(totalRevenue);

  elements.statusCounts.textContent =
    `${counts.Pending} · ` +
    `${counts.Shipped} · ` +
    `${counts.Cancelled}`;

  elements.highestOrder.textContent =
    currencyFormatter.format(
      calculateOrderTotal(highest),
    );

     elements.highestCustomer.textContent =
    `${highest.customer} · Order #${highest.id}`;

  elements.allHaveItems.textContent =
    everyOrderHasItems ? "Yes" : "No";
}

/* =====================================================
   4. TOP CUSTOMERS
===================================================== */

function renderInsights(currentOrders) {
  const topThree =
    getTopThreeOrders(currentOrders);

  const uniqueCustomers =
    getUniqueHighValueCustomers(currentOrders);

     elements.topOrders.innerHTML = topThree
    .map(
      (order, index) => `
        <div class="top-order">
          <span>
            ${index + 1}. ${order.customer}
          </span>

          <strong>
            ${currencyFormatter.format(
              calculateOrderTotal(order),
            )}
          </strong>
        </div>
      `,
    )
    .join("");

    elements.highValueCustomers.innerHTML =
    uniqueCustomers
      .map(
        (customer) => `<li>${customer}</li>`,
      )
      .join("");
}

/* =====================================================
   7. ORDER CARD RENDERING
===================================================== */

/*
  The function destructures its order parameter.
*/
function renderOrderCard({
  id,
  customer,
  status,
  date,
  items,
}) {
  const total = calculateOrderTotal({ items });

  const itemWord =
    items.length === 1 ? "item" : "items";

    const itemRows = items
    .map(
      ({ product, price, quantity }) => `
        <li>
          <span>
            ${product} × ${quantity}
          </span>

          <span>
            ${currencyFormatter.format(
              price * quantity,
            )}
          </span>
        </li>
      `,
    )
    .join("");

     return `
    <article class="order-card">
      <div class="order-header">
        <div>
          <p class="order-number">
            Order #${id}
          </p>

          <h3>${customer}</h3>
        </div>

        <span
          class="status-badge ${status.toLowerCase()}"
        >
          ${status}
        </span>
      </div>

      <div class="order-body">
        <p class="order-date">
          ${dateFormatter.format(new Date(date))}
        </p>

        <ul class="item-list">
          ${itemRows}
        </ul>
      </div>

      <div class="order-footer">
        <span>
          ${items.length} ${itemWord}
        </span>

        <span class="order-total">
          ${currencyFormatter.format(total)}
        </span>
      </div>
    </article>
  `;
}

/* =====================================================
   5. FILTERING AND SEARCH
===================================================== */

function renderOrderList(currentOrders) {
  /*
    The filters are chained.

    Therefore, an order must match both the selected
    status and the customer search.
  */

}






