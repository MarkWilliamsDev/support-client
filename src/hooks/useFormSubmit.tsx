import { FormEvent } from 'react'

const useFormSubmit = (inputValues, formId: string, store) => {
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault()

    store.setIsPending()
    store.addSubItem(inputValues)

    const formElement = document.getElementById(formId) as HTMLFormElement

    formElement.reset()
  }

  return formSubmitHandler
}

export default useFormSubmit
