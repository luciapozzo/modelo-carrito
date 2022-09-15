import '../styles/ShoppingCart.css';

const Product = (nombre, precio) => {
  return (
    <div className='card product'>
      <div className='image-product'>
        <img src={require('../images/winnie-producto.jpg')} alt="winnie" />
      </div>
      <div className='description-product'>
        <h4>Nombre producto</h4>
        <h5>$100</h5>
        <button className='btn'>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Product