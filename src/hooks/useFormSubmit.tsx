import axios from 'axios'
import { FormEvent } from 'react'

function useFormSubmit(
  inputValues: {},
  callback: (res: {}) => void,
  formId: string
) {
  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()
    const res = await axios.put('/api/support/tickets', {
      ...inputValues,
    })

    const formElement = document.getElementById(formId) as HTMLFormElement

    formElement.reset()

    callback(res.data)
  }

  return formSubmitHandler
}

export default useFormSubmit
