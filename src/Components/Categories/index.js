import { Typography } from '@mui/material';
import { connect } from 'react-redux'
import { selectCategory } from '../store/categories/categories';
import Category from '../Category';

function Categories(props) {

  const { categories, selectCategory } = props;

  let catStyle = {
    display: 'flex',
    maxWidth: '80%',
    justifyContent: 'flex-start',
  }

  const handleClick = (category) => {
    selectCategory(category);
  }

  return (
    <div>
      <Typography lineHeight={3} ml='10px' component='h3' variant='h5'>
        Browse our Categories
      </Typography>
      <div style={catStyle}>
        {
          categories.map((category, idx) => {
            return (
              <Category key={`category-${idx}`} category={category} handleClick={handleClick} />
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ categories }) => {
  return categories;
};

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);