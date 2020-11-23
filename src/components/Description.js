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
})
const Text = styled.p({
  margin: 0,
  fontSize: '22px',
  lineHeight: 1.5,
})
const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
})
const Wrapper = styled.div({
  '& > * + *': {
    marginTop: '20px',
  },
})

const Items = [
  {
    icon: <IconTrophy />,
    text: (
      <Text>
        Научитесь и сделаете сайт на WordPress, за который готовы платить
        компании.
      </Text>
    ),
  },
  {
    icon: <IconAtom />,
    text: (
      <Text>
        Сайт визитка, блог или интернет-магазин, версия для мобильного телефона
        - 12 занятий достаточно, чтобы уверенно развивать проект самостоятельно.
      </Text>
    ),
  },
  {
    icon: <IconGlobe />,
    text: (
      <Text>Курс дистанционный. Это гибко. Обсуждаем расписание занятий.</Text>
    ),
  },
  {
    icon: <IconMortarboard />,
    text: <Text>На курсе будем обсуждать и учиться на вашем проекте.</Text>,
  },
  {
    icon: <IconMedal />,
    text: (
      <Text>
        Цель курсов - получить конкретные результаты в плане знаний и умений.
      </Text>
    ),
  },
  {
    icon: <IconBulb />,
    text: (
      <Text>
        Если вы ничего не знаете о программировании - не бойтесь, курс рассчитан
        для вас.
      </Text>
    ),
  },
  {
    icon: <IconExam />,
    text: <Text>Возврат денег, если что-то не так.</Text>,
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
          <a href="#" className="button">
            Оставить заявку
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Description
