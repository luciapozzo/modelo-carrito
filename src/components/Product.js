import '../styles/ShoppingCart.css';

const Product = ({data, addToCart}) => {

  const {id, name, price, img} = data;

  return (
    <div className='card product'>
      <div className='image-product'>
        <img src={img} alt={name} />
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