import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
