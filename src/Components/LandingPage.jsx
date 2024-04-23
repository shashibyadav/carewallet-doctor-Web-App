import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials as setCriteriaAction } from '../ReduxStore/Slices/Login/loginCredSlice';
import CentreRectangle from '../shared/CentreRectangle';
import { useNavigate } from 'react-router-dom';
import ButtonTypeOne from "./shared/ButtonTypeOne";
import "../styles/landing-page/landing-page.css";
import "../styles/landing-page/landing-page.css";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import { setStep } from '../ReduxStore/Slices/MultiStepProviderRegistration/multiStepSlice';
import { updateFormData } from '../ReduxStore/Slices/ProviderRegistration/providerRegistrationSlice';

const LandingPage = () => {
  const criteria = useSelector((state) => state.loginCredState.loginCredentials);
  const [NPI, setNpi] = useState(criteria.npi);
  const [password, setPassword] = useState(criteria.password); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const handleSearch = () => {
    updateState({
      ...criteria,
      npi: NPI,
      password: password,
    });
    // console.log('Search for:', { NPI, password });
    navigate('/LandingPage');
  };
 

  const handleNpiChange = (value) => {
    setNpi(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignUp = () => {
    dispatch(updateFormData({
      title: "",
      firstName: "",
      lastName: "",
      npi: "",
      primaryPhone: "",
      secondaryPhone: "",
      primaryEmail: "",
      secondaryEmail: "",
      password: "",
      confirmPassword: "",
      personalAddress: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      noSecondaryPhone: false,
    }));
    dispatch(setStep(1));
    navigate('/MultiStepProviderRegistration');
  }


  return (
    <div className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <div className={`content-holder`}>
        <div className={'header-text'}>Doctor Login</div>
        <div className={'input-field-container'}>
           <InputField
              className='landingpage-search-fields'
              value={NPI}
              placeholder="NPI"
              onChange={handleNpiChange}
            />

          <InputField
                className='landingpage-search-fields'
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
          <div className={`button-holder`}>
            <ButtonTypeOne
                onClick={handleSearch}
                text={'Login'}
                classname={'button-style'}
            />
            <ButtonTypeOne
                onClick={handleSignUp}
                text={'Sign Up'}
                classname={'button-style'}
            />
          </div>
        </div>
      </CentreRectangle>

    </div>
  );
};

export default LandingPage;
