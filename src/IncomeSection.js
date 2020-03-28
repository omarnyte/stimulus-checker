import './IncomeSection.css';
import React, { useState } from 'react';

function IncomeSection({ onBack, onContinue }) {
  const [income, setIncome] = useState("$");

  const handleInputChange = (e) => {
    const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const lastCharacterAdded = e.target.value[e.target.value.length - 1];
    if (e.target.value.length === 1 || NUMBERS.includes(lastCharacterAdded)) {
      setIncome(e.target.value);
    }

  }

  return (
    <div className="income-section-container">
      <div className="income-label-container">
        <label className="income-label" id="income">What is Your Annual Income?</label>
      </div>

      <div className="income-input-container">
        <input
          className="income-input"
          id="income"
          onChange={handleInputChange}
          type="tel"
          value={income}
        />
      </div>

      <footer className="income-footer">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button
          className={`continue-button ${income.length === 1 ? "disabled" : "enabled"}`}
          onClick={onContinue}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

export default IncomeSection;