import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addNewProduct } from '../../actions/actions'



const NewRecipe = ({addNewProduct, history}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        addNewProduct({
            id: Date.now().toString(),
            image,
            name,
            description,
            price,
            pin: false,
            checkbox: true
        })
        return history.push('/')
    }
    return (
        <div className="row"> 
            <div className="col s6 offset-s3">
                <h2>Add new product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="image">Image</label>
                                <input 
                                    name="image"
                                    onChange={e=>setImage(e.target.value)}
                                    type="text"
                                    className="validate" 
                                    required />
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="name">Name</label>
                            <input 
                                    name="name"
                                    onChange={e=>setName(e.target.value)}
                                    type="text"
                                    className="validate" 
                                    required />
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                onChange={e=>setDescription(e.target.value)}
                                className="materialize-textarea" required></textarea>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="price">Price</label>
                            <input 
                                    name="price"
                                    onChange={e=>setPrice(e.target.value)}
                                    type="text"
                                    className="validate" 
                                    required />
                        </div>
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addNewProduct: product => dispatch(addNewProduct(product)) 
    }
}
export default connect( null ,mapDispatchToProps)(withRouter(NewRecipe))
