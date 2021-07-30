import React, { useState } from 'react'
import Header from '../../components/Header'
import '../../css/product.css'
import '../../Grid.css'
import bannerproduct from './image/bannerpro.png'
import Footer from './../../components/Footer';
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem';


const Product = ({active}) => {
    const Products = useSelector((state) => state.allProducts.products);
    const Categories = useSelector((state) => state.allProducts.categoris);
    const [categoryChoice, setCategory] = useState('ALL');
    const [filterType, setFilter] = useState('')
    function handleChangeCategory(category) {
        setCategory(category);
    }
    // console.log(filterType)
    function handleSearch(e)
    {
        setFilter(e);
    }    
    return (
        <>
            <div className='header grid'>
                <Header 
                    active={active}
                    searchProduct = {(e) => handleSearch(e)}
                />    
            </div>  
            <div className="grid">
                <div className="product__content">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-3">

                            </div>
                            <div className="product__banner col l-6">
                                <img src={bannerproduct} alt="" />
                                <div className="product__banner-menu">
                                    {
                                        Categories.map(category => 
                                            <div onClick={() =>handleChangeCategory(category)} 
                                            className={`banner__menu-item ${categoryChoice === category && 'active'}`}>{category}</div>
                                        )
                                    }
                                    
                                    {/* <div className="banner__menu-item active ">AKRAPOVIC</div>
                                    <div className="banner__menu-item ">BMW</div> */}
                                </div>
                            </div>
                            <div className="col l-3">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__container">
                    <div className="grid wide">
                        <div className="product__list">
                            <div className="row product__list-row">
                                <div className="col l-2"></div>
                                    <div className="col l-8">
                                        <div className="product__list-row-wrap row">
                                        {
                                            Products.filter(product => {
                                                if(categoryChoice === 'ALL' && filterType === ''){
                                                    return product;
                                                }else if(categoryChoice === 'ALL' && filterType !== ''){
                                                    if(product.title.indexOf(filterType) !== -1){
                                                        return product;
                                                    }
                                                }
                                                if(product.category === categoryChoice  && filterType === ''){
                                                    return product;
                                                }else if(product.category === categoryChoice  && filterType !== ''){
                                                    if(product.title.indexOf(categoryChoice) !== -1){
                                                        return product;
                                                    }
                                                }
                                            })
                                            .map((product)=>
                                                <div className="col l-3">
                                                    <ProductItem
                                                        key={product.id}
                                                        id  ={product.id}
                                                        image={product.image}
                                                        title={product.title}
                                                        price={product.price}
                                                        link={'productdetail/'}
                                                    />
                                                </div>
                                            )
                                        }
                                        </div>
                                    </div>
                                <div className="col l-2"></div>
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Product
