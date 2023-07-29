import { combineReducers, configureStore } from '@reduxjs/toolkit'

import counterReducer from './slice/counter'
import authReducer from './slice/authSlice'
import loaderSlice from './slice/loaderSlice'
import toastSlice from './slice/toastSlice'
import configSlice from './slice/configSlice'


const rootReducer = combineReducers({
    counter : counterReducer,
    auth : authReducer,
    loader : loaderSlice,
    toast : toastSlice,
    config : configSlice
})

const store = configureStore({
  reducer: rootReducer,
})

export default store