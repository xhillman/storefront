import { Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { red } from "@mui/material/colors";

function CartItem(props) {

  const { item, handleClick } = props;

  const cartStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '150px',
    margin: '15px'
  }

  const deleteStyle = {
    cursor: 'pointer',
  }

  return (
    <div style={cartStyle}>
      <Typography variant='h6'>{item.product.name}</Typography>
      <CancelIcon sx={{ color: red[900] }} fontSize='small' onClick={() => handleClick(item)} style={deleteStyle}></CancelIcon>
    </div>
  )
}

export default CartItem;