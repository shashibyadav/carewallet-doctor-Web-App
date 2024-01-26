import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareWalletLogo from './images/CareWalletLogo.png';
import LandingPage from './Components/LandingPage';
import PatientList from './Components/PatientList';
import PatientData from './Components/PatientData';
import Landing from './Components/Landing';
import { store } from './ReduxStore/Setup/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/PatientData" element={<PatientData />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
