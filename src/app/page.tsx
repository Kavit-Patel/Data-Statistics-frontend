"use client";

import { errorMessage, useMasterData } from "@/apis/api";
import Products from "./components/Products";
import { useCallback, useState } from "react";
import Pegination from "./components/Pegination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Filters from "./components/Filter";
import Statistics from "./components/Statistics";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [month, setMonth] = useState<string | null>("3");
  const [search, setSearch] = useState<string>("");

  const memoizedSetSearch = useCallback(
    (value: string) => setSearch(value),
    []
  );
  const memoizedSetMonth = useCallback(
    (value: string | null) => setMonth(value),
    []
  );

  const { data, isLoading, error } = useMasterData(currentPage, month, search);

  if (
    !isLoading &&
    data?.products?.products?.length === 0 &&
    currentPage !== 1
  ) {
    setLastPage(true);
    setCurrentPage(currentPage - 1);
    toast("You are on the Last page !");
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ToastContainer />
      {error && (
        <div className="w-full h-96 flex justify-center items-center">
          {errorMessage(error)}
        </div>
      )}
      <div className="w-full min-h-screen flex justify-center p-1 md:p-6 ">
        <div className="w-[95%] flex flex-col gap-4 ">
          <h2 className="w-full text-center text-xl md:text-5xl">DashBoard</h2>
          <Filters
            onSearchChange={memoizedSetSearch}
            onMonthChange={memoizedSetMonth}
            currentSearch={search}
            currentMonth={month}
          />
          <Products products={data?.products.products} />

          <div className="flex  flex-col gap-6 md:gap-2 md:flex-row  md:flex-wrap md:justify-between items-center ">
            <div className="flex-1 h-[14rem]  flex justify-center items-center">
              <BarChart data={data?.barChart} month={month} />
            </div>
            <div className="flex-1 h-[14rem] flex justify-center items-center">
              <Statistics statistics={data?.statistics} />
            </div>
            <div className="flex-1 h-[14rem] flex justify-center items-center">
              <PieChart data={data?.pieChart} />
            </div>
          </div>
          <Pegination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            setLastPage={setLastPage}
            lastPage={lastPage}
          />
        </div>
      </div>
    </div>
  );
}
