import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkedItemShoppingcart } from '../../redux/actions/productAction'


const ProductInShoppingCart = ({onDelete,product,cart,onDecrement,onIncrement,}) => {

    const dispatch = useDispatch();

    function handleChecked(id){
        const unCheckAll = document.querySelector('.shopping__cart-main-checkall input[name = "checkall"]')
        unCheckAll.checked = false; 
        dispatch(checkedItemShoppingcart(id))
    }
   
    return (
        <>
            <div className="shopping__cart-item">
                <div className="shopping__cart-item-wrap row">
                    <div className="col l-4">
                        <div className="shopping-cart-product-wrap">
                            <img className="shopping__cart-product-img" src={product.image} alt=''>

                            </img>
                            <div className="shopping__cart-product-infor">
                                <Link to={`/productdetail/${product.id}`} className="shopping__cart-product-title">
                                    <h3>{product.title}</h3>
                                </Link> 
                                <div className="shopping__cart-product-infor-price">
                                    <h3>${product.price}</h3>
                                </div>
                                <div onClick={() => onDelete(cart.id)} className="shopping__cart-product-remove">
                                    <span>Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping__cart-product-col col l-2 c-12">
                        <div className="shopping__cart-product-attributes-wrap">
                            <div className="shopping__cart-product-attributes">
                                Color: <span>Black</span>
                            </div>
                            <div className="shopping__cart-product-attributes">
                                Color: <span>Black</span>
                            </div>
                        </div>
                    </div>
                    <div className="shopping__cart-product-col col l-2 c-12 ">
                        <div className="shopping__cart-product-quantity">
                            <div className="shopping__cart-product-quantity-wrap">
                                <div  onClick={() => onDecrement(cart.id)} className={`shopping__cart-product-quantity-count ${cart.quantity === 0 && 'shopping__cart--disable'} `}>
                                    <i class="fas fa-minus"></i>
                                </div>
                                <div className="shopping__cart-product-quantity-number">
                                    <span>{cart.quantity}</span>
                                </div>
                                <div onClick={() => onIncrement(cart.id)} className="shopping__cart-product-quantity-count">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" shopping__cart-product-col col l-2 c-12">
                        <div className="shopping__cart-product-shopping-cost">
                            <div className="shopping__cart-product-shopping-cost-name">
                                
                            </div>
                            <div className="shopping__cart-product-shopping-cost-total">
                                Free Shipping
                            </div>
                        </div>
                    </div>
                    <div className="shopping__cart-product-col col l-1 c-12">
                        <div className="shopping__cart-product-price">
                            $<span>{ cart.quantity  *  product.price}</span>
                        </div>
                    </div>
                    <div className="shopping__cart-product-col col l-1 c-12">
                        <div className="shopping__cart-product-checkbox">
                            <input onChange={()=>handleChecked(cart.id)} type="checkbox" checked={cart.checked}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInShoppingCart
