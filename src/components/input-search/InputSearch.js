import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'

import {filterProducts} from '../../actions/actions'

const InputSearch = ({products, filterProducts}) => {
    const [searchWords, setSearchWords] = useState('')
    const [filteredPropucts] = useState(products)
    useEffect(()=>{
        const result = filteredPropucts.filter(prod =>{
            return prod.name.toLocaleLowerCase().includes(searchWords) || prod.description.toLocaleLowerCase().includes(searchWords)
        })
        filterProducts(result)
    }, [ searchWords, filteredPropucts, filterProducts])

    return (
        <input
            type="text"
            placeholder="Search ..."
            onChange={e => setSearchWords(e.target.value) }/>
    )
}

const mapStateToProps = state =>{
    return{
        products: state.products
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        filterProducts: filteredProducts => dispatch(filterProducts(filteredProducts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)
