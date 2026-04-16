import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector as useAppSelector } from "react-redux"
import commonSlice from "./slices/commonSlice"

const store = configureStore({
  reducer: {
    common: commonSlice,
  },
})

const rootReducer = combineReducers({
  common: commonSlice,
})

export type AppState = ReturnType<typeof rootReducer>
export const { dispatch } = store
export type AppDispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector

export default store
