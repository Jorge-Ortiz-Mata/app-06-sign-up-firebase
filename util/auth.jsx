import axios from "axios"

const API_KEY = 'AIzaSyBURXquGQLyCtWC71D2PhXB2FKaSGRsq7U'
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export async function createUser(email, password){
  const response = await axios.post(SIGN_UP_URL, {email: email, password: password, returnSecureToken: true});
  return response;
}

export async function authenticateUser(email, password){
  const response = await axios.post(LOGIN_URL, {email: email, password: password, returnSecureToken: true});
  return response;
}
