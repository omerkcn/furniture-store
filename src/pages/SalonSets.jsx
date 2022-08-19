import React from 'react'
import SalonSetCard from '../components/SalonSetCard'

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



const SalonSets = () =>
{
  return (
    <div className='mt-2 h-100 container-fluid '>
      <div className='row d-flex justify-content-evenly' >
        <SalonSetCard SofaImage={ SofaSalon1 } />
        <SalonSetCard SofaImage={ SofaSalon2 } />
        <SalonSetCard SofaImage={ SofaSalon3 } />

      </div>

      <div className='row justify-content-evenly mt-5'>
        <SalonSetCard SofaImage={ SofaSalon4 } />
        <SalonSetCard SofaImage={ SofaSalon5 } />
        <SalonSetCard SofaImage={ SofaSalon6 } />

      </div>
      <div className='row justify-content-evenly'>
        <SalonSetCard SofaImage={ SofaSalon7 } />
        <SalonSetCard SofaImage={ SofaSalon8 } />
        <SalonSetCard SofaImage={ SofaSalon9 } />

      </div>

      <div className='row justify-content-evenly'>
        <SalonSetCard SofaImage={ SofaSalon10 } />
        <SalonSetCard SofaImage={ SofaSalon11 } />
        <SalonSetCard SofaImage={ SofaSalon12 } />

      </div>



    </div>
  )
}

export default SalonSets