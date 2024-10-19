import React from "react"
import CustomInput from "../components/CustomInput"

const AddBrand = () => {
  return (
    <>
      <h3 className="mb-4">Add Brand</h3>
      <div className="">
        <form action="">
          <CustomInput
            type="text "
            classname="mb-4"
            id=""
            needed={true}
            placeholder="Enter Brand Name..."
          />
          <div className="d-flex justify-content-end">
            <button className="button">Add Brand</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBrand
