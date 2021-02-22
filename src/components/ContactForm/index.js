import React, { useState } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import loadable from '@loadable/component'
import { withTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { notification } from 'antd'

import * as S from './styles'

const Block = loadable(() => import('../Block'))
const Input = loadable(() => import('../../common/Input'))
const Button = loadable(() => import('../../common/Button'))
const TextArea = loadable(() => import('../../common/TextArea'))

const ErrorMessage = styled.p`
  color: #e83f36;
  display: block;
  height: 18px;
  margin: 2px 0;
  font-size: 12px;
`

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').max(500),
  email: Yup.string().email().required('Required').max(10000),
  message: Yup.string().required('Required')
})

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Success',
    description: 'Your message has been sent!'
  })
}

const Contact = ({ title, content, id, t }) => {
  const [completed, setCompleted] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      const url = 'https://96veu62fu3.execute-api.eu-west-2.amazonaws.com/default/email'
      const { status } = await axios.post(url, values)
      if (status === 200) {
        setCompleted(true)
        openNotificationWithIcon('success')
      }
    },
    validationSchema
  })

  const { handleSubmit, errors, touched, handleBlur, handleChange, values, isSubmitting } = formik

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type='flex' justify='space-between' align='middle'>
          {completed ? (
            <Col lg={24} md={24} sm={24}>
              <Block padding={true} title={'Thanks!'} content={"We'll be in touch shortly"} />
            </Col>
          ) : (
            <>
              <Col lg={12} md={11} sm={24}>
                <Block padding={true} title={title} content={content} />
              </Col>
              <Col lg={12} md={12} sm={24}>
                <S.FormGroup autoComplete='off' onSubmit={handleSubmit}>
                  <Col span={24}>
                    <Input
                      required
                      type='text'
                      name='name'
                      id='Name'
                      placeholder='Your name'
                      value={values.name || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage>{errors && touched && errors.title && touched.title && errors.title}</ErrorMessage>
                  </Col>
                  <Col span={24}>
                    <Input
                      type='text'
                      name='email'
                      id='Email'
                      placeholder='Your email address'
                      value={values.email || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage>{errors && touched && errors.email && touched.email && errors.email}</ErrorMessage>
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type='textarea'
                      placeholder='Your message'
                      name='message'
                      id='Message'
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage>
                      {errors && touched && errors.message && touched.message && errors.message}
                    </ErrorMessage>
                  </Col>
                  <S.ButtonContainer>
                    <Button name='submit' type='submit' disabled={isSubmitting}>
                      {t('Submit')}
                    </Button>
                  </S.ButtonContainer>
                </S.FormGroup>
              </Col>
            </>
          )}
        </Row>
      </S.Contact>
    </S.ContactContainer>
  )
}

export default withTranslation()(Contact)
