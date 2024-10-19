import React from "react"
import CustomInput from "../components/CustomInput"

const AddColor = () => {
  return (
    <>
      <h3 className="mb-4">Add Color</h3>
      <div className="">
        <form action="">
          <CustomInput
            type="text "
            classname="mb-4"
            id=""
            needed={true}
            placeholder="Enter Color..."
          />
          <div className="d-flex justify-content-end">
            <button className="button">Add Color</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddColor
