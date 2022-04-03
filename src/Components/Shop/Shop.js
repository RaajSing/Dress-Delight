import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner';
import './Shop.css'
import SingleProduct from './Single-Product';

export default function Shop() {

  // Spinner for Working...
  const [load, setLoad] = useState(false)

  const [products, setProducts] = useState([]) ;
  const [searchText, setSearchText] = useState('');

  const searchProductBtn = () => {
    const inputValue = document.getElementById("searchInput").value ;
    setSearchText(inputValue);
    document.getElementById("searchInput").value = "";
  }

  // Input er moddhe Enter button click kora hoyese..
  const HitEnterButton = (event) => {
    if(event.key=="Enter"){
      searchProductBtn();
    }
  }

  useEffect(() => {
    setLoad(true)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => {setProducts(data.meals)
      setLoad(false)
      })
  }, [searchText])

  


  return (
    <>
      {load ? <Spinner></Spinner> 
      : 
      <div className='shop'>
        <h2 className='shopTitle'>This is Shop Component</h2>
        <div className='searchParent'>
          <input onKeyUp={HitEnterButton} id='searchInput' className='searchBox' type="text" placeholder='search your products'/>
          <button onClick={searchProductBtn}>Search</button>
        </div>
        <div className='productContainer'>
          {
            products.map(sProduct => <SingleProduct product={sProduct} key={sProduct.idMeal}></SingleProduct>)
          }
        </div>
      </div>}
    </>
  )
}
