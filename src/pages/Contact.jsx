import React from 'react'
import Location from '../components/Location'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer';

const Contact = () =>
{
  return (
    <div className='contact-container'>
      <Location />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact