import React from 'react'
import './header.css'
import {FaCheck} from 'react-icons/fa'


function header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <a className='logo' href={`${process.env.PUBLIC_URL}/Home`}>
              <img src="./images/garuda-indonesia-logo-1.svg" alt="logo" />
            </a>
            <ul className='menu-process'>
              <li>
                <span><FaCheck/></span>
                <span>select</span>
              </li>
              <li>
                <span><FaCheck/></span>
                <span>book</span>
              </li>
              <li>
                <span>3</span>
                <span>payment</span>
              </li>
            </ul>
            <div className='timer-wrapper text-center'>
              Complete Payment in <strong className='redColor' style={{color: "#c44a21"}}>00:01:19  <img src='./images/alarm_on-24px.svg' alt='alarm' /></strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header