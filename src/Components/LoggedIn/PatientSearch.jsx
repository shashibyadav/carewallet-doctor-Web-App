import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchCriteria,
  selectPatientSearch,
} from '../../ReduxStore/Slices/Search/patientSearchSlice';
import {
  setLoading,
  setError,
  setPatients,
  selectPatients,
  selectIsLoading,
  selectError,
} from '../../ReduxStore/Slices/Search/patientResultsSlice';
import axiosInstance from '../../utils/axiosInstance';
import '../../App.css';
import '../../styles/patient-search/patient-search.css';
import CentreRectangle from '../../shared/CentreRectangle.jsx';
import InputField from '../../shared/inputField.jsx';
import ButtonTypeOne from '../shared/ButtonTypeOne.jsx';
import LogoFooter from '../shared/LogoFooter.jsx';
import LogOutButton from '../shared/ButtonLogOut.jsx';

const PatientSearch = () => {
  // to do, redirect to patientlist, use id search
  const dispatch = useDispatch();
  const searchCriteria = useSelector(selectPatientSearch);
  const isLoading = useSelector(selectIsLoading);
  const searchError = useSelector(selectError);
  const patients = useSelector(selectPatients);
  const [lastName, setLastName] = useState(searchCriteria.lastName);
  const [firstName, setFirstName] = useState(searchCriteria.firstName);
  const [phoneNumber, setPhoneNumber] = useState(searchCriteria.phoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState(searchCriteria.dateOfBirth);


  const handleSearch = async () => {
    if (!lastName && !firstName && !phoneNumber && !dateOfBirth) {
      dispatch(setError('Please provide at least one search field.'));
      return;
    }

    dispatch(
      setSearchCriteria({
        lastName,
        firstName,
        phoneNumber,
        dateOfBirth,
      })
    );

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await axiosInstance.get('/search-patient.ns', {
        params: { lastName, firstName, phoneNumber, dateOfBirth },
      });

      if (response.data.success) {
        const { patients = [] } = response.data.data || {};
        dispatch(setPatients(patients));
        if (patients.length === 0) {
          dispatch(setError('No patients found matching the criteria.'));
        }
      } else {
        dispatch(setError('Search failed on the server side.'));
      }
    } catch (err) {
      console.error(err);
      dispatch(setError('Error searching patients. Please try again.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="patient-search">
      <CentreRectangle className="center-rectangle">
        <div className="content-holder">
          <div className="header-text">Patient Search</div>
          {isLoading && <p>Searching...</p>}
          {searchError && <p className="error-message">{searchError}</p>}
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

          <div className="button-holder">
            <ButtonTypeOne
              onClick={handleSearch}
              text="Search"
              classname="button-style"
            />
          </div>

        </div>
      </CentreRectangle>

      <LogoFooter />
    </div>
  );
};

export default PatientSearch;
