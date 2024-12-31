import { registerApplication, start } from "single-spa";

// Register the header micro frontend
registerApplication(
  "header",
  () => import("header/Header"),
  (location) => location.pathname !== "/checkout" // Only load header on non-checkout pages
);

// Register the product listing micro frontend
registerApplication(
  "product-listing",
  () => import("product-listing/ProductListing"),
  (location) => location.pathname !== "/checkout"
);

// Register the shopping cart micro frontend
registerApplication(
  "shopping-cart",
  () => import("shopping-cart/ShoppingCart"),
  (location) => location.pathname === "/checkout" // Load cart only on checkout page
);

start();