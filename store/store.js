import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './slice/authSlice'
import loaderSlice from './slice/loaderSlice'
import toastSlice from './slice/toastSlice'
import configSlice from './slice/configSlice'
import listingSlice from './slice/listingSlice'
import checkoutSlice from './slice/checkoutSlice'


const rootReducer = combineReducers({
    loader : loaderSlice,
    toast : toastSlice,
    
    config : configSlice,
    auth : authReducer,
    listing : listingSlice,
    checkout : checkoutSlice
})

const store = configureStore({
  reducer: rootReducer,
})

export default store