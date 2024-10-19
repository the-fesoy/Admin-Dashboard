import React from "react"
import CustomInput from "../components/CustomInput"

const AddCatagory = () => {
  return (
    <>
      <h3 className="mb-4">Add Catagory</h3>
      <div className="">
        <form action="">
          <CustomInput
            type="text "
            classname="mb-4"
            id=""
            needed={true}
            placeholder="Enter Catagory..."
          />
          <div className="d-flex justify-content-end">
            <button className="button">Add Catagory</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCatagory
