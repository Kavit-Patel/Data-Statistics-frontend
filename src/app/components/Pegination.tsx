"use client";
import React, { SetStateAction } from "react";

const Pegination = ({
  currentPage,
  lastPage,
  setLastPage,
  onPageChange,
}: {
  currentPage: number;
  lastPage: boolean;
  setLastPage: React.Dispatch<SetStateAction<boolean>>;
  onPageChange: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-auto flex justify-between items-center">
      <span className="text-gray-600 dark:text-gray-300">
        Page No. {currentPage}
      </span>
      <div className="flex gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            onPageChange(currentPage - 1);
            setLastPage(false);
          }}
          className="btn btn-primary"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="btn btn-primary"
          disabled={lastPage}
        >
          Next
        </button>
      </div>
      <span className="text-gray-600 dark:text-gray-300">Per Page {10}</span>
    </div>
  );
};

export default Pegination;
