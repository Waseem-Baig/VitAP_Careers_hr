import Link from "next/link";

const JobEntryMobile = ({ job, index }) => {
  return (
    <tr key={index}>
      <td className="p-4 text-[10px]">{index + 1}</td>
      <td className="p-4 text-[10px]">{job.id}</td>
      <td className="p-4 text-[10px] font-bold">{job.profile}</td>
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
            href="/currentJobs/viewApplications"
            className="text-[#2E9F68] bg-[#E7F7EF] px-3 py-1 text-center"
          >
            View Applicants
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default JobEntryMobile;
