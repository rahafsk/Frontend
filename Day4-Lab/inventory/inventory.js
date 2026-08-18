// ============================================================
// Day 4 Lab - Coffee Shop Inventory
// All data is local. There are no API calls.
// ============================================================


// ------------------------------------------------------------
// 1. Local data
// ------------------------------------------------------------

// Every product has:
// name, price, stock, and category.

const products = [
  {
    name: "Arabica Coffee Beans",
    price: 8.50,
    stock: 20,
    category: "Coffee"
  },

  {
    name: "Espresso Coffee Beans",
    price: 9.75,
    stock: 7,
    category: "Coffee"
  },

  {
    name: "Green Tea Box",
    price: 4.25,
    stock: 14,
    category: "Tea"
  },

  {
    name: "Chocolate Muffin",
    price: 2.50,
    stock: 6,
    category: "Bakery"
  },

  {
    name: "Butter Croissant",
    price: 1.75,
    stock: 9,
    category: "Bakery"
  },

  {
    name: "Caramel Syrup",
    price: 5.50,
    stock: 4,
    category: "Supplies"
  },

  {
    name: "Paper Cups Pack",
    price: 3.25,
    stock: 12,
    category: "Supplies"
  },

  {
    name: "Fresh Milk Carton",
    price: 1.20,
    stock: 8,
    category: "Dairy"
  }

];

// ------------------------------------------------------------
// 2. Select an icon using switch
// ------------------------------------------------------------

function getCategoryIcon(category) {
  switch (category){
    case "Coffee":
      return "☕";

    case "Tea":
      return "🍵";

    case "Bakery":
      return "🥐";

    case "Dairy":
      return "🥛";

    default:
      return "📦";
  }
}

// ------------------------------------------------------------
// 3. Format a number as a price
// ------------------------------------------------------------

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// ------------------------------------------------------------
// 4. Render one product card
// ------------------------------------------------------------

// This is the arrow function required by the task.

const renderProductCard = (product) => {
  const isLowStock = product.stock < 10;

   const badgeClass = isLowStock
    ? "text-bg-danger"
    : "text-bg-success";

    const stockLabel = isLowStock
    ? "Low stock"
    : "In stock";

    const categoryIcon =
    getCategoryIcon(product.category);

     return `
    <div class="col-12 col-md-6 col-lg-4 mb-3">

      <article
        class="card product-card
               border-0 shadow-sm h-100"
      >

      <div class="card-body d-flex flex-column">

          <div
            class="d-flex justify-content-between
                   align-items-start gap-3 mb-3"
          >

          <span
              class="category-icon"
              aria-hidden="true"
            >
              ${categoryIcon}
            </span>

            <span class="badge ${badgeClass}">
              ${stockLabel}
            </span>

          </div>

          <h3 class="h5 card-title">
            ${product.name}
          </h3>

          <p class="text-muted">
            ${product.category}
          </p>

          <dl class="row mb-0 mt-auto">

            <dt class="col-6">
              Unit price
            </dt>

                        <dd class="col-6 text-end">
              ${formatPrice(product.price)}
            </dd>

            <dt class="col-6">
              Stock
            </dt>

             <dd class="col-6 text-end mb-0">
              ${product.stock}
            </dd>

          </dl>

        </div>

      </article>

    </div>
  `;
};

// ------------------------------------------------------------
// 5. Render all products
// ------------------------------------------------------------

function renderProducts(list) {
  const productList =
    document.getElementById("productList");

    productList.innerHTML = list
    .map(renderProductCard)
    .join("");

}

// ------------------------------------------------------------
// 6. Calculate the inventory summary
// ------------------------------------------------------------

function calculateInventorySummary(list) {
  let totalValue = 0;
  let lowStockCount = 0;

  for (const product of list) {
    // Calculate the value of the current product.
    totalValue += product.price * product.stock;

    // A stock of exactly 10 is not low.
    // It must be below 10.
    if (product.stock < 10) {
      lowStockCount += 1;
    }
}
return {
    totalValue: totalValue,
    lowStockCount: lowStockCount
  };

}

// ------------------------------------------------------------
// 7. Display the calculated summary
// ------------------------------------------------------------

function renderInventorySummary(list) {
  const summary =
    calculateInventorySummary(list);

     const totalValueElement =
    document.getElementById(
      "totalInventoryValue"
    );

    const lowStockElement =
    document.getElementById(
      "lowStockCount"
    );

     totalValueElement.textContent =
    formatPrice(summary.totalValue);

    lowStockElement.textContent =
    summary.lowStockCount;
}

// ------------------------------------------------------------
// 8. Create the low-stock list
// ------------------------------------------------------------

// This uses a loop instead of filter() because filter()
// belongs to the next lesson.

function getLowStockProducts(list) {
  const lowStockProducts = [];

  for (const product of list) {
    if (product.stock < 10) {
      lowStockProducts.push(product);
    }
  }

  return lowStockProducts;
}

// ------------------------------------------------------------
// 9. Low-stock toggle
// ------------------------------------------------------------

let showLowStockOnly = false;

const toggleButton =
  document.getElementById(
    "toggleLowStockButton"
  );

  toggleButton.addEventListener(
  "click",
  function () {
    // Change false to true or true to false.
    showLowStockOnly = !showLowStockOnly;

    const productsToDisplay =
      showLowStockOnly
        ? getLowStockProducts(products)
        : products;

    renderProducts(productsToDisplay);

    // This is a regular function, so this refers
    // to the button that was clicked.
    this.textContent =
      showLowStockOnly
        ? "Show All Items"
        : "Show Low Stock Only";

  }
);
