import axios from 'axios';

const BASE_URL = 'https://api.uduakessien.com/api';

export const getJobs = () => {
  return axios.get(`${BASE_URL}/jobs?populate=*`).then(res => res.data);
}

export const getProjects = () => {
  return axios.get(`${BASE_URL}/projects?populate=*`).then(res => res.data);
}

export const getPublications = () => {
  return axios.get(`${BASE_URL}/blogs?populate=*`).then(res => res.data);
}

export const getAbout = () => {
  return axios.get(`${BASE_URL}/about?populate=*`).then(res => res.data);
}