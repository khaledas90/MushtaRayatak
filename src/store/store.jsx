import { configureStore } from '@reduxjs/toolkit'
import User from './User'
const store = configureStore({
    reducer: {
        user: User
    },
})



export default store