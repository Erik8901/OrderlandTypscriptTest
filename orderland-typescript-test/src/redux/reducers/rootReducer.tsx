import { combineReducers } from 'redux'

import counterReducer from './counterReducer'

const rootReducer = combineReducers({
    count: counterReducer
   
})
export type CountState = ReturnType<typeof rootReducer>
export default rootReducer;