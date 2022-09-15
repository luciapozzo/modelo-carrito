import '../styles/ShoppingCart.css';

const CartItem = ({data, delFromCart}) => {

  const {id, name, price, img, quantity} = data;

  const totalProduct = (price, quantity) => price*quantity;

  return (
    <>
    <div className='card cart-item'>
      <div className='image-cartitem'>
        <img className='image-cartitem' src={img} alt={name} />
      </div>
      <div className='description-product'> 
        <h4>{name}</h4>
        <h5>${price} x {quantity} = ${totalProduct(price,quantity)}</h5>
      </div>
      <button className='btn' onClick={()=>delFromCart(id)}>Eliminar uno</button>
      <button className='btn' onClick={()=>delFromCart(id, true)}>Eliminar todos</button>
    </div>
    </>
    
  )
}

export default CartItem