import './TaxYearSection.css';
import React from 'react';

function TaxYearSection({ onContinue, setYearMostRecentlyFiled, yearMostRecentlyFiled }) {
  return (
    <div className="tax-year-section-container">
      <div className="question-container">
        <label className="question" id="hasFiledFor2019">For which year did you most recently file taxes?</label>
      </div>

      <div className="tax-year-radio-options">
        <label className="tax-year-options-label" htmlFor={2018}>
          <input
            checked={yearMostRecentlyFiled === 2018}
            className="tax-year-input"
            id={2018}
            name="hasFiledFor2019"
            onChange={() => setYearMostRecentlyFiled(2018)}
            type="radio"
            value={2018}
          />
          <div className="tax-year-radio-card">
            <span>2018</span>
          </div>
        </label>

        <label className="tax-year-options-label" htmlFor={2019}>
          <input
            checked={yearMostRecentlyFiled === 2019}
            className="tax-year-input"
            id={2019}
            name="hasFiledFor2019"
            onChange={() => setYearMostRecentlyFiled(2019)}
            type="radio"
            value={2019}
          />
          <div className="tax-year-radio-card">
            <span>2019</span>
          </div>
        </label>
      </div>

      <footer className="tax-year-footer">
        <button 
          className="continue-button"
          disabled={!yearMostRecentlyFiled}
          onClick={onContinue}
        >
          Continue
        </button>
      </footer>

    </div>
  )
}

export default TaxYearSection;