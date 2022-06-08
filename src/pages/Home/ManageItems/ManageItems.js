import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageItems.css";

const ManageItems = () => {
  const [inventorys, setInventorys] = useState([]);
  useEffect(() => {
    fetch("https://electronic-inventory.herokuapp.com/inventorys")
      .then((res) => res.json())
      .then((data) => setInventorys(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are your sure!!");

    if (proceed) {
      const url = `https://electronic-inventory.herokuapp.com/inventorys/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = inventorys.filter((item) => item._id !== id);
          setInventorys(remaining);
        });
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="from-blog-title me-3"></div>
          <h2>Manage Item</h2>
          <div className="from-blog-title ms-3"></div>
        </div>
        {inventorys.map((inventory) => (
          <div key={inventory._id} className="col-lg-4 mb-3">
            <div className="p-2 d-flex">
              <div>
                <img style={{ width: "80px" }} src={inventory.img} alt="" />
              </div>
              <div>
                <h2>{inventory.name}</h2>
                <p className="mb-0 mt-1">Price: {inventory.price}</p>
                <p className="mt-1 mb-0">Quantity: {inventory.quantity}</p>
                <p className="mt-1 ">Suppliler name: {inventory.suppliler}</p>
                <button
                  className="btn bg-danger text-white pe-3"
                  onClick={() => handleDelete(inventory._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn px-5 mb-5 py-3 add-product">
        {" "}
        <Link className="link" to={"/addProduct"}>
          Add Product
        </Link>{" "}
      </button>
    </div>
  );
};

export default ManageItems;
