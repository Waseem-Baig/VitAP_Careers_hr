import Link from "next/link";
import React, { useState } from "react";

const applications = [
  {
    userID: "USR001",
    applications: 12,
  },
  {
    userID: "USR002",
    applications: 8,
  },
  {
    userID: "USR003",
    applications: 15,
  },
  {
    userID: "USR004",
    applications: 5,
  },
  {
    userID: "USR005",
    applications: 20,
  },
  {
    userID: "USR005",
    applications: 20,
  },
  {
    userID: "USR005",
    applications: 20,
  },
];
const ViewApplicationMobile = () => {
  const [data, setData] = useState(applications);

  return (
    <div className="flex flex-col bg-greyscale-50 w-[100%] h-auto p-[24px] gap-4">
      <div className="bg-white w-[100%] h-auto flex flex-col p-[16px] gap-4">
        <label className="text-[12px] text-[#656565]">Job Id:</label>
        <label className="text-[12px] text-[#656565]">Job Profile:</label>
        <label className="text-[12px] text-[#656565]">Department:</label>
        <label className="text-[12px] text-[#656565]">Role:</label>
      </div>
      <div className="flex flex-col gap-6 bg-white p-[12px] justify-start items-start">
        <p className="text-black font-[600] w-[100%] text-[16px]">
          Current Jobs
        </p>
        <input
          type="date"
          className="border border-gray-300 p-2 rounded text-[14px] w-[100%]"
        />
        <div className="flex items-center border border-gray-300 rounded p-2 w-[100%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mr-2"
          >
            <path
              d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z"
              fill="#111827"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none flex-1 text-gray-700 placeholder-gray-400"
          />
        </div>
        <button className="p-[11.5px_22px] bg-[#650010] text-[12px] w-[60%] text-white font-montserrat">
          Export to Excel
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-[600px] border-collapse border border-gray-300">
          <thead className="bg-[#F5F5F5]">
            <tr>
              {["Sl.No", "User ID", "Applications"].map((header, index) => (
                <th
                  key={index}
                  className="p-4 text-left text-[10px] font-montserrat text-[#000] font-bold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="border border-b-[#F1F2F4]">
                <td className="p-4 text-[10px] font-montserrat">{index + 1}</td>
                <td className="p-4 text-[10px] font-montserrat">
                  {user.userID}
                </td>
                <td className="p-4 text-[10px] font-montserrat">
                  <div className="flex flex-col gap-2">
                    <select className="text-[#4A4A4A] bg-[#E9E9E9] px-3 py-1 text-center w-[50%] border border-gray-300">
                      <option value="" defaultValue="Select">
                        Select
                      </option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <Link
                      href="#"
                      className="text-[#2E9F68] bg-[#E7F7EF] px-3 py-1 text-center w-[50%]"
                    >
                      View Application
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplicationMobile;
