import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../css/checkout.scss'
import '../../Grid.css'

import ItemInCheckOut from './ItemInCheckOut'
import { useSelector } from 'react-redux';


const CheckOut = () => {

    const Products = useSelector(state => state.allProducts.products);
    const Carts = useSelector(state => state.allCarts.carts)
    const CartsChecked = Carts.filter(cart => cart.checked)
   

    var total = 0;
    CartsChecked.forEach(cart => {
        Products.forEach(product => cart.idProduct === product.id ? total += (cart.quantity * product.price) : 0)
    })
    console.log(total)

    function handleSearch(e)
    {

    } 

    return (
        <>
            <div className='header grid'>
                <Header 
                    searchProduct = {(e) => handleSearch(e)}
                />
            </div>
            <div className="checkout">
                <div className="grid wide">
                    <div className="checkout__container ">
                        <div className="checkout__title ">
                            <h1>CHECK OUT YOUR CART</h1>
                        </div>
                        <div className="checkout__content">
                            <div className="checkout__location-user row">
                                <div className="checkout__content-title col l-2 c-12">
                                    <h3>Delivery Address</h3>
                                </div>
                                <div className="col l-8 c-12">
                                    <div className="checkout__user-location">
                                        <h4>165/16 trần quang cơ, phường phú thạnh, quận tân phú</h4>
                                    </div>
                                    <div className="checkout__user-phone">
                                        <h4>+ 0327329426</h4>
                                    </div>
                                </div>
                                <div className="col l-2 c-12">
                                    <div className="checkout__user-location-change">
                                        <span>Change</span>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__product ">
                                <div className="checkout__product-title row">
                                    <div className="col l-6">
                                        <h3>Product</h3>
                                    </div>
                                    <div className="checkout__product-wrap col l-2">
                                        <span>Price</span>
                                    </div>
                                    <div className="checkout__product-wrap col l-2">
                                        <span>Quantity</span>
                                    </div>
                                    <div className="checkout__product-wrap col l-2"> 
                                        <span>Total</span>
                                    </div>
                                </div>

                                {/* item checkout */}
                                {
                                    CartsChecked.map(cart => {
                                        const idProduct = cart.idProduct;
                                        const product = Products.filter(product => product.id === idProduct);
                                        return <ItemInCheckOut 
                                            cart={cart}
                                            product={product} 
                                            />
                                    })
                                }
                                       
                                {/*end item checkout */}
                               
                            </div>
                        </div>
                        <div className="checkout__total ">
                            <div className="checkout__total-wrap ">
                                <div className="checkout__total-heading row">
                                    <div className="checkout__total-header col l-8 c-12">
                                        <h2>Payment Methods</h2>
                                    </div>
                                    <div className="checkout__total-title-pay col l-2 c-12">
                                        <h5>Payment on delivery</h5> 
                                    </div>
                                    <div className=" checkout__total-change-pay col l-2 c-12">
                                        <span>Change</span>
                                    </div>
                                </div>
                                <div className="checkout__total-content row">
                                    <div className="col l-8">
                                    </div>
                                    <div className="col l-2">
                                        <h5>Total Product Cost</h5> 
                                    </div>
                                    <div className=" col l-2">
                                        <span>${total}</span>
                                    </div>
                                </div>
                                <div className="checkout__total-content row">
                                    <div className="col l-8">
                                    </div>
                                    <div className="col l-2">
                                        <h5>Delivery Cost</h5> 
                                    </div>
                                    <div className=" col l-2">
                                        <span>$0</span>
                                    </div>
                                </div>
                                <div className="checkout__total-content row">
                                    <div className="col l-8">
                                    </div>
                                    <div className="col l-2">
                                        <h5>Payment Total: ({CartsChecked.length} producs)</h5> 
                                    </div>
                                    <div className="checkout__total-content-total col l-2">
                                        <span>${total}</span>
                                    </div>
                                </div>
                                <div className="checkout__total-btn-checkout row">
                                    <div className="col l-8">
                                    </div>
                                    <div className="col l-3 c-12">
                                        <button>Pay</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer/>
            </div>
        </>
    )
}

export default CheckOut
