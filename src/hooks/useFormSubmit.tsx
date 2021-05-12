import { FormEvent } from 'react'

const useFormSubmit = (inputValues, formId: string, store) => {
  const { uiStore, supportTicketsStore } = store

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (inputValues.message === undefined) return

    uiStore.setIsPending()
    supportTicketsStore.addSubItem(inputValues)

    const formElement = document.getElementById(formId) as HTMLFormElement

    formElement.reset()
  }

  return formSubmitHandler
}

export default useFormSubmit
