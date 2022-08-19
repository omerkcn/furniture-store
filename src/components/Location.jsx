import React from 'react'

const Location = () =>
{
  return (
    <div className="row  mx-0">

      <div className="col-lg-4 my-auto">
        <h1 className="text-uppercase mb-4 font-weight-bold contact-title">Contact Information</h1>
        <div className="col-md-8 mx-auto">
          <p className="contact-text"><i className="contact-icon fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p className="contact-text"><i className="contact-icon fas fa-envelope mr-3"></i> info@gmail.com</p>
          <p className="contact-text"><i className="contact-icon fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p className="contact-text"><i className="contact-icon fas fa-print mr-3"></i> + 01 234 567 89</p>
        </div>

      </div>
      <div className="col-lg-8 h-100 d-inline-block">
        <div className="map h-100">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              <a href="https://123movies-to.org">
              </a>
              <br />

            </div>
          </div>
        </div>
      </div>






    </div>


  )
}

export default Location