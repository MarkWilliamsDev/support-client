import { useForm } from 'react-hook-form'

function FormContainer({ Component, item, setShowForm }) {
  const { register, handleSubmit } = useForm()

  return (
    <Component
      register={register}
      handleSubmit={handleSubmit}
      item={item}
      setShowForm={setShowForm}
    />
  )
}

export default FormContainer
