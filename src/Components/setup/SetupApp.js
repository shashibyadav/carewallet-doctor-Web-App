import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const SetupConfig = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.params || !config.params.sessionID) {
          const currentRoute = location.pathname;

          if (currentRoute !== '/') {
            navigate('/');
          }
        }
        return config;
      },
      (error) => {
        console.error('Request Error:', error.message);
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response, 
      (error) => {
        if (error.response) {
          const { status } = error.response;
          const currentRoute = location.pathname;

          switch (status) {
            case 401:
              console.log('Unauthorized. Please login again.');
              if (currentRoute !== '/') {
                navigate('/');
              }
              break;
            case 403:
              console.log('Access is denied.');
              break;
              // add more standard html codes here
            default:
              console.log(`Unexpected Error: ${status} - ${error.response.statusText}`);
              break;
          }
        } else if (error.request) {
          console.log('No response error code received');
        } else {
          console.log('Unknown error');
        }

        return Promise.reject(error);
      }
    );

    // cleanup
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, location.pathname]);

  return null;
};

export default SetupConfig;
