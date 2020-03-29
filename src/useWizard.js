import { useState } from "react";

function useWizard(sectionIds, activeIndex) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const goToNextSection = () => setCurrentSectionIndex(currentSectionIndex + 1);
  const goToPreviousSection = () => setCurrentSectionIndex(currentSectionIndex - 1);

  return {
    currentSectionId: sectionIds[currentSectionIndex],
    goToNextSection,
    goToPreviousSection
  }

}

export default useWizard;
