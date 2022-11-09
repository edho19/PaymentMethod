import React from 'react'
import CrediCard from "./ccpayment"
import Receipt from "../receipt/receipt"

import './form.css'
import {
  Nav,
  NavUl,
  NavLi
} from './NavbarElements'


function formpayment() {
  return (
    <section className='wrap-payment'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 mt-5'>
              <div className='menu-wrap'>
                <Nav className='menu-linkpayment'>
                  <NavUl>
                    <NavLi className='active'>
                      <a href="/">Credit/Debit Card</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">LinkAja</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">KlikBCA</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">e-Pay BRI</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">CIMB Clicks</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">LinkAja</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">GoPay</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">ATM</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">BNI Mobile</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">ShoopePay</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">Bank Transfer</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">Alfamart</a>
                    </NavLi>
                    <NavLi>
                      <a href="/">Indomaret</a>
                    </NavLi>
                  </NavUl>
                </Nav>
              </div>
              <div className='wrap-form-payment'>
                <CrediCard />
              </div>
            </div>
            <div className='col-md-3 mt-5'>
              <Receipt />
            </div>
          </div>
        </div>
      </section>
  )
}

export default formpayment