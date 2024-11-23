import { useState } from "react";
import JobEntryMobile from "../job-entry-mobile";

const jobData = [
  {
    id: "101",
    profile: "Frontend Developer",
    department: "Software Development",
    role: "UI/UX Designer",
  },
  {
    id: "102",
    profile: "DevOps Engineer",
    department: "IT Infrastructure",
    role: "Automation Specialist",
  },
  {
    id: "103",
    profile: "Cloud Architect",
    department: "Cloud Computing",
    role: "Solutions Engineer",
  },
  {
    id: "104",
    profile: "Database Administrator",
    department: "Database Management",
    role: "SQL Specialist",
  },
  {
    id: "105",
    profile: "Cybersecurity Analyst",
    department: "IT Security",
    role: "Incident Responder",
  },
  {
    id: "106",
    profile: "Mobile App Developer",
    department: "Mobile Development",
    role: "Android Specialist",
  },
  {
    id: "107",
    profile: "Product Manager",
    department: "Product Management",
    role: "Agile Coordinator",
  },
  {
    id: "108",
    profile: "Network Engineer",
    department: "Networking",
    role: "LAN/WAN Specialist",
  },
  {
    id: "109",
    profile: "Machine Learning Engineer",
    department: "Artificial Intelligence",
    role: "Algorithm Developer",
  },
  {
    id: "110",
    profile: "Technical Writer",
    department: "Documentation",
    role: "Content Specialist",
  },
];

const PastJobsMobile = () => {
  const [data, setData] = useState(jobData);

  return (
    <div className="w-full overflow-x-auto overflow-y-auto p-4 flex flex-col justify-start items-center bg-greyscale-50">
      <div className="p-4 w-full h-auto flex flex-col items-center justify-start gap-7 bg-white">
        <div className="w-full flex items-center pb-4">
          <p className="font-montserrat text-[24px] font-bold">Current Jobs</p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-[700px] border-collapse border border-gray-300">
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
                    className="p-4 text-left text-[10px] font-montserrat text-[#000] font-bold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((job, index) => (
                <JobEntryMobile job={job} index={index} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastJobsMobile;
