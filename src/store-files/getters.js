export const showFunds = state => {
  /*let arr = state.funds.toString().split("")
  if(arr.length > 4){
    arr.splice(arr.length -3, 0, ",")
  }
  return `\$${arr.join("")}`*/

  return state.funds.toLocaleString()
}

export const showDropDown = state => {
  return state.showDropDown
}

export const getPortfolioArray = state => {
  return state.array.filter(el => {
    if(el.purchased){
      return el
    }
  })
}

export const getStocksArray = state => {
  return state.array
}


export const checkAuth = state => {
  return state.idToken !== null
}
