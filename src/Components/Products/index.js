import { Typography, Grid } from '@mui/material';
import { connect } from 'react-redux';
import Product from '../Product';
import {addToCart} from '../store/cart/cart';


let headerStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '50px',
  marginBottom: '50px',
  width: 'fit-content',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '60%',
  margin: 'auto',
  justifyItems: 'center'
}

const gridItemStyle = {
  margin: '10px',
  // width: '25%'
}

function Products(props) {
  const { products, header, addToCart } = props;

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <Typography variant='h2' style={headerStyle}>
        {header}
      </Typography>
      <Grid container style={gridStyle}>
        {
          products.map((product, idx) => {
            return (
              <Grid key={`product-${idx}`} style={gridItemStyle}>
                <Product product={product} handleClick={handleClick}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ products }) => {
  return products;
};

const mapDispatchToProps = {addToCart};

export default connect(mapStateToProps, mapDispatchToProps)(Products);