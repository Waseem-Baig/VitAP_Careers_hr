import Link from "next/link";

const JobEntry = ({ job, index }) => {
  return (
    <tr key={index}>
      <td className="p-[19px] text-[13px]">{index + 1}</td>
      <td className="p-[19px] text-[13px]">{job.id}</td>
      <td className="p-[19px] text-[14px] font-bold">{job.profile}</td>
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
            href="/currentJobs/viewApplications"
            className="text-[#2E9F68] bg-[#E7F7EF] p-[0.3rem_1.3rem] text-center"
          >
            View Applicants
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default JobEntry;
