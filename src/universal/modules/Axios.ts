import axios from 'axios';

const axiosInstance = () => {
  const instance = axios.create({});
  
  instance.interceptors.request.use((request) => {
    console.log('Starting Request', request);
    return request;
  });
  
  instance.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
  });

  return axios;
};

export default axiosInstance();
