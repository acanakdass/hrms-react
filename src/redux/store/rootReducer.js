import { combineReducers } from "redux"
import favouritesReducer from './reducers/favouritesReducer';
const rootReducer = combineReducers({
   favorites: favouritesReducer
})

export default rootReducer;