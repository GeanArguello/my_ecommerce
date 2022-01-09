import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShoppingCartItems = ({ items }) => {
  const { title, price, id } = items;

  return (
    <>
      
      <Link to={`/product/${id}`}>
        <Dropdown.Item href="#/action-1">
          {title} - ${price}
        </Dropdown.Item>
      </Link>
    </>
  );
};
