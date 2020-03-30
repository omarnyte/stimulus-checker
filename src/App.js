import './App.css';
import ChildrenSection from './ChildrenSection';
import IncomeSection from './IncomeSection';
import FilingStatusSection from './FilingStatusSection';
import PaymentAmountSection from './PaymentAmountSection';
import React, { useState } from 'react';
import TaxYearSection from './TaxYearSection';
import useWizard from "./useWizard";

const CHILDREN = "children";
const FILING_STATUS = "filingStatus";
const INCOME = "income";
const PAYMENT_AMOUNT = "paymentAmount";
const TAX_YEAR = "taxYear";
const SECTIONS = [TAX_YEAR, FILING_STATUS, INCOME, CHILDREN, PAYMENT_AMOUNT];

function App() {
  const [filingStatus, setFilingStatus] = useState(null);
  const [income, setIncome] = useState(null);
  const [numberOfChildren, setNumberOfChildren] = useState(null);
  const [yearMostRecentlyFiled, setYearMostRecentlyFiled] = useState(null);
  
  const { currentSectionId, goToNextSection, goToPreviousSection } = useWizard(SECTIONS)
  
  return (
    <div className="app">
      { currentSectionId === TAX_YEAR && 
        <TaxYearSection
          onContinue={goToNextSection}
          setYearMostRecentlyFiled={setYearMostRecentlyFiled}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === FILING_STATUS &&
        <FilingStatusSection
          filingStatus={filingStatus}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setFilingStatus={setFilingStatus}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === INCOME && 
        <IncomeSection
          income={income}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setIncome={setIncome}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === CHILDREN &&
        <ChildrenSection
          numberOfChildren={numberOfChildren}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setNumberOfChildren={setNumberOfChildren}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === PAYMENT_AMOUNT &&
        <PaymentAmountSection
          filingStatus={filingStatus}
          income={income}
          numberOfChildren={numberOfChildren}
        />
      }
    </div>
  );
}

export default App;
