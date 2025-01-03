import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCriteria } from '../../ReduxStore/Slices/Search/patientSearchSlice';
import { useNavigate } from 'react-router-dom';
import '../../styles/patient-search/patient-search.css';
import CenterRectangle from '../../shared/CenterRectangle.jsx';
import InputField from '../../shared/inputField.jsx';
import ButtonTypeOne from '../shared/ButtonTypeOne.jsx';
import LogoFooter from '../shared/LogoFooter.jsx';

const PatientSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!lastName && !firstName && !phoneNumber && !dateOfBirth) {
      setError('Please provide at least one search field.');
      return;
    }
    setError(null);

    dispatch(
      setSearchCriteria({
        lastName,
        firstName,
        phoneNumber,
        dateOfBirth,
      })
    );
    navigate('/patient-list');
  };

  return (
    <div className="patient-search">
      <CenterRectangle className="center-rectangle">
        <div className="content-holder">
          <div className="header-text">Patient Search</div>
          <div className="input-field-container">
            <div className="name-container">
              <InputField
                className="patientsearch-search-fields lastname"
                value={lastName}
                placeholder="Last Name"
                onChange={(val) => setLastName(val)}
              />
              <InputField
                className="patientsearch-search-fields firstname"
                value={firstName}
                placeholder="First Name"
                onChange={(val) => setFirstName(val)}
              />
            </div>

            <InputField
              className="patientsearch-search-fields"
              value={phoneNumber}
              placeholder="Patient Phone #"
              onChange={(val) => setPhoneNumber(val)}
            />
            <InputField
              className="patientsearch-search-fields"
              value={dateOfBirth}
              placeholder="Date of Birth"
              onChange={(val) => setDateOfBirth(val)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          <div className="button-holder">
            <ButtonTypeOne
              onClick={handleSearch}
              text="Search"
              classname="button-style"
            />
          </div>
        </div>
      </CenterRectangle>
      <LogoFooter />
    </div>
  );
};

export default PatientSearch;
