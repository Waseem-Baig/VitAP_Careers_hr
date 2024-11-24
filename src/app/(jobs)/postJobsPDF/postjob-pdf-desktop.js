import React from "react";

const jobCategories = [
  {
    label: "Academic Positions",
    options: [
      { value: "professor", label: "Professor (Assistant, Associate, Full)" },
      { value: "lecturer", label: "Lecturer/Senior Lecturer" },
      { value: "adjunct-faculty", label: "Adjunct Faculty" },
      { value: "visiting-faculty", label: "Visiting Faculty" },
      { value: "research-faculty", label: "Research Faculty" },
      { value: "postdoc-fellow", label: "Postdoctoral Fellow" },
      { value: "research-assistant", label: "Research Assistant/Associate" },
      { value: "research-scientist", label: "Research Scientist/Scholar" },
      { value: "lab-technician", label: "Lab Manager/Technician" },
      { value: "teaching-assistant", label: "Teaching Assistant" },
      { value: "curriculum-developer", label: "Curriculum Developer" },
      { value: "instructional-designer", label: "Instructional Designer" },
    ],
  },
  {
    label: "Administrative Positions",
    options: [
      { value: "chancellor", label: "Chancellor/President" },
      { value: "provost", label: "Vice-Chancellor/Provost" },
      { value: "dean", label: "Dean/Associate Dean" },
      { value: "academic-director", label: "Director of Academic Programs" },
      { value: "department-chair", label: "Department Chair" },
      { value: "program-coordinator", label: "Program Coordinator" },
      { value: "academic-advisor", label: "Academic Advisor" },
    ],
  },
  {
    label: "Non-Academic Staff",
    options: [
      { value: "career-counselor", label: "Career Counselor" },
      { value: "student-affairs-officer", label: "Student Affairs Officer" },
      { value: "admissions-officer", label: "Admissions Officer" },
      { value: "registrar", label: "Registrar" },
      { value: "it-support", label: "IT Support Specialist" },
      { value: "web-developer", label: "Web Developer/Designer" },
      { value: "librarian", label: "Librarian" },
      { value: "archivist", label: "Archivist" },
      { value: "library-assistant", label: "Library Assistant" },
    ],
  },
];

const roles = [
  {
    label: "Academic Roles",
    options: [
      { value: "assistant-professor", label: "Assistant Professor" },
      { value: "associate-professor", label: "Associate Professor" },
      { value: "full-professor", label: "Full Professor" },
      { value: "adjunct-lecturer", label: "Adjunct Lecturer" },
      { value: "research-associate", label: "Research Associate" },
      { value: "postdoc-researcher", label: "Postdoctoral Researcher" },
    ],
  },
  {
    label: "Administrative Roles",
    options: [
      { value: "department-chair", label: "Department Chair" },
      { value: "dean", label: "Dean" },
      { value: "registrar", label: "Registrar" },
      { value: "academic-coordinator", label: "Academic Coordinator" },
      { value: "student-affairs-manager", label: "Student Affairs Manager" },
    ],
  },
  {
    label: "Support Roles",
    options: [
      { value: "it-support", label: "IT Support Specialist" },
      { value: "librarian", label: "Librarian" },
      { value: "office-administrator", label: "Office Administrator" },
      { value: "technical-assistant", label: "Technical Assistant" },
    ],
  },
  {
    label: "Healthcare Roles",
    options: [
      { value: "counselor", label: "Counselor" },
      { value: "nurse", label: "Nurse" },
      { value: "physician", label: "Physician" },
    ],
  },
  {
    label: "Facilities and Operations Roles",
    options: [
      { value: "security-guard", label: "Security Guard" },
      { value: "facilities-manager", label: "Facilities Manager" },
      { value: "maintenance-staff", label: "Maintenance Staff" },
    ],
  },
];

const InputField = ({ label, placeholder, id, width, height }) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="text-[16px] font-montserrat text-[#000000D9]"
    >
      {label}
      <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-[#D1B3B8] p-2 ${width} ${height} placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[12px] placeholder-font-normal placeholder-leading-[18.524px]`}
    />
  </div>
);

const SelectField = ({ label, id, options, width, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="text-[16px] font-montserrat text-[#000000D9]"
    >
      {label}
      <span className="text-red-600">*</span>
    </label>
    <select
      id={id}
      name={id}
      className={`block ${width} px-3 py-3 border border-[#D1B3B8] shadow-sm focus:outline-none sm:text-sm`}
    >
      <option value="" defaultValue>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const PostJobPdfDesktop = () => {
  return (
    <div className="w-[80vw] overflow-x-scroll overflow-y-scroll h-[90vh] p-[12px_24px] flex flex-col justify-start items-center bg-greyscale-50 gap-[4rem]">
      <div className="bg-white w-[100%] h-auto p-[1.5rem] flex flex-col gap-[1rem]">
        <p className="text-[24px] font-bold font-montserrat">
          General Information
        </p>
        <SelectField
          label="Job Category"
          id="jobCategory"
          options={jobCategories.flatMap((group) =>
            group.options.map((option) => ({
              value: option.value,
              label: `${group.label} - ${option.label}`,
            }))
          )}
          width="w-[25vw]"
          placeholder="Select Category"
        />
        <SelectField
          label="Role"
          id="role"
          options={roles.flatMap((group) =>
            group.options.map((option) => ({
              value: option.value,
              label: `${group.label} - ${option.label}`,
            }))
          )}
          width="w-[25vw]"
          placeholder="Select Role"
        />
        <InputField id="project-title" label="Project Title" width="w-[25vw]" />
        <InputField id="qualification" label="Qualification" width="w-[80%]" />
        <div className="flex gap-[4rem]">
          <InputField
            label="Stipend"
            id="stipend"
            width="w-[25vw]"
            placeholder="Enter remuneration"
          />
          <InputField
            id="tenure"
            label="Tenure"
            width="w-[25vw]"
            placeholder="Enter years of experience required"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="documents-upload"
            className="text-[16px] font-montserrat text-[#000000D9]"
          >
            Supporting Documents
            <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center justify-between space-x-2 p-2 border border-[#D1B3B8] w-[25vw]">
            <span className="text-sm text-gray-700">
              Upload Respective Document
            </span>
            <input id="file-upload" type="file" className="hidden" />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex items-center space-x-2"
            >
              <div className="flex justify-center items-center bg-[#650010] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="bg-[#650010]"
                >
                  <path
                    d="M9.16667 15V3.33333L5 7.5L3.75 6.25L10 0L16.25 6.25L15 7.5L10.8333 3.33333V15H9.16667ZM2.5 20C1.8125 20 1.22417 19.7554 0.735 19.2662C0.245833 18.7771 0.000833333 18.1883 0 17.5V13.75H1.66667V18.3333H10H18.3333V13.75L20 13.75V17.5C20 18.1875 19.7554 18.7762 19.2662 19.2662C18.7771 19.7562 18.1883 20.0008 17.5 20H2.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-center items-center">
        <div className="flex gap-6">
          <button className="bg-[#650010] text-center w-[10vw] p-2 text-white text-[14px]">
            Submit
          </button>
          <button className="border border-[#650010] text-center w-[10vw] p-2 text-[#650010] text-[14px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJobPdfDesktop;
