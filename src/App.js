import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareWalletLogo from './images/CareWalletLogo.png';
import LandingPage from './Components/LandingPage';
import PatientSearch from './Components/PatientSearch';
import PatientList from './Components/PatientList';
import PatientData from './Components/PatientData';
import PatientActivity from './Components/PatientActivity';
import { store } from './ReduxStore/Setup/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<PatientSearch />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/PatientData" element={<PatientData />} />
        <Route path="/PatientActivity" element={<PatientActivity />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
