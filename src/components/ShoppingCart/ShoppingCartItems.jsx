import React from 'react'
import { Dropdown } from 'react-bootstrap'

export const ShoppingCartItems = ({items}) => {
    const {title, price} = items;

    return (
        <>
            <Dropdown.Item href="#/action-1">{title} - ${price}</Dropdown.Item>
        </>
    )
}
