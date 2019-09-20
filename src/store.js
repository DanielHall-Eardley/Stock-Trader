import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from "@/store-files/actions.js"
import * as getters from "@/store-files/getters.js"
import * as mutations from "@/store-files/mutations.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    showDropDown: false,
    idToken: null,
    userId: null,
    array: [
      {
        stockName: "Holden",
        price: 300,
        quantity: 0,
        purchased: false
      },
      {
        stockName: "Ford",
        price: 120,
        quantity: 0,
        purchased: false
      },
      {
        stockName: "Dodge",
        price: 450,
        quantity: 0,
        purchased: false
      },
      {
        stockName: "Chevrolet",
        price: 250,
        quantity: 0,
        purchased: false
      }
    ]
  },
  getters,
  mutations,
  actions,
})
