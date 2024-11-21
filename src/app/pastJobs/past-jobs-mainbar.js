import Link from "next/link";
import { useState } from "react";

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

const PastMainBarDesktop = () => {
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
              <tr key={index}>
                <td className="p-[19px] text-[13px]">{index + 1}</td>
                <td className="p-[19px] text-[13px]">{job.id}</td>
                <td className="p-[19px] text-[14px] font-bold">
                  {job.profile}
                </td>
                <td className="p-[19px] text-[13px]">{job.department}</td>
                <td className="p-[19px] text-[13px]">{job.role}</td>
                <td className="p-[19px] text-[13px] flex gap-2">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="#"
                      className="text-[#FF7C1C] bg-[#FFF0E6] p-[0.3rem_1.3rem] text-center"
                    >
                      Reuse
                    </Link>
                    <Link
                      href="#"
                      className="text-[#4D49FF] bg-[#E6EBFF] p-[0.3rem_1.3rem] text-center"
                    >
                      Move to Current
                    </Link>
                    <Link
                      href="#"
                      className="text-[#2E9F68] bg-[#E7F7EF] p-[0.3rem_1.3rem] text-center"
                    >
                      View Applicants
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

export default PastMainBarDesktop;
