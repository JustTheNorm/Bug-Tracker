import sendRequest from './send-request';

const BASE_URL = '/api/tickets';

export function getAllTickets() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function newTicket(userData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', userData);
}

export function updateTicket(id, ticketToUpdate){
  console.log(id)
  return sendRequest(`${BASE_URL}/update/${id}`, `PUT`, ticketToUpdate);
}