import { useState, useEffect } from 'react'
import '../../Grid.css'
import '../../css/shoppingcart.css'

import { Link } from 'react-router-dom';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import ProductInShoppingCart from './ProductInShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemIntoCart, 
    incrementItemInShoppingCart, 
    decrementItemInShoppingCart,
    checkAllItemShoppingCart   } from '../../redux/actions/productAction'
const ShoppingCart = () => {

    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    
    const Products = useSelector(state => state.allProducts.products);
    const Carts = useSelector(state => state.allCarts.carts)

    function handleSearch(e)
    {

    }   

    useEffect(() => {
        var totalPrice = 0;

        const priceOfitems = document.querySelectorAll('.shopping__cart-product-price span');
        priceOfitems.forEach(item => totalPrice += parseInt(item.innerText))
        setTotal(totalPrice);
    },[Carts])


    function onHandleDeteleItem(id){
        dispatch(deleteItemIntoCart(id))
        
    }

    function onHandleDecrement(id){

        dispatch(decrementItemInShoppingCart(id))
    }
    function onHandleIncrement(id){
        console.log('increment', id)
        dispatch(incrementItemInShoppingCart(id))
    }

    function handleCheckAll(e){
        console.log('e')
        dispatch(checkAllItemShoppingCart(e.target.checked))
    }
    
    return (
        <>
            <Header 
                searchProduct = {(e) => handleSearch(e)}/>
            <div className="grid">
                <div className="shopping__cart-wrap-header"></div>
                <div className="shoppingcart__content">
                    <div className="grid wide">
                        <div className="shoppingcart__container">
                            <div className="shoppingcart__heading">
                                <p>Your Shopping Bag</p>
                                <Link to='/product'>
                                    <span className="shoppingcart__heading-continue-shop">
                                    Continue Shopping
                                    </span>
                                </Link>
                            </div>
                            <div className="shopping__cart-main">
                                <div className="shopping__cart-main-title">
                                    <div className="row">
                                        <div className="col l-4">
                                            Item
                                        </div>
                                        <div className="col l-2">
                                            Attributes
                                        </div>
                                        <div className="col l-2">
                                            Quantity
                                        </div>
                                        <div className="col l-2">
                                            Shipping Cost
                                        </div>
                                        <div className="col l-1">
                                            Price
                                        </div>
                                        <div className="shopping__cart-main-checkall col l-1">
                                            <div>Check All</div> 
                                            <input onChange={e => handleCheckAll(e)} type="checkbox" name="checkall"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={`shopping__cart-main-items ${ Carts.length === 0 && 'shopping__cart-main-no-items'}` }>
                                    {
                                        Carts.map(cart => {
                                            let idProduct = cart.idProduct;
                                            let product = Products.filter(product => product.id === idProduct)[0]
                                            return <ProductInShoppingCart 
                                                key={cart.id}
                                                onDelete={id => onHandleDeteleItem(id)}
                                                onDecrement={id => onHandleDecrement(id)}
                                                onIncrement={id => onHandleIncrement(id)}
                                                product={product} 
                                                cart={cart} 
                                                
                                                />
                                               
                                                
                                        })
                                    }
                                    {/* <ProductInCart */}
                                    
                                    <div className='no__item-in-cart'>
                                        <h1>Oppp. Your Cart Is Empty!!</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__cart-pay row">
                                <div className="shopping__cart-pay-left col l-9">
                                    <div className="shopping__cart-pay-left-heading">Accept payment options</div>
                                    <div className="shopping__cart-pay-left-continue">
                                        <Link to="/product">
                                            <span className="shopping__cart-pay-continue">
                                                Continue Shopping
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="shopping__cart-pay-right col l-2">
                                    <div className="shopping__cart-pay-subtotal">
                                        Subtotal: 
                                    </div>
                                    <div className="shopping__cart-pay-subtotal">
                                        Estimated shipping:

                                    </div>
                                    <div className="shopping__cart-pay-total">
                                        Total:
                                    </div>
                                </div>
                                <div className="shopping__cart-pay-right col l-1">
                                    <div className="shopping__cart-pay-subtotal">
                                        <span>${total}</span>
                                    </div>
                                    <div className="shopping__cart-pay-subtotal">
                                        <span>0$</span>
                                    </div>
                                    <div className="shopping__cart-pay-total">
                                       <span>${total}</span>
                                    </div>

                                    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col l-9"></div>
                                <div className={ `${total <= 0 ? 'shopping__cart-pay-disableCheckOut' : 'shopping__cart-pay-checkout'}     col l-3`}>
                                {/*   */}
                                    <span>CheckOut</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </> 
    )
}

export default ShoppingCart
