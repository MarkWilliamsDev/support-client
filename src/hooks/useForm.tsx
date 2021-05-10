import { ChangeEvent, useState } from 'react'

function useForm() {
  const [formValues, setFormValues] = useState({})

  const formChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist()

    const { name, value } = e.target

    setFormValues((values) => ({ ...values, [name]: value }))
  }

  return [formChangeHandler, formValues] as const
}

export default useForm
