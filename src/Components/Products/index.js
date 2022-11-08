import { Typography, Grid } from '@mui/material';
import { connect } from 'react-redux';
import Product from '../Product';

let headerStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '50px',
  marginBottom: '50px',
  width: 'fit-content',
}

function Products(props) {
  const { products, header } = props;

  return (
    <div>
      <Typography variant='h2' style={headerStyle}>
        {header}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          products.map((product, idx) => {
            return (
              <Grid key={`product-${idx}`} item xs={3}>
                <Product product={product} />
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

export default connect(mapStateToProps)(Products);