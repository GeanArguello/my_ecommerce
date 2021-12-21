import React, { useState, useEffect } from "react";
import getProducts from "../api/getProducts";
import "./estilos.css";

const Products = () => {
  const [product, setProduct] = useState("");

  const updateProducts = () => {
    getProducts().then((newProduct) => {
      setProduct(newProduct);
    });
  };
  useEffect(() => {
    updateProducts();
  }, []);
  return (
    <>
      {!product ? (
        <div className="products_loader">
          <h3>Cargando...</h3>
        </div>
      ) : (
        product.map((product, index) => {
          return (
              <div className="product">
                <img className="img-product" src={product.image} alt="" />
                <p>{product.title}</p>
                <label className="label_product">${product.price}</label>
              </div>
          );
        })
      )}
    </>
  );
};

export default Products;
