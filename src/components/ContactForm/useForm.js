import { useState, useEffect } from 'react'
import { notification } from 'antd'

const useForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Success',
      description: 'Your message has been sent!'
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(values))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setValues('')
      openNotificationWithIcon('success')
    }
  }, [errors])

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useForm
