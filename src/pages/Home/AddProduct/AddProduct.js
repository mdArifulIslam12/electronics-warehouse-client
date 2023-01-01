import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = "https://electronics-warehouse.onrender.com/inventorys";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Your Product or item Add!!");
        event.target.reset();
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className=" p-lg-3 col-lg-6 mx-auto mt-5">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <div className="from-blog-title me-3"></div>
            <h2>Add Product</h2>
            <div className="from-blog-title ms-3"></div>
          </div>
          <form
            className="d-flex flex-column mb-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2 p-2"
              placeholder="Product name!!"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="mb-2 p-2"
              placeholder="PototUrl"
              type="text"
              {...register("img")}
            />

            <input
              className="mb-2 p-2"
              placeholder="Enter email"
              type="email"
              readOnly
              value={email}
              {...register("email")}
            />
            <input
              className="mb-2 p-2"
              placeholder="Quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="mb-2 p-2"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <textarea
              className="mb-4 p-2"
              placeholder="Description"
              {...register("description")}
            />
            <input
              type="submit"
              className="btn bg-danger w-50 text-white fs-4 py-2 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
