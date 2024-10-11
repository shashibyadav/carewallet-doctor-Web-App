import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProviderName, setNPI, setEmail, setPassword } from '../ReduxStore/Slices/Login/registerSlice';
import CentreRectangle from '../shared/CentreRectangle';
import { useNavigate } from 'react-router-dom';
import ButtonTypeOne from "./shared/ButtonTypeOne";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import "../styles/landing-page/landing-page.css";

const CreateAccount = () => {
  const criteria = useSelector((state) => state.registerState.registerCredentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = () => {
    console.log(criteria.providerName, criteria.npi, criteria.email, criteria.password);
    navigate('/AddLocations');
  };

  const handleProviderChange = (value) => {
    dispatch(setProviderName(value));
  };

  const handleNpiChange = (value) => {
    dispatch(setNPI(value));
  };

  const handleEmailChange = (value) => {
    dispatch(setEmail(value));
  };

  const handlePasswordChange = (value) => {
    dispatch(setPassword(value));
  };

  return (
    <div className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <div className={`content-holder`}>
          <div className={'header-text'}>Create Account</div>
          <div className={'input-field-container'}>
            <InputField
              className='landingpage-search-fields'
              value={criteria.providerName}
              placeholder="Provider Name"
              onChange={handleProviderChange}
            />
            <InputField
              className='landingpage-search-fields'
              value={criteria.npi}
              placeholder="NPI"
              onChange={handleNpiChange}
            />
            <InputField
              className='landingpage-search-fields'
              value={criteria.email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <InputField
              className='landingpage-search-fields'
              value={criteria.password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className={`button-holder`}>
            <ButtonTypeOne
              onClick={handleCreate}
              text={'Next'}
              classname={'button-style'}
            />
          </div>
          <div className={'create-account-text'} onClick={() => navigate('/')}>
            Already Have an Account?
        </div>   
        </div>
      </CentreRectangle>
    </div>
  );
};

export default CreateAccount;
