import axiosInstance from './axiosInstance';

export const performLogin = async (email, password) => {
  try {
    const response = await axiosInstance.post('/doctor-authentication/doctor-login.ns', {
      email: email,
      password: password,
    });

    if (response.data.success) {
      return { success: true, data: response.data };
    } else {
      console.log(response.data);
      console.log('Authentication failed on the server.');
      return { success: false };
    }
  } catch (error) {
    console.log('An error occurred during login:', error);
    return { success: false, error };
  }
};
