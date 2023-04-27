import axios from "axios";

const URL = "http://localhost:5000";

function postNewUser(body) {
  const promise = axios.post(`${URL}/users/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${URL}/users/sign-in`, body);
  return promise;
}

export { postNewUser, postLogin };
