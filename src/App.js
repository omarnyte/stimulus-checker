import './App.css';
import ChildrenSection from './ChildrenSection';
import IncomeSection from './IncomeSection';
import FilingStatusSection from './FilingStatusSection';
import PaymentAmountSection from './PaymentAmountSection';
import React, { useState } from 'react';
import TaxYearSection from './TaxYearSection';
import useWizard from "./useWizard";

function App() {
  const [filingStatus, setFilingStatus] = useState(null);
  const [income, setIncome] = useState(null);
  const [numberOfChildren, setNumberOfChildren] = useState(null);
  const [yearMostRecentlyFiled, setYearMostRecentlyFiled] = useState(null);
  
  const SECTIONS = ["taxYear", "income", "filingStatus", "children", "paymentAmount"];
  const { currentSectionId, goToNextSection, goToPreviousSection } = useWizard(SECTIONS)
  
  return (
    <div className="app">
      { currentSectionId === "taxYear" && 
        <TaxYearSection
          onContinue={goToNextSection}
          setYearMostRecentlyFiled={setYearMostRecentlyFiled}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === "income" && 
        <IncomeSection
          income={income}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setIncome={setIncome}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === "filingStatus" &&
        <FilingStatusSection
          filingStatus={filingStatus}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setFilingStatus={setFilingStatus}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === "children" &&
        <ChildrenSection
          numberOfChildren={numberOfChildren}
          onBack={goToPreviousSection}
          onContinue={goToNextSection}
          setNumberOfChildren={setNumberOfChildren}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === "paymentAmount" &&
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
