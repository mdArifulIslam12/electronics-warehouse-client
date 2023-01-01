import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://electronics-warehouse.onrender.com/inventory?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, [user]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are your sure!!");

    if (proceed) {
      const url = `https://electronics-warehouse.onrender.com/inventorys/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="from-blog-title me-3"></div>
          <h2>My All Item</h2>
          <div className="from-blog-title ms-3"></div>
        </div>
        {items.map((item) => (
          <div key={item._id} className="col-lg-4 mb-3">
            <div className="p-2 d-flex">
              <div>
                <img style={{ width: "80px" }} src={item.img} alt="" />
              </div>
              <div>
                <h2>{item.name}</h2>
                <p className="mb-0 mt-1">Price: {item.price}</p>
                <p className="mt-1 mb-0">Quantity: {item.quantity}</p>
                <p className="mt-1 mb-0">Suppliler name: {item.suppliler}</p>
                <p className="mt-1">Email: {item.email}</p>
                <button
                  className="btn bg-danger text-white pe-3"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
