"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const Filters = ({
  onSearchChange,
  onMonthChange,
  currentSearch,
  currentMonth,
}: {
  onSearchChange: (value: string) => void;

  onMonthChange: (value: string | null) => void;

  currentSearch: string;
  currentMonth: string | null;
}) => {
  const [search, setSearch] = useState(currentSearch);
  const [month, setMonth] = useState<string | null>(currentMonth);
  const [debouncedSearch, setDebouncedSearch] = useState(currentSearch);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value || null;
    setMonth(selectedMonth);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      onSearchChange(debouncedSearch);
    }

    onMonthChange(month);
  }, [debouncedSearch, month, search, onMonthChange, onSearchChange]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [search]);

  return (
    <div className="flex justify-around gap-2">
      <input
        ref={inputRef}
        type="text"
        placeholder={"Search"}
        value={search}
        onChange={handleSearchChange}
        className="px-1.5 md:px-4 py-1 flex-1 md:flex-none w-6 md:w-44 bg-gray-800 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={month || ""}
        onChange={handleMonthChange}
        className="px-1.5 md:px-4 py-1 flex-1 md:flex-none w-6 md:w-44 border bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {months.map((m) => (
          <option key={m.value} value={m.value || ""}>
            {m.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
