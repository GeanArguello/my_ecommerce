import React from "react";
import "./estilos.css";

const Products = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="product">
      <img className="img-product" src={image} alt="" />
      <p>{title}</p>
      <label className="label_product">${price}</label>
    </div>
  );
};

export default Products;
