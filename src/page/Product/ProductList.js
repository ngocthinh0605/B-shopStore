import React from 'react'
import ProductItem from './ProductItem'


const ProductList = ({category,products, search}) => {
    // console.log('productlist',search)
    return (
        <>
            {
                products.filter(product => {
                    if(category === 'ALL' && search === ''){
                        return product;
                    }else if(category === 'ALL' && search !== ''){
                        if(product.title.indexOf(search) !== -1){
                            return product;
                        }
                    }
                    if(product.category === category  && search === ''){
                        return product;
                    }else if(product.category === category  && search !== ''){
                        if(product.title.indexOf(search) !== -1){
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
                        />
                    </div>
                )
            }
        </>
    )
}

export default ProductList
