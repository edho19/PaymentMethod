import React from 'react'
import {FaQuestionCircle, FaLock, FaInfoCircle} from 'react-icons/fa'


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
            <div className='col-md-4'>
              <label className='form-label'>Expiration Date *</label>
              <select class="form-select">
                <option selected>Month</option>
                <option value="jan">01</option>
                <option value="feb">02</option>
                <option value="mar">03</option>
                <option value="apr">04</option>
                <option value="may">05</option>
                <option value="jun">06</option>
                <option value="jul">07</option>
                <option value="aug">08</option>
                <option value="sep">09</option>
                <option value="oct">10</option>
                <option value="nov">11</option>
                <option value="dec">12</option>
              </select>
            </div>
            <div className='col-md-4'>
              <label className='form-label opacity-0'>Expiration Date *</label>
              <select class="form-select">
                <option selected>Years</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className='col-md-4'>
            <label className='form-label'>CVV *</label>
              <input type="password" maxLength="3" class="form-control"></input>
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
              <input type="text" class="form-control" value="John Doe" readonly='readonly' />
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-6'>
              <label className='form-label'>Address</label>
              <input type="text" class="form-control" value="Jl. Jend. Sudirman Kav. 10-11" readonly='readonly' />
            </div>
            <div className='col-md-6'>
            <label className='form-label'>Country</label>
              <select className='form-control' readonly='readonly'>
                <option>Indonesia</option>
              </select>
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-4'>
              <label className='form-label'>Province/State</label>
              <input type="text" class="form-control" value="DKI Jakarta" readonly='readonly' />
            </div>
            <div className='col-md-4'>
              <label className='form-label'>City</label>
              <input type="text" class="form-control" value="Jakarta" readonly='readonly' />
            </div>
            <div className='col-md-4'>
              <label className='form-label'>ZIP Code</label>
              <input type="text" class="form-control" value="10202" readonly='readonly' />
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-6'>
              <label className='form-label'>Email</label>
              <input type="email" class="form-control" value="example@email.com" readonly='readonly' />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Phone</label>
              <input type="text" class="form-control" value="0812 3456 7890" readonly='readonly' />
            </div>
          </div>
        </div>
      </fieldset>
      <div className='cc-optional row'>
        <div className='col-md-6'>
          <p>
            <small>Reddem Point</small>
            <i>
              <FaQuestionCircle/>
            </i>
          </p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="redeempoint" id="flexCheckDefault" checked />
            <label class="form-check-label" for="flexCheckDefault">
              I'd like to redeem points from this credit card
            </label>
          </div>
        </div>
        <div className='col-md-6'>
          <p>
            <small>Installment Plan</small>
            <i>
              <FaQuestionCircle/>
            </i>
          </p>
          <select class="form-select" readonly='readonly'>
            <option selected>No Installment</option>
            <option value="1">3 Months</option>
            <option value="2">6 Months</option>
            <option value="3">12 Months</option>
          </select>
        </div>
      </div>
      <div className='wrap-price-details'>
        <h3>PRICE DETAILS</h3>
        <ul>
          <li>
            <label>Air Transportation Charges</label>
            <span>
              <b>IDR </b> 2.167.000
            </span>
          </li>
          <li>
            <label>Baggage</label>
            <span style={{color: "#9b9696"}}>
              FREE
            </span>
          </li>
          <li>
            <label>Flight Insurance</label>
            <span>
              <b>IDR </b> 60.000
            </span>
          </li>
          <li>
            <label>Service Fee</label>
            <span>
              <b>IDR </b> 11.000
            </span>
          </li>
          <li>
            <label>Total Price</label>
            <span>
              <FaInfoCircle  style={{color: "#c44a21"}} />
              <b>IDR <span>2.238.000</span></b>
            </span>
          </li>
        </ul>
      </div>
      <div className='promo-code-modal'>
        <img className='img-responsive' src="./images/promo-code-box.png" alt="promocodebox" />
      </div>
      <div className='float-md-end mt-3'>
        <button class="btn btn-primary" type="submit">PAY NOW</button>
      </div>
    </form>
  )
}

export default ccpayment