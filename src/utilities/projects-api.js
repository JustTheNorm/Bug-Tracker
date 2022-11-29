import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function getAllProjects() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function removeProject(id) {
  console.log(id)
  return sendRequest (`${BASE_URL}/${id}`, `DELETE`)
}

export function newProject(userData) {
  // console.log(userData)
  return sendRequest(`${BASE_URL}/new`, 'POST', userData);
}