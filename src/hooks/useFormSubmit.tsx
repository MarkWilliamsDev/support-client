const useFormSubmit = (inputValues, formId: string, store) => {
  const { uiStore, supportTicketsStore } = store

  const formSubmitHandler = () => {
    uiStore.setIsPending()
    supportTicketsStore.addSubItem(inputValues)

    const formElement = document.getElementById(formId) as HTMLFormElement

    formElement.reset()
  }

  return formSubmitHandler
}

export default useFormSubmit
