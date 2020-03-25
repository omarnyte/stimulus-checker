import './App.css';
import IncomeSection from './IncomeSection';
import MarriageStatus from './MarriageStatus';
import React from 'react';
import useWizard from "./useWizard";

function App() {

  const SECTIONS = ["income", "marriageStatus"];

  const { currentSectionId, goToNextSection, goToPreviousSection } = useWizard(SECTIONS)
  
  return (
    <div className="app">
      { currentSectionId === "income" && <IncomeSection onContinue={goToNextSection} />}
      { currentSectionId === "marriageStatus" && <MarriageStatus onBack={goToPreviousSection} />}
    </div>
  );
}

export default App;
