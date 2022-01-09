import React, {useState, useEffect} from 'react'
import { matchPath } from 'react-router-dom'
import {getProductsById} from '../app/services/ProductsServices'

export const ProductsViews = ({match}) => {

  const [productDetail, setProductDetail] = useState(null)

  useEffect(() =>{
    const { params } = match
    getProductsById(params.id)
      .then((productsFromDB) => setProductDetail(productsFromDB))
      .catch((err) => console.log(err)) ;
  },[match])
    return (
        <>
          <h2>{productDetail && JSON.stringify(productDetail)}</h2>  
        </>
    )
}
