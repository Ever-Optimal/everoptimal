import { useState, useEffect } from 'react'
import { notification } from 'antd'
import axios from 'axios'

const useForm = (validate) => {
  const [completed, setCompleted] = useState(false)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [shouldSubmit, setShouldSubmit] = useState(false)

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Success',
      description: 'Your message has been sent!'
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(values))

    const url = 'https://96veu62fu3.execute-api.eu-west-2.amazonaws.com/prod/email'

    if (Object.keys(values).length === 3) {
      axios
        .post(url, values)
        .then(({ status }) => {
          if (status === 200) {
            setShouldSubmit(true)
            setCompleted(true)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues('')
      openNotificationWithIcon('success')
    }
  }, [errors, shouldSubmit])

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
    errors,
    completed
  }
}

export default useForm
