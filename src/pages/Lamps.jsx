import React from 'react'
import MainLamp from '../images/Lamps/main-lamp.png'
import { Breadcrumb } from 'react-bootstrap'
import Footer from '../components/Footer'
import SalonSetCard from '../components/SalonSetCard'

import ProductLamp4 from '../images/Lamps/product-lamp-4.png';
import ProductLamp5 from '../images/Lamps/product-lamp-5.png'
import ProductLamp6 from '../images/Lamps/product-lamp-6.png'
import ProductLamp7 from '../images/Lamps/product-lamp-7.png'
import ProductLamp8 from '../images/Lamps/product-lamp-8.png'
import ProductLamp9 from '../images/Lamps/product-lamp-9.png'
import ProductLamp10 from '../images/Lamps/product-lamp-10.png';
import ProductLamp11 from '../images/Lamps/product-lamp-11.png'
import ProductLamp12 from '../images/Lamps/product-lamp-12.png'



const Lamps = () =>
{
  return (
    <div className='container-fluid p-0' id='salon-container'>

      <div>
        <img className='header-image' src={ MainLamp } alt="" />
      </div>
      <div className="container-fluid mx-7" >
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb-text" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Lamps
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            <div className="col-md-8">
              <h1 className='text-dark'>
                Modern and Traditional Lamps
              </h1>
              <div className="col-md-3">
                <hr style={ { height: '3px', width: '200px', borderWidth: '0', color: '#000000', backgroundColor: '#000000' } } />

              </div>
              <p>
                <div className="col-sm-6 col-md-8 text-dark fw-semibold">
                  Furni brings modernity together with aesthetics and brings it to your home.
                  Check out the lamps and advantageous prices. With its many options, Furni transforms your
                  home completely into a source of new energy.
                </div>

              </p>
            </div>

          </div>

        </div>
      </div>

      <div className='product-container mb-5 mx-7'>

        <div className='row mt-3' >
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp4 } SofaName={ "Brown Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5 ">
            <SalonSetCard SofaImage={ ProductLamp5 } SofaName={ "Light Sofa" } SofaPrice={ "$1500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp6 } SofaName={ "Dark Brown Sofa" } SofaPrice={ "$1800" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp7 } SofaName={ "Creative Sofa" } SofaPrice={ "$2500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp8 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp9 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp10 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />


          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp11 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductLamp12 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

        </div>




      </div>

      <Footer />
    </div>
  )
}

export default Lamps