import customHTTP from "@/axios-auth.js"
import axios from "axios"

export const setLogOutTimer = ({commit}, time) => {
  setTimeout(() => {
    commit("logout")
  }, time * 1000)
}

export const save = ({commit, state, getters}) => {
  let data = {
      funds: getters.showFunds,
      array: getters.getStocksArray
  }

  axios.put(`https://stock-trader-d2a27.firebaseio.com/users/${state.userId}.json?auth=${state.idToken}`, data)
  .then(res => {
    console.log(res)
    commit("toggleDropDown", {value: false})
  })
  .catch(err => {
    alert("There was a problem saving your data")
  })
}

export const load = ({commit, state}) => {

  axios.get(`https://stock-trader-d2a27.firebaseio.com/users/${state.userId}.json?auth=${state.idToken}`)
  .then(res => {
    commit("reloadSaveState", res.data)
    commit("toggleDropDown", {value: false})
  })
  .catch(err => {
    alert("There was a problem loading your data")
  })
}

export const signUp = ({commit}, payload) => {
  payload.returnSecureToken = true
  customHTTP.post("/accounts:signUp?key=AIzaSyD9yoCH-drvcgjO51w4Yi93j2obWJdjc5U", payload)
  .then(res => {
    const now = new Date()
    const expDate = new Date(now.getTime() + res.data.expiresIn * 1000)
    localStorage.setItem("token", res.data.idToken)
    localStorage.setItem("user", res.data.localId)
    localStorage.setItem("expiration", expDate)
    commit("updateLogin", {idToken: res.data.idToken, userId: res.data.localId})
    dispatch("setLogOutTimer", res.data.expiresIn)
  })
  .catch(err => {
    alert("This Email and Password are already in use")
  })
}

export const signIn = ({commit, dispatch}, payload) => {
  payload.returnSecureToken = true
  customHTTP.post("/accounts:signInWithPassword?key=AIzaSyD9yoCH-drvcgjO51w4Yi93j2obWJdjc5U", payload)
  .then(res => {
    const now = new Date()
    const expDate = new Date(now.getTime() + res.data.expiresIn * 1000)
    localStorage.setItem("token", res.data.idToken)
    localStorage.setItem("user", res.data.localId)
    localStorage.setItem("expiration", expDate)
    let authData = {idToken: res.data.idToken, userId: res.data.localId}
    commit("updateLogin", authData)
    dispatch("setLogOutTimer", res.data.expiresIn)
  })
  .catch(err => {
      alert("Incorrect Email or Password")
  })
}

export const autoLogin = ({commit}) => {
  const token = localStorage.getItem("token")
  if(!token){
    return
  }

  const expDate = localStorage.getItem("expiration")
  const now = new Date()
  if(now > expDate){
    return
  }

  const userId = localStorage.getItem("user")
  commit("updateLogin", {idToken: token, userId: userId})
}
