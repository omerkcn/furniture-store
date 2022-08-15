import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




const ProductCard = () =>
{
  return (
    <Container>
      <Row id='products' style={ { marginTop: '12%', color: 'black' } }>
        <Col style={ { color: 'black' } }>
          <h1>Why we are best in our Town</h1>
          <p style={ { color: 'lightslategray' } }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium et, magni molestias itaque, ratione placeat, blanditiis illum aut unde

          </p>
        </Col>

        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <Card style={ { width: '18rem', color: 'black', border: 'none' } }>
            <Card.Img variant="top" src="https://www.anindo.com/wp-content/uploads/2022/04/13a0e85f-04e0-4e94-915e-b5baccc02712-a.png" />
            <Card.Body>
              <Card.Title className='text-center'>Chair<span className='d-block text-black'>$10</span></Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <Card style={ { width: '18rem', color: 'black', border: 'none' } }>
            <Card.Img variant="top" src="https://weddingunityglass.com/wp-content/uploads/2018/04/Mayan-Unity-Glass-Keepsake-Vase.png" />
            <Card.Body>
              <Card.Title className='text-center'>Vase <span className='d-block text-black'>$10</span></Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <Card style={ { width: '18rem', color: 'black', border: 'none' } }>
            <Card.Img style={ { height: '288px' } } variant="top" src="https://www.miliashop.com/190309-thickbox_default/viki-table-lamp.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Lamp <span className='d-block text-black'>$10</span></Card.Title>

            </Card.Body>
          </Card>
        </Col>



      </Row>
    </Container>


  )
}

export default ProductCard