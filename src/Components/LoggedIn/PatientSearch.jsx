import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../../shared/CentreRectangle.jsx';
import { setPatientSearchCriteria as setCriteriaAction } from '../../ReduxStore/Slices/Login/loginSlice.js';
import ButtonTypeOne from "../shared/ButtonTypeOne.jsx";
import "../../styles/patient-search/patient-search.css";
import InputField from "../../shared/inputField.jsx";
import LogoFooter from "../shared/LogoFooter.jsx";
import LogOutButton from "../shared/ButtonLogOut.jsx";
import axiosInstance from '../../utils/axiosInstance';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PatientSearch = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const loginCredCriteria = useSelector((state) => state.loginCredState.loginCredentials);
  const [patientid, setPatientId] = useState(criteria.patientid);
  const [NPI, setNPI] = useState(loginCredCriteria.npi);
  const [lastName, setLastName] = useState(criteria.lastName || '');
  const [firstName, setFirstName] = useState(criteria.firstName || '');
  const [phone, setPhone] = useState(criteria.phone || '');
  const [dob, setDob] = useState(criteria.dob || ''); 
  const [error, setError] = useState(null); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const validateFields = () => {
    if (firstName && lastName) return null;
    if (phone && /^\d{10}$/.test(phone)) return null;
    if (dob) return null; 
    return 'Please provide valid search criteria: First Name and Last Name, Phone, or a valid DOB.';
  };

  const handleSearch = async () => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    let searchType = '';
    let query = '';

    if (firstName && lastName) {
      searchType = 'name';
      query = `${firstName} ${lastName}`;
    } else if (phone) {
      searchType = 'phone';
      query = phone;
    } else if (dob) {
      searchType = 'dob';
      query = dob;
    }

    try {
      const response = await axiosInstance.get('/search-patients.ns', {
        params: { type: searchType, query },
      });

      const { data } = response.data;

      if (response.data.success && data.length > 0) {
        // update state here
        navigate('/PatientList', { state: { patients: data } });
      } else {
        setError('No patients found matching the criteria.');
      }
    } catch (error) {
      console.error('Error during patient search:', error);
      setError('An error occurred while searching for patients. Please try again.');
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleFieldChange = (setter) => (value) => setter(value);

  return (
    <div className={'patient-search'}>
      <div className={'auto-fill'}>
        <div className={'auto-fill-logout'}>
          <InputField
            className='patientsearch-search-fields auto-fill-patientid'
            value={patientid}
            placeholder="Patient ID (NFC auto-fill)"
            onChange={handleFieldChange(setPatientId)}
          />
          <LogOutButton onClick={handleLogout} />
        </div>
        <InputField
          className='patientsearch-search-fields auto-fill-npi'
          value={NPI}
          placeholder="NPI (auto-fill)"
          onChange={handleFieldChange(setNPI)}
        />
      </div>

      <CentreRectangle className='center-rectangle'>
        <div className={`content-holder`}>
          <div className={'header-text'}>Patient Search</div>
          <div className={'input-field-container'}>
            <div className='name-container'>
              <InputField
                className='patientsearch-search-fields lastname'
                value={lastName}
                placeholder="Last Name"
                onChange={handleFieldChange(setLastName)}
              />
              <InputField
                className='patientsearch-search-fields firstname'
                value={firstName}
                placeholder="First Name"
                onChange={handleFieldChange(setFirstName)}
              />
            </div>
            <InputField
              className='patientsearch-search-fields'
              value={phone}
              placeholder="Patient Phone #"
              onChange={handleFieldChange(setPhone)}
            />
            <div className='patientsearch-search-fields-text'> OR </div>
            <DatePicker
              selected={dob ? new Date(dob) : null}
              onChange={(date) => setDob(date.toLocaleDateString('en-US'))} 
              className="patientsearch-search-fields"
              placeholderText="Date of Birth (Select from Calendar)"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className={`button-holder`}>
            <ButtonTypeOne
              onClick={handleSearch}
              text={'Search'}
              classname={'button-style'}
            />
          </div>
        </div>
      </CentreRectangle>
      <LogoFooter />
    </div>
  );
};

export default PatientSearch;
