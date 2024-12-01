import { GeneralInfo } from "./GeneralInfo";
import { EducationInfo } from "./EducationInfo";
import { EmploymentInfo } from "./EmploymentInfo";
import "../styles/inputForm.css";

function InputForm({ generalInfo, setGeneralInfo, educationInfo, setEducationInfo, employmentInfo, setEmploymentInfo }) {
  return (
    <div className="form-container">
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <EmploymentInfo
        employmentInfo={employmentInfo}
        setEmploymentInfo={setEmploymentInfo}
      />
      <EducationInfo
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
    </div>
  );
}

export { InputForm };