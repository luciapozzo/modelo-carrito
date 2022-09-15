import '../styles/ShoppingCart.css';

const TotalPrice = ({total}) => {
  return (
    <div className="total-price">
    <h3>Total</h3>
    <h2>${total}</h2>
    </div>
  )
}

export default TotalPrice