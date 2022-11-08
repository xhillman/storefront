import {Card, CardContent, Typography} from "@mui/material";

function Product(props) {

  const { product } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
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
      </CardContent>
    </Card>
  );
}

export default Product;

