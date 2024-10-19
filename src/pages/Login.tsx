import React from "react"
import CustomInput from "../components/CustomInput"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="Login-wrapper">
        <div
          className="py-5 d-flex justify-content-center align-items-center"
          style={{ background: "#ADD8E6", minHeight: "100vh" }}
        >
          <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center">Log in</h3>
            <p className="text-center">Log into your account to continue.</p>
            <form
              action=""
              className="Login-form"
              onSubmit={() => nav("/admin")}
            >
              <CustomInput
                type="email"
                placeholder="Email Address..."
                id="email"
                needed={true}
                classname="my-2"
              />
              <CustomInput
                type="password"
                placeholder="Password..."
                id="password"
                needed={true}
                classname="mt-2"
              />
              <div className="py-3 d-flex justify-content-end">
                <Link to="forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className="button w-100">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
