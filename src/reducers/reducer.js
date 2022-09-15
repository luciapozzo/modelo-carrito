import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
    products: [
      {id: 1, name: "Winnie Pooh", price: 800, img: require('../images/winnie-producto.jpg')},
      {id: 2, name: "Stich", price: 1200, img: require('../images/stich-producto.jpg')},
      {id: 3, name: "Mike", price: 1000, img: require('../images/mike-producto.jpg')},
      {id: 4, name: "Perrito", price: 2100, img: require('../images/perro-producto.jpg')},
      {id: 5, name: "Jirafita", price: 1800, img: require('../images/jirafa-producto.jpg')},
      {id: 6, name: "Tucán", price: 1400, img: require('../images/tucan-producto.jpg')},
      {id: 7, name: "Perrito", price: 2100, img: require('../images/perro-producto.jpg')},
      {id: 8, name: "Jirafita", price: 1800, img: require('../images/jirafa-producto.jpg')}
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
        case TYPES.REMOVE_ONE_PRODUCT: {
          const itemToDelete = state.cart.find(item=>item.id === action.payload)

          return itemToDelete.quantity>1
          ?{
            ...state,
            cart: state.cart.map(item => 
                item.id === action.payload 
                    ? {...item, quantity: item.quantity - 1}
                    : item 
            )
          }
          :{
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          }
        }
        
        case TYPES.REMOVE_ALL_PRODUCTS: {
          return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          }

        }
        
        case TYPES.CLEAR_CART: {
          return shoppingInitialState;
        }
          
      
        default:
          return state;
      }
  }

export default shoppingReducer;
