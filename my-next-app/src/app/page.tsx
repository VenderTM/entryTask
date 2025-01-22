"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type Make = {
  MakeId: string;
  MakeName: string;
}

export default function Home() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    fetch("<https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json>")
      .then((response) => response.json())
      .then((data) => setMakes(data.Results));

      const currentYear = new Date().getFullYear();
      const yearArray = [];
      for(let year = 2015; year <= currentYear; year++) {
        yearArray.push(year);
      }
      setYears(yearArray);
  }, []);
const isButtonDisabled = !selectedMake || !selectedYear;

  return (
    <div className = "container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vechile Filter</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Vechile Make:</label>
        <select
         className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value = "">Select Make</option>
          {makes.map(make => (
            <option key={make.MakeId} value={make.MakeName}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Model Year</label>
        <select 
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}
            </option>
          ))}
        </select>
     </div>
     <Link
     href={isButtonDisabled ? '#' : `/result/${selectedMake}/${selectedYear}`}
     >
      <button
      className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isButtonDisabled}
      >
        Next
        </button>
     </Link>
    </div>
  );
}
