import React from 'react';
import "../../shared/buttonPatientSearch.css";
import CentreRectangle from '../../shared/CentreRectangle';

const ButtonPatientSearch = ({ onClick }) => {
  return (
    <CentreRectangle className='patient-search' >
    <button className="button-patient-search" onClick={onClick}>
      Patient Search
    </button>
    </CentreRectangle>
  );
};

export default ButtonPatientSearch;