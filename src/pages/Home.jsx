import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductCard from '../components/ProductCard';
import Services from '../components/Services';
import Lamp from '../components/Lamp';
import OurProducts from '../components/OurProducts';
import Footer from "../components/Footer";




const Home = () =>
{
  return (
    <>

      <div className='landing d-flex flex-column justify-content-start align-items-center pt-2'>
        <Container>
          <Row >
            <Col xs={ 12 } md={ 4 }>
              <h1 id='landing-title'>Furniture that everyone loves</h1>
              <p id='landing-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sint quia dolore ex laudantium,
                hic exercitationem repellendus. riatur?</p>
              <div>
                <Button className='rounded-pill me-3' variant='dark'>Buy Now</Button>
                <Button className='rounded-pill' variant='outline-light'>Explore</Button>
              </div>
            </Col>
          </Row>
          <div>
            <img className='responsive-furniture' src="https://www.freepnglogos.com/uploads/furniture-png/furniture-how-share-tiny-apartment-with-your-significant-other-22.png" alt="" />

          </div>
        </Container>

      </div >

      <ProductCard />
      <Services />
      <OurProducts />
      <Footer />

    </>


  )
}

export default Home