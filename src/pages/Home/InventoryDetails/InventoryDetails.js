import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const id = inventoryId;
  const [singleItem, setSingleItem] = useState({});

  const [date, setDate] = useState({});

  useEffect(() => {
    fetch(`https://electronics-warehouse.onrender.com/inventorys/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, [date]);
  const handleDelivered = async () => {
    const quantity = singleItem.quantity;
    const quantitys = quantity - 1;
    if (0 <= quantitys) {
      await handleUpdate(quantitys);
    } else {
      toast("Product not found!!");
    }
  };
  const handleQuantityAdd = async (event) => {
    event.preventDefault();
    const quantityText = event.target.quantity.value;
    const quantityValue = parseInt(quantityText);
    if (0 <= quantityValue) {
      const quantity = singleItem.quantity;
      const quantitys = quantity + quantityValue;
      await handleUpdate(quantitys);
      event.target.reset();
    } else {
      event.target.reset();
      toast("Enter Positive number");
    }
  };
  const handleUpdate = (quantitys) => {
    const user = { quantitys };

    // send data
    fetch(`https://electronics-warehouse.onrender.com/inventorys/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setDate(data);
      });
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-5 mb-5">
        <img src={singleItem.img} alt="" />
        <h2>Name: {singleItem.name}</h2>
        <h3>Quantity: {singleItem.quantity}</h3>
        <p>Price: {singleItem.price}</p>
        <p>Suppliler name: {singleItem.suppliler}</p>
        <p>{singleItem.description}</p>

        <Form onSubmit={handleQuantityAdd} className="mb-5">
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Quantity </Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              placeholder="Quantity added"
            />
          </Form.Group>
          <Button
            variant="danger"
            type="Login"
            className="quantity-button p-2 px-3"
          >
            Quantity Add
          </Button>
        </Form>
        <button
          className="btn d-block text-white p-2 px-4 delivered-button"
          onClick={handleDelivered}
        >
          Delivered
        </button>
        <button className="btn text-white mt-4 p-3 px-4 manageItem-button">
          <Link className="link" to={"/manageItem"}>
            ManageItems
          </Link>
        </button>
      </div>
    </div>
  );
};

export default InventoryDetails;
