import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../shared/CentreRectangle';
import { setPatientSearchCriteria as setCriteriaAction } from '../ReduxStore/Slices/Login/loginSlice';
import ButtonTypeOne from "./shared/ButtonTypeOne";
import "../styles/patient-search/patient-search.css";
import InputField from "../shared/inputField";
import LogoFooter from "./shared/LogoFooter";
import LogOutButton from "./shared/ButtonLogOut.jsx";


const LandingPage = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const [patientid, setPatientId] = useState(criteria.patientid);
  const [NPI, setNPI] = useState(criteria.npi);
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


  const handleLogout = () => {
  
    console.log('Logging out...');
  };


  return (


    <div className={'patient-search'}>
     
 
      <div className={'auto-fill'}>

   

        <InputField
          className='search-fields'
          value={patientid}
          placeholder="Patient ID (NFC auto-fill)"
        
        />

        <InputField
          className='search-fields'
          value={NPI}
          placeholder="NPI (auto-fill)"
          
        />

      </div>
      
      

      <CentreRectangle>
        <div className={`content-holder`}>
          <div className={'header-text'}>Patient Search</div>

          <div className={'input-field-container'}>

            <div className='name-container'>
              <InputField
                className='search-fields lastname'
                value={lastName}
                placeholder="LastName"
                onChange={handleLastNameChange}
              />

              <InputField
                className='search-fields firstname'
                value={firstName}
                placeholder="FirstName"
                onChange={handleFirstNameChange}
              />
            </div>

            <InputField
              className='search-fields'
              value={phone}
              placeholder="Patient Phone #"
              onChange={handlePhoneChange}
            />

            <InputField
              className='search-fields'
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

export default LandingPage;
