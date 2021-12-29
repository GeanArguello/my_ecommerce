import React, { useState, useEffect } from "react";
import getProducts from "../api/getProducts";
import "./estilos.css";
import Products from "./Products";

const ListProducts = () => {
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
    <div className="container">
      {!product ? (
        <div className="products_loader">
          <h3>Cargando...</h3>
        </div>
      ) : (
        product.map((product, index) => {
          return <Products key={index} item={product} />;
        })
      )}
      ;
    </div>
  );
};

export default ListProducts;
