import config from './config.json'

const baseUrl = `${config.domain[config.environment]}/${config.environment}`;
  
export const apiConfig = {
    baseUrl: baseUrl
  };
  