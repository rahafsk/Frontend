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

]