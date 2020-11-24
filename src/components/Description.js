import React from 'react'
import styled from 'styled-components'

import IconExam from '../assets/icons/exam.svg'
import IconAtom from '../assets/icons/atom.svg'
import IconMedal from '../assets/icons/medal.svg'
import IconTrophy from '../assets/icons/trophy.svg'
import IconBulb from '../assets/icons/bulb.svg'
import IconGlobe from '../assets/icons/globe.svg'
import IconMortarboard from '../assets/icons/mortarboard.svg'

const IconWrapper = styled.div({
  minWidth: '50px',
  minHeight: '50px',
  marginRight: '16px',
})
const Text = styled.p({
  margin: 0,
  fontSize: '20px',
  lineHeight: 1.5,
})
const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
const Wrapper = styled.div({
  '& > * + *': {
    marginTop: '20px',
  },
})

const Items = [
  {
    icon: <IconTrophy style={{ width: '50px', height: '50px' }}/>,
    text: (
      <Text>
        Научитесь и сделайте сайт на WordPress, за который готовы платить
        компании.
      </Text>
    ),
  },
  {
    icon: <IconAtom style={{ width: '50px', height: '50px' }}/>,
    text: (
      <Text>
        Сайт визитка, блог или интернет-магазин, версия для мобильного телефона
        - 12 занятий достаточно, чтобы уверенно развивать проект любой сложности самостоятельно.
      </Text>
    ),
  },
  {
    icon: <IconGlobe style={{ width: '50px', height: '50px' }}/>,
    text: (
      <Text>Курс дистанционный. Это гибко. Обсуждаем расписание занятий.</Text>
    ),
  },
  {
    icon: <IconMortarboard style={{ width: '50px', height: '50px' }}/>,
    text: <Text>На курсе будем обсуждать ваш проект и учиться на нем.</Text>,
  },
  {
    icon: <IconMedal style={{ width: '50px', height: '50px' }}/>,
    text: (
      <Text>
        Цель курсов - получить конкретные результаты в плане знаний и умений.
      </Text>
    ),
  },
  {
    icon: <IconBulb style={{ width: '50px', height: '50px' }}/>,
    text: (
      <Text>
        Если вы ничего не знаете о программировании - не бойтесь, курс рассчитан
        для вас.
      </Text>
    ),
  },
  {
    icon: <IconExam style={{ width: '50px', height: '50px' }}/>,
    text: <Text>Возврат денег, если не довольны результатами.</Text>,
  },
]

const Description = () => {
  const items = Items.map((item) => {
    return (
      <Row>
        <IconWrapper>{item.icon}</IconWrapper>
        {item.text}
      </Row>
    )
  })
  return (
    <Wrapper>
      {items}
      <ul className="actions">
        <li>
          <a href="#request" className="button">
            Оставить заявку
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Description
