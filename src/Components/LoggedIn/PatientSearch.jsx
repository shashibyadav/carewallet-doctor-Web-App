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


const PatientSearch = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const loginCredCriteria = useSelector((state) => state.loginCredState.loginCredentials);
  const [patientid, setPatientId] = useState(criteria.patientid);
  const [NPI, setNPI] = useState(loginCredCriteria.npi);
  const [lastName, setLastName] = useState(criteria.lastName);
  const [firstName, setFirstName] = useState(criteria.firstName);
  const [phone, setPhone] = useState(criteria.phone);
  const [dob, setDob] = useState(criteria.dob);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };
  const handleSearch = () => {
    updateState({
      ...criteria,
      firstName: firstName,
    })
    console.log('Search for:', { lastName, firstName, phone, dob });
    navigate('/PatientList');
  };

 

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };


  const handleDateChange = (value) => {
    setDob(value);
  };

  const handlePatientidChange = (value) => {
    setPatientId(value);
    setTimeout(() => {
      console.log("Delayed for 3 seconds.");
      
      // After the delay, navigate to '/PatientData'
      navigate('/PatientData');
    }, 4000);
    
    
  };

  const handleNPIChange = (value) => {
    setNPI(value);
  
  };


  const handleLogout = () => {
  
    console.log('Logging out...');
  };


  return (


    <div className={'patient-search'}>
     
 
      <div className={'auto-fill'}>
        
      <div className={'auto-fill-logout'}>
        <InputField
          className='patientsearch-search-fields auto-fill-patientid'
          value={patientid}
          placeholder="Patient ID (NFC auto-fill)"
          onChange={handlePatientidChange}
        
        />

        <LogOutButton/>

        </div>

        <InputField
          className='patientsearch-search-fields auto-fill-npi'
          value={NPI}
          placeholder="NPI (auto-fill)"
          onChange={handleNPIChange}
          
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
                placeholder="LastName"
                onChange={handleLastNameChange}
              />

              <InputField
                className='patientsearch-search-fields firstname'
                value={firstName}
                placeholder="FirstName"
                onChange={handleFirstNameChange}
              />
            </div>

            <InputField
              className='patientsearch-search-fields'
              value={phone}
              placeholder="Patient Phone #"
              onChange={handlePhoneChange}
            />
            <div className='patientsearch-search-fields-text'> OR </div>
            <InputField
              className='patientsearch-search-fields'
              value={dob}
              placeholder="Date of Birth (calendar)"
              onChange={handleDateChange}
            />
          </div>
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
