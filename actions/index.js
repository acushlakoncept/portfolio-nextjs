import axios from 'axios';

const BASE_URL = 'https://api.uduakessien.com/api';

export const getJobs = () => {
  return axios.get(`${BASE_URL}/jobs?populate=*`).then(res => res.data);
}

export const getProjects = () => {
  return axios.get(`${BASE_URL}/projects?sort[0]=date%3Adesc&populate=*`).then(res => res.data);
}

export const getPublications = () => {
  return axios.get(`${BASE_URL}/blogs?sort[0]=publishedAt%3Adesc&populate=*`).then(res => res.data);
}

export const getAbout = () => {
  return axios.get(`${BASE_URL}/about?populate=*`).then(res => res.data);
}
