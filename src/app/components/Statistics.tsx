"use client";
import React from "react";

const StatisticsCard = ({
  statistics,
}: {
  statistics:
    | { soldItems: number; totalSale: number; unsoldItems: number }
    | undefined;
}) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-2 md:p-4 lg:h-[13rem] max-w-md mx-auto flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-center border-b border-gray-600">
        Statistics Overview
      </h2>
      <div className="flex flex-col gap-2 w-72 md:w-80">
        <div className="bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-600 hover:scale-105 transition-all flex justify-around md:justify-between">
          <h3 className="text-lg font-medium">Total Sales</h3>
          <p className="text-xl md:text-xl font-bold">
            ${statistics?.totalSale.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-600 hover:scale-105 transition-all flex justify-around md:justify-between">
          <h3 className="text-lg font-medium">Sold Items</h3>
          <p className="text-xl md:text-xl font-bold">
            {statistics?.soldItems}
          </p>
        </div>

        <div className="bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-600 hover:scale-105 transition-all flex justify-around md:justify-between">
          <h3 className="text-lg font-medium">Unsold Items</h3>
          <p className="text-xl md:text-xl font-bold">
            {statistics?.unsoldItems}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
