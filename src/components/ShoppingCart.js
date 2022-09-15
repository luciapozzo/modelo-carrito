import { useReducer } from "react";
import '../styles/ShoppingCart.css';
import CartItem from './CartItem';
import Product from './Product';
import { TYPES } from "../actions/actions";
import { shoppingInitialState, shoppingReducer } from "../reducers/reducer";


const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
  const {products, cart} = state;

  const addToCart = (id) => dispatch ({type:"ADD_TO_CART", payload:id})

  const delFromCart = () => {}

  const clearCart = () => {}
  
  return (
    <>
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
      <button className='clean-btn btn' onClick={clearCart}>LIMPIAR CARRITO</button>  
    </div>         
    </>
  )
}

export default ShoppingCart