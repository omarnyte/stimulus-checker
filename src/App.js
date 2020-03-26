import './App.css';
import ChildrenSection from './ChildrenSection';
import IncomeSection from './IncomeSection';
import MarriageStatus from './MarriageStatus';
import React, { useState } from 'react';
import TaxYearSection from './TaxYearSection';
import useWizard from "./useWizard";

function App() {
  const [yearMostRecentlyFiled, setYearMostRecentlyFiled] = useState(null);
  
  const SECTIONS = ["taxYear", "income", "marriageStatus", "children"];
  const { currentSectionId, goToNextSection, goToPreviousSection } = useWizard(SECTIONS)
  
  return (
    <div className="app">
      { currentSectionId === "taxYear" && 
        <TaxYearSection
          setYearMostRecentlyFiled={setYearMostRecentlyFiled}
          yearMostRecentlyFiled={yearMostRecentlyFiled}
        />
      }
      { currentSectionId === "income" && <IncomeSection onContinue={goToNextSection} />}
      { currentSectionId === "marriageStatus" && <MarriageStatus onBack={goToPreviousSection} onContinue={goToNextSection} />}
      { currentSectionId === "children" && <ChildrenSection onBack={goToPreviousSection} />}
    </div>
  );
}

export default App;
