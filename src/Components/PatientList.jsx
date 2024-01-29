import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../shared/CentreRectangle';
import '../shared/button.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { setPatientCriteria as setCriteriaAction } from '../ReduxStore/Slices/Search/searchSlice';
import { brown } from '@mui/material/colors';
import "../styles/patient-list/patient-list.css";
import InputField from "../shared/inputField";
import ButtonTypeOne from "./shared/ButtonTypeOne";



const accent = brown['400']; 


const whiteTheme = createTheme({ palette: { primary: {main:accent} } })

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
    console.log('Search for:', { firstName,lastName, dob });
    navigate('/PatientData');
  };
  
  function createData(firstName,lastName, dob, patientNumber) {
    return { firstName,lastName, dob, patientNumber};
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
  
  
  
  const rows = [
    createData('John','Smith', '12-01-2022', '734-221-3024'),
    createData('John', 'Smith', '12-01-2022', '734-221-3024'),
    createData('John', 'Smith', '12-01-2022', '734-221-3024'),
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1C1C1D' }}> 
        <CentreRectangle className='center-rectangle-2'>
        <ThemeProvider theme={whiteTheme}>
          <div className='input-fields-container'>

          <InputField
                className='search-fields'
                value={firstName}
                placeholder="First Name"
                onChange={handleFirstNameChange}
              />

            
          <InputField
                className='search-fields lastname-field'
                value={lastName}
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />

          <InputField
                className='search-fields  dob-field'
                value={dob}
                placeholder="Date of Birth (calendar)"
                onChange={handleDOBChange}
              />
          
          </div>
          <CentreRectangle className='center-rectangle-3' >
          <TableContainer component={Paper}  className='center-rectangle-3-table' >
          <Table className='center-rectangle-3-table' sx={{ minWidth: 400 }} aria-label="simple table" >
            <TableHead >
              <TableRow >
                <TableCell  style={{ color: 'white' }}  align="center">Patient First Name</TableCell>
                <TableCell  style={{ color: 'white' }}  align="center">Patient Last Name</TableCell>
                <TableCell  style={{ color: 'white' }} align="center">Date of Birth</TableCell>
                <TableCell  style={{ color: 'white' }} align="center">Patient #</TableCell>
                <TableCell  style={{ color: 'white' }} align="center">View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody color='white'>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th"  scope="row"  style={{ color: 'white' }} align="center">
                    {row.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row"  style={{ color: 'white' }} align="center">
                    {row.lastName}
                  </TableCell>
                  <TableCell  style={{ color: 'white' }} align="center">{row.dob}</TableCell>
                  <TableCell  style={{ color: 'white' }} align="center">{row.patientNumber}</TableCell>
                  <TableCell  style={{ color: 'white' }} align='center'>
                  <div className="centered-button">
                  <ButtonTypeOne
                      onClick={handleView}
                      text={'View'}
                      classname={'button-style'}
                  />
                  </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </CentreRectangle>
        {/* <div style={{position:'absolute', left:'45%' , bottom:'25px'}} className="search-action">
        <button>Patient Search</button></div> */}
        {/* <div style={{position:'absolute', right:'5%' , top:'5%'}} className="search-action">
        <button>Log Out</button></div> */}
        </ThemeProvider>
        </CentreRectangle>

        </div>
      );
}
export default PatientList;
