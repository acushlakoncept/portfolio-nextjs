import axios from 'axios';

const BASE_URL = 'https://api.uduakessien.com/api';

export const getJobs = () => {
  return axios.get(`${BASE_URL}/jobs?populate=*`).then(res => res.data);
}

export const getProjects = () => {
  return axios.get(`${BASE_URL}/projects?populate=*`).then(res => res.data);
}