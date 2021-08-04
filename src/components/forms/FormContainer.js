import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { pageModesArray } from '@/config/globalVariables'

function FormContainer({ Component, item, setShowForm, pageMode }) {
  const { register, handleSubmit, setValue, control } = useForm()

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

FormContainer.propTypes = {
  Component: PropTypes.func,
  item: PropTypes.object,
  setShowForm: PropTypes.func,
  pageMode: PropTypes.oneOf(pageModesArray),
}

export default FormContainer
