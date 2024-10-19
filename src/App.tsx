import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import InnerLayout from "./components/InnerLayout"
import Enquiries from "./pages/Enquiries"
import Bloglist from "./pages/Bloglist"
import BlogCatList from "./pages/BlogCatList"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Colorlist from "./pages/Colorlist"
import Catagorylist from "./pages/Catagorylist"
import Productlist from "./pages/Productlist"
import Brandlist from "./pages/Brandlist"
import AddBlog from "./pages/AddBlog"
import AddBlogCat from "./pages/AddBlogCat"
import AddColor from "./pages/AddColor"
import AddCatagory from "./pages/AddCatagory"
import AddBrand from "./pages/AddBrand"
import AddProduct from "./pages/AddProduct"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<InnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route path="/admin/blog-list" element={<Bloglist />} />
          <Route path="/admin/blog-catagory-list" element={<BlogCatList />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/list-colors" element={<Colorlist />} />
          <Route path="/admin/product-list" element={<Productlist />} />
          <Route path="/admin/list-brand" element={<Brandlist />} />
          <Route path="/admin/list-catagory" element={<Catagorylist />} />
          <Route path="/admin/blog" element={<AddBlog />} />
          <Route path="/admin/blog-catagory" element={<AddBlogCat />} />
          <Route path="/admin/color" element={<AddColor />} />
          <Route path="/admin/catagory" element={<AddCatagory />} />
          <Route path="/admin/brand" element={<AddBrand />} />
          <Route path="/admin/product" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
