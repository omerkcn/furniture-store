import React from 'react'
import Footer from '../components/Footer'
import SalonSetCard from '../components/SalonSetCard'
import MainSofa from '../images/Sofas/main_sofa.png'
import SofaSalon1 from '../images/Sofas/product-sofa-01.png'
import SofaSalon2 from '../images/Sofas/product-sofa-02.png'
import SofaSalon3 from '../images/Sofas/product-sofa-03.png'
import SofaSalon4 from '../images/Sofas/product-sofa-04.png'
import SofaSalon5 from '../images/Sofas/product-sofa-05.png'
import SofaSalon6 from '../images/Sofas/product-sofa-06.png'
import SofaSalon7 from '../images/Sofas/product-sofa-07.png'
import SofaSalon8 from '../images/Sofas/product-sofa-08.png';
import SofaSalon9 from '../images/Sofas/product-sofa-09.png'
import SofaSalon10 from '../images/Sofas/product-sofa-10.png'
import SofaSalon11 from '../images/Sofas/product-sofa-11.png'
import SofaSalon12 from '../images/Sofas/product-sofa-12.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const SalonSets = () =>
{
  return (
    <div className='container-fluid p-0' id='salon-container'>

      <div>
        <img className='header-image' src={ MainSofa } alt="" />
      </div>
      <div className="mx-7" >
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb-text" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Salon Sets
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            <div className="col-md-8">
              <h1 className='text-dark'>
                Salon Sets
              </h1>
              <div className="col-md-3">
                <hr style={ { height: '3px', width: '200px', borderWidth: '0', color: '#000000', backgroundColor: '#000000' } } />

              </div>
              <p>
                <div className="col-md-8 text-dark fw-semibold">
                  Furni brings modernity together with aesthetics and brings it to your home.
                  Check out the corner sets models and advantageous prices. With its many options, Ocasso transforms your
                  home completely into a source of new energy.
                </div>

              </p>
            </div>

          </div>

        </div>
      </div>


      <div className='product-container mx-7'>

        <div className='row mt-3' >
          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon1 } SofaName={ "Brown Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon2 } SofaName={ "Light Sofa" } SofaPrice={ "$1500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon3 } SofaName={ "Dark Brown Sofa" } SofaPrice={ "$1800" } />

          </div>


          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon4 } SofaName={ "Creative Sofa" } SofaPrice={ "$2500" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon5 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon6 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>


          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon7 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon8 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon9 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>



          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon10 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon11 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <SalonSetCard SofaImage={ SofaSalon12 } SofaName={ "Home Sofa" } SofaPrice={ "$1200" } />

          </div>

        </div>

      </div>




      <Footer />
    </div>
  )
}

export default SalonSets