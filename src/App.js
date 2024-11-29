import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SetupConfig from './Components/setup/SetupApp';
import { store } from './ReduxStore/Setup/Store';
import allRoutes from './routes/allRoutes';
import pageClasses from './config/pageClasses.json'
import withPageClass from './HOC/withPageClass';
import LandingPage from './Components/Register/LandingPage';
import SignUp from './Components/Register/SignUp';
import AddLocations from './Components/Register/AddLocations';
import PatientSearch from './Components/LoggedIn/PatientSearch';
import PatientList from './Components/LoggedIn/PatientList';
import PatientData from './Components/LoggedIn/PatientData';
import './styles/shared/global-styles.css'

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
        <div className="carewallet-global">
          <Routes>
            {allRoutes.map((route, index) => {
              const Component = components[route.element];
              const PageWithClass = withPageClass(Component, pageClasses[route.path]);
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<PageWithClass />}
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
