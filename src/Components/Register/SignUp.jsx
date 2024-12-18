import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProviderName, setNPI, setEmail, setPassword, clearRegisterState } from '../../ReduxStore/Slices/Login/registerSlice';
import CentreRectangle from '../../shared/CentreRectangle';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonTypeOne from ".././shared/ButtonTypeOne";
import LogoHeader from ".././shared/LogoHeader";
import InputField from "../../shared/inputField";
import "../../styles/landing-page/landing-page.css";

const CreateAccount = () => {
  const criteria = useSelector((state) => state.registerState.registerCredentials);
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.state && location.state.errorMessage) {
      setError(location.state.errorMessage);
    }
  }, [location.state]);

  const handleCreate = () => {
    const { providerName, npi, email, password } = criteria;  
    const error = validateFields({ ...criteria });
   
    if (error) {
      setError(error);  
      return;
    }

    setError(null)
    navigate('/addlocations');
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

  const validateFields = ({ providerName, npi, email, password }) => {
    const npiPattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$/;

    if (providerName.length < 3) {
      return 'Enter a valid Provider Name';
    }
  
    if (!npiPattern.test(npi)) {
      return 'NPI must be a valid 10-digit number';
    }
  
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address';
    }
  
    if (!passwordPattern.test(password)) {
      return 'Password must be at least 12 characters long, contain one uppercase letter, and one special character';
    }
  
    return null;  
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
          {error && <p className="error-message">{error}</p>}
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
