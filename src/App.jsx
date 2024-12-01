import "./styles/App.css";
import { InputForm } from "./components/InputForm";
import CVPreview from "./components/CVPreview";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState([{
    id: 1,
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  }]);

  const [employmentInfo, setEmploymentInfo] = useState([{
    id: 1,
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
  }]);

  return (
    <>
      <h1 className="app-header">CV Creator</h1>
      <div className="App">
        <InputForm 
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          employmentInfo={employmentInfo}
          setEmploymentInfo={setEmploymentInfo}
        />
        <CVPreview 
          generalInfo={generalInfo} 
          educationInfo={educationInfo}
          employmentInfo={employmentInfo}
        />
      </div>
    </>
  );
}

export default App;
