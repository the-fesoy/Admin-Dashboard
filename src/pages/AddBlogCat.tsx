import React from "react"
import CustomInput from "../components/CustomInput"

const AddBlogCat = () => {
  return (
    <>
      <h3 className="mb-4">Add Blog Catagory</h3>
      <div className="">
        <form action="">
          <CustomInput
            type="text "
            classname="mb-4"
            id=""
            needed={true}
            placeholder="Enter Blog Catagory Name..."
          />
          <div className="d-flex justify-content-end">
            <button className="button">Add Blog Catagory</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBlogCat
