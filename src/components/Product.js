import '../styles/ShoppingCart.css';

const Product = ({data, addToCart}) => {

  const {id, name, price} = data;

  return (
    <div className='card product'>
      <div className='image-product'>
        <img src={require('../images/winnie-producto.jpg')} alt="winnie" />
      </div>
      <div className='description-product'>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button className='btn' onClick={() => addToCart(id)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Product