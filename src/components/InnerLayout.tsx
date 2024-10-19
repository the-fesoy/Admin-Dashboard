import React, { useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

import { CiCircleList } from "react-icons/ci"

import { IoMdNotifications } from "react-icons/io"
import { ImBlog, ImExit } from "react-icons/im"
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineBgColors,
} from "react-icons/ai"

import { SiBrandfolder } from "react-icons/si"
import { FaUsers, FaBloggerB, FaQuestionCircle, FaList } from "react-icons/fa"
import { RiShapesLine } from "react-icons/ri"
import { Button, Layout, Menu, theme } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { PiUserCircle } from "react-icons/pi"
import { MdPassword } from "react-icons/md"
const { Header, Sider, Content } = Layout

const InnerLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const nav = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-6 text-center py-3 mb-0">
            <span className="lg-logo">AETHERIUM</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              console.log("kill yourslef")
            } else {
              nav(key)
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-5" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FaUsers className="fs-5" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <FaList className="fs-5" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "catagory",
                  icon: <RiShapesLine className="fs-5" />,
                  label: "Catagory",
                },
                {
                  key: "list-catagory",
                  icon: <RiShapesLine className="fs-5" />,
                  label: "Catagory List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color",
                },
                {
                  key: "list-colors",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <CiCircleList className="fs-5" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-5" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-5" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-5" />,
                  label: "Blog List",
                },
                {
                  key: "blog-catagory",
                  icon: <ImBlog className="fs-5" />,
                  label: "Add Blog Catagory",
                },
                {
                  key: "blog-catagory-list",
                  icon: <FaBloggerB className="fs-5" />,
                  label: "Blog Catagory List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaQuestionCircle className="fs-5" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className=""></div>
            <div className="d-flex gap-3 align-items-center">
              <div className="profile-notification-container position-relative">
                <IoMdNotifications className="fs-3 " />
                <span className="badge bg-danger rounded-circle position-absolute">
                  9
                </span>
              </div>
              <div className="profile-image-container">
                <img
                  src="/images/photoVeryProfessional.jfif"
                  className=""
                  alt=""
                />
              </div>

              <div className="dropdown">
                <div className="profile-description-container">
                  <h5>Yousef Mallok</h5>
                  <p>yusufmalok77@gmail.com</p>
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to="idk"
                    >
                      <PiUserCircle />
                      <span>View Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="idk">
                      <MdPassword />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="idk" className="text-danger">
                    <ImExit />
                      <span>Log out</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default InnerLayout
