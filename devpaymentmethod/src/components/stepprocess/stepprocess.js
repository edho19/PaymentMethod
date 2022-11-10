import React from 'react'
import './stepprocess.css'
import {FaCheck} from 'react-icons/fa'


function stepprocess() {
  return (
    
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
  )
}

export default stepprocess