import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';
import './ProductDetail.css'

export default function ProductDetail() {

  // Spinner Working Here....
  const [loading, setLoading] = useState(false);

  const [detail, setDetail] = useState([])
  const params = useParams();
  useEffect(() => {
    setLoading(true) // work for spinner
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`)
    .then(res => res.json(res))
    .then(data => {setDetail(data.meals)
    setLoading(false) // work for spinner
    } )
    
  }, [])


  // Destructuring Here.....
  const array1 = detail[0]
  const {idMeal, strCategory, strArea, strMealThumb} = array1 || {} ;

  // Details Close Here....
  const navigate = useNavigate();
  const closeDetail = () => {
    navigate("/shop")
  }

  return (
      <>
      
    {loading ? <Spinner/> : 

    <div className='detailContainer'>
      <h2>Product Details</h2>
      <div className='detail'>
        <div className='image'>
          <img src={strMealThumb}/>
        </div>
        <h3>{strCategory}</h3>
        <p>{strArea}</p>
        <button onClick={closeDetail} className='closeBtn'>Close</button>
        <Link to='/shop'>Close</Link>
      </div>
    </div>}
      
      </>
  )
}
