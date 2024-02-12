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
import Insurance_Front from '../images/insurance_front.png';
import Insurance_Back from '../images/insurance_back.png';
import ButtonTypeOne from '../shared/buttonTypeOne';
import CentreRectangle from '../shared/CentreRectangle';
import "../styles/patient-activity/patient-activity.css";
import LogoFooter from "./shared/LogoFooter";
import ButtonPatientSearch from "./shared/ButtonPatientSearch";
import LogOutButton from "./shared/ButtonLogOut.jsx";

const accent = brown['400'];

const inputProps = {
  style: {
    height: '5px',
    color: accent,
  },
};



const PatientActivity = () => {
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
    console.log('Search for:', { firstName, lastName, dob, phoneNumber, email, address, city, state, zipcode});
    navigate('/PatientData');
  };


  const handlePayment = () => {

  };

  const handleViewPayment = () => {

  };

  const handleAutoPaymentReminder = () => {

  };




  return (

    <div className={`patient-list-page`}>
 
      <h1 className="page-name"> ACTIVITY LOG  </h1>

      <CentreRectangle className='patientdata-center-rectangle'>

        <div className='grid-container' >
          <div className='data-grid-1'  >
            <h3 className="patient-name">
              Patient: <span >Evan Smith</span>
            </h3>

            <img src={patientimg} alt="Patient-Image" className="patient-image" />
            <div className="contact-info">
                <p className="patientactivity-name">Evan Smith</p>
               
                <p className="patientactivity-street">107 RICHMOND CT N HOLMDEL, NJ 07733</p>
                <p className="patientactivity-country">UNITED STATES</p>
                <p className="patientactivity-mobilenumber">732-477-4149</p>
                <p className="patientactivity-email">evan@carewallet.me</p>
            </div>

          </div>
          <div className='data-grid-2'  >
            <div className='data-grid-2-container'  >
            <div className="centered-button">
                    <ButtonTypeOne
                        onClick={handleAutoPaymentReminder}
                        text={'Automate Payment Reminder'}
                        className ={'button-type-payment'}
                    />
                    </div>
            <CentreRectangle className='center-rectangle-3' >
                
            
            <div className="table-container">
                
                <table className='center-rectangle-3-table' >
                  <thead>
                    <tr className='table-column-hover'>
                      <th className='table-column-header'>Date Of visit</th>
                      <th className='table-column-header'>Doctor</th>
                      <th className='table-column-header'>Doctor #</th>
                      <th className='table-column-header'>Payment</th>
                    </tr>
                  </thead>
                  <tbody className='table-column-body'>
                 
                    <tr className='table-column-hover'>
                      <td className='table-column'>Date of Visit: 09/17/2022</td>
                      <td className='table-column'>Pain: Dr. O’Hara</td>
                      <td className='table-column'>(987) 654-3210</td>
                      <td className='table-column'><div className="centered-button">
                    <ButtonTypeOne
                        onClick={handlePayment}
                        text={'PAY'}
                        className={'patientlist-button-type-one'}
                    />
                    </div>
                    </td>
                     
                    </tr>
                    <tr className='table-column-hover'>
                      <td className='table-column'>Date of Visit: 09/17/2022</td>
                      <td className='table-column'>Pain: Dr. O’Hara</td>
                      <td className='table-column'>(987) 654-3210</td>
                      <td className='table-column'><div className="centered-button">
                    <ButtonTypeOne
                    
                        text={'PROCESSING'}
                        className={'patientlist-button-type-one'}
                    />
                    </div>
                    </td>
                     
                    </tr>
  
                    <tr className='table-column-hover'>
                      <td className='table-column'>Date of Visit: 09/17/2022</td>
                      <td className='table-column'>Pain: Dr. O’Hara</td>
                      <td className='table-column'>(987) 654-3210</td>
                      <td className='table-column'><div className="centered-button">
                    <ButtonTypeOne
                        onClick={handleViewPayment}
                        text={'VIEW PAYMENT'}
                        className={'patientlist-button-type-one'}
                    />
                    </div>
                    </td>
                     
                    </tr>
             
                  </tbody>
                </table>
                </div>
            
            </CentreRectangle>
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
export default PatientActivity;
