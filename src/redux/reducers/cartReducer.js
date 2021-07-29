import { ActionTypes } from './../contant/action-types';
const initialState ={
    carts:[
        {
            id:1,
            idProduct:1,
            quantity: 5,
            price:200,
            checked: false,
        },
        {
            id:2,
            idProduct:6,
            quantity: 2,
            price:200,
            checked: true,
        },
        {
            id:3,
            idProduct:11,
            quantity: 4,
            price:200,
            checked: true,
        },
        {
            id:4,
            idProduct:15,
            quantity: 9,
            price:200,
            checked: false,
        }
    ]
}
export const cartReducer =(state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CARTS:
            return [...state];
        case ActionTypes.ADD_ITEM_INTO_CART:
                return {
                    ...state,
                    carts:[
                        ...state.carts,
                        payload
                    ]
                }
        case ActionTypes.EDIT_QUANTITY_CART_DUPLICATE_ID:
            console.log(payload)
            return{
                ...state,
                carts: state.carts.map(cart => parseInt(cart.id) === parseInt(payload.id) ? {...cart, quantity: payload.quantity} : {...cart})
            }
        case ActionTypes.DELETE_ITEM_INTO_CART:
            console.log(payload)
            return {
                ...state,
                carts: state.carts.filter(cart => cart.id !== payload && cart),
            }

        case ActionTypes.INCREMENT_NUMBER_ITEM_IN_SHOPPING_CART:
            console.log(payload,'increment in shopping cart')
            return{
                ...state,
                carts: state.carts.map(cart => parseInt(cart.id) === parseInt(payload) ? {...cart, quantity: parseInt(cart.quantity + 1)} : cart)
            }

        case ActionTypes.DECREMENT_NUMBER_ITEM_IN_SHOPPING_CART:
            console.log(payload,'DEcrement in shopping cart')
            return{
                ...state,
                carts: state.carts.map(cart => parseInt(cart.id) === parseInt(payload) ? {...cart, quantity: parseInt(cart.quantity - 1)} : cart)
            }

        case ActionTypes.CHECKED_ITEM_SHOPPINGCART:
            return{
                ...state,
                carts: state.carts.map(cart => parseInt(cart.id) === parseInt(payload) ? {...cart, checked: !cart.checked} : cart)
            }

        case ActionTypes.CHECKED_CHECKBOX_PRODUCT_IN_SHOPPINGCART:
        console.log('123')
        return{
            ...state,
            carts: state.carts.map(cart => ({...cart, checked: payload}))
        }
        default:
            return state;
    }
}