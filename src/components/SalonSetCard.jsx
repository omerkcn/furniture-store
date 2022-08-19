import React from 'react'

const SalonSetCard = ( { SofaImage } ) =>
{
  return (
    <a className='product-card col-md-3 p-0'>
      <img className='product-image' src={ SofaImage } alt="" />
      <h3 className="sofa-title">Brown Sofa</h3>
      <h2 className='sofa-text'>$1500</h2>

      <button className='product-button btn btn-light d-block border-top rounded-0'>Review Product</button>
    </a>
  )
}

export default SalonSetCard