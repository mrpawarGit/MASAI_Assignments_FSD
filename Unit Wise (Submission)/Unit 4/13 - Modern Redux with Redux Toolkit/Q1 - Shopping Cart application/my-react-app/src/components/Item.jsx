import React from "react";

function Item({ item, onAdd, onRemove, showAdd = false, showRemove = false }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        {item.name} - ₹{item.price}
      </span>

      {showAdd && (
        <button style={{ marginLeft: "10px" }} onClick={() => onAdd(item)}>
          Add to Cart
        </button>
      )}

      {showRemove && (
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default Item;
