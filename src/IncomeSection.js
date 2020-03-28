import './IncomeSection.css';
import React from 'react';

function IncomeSection({ income, onBack, onContinue, setIncome, yearMostRecentlyFiled }) {

  const handleInputChange = (e) => {
    const lastCharacterTyped = e.target.value.slice(1);
  
    const lastCharacterAsNumber = parseInt(lastCharacterTyped);
    if (lastCharacterTyped === "" || lastCharacterAsNumber || lastCharacterAsNumber === 0) {
      const updatedIncome = (lastCharacterAsNumber || lastCharacterAsNumber === 0) ? parseInt(e.target.value.slice(1)) : null;
      setIncome(updatedIncome);
    }
  };

  return (
    <div className="income-section-container">
      <div className="income-label-container">
        <label className="income-label" id="income">What was your adjusted gross income in {yearMostRecentlyFiled}?</label>
      </div>

      <div className="income-input-container">
        <input
          className="income-input"
          id="income"
          onChange={handleInputChange}
          type="tel"
          value={(income || income === 0) ? `$${income}` : "$"}
        />
      </div>

      <footer className="income-footer">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button
          className="continue-button" 
          disabled={income === null}
          onClick={onContinue}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

export default IncomeSection;