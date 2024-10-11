import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocationName, setAddress, setCity, setStateName, setZip, addLocation, clearLocations } from '../ReduxStore/Slices/Login/locationSlice';
import { useNavigate } from 'react-router-dom';
import CentreRectangle from '../shared/CentreRectangle';
import ButtonTypeOne from "./shared/ButtonTypeOne";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import "../styles/landing-page/landing-page.css";

const AddLocations = () => {
  const { locationName, address, city, state, zip, locations } = useSelector((state) => state.locationsState); 
  const registerCredentials = useSelector((state) => state.registerState.registerCredentials);  
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleAddLocation = () => {
    const validationError = validateAddressFields(locationName, address, city, state, zip);

    if (validationError) {
      setError(validationError);  
      return;
    }

    dispatch(addLocation());
    setError(null)
  };
  

  const handleRegister = () => {
    const accountData = { ...registerCredentials };  
    const locationData = [...locations];  

    // place holdeer for backend integration 
    sendDataToBackend(accountData, locationData);
    dispatch(clearLocations());
    navigate('/');
  };

  const validateAddressFields = (locationName, address, city, state, zip) => {
    const statePattern = /^[A-Z]{2}$/;
    const zipPattern = /^[0-9]{5}$/;

    if (locationName.length < 3) {
      return 'Enter a valid Location Name';
    }
  
    if (address.length < 5) {
      return 'Enter a valid Address';
    }
  
    if (!city || city.length < 3) {
      return 'Enter a Valid City';
    }
  
    if (!statePattern.test(state)) {
      return 'Please enter a valid 2-letter state abbreviation';
    }
  
    if (!zipPattern.test(zip)) {
      return 'Please enter a valid 5-digit zip code';
    }
  
    return null;  
  };
  
  const sendDataToBackend = (accountData, locationData) => {
    console.log("Account Data:", accountData);  
    console.log("Location Data:", locationData);  
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
              className='landingpage-search-fields third'
              value={city}
              placeholder="City"
              onChange={(value) => dispatch(setCity(value))}
            />
            <InputField
              className='landingpage-search-fields third'
              value={state}
              placeholder="State"
              onChange={(value) => dispatch(setStateName(value))}
            />
            <InputField
              className='landingpage-search-fields third'
              value={zip}
              placeholder="Zip"
              onChange={(value) => dispatch(setZip(value))}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className={`button-holder`}>
            <ButtonTypeOne
              onClick={handleAddLocation}
              text={'Add Location'}
              classname={'button-style'}
            />
          </div>

          <div className={'location-list'}>
            <h4>Added Locations</h4>
            {locations.length > 0 && (
              <ul>
                {locations.map((loc, index) => (
                  <li key={index}>{`${loc.locationName} : ${loc.address}, ${loc.city}, ${loc.state}, ${loc.zip}`}</li>
                ))}
              </ul>
            )}
          </div>

          {locations.length > 0 && (
            <div className={`button-holder`}>
              <ButtonTypeOne
                onClick={handleRegister}  
                text={'Register'}
                classname={'button-style'}
              />
            </div>
          )}
        </div>
      </CentreRectangle>
    </div>
  );
};

export default AddLocations;
