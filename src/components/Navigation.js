import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <header className='container navigation-container'>
      <div className='logo-container'>
        <p>Carrito de compras</p>
      </div>
      <nav className='menu-container'>
        <a href="" className='menu-item'>Inicio</a>
        <a href="" className='menu-item'>Nosotros</a>
        <a href="" className='menu-item'>Servicios</a>
        <a href="" className='menu-item'>Contacto</a>
        <button className='btn cart-btn'><a className='menu-item' href="">Carrito</a></button>
      </nav>    
    </header>
  )
}

export default Navigation