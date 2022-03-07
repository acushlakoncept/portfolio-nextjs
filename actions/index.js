import axios from 'axios';

const BASE_URL = 'https://api.uduakessien.com/api';

export const getJobs = () => {
  return axios.get(`${BASE_URL}/jobs?populate=*`).then(res => res.data);
}