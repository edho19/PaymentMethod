import React from 'react'
import {FaLock} from 'react-icons/fa'


function ccpayment() {
  return (
    <form>
      <fieldset>
        <div className='head-fieldset'>
          <h3>CARD DETAILS</h3>
          <div className='next-text'>
            <FaLock/> Secure Server
          </div>
        </div>
        <div className='wrap-group-input'>
          <div className='mb-3 row wContent'>
            <div className='col-md-6'>
              <label className='form-label'>Email address *</label>
              <input type="text" class="form-control"  maxLength="16" minLength="16"></input>
            </div>
            <div className='col-md-6 contentGroup'>
              <img src="./images/cc-image.png" alt="ccimage" />
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-6'>
              <label className='form-label'>Expiration Date *</label>
              <input type="text" class="form-control" ></input>
            </div>
            <div className='col-md-6 contentGroup'>
            <label className='form-label'>CVV *</label>
              <input type="password" maxLength="3" class="form-control"  value="***"></input>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className='head-fieldset'>
          <h3>BILLING INFORMATION</h3>
        </div>
        <div className='wrap-group-input'>
          <div className='mb-3 row wContent'>
            <div className='col-md-6'>
              <label className='form-label'>Card Holder Name *</label>
              <input type="text" class="form-control" value="John Doe"></input>
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-6'>
              <label className='form-label'>Address *</label>
              <input type="text" class="form-control" value="Jl. Jend. Sudirman Kav. 10-11" readonly></input>
            </div>
            <div className='col-md-6 contentGroup'>
            <label className='form-label'>Country *</label>
              <select className='form-control' readonly>
                <option>Indonesia</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default ccpayment