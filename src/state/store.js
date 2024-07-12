import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './theme/themeSlice'
import adminReducer from './adminLogin/adminSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        admin: adminReducer
    },
})