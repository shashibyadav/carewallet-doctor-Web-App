import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials as setCriteriaAction } from '../ReduxStore/Slices/Login/loginCredSlice';
import CentreRectangle from '../shared/CentreRectangle';
import { useNavigate } from 'react-router-dom';
import ButtonTypeOne from "./ButtonTypeOne";
import "../styles/landing-page/landing-page.css"

const Landing = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const [NPI, setNPI] = useState(criteria.NPI);
  const [password, setPassword] = useState(criteria.password); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const handleSearch = () => {
    updateState({
      ...criteria,
      password: password,
    });
    // console.log('Search for:', { NPI, password });
    navigate('/LandingPage');
  };

  return (
    <div className={'landing-page'}>
      <CentreRectangle>
        <div>
        <div className={'header-text'}>Doctor Login</div>
          <input
            className='search-fields'
            type="text"
            placeholder="NPI"
            value={NPI}
            onChange={(e) => setNPI(e.target.value)}
          />
          <input
            className='search-fields'
            type="text"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="search-action">
            <button onClick={handleSearch}>Login</button>
          </div>
        </div>
      </CentreRectangle>

      <ButtonTypeOne
          onClick={() => {
            console.log("Shashi")
          }}
          text={'next'}
          classname={'button-style'}
      />
    </div>
  );
};

export default Landing;
