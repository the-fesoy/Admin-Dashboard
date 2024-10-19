import React from "react"

interface Props {
  type: string
  placeholder: string
  classname: string
  id: string
  needed: boolean
}

const CustomInput = (props: Props) => {
  const { type, placeholder, classname, needed, id } = props
  return (
    <>
      <div className="Input-wrapper">
        <div className="form-floating">
          <input
            min={0}
            type={type}
            className={`form-control ${classname || " "}`}
            id={`floatingInput ${id || " "}`}
            placeholder={placeholder}
            required={needed}
          />
          <label htmlFor={placeholder}>{placeholder}</label>
        </div>
      </div>
    </>
  )
}

export default CustomInput
