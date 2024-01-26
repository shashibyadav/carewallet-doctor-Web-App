import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../shared/CentreRectangle';
import { setPatientSearchCriteria as setCriteriaAction } from '../ReduxStore/Slices/Login/loginSlice';

const LandingPage = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
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
        firstName : firstName,
    })
    console.log('Search for:', { lastName, firstName, phone, dob });
    navigate('/PatientList');
  };

  return (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1C1C1D' }}> 
        <CentreRectangle> 
        <div >
        <div style={{padding:'5%'}} className='heading'>Patient Search</div>
        <input
        style={{width:'50%'}}
        className="search-fields"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
        style={{width:'50%'}}
          className="search-fields"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
        style={{width:'50%'}}
        className="search-fields"
          type="text"
          placeholder="Patient Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
        style={{width:'51%',padding:'1.8%'}}
          className="search-fields"
          type="date"
          placeholder="Date of Birth (calendar)"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <div className="search-action">
          <button style={{marginTop:'5%'}} onClick={handleSearch}>SEARCH</button>
      </div>
      </div>
        </CentreRectangle>
        </div>
  );
};

export default LandingPage;
