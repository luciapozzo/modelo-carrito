import '../styles/ShoppingCart.css';

const CartItem = ({data, delFromCart}) => {

  const {id, name, price, quantity} = data; 

  return (
    <div className='card cart-item'>
      <div className='image-product'>
        <img src={require('../images/winnie-producto.jpg')} alt="winnie" />
      </div>
      <div className='description-product'>
        <h4>{name}</h4>
        <h5>${price} x {quantity} = ${price*quantity}</h5>
      </div>
      <button className='btn'>Eliminar uno</button>
      <button className='btn'>Eliminar todos</button>
    </div>
  )
}

export default CartItem