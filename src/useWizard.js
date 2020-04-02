import { useState } from "react";

function useWizard(sectionIds, activeIndex) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(activeIndex || 0);

  const goToNextSection = () => setCurrentSectionIndex(currentSectionIndex + 1);
  const goToPreviousSection = () => setCurrentSectionIndex(currentSectionIndex - 1);
  const goToSectionAtIndex = (index) => setCurrentSectionIndex(index);

  return {
    currentSectionId: sectionIds[currentSectionIndex],
    goToNextSection,
    goToPreviousSection,
    goToSectionAtIndex
  }

}

export default useWizard;
