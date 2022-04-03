import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Single-Product.css'

export default function SingleProduct({product}) {

  const {strMealThumb, strArea, strCategory, idMeal} = product ;

  const navigate = useNavigate();
  const seeDetails = () => {
    navigate(`/product-details/${idMeal}`)
  }
    
  return (
    <div className='product'>
        <div className='image'>
            <img src={strMealThumb}/>
        </div>
        <div className='productInfo'>
            <h3>{strCategory}</h3>
            <p>{strArea}</p>
            <button onClick={seeDetails}>Details</button>
        </div>
    </div>
  )
}
