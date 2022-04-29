import { createSlice } from '@reduxjs/toolkit';


export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: []
  },
  reducers: {
    //add functions that will manipulate the state
    addFavourite: (state, action) => {
        state.value.push(action.payload);
    },
    removeFavourite: (state, action) => {
        state.value.pop(action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer