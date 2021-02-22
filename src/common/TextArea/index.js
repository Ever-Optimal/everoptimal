import React from 'react'
import { withTranslation } from 'react-i18next'

import * as S from './styles'

const TextArea = ({ name, id, placeholder, onChange, t }) => (
  <S.Container>
    <label htmlFor={name}>{t(id)}</label>
    <S.TextArea spellCheck='false' placeholder={t(placeholder)} id={name} name={name} onChange={onChange} />
  </S.Container>
)

export default withTranslation()(TextArea)
