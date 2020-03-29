import './FilingStatusSection.css';
import React from 'react';

function MarriageStatus({ filingStatus, onBack, onContinue, setFilingStatus, yearMostRecentlyFiled }) {
  const handleClick = (e) => {
    setFilingStatus(e.target.id);
  };
  
  return (
    <div className="marriage-status-section-container">
      <div className="marriage-status-label-container">
        <label className="marriage-status-label" id="income">What was your filing status on your {yearMostRecentlyFiled} taxes?</label>
      </div>

      <div className="marriage-options">
        <label className="marriage-options-label" htmlFor="headOfHoushold">
          <input
            checked={filingStatus === "headOfHoushold"}
            className="marriage-radio-input"
            id="headOfHoushold"
            name="marriageStatus"
            onChange={handleClick}
            type="radio"
            value="headOfHoushold"
          />
          <div className="marriage-options-radio-card">
            <span>Head of Household</span>
          </div>
        </label>

        <label className="marriage-options-label" htmlFor="married">
          <input
            checked={filingStatus === "married"}
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

        <label className="marriage-options-label" htmlFor="single">
          <input
            checked={filingStatus === "single"}
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

      </div>

      <footer className="marriage-status-footer">
        <button className="back-button" onClick={onBack}>Back</button>
        <button
          className={`continue-button ${filingStatus ? "enabled" : "disabled"}`}
          onClick={onContinue}
        >
          Continue
        </button>
      </footer>

    </div>
  )
}

export default MarriageStatus;