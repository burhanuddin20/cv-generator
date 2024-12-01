import "../styles/cvPreview.css";

const CVPreview = ({ generalInfo, educationInfo }) => {
  const editedEmail =
    generalInfo.email.length > 0 ? generalInfo.email + " | " : "";

  return (
    <div className="cv-preview">
      <div className="personal-info">
        <p id="name">{generalInfo.name}</p>
        <p id="contact">
          {editedEmail} {generalInfo.phone}
        </p>
      </div>

      <div className="cv-education-section">
        <h2>Education</h2>
        {educationInfo.map((edu) => (
          edu.school && (
            <div key={edu.id} className="education-entry">
              <p className="school">{edu.school}</p>
              <p className="degree">{edu.degree}</p>
              <p className="dates">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};
export default CVPreview;
