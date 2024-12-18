import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SetupConfig from './Components/setup/SetupApp';
import { store } from './ReduxStore/Setup/Store';
import pages from './config/pages.json';
import withPageClasses from './HOC/withPageClasses';
import LandingPage from './Components/Register/LandingPage';
import SignUp from './Components/Register/SignUp';
import AddLocations from './Components/Register/AddLocations';
import PatientSearch from './Components/LoggedIn/PatientSearch';
import PatientList from './Components/LoggedIn/PatientList';
import PatientData from './Components/LoggedIn/PatientData';

const components = {
  LandingPage,
  SignUp,
  AddLocations,
  PatientSearch,
  PatientList,
  PatientData,
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <SetupConfig />
        <Routes>
          {Object.entries(pages).map(([element, config], index) => {
            const Component = components[element];
            const PageWithClasses = withPageClasses(Component, config.classes);

            return (
              <Route
                key={index}
                path={config.path}
                element={<PageWithClasses />}
              />
            );
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
