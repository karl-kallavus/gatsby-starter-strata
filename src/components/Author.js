import React from 'react'
import styled from 'styled-components'
import ConfImage1 from '../assets/images/fulls/conf1.jpeg'
import ConfImage2 from '../assets/images/fulls/conf2.jpg'

const Text = styled.p({
  fontSize: '18px',
  lineHeight: 1.5,
})
const Image = styled.img({
  borderRadius: '4px',
  marginTop: '16px',
})
const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  '& > img': {
      maxWidth: '300px',
  }
})
const Author = () => {
  return (
    <>
      <Text>
        Меня зовут Карл, и я занимаюсь профессиональной разработкой сложных
        сайтов с 2008 года. Делаю надежные и производительные сайты, которые
        легко поддерживать в работе. Сейчас отвечаю за дизайн систему и
        библиотеку компонентов в Coingaming.io в Таллине. За время работы успел
        поработать на компании от Санкт-Петербурга и до Кембриджа. Выступал
        спикером на конференциях по веб разработке. Люблю путешествовать и
        увлекаюсь мобильной сьемкой.
      </Text>
      <Wrapper>
        <Image src={ConfImage2} height="auto" width="300px" />
        <Image src={ConfImage1} height="auto" width="300px" />
      </Wrapper>
    </>
  )
}

export default Author
