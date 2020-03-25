import React from 'react'
import Products from '../../components/products'

import './main-page.css'
import InputSearch from '../../components/input-search/InputSearch'

const MainPage = () => {
    return (
        <div className="container">
                <div className="input-wrapper">
                    <InputSearch />
                </div>
                <div className="products-wrapper">
                    <Products />
                </div>
        </div>
    )
}

export default MainPage
