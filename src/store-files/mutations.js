export const endDay = state => {
  state.array = state.array.map(el => {
    let max = el.price + 5
    let min = el.price - 5
    el.price = Math.round(Math.random() * (max - min + 1)) + min
    return el
  })
}

export const toggleDropDown = (state, payload) => {
  if(payload){
    state.showDropDown = payload.value
    return
  }

  state.showDropDown = !state.showDropDown
}

export const buy = (state, payload) => {
  let quantity = parseInt(payload.quantity)

  if(Number.isNaN(quantity) || quantity <= 0){
    alert("You have entered an invalid quantity")
    return
  }

  state.array = state.array.map(el => {
    if(el.stockName === payload.name){
      if(el.price * quantity > state.funds){
        alert("You do not have the funds to buy " + quantity + " stocks")
      }else{
        state.funds -= (el.price * quantity)
        el.quantity += quantity

        if(el.quantity > 0){
          el.purchased = true
        }
      }
    }
    return el
  })
}

export const sell = (state, payload) => {
  let quantity = parseInt(payload.quantity)

  if(Number.isNaN(quantity) || quantity <= 0){
    alert("You have entered an invalid quantity")
    return
  }

  state.array = state.array.map(el => {
    if(el.stockName === payload.name){
      if(quantity > el.quantity){
        alert("You have entered a quantity higher than the amount of stocks you own")
      }else{
        state.funds += (el.price * quantity)
        el.quantity -= quantity

        if(el.quantity === 0){
          el.purchased = false
        }
      }
    }
    return el
  })
}

export const reloadSaveState = (state, payload) => {
  state.array = payload.array
  state.funds = payload.funds
}

export const updateLogin = (state, payload) => {
  state.idToken = payload.idToken
  state.userId = payload.userId
}

export const logout = state => {
  state.idToken = null
  state.userId = null
  localStorage.clear()
  console.log(state)
}
