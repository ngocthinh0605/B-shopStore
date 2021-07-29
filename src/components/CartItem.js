import React from 'react'

const CartItem = ({onDelete,cart, product}) => {
    // console.log(onDelete)
    // console.log(product);
    return (
        <>
            <div className="header__cart-item">
                <img className="header__cart-item-img" src={product.image} alt="" />
                <div className="header__cart-item-infor">
                    <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">{product.title} </h5>
                        <div className="header__cart-item-price-qnt">

                            <span className="header__cart-item-price">${product.price}</span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">{cart.quantity}</span>

                        </div>
                    </div>
                    <div className="header__cart-item-body">
                        <span className="header__cart-item-description">Phân Loại: {product.category}</span>
                        <span onClick={() => onDelete(cart.id)} className="header__cart-item-remove">Xóa</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
