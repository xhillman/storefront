import { connect } from 'react-redux'
import { Typography } from "@mui/material";

function Header (props) {

  const { cart } = props;

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    alignItems: 'center',
    padding: '10px',
  }

  return (
    <header style={headerStyle}>
      <Typography variant="h4" component="h4">
        OUR STORE
      </Typography>
      <Typography>CART ({cart.length})</Typography>
    </header>
  )
}

const mapStateToProps = ({ cart }) => {
  return {cart};
};

export default connect(mapStateToProps)(Header);