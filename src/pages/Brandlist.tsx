import React from "react"
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

const Brandlist = () => {
  return (
    <>
      <div className="">
        <h3 className="mb-4">Brands</h3>
        <div className="">
          <Table dataSource={data} columns={columns} />
        </div>
      </div>
    </>
  )
}

export default Brandlist
