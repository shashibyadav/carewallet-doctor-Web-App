import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocationName, setAddress, setCity, setStateName, setZip, addLocation, clearLocations } from '../ReduxStore/Slices/Login/locationSlice';
import { useNavigate } from 'react-router-dom';
import CentreRectangle from '../shared/CentreRectangle';
import ButtonTypeOne from "./shared/ButtonTypeOne";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import "../styles/landing-page/landing-page.css";

const AddLocations = () => {
  const { locationName, address, city, state, zip, locations } = useSelector((state) => state.locationsState);  // Access location data
  const registerCredentials = useSelector((state) => state.registerState.registerCredentials);  // Access account data
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddLocation = () => {
    if (locationName && address && city && state && zip) {
      dispatch(addLocation());
    } else {
      console.log("Please fill in all fields to add a location.");
    }
  };

  const handleRegister = () => {
    // Combine the account and locations data
    const accountData = { ...registerCredentials };  // Account data from registerState
    const locationData = [...locations];  // Location data from locationsState

    // Call the backend or handle the data
    sendDataToBackend(accountData, locationData);

    // Clear locations after register (optional)
    dispatch(clearLocations());

    // Redirect after registration
    navigate('/');
  };

  // Dummy function to handle backend submission
  const sendDataToBackend = (accountData, locationData) => {
    console.log("Account Data:", accountData);  // Log or process account data
    console.log("Location Data:", locationData);  // Log or process location data
    // Add API call here
  };

  return (
    <div className={'landing-page'}>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <div className={`content-holder`}>
          <div className={'header-text'}>Add Locations</div>

          <div className={'input-field-container'}>
            <InputField
              className='landingpage-search-fields'
              value={locationName}
              placeholder="Location Name"
              onChange={(value) => dispatch(setLocationName(value))}
            />
            <InputField
              className='landingpage-search-fields'
              value={address}
              placeholder="Address"
              onChange={(value) => dispatch(setAddress(value))}
            />
            <InputField
              className='landingpage-search-fields'
              value={city}
              placeholder="City"
              onChange={(value) => dispatch(setCity(value))}
            />
            <InputField
              className='landingpage-search-fields'
              value={state}
              placeholder="State"
              onChange={(value) => dispatch(setStateName(value))}
            />
            <InputField
              className='landingpage-search-fields'
              value={zip}
              placeholder="Zip"
              onChange={(value) => dispatch(setZip(value))}
            />
          </div>

          <div className={`button-holder`}>
            <ButtonTypeOne
              onClick={handleAddLocation}
              text={'Add Location'}
              classname={'button-style'}
            />
          </div>

          {/* Display the added locations */}
          <div className={'location-list'}>
            <h4>Added Locations:</h4>
            {locations.length > 0 ? (
              <ul>
                {locations.map((loc, index) => (
                  <li key={index}>{`${loc.locationName} - ${loc.address}, ${loc.city}, ${loc.state}, ${loc.zip}`}</li>
                ))}
              </ul>
            ) : (
              <p>No locations added yet.</p>
            )}
          </div>

          <div className={`button-holder`}>
            <ButtonTypeOne
              onClick={handleRegister}  // Call handleRegister to process account and location data
              text={'Register'}
              classname={'button-style'}
            />
          </div>
        </div>
      </CentreRectangle>
    </div>
  );
};

export default AddLocations;
