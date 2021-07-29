import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image, title, price,link}) => {
    return (
        <>
        <Link key={id} className='product__detail_decoration' to={`${link !== '' ? link : ''}${id}`}>
            <div   className="product__item">
                <img src={image} alt="" className="product_item-img" />
                <div className="product__item-bottom">
                    <h5 className="product__item-title">{title}</h5>
                    <div className="product__item-price">
                        <span>PRICE: ${price}</span> 
                    </div>
                    <div className="product__item-btn-buy">Buy</div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default ProductItem
