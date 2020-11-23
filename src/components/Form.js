import React from 'react'

const FORMSPARK_ACTION_URL = 'https://submit-form.com/QfaxmmSU'

function HomePage() {
  return (
    <form method="POST" action={FORMSPARK_ACTION_URL} target="">
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  )
}

const Form = () => (
  <form
    method="post"
    action={FORMSPARK_ACTION_URL}
    target="_self"
  >
    <div className="row uniform 50%">
      <div className="6u 12u$(xsmall)">
        <input type="text" name="name" id="name" placeholder="Имя" />
      </div>
      <div className="6u 12u$(xsmall)">
        <input type="email" name="email" id="email" placeholder="Эл. почта" />
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
)

export default Form;