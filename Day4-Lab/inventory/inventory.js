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


}