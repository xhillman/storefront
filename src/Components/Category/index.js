import { Typography } from "@mui/material";

function Category(props) {

  const { category, handleClick } = props;

  return (
    <Typography pr='20px' pl='20px' lineHeight={0} component='div' onClick={() => handleClick(category)}>
      <p>{category.name}</p>
    </Typography>
  )
}

export default Category;