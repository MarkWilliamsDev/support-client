import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function SelectInput({ onChange, options, currentOption }) {
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    setSelectedOption(currentOption)
  }, [currentOption])

  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor="statusOptionSelect">
        {'Status:'}
      </label>
      <select
        className="form-select"
        id="statusOptionSelect"
        value={selectedOption}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  currentOption: PropTypes.string,
}

export default SelectInput
