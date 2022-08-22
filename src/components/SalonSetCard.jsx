import React from 'react'

const SalonSetCard = ( { SofaImage, SofaName, SofaPrice } ) =>
{
  return (
    <div className='product-card p-0'>
      <img className='product-image' src={ SofaImage } alt="" />
      <h3 className="sofa-title">{ SofaName }</h3>
      <h2 className='sofa-text'>{ SofaPrice }</h2>
      <button className='product-button btn btn-light d-block  border-0 border-top p-2 rounded-0'>Review Product</button>
    </div>
  )
}

export default SalonSetCard