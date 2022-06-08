import React from "react";
import "./FromBlog.css";

const FromBlog = ({ fromBlog }) => {
  const { img, title, price } = fromBlog;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} height="365px" className="card-img-top" alt="" />
        <div className="card-body from-blog">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ${price}</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FromBlog;
