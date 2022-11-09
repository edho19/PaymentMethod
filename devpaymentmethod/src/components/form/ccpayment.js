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
      </fieldset>
    </form>
  )
}

export default ccpayment