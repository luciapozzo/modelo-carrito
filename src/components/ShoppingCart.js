import '../styles/ShoppingCart.css';
import CartItem from './CartItem';
import Product from './Product';

const ShoppingCart = () => {
  return (
    <>
    <div className="container products-container">
      <h2>Nuestros amigurumis</h2>
      <Product/>
    </div>
    <div className="container cart-item-container">
      <h2>Carrito</h2>
      <CartItem/>
      <button className='clean-btn btn'>LIMPIAR CARRITO</button>  
    </div>
   
        
    </>
  )
}

export default ShoppingCart