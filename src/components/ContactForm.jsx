import React from 'react'
import Button from 'react-bootstrap/Button'

const ContactForm = () =>
{
  return (

    <form action="" className='w-50 mx-auto col-md-6 mt-5'>
      <h2 className='contact-title mb-4'>Contact Us</h2>
      <div className='form-group w-100 d-flex justify-content-evenly'>
        <div>
          <label className='form-labels' htmlFor="">Name</label>
          <input className='form-input' type="text" />
        </div>

        <div>
          <label className='form-labels' htmlFor="">Surname</label>
          <input className='form-input' type="text" />

        </div>

      </div>

      <div className='form-group w-100 d-flex justify-content-evenly'>
        <div>
          <label className='form-labels' htmlFor="">Email</label>
          <input className='form-input' type="text" />
        </div>

        <div>
          <label className='form-labels' htmlFor="">Phone Number</label>
          <input className='form-input' type="text" />
        </div>

      </div>
      <div className='text-center mb-5'>
        <Button variant='dark' className='rounded-pill px-4 mt-4 '>Submit</Button>

      </div>

    </form>




  )
}

export default ContactForm