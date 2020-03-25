const initialState = {
    products: [
        {
            id: 1,
            image: 'https://images.samsung.com/is/image/samsung/ca-uhdtv-nu8000-un65nu8000fxzc-frontblack-94543058?$PD_GALLERY_L_JPG$',
            name: 'TV',
            description: 'desc1',
            price: '1000$',
            checkbox: true
        },
        {
            id: 2,
            image: 'https://img.moyo.ua/img/products/4121/77_600.jpg',
            name: 'microwave',
            description: 'desc2',
            price: '700$',
            checkbox: true
        },
        {
            id: 3,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6344/6344763_sd.jpg',
            name: 'laptop',
            description: 'desc3',
            price: '500$',
            checkbox: true
        },
        {
            id: 4,
            image: 'https://images.samsung.com/is/image/samsung/ca-uhdtv-nu8000-un65nu8000fxzc-frontblack-94543058?$PD_GALLERY_L_JPG$',
            name: 'TV',
            description: 'desc1',
            price: '1000$',
            checkbox: true
        },
        {
            id: 5,
            image: 'https://img.moyo.ua/img/products/4121/77_600.jpg',
            name: 'microwave',
            description: 'desc2',
            price: '700$',
            checkbox: true
        },
        {
            id: 6,
            image: 'https://i0.wp.com/itc.ua/wp-content/uploads/2018/11/MacBook-Air-2018-3-of-23.jpg',
            name: 'laptop',
            description: 'desc3',
            price: '500$',
            checkbox: true
        },
        {
            id: 7,
            image: 'https://img.moyo.ua/img/products/4121/77_600.jpg',
            name: 'microwave',
            description: 'desc2',
            price: '700$',
            checkbox: true
        },
        {
            id: 8,
            image: 'https://i0.wp.com/itc.ua/wp-content/uploads/2018/11/MacBook-Air-2018-3-of-23.jpg',
            name: 'laptop',
            description: 'desc3',
            price: '500$',
            checkbox: true
        }
    ]
}

const reduce = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                products: [...state.products, action.payload]
            }
        case "DELETE_PRODUCT":
            return{
                products: state.products.filter(prod=>{
                    return prod.id !== action.payload
                })
            }
        case "FILTER_PRODUCTS":
            return{
                products: action.payload
            }
        case "PIN_PRODUCT":
            const checkedProduct = state.products.filter(prod=>{
                return prod.id === action.payload
            });
            const uncheckedProducts = state.products.filter(prod=>{
                return prod.id !== action.payload
            });
            const uncheckedProductsWithoutCheckbox = uncheckedProducts.map(prod=>{
                prod.checkbox = false
                return prod
            })
            const allProducts= [...checkedProduct, ...uncheckedProductsWithoutCheckbox]
            return{
                    products: allProducts
                }
            case "UNPIN_PRODUCT":
                return{
                    products: state.products.map(prod=>{
                        prod.checkbox = true
                        return prod
                    })
                }
        default:
            return state;
    }
}
export default reduce