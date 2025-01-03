import axiosInstance from './axiosInstance';

export const loadDoctorAccountData = async () => {
  const responseAcc = await axiosInstance.get('/doctor/dashboard/account-home.ns');
  const {
    providerName,
    npi,
    email,
    createdAt,
    activeStatus,
    locations,
  } = responseAcc.data.data;

  const formattedLocations = locations.map((location) => ({
    locationName: location.locationName,
    address: location.address,
    city: location.city,
    state: location.state,
    zipcode: location.zipcode,
    activeStatus: location.activeStatus,
    qrCodeInfo: {
      qrImageUrl: location.qrCodeInfo.qrImageUrl,
      activeStatus: location.qrCodeInfo.activeStatus,
      createdAt: location.qrCodeInfo.createdAt,
      updatedAt: location.qrCodeInfo.updatedAt,
    },
  }));

  return {
    providerName,
    npi,
    email,
    createdAt,
    activeStatus,
    locations: formattedLocations,
  };
};
