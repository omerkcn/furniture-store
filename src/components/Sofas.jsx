import React from 'react'
import ImageCarousel from './ImageCarousel'
import Sofa1 from '../images/sofa1.png'
import Sofa2 from '../images/sofa2.png'
import Sofa3 from '../images/sofa3.png'
import Button from 'react-bootstrap/Button'


const Sofas = () =>
{
  return (
    <div className="row">
      <div className="col-md-4 text-black d-flex flex-column align-items-center justify-content-center">
        <h1 className="product-brand">Furni</h1>
        <h3 className='product-title'>Sitting Group</h3>
        <p className='product-text'>We are providing wide range of salon sets and you can use anywhere that you want </p>
        <Button className='rounded-pill fw-bold' variant='light'>Go to Lamps</Button>
      </div>
      <div className="col-md-8 rounded" >
        <ImageCarousel firstImage={ Sofa1 } secondImage={ Sofa2 } thirdImage={ Sofa3 } />
      </div>
    </div>

  )
}

export default Sofas