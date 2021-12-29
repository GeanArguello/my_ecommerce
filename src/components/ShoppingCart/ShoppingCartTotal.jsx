import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

export const ShoppingCartTotal = ( {product} ) => {
  const [ totalCart, setTotalCart ] = useState(0);

  const getPrice = () => {
    const total = product?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price;
    }, 0);
    setTotalCart(total);
  };

  useEffect(() => {
      if(product.length > 0){
        getPrice()
      }
  }, [product]);
  return (
    <>
      <Dropdown.Item href="#/action-1">Total - {totalCart}</Dropdown.Item>
    </>
  );
};
