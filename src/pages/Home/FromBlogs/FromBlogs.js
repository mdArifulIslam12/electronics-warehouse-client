import React, { useState, useEffect } from "react";
import FromBlog from "../FromBlog/FromBlog";
import "./FromBlogs.css";

const FromBlogs = () => {
  const [fromBlogs, setFromBlogs] = useState([]);
  useEffect(() => {
    fetch("https://electronics-warehouse.onrender.com/fromBlog")
      .then((res) => res.json())
      .then((data) => setFromBlogs(data));
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="from-blog-title me-3"></div>
        <h2>From Other Blog</h2>
        <div className="from-blog-title ms-3"></div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
        {fromBlogs.map((fromBlog) => (
          <FromBlog key={fromBlog._id} fromBlog={fromBlog}></FromBlog>
        ))}
      </div>
    </div>
  );
};

export default FromBlogs;
