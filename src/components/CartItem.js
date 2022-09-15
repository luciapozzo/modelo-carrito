import '../styles/ShoppingCart.css';

const CartItem = () => {
  return (
    <div className='card cart-item'>
      <div className='image-product'>
        <img src={require('../images/winnie-producto.jpg')} alt="winnie" />
      </div>
      <div className='description-product'>
        <h4>Nombre producto</h4>
        <h5>$100</h5>
      </div>
      <button className='btn'>Eliminar uno</button>
      <button className='btn'>Eliminar todos</button>
    </div>
  )
}

export default CartItem