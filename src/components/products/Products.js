import React from 'react'
import { connect } from 'react-redux'
import Product from '../product/Product'

import './products.css'

const Products = ({products}) => {
    return (
        <div className="products-wrapper-row">
            {products && products.map(product =>{
                return <Product checked={product.checkbox} product={product} key={product.id}/>
            })}
        </div>
        
    )
}

const mapStateToProps = state =>{
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)



