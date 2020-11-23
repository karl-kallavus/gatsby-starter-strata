import React from 'react'
import Helmet from 'react-helmet'

import Description from '../components/Description'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Author from '../components/Author'
import Why from '../components/Why'
import Inquery from '../components/Inquery'

const HomeIndex = () => {
  const siteTitle = 'Полный курс по WordPress'
  const siteDescription =
    'Сайты любой сложности, даже если вы никогда этим не занимались и ничего не знаете о программировании.'

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        console.log({ status: 'SUCCESS' })
      } else {
        console.log({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Cделайте&nbsp;сайт&nbsp;на&nbsp;WordPress&nbsp;
              за&nbsp;12&nbsp;занятий.
            </h2>
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

        <section id="three">
          <h2>Заказать курс</h2>
          <Inquery />

          <div className="row">
            <div className="8u 12u$(small)">
              <form
                method="post"
                action="https://formspree.io/f/xbjpglag"
                onSubmit={submitForm}
              >
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="_replyto"
                      id="name"
                      placeholder="Имя"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Эл. почта"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Интересует курс по WordPress..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Оставить заявку" />
                  </li>
                </ul>
              </form>
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
