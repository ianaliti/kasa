import React from 'react'
import logo from '../../../src/assets/logo/logo-footer.png'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt="logo" className='logo-footer'/>
        <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  )
}
