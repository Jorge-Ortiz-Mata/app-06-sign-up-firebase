import axios from "axios"
const API_KEY = 'AIzaSyBURXquGQLyCtWC71D2PhXB2FKaSGRsq7U'
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

export async function createUser(email, password){
  const response = await axios.post(URL, {email: email, password: password, returnSecureToken: true});
}
