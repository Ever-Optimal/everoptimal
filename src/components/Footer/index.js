import React, { Fragment } from 'react'
import { Row } from 'antd'
import { withTranslation } from 'react-i18next'
import { Fade } from 'react-reveal'
import loadable from '@loadable/component'

import * as S from './styles'

const SvgIcon = loadable(() => import('../../common/SvgIcon'))
const Container = loadable(() => import('../../common/Container'))

const Footer = ({ t }) => (
  <Fragment>
    <Fade bottom>
      {/* <S.Footer>
          <Container>
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Large to='/'>{t('Tell us everything')}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding a project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href='mailto:hello@callumhyland.com'>
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Policy')}</S.Title>
                <S.Large to='/' left='true'>
                  {t('Application Security')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Software Principles')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left='true' to='/'>
                  {t('Support Center')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Customer Support')}
                </S.Large>
              </Col>
            </Row>
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t('ADDRESS')}</S.Language>
                <S.Para>23 Eagle House</S.Para>
                <S.Para>30 Eagle Wharf Road</S.Para>
                <S.Para>London, N1 7EH</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Company')}</S.Title>
                <S.Large left='true' to='/'>
                  {t('About')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Blog')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Press')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Careers & Culture')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor='select-lang'>{t('Language')}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id='select-lang'
                  >
                    <option value='en'>English</option>
                    <option value='es'>Español</option>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer> */}
      <S.Extra>
        <Container>
          {/*border='true'>*/}
          <Row type='flex' justify='space-between' align='middle' style={{ paddingTop: '3rem' }}>
            <S.NavLink to='/'>
              <S.LogoContainer>
                <SvgIcon src='logo.svg' aria-label='homepage' />
              </S.LogoContainer>
            </S.NavLink>
            <S.FooterContainer>
              <p style={{ color: 'grey', fontSize: '0.75rem' }}>
                Ever Optimal is registered in England and Wales as Ever Optimal Ltd (No. 13136852) 23 Eagle House, 30
                Eagle Wharf Road, London, N1 7EH © Ever Optimal 2021. All rights reserved.
              </p>
            </S.FooterContainer>
          </Row>
        </Container>
      </S.Extra>
    </Fade>
  </Fragment>
)

export default withTranslation()(Footer)
