import React from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io"
import BarChart from "../components/BarChart"
import { Table } from "antd"


const columns: any = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => (
      <a href="#jyd" style={{ textDecoration: "none", color: "black" }}>
        {text}
      </a>
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
]

const data: any = [
  {
    No: `#00298`,
    Status: "pending",
  },
]
for (let i = 0; i < 46; i++) {
  data.push({
    key: i + 1,
    name: "Mike Tyson",
    product: "hjvkjg,jhkgkg",
    status: `Lebanon, Abu Samra`,
  })
}

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <section className="dashboard-header-container d-flex justify-content-between aling-items-center mb-4">
          <div className="left-side">
            <h3 className="">Dashboard</h3>
          </div>
          <div className="right-side d-flex align-items-center">
            <h4 className="mb-0">kill yourself</h4>
          </div>
        </section>
        <section className="d-flex justify-content-between align-items-center gap-3 anouncement-container">
          <div
            className="
            d-flex 
            bg-white 
            p-3 
            rounded-3 
            justify-content-between 
            flex-grow-1 
            align-items-end 
          important-anouncement-card"
          >
            <div className="left-side">
              <p>Total sells</p>
              <h4>$3799.00</h4>
            </div>
            <div className="d-flex flex-column text-end right-side">
              <div className="mb-3">
                <BsThreeDotsVertical />
              </div>
              <div className="rate-increase d-flex justify-content-end gap-1 align-items-center">
                <IoMdTrendingUp />
                <h6 className="mb-1">34.7%</h6>
              </div>
              <p className="mb-0">Comapared To April 2069</p>
            </div>
          </div>
          <div
            className="
            d-flex 
            bg-white 
            p-3 
            rounded-3 
            justify-content-between 
            flex-grow-1 
            align-items-end 
          important-anouncement-card"
          >
            <div className="left-side">
              <p>Average order value</p>
              <h4>$272.98</h4>
            </div>
            <div className="d-flex flex-column text-end right-side">
              <div className="mb-3">
                <BsThreeDotsVertical />
              </div>
              <div className="rate-decrease d-flex justify-content-end gap-1 align-items-center">
                <IoMdTrendingDown />
                <h6 className="mb-1">12.0%</h6>
              </div>
              <p className="mb-0">Comapared To April 2069</p>
            </div>
          </div>
          <div
            className="
            d-flex 
            bg-white 
            p-3 
            rounded-3 
            justify-content-between 
            flex-grow-1 
            align-items-end 
          important-anouncement-card"
          >
            <div className="left-side">
              <p>Total orders</p>
              <h4>578</h4>
            </div>
            <div className="d-flex flex-column text-end right-side">
              <div className="mb-3">
                <BsThreeDotsVertical />
              </div>
              <div className="rate-increase d-flex justify-content-end gap-1 align-items-center">
                <IoMdTrendingUp />
                <h6 className="mb-1">27.4%</h6>
              </div>
              <p className="mb-0">Comapared To April 2069</p>
            </div>
          </div>
        </section>
        <section className="bar-chart-container  bg-white my-5">
          <BarChart />
        </section>
        <section className="table-container  bg-white my-5">
          <Table dataSource={data} columns={columns}/>
        </section>
      </div>
    </>
  )
}

export default Dashboard
