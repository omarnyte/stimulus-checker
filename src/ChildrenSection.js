import './ChildrenSection.css';
import React, { useState } from 'react';

function ChildrenSection({ onBack }) {
  const [hasChildren, setHasChildren] = useState(true);

  const handleHasChildrenChange = (e) => {
    setHasChildren(e.target.value === "yes");
  }

  return (
    <div className="children-section-container">
      <div className="question-1-container">
        <label className="children-question" id="numberOfChildren">Do You Have any Children?</label>
      </div>

      <div className="has-children-radio-options">
        <label className="has-children-options-label" htmlFor="yes">
          <input
            checked={hasChildren === true}
            className="has-children-input"
            id="yes"
            name="hasChildren"
            onChange={handleHasChildrenChange}
            type="radio"
            value="yes"
          />
          <div className="has-children-radio-card">
            <span>Yes</span>
          </div>
        </label>

        <label className="has-children-options-label" htmlFor="yes">
          <input
            checked={hasChildren === false}
            className="has-children-input"
            id="no"
            name="hasChildren"
            onChange={handleHasChildrenChange}
            type="radio"
            value="no"
          />
          <div className="has-children-radio-card">
            <span>No</span>
          </div>
        </label>
      </div>


      <footer className="children-footer">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="back-button">Continue</button>
      </footer>

    </div>
  )
}

export default ChildrenSection;