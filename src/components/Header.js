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
        Полный курс по <strong>WordPress</strong> &nbsp;
        <br />
        за <strong>12</strong> занятий.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
