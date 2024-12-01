import { useState } from "react";
import FormSection from './FormSection';

function EmploymentInfo({ employmentInfo, setEmploymentInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    setEmploymentInfo(prevState => 
      prevState.map(job => 
        job.id === id ? { ...job, [name]: value } : job
      )
    );
  };

  const addEmployment = () => {
    setEmploymentInfo(prev => [
      ...prev,
      {
        id: prev.length + 1,
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: ""
      }
    ]);
  };

  const removeEmployment = (id) => {
    setEmploymentInfo(prev => prev.filter(job => job.id !== id));
  };

  return (
    <FormSection 
      title="Employment"
      isCollapsible={true}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      {employmentInfo.map((job) => (
        <div key={job.id} className="employment-entry-form">
          <div>
            <label htmlFor={`company-${job.id}`}>Company</label>
            <input
              type="text"
              name="company"
              id={`company-${job.id}`}
              value={job.company}
              onChange={(e) => handleChange(e, job.id)}
            />
          </div>
          <div>
            <label htmlFor={`position-${job.id}`}>Position</label>
            <input
              type="text"
              name="position"
              id={`position-${job.id}`}
              value={job.position}
              onChange={(e) => handleChange(e, job.id)}
            />
          </div>
          <div>
            <label htmlFor={`location-${job.id}`}>Location</label>
            <input
              type="text"
              name="location"
              id={`location-${job.id}`}
              value={job.location}
              onChange={(e) => handleChange(e, job.id)}
            />
          </div>
          <div>
            <label htmlFor={`startDate-${job.id}`}>Start Date</label>
            <input
              type="date"
              name="startDate"
              id={`startDate-${job.id}`}
              value={job.startDate}
              onChange={(e) => handleChange(e, job.id)}
            />
          </div>
          <div>
            <label htmlFor={`endDate-${job.id}`}>End Date</label>
            <input
              type="date"
              name="endDate"
              id={`endDate-${job.id}`}
              value={job.endDate}
              onChange={(e) => handleChange(e, job.id)}
            />
          </div>
          <div>
            <label htmlFor={`description-${job.id}`}>Description</label>
            <textarea
              name="description"
              id={`description-${job.id}`}
              value={job.description}
              onChange={(e) => handleChange(e, job.id)}
              rows="4"
              className="description-input"
            />
          </div>
          {employmentInfo.length > 1 && (
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeEmployment(job.id)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button" 
        className="add-btn"
        onClick={addEmployment}
      >
        Add Employment
      </button>
    </FormSection>
  );
}

export { EmploymentInfo };
