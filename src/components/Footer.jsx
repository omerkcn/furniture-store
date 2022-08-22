import React from 'react'

const Footer = () =>
{
  return (
    <>

      <footer
        className="text-center text-lg-start text-white "
        style={ { backgroundColor: '#6667AB' } }
      >

        <div className="container p-4 pb-0">

          <section className="">

            <div className="row">

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Furni
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Onde m optio ipsum voluptatibus sit possimus architecto, tempora accusamus?

                </p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white" href='/salonsets'>Salon Sets</a>
                </p>
                <p>
                  <a className="text-white" href='/lamps'>Lamps</a>
                </p>
                <p>
                  <a className="text-white" href='/vases'>Vases</a>
                </p>
                <p>
                  <a className="text-white" href='/chairs'>Chairs</a>
                </p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white" href=''>Your Account</a>
                </p>
                <p>
                  <a className="text-white" href=''>Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white" href=''>Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white" href=''>Help</a>
                </p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>

            </div>

          </section>

          <hr className="my-1" />

          <section className="p-3 pt-0 text-center">
            This Website created by
            <a className="text-black fw-bold ms-2" href="https://www.linkedin.com/in/omer-akcan-74064b21b/"
            >Omer Akcan</a
            >


          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer