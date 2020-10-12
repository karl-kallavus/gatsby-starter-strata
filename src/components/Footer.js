import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/karl-kallavus" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/karlkallavus/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto:karl.kallavus@gmail.com?subject=Курс по WordPress" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; ИП Каллавус Карл Меэлисович</li>
        <li>ОГРНИП 320784700121688</li>
        <li>Упрощенная система налогообложения</li>
        <li>Эл. почта для связи: karl.kallavus@gmail.com</li>
      </ul>
    </div>
  </div>
)

export default Footer
