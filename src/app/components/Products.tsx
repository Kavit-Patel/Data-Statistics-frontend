"use client";

import React from "react";
import { IProducts } from "../types/types";
import { ellipsify } from "@/utils/ellipsify";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Products = ({ products }: { products: IProducts[] | undefined }) => {
  return (
    <div className="w-full h-[20rem] overflow-auto shadow-md rounded-lg p-2 md:p-4 lg:p-10 bg-gray-800">
      <PerfectScrollbar>
        <table className="w-full bg-white dark:bg-gray-800 text-sm">
          <thead className="w-full">
            <tr className="text-left sticky w-full top-0 dark:bg-gray-900 z-20 border">
              <th className="border px-1 md:px-4 py-1 md:py-2 w-14">ID</th>
              <th className="md:relative border px-1 md:px-4 py-1 md:py-2 md:w-56 lg:w-96">
                Title
              </th>
              <th className="px-4 py-2 border w-44">Description</th>
              <th className="px-4 py-2 border w-28">Price</th>
              <th className="px-4 py-2 border w-28">Category</th>
              <th className="px-4 py-2 border w-28">Sold</th>
              <th className="px-4 py-2 border w-48">DateOfSale</th>
              <th className="px-4 py-2 border w-28">Image</th>
            </tr>
          </thead>
          <tbody className="w-full h-[10rem] ">
            {products?.map((product: IProducts) => (
              <tr key={product.id} className="relative w-full">
                <td className="border px-1 md:px-4 py-1 md:py-2 w-14">
                  {product.id}
                </td>
                <td className="md:relative border px-1 md:px-4 py-1 md:py-2 w-[22rem] md:w-56 lg:w-96">
                  <div className=" group">
                    <span className="md:hidden">
                      {ellipsify(product.title)}
                    </span>
                    <div className="absolute left-0 top-1 hidden md:block md:relative w-[22rem] md:w-44 lg:w-fit h-24 lg:h-fit overflow-y-auto rounded-md md:bg-inherit bg-gray-800 text-white text-sm p-2 group-hover:block">
                      <PerfectScrollbar>{product.title}</PerfectScrollbar>
                    </div>
                  </div>
                </td>
                <td className="md:relative border px-1 md:px-4 py-1 md:py-2 w-44">
                  <div className=" group">
                    <span>{ellipsify(product.description)}</span>
                    <div className="absolute left-0 top-1 hidden w-[22rem] md:w-96 h-16 overflow-y-auto rounded-md border border-gray-900 bg-gray-800 text-white text-sm p-2 group-hover:block">
                      <PerfectScrollbar>{product.description}</PerfectScrollbar>
                    </div>
                  </div>
                </td>
                <td className="border px-1 md:px-4 py-1 md:py-2 w-28">
                  ${product.price.toFixed(2)}
                </td>
                <td className="border px-1 md:px-4 py-1 md:py-2 w-28">
                  {product.category}
                </td>
                <td className="border px-1 md:px-4 py-1 md:py-2 w-28">
                  {product.sold ? "Sold" : "Available"}
                </td>
                <td className="border px-1 md:px-4 py-1 md:py-2 w-48">
                  {`${new Date(
                    product.dateOfSale
                  ).toLocaleDateString()}  ${new Date(
                    product.dateOfSale
                  ).toLocaleTimeString()}`}
                </td>
                <td className="border px-1 md:px-4 py-1 md:py-2 w-28">
                  <img
                    className="w-12 h-12 rounded-xl"
                    src={product.image}
                    alt="/public/noImage.png"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PerfectScrollbar>
    </div>
  );
};

export default Products;
