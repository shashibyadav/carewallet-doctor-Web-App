import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials as setCriteriaAction } from '../../ReduxStore/Slices/Login/loginCredSlice';
import CentreRectangle from '../../shared/CentreRectangle';
import HeaderText from '../../shared/HeaderText';
import ContentHolder from '../../shared/ContentHolder';
import InputFieldContainer from '../../shared/InputFieldContainer';
import { useNavigate } from 'react-router-dom';
import ButtonTypeOne from "../shared/ButtonTypeOne";
import "../../styles/landing-page/landing-page.css";
import LogoHeader from "../shared/LogoHeader";
import InputField from "../../shared/inputField";
import { performLogin } from '../../utils/performLogin';

const LandingPage = () => {
  const criteria = useSelector((state) => state.loginCredState.loginCredentials);
  const [email, setEmail] = useState(criteria.email);
  const [password, setPassword] = useState(criteria.password); 
  const [error, setError] = useState(null); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const handleSearch = async () => {
    updateState({
      ...criteria,
      email: email,
      password: password,
    });

    try {
      const loginResult = await performLogin(email, password); 
      if (loginResult.success) {
        console.log('Doctor logged in successfully');
        navigate('/patientlist'); 
      } else {
        setError('Login failed. Please check your email and password.'); 
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

 

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };


  return (
    <div className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
      <ContentHolder>
      <HeaderText>Doctor Login</HeaderText>
        <InputFieldContainer>
           <InputField
              className='landingpage-search-fields'
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
            />

          <InputField
                className='landingpage-search-fields'
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
          </InputFieldContainer>
          <div className={`button-holder`}>
            <ButtonTypeOne
                onClick={handleSearch}
                text={'Login'}
                classname={'button-style'}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className={'create-account-text'} onClick={() => navigate('/register')}>
              Create An Account
        </div>     
        </ContentHolder>
      </CentreRectangle>

    </div>
  );
};

export default LandingPage;
