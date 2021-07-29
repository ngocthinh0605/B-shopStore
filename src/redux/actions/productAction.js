import {ActionTypes} from '../contant/action-types'

export const setProducts = (product) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product,
    }
}

export const addProductIntoCart = (cart) =>{
    return {
        type: ActionTypes.ADD_ITEM_INTO_CART,
        payload:cart,
    }
}

export const editQuatityCartDuplicate = (cart) =>{
    return {
        type: ActionTypes.EDIT_QUANTITY_CART_DUPLICATE_ID,
        payload:cart,
    }
}

export const deleteItemIntoCart = (idCart) =>{
    return {
        type: ActionTypes.DELETE_ITEM_INTO_CART,
        payload:idCart,
    }
}

export const incrementItemInShoppingCart = (idCart) =>{
    return {
        type: ActionTypes.INCREMENT_NUMBER_ITEM_IN_SHOPPING_CART,
        payload:idCart,
    }
}
export const decrementItemInShoppingCart = (idCart) =>{
    return {
        type: ActionTypes.DECREMENT_NUMBER_ITEM_IN_SHOPPING_CART,
        payload:idCart,
    }
}

export const checkAllItemShoppingCart = (boolean) =>{
    return{
        type: ActionTypes.CHECKED_CHECKBOX_PRODUCT_IN_SHOPPINGCART,
        payload: boolean,
    }
}


export const checkedItemShoppingcart = (id) =>{
    return{
        type: ActionTypes.CHECKED_ITEM_SHOPPINGCART,
        payload: id,
    }
}




