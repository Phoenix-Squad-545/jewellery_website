import { createSlice } from "@reduxjs/toolkit"

interface CommonState {
    count:number
//define your commonslice types
}

const initialState: CommonState = {
    count:0
//define your commonslice state
}

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    //define your actions
    increment:(state)=>{
      state.count += 1
    },
    decrement:(state)=>{
        state.count -= 1
      }
  },
})

export const {
decrement,increment
} = commonSlice.actions
export default commonSlice.reducer
