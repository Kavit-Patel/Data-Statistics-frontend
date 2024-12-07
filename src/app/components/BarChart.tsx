"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { IBarChart } from "../types/types";
import Loader from "./Loader";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const months = [
  { value: null, label: "All Months" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const BarChart = ({
  data,
  month,
  loading,
}: {
  data: IBarChart[] | undefined;
  month: string | null;
  loading: boolean;
}) => {
  const chartData = {
    labels: data?.map((item) => item.range),
    datasets: [
      {
        label: `Number of Items : ${
          months.find((el) => el.value === month)?.label
        }`,
        data: data?.map((item) => item.count),
        backgroundColor: [
          "#2563EB",
          "#1E3A8A",
          "#6366F1",
          "#4F46E5",
          "#4338CA",
          "#3B82F6",
          "#1E40AF",
          "#3730A3",
          "#312E81",
          "#7C3AED",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[14rem] flex justify-center items-center">
      {loading && (
        <div className="w-screen md:w-full flex justify-center items-center">
          <Loader width={20} height={20} color={"green-500"} />
        </div>
      )}
      {!loading && data && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default BarChart;
