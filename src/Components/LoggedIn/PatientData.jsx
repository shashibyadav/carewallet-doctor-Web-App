import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../shared/button.css';
import '../../shared/shared.css';
import '../../shared/buttonTypeOne.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setPatientDataCriteria as setCriteriaAction } from '../../ReduxStore/Slices/Search/patientSlice.js';

import { brown } from '@mui/material/colors';
import patientimg from '../../images/patient_img.png';

import copyicon from '../../images/copy_icon.png';
import GreenCheckmark from '../../images/GreenCheckmark.png';
import ID from '../../images/license.png';
import Insurance_Front from '../../images/insurance_front.png';
import Insurance_Back from '../../images/insurance_back.png';
import ButtonTypeOne from '../../shared/buttonTypeOne.jsx';
import CentreRectangle from '../../shared/CentreRectangle.jsx';
import "../../styles/patient-data/patient-data.css";
import LogoFooter from "../shared/LogoFooter.jsx";
import ButtonPatientSearch from "../shared/ButtonPatientSearch.jsx";
import LogOutButton from "../shared/ButtonLogOut.jsx";

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
  const [showId, setShowId] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
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
    setShowId(!showId);
  };

  const handleViewInsurance = () => {
    // Toggle the visibility of the image
    setShowInsurance(!showInsurance);
  };


  // const handleCloseImage = () => {
  //   setShowImage(false);
  // };


  return (
   
     <div className={`patient-list-page`}>
      <LogOutButton />
      <CentreRectangle className='patientdata-center-rectangle'>

        <div className='grid-container' >
          <div className='data-grid-1'  >
            <h3 class="patient-name">
              Patient: <span >Evan Smith</span>
            </h3>

            <img src={patientimg} alt="Patient-Image" class="patient-image" />
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

              {showInsurance && (
                <> 
                <div className="user-insurance-image-container">

                    <div className="user-insurance-front-container">
                    <img src={Insurance_Front} alt="Your Image" className="user-insurance-image" />
                  </div>
                  <div className="user-insurance-back-container">
                    <img src={Insurance_Back} alt="Your Image" className="user-insurance-image" />
                  </div>
                  </div>
                </>
              )}

              {!showInsurance && (
                <>

            <div className='input-form-container'>

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
              </>
              )}
            </div>
          </div>
          <div className='data-grid-3'  >
            <div className='data-grid-3-container'  >
              {showId && (
                <>
                  <div className="user-id-image-container">
                    <img src={ID} alt="Your Image" className="user-id-image" />
                  </div>
                </>
              )}

              {!showId && (
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
                    <ButtonTypeOne text='View Insurance' className='patientdata-button-type-one'   onClick={handleViewInsurance} > </ButtonTypeOne>
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
