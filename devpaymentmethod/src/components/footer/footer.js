import React from 'react'
import './footer.css'


function footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
              &copy; 2020. PT Garuda Indonesia &#40;Persero&#41; Tbk. All right reserved.
          </div>
          <div className='col-md-6 text-md-end'>
            <a href="/"  style={{marginRight: "15px"}}>Privacy Policy</a> 
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer