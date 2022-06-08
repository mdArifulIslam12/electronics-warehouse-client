import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-center">
      <p>&copy; Copy right {year}. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
