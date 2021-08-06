import React from 'react'

const ItemInCheckOut = ({cart, product}) => {
    console.log(product,cart)
    return (
        <div className="checkout__product-detail row">
            <div className=" checkout__product-detail-price-img-title col l-6 c-12">
                <div className="checkout__product-detail-img-title">
                    <img src={product[0].image} alt="" />
                    <h3>{product[0].title}</h3>
                </div>
            </div>
            <div className="checkout__product-detail-price col l-2 ">${product[0].price}</div>
            <div className="checkout__product-quantity-price col l-2 ">x{cart.quantity}</div>
            <div className="checkout__product-detail-total col l-2 c-12"> ${product[0].price * cart.quantity}</div>
        </div>
    )
}

export default ItemInCheckOut
