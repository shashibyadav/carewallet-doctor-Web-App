import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareWalletLogo from './images/CareWalletLogo.png';
import LandingPage from './Components/LandingPage';
import PatientSearch from './Components/PatientSearch';
import PatientList from './Components/PatientList';
import PatientData from './Components/PatientData';
import SignUp from './Components/SignUp';

import Landing from './Components/LandingPage';
import { store } from './ReduxStore/Setup/Store';
import { Provider } from 'react-redux';
import CreateAccount from './Components/SignUp';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/LandingPage" element={<PatientSearch />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/PatientData" element={<PatientData />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
