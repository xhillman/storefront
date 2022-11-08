import Categories from "../Categories";
import Products from "../Products";
import { useState } from 'react';


function Main() {

  const [ header, setHeader ] = useState('Our Products');

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  return (
    <>
      <Categories handleHeaderChange={handleHeaderChange}/>
      <Products header={header}/>
    </>
  )
}

export default Main;