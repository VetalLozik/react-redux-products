import React from 'react'
import {connect} from 'react-redux'

import {deleteProduct, setPinProduct, unSetPinProduct} from '../../actions/actions'

import './product.css'

const Product = ({product, deleteProduct, setPinProduct, unSetPinProduct, checked}) => {
    const { id, name, image, description, price } = product

    const onHandleChecked = e =>{
        if(e.target.checked === true){
            return setPinProduct(id)
        }
            
        if(e.target.checked === false){
            return unSetPinProduct()
        }
    }
    const onHandleDelete = e =>{
        e.preventDefault()
        deleteProduct(id)
    }
    return (
        <div className="card blue product">
            <div className="card-image">
                <img src={image} className="card-image" alt="pht"/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <span className="card-title">{price}</span>
            </div>
            <div className="card-action">
                <a href="/" onClick={onHandleDelete}>Delete</a>
                {checked === true && (
                    <label>
                        <input
                            type="checkbox"
                            className="filled-in"
                            defaultChecked=""
                            onChange={onHandleChecked}/>
                        <span>Tap to move</span>
                    </label>
                )}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        deleteProduct: id => dispatch(deleteProduct(id)),
        setPinProduct: id => dispatch(setPinProduct(id)),
        unSetPinProduct: () => dispatch(unSetPinProduct())
    }
}



export default connect(null, mapDispatchToProps)(Product)
