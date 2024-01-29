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

const LandingPage = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const [NPI, setNpi] = useState(criteria.NPI);
  const [password, setPassword] = useState(criteria.password); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const handleSearch = () => {
    updateState({
      ...criteria,
      NPI: NPI,
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


  return (
    <div className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <div className={`content-holder`}>
        <div className={'header-text'}>Doctor Login</div>
        <div className={'input-field-container'}>
           <InputField
              className='search-fields'
              value={NPI}
              placeholder="NPI"
              onChange={handleNpiChange}
            />

          <InputField
                className='search-fields'
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
          </div>
        </div>
      </CentreRectangle>

    </div>
  );
};

export default LandingPage;
