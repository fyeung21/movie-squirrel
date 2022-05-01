import { createSlice } from '@reduxjs/toolkit';


export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: []
  },
  reducers: {
    //add functions that will manipulate the state
    addFavourite: (state, action) => {
        console.log(state.value);
        console.log(action.payload);
        state.value = [...state.value, action.payload];
    },
    removeFavourite: (state, action) => {
        state.value.pop(action.payload);
        console.log('removing fav...TO DO!!!')
    }
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer