import React from "react";

import './estilos.css'
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";



export const Nav = () => {
  return (
    <>
      <nav className='header_nav'>
        <div className="header_logo">
          <h3>Catálogo</h3>
        </div>
        <ShoppingCart />
      </nav>
    </>
  );
};
