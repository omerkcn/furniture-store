import React from 'react'
import SalonSetCard from '../components/SalonSetCard'
import MainVase from '../images/Vases/main-vase.png'
import ProductVase1 from '../images/Vases/product-vase-1.png'
import ProductVase2 from '../images/Vases/product-vase-2.png'
import ProductVase3 from '../images/Vases/product-vase-3.png'
import ProductVase4 from '../images/Vases/product-vase-4.png'
import ProductVase5 from '../images/Vases/product-vase-5.png'
import ProductVase6 from '../images/Vases/product-vase-6.png'
import ProductVase7 from '../images/Vases/product-vase-7.png'
import ProductVase8 from '../images/Vases/product-vase-8.png';
import ProductVase9 from '../images/Vases/product-vase-9.png'
import ProductVase10 from '../images/Vases/product-vase-10.png'
import ProductVase11 from '../images/Vases/product-vase-11.png'
import ProductVase12 from '../images/Vases/product-vase-12.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../components/Footer'

const Vases = () =>
{
  return (
    <div className='container-fluid p-0' id='salon-container'>

      <div>
        <img className='header-image' src={ MainVase } alt="" />
      </div>
      <div className="container-fluid mx-7" >
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb-text" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Vases
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            <div className="col-md-8">
              <h1 className='text-dark'>
                Old and New Vases
              </h1>
              <div className="col-md-3">
                <hr style={ { height: '3px', width: '200px', borderWidth: '0', color: '#000000', backgroundColor: '#000000' } } />

              </div>
              <p>
                <div className="col-sm-6 col-md-8 text-dark fw-semibold">
                  Furni brings modernity together with aesthetics and brings it to your home.
                  Check out the vases and advantageous prices. With its many options, Furni transforms your
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
            <SalonSetCard SofaImage={ ProductVase1 } SofaName={ "Brown Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5 ">
            <SalonSetCard SofaImage={ ProductVase2 } SofaName={ "Light Sofa" } SofaPrice={ "$1500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase3 } SofaName={ "Dark Brown Sofa" } SofaPrice={ "$1800" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase4 } SofaName={ "Creative Sofa" } SofaPrice={ "$2500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase5 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase6 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase7 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />


          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase8 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase9 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase10 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase11 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-5">
            <SalonSetCard SofaImage={ ProductVase12 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Vases