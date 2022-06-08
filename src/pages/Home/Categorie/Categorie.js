import React from "react";

const Categorie = ({ categorie }) => {
  const { img, title, description1, description2, description3, description4 } =
    categorie;
  return (
    <div class="col">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text mb-0">{description1}</p>
          <p class="card-text mb-0">{description2}</p>
          <p class="card-text mb-0">{description3}</p>
          <p class="card-text mb-0">{description4}</p>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
