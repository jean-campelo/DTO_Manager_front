import axios from "axios";

const URL = "http://localhost:5000";

function postNewUser(body) {
  return axios.post(`${URL}/users/sign-up`, body);
}

function postLogin(body) {
  return axios.post(`${URL}/users/sign-in`, body);
}

function getConsultsByDate(date) {
  return axios.get(`${URL}/consults/${date}`);
}

function getConsultsWeek(date) {
  return axios.get(`${URL}/consults/week/${date}`);
}

function getConsultsMonth(date) {
  return axios.get(`${URL}/consults/month/${date}`);
}

export {
  postNewUser,
  postLogin,
  getConsultsByDate,
  getConsultsWeek,
  getConsultsMonth,
};
