import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, onDelete, onToggleChecked }) => {
  return (
    <div
      className="card rounded-3 text-light  mb-3"
      style={{ maxWidth: "400px" }}
    >
      <div className="card-body rounded-3 card-lighter d-flex align-items-center">
        <p className="my-1 p-1 flex-grow-1 mx-2">{item.quantity} </p>
        <p className="my-1 p-1 flex-grow-1 mx-2">{item.name} </p>
        <div>
          <button className="btn btn-lighter mx-2" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className={
              "btn mx-2 " + (item.isChecked ? "btn-darker" : "btn-lighter")
            }
            onClick={onToggleChecked}
          >
            {item.isChecked ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
