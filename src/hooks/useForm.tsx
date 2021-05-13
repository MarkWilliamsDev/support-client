import { FormEvent, useState } from 'react'

function useForm() {
  const [formValues, setFormValues] = useState({})

  const formChange = (e: FormEvent<HTMLInputElement>) => {
    e.persist()

    setFormValues((values) => ({ ...values, [e.target.name]: e.target.value }))
  }

  return [formChange, formValues] as const
}

export default useForm
