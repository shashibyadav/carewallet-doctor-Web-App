import * as React from 'react';
import TextField from '@mui/material/TextField';
import CentreRectangle2 from '../shared/CentreRectangle2';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import '../shared/button.css';
import '../shared/shared.css';
import '../shared/buttonTypeOne.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setPatientDataCriteria as setCriteriaAction } from '../ReduxStore/Slices/Search/patientSlice';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { brown } from '@mui/material/colors';
import patientimg from '../images/patient_img.png';
import GreenCheckmark from '../images/GreenCheckmark.png';
import ButtonTypeOne from '../shared/buttonTypeOne';

const accent = brown['400'];

const inputProps = {
  style: {
    height: '5px',
    color: accent,
  },
};

const whiteTheme = createTheme({ palette: { primary: { main: accent } } })

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

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'f8f6f1' }}>
      <CentreRectangle2>
        <ThemeProvider theme={whiteTheme}>
          <Grid style={{ padding: '2%'}} container>
            <Grid item xs={4}>
              <h3 style={{ color: 'brown' }}>Patient: Evan Smith</h3>
              <img src={patientimg} alt="Care Wallet Logo" style={{ height: '40%', width: '60%', margin: '10px' }} />
              <TextField margin="normal" label="Phone Number" inputProps={inputProps} value={phoneNumber} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setPhoneNumber(e.target.value)} />
              <TextField margin="normal" label="Email" inputProps={inputProps} value={email} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="First Name" margin="normal" className='input-field' inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <TextField margin="normal" label="Last Name" inputProps={inputProps} value={lastName} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setLastName(e.target.value)} />
              <TextField margin="normal" label="Date of Birth" inputProps={inputProps} value={dob} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setdob(e.target.value)} />
              <TextField margin="normal" label="Address" inputProps={inputProps} value={address} style={{width:'80%' ,marginRight:'5px'}}  onChange={(e) => setAddress(e.target.value)} />
              <TextField margin="normal" label="City" inputProps={inputProps} value={city} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setCity(e.target.value)} />
              <TextField margin="normal" label="Zip Code" inputProps={inputProps} value={zipcode} style={{width:'80%' ,marginRight:'5px'}} onChange={(e) => setZipcode(e.target.value)} />
              <div className="search-action">
          <ButtonTypeOne style='button-style' text='View ID' className='button-type-one'  ></ButtonTypeOne>
          <div style={{display:'flex',marginRight:'2px' ,bottom:'0px',alignItems:'center'}}>
        <div style={{marginRight:'10px'}}><ButtonTypeOne text='Referrals' className='button-style'></ButtonTypeOne></div>
        <ButtonTypeOne text='Patient Search' className='button-style'></ButtonTypeOne>
      </div>
      </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{display:'flex'}}><img src={GreenCheckmark} alt="GreenCheckmark" style={{ height: '20%', width: '20%', margin: '10px' }} /><h3 style={{color:'green'}}>Active:01/24/2024</h3></div>
              <TextField margin="normal" label="State" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}} value={state} onChange={(e) => setstate(e.target.value)} />
              <TextField margin="normal" label="Insurance Name" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}} value={insuranceName} onChange={(e) => setinsuranceName(e.target.value)} />
              <TextField margin="normal" label="Policy Holder DOB" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}}  value={policyHDOB} onChange={(e) => setpolicyHDOB(e.target.value)} />
              <TextField margin="normal" label="Policy Name" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}} value={policyHName} onChange={(e) => setpolicyHName(e.target.value)} />
              <TextField margin="normal" label="Group Number" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}}  value={groupNumber} onChange={(e) => setgroupNumber(e.target.value)} />
              <TextField margin="normal" label="Policy Number" inputProps={inputProps} style={{width:'80%' ,marginRight:'5px'}}  value={policyNumber} onChange={(e) => setpolicyNumber(e.target.value)} />
              <div className="search-action">
            <ButtonTypeOne text='View Insurance' className='button-type-one'  ></ButtonTypeOne>
      </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CentreRectangle2>
    </div>
  );
}
export default PatientList;
