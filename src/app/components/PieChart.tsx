"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IPieChart } from "../types/types";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: IPieChart[] | undefined }) => {
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

  return data && <Pie data={chartData} options={options} />;
};

export default PieChart;
