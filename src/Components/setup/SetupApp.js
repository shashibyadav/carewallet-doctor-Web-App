import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const SetupConfig = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      // pass successful request
      (config) => config, 
      (error) => {
        if (error.message) {
          if (error.message.includes('Network Error')) {
            console.log('Network Error. Please check your internet connection.');
          } else if (error.message.includes('timeout')) {
            console.log('Timeout exceeded. The request took too long to complete.');
          } else {
            console.log(`Request Error: ${error.message}`);
          }
        } else {
          console.error('Request Error: An unknown error occurred during the request.');
        }
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
            case 404:
              console.log('Resource not found.');
              break;
            case 500:
              console.log('Please verify request information.');
              break;
            default:
              console.log(`Unexpected Error: ${status} - ${error.response.statusText}`);
              break;
          }
        } else if (error.request) {
          console.error('No response received from');
        } else {
          console.error('Unknown error');
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
