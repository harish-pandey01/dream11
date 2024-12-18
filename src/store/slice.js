import { createSlice } from '@reduxjs/toolkit'

export const teamslice = createSlice({
  name: 'myteam',
  initialState: {
    players:[]
  },
  reducers: {
      addplayer : (state, action) =>{
          state.players = [...state.players, action.payload];
      },
      removeplayer : (state, action) =>{
          state.players.splice(action.payload , 1)
      }
  }
})
export const { addplayer , removeplayer } = teamslice.actions
export default teamslice.reducer