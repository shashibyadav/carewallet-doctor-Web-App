import React, {useState} from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useSelector, useDispatch } from 'react-redux';
import { setLocationName, setAddress, setCity, setStateName, setZip, addLocation, clearLocations } from '../../ReduxStore/Slices/Login/locationSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { performLogin } from '../../utils/performLogin';
import CenterRectangle from '../../shared/CenterRectangle';
import ContentHolder from '../../shared/ContentHolder';
import HeaderText from '../../shared/HeaderText';
import InputFieldContainer from '../../shared/InputFieldContainer';
import ActionText from '../../shared/ActionText';
import Container from '../../shared/Container';
import ButtonTypeOne from "../shared/ButtonTypeOne";
import LogoHeader from "../shared/LogoHeader";
import InputField from "../../shared/inputField";
import "../../styles/landing-page/landing-page.css";
import { clearRegisterState } from '../../ReduxStore/Slices/Login/registerSlice';

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
  
  const createAccount = async (accountData, locationData) => {
    const payload = {
      providerName: accountData.providerName,
      npi: accountData.npi,
      email: accountData.email,
      password: accountData.password, 
      locations: locationData.map(location => ({
        locationName: location.locationName,
        address: location.address,
        city: location.city,
        state: location.state,
        zipcode: location.zip,
      })),
    };
    console.log(payload)
  
    try {
      const response = await axiosInstance.post('/doctor/onboarding/createDoctorAccount.ns', payload);
      console.log('Account creation successful:', response.data);
  
      const loginResult = await performLogin(accountData.email, accountData.password);
      
      if (loginResult.success) {
        navigate('/patientList');  
      } else {
        navigate('/');
      }
      
    } catch (error) {
      navigate('/register', { state: { errorMessage: 'Account creation failed. Try again.' } });
    }
  };

  const handleRegister = async () => {
    const accountData = { ...registerCredentials };  
    const locationData = [...locations];  

    await createAccount(accountData, locationData);

    dispatch(clearLocations());
    dispatch(clearRegisterState())
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

  return (
    <Container className={'landing-page'}>
      <LogoHeader />
      <CenterRectangle className='center-rectangle'>
        <ContentHolder>
          <HeaderText>Add Locations</HeaderText>

          <InputFieldContainer>
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
          </InputFieldContainer>
          {error && <p className="error-message">{error}</p>}
            <ButtonTypeOne
              onClick={handleAddLocation}
              text={'Add Location'}
              classname={'button-style'}
            />

            <h4>Added Locations</h4>
            {locations.length > 0 && (
              <ul>
                {locations.map((loc, index) => (
                  <li key={index}>{`${loc.locationName} : ${loc.address}, ${loc.city}, ${loc.state}, ${loc.zip}`}</li>
                ))}
              </ul>
            )}

          {locations.length > 0 && (
              <ButtonTypeOne
                onClick={handleRegister}  
                text={'Register'}
                classname={'button-style'}
              />
          )}
        </ContentHolder>
      </CenterRectangle>
    </Container>
  );
};

export default AddLocations;
