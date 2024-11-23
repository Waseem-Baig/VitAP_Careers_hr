import { useState } from "react";
import JobEntry from "../job-entry-desktop";

const jobData = [
  {
    id: "123",
    profile: "Software Engineer",
    department: "Computer Science",
    role: "Backend Developer",
  },
  {
    id: "124",
    profile: "Data Scientist",
    department: "Analytics",
    role: "ML Engineer",
  },
];

const CurrentMainBarDesktop = () => {
  const [data, setData] = useState(jobData);
  return (
    <div className="w-[80vw] overflow-x-scroll overflow-y-scroll h-[90vh] p-[0px_24px] flex flex-col justify-start items-center bg-greyscale-50">
      <div className="p-[24px] w-[100%] h-auto flex flex-col items-center justify-start gap-7 bg-white">
        <div className="w-[100%] flex items-center">
          <p className="font-montserrat text-[24px] font-bold">Current Jobs</p>
        </div>

        {/* Table Section */}
        <table className="w-[100%] border-collapse border border-gray-300 overflow-y-scroll overflow-x-scroll">
          <thead className="bg-[#F5F5F5]">
            <tr>
              {[
                "Sl.No",
                "Job ID",
                "Job Profile",
                "Department/School",
                "Role",
                "",
              ].map((header, index) => (
                <th
                  key={index}
                  className="p-[19px] text-left text-[13px] font-montserrat text-[#000] font-bold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <JobEntry job={job} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentMainBarDesktop;
