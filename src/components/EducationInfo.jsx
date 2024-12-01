import { useState } from "react";
import FormSection from './FormSection';

function EducationInfo({ educationInfo, setEducationInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    setEducationInfo(prevState => 
      prevState.map(edu => 
        edu.id === id ? { ...edu, [name]: value } : edu
      )
    );
  };

  const addEducation = () => {
    setEducationInfo(prev => [
      ...prev,
      {
        id: prev.length + 1,
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
      }
    ]);
  };

  const removeEducation = (id) => {
    setEducationInfo(prev => prev.filter(edu => edu.id !== id));
  };

  return (
    <FormSection 
      title="Education"
      isCollapsible={true}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      {educationInfo.map((edu) => (
        <div key={edu.id} className="education-entry-form">
          <div>
            <label htmlFor={`school-${edu.id}`}>School</label>
            <input
              type="text"
              name="school"
              id={`school-${edu.id}`}
              value={edu.school}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div>
            <label htmlFor={`degree-${edu.id}`}>Degree</label>
            <input
              type="text"
              name="degree"
              id={`degree-${edu.id}`}
              value={edu.degree}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div>
            <label htmlFor={`startDate-${edu.id}`}>Start Date</label>
            <input
              type="date"
              name="startDate"
              id={`startDate-${edu.id}`}
              value={edu.startDate}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          <div>
            <label htmlFor={`endDate-${edu.id}`}>End Date</label>
            <input
              type="date"
              name="endDate"
              id={`endDate-${edu.id}`}
              value={edu.endDate}
              onChange={(e) => handleChange(e, edu.id)}
            />
          </div>
          {educationInfo.length > 1 && (
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeEducation(edu.id)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button" 
        className="add-btn"
        onClick={addEducation}
      >
        Add Education
      </button>
    </FormSection>
  );
}

export { EducationInfo };
