import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials as setCriteriaAction } from '../ReduxStore/Slices/Login/loginCredSlice';
import CentreRectangle from '../shared/CentreRectangle';
import { useNavigate } from 'react-router-dom';

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
    console.log('Search for:', { NPI, password });
    // navigate('/PatientList');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1C1C1D' }}>
      <CentreRectangle>
        <div>
        <div>Doctor Login</div>
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
            <button onClick={{handleSearch}}>Search</button>
      </div>
        </div>
      </CentreRectangle>
    </div>
  );
};

export default Landing;
