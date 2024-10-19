import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

interface Options {
  responsive: boolean
  plugins: {
    legend: {
      position: string
    }
    title: {
      display: boolean
      text: string
    }
  }
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [45, 55, 65, 65, 60, 55, 150, 50, 40, 30, 20, 5],
        backgroundColor: "#3c7e7e99",
      },
    ],
  }

  const options: Options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Throughout The Year",
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
