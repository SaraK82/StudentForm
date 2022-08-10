import React from 'react'

function RadioInput({label, value: inputValue, onClick, options}) {
  return (
    <div className="mb-3 row">
    <label for="Fee" className='col-sm-2 col-form-label'>{label}</label>
    {options.map((item, index) => {
      const{label, value} = item;
    return (
    <div className='form-check col-sm-2' key={index}>
      <input
        className="form-check-input"
        type="radio"
        name="programs"
        value={value}
        onClick={onClick}
        checked={value === inputValue}
        />
      <label className='form-check-label' for="flexRadioDefault2">{label}</label>
    </div>
    );
  })}
    </div>
  )
}

export default RadioInput