import React, { useState } from "react"
import CustomInput from "../components/CustomInput"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { InboxOutlined } from "@ant-design/icons"
import { message, Upload } from "antd"

const { Dragger } = Upload
const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info: any) {
    const { status } = info.file
    if (status !== "uploading") {
      console.log(info.file, info.fileList)
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files)
  },
}

const AddBlog = () => {
  const [desc, setDesc] = useState<string>()
  const handleDesc = (e: any) => {
    setDesc(e)
  }
  return (
    <>
      <div className="">
        <h3 className="mb-4">Add Blog</h3>
        <div className="">
          <form action="" id="BlogAdd">
            <div className="my-3">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>

            <CustomInput
              type="text"
              placeholder="Enter Blog title..."
              needed={true}
              classname=""
              id=""
            />
            <select name="" className="form-control py-3 my-3" id="">
              <option value="">Select Blog Catagory</option>
            </select>
            <ReactQuill
              className="my-3"
              theme="snow"
              value={desc}
              placeholder="Enter Description"
              onChange={evt => {
                handleDesc(evt)
              }}
            />
            <div className="d-flex justify-content-end">
              <button className="button" type="submit">
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBlog
