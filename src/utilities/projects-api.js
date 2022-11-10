import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function removeProject(id) {
  return sendRequest (`${BASE_URL}/delete`, `DELETE`, id)
}

export function newProject(userData) {
  // console.log(userData)
  return sendRequest(`${BASE_URL}/new`, 'POST', userData);
}