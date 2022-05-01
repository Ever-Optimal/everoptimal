import React from 'react'
import { Row, Col } from 'antd'
import loadable from '@loadable/component'
import { withTranslation } from 'react-i18next'

import * as S from './styles'

const Block = loadable(() => import('../Block'))
const Button = loadable(() => import('../../common/Button'))

const Contact = ({ title, content, id, t }) => {
  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type='flex' justify='space-between' align='middle'>
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={11} sm={24}>
            <Button onClick={() => (window.location = 'mailto:callum@everoptimal.com')}>Get in touch</Button>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  )
}

export default withTranslation()(Contact)
