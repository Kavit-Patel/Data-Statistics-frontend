"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IPieChart } from "../types/types";
import Loader from "./Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  data,
  loading,
}: {
  data: IPieChart[] | undefined;
  loading: boolean;
}) => {
  const chartData = {
    labels: data?.map((item) => item.category),
    datasets: [
      {
        data: data?.map((item) => item.count),
        backgroundColor: ["#2563EB", "#1E3A8A", "#6366F1", "#4F46E5"],
        borderColor: ["#FFFFFF"],
        borderWidth: 1,
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
      tooltip: {
        callbacks: {
          label: (context: { label: unknown; raw: unknown }) =>
            `${context.label}: ${context.raw} items`,
        },
      },
    },
  };

  return (
    <div className="h-[14rem] flex justify-center items-center">
      {loading && (
        <div className="w-screen md:w-full flex justify-center items-center">
          <Loader width={20} height={20} color={"green-500"} />
        </div>
      )}
      {!loading && data && <Pie data={chartData} options={options} />}
    </div>
  );
};

export default PieChart;
