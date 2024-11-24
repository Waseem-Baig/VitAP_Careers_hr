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

const departments = [
  { value: "sense", label: "SENSE (School of Electronics Engineering)" },
  { value: "scope", label: "SCOPE (School of Computer Engineering)" },
  { value: "sas", label: "SAS (School of Advanced Sciences)" },
  {
    value: "site",
    label: "SITE (School of Information Technology & Engineering)",
  },
  { value: "select", label: "SELECT (School of Electrical Engineering)" },
  { value: "smec", label: "SMEC (School of Mechanical Engineering)" },
  { value: "vls", label: "VLS (VIT Law School)" },
];

const InputField = ({ label, placeholder, id, width, height }) => (
  <div className="flex flex-col gap-2 justify-start">
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

const PostJobMobile = () => {
  return (
    <div className="w-screen overflow-x-auto overflow-y-auto p-6 flex flex-col justify-start bg-greyscale-50">
      <div className="p-4 w-[100%] h-auto flex flex-col items-start justify-start gap-6 bg-white">
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
          width="w-[70vw]"
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
          width="w-[70vw]"
          placeholder="Select Role"
        />
        <InputField label="Qualification" id="qualification" width="w-[70vw]" />
        <InputField
          id="specialized-areas"
          label="Specialised Areas"
          width="w-[70vw]"
        />
        <InputField
          id="years-of-experience"
          label="Years of Experience"
          width="w-[70vw]"
          placeholder="Enter years of experience required"
        />
      </div>
      <div className="bg-white w-[100%] h-auto p-[1.5rem] flex flex-col gap-[1rem]">
        <p className="text-[24px] font-bold font-montserrat">Job Information</p>
        <InputField
          label="Duties & Responsibilities"
          id="duties-responsibilities-1"
          width="w-[70vw]"
        />
        <input
          type="text"
          className={`border border-[#D1B3B8] w-[70vw] p-2 placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[12px] placeholder-font-normal placeholder-leading-[18.524px]`}
          id="duties-responsibilities-2"
        />
        <input
          type="text"
          className={`border border-[#D1B3B8] w-[70vw] p-2 placeholder-[rgba(51, 51, 51, 0.40)] placeholder-font-montserrat placeholder-text-[12px] placeholder-font-normal placeholder-leading-[18.524px]`}
          id="duties-responsibilities-3"
        />
        <button className="border border-[#650010] text-center w-[50vw] p-2 text-[#650010] text-[14px]">
          + Add one More Duty
        </button>
        <InputField
          id="eligibility"
          label="Eligibility"
          width="w-[70vw]"
          height="h-[5rem]"
        />
        <InputField id="experience" label="Experience*" width="w-[50vw]" />
        <InputField
          id="selection-procedure"
          label="Selection Procedure"
          width="w-[70vw]"
          height="h-[5rem]"
        />
      </div>
      <div className="bg-white w-[100%] h-auto p-[1.5rem] flex flex-col gap-[1rem]">
        <p className="text-[24px] font-bold font-montserrat">
          Other Information
        </p>
        <SelectField
          label="Department/School"
          id="department"
          options={departments}
          width="w-[70vw]"
          placeholder="Select a department or School"
        />
        <InputField
          id="remuneration"
          label="Remuneration"
          width="w-[70vw]"
          placeholder="Enter Remuneration"
        />
        <InputField
          id="tenure"
          label="Tenure"
          width="w-[70vw]"
          placeholder="Enter years of experience required"
        />
      </div>
      <div className="flex w-[100%] justify-center items-center">
        <div className="flex gap-6">
          <button className="bg-[#650010] text-center w-[20vw] p-2 text-white text-[11px]">
            Submit
          </button>
          <button className="border border-[#650010] text-center w-[20vw] p-2 text-[#650010] text-[11px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJobMobile;
