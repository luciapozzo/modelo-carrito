import { useReducer } from "react";
import '../styles/ShoppingCart.css';
import CartItem from './CartItem';
import Product from './Product';
import { TYPES } from "../actions/actions";
import { shoppingInitialState, shoppingReducer } from "../reducers/reducer";
import TotalPrice from "./TotalPrice";


const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
  const {products, cart} = state;

  const addToCart = (id) => dispatch ({type:"ADD_TO_CART", payload:id})

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch ({type:"REMOVE_ALL_PRODUCTS", payload:id})
    } else {
      dispatch ({type:"REMOVE_ONE_PRODUCT", payload:id})
    }
  }

  const clearCart = () => dispatch ({type:"CLEAR_CART"});

 
  
  return (
    <div className="shopping-cart">
    <h2>Nuestros amigurumis</h2>
    <div className="container products-container">
      {
        products.map(product => <Product
          key={product.id}
          data={product}
          addToCart={addToCart}
        />)
      }
    </div>
    <h2>Carrito</h2>
    <div className="container cart-item-container">
      {
        cart.map((item, index) => <CartItem
          key={index}
          data={item}
          delFromCart={delFromCart}
          
        />)
      }
      <TotalPrice />  
      <button className='clean-btn btn' onClick={clearCart}>LIMPIAR CARRITO</button>
      
    </div>
      
         
    </div>
  )
}

export default ShoppingCart