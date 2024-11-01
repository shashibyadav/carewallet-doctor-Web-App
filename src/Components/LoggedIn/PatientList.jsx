import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../../shared/CentreRectangle.jsx';
import '../../shared/button.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setPatientCriteria as setCriteriaAction } from '../../ReduxStore/Slices/Search/searchSlice.js';
import "../../styles/patient-list/patient-list.css";
import InputField from "../../shared/inputField.jsx";
import ButtonTypeOne from "../shared/ButtonTypeOne.jsx";
import ButtonPatientSearch from "../shared/ButtonPatientSearch.jsx";
import LogoFooter from "../shared/LogoFooter.jsx";
import LogOutButton from "../shared/ButtonLogOut.jsx";



const PatientList = () => {
  const criteria = useSelector((state) => state.loginState.searchCriteria);
  const [lastName, setLastName] = useState(criteria.lastName);
  const [firstName, setFirstName] = useState(criteria.firstName);
  const [dob, setdob] = useState(criteria.dob);
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
    console.log('Search for:', { firstName, lastName, dob });
    navigate('/PatientData');
  };

  function createData(firstName, lastName, dob, patientNumber) {
    return { firstName, lastName, dob, patientNumber };
  }

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleDOBChange = (value) => {
    setdob(value);
  };





  return (
    <div className={`patient-list-page`}>
      <LogOutButton />
      <CentreRectangle className='patientlist-center-rectangle'>
   
          <div className='input-fields-container'>

            <InputField
              className='patientlist-search-fields'
              value={firstName}
              placeholder="First Name"
              onChange={handleFirstNameChange}
            />


            <InputField
              className='patientlist-search-fields lastname-field'
              value={lastName}
              placeholder="Last Name"
              onChange={handleLastNameChange}
            />

            <InputField
              className='patientlist-search-fields  dob-field'
              value={dob}
              placeholder="Date of Birth (calendar)"
              onChange={handleDOBChange}
            />

          </div>
          <CentreRectangle className='center-rectangle-3' >
            
          <div className="table-container">
              <table className='center-rectangle-3-table' >
                <thead>
                  <tr className='table-column-hover'>
                    <th className='table-column-header'>Patient First Name</th>
                    <th className='table-column-header'>Patient Last Name</th>
                    <th className='table-column-header'>Date of Birth</th>
                    <th className='table-column-header'>Patient #</th>
                    <th className='table-column-header'>View Details</th>
                  </tr>
                </thead>
                <tbody className='table-column-body'>
               
                  <tr className='table-column-hover'>
                    <td className='table-column'>John</td>
                    <td className='table-column'>Doe</td>
                    <td className='table-column'>1990-01-01</td>
                    <td className='table-column'>12345</td>
                    <td className='table-column'><div className="centered-button">
                  <ButtonTypeOne
                      onClick={handleView}
                      text={'View'}
                      className={'patientlist-button-type-one'}
                  />
                  </div>
                  </td>
                   
                  </tr>
                  <tr className='table-column-hover'>
                    <td className='table-column'>Jane</td>
                    <td className='table-column'>Smith</td>
                    <td className='table-column'>1985-05-15</td>
                    <td className='table-column'>67890</td>
                    <td className='table-column'> <div className="centered-button">
                  <ButtonTypeOne
                      onClick={handleView}
                      text={'View'}
                      className={'patientlist-button-type-one'}
                  />
                  </div>
                  </td>
                  </tr>

                  < tr className='table-column-hover'>
                    <td className='table-column'>Jane</td>
                    <td className='table-column'>Smith</td>
                    <td className='table-column'>1985-05-15</td>
                    <td className='table-column'>67890</td>
                    <td className='table-column'> <div className="centered-button">
                  <ButtonTypeOne
                      onClick={handleView}
                      text={'View'}
                      className={'patientlist-button-type-one'}
                  />
                  </div>
                  </td>
                  </tr>
           
                </tbody>
              </table>
              </div>
          
          </CentreRectangle>
     
      </CentreRectangle>
      <ButtonPatientSearch className={`button-type-two`} onClick={() => { }} text={`Patient Search`} />

      <LogoFooter />

    </div>
  );
}
export default PatientList;
