import { createSlice } from '@reduxjs/toolkit';

const getIndex = (item, arr) => {
  // findIndex() in array from when argument is first true
  // find the index of where the item from the parameter is in the array
  return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    value: []
  },
  reducers: {
    // Add functions that will manipulate the state
    addFavourite: (state, action) => {
        console.log(state.value);
        console.log(action.payload);
        state.value = [...state.value, action.payload];
    },
    removeFavourite: (state, action) => {
        const favesArray = state.value;
        // splice(`insert at index`, `number of elements to replace`, `value to insert`)
        // This splice matches the movie index in the favesArray and replaces 1 element with value=blank
        // When value parameter is not declared, splice removes the targeted element from array
        // therefore, removes targeted movie object from favesArray
        console.log(action.payload)
        console.log(state.value)
        favesArray.splice(getIndex(action.payload, state.value), 1);
        state.value = favesArray;
        console.log('removing fav...')
    }
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer