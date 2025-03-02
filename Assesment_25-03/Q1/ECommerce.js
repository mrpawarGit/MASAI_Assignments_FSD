/**
Q: 1
Problem 1: Advanced Product Catalog (Destructuring, Spreading, Multi-Level Destructuring, Arrow Functions)
An e-commerce platform has an inventory of products, each with multiple variants. Your task is to:

Extract essential product details from nested objects.
Apply a 10% discount only to products that belong to the "Electronics" category.
Filter out out-of-stock products.
Ensure the original array remains unchanged.
Input Example:

const products = [
  {
    id: 101,
    details: { name: "Laptop", price: 1200, category: "Electronics" },
    stock: { available: true, quantity: 4 },
    variants: [{ color: "Silver" }, { color: "Black" }]
  },
  {
    id: 102,
    details: { name: "Shoes", price: 150, category: "Fashion" },
    stock: { available: true, quantity: 10 },
    variants: [{ size: "M" }, { size: "L" }]
  },
  {
    id: 103,
    details: { name: "Smartphone", price: 800, category: "Electronics" },
    stock: { available: false, quantity: 0 },
    variants: [{ color: "Blue" }, { color: "Black" }]
  },
  {
    id: 104,
    details: { name: "Monitor", price: 300, category: "Electronics" },
    stock: { available: true, quantity: 2 },
    variants: [{ size: "24-inch" }, { size: "27-inch" }]
  }
];

Expected Output:

[
  {
    id: 101,
    name: "Laptop",
    price: 1200,
    discountPrice: 1080,
    category: "Electronics"
  },
  {
    id: 104,
    name: "Monitor",
    price: 300,
    discountPrice: 270,
    category: "Electronics"
  }
]
 */

