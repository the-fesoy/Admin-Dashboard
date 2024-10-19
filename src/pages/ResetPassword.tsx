import React from "react"
import CustomInput from "../components/CustomInput"

const ResetPassword = () => {
  return (
    <div className="ResetPassword-wrapper">
      <div
        className="py-5 d-flex justify-content-center align-items-center"
        style={{ background: "#ADD8E6", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center">Reset Password</h3>
          <p className="text-center">
            Please Enter A New password.
          </p>
          <form action="" className="Login-form">
            <CustomInput
              type="password"
              placeholder="New Password..."
              id="password"
              needed={true}
              classname="my-2"
            />
            <CustomInput
              type="password"
              placeholder="Confirm Password..."
              id="password"
              needed={true}
              classname="my-2"
            />
            <button type="submit" className="button w-100">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
