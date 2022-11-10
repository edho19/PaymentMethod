import React from 'react'
import './receipt.css'
import { FaPlane, FaArrowRight, FaCalendarAlt, FaInfo } from 'react-icons/fa'


function receipt() {
  return (
    <div className='wrap-detail-booking'>
      <div className='head-fieldset'>
        <h3>CARD DETAILS</h3>
        <div className='next-text'>
          <span style={{color: "#009edb"}}>Details</span>
        </div>
      </div>
      <div className='list-detail'>
        <h5>LIST OF PASSENGER &#40;S&#41;</h5>
        <div class="content-split">
          <span>Mr. John Doe</span>
          <span>Adult</span>
        </div>
      </div>
      <div className='list-detail'>
        <h5>FLIGHT</h5>
        <div class="content-split">
          <span>
            <FaPlane/> Jakarta &#40;CGK&#41; <FaArrowRight/> Denpasar &#40;DPS&#41;
          </span>
          <span>
            <FaCalendarAlt/> 23 Nov 2020
          </span>
        </div>
      </div>
      <div className='list-detail total m-0 border-0'>
        <h5>PRICE</h5>
        <div class="content-split">
          <span>Total</span>
          <span>
            <span><FaInfo style={{color: "#c44a21"}}/></span> <b>IDR 2.238.000</b>
          </span>
        </div>
      </div>
    </div>
  )
}

export default receipt