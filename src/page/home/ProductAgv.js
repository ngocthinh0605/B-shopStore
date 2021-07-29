import React from 'react'
import { Link } from 'react-router-dom';

const ProductAgv = ({id,image, title,price}) => {
    return (
        <>
            <Link to={`productdetail/${id}`} className="agv_items col l-2">
                <div className="agv__item-infor">
                    <div className="agv__wrap">
                        <img src={image} alt="" className="agv__item-img" />
                        <h1>{title}</h1>
                        <p>Weight: 1500gr</p>
                        <p>Color: Black</p>
                        <p className="agv__price">Price: {price}</p>
                        <div className="agv__seemore">See more...</div>
                    </div>
                    
                </div>
            </Link>
        </>
    )
}

export default ProductAgv
