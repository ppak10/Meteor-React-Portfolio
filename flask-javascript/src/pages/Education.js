// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for education page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import EducationContent from '../components/EducationContent';
// ----------------------------------------------------------------------------

// Education Page -------------------------------------------------------------
const Education = () => (                                                       // Education page component
  <div className = "col page">
    <h1>Education</h1>
    <EducationContent />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Education                                                        // Export education page component
// ----------------------------------------------------------------------------
