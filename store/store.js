import { combineReducers, configureStore } from '@reduxjs/toolkit'

import counterReducer from './slice/counter'
import authReducer from './slice/auth'


const rootReducer = combineReducers({
    counter : counterReducer,
    auth : authReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store