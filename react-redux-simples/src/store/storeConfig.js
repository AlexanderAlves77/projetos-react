import { createStore, combineReducers } from "redux"
import numerosReducers from "./reducers/numeros"

const reducers = combineReducers({
  numeros: numerosReducers,
/*  nomes: function(state, action) {
    console.log("Reducer Nomes...")
    console.log(state, ' ', action)
    return ['Alex', 'Kelvin', 'Sara']
  } */
})

function storeCongfig() {
  return createStore(reducers)
}

export default storeCongfig