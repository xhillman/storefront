import {Card, CardContent, Typography, Button} from "@mui/material";

function Product(props) {

  const { product, handleClick } = props;

  let buttonStyle = {
    paddingLeft: '0px'
  }

  const cardStyle = {
    width: '60%',
  }

  return (
    <Card sx={{ minWidth: 275 }} style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2">
          {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </Typography>
        <Button variant="text" style={buttonStyle} onClick={() => handleClick(product)}>ADD TO CART</Button>
      </CardContent>
    </Card>
  );
}

export default Product;

