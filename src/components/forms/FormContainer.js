import { useForm } from 'react-hook-form'

function FormContainer({ Component, item, setShowForm, pageMode }) {
  const { register, handleSubmit, setValue } = useForm()

  return (
    <Component
      register={register}
      handleSubmit={handleSubmit}
      item={item}
      setShowForm={setShowForm}
      setValue={setValue}
      pageMode={pageMode}
    />
  )
}

export default FormContainer
