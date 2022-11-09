import Categories from "../Categories";
import Products from "../Products";
import { useState } from 'react';
import SimpleCart from '../SimpleCart';


function Main() {

  const [header, setHeader] = useState('Our Products');

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  return (
    <>
      <div  style={{display: 'flex', justifyContent: 'space-between'}}>
        <Categories handleHeaderChange={handleHeaderChange} />
        <SimpleCart />
      </div>
      <Products header={header} />
    </>
  )
}

export default Main;