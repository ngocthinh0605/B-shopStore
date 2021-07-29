import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../css/productdetail.css'
import '../../Grid.css'
import ProductItem from './../Product/ProductItem';
import '../../css/product.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import { addProductIntoCart, editQuatityCartDuplicate } from '../../redux/actions/productAction'



const ProductDetail = () => {
    function handleSearch(e)
    {
    }

    const dispatch = useDispatch();
    const { id } = useParams()
    const Products = useSelector((state) => state.allProducts.products);
    const Carts = useSelector((state) => state.allCarts.carts);
    // const product = useMemo(() => Products.filter(product => parseInt(product.id) === parseInt(id)),[Carts]) 
    const product = Products.filter(product => parseInt(product.id) === parseInt(id))

    
    function handleAddItemIntoCart (){
        const ItemNumberBuy = document.querySelector('.product__detail-addcart-number')
        if(ItemNumberBuy.value < 0){

        }

        const cartDuplicate ={
            id:0,
            idProduct:0,
            quantity: 0,
            price:0
        }
        const newItemCart ={
                id:parseInt(Math.floor(Math.random() * 1000)),
                idProduct:parseInt(id),
                quantity: parseInt(ItemNumberBuy.value),
                price:product[0].price
            }

        var boleanDuplicateIdProduct = false;
        Carts.forEach(cart => {
            if(cart.idProduct === parseInt(id)){
                boleanDuplicateIdProduct = true;
                cartDuplicate.id = cart.id;
                cartDuplicate.idProduct = cart.idProduct;
                cartDuplicate.quantity = parseInt(cart.quantity) + parseInt(ItemNumberBuy.value);
                cartDuplicate.price = product[0].price;
            }else{
                newItemCart.id = parseInt(Math.floor(Math.random() * 1000));
                newItemCart.idProduct = parseInt(id);
                newItemCart.quantity =   parseInt(ItemNumberBuy.value);
                newItemCart.price = product[0].price;
            }
        })
        console.log('new' ,newItemCart ,cartDuplicate)
        if(boleanDuplicateIdProduct){
            document.querySelector('.product__detail-notify').style.display = 'block';
            dispatch(editQuatityCartDuplicate(cartDuplicate))
        }else{
            document.querySelector('.product__detail-notify').style.display = 'block';
            dispatch(addProductIntoCart(newItemCart))
        }
        
        
        
        // dispatch(addProductIntoCart(cart))
    }
    
    return (
        <>
            <Header
                searchProduct = {(e) => handleSearch(e)}
            />
            <div className="product__detail-full">
                <div className="grid">
                    <div className="product__detail">
                        <div className="grid wide">
                            <div className="product__detail-content">
                                <div className="product__detail-wrap">
                                    <div className="  row no-gutters">
                                        <div className="col l-6">
                                            <div className="product__detail-left">
                                                <div>
                                                    <h1>{product[0].title}</h1>
                                                </div>
                                                <div>
                                                    <h5>The precision of every part, the ecstasy of materials. Performance that excites while it seduces. The obsession is overcoming the limits of one's imagination,</h5>
                                                </div>
                                                <div className="product__detail-price">
                                                    <span>${product[0].price}</span>
                                                </div>
                                                <div className="product__detail-addcart">
                                                    <button onClick={handleAddItemIntoCart} >ADD TO CART</button>
                                                    <input className="product__detail-addcart-number" type="number" defaultValue='0' min='0'/>
                                                </div>
                                                <div className="product__detail-notify"> 
                                                    <span>Product is added successfully</span> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-6">
                                            <div className="product__detail-right">
                                                <img src={product[0].image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__hint">
                <div className="grid">
                    <div className="product__hint-content">
                        <div className="product__hint-title">
                            <h1>For You</h1>
                        </div>
                        <div className="grid wide">
                            
                            <div className="product__hint-list">
                                <div className="row">
                                    <div className="col l-2"></div>
                                    <div className="col l-8">
                                        <div className="row">
                                            {
                                                Products.filter(productf => productf.category === product[0].category && productf)
                                                .map(product => 
                                                    <div className="col l-3">
                                                        <ProductItem
                                                            id={product.id}
                                                            image={product.image}
                                                            title={product.title}
                                                            price={product.price}
                                                            link={''}
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
            </div>
            <Footer/>
        </>
    )
}

export default ProductDetail
