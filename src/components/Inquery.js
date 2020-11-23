import React from 'react'
import styled from 'styled-components'

const Text = styled.p({
  fontSize: '18px',
  lineHeight: 1.5,
})

const Inquery = () => {
  return (
    <>
      <Text>
        Оставьте заявку или напишите на электронную почти и я обязательно с вами
        свяжусь в этот же день или на следующий рабочий день.
      </Text>
      <Text>Стоимость и условия обучения обсуждаются индивидуально. Заключается договор на обучение.</Text>
    </>
  )
}

export default Inquery
