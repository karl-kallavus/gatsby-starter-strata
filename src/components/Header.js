import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/portrait.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        Полный&nbsp;курс&nbsp;по&nbsp;<strong>WordPress</strong>
        <br />
        &nbsp;за&nbsp;<strong>12</strong>&nbsp;занятий
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
