import ImageCarousel from './ImageCarousel'
import Vase1 from '../images/vase1.png'
import Vase2 from '../images/vase2.png'
import Vase3 from '../images/vase3.png'
import Button from 'react-bootstrap/Button'


import React from 'react'

const Vase = () =>
{
  return (
    <div className="row mt-6">
      <div className="col-md-4 text-black d-flex flex-column align-items-center justify-content-center  order-last order-md-1">
        <h1 className="product-brand">Furni</h1>
        <h3 className='product-title'>Vase</h3>
        <p className='product-text'>We have exotic vases for your flowers  </p>
        <Button className='rounded-pill fw-bold' variant='light'>Go to Vases</Button>
      </div>
      <div className="col-md-8 rounded order-first order-md-2" >
        <ImageCarousel firstImage={ Vase1 } secondImage={ Vase2 } thirdImage={ Vase3 } />
      </div>
    </div>
  )
}

export default Vase