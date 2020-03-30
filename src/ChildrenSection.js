import './ChildrenSection.css';
import React from 'react';

function ChildrenSection({ numberOfChildren, onBack, onContinue, setNumberOfChildren, yearMostRecentlyFiled }) {

  const handleNumberOfChildrenChange = (e) => {
    const typedValueAsNumber = parseInt(e.target.value);

    if (typedValueAsNumber || typedValueAsNumber === 0) {
      setNumberOfChildren(typedValueAsNumber);
    } else if (e.target.value === "") {
      setNumberOfChildren(null);
    }
  };

  return (
    <div className="children-section-container">
      <div className="children-question-container">
        <label className="children-question" htmlFor="numberOfChildren">How many children did you claim on your {yearMostRecentlyFiled} taxes?</label>
      </div>

      <div className="children-input-container">
        <input
          className="children-input"
          id="numberOfChildren"
          max="20"
          min="0"
          name="numberOfChildren"
          onChange={handleNumberOfChildrenChange}
          value={(numberOfChildren || numberOfChildren === 0) ? numberOfChildren : ""}
        />
      </div>

      <footer className="children-footer">
        <button className="back-button" onClick={onBack}>Back</button>
        <button
          className="continue-button"
          disabled={numberOfChildren === null}
          onClick={onContinue}
        >
          Continue
        </button>
      </footer>

    </div>
  )
}

export default ChildrenSection;