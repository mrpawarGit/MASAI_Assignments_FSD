import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
import Item from "./Item";
// import "../index.css"

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <Item key={item.id} item={item} onRemove={handleRemove} showRemove />
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
