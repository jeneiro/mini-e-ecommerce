import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import usersReducer from './user'
import cartReducer from './cart'
import authReducer from './auth'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter:counterReducer,
    users: usersReducer,
    cart: cartReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export  type AppDispatch = typeof store.dispatch