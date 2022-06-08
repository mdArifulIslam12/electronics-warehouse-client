import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const { name, price, quantity, suppliler, description, img, _id } = inventory;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top inventory-img" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-text mb-1">Quantity: {quantity}</h5>
          <p className="card-text m-0">Price: ${price}</p>
          <p className="card-text m-0">Suppliler name: {suppliler}</p>
          <p className="card-text">{description}</p>
          <button
            className="btn bg-danger text-white"
            onClick={() => handleNavigate(_id)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
