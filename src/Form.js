import React, { useState } from "react";

const Form = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = { quantity, name, isChecked: false, id: Date.now() };

    setName("");
    setQuantity(1);
    onAddItem(newItem);
  };

  return (
    <div className="container text-center text-light">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <select
              className="form-select-sm input-lighter text-light"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {Array.from({ length: 30 }, (_, index) => index + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                )
              )}
            </select>
            <input
              type="text"
              className="form-control form-control-lg input-lighter text-light"
              placeholder="Enter item name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn add-darker" onClick={handleSubmit}>
              + Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
