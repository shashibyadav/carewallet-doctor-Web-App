import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const SetupConfig = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const currentRoute = location.pathname; 
        // redirect to login on axios error
        if (currentRoute !== '/') { 
          console.log('Authentication Error / Session Expired. Login again.');
          navigate('/'); 
        }
        return Promise.reject(error);
      }
    );
    // cleanup
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [navigate, location.pathname]);

  return null; 
};

export default SetupConfig;
