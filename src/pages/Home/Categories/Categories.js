import React, { useState, useEffect } from "react";
import Categorie from "../Categorie/Categorie";

const Categories = () => {
  const [categories, SetCategories] = useState([]);
  useEffect(() => {  fetch("https://electronic-inventory.herokuapp.com/topCategories")
  .then((res) => res.json())
      .then((data) => SetCategories(data));
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mb-4 mt-5">
        <div className="from-blog-title me-3"></div>
        <h2>Top Categories</h2>
        <div className="from-blog-title ms-3"></div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((categorie) => (
          <Categorie key={categorie._id} categorie={categorie}></Categorie>
        ))}
      </div>
    </div>
  );
};

export default Categories;
