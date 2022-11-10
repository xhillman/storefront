import { Typography, Grid } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import Product from '../Product';
import {addToCart} from '../store/cart/cart';
import { getProducts } from '../store/products/products';
import {useEffect} from 'react';


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

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line 
  }, []);

  const { filteredProducts, header, addToCart } = props;

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
          filteredProducts.map((product, idx) => {
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

const mapStateToProps = ({products}) => {
  return {filteredProducts: products.filteredProducts};
};

const mapDispatchToProps = {addToCart};

export default connect(mapStateToProps, mapDispatchToProps)(Products);