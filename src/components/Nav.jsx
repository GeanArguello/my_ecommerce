import React from "react";
import './estilos.css'
import { Link } from "react-router-dom"
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";



export const Nav = () => {
  return (
    <>
      <nav className='header_nav'>
        <div className="header_logo">
          <h3><Link className="text_link" to={"/"}>Catálogo</Link></h3>
        </div>
        <ShoppingCart />
      </nav>
    </>
  );
};
