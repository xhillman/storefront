import { Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux'
import { selectCategory, getCategories } from '../store/categories/categories';
import Category from '../Category';
import { useEffect } from 'react';

function Categories(props) {

  const { categories, selectCategory } = props;

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line 
  }, []);

  let catStyle = {
    display: 'flex',
    maxWidth: '80%',
    justifyContent: 'flex-start',
  }

  const handleClick = (category) => {
    console.log('Category clicked', category);
    selectCategory(category.name);
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