const addNewProduct = product =>{
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

const deleteProduct = id =>{
    return{
        type: "DELETE_PRODUCT",
        payload: id
    }
}

const filterProducts = filteredProducts => {
    return{
        type: "FILTER_PRODUCTS",
        payload: filteredProducts,
    }
}

const setPinProduct = id =>{
    return{
        type: "PIN_PRODUCT",
        payload: id
    }
}

const unSetPinProduct = () =>{
    return{
        type: "UNPIN_PRODUCT"
    }
}

export{
    addNewProduct,
    deleteProduct,
    filterProducts,
    setPinProduct,
    unSetPinProduct
}