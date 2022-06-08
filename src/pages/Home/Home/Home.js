import React from "react";
import Banner from "../Banner/Banner";
import FromBlogs from "../FromBlogs/FromBlogs";
import Categories from "../Categories/Categories";
import Inventorys from "../Inventorys/Inventorys";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventorys></Inventorys>
      <Categories></Categories>
      <FromBlogs></FromBlogs>
    </div>
  );
};

export default Home;
