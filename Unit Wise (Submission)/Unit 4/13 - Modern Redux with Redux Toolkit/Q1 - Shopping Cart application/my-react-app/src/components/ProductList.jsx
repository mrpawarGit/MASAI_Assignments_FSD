import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import Item from "./Item";

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Item key={product.id} item={product} onAdd={handleAdd} showAdd />
      ))}
    </div>
  );
}

export default ProductList;
