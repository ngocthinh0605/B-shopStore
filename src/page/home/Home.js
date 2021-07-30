import {useEffect} from 'react'
import '../../Grid.css'
import '../../css/Home.css'
import bremo from './image/brembo.jpg'
import agv from './image/Akrapovic.png'
import slide1 from './image/slide1.jpg'
import slide2 from './image/slide2.jpg'
import slide3 from './image/slide3.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductAgv from './ProductAgv'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const IMG_WIDTH = 400;

const Home = ({active}) => {

    const Products = useSelector(state => state.allProducts.products);
   
    useEffect(() =>{
        const slideImages = document.querySelectorAll('.agv__slide');
        const slide_content = document.querySelector('.agv__slides');
        let index = 0;
            function next(){
                if(index < slideImages.length - 1){
                    index++;
                }else{
                    index=0;
                }
                slide_content.style.transform = `translateX(-${IMG_WIDTH * index}px)`
            }
            setInterval(() =>{
                next()
            },2 * 1000)
    },[])
    function handleSearch(e)
    {
    }   

    return (
        <>
             <div className='header grid'>
                <Header 
                    active={active}
                    searchProduct = {(e) => handleSearch(e)}
                />    
            </div>   
            <div className="banner__full__creen"> 
                <div className="grid wide">
                    <div className="banner">
                        <div className="banner__infor">
                            <div className="banner__infor-top">
                                <span>Make Your Car Perfectly.</span>
                            </div>
                            <div className="banner__infor-bottom">
                                    <span>Original Accessories for your car.</span>  
                            </div>
                        </div>
                        <Link className="banner__link" to='/product'>
                            <div className="banner__btn">
                                <span>Shop Now</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container grid">
                <div className="main">
                    <div className="grid wide">
                            <div className="main__brembo">
                                <div className="row">
                                    <div className="brembo__img col l-4">
                                        <img src={bremo} alt="" />
                                    </div>
                                    <div className="col l-8">
                                        <div className="brembo__info">
                                            <h1>ONLY BREMBO CAN STOP YOU</h1>
                                            <p>Chosen from the best manufacturers</p>
                                            <p>Brakes created for the track for those who demand the best for their bike.</p>
                                            <p>Brembo brake systems chosen by the best manufacturers in the world as the primary system.</p>
                                        </div>
                                        <Link to="/product" className="see-more">
                                            <p>See More.....</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="main_akrapovic">
                                <div className=" akrapovic row">
                                    <div className="akramovic_infor col l-4">
                                        <h1>Akrapovic exhaust car Carbon</h1>
                                        <p>An exhaust system looks simple at first glance. But a closer look shows that it is a complex system that has a significant effect on the performance of a racing or a regular sports car</p>
                                        <Link to="/product" className="see-more">
                                            <p>See More.....</p>
                                        </Link>
                                    </div>
                                    <div className="akrapovic_img col l-8">
                                        <img src={agv} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__agv">
                                <div className="agv row">
                                    <div className="avg__content col l-4">
                                        <div className="agv__slides">
                                            <img src={slide3} alt="" className="agv__slide" />
                                            <img src={slide2} alt="" className="agv__slide" />
                                            <img src={slide1} alt="" className="agv__slide" />
                                        </div>
                                    </div>
                                    <div className="agv_items-blank col l-1">

                                    </div>
                                    {
                                        
                                        Products.filter(product => product.category === 'AGV')
                                        .map((product,index) => 
                                            {
                                                if(index > 2) return 0;
                                                return <ProductAgv
                                                    key={product.id}
                                                    id={product.id}
                                                    image={product.image}
                                                    title={product.title}
                                                    price={product.price}
                                                />
                                            }
                                        )
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default Home
