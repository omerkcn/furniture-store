import React from 'react'
import Lamp from './Lamp'
import Sofas from './Sofas'
import Vase from './Vase'

const OurProducts = () =>
{
  return (
    <div className='bg-dark mt-6 p-4'>
      <h1 className="text-center mb-5">Our Products</h1>
      <Sofas />

      <Lamp />
      <Vase />
    </div>
  )
}

export default OurProducts