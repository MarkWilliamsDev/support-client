import { useForm } from 'react-hook-form'

function FormContainer({ Component, item, setShowForm, pageMode }) {
  const { register, handleSubmit, setValue, control, watch } = useForm()
  console.log(watch())

  return (
    <Component
      register={register}
      handleSubmit={handleSubmit}
      item={item}
      setShowForm={setShowForm}
      setValue={setValue}
      pageMode={pageMode}
      control={control}
    />
  )
}

export default FormContainer
