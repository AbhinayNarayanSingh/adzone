import { combineReducers, configureStore } from '@reduxjs/toolkit'

import counterReducer from './slice/counter'
import authReducer from './slice/authSlice'
import loaderSlice from './slice/loaderSlice'


const rootReducer = combineReducers({
    counter : counterReducer,
    auth : authReducer,
    loader : loaderSlice
})

const store = configureStore({
  reducer: rootReducer,
})

export default store