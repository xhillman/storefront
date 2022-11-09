import { connect } from 'react-redux'
import CartItem from '../CartItem';
import { removeFromCart } from '../store/cart/cart';


function SimpleCart(props) {

  const { cart, removeFromCart } = props;

  const cartStyle = {
    position: 'fixed',
    right: '15px',
    marginTop: '10px',
    backgroundColor: '#f5f5f5',
  }

  return (
    <div style={cartStyle}>
      {
        cart.map((item, idx) => {
          return (
            <CartItem key={`cart-item-${idx}`} item={item} handleClick={removeFromCart} />
          )})
      }
    </div>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = { removeFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);