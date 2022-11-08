import * as usersAPI from './users-api';


export async function signUp(userData) {
  console.log(userData)
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    console.log(token)
    
    // Baby step by returning whatever is sent back by the server
    localStorage.setItem("token", token)
    return getUser()
  }

export async function login(userData) {
  console.log(userData)
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.login(userData);
    console.log(token)
    
    // Baby step by returning whatever is sent back by the server
    localStorage.setItem("token", token)
    return getUser()
  }


  export function getToken() {
    
    const token = localStorage.getItem("token")
    if(!token) return null

    const payload = JSON.parse(atob(token.split(".")[1]))
    console.log(payload)

    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem(`token`)
      return null
    }
    return token
  }

  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
    }

  export function logOut() {
      localStorage.removeItem('token')
    }

    export function checkToken() {
      // Just so that you don't forget how to use .then
      return usersAPI.checkToken()
        // checkToken returns a string, but let's
        // make it a Date object for more flexibility
        .then(dateStr => new Date(dateStr));
    }