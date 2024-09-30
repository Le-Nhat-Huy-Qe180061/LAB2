
import {combineReducers} from "redux"
import cartReducer from "./cart";



const allReducers = combineReducers({
    // ADD reducer in place
    cartReducer,
})

export default allReducers;