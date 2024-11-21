import { useState } from "react";
import Sidebar from "../../components/mobileComponents/mobile-sidebar";
import Header from "../../components/mobileComponents/sign-in-header";
import Navbar from "../../components/mobileComponents/sign-in-navbar";
import Footer from "../../components/mobileComponents/mobile-footer";
import Link from "next/link";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      )}

      {/* Header */}
      <Header onMenuClick={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-grow flex flex-col gap-4 transition-all duration-300 ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        <Navbar />
        <div className="w-full overflow-x-auto overflow-y-auto p-4 flex flex-col justify-start items-center bg-greyscale-50">
          <div className="p-4 w-full h-auto flex flex-col items-center justify-start gap-7 bg-white">
            <div className="w-full flex items-center pb-4">
              <p className="font-montserrat text-[24px] font-bold">
                Current Jobs
              </p>
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
                    <tr key={index}>
                      <td className="p-4 text-[10px]">{index + 1}</td>
                      <td className="p-4 text-[10px]">{job.id}</td>
                      <td className="p-4 text-[10px] font-bold">
                        {job.profile}
                      </td>
                      <td className="p-4 text-[10px]">{job.department}</td>
                      <td className="p-4 text-[10px]">{job.role}</td>
                      <td className="p-4 text-[10px] flex gap-2">
                        <div className="flex flex-col gap-2">
                          <Link
                            href="#"
                            className="text-[#FF7C1C] bg-[#FFF0E6] px-3 py-1 text-center"
                          >
                            Reuse
                          </Link>
                          <Link
                            href="#"
                            className="text-[#4D49FF] bg-[#E6EBFF] px-3 py-1 text-center"
                          >
                            Move to Current
                          </Link>
                          <Link
                            href="#"
                            className="text-[#2E9F68] bg-[#E7F7EF] px-3 py-1 text-center"
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
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PastJobsMobile;
