import React from "react";
import notFound from "../../../image/404.jpg";

const NotFound = () => {
  return (
    <div className="notFoun">
      <img className="w-100 " src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
