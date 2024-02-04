import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../shared/button.css';
import '../shared/shared.css';
import '../shared/buttonTypeOne.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setPatientDataCriteria as setCriteriaAction } from '../ReduxStore/Slices/Search/patientSlice';

import { brown } from '@mui/material/colors';
import patientimg from '../images/patient_img.png';

import copyicon from '../images/copy_icon.png';
import GreenCheckmark from '../images/GreenCheckmark.png';
import ID from '../images/license.png';
import ButtonTypeOne from '../shared/buttonTypeOne';
import CentreRectangle from '../shared/CentreRectangle';
import "../styles/patient-data/patient-data.css";
import LogoFooter from "./shared/LogoFooter";
import ButtonPatientSearch from "./shared/ButtonPatientSearch";

const accent = brown['400'];

const inputProps = {
  style: {
    height: '5px',
    color: accent,
  },
};



const PatientList = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const [lastName, setLastName] = useState(criteria.lastName);
  const [firstName, setFirstName] = useState(criteria.firstName);
  const [dob, setdob] = useState(criteria.dob);
  const [phoneNumber, setPhoneNumber] = useState(criteria.phoneNumber);
  const [email, setEmail] = useState(criteria.email);
  const [address, setAddress] = useState(criteria.address);
  const [city, setCity] = useState(criteria.city);
  const [zipcode, setZipcode] = useState(criteria.zipcode);
  const [state, setstate] = useState(criteria.state);
  const [insuranceName, setinsuranceName] = useState(criteria.insuranceName);
  const [policyHName, setpolicyHName] = useState(criteria.policyHName);
  const [policyNumber, setpolicyNumber] = useState(criteria.policyNumber);
  const [groupNumber, setgroupNumber] = useState(criteria.groupNumber);
  const [policyHDOB, setpolicyHDOB] = useState(criteria.policyHDOB);
  const [showImage, setShowImage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateState = (newCriteria) => {
    dispatch(setCriteriaAction(newCriteria));
  };

  const handleView = () => {
    updateState({
      ...criteria,
      firstName: firstName,
    });
    console.log('Search for:', { firstName, lastName, dob, phoneNumber, email, address, city, state, zipcode, insuranceName, policyHName, policyNumber, groupNumber, policyHDOB });
    navigate('/PatientData');
  };

  const handleViewId = () => {
    // Toggle the visibility of the image
    setShowImage(!showImage);
  };


  const handleCloseImage = () => {
    setShowImage(false);
  };


  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1C1C1D' }}>
      <CentreRectangle className='center-rectangle-2'>

        <div className='grid-container' >
          <div className='data-grid-1'  >
            <h3 style={{ color: 'white', width: '100%', justifyContent: 'center', textAlign: 'center', fontSize: '1.5rem', fontWeight: '400' }}>
              Patient: <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>Evan Smith</span>
            </h3>

            <img src={patientimg} alt="Care Wallet Logo" style={{ height: '40%', width: '40%', margin: '10px', marginBottom: '2rem' }} />
            <div className='input-container'>
              <img src={copyicon} alt="Copy Icon" className="copy-icon" />
              <input
                className='patientdata-search-fields'
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className='input-container'>
              <img src={copyicon} alt="Copy Icon" className="copy-icon" />
              <input
                className='patientdata-search-fields'
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='data-grid-2'  >
            <div className='data-grid-2-container'  >
              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields patientdata-firstname'
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields'
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>



              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields'
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields'
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields'
                  value={state}
                  placeholder="State"
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>



              <div className='input-container'>
                <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                <input
                  className='patientdata-search-fields'
                  value={zipcode}
                  placeholder="Zip Code"
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>



              <div className="search-action">
                <ButtonTypeOne text='View ID' className='button-type-one' onClick={handleViewId} ></ButtonTypeOne>

              </div>
            </div>
          </div>
          <div className='data-grid-3'  >
            <div className='data-grid-3-container'  >
              {showImage && (
                <>
                  <div className="user-id-image-container">
                    <img src={ID} alt="Your Image" className="user-id-image" />
                  </div>
                </>
              )}

              {!showImage && (
                <>

                  <div className='status-container'>

                    <img src={GreenCheckmark} alt="Activity Icon" className="active-icon" />
                    <div className="active-status" ><h3 >Active:01/24/2024</h3></div>

                  </div>

                  <div className='input-container'>
                    <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                    <input
                      className='patientdata-search-fields'
                      value={insuranceName}
                      placeholder="Insurance Name"
                      onChange={(e) => setinsuranceName(e.target.value)}
                    />
                  </div>

                  <div className='input-container'>
                    <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                    <input
                      className='patientdata-search-fields'
                      value={policyHName}
                      placeholder="Policyholder Name"
                      onChange={(e) => setpolicyHName(e.target.value)}
                    />
                  </div>

                  <div className='input-container'>
                    <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                    <input
                      className='patientdata-search-fields'
                      value={policyNumber}
                      placeholder="Policy #"
                      onChange={(e) => setpolicyNumber(e.target.value)}
                    />
                  </div>

                  <div className='input-container'>
                    <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                    <input
                      className='patientdata-search-fields'
                      value={groupNumber}
                      placeholder="Group #"
                      onChange={(e) => setgroupNumber(e.target.value)}
                    />
                  </div>

                  <div className='input-container'>
                    <img src={copyicon} alt="Copy Icon" className="copy-icon" />
                    <input
                      className='patientdata-search-fields'
                      value={policyHDOB}
                      placeholder="Policyholder DOB"
                      onChange={(e) => setpolicyHDOB(e.target.value)}
                    />
                  </div>



                  <div className="search-action">
                    <ButtonTypeOne text='View Insurance' className='patientdata-button-type-one'  ></ButtonTypeOne>
                  </div>
                  <div className="search-action">
                    <ButtonTypeOne text='View Activity Log' className='patientdata-button-type-one'  ></ButtonTypeOne>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>

      </CentreRectangle>
      <ButtonPatientSearch classname={`referrals-button`} onClick={() => { }} text={`Referrals`} />
      <ButtonPatientSearch classname={`search-button`} onClick={() => { }} text={`Patient Search`} />
      <LogoFooter />
    </div>
  );
}
export default PatientList;
