import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete, onToggleChecked }) => {
  return (
    <div>
      <h2 className="text-center text-light">Item List</h2>
      <div className="d-flex justify-content-center flex-column align-items-center">
        {items.map((item) => (
          <div key={item.id} className="mb-3">
            <Item
              key={item.id}
              item={item}
              onDelete={() => onDelete(item.id)}
              onToggleChecked={() => onToggleChecked(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
