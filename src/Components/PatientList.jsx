import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CentreRectangle2 from '../shared/CentreRectangle2';
import { useSelector, useDispatch } from 'react-redux';
import '../shared/button.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { setPatientCriteria as setCriteriaAction } from '../ReduxStore/Slices/Search/searchSlice';
import { brown } from '@mui/material/colors';

const CentreRectangle3 = ({ children }) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        width: '70%',
        height: '50%',
        background: 'rgba(217, 217, 217, 0)',
        borderRadius: '10px',
        border: '3px white solid',
        color: 'white',
      }}>
        {children}
    </div>
    </div>
  );
};

const accent = brown['400']; 

const inputProps = {
  style: {
    height: '5px',
    color: accent, 
  },
};


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
  
  const rows = [
    createData('John','Smith', '12-01-2022', '734-221-3024'),
    createData('John', 'Smith', '12-01-2022', '734-221-3024'),
    createData('John', 'Smith', '12-01-2022', '734-221-3024'),
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#f8f6f1' }}> 
        <CentreRectangle2>
        <ThemeProvider theme={whiteTheme}>
          <div style={{ padding:'5%', alignItems:'center'}}>
          <TextField label="First Name" margin="normal" inputProps={inputProps} value={firstName} style={{marginRight:'5px'}} onChange={(e) => setFirstName(e.target.value)}/>
          <TextField id="outlined-basic"  margin="normal"label="Last Name" variant="outlined" color="primary" inputProps={inputProps}  value={lastName} style={{marginRight:'5px'}} onChange={(e) => setLastName(e.target.value)}/>
          <TextField id="outlined-basic"  margin="normal" label="Date of Birth" variant="outlined"  color="primary" inputProps={inputProps} value={dob} onChange={(e) => setdob(e.target.value)}/>
          </div>
          <CentreRectangle3>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Patient First Name</TableCell>
                <TableCell>Patient Last Name</TableCell>
                <TableCell align="right">Date of Birth</TableCell>
                <TableCell align="right">Patient #</TableCell>
                <TableCell align="right">View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.lastName}
                  </TableCell>
                  <TableCell align="right">{row.dob}</TableCell>
                  <TableCell align="right">{row.patientNumber}</TableCell>
                  <TableCell align='right'>
                  <div className="search-action">
                    <button onClick={handleView}>View</button>
                  </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </CentreRectangle3>
        <div style={{position:'absolute', left:'45%' , bottom:'25px'}} className="search-action">
        <button>Patient Search</button></div>
        <div style={{position:'absolute', right:'5%' , top:'5%'}} className="search-action">
        <button>Log Out</button></div>
        </ThemeProvider>
        </CentreRectangle2>
        </div>
      );
}
export default PatientList;
