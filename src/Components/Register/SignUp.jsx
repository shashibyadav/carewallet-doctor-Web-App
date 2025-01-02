import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProviderName, setNPI, setEmail, setPassword, clearRegisterState } from '../../ReduxStore/Slices/Login/registerSlice';
import CentreRectangle from '../../shared/CenterRectangle';
import Container from '../../shared/Container';
import ContentHolder from '../../shared/ContentHolder';
import InputFieldContainer from '../../shared/InputFieldContainer';
import HeaderText from '../../shared/HeaderText';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonTypeOne from ".././shared/ButtonTypeOne";
import LogoHeader from ".././shared/LogoHeader";
import InputField from "../../shared/inputField";
import "../../styles/landing-page/landing-page.css";
import ActionText from '../../shared/ActionText';

const CreateAccount = () => {
  const criteria = useSelector((state) => state.registerState.registerCredentials);
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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
    navigate('/add-locations');
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
    <Container className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <ContentHolder>
          <HeaderText>Create Account</HeaderText>
          <InputFieldContainer>
            <InputField
              className='input-field-type-one'
              value={criteria.providerName}
              placeholder="Provider Name"
              onChange={handleProviderChange}
            />
            <InputField
              className='input-field-type-one'
              value={criteria.npi}
              placeholder="NPI"
              onChange={handleNpiChange}
            />
            <InputField
              className='input-field-type-one'
              value={criteria.email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <InputField
              className='input-field-type-one'
              value={criteria.password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </InputFieldContainer>
          {error && <p className="error-message">{error}</p>}
            <ButtonTypeOne
              onClick={handleCreate}
              text={'Next'}
              classname={'button-style'}
            />
          <ActionText onClick={() => navigate('/')}>
            Already Have an Account?
        </ActionText>   
        </ContentHolder>
      </CentreRectangle>
    </Container>
  );
};

export default CreateAccount;
