import React from 'react'
import ServiceLogo from '../images/support.png'
import RefundLogo from '../images/refund.png'
import ShippingLogo from '../images/delivery.png'


const Services = () =>
{
  return (
    <div className="container">
      <div className="row  mt-6  ">

        <div className="row mx-0">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img className="icon-service" src={ ServiceLogo } alt="" width={ 50 } color="#6667AB
" />
            <h3 className="service-title">Fast & Free Shipping</h3>
            <p className="service-text">Sign up to premier delivery USA for unlimited free shipping.</p>

          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img className='icon-refund' src={ RefundLogo } alt="" width={ 50 } />
            <h3 className="service-title">Hassle Free Returns</h3>
            <p className="service-text">Refund is available. In case of any problem you can easily refund your money</p>

          </div>

          <div className="col-md-3 d-flex flex-column align-items-center ">
            <img className="icon-shipping" src={ ShippingLogo } alt="" width={ 50 } />
            <h3 className="service-title">24 / 7 Supports</h3>
            <p className="service-text">Our customer service is available at any moment.</p>


          </div>

          <div className="col-md-3 d-flex flex-column align-items-center ">
            <img className="icon-shipping" src={ ShippingLogo } alt="" width={ 50 } />
            <h3 className="service-title">24 / 7 Supports</h3>
            <p className="service-text">Our customer service is available at any moment.</p>
          </div>
        </div>





      </div>
    </div>


  )
}

export default Services