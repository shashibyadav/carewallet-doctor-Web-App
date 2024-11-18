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
      return { success: false };
    }
  } catch (error) {
    return { success: false, error };
  }
};
