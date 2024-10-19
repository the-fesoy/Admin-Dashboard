import React from "react"
import CustomInput from "../components/CustomInput"

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword-wrapper">
      <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#ADD8E6", minHeight : "100vh" }}>
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center">Forgot Password</h3>
          <p className="text-center">Please Enter Your Registered Email To Get reset password.</p>
          <form action="" className="Login-form">
            <CustomInput
              type="email"
              placeholder="Email Address..."
              id="email"
              needed={true}
              classname="my-2"
            />
            <button type="submit" className="button w-100" >Send Link</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
