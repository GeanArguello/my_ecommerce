import { db } from "../db/db"

export const getProductsById = async(id) =>{
    const productsFromDB = await db.cart.get(Number(id));
    console.log(productsFromDB)
    return productsFromDB;
 
}
