import React from "react";
import "../estilos.css";
import { db } from "../../app/db/db";

const Products = ({ item }) => {
  const { title, image, price } = item;

  const addProductCart = ({title, price, category}) => {
    db.cart.add({
      title: title,
      price: price,
      category: category,
    });
  };
  return (
    <>
      <div className="product">
        <img className="img-product" src={image} alt="" />
        <p>{title}</p>
        <label className="label_product">${price}</label>
        <div>
          <button className="button_product">Ver mas detalles</button>
          <button 
          className="button_product"
          onClick={() => addProductCart(item) }>
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
