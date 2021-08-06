
import '../css/header.css'
import '../Grid.css'
import emptycart from '../image/emptycart.png'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

import { deleteItemIntoCart } from '../redux/actions/productAction'
import Modal from './Modal';



const Header = ({active, searchProduct}) => {
    const Products = useSelector(state => state.allProducts.products);
    const Carts = useSelector(state => state.allCarts.carts);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');

    if(search !== null)
        {
            searchProduct(search)
        }

    function handleSearch(value){
        
        setSearch(value);
        
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) =>{
            const header = document.querySelector('.header');
            header.classList.toggle("sticky",window.scrollY > 0);
        })
    },[])
    function handleDeleteItem(id){
        dispatch(deleteItemIntoCart(id))

    }

    function handleModalClick(){
        setModal(!modal);
    }
    
    function handleNavbars(){
        const transform1 = document.querySelector('.header__main-navbar');
        const modal = document.querySelector('.header__bars-modal');
        modal.style.display = 'block';
        transform1.style.transform = 'translateX(0%)';
    }

    function handleModalBars(){
        const transform1 = document.querySelector('.header__main-navbar');
        const modal = document.querySelector('.header__bars-modal');

        modal.style.display = 'none';
        transform1.style.transform = 'translateX(100%)';
    }
    



    return (

    <>
        {/* <div className='header grid'> */}
        {
            modal && <Modal handleModalClick={handleModalClick}/>
        }

        <div className="header__top gird">
            <div className=" grid wide">
                    <div className="header__top-nav">
                        <div className="header__top-left">
                            <div className="header__phone">
                                +840327329426
                            </div>
                            <div className="header__social">
                                <i className="header__link-social fab fa-facebook-square"></i>
                                <i className="header__link-social fab fa-instagram"></i>
                                <i className="header__link-social fab fa-tiktok"></i>
                            </div>
                        </div>
                        <div onClick={handleModalClick} className="header__top-right">
                            <i class="far fa-user-circle"></i>
                            <div className="header__login">Login</div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="header__bottom ">
            <div className="header__main grid wide ">
                <div className="header__main-left">
                    <Link to='/' className="header__main-logo">B-Sport</Link>
                    <div className="header__main-search">
                        <div className="header__seach-icon"> 
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="header__search-input">
                            <input 
                                value={search}
                                onChange={(e) => handleSearch(e.target.value,e.target.value.length)} 
                                type="text" 
                                placeholder="Search..." /> 
                        </div>
                    </div>
                    
                    <div className="header__nav-item-wrap-cart header__car-navbars">
                            <div className="header__nav-item-cart">
                                <Link to='/shoppingcart' className="header__nav-item-cart-wrap">
                                    <i class="fab fa-opencart"></i>
                                    <span className="header_number_item_cart">{Carts.length}</span>
                                </Link>
                                <div className={`header__cart__list ${Carts.length === 0 && 'header__cart-no-item' }  `}>
                                    {/* is cart empty add class  /header__cart-no-item/ */}
                                    <img className="header__cart-no-item-img" src={emptycart} alt="" />
                                    <h4 className="header__cart-heading">Added Products</h4>
                                    <div className="header__cart-list-items">
                                        {/* cart item */}
                                        {
                                            Carts.length > 0 && Carts.map(cart => {
                                                    let idProduct = cart.idProduct;
                                                    let product = Products.filter(product => product.id === idProduct)
                                                    return <CartItem 
                                                        onDelete={(id) => handleDeleteItem(id)}
                                                        key={cart.id} 
                                                        cart={cart} 
                                                        product={product[0]}/>
                                                })
                                            }
                                    </div>
                                    <Link to='/shoppingcart' className="header__cart-to-cart">
                                        <button> Your Cart</button>
                                    </Link>
                                </div>
                            </div>
                                
                        </div>
                        <div onClick={handleNavbars} className="header__bar">
                            <i class="fas fa-bars"></i>
                        </div>
                        <div onClick={handleModalBars} className="header__bars-modal"></div>
                </div>
                <div className="header__main-right">
                    <div onClick={handleModalBars} className="header__main-navbar">
                        <Link to='/' className={`header__nav-item ${active === 'Home' && 'active' }`} >Home</Link>
                        <Link to='/product' className={`header__nav-item ${active === 'Product' && 'active' }`}>Product</Link>
                        <div className="header__nav-item">About Us</div>
                        <div className="header__nav-item-wrap-cart">
                            <div className="header__nav-item-cart">
                                <Link to='/shoppingcart' className="header__nav-item-cart-wrap">
                                    <i class="fab fa-opencart"></i>
                                    <span className="header_number_item_cart">{Carts.length}</span>
                                </Link>
                                <div className={`header__cart__list ${Carts.length === 0 && 'header__cart-no-item' }  `}>
                                    {/* is cart empty add class  /header__cart-no-item/ */}
                                    <img className="header__cart-no-item-img" src={emptycart} alt="" />
                                    <h4 className="header__cart-heading">Added Products</h4>
                                    <div className="header__cart-list-items">
                                        {/* cart item */}
                                        {
                                            Carts.length > 0 && Carts.map(cart => {
                                                    let idProduct = cart.idProduct;
                                                    let product = Products.filter(product => product.id === idProduct)
                                                    return <CartItem 
                                                        onDelete={(id) => handleDeleteItem(id)}
                                                        key={cart.id} 
                                                        cart={cart} 
                                                        product={product[0]}/>
                                                })
                                            }
                                    </div>
                                    <Link to='/shoppingcart' className="header__cart-to-cart">
                                        <button> Your Cart</button>
                                    </Link>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </>
    )
}
Header.propTypes ={
    searchProduct: PropTypes.func.isRequired,
}

export default Header
