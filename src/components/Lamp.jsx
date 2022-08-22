import React from 'react'
import ImageCarousel from './ImageCarousel'
import Lamp1 from '../images/lamp1.png'
import Lamp2 from '../images/lamp2.png'
import Lamp3 from '../images/lamp3.png'
import Button from 'react-bootstrap/Button'

const Lamp = () =>
{
  return (
    <div className="row mt-6">
      <div className="col-md-8">
        <ImageCarousel firstImage={ Lamp1 } secondImage={ Lamp2 } thirdImage={ Lamp3 } />
      </div>
      <div className="col-md-4 text-black d-flex flex-column align-items-center justify-content-center">
        <h1 className="product-brand">Furni</h1>
        <h3 className='product-title'>Quality Lamps</h3>
        <p className='product-text'>We have both traditional and modern lamps.</p>
        <Button className='rounded-pill fw-bold' variant='light' href='/lamps'>Go to Lamps</Button>
      </div>
    </div>

  )
}

export default Lamp