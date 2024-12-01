import React from "react";

const FormSection = ({
  title,
  isCollapsible = false,
  isExpanded = true,
  onToggle,
  children,
}) => {
  return (
    <div className="form-section">
      <div className="form-section-header">
        {isCollapsible ? (
          <button className="section-header" onClick={onToggle}>
            <h2>{title}</h2>
            <span className={`arrow ${isExpanded ? "expanded" : ""}`}>▼</span>
          </button>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      {(!isCollapsible || isExpanded) && (
        <div className="form-section-content">{children}</div>
      )}
    </div>
  );
};

export default FormSection;
