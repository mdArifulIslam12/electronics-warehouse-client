import React, { useEffect } from "react";
import { useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventorys = () => {
  const [inventorys, setInventorys] = useState([]);
  useEffect(() => {
    fetch("https://electronic-inventory.herokuapp.com/inventorys")
      .then((res) => res.json())
      .then((data) => setInventorys(data));
  }, []);
  const sliceInventorys = inventorys.slice(0, 6);
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mb-4 mt-5">
        <div className="from-blog-title me-3"></div>
        <h2>Inventory</h2>
        <div className="from-blog-title ms-3"></div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
        {sliceInventorys.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventorys;
