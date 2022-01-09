import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";
import {db} from '../../app/db/db';
import { useLiveQuery } from "dexie-react-hooks";
import { ShoppingCartItems } from "./ShoppingCartItems";
import { ShoppingCartTotal } from "./ShoppingCartTotal";


export const ShoppingCart = () => {

const [productCart, setProductCart] = useState([])

useLiveQuery(async() => {
  const productsDB = await db.cart.toArray()
  setProductCart(productsDB)
})
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Carrito
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            productCart?.map((product, index) =>{
              return <ShoppingCartItems key={index} items={product}/>
            })
          }
        <Dropdown.Divider/>
        <ShoppingCartTotal product={productCart}/>
        </Dropdown.Menu>
        
      </Dropdown>
    </>
  );
};
