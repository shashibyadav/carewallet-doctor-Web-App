import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CentreRectangle from '../../shared/CentreRectangle';
import HeaderText from '../../shared/HeaderText';
import ContentHolder from '../../shared/ContentHolder';
import LogoHeader from '../shared/LogoHeader';
import '../../styles/landing-page/landing-page.css';
import { useNavigate } from 'react-router-dom';

import {
  setState,
  setActiveLocation,
  selectLocations,
} from '../../ReduxStore/Slices/Login/homePageSlice';

import { loadDoctorAccountData } from '../../utils/commonUtils';

const Locations = () => {
    // to do: implement add-locations and change location api
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const locations = useSelector(selectLocations);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountData = await loadDoctorAccountData();
        dispatch(setState(accountData));
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleLocationClick = (loc) => {
    dispatch(setActiveLocation(loc));
    navigate('/patient-search')
  };

  return (
    <div className='landing-page'>
      <LogoHeader />
      <CentreRectangle className='center-rectangle'>
        <ContentHolder>
          <HeaderText text="Select a Location" />

          {locations && locations.length > 0 ? (
            <ul>
              {locations.map((loc, index) => (
                <li
                  key={index}
                  onClick={() => handleLocationClick(loc)}
                  style={{ cursor: 'pointer', marginBottom: '1em' }}
                >
                  <strong>{loc.locationName}</strong> - {loc.city}, {loc.state}
                </li>
              ))}
            </ul>
          ) : (
            <p>No locations found.</p>
          )}

        </ContentHolder>
      </CentreRectangle>
    </div>
  );
};
export default Locations;
