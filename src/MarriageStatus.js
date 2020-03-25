import './MarriageStatus.css';
import React, { useState } from 'react';

function MarriageStatus({ onBack }) {
  const [marriageStatus, setMarriageStatus] = useState(null);

  const handleClick = (e) => {
    setMarriageStatus(e.target.id);
  };
  
  return (
    <div className="marriage-status-section-container">
      <div className="marriage-status-label-container">
        <label className="marriage-status-label" id="income">Are You Single or Married?</label>
      </div>

      <div className="marriage-options">
        <label className="marriage-options-label" htmlFor="single">
          <input
            checked={marriageStatus === "single"}
            className="marriage-radio-input"
            id="single"
            name="marriageStatus"
            onChange={handleClick}
            type="radio"
            value="single"
          />
          <div className="marriage-options-radio-card">
            <span>Single</span>
          </div>
        </label>

        <label className="marriage-options-label" htmlFor="married">
          <input
            checked={marriageStatus === "married"}
            className="marriage-radio-input"
            id="married"
            name="marriageStatus"
            onChange={handleClick}
            type="radio"
            value="married"
          />
          <div className="marriage-options-radio-card">
            <span>Married</span>
          </div>
        </label>
      </div>

      <footer className="marriage-status-footer">
        <button className="back-button" onClick={onBack}>Back</button>
        <button
          className={`continue-button ${marriageStatus ? "enabled" : "disabled"}`}
        >
          Continue
        </button>
      </footer>

    </div>
  )
}

export default MarriageStatus;