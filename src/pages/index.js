import React from 'react'
import Helmet from 'react-helmet'

import Description from '../components/Description'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Author from '../components/Author'
import Why from '../components/Why'
import Inquery from '../components/Inquery'
import Form from '../components/Form'

const HomeIndex = () => {
  const siteTitle = 'Полный курс по WordPress'
  const siteDescription =
    'Сайты любой сложности, даже если вы никогда этим не занимались и ничего не знаете о программировании.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Cделайте сайт на WordPress за 12 занятий.</h2>
          </header>

          <Description />
        </section>

        <section id="two">
          <h2>Нас ждет 12 занятий по 75 минут</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="why">
          <h2>Почему WordPress?</h2>

          <Why />
        </section>

        <section id="author">
          <h2>Об авторе курса</h2>

          <Author />
        </section>

        <section id="request">
          <h2>Заказать курс</h2>
          <Inquery />

          <div className="row">
            <div className="8u 12u$(small)">
              <Form />
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Адрес</span>
                  </h3>
                  Suur-Patarei tn 13
                  <br />
                  Tallinn, 10415
                  <br />
                  Estonia
                </li>
                {/* <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li> */}
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Эл. почта для связи:</span>
                  </h3>
                  <a href="mailto:karl.kallavus@gmail.com">
                    karl.kallavus@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
