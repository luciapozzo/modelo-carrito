import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
    products: [
      {id: 1, name: "Winnie Pooh", price: 800},
      {id: 2, name: "Stich", price: 1200},
      {id: 3, name: "Mike", price: 1000},
      {id: 4, name: "Perrito", price: 2100},
      {id: 5, name: "Jirafita", price: 1800},
      {id: 6, name: "Tucán", price: 1400}
    ],
    cart: []
  }
  
  export function shoppingReducer(state, action) {
      switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload)
            const itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart 
            ? {
                ...state,
                cart: state.cart.map(item => 
                    item.id === newItem.id 
                        ? {...item, quantity: item.quantity + 1}
                        : item 
                )
            }
            :{
                ...state,
                cart:[...state.cart, {...newItem, quantity: 1}]
            }
        }
        case TYPES.REMOVE_ONE_PRODUCT: {}
        case TYPES.REMOVE_ALL_PRODUCTS: {}
        case TYPES.CLEAR_CART: {}
          
      
        default:
          return state;
      }
  }

export default shoppingReducer;
