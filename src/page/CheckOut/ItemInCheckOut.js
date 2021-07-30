import React from 'react'

const ItemInCheckOut = ({cart, product}) => {
    console.log(product,cart)
    return (
        <div className="checkout__product-detail row">
            <div className="col l-6">
                <div className="checkout__product-detail-img-title">
                    <img src={product[0].image} alt="" />
                    <h3>{product[0].title}</h3>
                </div>
            </div>
            <div className="col l-2">${product[0].price}</div>
            <div className="col l-2">{cart.quantity}</div>
            <div className="col l-2"> ${product[0].price * cart.quantity}</div>
        </div>
    )
}

export default ItemInCheckOut
